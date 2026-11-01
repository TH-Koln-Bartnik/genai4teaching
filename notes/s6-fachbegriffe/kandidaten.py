#!/usr/bin/env python3
"""S6: Kandidatenliste Fachbegriffe/Akronyme je Kapitel.
Aufruf: python3 kandidaten.py <repo> <out.csv>
"""
import csv, re, sys, pathlib

repo = pathlib.Path(sys.argv[1]); out = sys.argv[2]
FILES = [("Vorwort","vorwort.qmd"),("Kap1","kapitel01.qmd"),("Kap2","kapitel02.qmd"),("Kap3","kapitel03.qmd"),
         ("Kap4","kapitel04.qmd"),("Kap5","kapitel05.qmd"),("Kap6","kapitel06-fallbeispiele.qmd"),
         ("AnhA","kapitel06-appendix01-prompt-ueberblick.qmd"),("AnhB","kapitel07-appendix02-prompt-sammlung.qmd"),
         ("AnhC","kapitel08-appendix03-rollenspiele-simulationen.qmd"),("AnhD","kapitel09-appendix04-fortgeschrittene-nutzungsformen.qmd"),
         ("Primer","anhang-primer.qmd"),("Loesungen","kapitel10-appendix05-loesungshinweise.qmd")]

def clean_lines(text):
    lines = text.split("\n"); res = []; incode = False; inyaml = False
    for i, l in enumerate(lines, 1):
        if i == 1 and l.strip() == "---": inyaml = True; res.append((i, "")); continue
        if inyaml:
            if l.strip() == "---": inyaml = False
            res.append((i, "")); continue
        if l.strip().startswith("```"): incode = not incode; res.append((i, "")); continue
        if incode or l.lstrip().startswith(("<iframe", "<!--", "<div", "</div", "<script", "{{<")):
            res.append((i, "")); continue
        l = re.sub(r"\[@[^\]]*\]|@[\w:-]+", "", l)        # Zitate, Querverweise
        l = re.sub(r"<https?://[^>]*>|https?://\S+", "", l)  # URLs
        l = re.sub(r"\{[#.][^}]*\}", "", l)                 # Attribute
        res.append((i, l))
    return res

gloss = []
g = (repo/"glossar.qmd").read_text(encoding="utf-8").split("\n")
for a, b in zip(g, g[1:]):
    if b.startswith(":   ") and a.strip():
        gloss.append(a.strip())

ACR = re.compile(r"\b([A-ZÄÖÜ][A-Z0-9ÄÖÜ]{1,6})(s?)\b")
STOP = {"KI","II","III","IV","US","EU","OK","PDF","URL","HTML","QR","TH","NRW","DE","EN","FAQ","CC","BY","SA","ID","AG","GmbH","USA","UK","IT","CEO","DOI","ISBN","PC","TV","IQ","PISA"}
rows = []
for kap, fn in FILES:
    p = repo/fn
    if not p.exists(): continue
    L = clean_lines(p.read_text(encoding="utf-8"))
    seen = set()
    for no, l in L:
        if not l.strip(): continue
        # vorhandene Muster deutsch (*englisch*)
        for m in re.finditer(r"([\wÄÖÜäöüß-]+(?: [\wÄÖÜäöüß-]+){0,3}) \(\*([^*()]{3,60})\*[,)]", l):
            k = ("vorh", m.group(2).lower())
            if k in seen: continue
            seen.add(k); rows.append([kap, no, m.group(1), m.group(2), "", "ja (dt. + *engl.*)", "Muster"])
        # kursiv eingeführte Begriffe
        for m in re.finditer(r"(?<![*\w])\*([^*\n]{3,50})\*(?![*\w])", l):
            t = m.group(1).strip()
            if len(t.split()) > 5 or t.lower() in {x[3].lower() for x in rows if x[0]==kap}: continue
            k = ("it", t.lower())
            if k in seen: continue
            seen.add(k)
            before = l[max(0, m.start()-2):m.start()]
            rows.append([kap, no, "", t, "", "Klammer" if before.endswith("(") else "nein", "kursiv"])
        # fett gesetzte Begriffe
        for m in re.finditer(r"\*\*([^*\n]{3,45})\*\*", l):
            t = m.group(1).strip()
            if len(t.split()) > 4 or t.endswith((":", ".", "?")): continue
            k = ("fett", t.lower())
            if k in seen: continue
            seen.add(k)
            after = l[m.end():m.end()+70]
            rows.append([kap, no, t, "", "", "ja" if re.match(r"\s*\(\*", after) else "nein", "fett"])
        # Akronyme
        for m in ACR.finditer(l):
            a = m.group(1)
            if a in STOP or a.isdigit(): continue
            k = ("acr", a)
            if k in seen: continue
            seen.add(k)
            ctx = l[max(0, m.start()-90):m.end()+110]
            expl = "ja?" if re.search(r"\(" + a + r"\)|" + a + r"s? \(|kurz " + a, ctx) else "nein"
            rows.append([kap, no, "", "", a, expl, "Akronym"])
    # Glossarbegriffe: erstes Auftreten im Kapitel
    full = "\n".join(l for _, l in L)
    for gt in gloss:
        key = re.split(r"[ ,(]", gt)[0]
        if len(key) < 3: continue
        for no, l in L:
            if re.search(r"\b" + re.escape(key), l):
                rows.append([kap, no, gt, "", "", "", "Glossar-Erstnennung"]); break

with open(out, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, delimiter=";")
    w.writerow(["Kapitel", "Zeile", "Begriff (dt./fett)", "englisch/kursiv", "Akronym", "erklaert/vorhanden", "Typ"])
    w.writerows(rows)
from collections import Counter
c = Counter((r[0], r[6]) for r in rows)
for kap, _ in FILES:
    print(kap, {t: c[(kap, t)] for t in ["Muster", "kursiv", "fett", "Akronym", "Glossar-Erstnennung"]})
