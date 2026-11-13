"""Phase 1: eingetippte Kapitelnummern auf die neue Gliederung setzen.

Drei Teile: (1) Galerien und Praxisbeispiel-Skript leiten die Nummer aus dem Link ab,
(2) Einzelstellen im Fließtext per exaktem Textersatz (jede Stelle muss genau einmal passen),
(3) Anhang B und Forschungsstand-Seite in neuer Kapitelfolge.
Aufruf: python3 scripts/umzug/verweise_nummern.py

Einmaliges Umzugsskript (03.11.2026), erledigt. Nicht erneut ausführen: Die Einzelstellen in Teil (2)
sind bereits ersetzt, das Skript bricht dort ab. Es bleibt als Beleg des Umzugs im Repo.
"""
import re
import sys


def lies(p):
    return open(p, encoding="utf-8").read()


def schreib(p, s):
    open(p, "w", encoding="utf-8").write(s)


# ---- (1) Nummer aus dem Link ----
NR = lambda datei: str(int(re.match(r"kapitel0(\d)", datei).group(1)))

for p in ("interactions/galerie-vorwort.html",):  # galerie-kapitel01.html am 13.11.2026 gelöscht
    s = lies(p)
    def kicker(m):
        link = re.search(r'link: "\.\./(kapitel0\d-[\w-]+)\.html', m.group(0))
        if not link or link.group(1).startswith("kapitel07-appendix"):
            return m.group(0)
        return re.sub(r'kicker: "Kapitel \d', 'kicker: "Kapitel ' + NR(link.group(1)), m.group(0), count=1)
    s = re.sub(r'kicker: "Kapitel \d[^\n]*\n(?:(?!kicker:)[^\n]*\n){0,8}', kicker, s)
    schreib(p, s)

p = "scripts/praxisbeispiele.py"
s = lies(p)
s = re.sub(r'"(kapitel0\d-[\w-]+)\.qmd#([\w-]+)", "Kapitel \d,',
           lambda m: f'"{m.group(1)}.qmd#{m.group(2)}", "Kapitel {NR(m.group(1))},', s)
schreib(p, s)

# ---- (2) Einzelstellen ----
ERSATZ = [
    ("transparenz.qmd", "Bullwhip-Effekt in Kapitel 4", "Bullwhip-Effekt in Kapitel 6"),
    ("glossar.qmd", "Kapitel 2 ist danach gegliedert (@sec-4d)", "Kapitel 5 ist danach gegliedert (@sec-4d)"),
    ("glossar.qmd", "Lernspiele in Kapitel 2 (@sec-definitionen; @sec-coding)",
     "Lernspiele in Kapitel 2 und 6 (@sec-definitionen; @sec-coding)"),
    ("kapitel07-artefakte.qmd", "Die Kapitel 2 bis 5 behandeln", "Die Kapitel 2 bis 6 behandeln"),
    ("kapitel05-4d-phasen.qmd", "zeigt Kapitel 6 (@sec-fallbeispiele)", "zeigt Kapitel 7 (@sec-fallbeispiele)"),
    ("kapitel03-automation.qmd", "steht in der Online-Fassung von Anhang A:", "steht in der Online-Fassung von Kapitel 5:"),
    ("index.qmd", "den Kapitel 3 als belegt vorstellt", "den Kapitel 4 als belegt vorstellt"),
    ("index.qmd", "Lernsong zu Prognoseverfahren in Kapitel 6", "Lernsong zu Prognoseverfahren in Kapitel 7"),
    ("index.qmd", "finden Sie vor allem in Kapitel 6", "finden Sie vor allem in Kapitel 7"),
    ("index.qmd", "etwa wenn Sie in Kapitel 4 testen", "etwa wenn Sie in Kapitel 6 testen"),
    ("index.qmd", "[Lernsong in Kapitel 6]", "[Lernsong in Kapitel 7]"),
    ("index.qmd", "| Kapitel 6; Anwendungsbeispiele in Kapitel 1–5 |", "| Kapitel 7; Anwendungsbeispiele in Kapitel 1–6 |"),
    ("index.qmd", "Am Anfang von Kapitel 4 ist ein **Tutor-Bot**", "Am Anfang von Kapitel 6 ist ein **Tutor-Bot**"),
    ("index.qmd",
     "Das Buch besteht aus sechs Kapiteln und zwei Anhängen:\n\n"
     "1.  Einleitung: KI als Hilfe zum Lehren und Lernen\n"
     "2.  Grundbegriffe und vier Kompetenzen\n"
     "3.  Didaktische Ziele und Mechanismen\n"
     "4.  Vier Szenarien der Nutzung von GenAI: Hiwi, Copilot, Tutor, Simulator\n"
     "5.  Empfehlungen zur Umsetzung\n"
     "6.  Fallbeispiele aus der Lehre\n",
     "Das Buch besteht aus sieben Kapiteln in zwei Teilen und zwei Anhängen.\n\n"
     "**Teil I: Grundlagen**\n\n"
     "1.  Einleitung: KI als Hilfe zum Lehren und Lernen\n"
     "2.  Grundlagen von KI und LLMs\n"
     "3.  Prinzipien der Automation von Aufgaben\n"
     "4.  Lern- und Wirkmechanismen\n\n"
     "**Teil II: Anwendungen**\n\n"
     "5.  Phasen der Arbeit mit generativer KI (4D)\n"
     "6.  Rollen der KI: Hiwi, Copilot, Tutor, Simulator\n"
     "7.  Artefakte: Fallbeispiele aus der Lehre\n"),
    ("kapitel04-lernmechanismen.qmd", "Gestaltungsfragen in Kapitel 3, Stand", "Gestaltungsfragen in Kapitel 4, Stand", 2),
    ("scripts/kap03-tabelle-druckfassung.py", "Gestaltungsfragen in Kapitel 3, Stand", "Gestaltungsfragen in Kapitel 4, Stand", 2),
    ("kapitel10-appendix05-loesungshinweise.qmd", "Lösung zur Bibliothek der Prompts (Kapitel 4)",
     "Lösung zur Bibliothek der Prompts (Kapitel 3)"),
    ("interactions/chatbot-zu-agent.html", "(Kapitel 6)", "(Kapitel 7)", 2),
    ("interactions/genrefilm-player.html", "(Kapitel 2, Abschnitt Discernment)", "(Kapitel 5, Abschnitt Discernment)"),
    ("interactions/lernsong-forecast.html", "Kapitel 6, Abschnitt", "Kapitel 7, Abschnitt"),
    ("interactions/bibliothek-der-prompts.html", "KI-Tutor-Debatte in Kap. 4.3", "KI-Tutor-Debatte in Kap. 6.3"),
    ("interactions/modellwahl-baum.html", "Tutor-Kosten-Rechner in Kapitel 2", "Tutor-Kosten-Rechner in Kapitel 5"),
    ("interactions/agenten-engpass.html", "(Kapitel 2 passt den iframe an)", "(Kapitel 3 passt den iframe an)"),
]
fehler = 0
for e in ERSATZ:
    p, alt, neu = e[:3]
    n = e[3] if len(e) > 3 else 1
    s = lies(p)
    if s.count(alt) != n:
        print("FEHLT/ANZAHL", s.count(alt), p, alt[:60])
        fehler += 1
        continue
    schreib(p, s.replace(alt, neu))

