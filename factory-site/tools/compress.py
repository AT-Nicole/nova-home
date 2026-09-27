#!/usr/bin/env python3
"""Resize + compress images for web (heroes -> 1600w, products -> 800w, JPEG q=80)."""
import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..", "images")
HERO = {"hero-factory.jpg", "hero-line.jpg", "hero-kitchen.jpg", "about-qc.jpg", "about-workshop.jpg", "why-us.jpg"}

for fn in os.listdir(ROOT):
    if not fn.lower().endswith(".jpg"):
        continue
    path = os.path.join(ROOT, fn)
    img = Image.open(path)
    target = 1600 if fn in HERO else 800
    if img.width > target:
        h = int(img.height * target / img.width)
        img = img.resize((target, h), Image.LANCZOS)
    img.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    print(f"OK {fn}: {img.size[0]}x{img.size[1]}")
