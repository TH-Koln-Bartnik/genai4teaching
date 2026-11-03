"""Phase 1: Verweise auf alte Kapiteldateien auf die neuen Dateien umsetzen.

Links mit Anker (kapitel04.html#sec-coding) folgen dem Anker: Das Skript sucht die neue Datei,
in der die ID steht. Links ohne Anker folgen der Kapitelzuordnung (altes Kap. 4 -> kapitel06-rollen).
Ausgenommen: docs/ (wird neu gerendert), notes/, reviews/, _archiv-anhaenge/ und die
Weiterleitungsseiten selbst. Druckt die Ankertabelle als JSON für die Weiterleitungen.

Aufruf: python3 scripts/umzug/verweise_dateien.py [--schreiben]
"""
import json
import os
import re
import sys

KAPITEL = {
    "kapitel01": "kapitel01-einleitung",
    "kapitel02": "kapitel02-grundlagen",
    "kapitel03": "kapitel04-lernmechanismen",
    "kapitel04": "kapitel06-rollen",
    "kapitel05": "kapitel05-4d-phasen",
    "kapitel06-fallbeispiele": "kapitel07-artefakte",
}
NEUE = list(KAPITEL.values()) + ["kapitel03-automation", "kapitel07-appendix02-prompt-sammlung",
                                  "kapitel10-appendix05-loesungshinweise", "index", "glossar"]
ALT_ANKER = list(KAPITEL) + ["kapitel07-appendix02-prompt-sammlung"]

anker = {}
for n in NEUE:
    s = open(n + ".qmd", encoding="utf-8").read()
    for m in re.finditer(r"\{[^}\n]*?#([A-Za-z][\w:-]*)", s):
        anker.setdefault(m.group(1), n)
    for m in re.finditer(r'\bid="([A-Za-z][\w-]*)"', s):
        anker.setdefault(m.group(1), n)

LINK = re.compile(r"(?<![\w-])(" + "|".join(re.escape(a) for a in sorted(ALT_ANKER, key=len, reverse=True))
                  + r")\.(qmd|html)(#([A-Za-z$][\w:${}.-]*))?")
AUSNAHMEN = ("./docs", "./notes", "./reviews", "./_archiv-anhaenge", "./.git", "./node_modules",
             "./scripts/umzug", "./weiterleitungen")
ENDUNGEN = (".qmd", ".html", ".py", ".mjs", ".cjs", ".js", ".json", ".lua", ".md", ".svg", ".yml")

offen, zaehler = [], 0


def ersetze(m, datei):
    global zaehler
    alt, endung, _, a = m.group(1), m.group(2), m.group(3), m.group(4)
    if a and not a.startswith("$") and a in anker:
        ziel = anker[a]
    elif alt in KAPITEL:
        ziel = KAPITEL[alt]
        if a and not a.startswith("$"):
            offen.append((datei, m.group(0)))
    else:
        return m.group(0)  # Anhang A ohne verschobenen Anker: bleibt
    neu = ziel + "." + endung + (m.group(3) or "")
    if neu != m.group(0):
        zaehler += 1
    return neu


schreiben = "--schreiben" in sys.argv
geaendert = []
for wurzel, ordner, dateien in os.walk("."):
    if wurzel.startswith(AUSNAHMEN):
        ordner[:] = []
        continue
    for d in dateien:
        p = os.path.join(wurzel, d)
        if not d.endswith(ENDUNGEN) or p.startswith(AUSNAHMEN) or d in ("package-lock.json", "references.json", "search.json"):
            continue
        try:
            s = open(p, encoding="utf-8").read()
        except UnicodeDecodeError:
            continue
        t = LINK.sub(lambda m: ersetze(m, p), s)
        if t != s:
            geaendert.append(p)
            if schreiben:
                open(p, "w", encoding="utf-8").write(t)

print(f"{zaehler} Verweise in {len(geaendert)} Dateien", "(geschrieben)" if schreiben else "(Probelauf)")
for p in geaendert:
    print("  ", p)
if offen:
    print("Anker nicht gefunden, nach Kapitelzuordnung gesetzt:")
    for x in offen:
        print("  ", x)
json.dump(anker, open("/tmp/anker.json", "w"), ensure_ascii=False, indent=0)
