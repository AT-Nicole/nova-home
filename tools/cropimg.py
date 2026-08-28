#!/usr/bin/env python3
"""Crop the bottom band (watermark strip) off a generated image.
Usage: python tools/cropimg.py <image> [percent]
"""
import sys, os
from PIL import Image

def main():
    path = sys.argv[1]
    pct = float(sys.argv[2]) if len(sys.argv) > 2 else 8.0
    img = Image.open(path)
    w, h = img.size
    cut = int(h * pct / 100)
    out = img.crop((0, 0, w, h - cut))
    out.save(path, quality=92)
    print(f"CROPPED {path}: {w}x{h} -> {out.size[0]}x{out.size[1]}")

if __name__ == "__main__":
    main()
