#!/usr/bin/env python3
"""Wendet ALT/NEU-Blöcke aus einer Vorschlagsdatei auf eine .qmd-Datei an.
Aufruf: python3 anwenden.py <vorschlag.md> <ziel.qmd> <ausschluss-ids,komma> [extra.tsv]
"""
import re, sys
vor, ziel, aus = sys.argv[1], sys.argv[2], set(filter(None, sys.argv[3].split(",")))
t = open(vor, encoding="utf-8").read()
paare = []
for m in re.finditer(r"\*\*([A-Z][A-Z0-9]*-\d+[a-z]?)\*\*.*?\nALT: `(.+?)`\s*\nNEU: `(.+?)`", t, re.S):
    paare.append((m.group(1), m.group(2), m.group(3)))
if len(sys.argv) > 4:
    for z in open(sys.argv[4], encoding="utf-8"):
        if z.strip():
            i, a, n = z.rstrip("\n").split("\t"); paare.append((i, a, n))
s = open(ziel, encoding="utf-8").read()
ok = 0
for i, a, n in paare:
    if i in aus: print("übersprungen", i); continue
    c = s.count(a)
    if c != 1: print("FEHLER", i, "Treffer:", c, a); continue
    s = s.replace(a, n); ok += 1
open(ziel, "w", encoding="utf-8").write(s)
print(f"{ok} von {len(paare)} angewandt")
