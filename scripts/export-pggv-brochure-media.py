#!/usr/bin/env python3
"""Export JPEG stills from PGGV Brochure.pdf -> public/media/brochure/.

These JPEG page exports are not wired into the Next.js app (the site uses WebPs under
public/media/official/). Use this script as a staging step; promote selects manually if needed.

Requires: pip install pymupdf

Usage:
  python3 scripts/export-pggv-brochure-media.py /path/to/PGGV\\ Brochure.pdf
"""
from __future__ import annotations

import os
import sys

import fitz  # type: ignore


def main() -> None:
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir = os.path.join(repo, "public", "media", "brochure")
    os.makedirs(out_dir, exist_ok=True)

    pdf = (
        sys.argv[1]
        if len(sys.argv) > 1
        else "/Users/ayushdixit/Documents/Freelance Workspace/product-documents/PGGV Brochure.pdf"
    )

    pages = [6, 11, 14, 18, 25, 30, 36, 42, 47, 55, 62, 72]
    max_w = 1400

    doc = fitz.open(pdf)
    try:
        for i in pages:
            if i >= doc.page_count:
                continue
            page = doc[i]
            z = max_w / page.rect.width
            mat = fitz.Matrix(z, z)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            path = os.path.join(out_dir, f"pggv-p{i:03d}.jpg")
            pix.save(path, jpg_quality=82)
            print("wrote", path)
    finally:
        doc.close()


if __name__ == "__main__":
    main()
