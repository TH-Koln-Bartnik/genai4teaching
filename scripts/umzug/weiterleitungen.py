"""Weiterleitungsseiten für die Adressen vor der neuen Gliederung (Phase 1, 04.11.2026).

Für jede alte Kapiteldatei entsteht im Repo-Wurzelverzeichnis eine gleichnamige .html-Seite
(kapitel02.html usw.), die `_quarto.yml` unter `resources` nach docs/ kopiert. Die Seite liest den
Anker der aufgerufenen Adresse, schlägt ihn in der Ankertabelle nach und springt an die neue
Stelle; ohne Anker oder bei unbekanntem Anker auf das Kapitel, das den Hauptteil aufgenommen hat.
Die Ankertabelle enthält alle IDs, die vor dem Umzug in der alten Datei standen.

Aufruf: python3 scripts/umzug/weiterleitungen.py [Commit vor dem Umzug, Standard 808c52f]
"""
import html
import json
import re
import subprocess
import sys

VOR = sys.argv[1] if len(sys.argv) > 1 else "808c52f"
ALT = {  # alte Datei -> (Hauptziel, Nummer alt)
    "kapitel01": ("kapitel01-einleitung", 1),
    "kapitel02": ("kapitel02-grundlagen", 2),
    "kapitel03": ("kapitel04-lernmechanismen", 3),
    "kapitel04": ("kapitel06-rollen", 4),
    "kapitel05": ("kapitel05-4d-phasen", 5),
    "kapitel06-fallbeispiele": ("kapitel07-artefakte", 6),
}
NEU = ["kapitel01-einleitung", "kapitel02-grundlagen", "kapitel03-automation", "kapitel04-lernmechanismen",
       "kapitel05-4d-phasen", "kapitel06-rollen", "kapitel07-artefakte"]
ID = re.compile(r"\{[^}\n]*?#([A-Za-z][\w:-]*)|\bid=\"([A-Za-z][\w-]*)\"")


def ids(text):
    return [a or b for a, b in ID.findall(text)]


titel, ort = {}, {}
for n in NEU:
    s = open(n + ".qmd", encoding="utf-8").read()
    titel[n] = re.match(r"# (.*?) \{#", s).group(1)
    for i in ids(s):
        ort.setdefault(i, n)


def seite(alt, haupt, nr, tabelle):
    ziele = sorted({v[:-5] for v in tabelle.values()} | {haupt}, key=NEU.index)
    liste = "\n".join(f'<li><a href="{z}.html">Kapitel {NEU.index(z) + 1}: {html.escape(titel[z])}</a></li>' for z in ziele)
    js = json.dumps(tabelle, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    return f"""<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Umgezogen: früheres Kapitel {nr} – Generative KI als Hilfe zum Lehren und Lernen</title>
<link rel="canonical" href="{haupt}.html">
<script>
/* Weiterleitung nach der neuen Gliederung (04.11.2026); erzeugt von scripts/umzug/weiterleitungen.py. */
(function () {{
  var t = {js};
  var a = decodeURIComponent(location.hash.slice(1));
  location.replace((t[a] || "{haupt}.html") + (a ? "#" + encodeURIComponent(a) : ""));
}})();
</script>
<noscript><meta http-equiv="refresh" content="0; url={haupt}.html"></noscript>
<style>body{{font-family:system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;line-height:1.5}}</style>
</head>
<body>
<p>Das Buch ist seit November 2026 neu gegliedert. Die Inhalte des früheren Kapitels {nr} stehen jetzt hier:</p>
<ul>
{liste}
</ul>
<p><a href="index.html">Zur Startseite</a></p>
</body>
</html>
"""


gesamt = {}
for alt, (haupt, nr) in ALT.items():
    quelle = subprocess.check_output(["git", "show", f"{VOR}:{alt}" + (".qmd")], text=True)
    tabelle = {}
    for i in ids(quelle):
        if i not in ort:
            sys.exit(f"Anker {i} aus {alt} nicht gefunden")
        tabelle[i] = ort[i] + ".html"
    open(alt + ".html", "w", encoding="utf-8").write(seite(alt, haupt, nr, tabelle))
    gesamt[alt] = tabelle
    abw = {k: v for k, v in tabelle.items() if v != haupt + ".html"}
    print(f"{alt}.html: {len(tabelle)} Anker, davon {len(abw)} nicht im Hauptziel {haupt}")

json.dump(gesamt, open("scripts/umzug/ankertabelle.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1, sort_keys=True)
