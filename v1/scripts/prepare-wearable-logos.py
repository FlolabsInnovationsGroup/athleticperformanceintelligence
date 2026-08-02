"""Strip white backgrounds from tier-2 wearable product photos."""
from __future__ import annotations

import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SECTIONS = ROOT / "public" / "images" / "sections"
OUT = ROOT / "public" / "images" / "wearables"
OUT.mkdir(parents=True, exist_ok=True)

WEARABLES = {
    "garmin": "tier-2-garmin.webp",
    "apple-watch": "tier-2-apple-watch.webp",
    "whoop": "tier-2-whoop.webp",
    "polar": "tier-2-polar.webp",
}


def remove_white_bg(src: Path, dst: Path, threshold: int = 240) -> None:
    im = Image.open(src).convert("RGBA")
    px = im.load()
    width, height = im.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = px[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                px[x, y] = (r, g, b, 0)
    im.save(dst, "PNG")


def main() -> None:
    for key, filename in WEARABLES.items():
        remove_white_bg(SECTIONS / filename, OUT / f"{key}.png")

    catapult_src = OUT / "_catapult-src.jpg"
    if catapult_src.exists():
        remove_white_bg(catapult_src, OUT / "catapult.png", threshold=235)

    print(f"Wrote wearable device PNGs to {OUT}")


if __name__ == "__main__":
    main()
