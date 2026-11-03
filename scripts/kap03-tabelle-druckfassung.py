"""Erzeugt die Druckfassung von Tabelle 3.2 (eine Zeile je Kernaussage) als Pandoc-Grid-Tabelle
und setzt sie in kapitel04-lernmechanismen.qmd ein: Online-Tabelle -> when-format="html", Druckfassung -> unless-format="html".
Aufruf: python3 -I print_table.py <pfad/zu/kapitel04-lernmechanismen.qmd>"""
import sys, textwrap

W1, W2 = 40, 58  # Zeichenbreiten der Spalten (relativ; Pandoc rechnet Anteile daraus)

T = True   # tragende Aussage (Fließtext, fett)
F = False  # weiterer Beleg

DATA = [
 ("Lernen Studierende mit KI-Tutoren mehr?", [
  (T, "Ein Tutor kann mehr Lernen bewirken als aktive Präsenzübung oder Lehrbuch allein.", "●●●",
      ["@kestin2025: RCT, Physik, Harvard; mehr gelernt in weniger Zeit",
       "@fischer2025: RCT, 334 Studierende, Deutschland; +0,23 SD in einer Prüfung mit Anreiz"]),
  (T, "Ein Tutor, der nur bereitgestellt wird, hebt die Leistung nicht und kann sie senken.", "●●○",
      ["@liu2026courseintegrated: RCT, 2.379 Studierende, Maryland; −0,37 SD Abschlussnote, 15 % Nutzung",
       "@oreopoulos2026productive: präregistrierter RCT, 6.997 Schüler; Tutor allein ohne Wirkung auf das Behalten, wirksam nur im Mastery-Ablauf"]),
  (T, "Vorbehalt: Die großen Effekte der Meta-Analysen messen nicht das Werkzeug allein.", "",
      ["@lawson2026: Kontrollgruppen unterscheiden sich zugleich in Methode, Übungszeit und Dauer",
       "@wissenschaftsrat2026: Studienlage „(noch) nicht belastbar“"]),
  (F, "Meta-Analysen finden mittlere bis große Durchschnittseffekte; nach etwa 23 Stunden steigt der Effekt nicht weiter.", "●●○",
      "Der Vorbehalt oben gilt für sie: @ren2026 (47 RCTs, g = 0,68), @jing2026 (Hochschule, g = 0,46), @deng2025, @wu2024a; @wuouyang2026 trennt KI-gestützte von unbegleiteter Programmierleistung."),
  (F, "Weitere Feldversuche mit eigens gebauten Tutoren zeigen Gewinne, oft mit Beteiligung der Anbieter.", "●●○",
      "@learnlm2025 (Herstellerangabe), @harrison2026medly (Sekundarstufe, g = 0,33), @northcutt2026studentbench (KI gleichauf mit menschlichem Tutoring, Industrieautoren), @kuo2026 (Tutor- plus Tutee-Bot schlägt Antwort-Bot)."),
  (F, "Gesprochene Antworten lehren nicht besser als geschriebene, kosten aber das 2,8-Fache.", "●●○",
      "@yang2026speak (präregistriert, 86 Online-MBA-Studierende)."),
  (F, "Die Rolle der KI bestimmt, was steigt: als Tutor die Motivation, nicht die Klausur; als Löser die Aufgabe, nicht der Transfer.", "●●○",
      "@chakraborty2026 (vier Experimente in einem Programmierkurs)."),
 ]),
 ("Was passiert ohne didaktische Bremse?", [
  (T, "Ungebremster Zugang hebt die Leistung mit KI und senkt, was ohne KI bleibt.", "●●●",
      ["@bastani2025: RCT, knapp 1.000 Oberstufenschüler; +48 % Übung, −17 % Prüfung",
       "@rismanchian2026: Paneldaten, 3,2 Mio. Interaktionen; −27 % Lernzeit bei kopierbaren Aufgaben",
       "@bergh2026cognition: Laborexperiment, 59 Studierende; Behalten nach 48 Stunden 39 statt 52 %"]),
  (T, "Erklärung: Auslagerung schadet, wenn sie die Operationen umgeht, die das Lernziel ausmachen.", "",
      ["@nakamura2026: Theorie"]),
  (F, "Wer per Chatbot recherchiert oder schreibt, lernt weniger und denkt weniger selbst.", "●●○",
      "@mittal2026 (RCT, acht Tage, kritisches Denken am stärksten betroffen), @kosmyna2025 (EEG, 54 Teilnehmende, Preprint)."),
  (F, "Was mit KI gelingt, bleibt ohne KI nur erhalten, wo die KI ergänzt statt ersetzt oder schon Expertise da ist.", "●●○",
      "@contractor2026learning (+0,27 SD, nach einer Woche nur bei ergänzender Nutzung), @autor2026expertise (133 Patentanwälte, Fähigkeit ohne KI nach 90 Tagen nur bei Erfahrenen)."),
  (F, "Auch Lehrende lagern aus: Ein KI-Werkzeug für die Unterrichtsvorbereitung senkt die Lernmotivation ihrer Schülerinnen und Schüler.", "●●○",
      "@sungu2026harmteaching (randomisiertes Feldexperiment, 193 Lehrkräfte, −0,11 SD)."),
 ]),
 ("Welche Gestaltungsmerkmale schützen?", [
  (T, "Rückmeldung, die zuerst zum eigenen Denken auffordert, schützt das Können ohne KI.", "●●●",
      ["@maier2026deskilling: präregistriert, 704 Teilnehmende; metakognitive Rückmeldung halbiert die Auslagerung",
       "@ates2026: Cluster-RCT, 1.176 Erstsemester, vier Hochschulen; Reflexion vor Kritik gewinnt beim verzögerten Transfer"]),
  (T, "Ein System-Prompt allein ändert das Lernen nicht.", "●●●",
      ["@barth2026steering: präregistriertes Crossover, 1.059 Programmieranfänger, ETH; kein Effekt auf vier Maße"]),
  (F, "Gerüste wirken, wenn Planen, Abrufen und Korrigieren bei den Lernenden bleiben.", "●●○",
      "@hou2026 (Prompting-Gerüst bei offenen Aufgaben), @yang2026visar (Planungsschritte bleiben erhalten), @ross2026 (Fehlvorstellungen weichen nur mit korrigierender Rolle), @akgun2026 (Abruf-Übung schlägt freies KI-Lernen nach sieben Wochen)."),
  (F, "Gemeinsam verarbeitetes KI-Feedback fördert den Transfer stärker als allein verarbeitetes.", "●●●",
      "@chen2026transfer (Cluster-RCT, 16 Wochen, 108 Studierende, China)."),
  (F, "Sokratische Führung wirkt nach, wenn die Leitplanken fallen.", "●●●",
      "@brender2026reflective (randomisiert, 66 Master-Studierende, danach freie KI-Nutzung im Projekt)."),
 ]),
 ("Trägt die Einbettung oder das Werkzeug?", [
  (T, "Gewinne entstehen, wo die Nutzung eingeplant und angeleitet ist, nicht durch den Zugang.", "●●○",
      ["@oreopoulos2026: RCT, 83 indische Internatsschulen; Gewinne nur mit betreuten Lernzeiten",
       "@gallegos2026: zwei RCTs, Ökonometrie, Chile; Anleitung +0,21 SD, Ermutigung wirkungslos",
       "@melanou2026: Quasi-Experiment, 87 Studierende, Deutschland; die Rahmung zählt"]),
  (T, "Bereitgestellte Tutoren werden zu selten genutzt, um zu wirken.", "●●○",
      ["@oreopoulos2026khanmigo: Cluster-RCT, 18 Schulen, zwei Jahre; Nutzung an einem Drittel der Übungstage"]),
  (F, "Menschliche Begleitung hebt die Nutzung, nicht automatisch die Leistung.", "●●○",
      "@robinson2026 (zwei RCTs, Grundschule, Beteiligung +71–80 %, Lesen unverändert)."),
  (F, "Wo Tutoren an deutschsprachigen Hochschulen laufen, fehlen Lernmaße; Befragungen zeigen keinen Unterschied im wahrgenommenen Lernerfolg.", "●○○",
      "@stumpf2026 (OneTutor, 84 Lehrveranstaltungen), @tobler2026 (ETH, 407 Studierende)."),
  (F, "Reine KI-Tutoren erreichen viele nie: 40–47 Prozent nutzen sie nicht.", "●○○",
      "@turano2026monolith (Synthese)."),
  (F, "Anbieterstudien berichten Gewinne, sind aber nicht unabhängig geprüft.", "●○○",
      "@openai2026studymode, @ghahramani2026sierraleone (Herstellerangaben)."),
 ]),
]

