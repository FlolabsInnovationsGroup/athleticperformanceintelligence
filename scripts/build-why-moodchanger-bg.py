"""Composite section background: dark stadium silhouettes + faint data lines."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
CANDIDATES = ROOT / "public" / "images" / "sections" / "_candidates"
OUT = ROOT / "public" / "images" / "sections" / "why-moodchanger.webp"

WIDTH = 1920
HEIGHT = 1080


def load_rgb(path: Path, size: tuple[int, int]) -> Image.Image:
    img = Image.open(path).convert("RGB")
    return ImageOps_fit(img, size)


def ImageOps_fit(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    """Cover-crop resize."""
    target_w, target_h = size
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = img.resize((int(src_w * scale), int(src_h * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def dark_gradient(size: tuple[int, int]) -> Image.Image:
    w, h = size
    grad = Image.new("RGBA", size)
    draw = ImageDraw.Draw(grad)
    for y in range(h):
        t = y / (h - 1)
        # Soft navy vignette — keep stadium + data lines visible under section scrim
        alpha = int(50 + 55 * (0.5 - abs(t - 0.42)))
        draw.line([(0, y), (w, y)], fill=(10, 16, 28, min(110, alpha)))
    return grad


def main() -> None:
    stadium = load_rgb(CANDIDATES / "why-moodchanger-stadium.jpg", (WIDTH, HEIGHT))
    analytics = load_rgb(CANDIDATES / "why-moodchanger-analytics.jpg", (WIDTH, HEIGHT))

    # Mood: dusk stadium silhouettes — dark but still readable behind scrim
    stadium = ImageEnhance.Brightness(stadium).enhance(0.62)
    stadium = ImageEnhance.Color(stadium).enhance(0.58)
    stadium = ImageEnhance.Contrast(stadium).enhance(1.22)

    # Data lines: heavy blur + screen blend at low opacity
    data = analytics.filter(ImageFilter.GaussianBlur(radius=14))
    data = ImageEnhance.Brightness(data).enhance(0.65)
    data_rgba = data.convert("RGBA")
    data_rgba.putalpha(115)

    base = stadium.convert("RGBA")
    base = Image.alpha_composite(base, data_rgba)
    base = Image.alpha_composite(base, dark_gradient((WIDTH, HEIGHT)))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    base.convert("RGB").save(OUT, "WEBP", quality=85, method=6)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
