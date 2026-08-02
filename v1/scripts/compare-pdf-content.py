#!/usr/bin/env python3
"""Audit site-content.ts strings against the presentation PDF text.

Classifies each string as:
- EXACT: found verbatim (after stripping zero-width chars / whitespace)
- FORMATTING: same words in same order in the PDF, only punctuation differs
- REWORDED/NOT IN PDF: words differ or were rearranged/combined
Writes a UTF-8 report to docs/pdf-content-audit.md.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PDF_JSON = ROOT / "docs" / "pdf-text-extract.json"
SITE_CONTENT = ROOT / "src" / "content" / "site-content.ts"
REPORT = ROOT / "docs" / "pdf-content-audit.md"


def strip_invisible(text: str) -> str:
    text = re.sub(r"[\u200b-\u200f\u2060\ufeff]", "", text)
    return text.replace("\u00a0", " ")


def norm_exact(text: str) -> str:
    text = strip_invisible(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def norm_words(text: str) -> str:
    """Lowercase, drop all punctuation, keep word sequence only."""
    text = strip_invisible(text).lower()
    text = text.replace("\u2019", "'").replace("\u2018", "'")
    text = re.sub(r"[^a-z0-9+/&']+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def main() -> None:
    pages = json.loads(PDF_JSON.read_text(encoding="utf-8"))
    pdf_full = "\n".join(page["text"] for page in pages)
    pdf_exact = norm_exact(pdf_full)
    pdf_words = norm_words(pdf_full)

    content = SITE_CONTENT.read_text(encoding="utf-8")

    # Find strings with their approximate line numbers
    results = []
    for match in re.finditer(r'"((?:[^"\\]|\\.)*)"', content):
        raw = match.group(1)
        try:
            s = raw.encode().decode("unicode_escape").encode("latin-1", "ignore").decode(
                "utf-8", "ignore"
            ) if "\\u" in raw else raw
        except Exception:
            s = raw
        line_no = content[: match.start()].count("\n") + 1
        results.append((line_no, s))

    skip_prefixes = ("/", "http", "#")
    checked = []
    for line_no, s in results:
        if len(s) <= 12 or s.startswith(skip_prefixes):
            continue
        if re.fullmatch(r"[a-z0-9-]+", s):  # ids like tier-1-deliverables
            continue
        checked.append((line_no, s))

    exact, formatting, reworded = [], [], []
    for line_no, s in checked:
        if norm_exact(s) in pdf_exact:
            exact.append((line_no, s))
        elif norm_words(s) and norm_words(s) in pdf_words:
            formatting.append((line_no, s))
        else:
            reworded.append((line_no, s))

    lines = []
    lines.append("# PDF Content Audit")
    lines.append("")
    lines.append(f"Checked {len(checked)} strings from site-content.ts")
    lines.append(f"- Exact match: {len(exact)}")
    lines.append(f"- Formatting only (same words, different punctuation): {len(formatting)}")
    lines.append(f"- Reworded / combined / not in PDF: {len(reworded)}")
    lines.append("")
    lines.append("## Reworded / combined / not in PDF")
    lines.append("")
    for line_no, s in reworded:
        lines.append(f"- L{line_no}: {s}")
    lines.append("")
    lines.append("## Formatting-only differences")
    lines.append("")
    for line_no, s in formatting:
        lines.append(f"- L{line_no}: {s}")

    REPORT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {REPORT}")
    print(f"exact={len(exact)} formatting={len(formatting)} reworded={len(reworded)}")


if __name__ == "__main__":
    main()