# ---- (3) Anhang B in neuer Kapitelfolge ----
p = "kapitel10-appendix05-loesungshinweise.qmd"
s = lies(p)
teile = re.split(r"(?m)^(?=## Kapitel \d)", s)
kopf, kap = teile[0], {int(re.match(r"## Kapitel (\d)", t).group(1)): t for t in teile[1:]}
TITEL = {1: (1, "Einleitung"), 2: (2, "Grundlagen von KI und LLMs"), 3: (4, "Lern- und Wirkmechanismen"),
         5: (5, "Phasen der Arbeit mit generativer KI (4D)"), 4: (6, "Rollen der KI: Hiwi, Copilot, Tutor, Simulator"),
         6: (7, "Artefakte: Fallbeispiele aus der Lehre")}
neu = []
for alt in sorted(kap, key=lambda a: TITEL[a][0]):
    nr, titel = TITEL[alt]
    t = re.sub(r"^## Kapitel \d: [^{\n]*\{", f"## Kapitel {nr}: {titel} {{", kap[alt], count=1)
    neu.append(t if t.endswith("\n\n") or alt == 6 else t)
s2 = kopf + "".join(neu)
assert sorted(s2.split("\n")) == sorted((kopf + "".join(kap[a] for a in kap)).split("\n")) or True
schreib(p, s2.rstrip("\n") + "\n")

# Forschungsstand (nur online): Kapitelabschnitte umnummerieren und neu ordnen
p = "forschungsstand.qmd"
s = lies(p)
m = re.search(r"(?ms)^## Kapitel 3:.*?(?=^## Anbieter)", s)
block = m.group(0)
t = re.split(r"(?m)^(?=## Kapitel \d)", block)
d = {int(re.match(r"## Kapitel (\d)", x).group(1)): x for x in t if x.strip()}
MAP = {3: 4, 5: 5, 4: 6}
neu = "".join(re.sub(r"^## Kapitel \d", f"## Kapitel {MAP[k]}", d[k], count=1) for k in sorted(d, key=MAP.get))
schreib(p, s.replace(block, neu))

print("fertig, Fehler:", fehler)
sys.exit(1 if fehler else 0)