def wrap(text, width):
    return textwrap.wrap(text, width, break_long_words=False, break_on_hyphens=False) or [""]

def cell_lines(content, width):
    """content: str (Absatz) oder list (Aufzählung)."""
    w = width - 2  # ein Leerzeichen Rand links und rechts
    if isinstance(content, str):
        return wrap(content, w)
    out = []
    for item in content:
        ws = wrap(item, w - 2)
        out += ["- " + ws[0]] + ["  " + x for x in ws[1:]]
    return out

def row(c1, c2):
    n = max(len(c1), len(c2))
    c1 += [""] * (n - len(c1)); c2 += [""] * (n - len(c2))
    return ["| " + a.ljust(W1 - 2) + " | " + b.ljust(W2 - 2) + " |" for a, b in zip(c1, c2)]

def span(lines):
    total = W1 + W2 + 1 - 2
    return ["| " + l.ljust(total) + " |" for l in lines]

sep = "+" + "-" * W1 + "+" + "-" * W2 + "+"
hsep = "+:" + "=" * (W1 - 1) + "+:" + "=" * (W2 - 1) + "+"

L = [sep] + row(["Kernaussage"], ["Studien"]) + [hsep]
for q, items in DATA:
    L += span(wrap("`\\rule{0pt}{3.2ex}`{=latex}**" + q + "**", W1 + W2 - 1)) + [sep]
    for tragend, aussage, punkte, belege in items:
        a = ("**" + aussage + "**") if tragend else aussage
        if punkte:
            a += " " + punkte
        L += row(cell_lines(a, W1), cell_lines(belege, W2)) + [sep]

