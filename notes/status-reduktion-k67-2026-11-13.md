# Status: Reduktion Kap. 6 und 7 nach drei Ringen (Sitzung K67, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md` (gilt vor den Einzelplänen), `PLAN-zuspitzung-drei-ringe-2026-11-13.md` Abschnitte 2–4, `claude/interaktionen-pruefung/PRUEFUNG-interaktionen-2026-11-13.md` Abschnitt 11. Branch `reduktion-k67` von `main` @ `e0b4e56`, gemergt nach `main` @ `a43387d` (nach K5 und K2).

## Entscheidungen Roman (MC, 13.11., ca. 16:30)

- Kap. 6 P1 (Recherche, Interviews, Copilot) und P2 (Schreiben und Programmieren Kennenswert, Rechner nach Kap. 7, EOQ-Video und Little's-Law-Animation raus): wie vorgeschlagen.
- Kap. 6 P3: Kasten „Stand bei Drucklegung, November 2026: Tutor-Angebote der Anbieter“ bleibt im Druck.
- Kap. 7 Rechner: streng (je Rechner Druckabbildung + QR + 2–3 Sätze, Formel nach Chen und Erklärkästen online); Holbein-Kasten zusätzlich im Druck.
- Schlüsselbegriffe: fehlende Definitionen ins Glossar.
- Diff: mergen und sichern.

## Ergebnis

| | Druckwörter vorher | nachher |
|---|---:|---:|
| Kap. 6 | 12.396 | 6.906 |
| Kap. 7 | 8.285 | 6.948 |

Kap. 6 je Abschnitt (Ziel): Recherche 787 (700), Interviews 316 (250), Copilot 138 (200), Schreiben + Quellentreue 137 (150), Programmieren 284 inkl. Prüfkasten `ez-k4-3` (250 + Kasten), Prüfen-ob-Simulation-rechnet 900 (Kern), Tutor 336 + PS2 Pal 235 (650), einfache Tutoren 430 inkl. Stand-Kasten (300 + Kasten), Betrieb 623 (650), Echtheit ~470 (500).
Kap. 7: Quizspiele 270 (300), Lernsong 358 (350), Widgets 448 + Little's Law 138 (500), Simulationen Lehrende 629 inkl. Holbein + Bullwhip 129 (450 + Holbein), Karriereberater 158 inkl. Prüfkasten `ez-k6-3` (120 + Kasten).

Elemente: Kap. 6 hat 3 (Hörstück, Making-of online im Kennenswert-Block, PS2 Pal), Kap. 7 hat 5 (Lernsong, Linien-Widget, Kaya-Teaser, Rechner Little's Law, Rechner Bullwhip).

## Was geändert wurde

- **Kap. 6** (`kapitel06-rollen.qmd`): Wichtig-Abschnitte verdichtet; Kennenswert-Blöcke (`content-visible when-format="html"`) mit Drucksatz + QR für Copilot-Beispiele (DuPont, Mediävistik), Schreiben als Cyborg + Quellentreue, Programmieren; Kasten „So entstand dieses Hörstück“, Mollick-Tutorkonzepte, LISA/COFFEE/MIND, Banh, Sprachenlernen, Kiel-Kasten, Co-Orchestrierung nur online. EOQ-Vergleichsvideo und Little's-Law-Animation entfernt (samt Standbild/QR). `sec-widget-pruefen` verweist auf die Rechner in Kap. 7. PS2 Pal steht nur noch einmal (Nutzen in `sec-tutor`, Aufbau und Zahlen in `sec-complex-tutors`).
- **Kap. 7** (`kapitel07-artefakte.qmd`): Typologie Erinnern/Verstehen/Anwenden nach Anderson & Krathwohl (2001) in Einleitung, Lernziel 2, Übersichtstabelle (Spalte „Lernstufe“), drei Überschriften (IDs `sec-bsp-syntaktisch/-semantisch/-pragmatisch` bleiben), Steckbriefen („*Lernstufe:*“), Kernaussage 3, Lernfrage 1 und 4. Carlile nur noch in `sec-fall-unternehmen`. Rechner `#### Rechner: Little's Law selbst nachrechnen {#sec-widget-littles-law}` am Ende von `sec-bsp-widgets`, `#### Rechner: Den Bullwhip-Effekt zerlegen {#sec-widget-bullwhip}` am Ende von `sec-bsp-simulationen-lehrende`. Karriereberater: Drucksatz + QR + Prüfkasten, Rest online (Lernfrage des Abschnitts nur online).
- **Schlüsselbegriffe** Kap. 6 und 7: Begriff + `*Beispiel:* …` (Format von K2). Kap. 6 ohne Co-Orchestrierung (Anker nur online); Kap. 7 neue Kennungen `k6-erinnern/-verstehen/-anwenden` statt `k6-syntaktisch/-semantisch/-pragmatisch`.
- **Glossar** (`glossar.qmd`): neu „Automatisierung, Augmentierung, neue Aufgaben“, „Erinnern, Verstehen, Anwenden“, „Musikalische Merkhilfe“, „Lösungsbeispiel“, „Angeleitetes Entdecken“, „Konkretheitsabbau“, „Prüfzelle“, „Test mit Nutzenden“, „Grenzobjekt“; „Deep Research“ → „Deep Search und Deep Research“.
- **`include/schluesselbegriffe.html`**: Knopf „Beispiel zeigen“, wenn der Text mit „Beispiel:“ oder Anführungszeichen beginnt, sonst „Musterantwort zeigen“ (Kap. 1, 3, 4 noch mit Definitionen); Anleitung verlinkt dann aufs Glossar. Zusammengeführt mit der Änderung aus K2.
- **QR**: `scripts/qr-reduktion-k67.py` erzeugt und prüft per Decoder `qr-k6-copilot`, `qr-k6-schreiben`, `qr-k6-programmieren`, `qr-k7-job-buddy` und neu `qr-littles-law`, `qr-bullwhip` (Kap. 7). `scripts/druck-abbildungen.mjs` und die Kommentare in `_ojs/littles-law.qmd`, `_ojs/bullwhip.qmd` auf Kap. 7 umgestellt.
- `references.json`: Merge `k7-kasten-holbein` (Holbein, Isley et al.), 518 Einträge, keine doppelten Schlüssel, die zwei neuen alphabetisch eingeordnet.

## Prüfungen

`scripts/zaehle_druck.py` vor und nach; `quarto render --to html` (Quarto 1.8.25) ohne Fehler, keine `?@`-Verweise, `docs/downloads-genai4teaching.pdf/.epub` aus Git zurückgeholt; eigener Ankerprüfer (je Format: Schlüsselbegriff-Anker und @-Verweise mit Ziel) ohne neue Befunde; Playwright 1200/390 px für Kap. 2, 6, 7 und Glossar: keine JS-Fehler, 6 OJS-Diagramme in Kap. 7, Knopf „Beispiel zeigen“. Bei 390 px sind die Tabellen in Kap. 6 und 7 zu breit; das war auf `main` vorher genauso. Kein LaTeX-Testrender (PDF wird separat gebaut).

## Offen für andere Sitzungen

1. **Anhang B (Sitzung „Anhang A und Lösungshinweise“, `kapitel10-appendix05-loesungshinweise.qmd`)**, Abschnitt Kapitel 7:
   - Lernfrage 1 am Kapitelende lautet jetzt: „Nach welchen drei Lernstufen ordnet das Kapitel seine Beispiele, und warum trägt das Werkzeug allein umso weniger, je höher die Stufe ist?“ Vorschlag Lösung: „Erinnern (Begriffe, Formeln und Reihenfolgen abrufen), Verstehen (Bedeutungen erschließen und erklären), Anwenden (ein Verfahren in einer neuen Lage mit Zielkonflikten einsetzen) [@anderson2001]. Fürs Erinnern genügt Abruf mit Rückmeldung; Verstehen braucht Anleitung und einen Erklärungsauftrag; Anwenden braucht eigenes Handeln und ein Nachgespräch, das kein Werkzeug führt.“
   - Lernfrage *Projektlernen mit Praxispartnern* lautet jetzt: „Welche Schwierigkeit kommt nach Carlile hinzu, wenn Wissen tatsächlich eine Organisationsgrenze überquert, und wie fängt das gemeinsame Repository sie auf?“ Vorschlag Lösung: „Über eine Organisationsgrenze genügt ein gemeinsames Vokabular nicht; Bedeutungen müssen geklärt und Interessen wie Vertraulichkeit verhandelt werden [@carlile2004]. Das Repository ist ein Grenzobjekt mit gemeinsamen Bezeichnungen, und seine Regeln zu Beispieldaten und Pseudonymen lösen das Vertraulichkeitsproblem, bevor ein Prototyp entsteht [@carlile2002].“
   - Lösung *Karriereberater*: Die Lernfrage steht nur noch online; Lösung im Druck streichen oder als Online-Hinweis kennzeichnen.
   - Lernfrage 4 sagt jetzt „Lernstufe“ statt „Wissensform“; Lösung 4 entsprechend anpassen.
2. **PB (`praxisbeispiele.qmd`, `scripts/praxisbeispiele.py`)**: Link „Im Buch: Kapitel 6, Jeder kann jetzt programmieren“ zeigt auf `kapitel06-rollen.qmd#vid-eoq-vergleich`, das Video gibt es dort nicht mehr → EOQ-Vergleichsvideo als „Nur hier“ führen. Little's-Law-Animation ebenso „Nur hier“; die „Im Buch“-Links für die Rechner zeigen jetzt auf Kap. 7 (`kapitel07-artefakte.qmd#sec-widget-littles-law`, `#sec-widget-bullwhip`).
3. **K1/Vorwort**: Kap. 7 und Glossar nennen „Vorwort, ‚Wie dieses Buch lehrt‘“ als Ort der Typologie (ein `@sec`-Verweis auf den unnummerierten Abschnitt ist nicht möglich). Bleibt Erinnern/Verstehen/Anwenden dort nach der Kürzung erhalten?
4. Kap. 7 Simulationen Lehrende liegt mit Bullwhip bei ~560 statt 450 (ohne Holbein); bei Bedarf in der Sprachprüfung nachschärfen.
5. Druckbild (PDF) der neuen Drucksätze mit QR und der Schlüsselbegriffe-Kästen beim nächsten PDF-Bau ansehen.

## Startauftrag nächste Sitzung (Welle 2, z. B. K4)

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (frisch klonen, Push-Zugriff nötig).
Lies claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md
(gilt vor den Einzelplänen) und die Statusnotizen K2, K5, K67 vom 13.11. (Schlüsselbegriffe-Format
„*Beispiel:* …“, Glossar-Einträge ergänzen, Knopf erkennt Beispiel/Musterantwort).
Du besitzt nur kapitel04-lernmechanismen.qmd und interactions/semester-simulator.html auf Branch
reduktion-k4 von main. Semester-Simulator aus claude/semester-simulator übernehmen (ohne Kap.-1-Änderung).
Umsetzen nach Abschnitt 3/4 der Pläne; Kürzungen in Paketen per MC; scripts/zaehle_druck.py vor und nach,
quarto render --to html, PDF/EPUB aus Git zurückholen, Playwright 1200/390 px, keine ?@-Verweise.
Diff per MC, Merge, ergebnisse-sichern. Fragen nur als Multiple Choice.
```

## Candidate permanent notes

- Didaktische Reduktion gelingt am leichtesten, wenn jedes Beispiel genau einen Ort im Buch hat und alle anderen Stellen dorthin verweisen.
- Ein Glossar entlastet Lernkästen, weil Beispielsätze dort das Erinnern üben, wo Definitionen nur das Wiedererkennen prüfen.
- Ein QR-Code im Druck verwandelt einen gestrichenen Abschnitt in eine Online-Vertiefung, statt ihn zu verlieren.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ a43387d)
