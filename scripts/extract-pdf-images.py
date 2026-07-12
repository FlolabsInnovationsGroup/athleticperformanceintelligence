"""Extract embedded presentation images from the API PDF and save as WebP.

Only extracts images embedded in slides — never full-page slide renders.
Text-only slides are omitted; add supporting backgrounds manually in
public/images/sections/ and section-images.ts when ready.
"""
from __future__ import annotations

import io
import json
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "docs" / "Athletic-Performance-Intelligence-Hardware-Agnostic.pdf"
OUT_DIR = ROOT / "public" / "images" / "sections"

# Embedded image picks: section_key -> (page, image_index among non-skipped)
EMBEDDED = {
    "moodchanger": (2, 1),
    "tier-1": (9, 1),
    "tier-1-deliverables": (10, 1),
    "tier-2": (12, 1),
    # tier-2-dashboards: manually curated blurred analytics background (see _candidates/dashboard-analytics.jpg)
    # tier-3: manually curated sports strategy workshop (see _candidates/tier-3-coaching-strategy.jpg)
    "caipo": (20, 1),
}


def is_watermark(w: int, h: int) -> bool:
    return w == h == 1000 or w == h == 200


def page_images(page: fitz.Page) -> list[tuple[int, bytes, str, int, int]]:
    items: list[tuple[int, bytes, str, int, int]] = []
    for img in page.get_images(full=True):
        xref = img[0]
        info = page.parent.extract_image(xref)
        w, h = info["width"], info["height"]
        if is_watermark(w, h):
            continue
        items.append((xref, info["image"], info["ext"], w, h))
    return items


def to_webp(data: bytes, dest: Path) -> None:
    img = Image.open(io.BytesIO(data))
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=85, method=6)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest: dict[str, str] = {}

    doc = fitz.open(PDF)

    for key, (page_num, idx) in EMBEDDED.items():
        page = doc[page_num - 1]
        imgs = page_images(page)
        if idx > len(imgs):
            raise RuntimeError(f"{key}: image index {idx} not found on page {page_num}")
        _, data, _, _, _ = imgs[idx - 1]
        dest = OUT_DIR / f"{key}.webp"
        to_webp(data, dest)
        manifest[key] = f"/images/sections/{key}.webp"

    # Tier 2 device flow: wearable logos (inline content, not section backgrounds)
    page = doc[12]
    imgs = page_images(page)
    wearable_keys = ["garmin", "apple-watch", "whoop", "catapult", "polar"]
    for i, wkey in enumerate(wearable_keys):
        if i < len(imgs):
            dest = OUT_DIR / f"tier-2-{wkey}.webp"
            to_webp(imgs[i][1], dest)
            manifest[f"tier-2-{wkey}"] = f"/images/sections/tier-2-{wkey}.webp"

    # Coming soon product mockups (inline content on the slide)
    page = doc[20]
    imgs = page_images(page)
    for i, img in enumerate(imgs[:4]):
        dest = OUT_DIR / f"coming-soon-{i + 1}.webp"
        to_webp(img[1], dest)
        manifest[f"coming-soon-{i + 1}"] = f"/images/sections/coming-soon-{i + 1}.webp"

    with open(OUT_DIR / "manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"Wrote {len(manifest)} images to {OUT_DIR}")


if __name__ == "__main__":
    main()