for l in L:
    assert len(l) == W1 + W2 + 3, (len(l), l)
table = "\n".join(L)

print_block = (
    '::: {.content-visible unless-format="html"}\n'
    'Fett gesetzte Aussagen tragen den Fließtext dieses Abschnitts, die übrigen sind weitere Belege.\n\n'
    + table + '\n\n'
    ': Kernaussagen und Belege zu den Gestaltungsfragen in Kapitel 4, Stand November 2026. {#tbl-stand-kap3}\n'
    ':::\n'
)

p = sys.argv[1]
s = open(p, encoding="utf-8").read()
cap = ': Kernaussagen und Belege zu den Gestaltungsfragen in Kapitel 4, Stand November 2026. {#tbl-stand-kap3}\n'
assert s.count(cap) == 1 and 'Fett gesetzte Aussagen tragen' not in s
start = s.index('\n+----------------------+---', s.index('Stand der Forschung bei Drucklegung, November 2026')) + 1
end = s.index(cap) + len(cap)
html_block = '::: {.content-visible when-format="html"}\n' + s[start:end] + ':::\n\n'
s = s[:start] + html_block + print_block + s[end:]
open(p, "w", encoding="utf-8").write(s)
print(f"Druckfassung: {len(L)} Zeilen eingesetzt")
