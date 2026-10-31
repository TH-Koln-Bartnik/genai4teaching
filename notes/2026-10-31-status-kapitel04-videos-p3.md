# Status P3: Vier Videos in Kapitel 4 (31.10.2026, ca. 17:30)

Grundlage: `einbau-kapitel04-videos-2026-10-29.md`, Paket `06-Lehrbuch-Publikation-Logos/Videos/kap04-videos-paket.zip` (Tresorit).

**Branch `kapitel04-videos`** = `f507fb7`, auf `main` `5caa7be` umgesetzt, gepusht, **nicht gemergt**. Änderung gegenüber `main`: 19 Dateien, nur Kapitel 4, `references.json`, Medien, ein Skript.

## Erledigt
- Alle vier Videos eingebaut, je Online-Video (HTML-`<video>` mit Vorschaubild, Muster wie Lernsong in Kap. 6) und Druckabbildung mit QR-Code:
  - 4.1.1 nach `@tbl-acemoglu`: Acemoglu-Restrepo (38 s), `#vid-acemoglu-restrepo`, `@fig-video-acemoglu-restrepo`
  - 4.2.2 am Ende des Einleitungsteils, vor „Beispiel: Little's Law“: Making-of (59 s) und EOQ Manim/HyperFrames (30 s), `#vid-making-of`, `#vid-eoq-vergleich`; EOQ-Absatz verweist zusätzlich auf Primer A (`@sec-primer-animationen`)
  - 4.3.2: Korrektur nach Kestin et al. (2025) („beantwortet Fragen … bestätigt richtige Lösungsschritte“ statt „passt Schwierigkeitsgrad an“), neuer Absatz zur Technik und zu den Ergebnissen, Video PS2 Pal (44 s), `#vid-ps2pal-ablauf`
- **Fehler im Paket vom 29.10. behoben:** Alle QR-Codes zeigten auf `th-koeln-bartnik.github.io` (404). Richtig ist `th-koln-bartnik.github.io` (200). QR-Codes und alle vier Druckbilder mit `scripts/qr-kapitel04-videos.py` neu erzeugt (Standbild unverändert, ganzzahlige Modulgröße); alle Druckbilder in Farbe und Graustufen mit OpenCV dekodiert.
- `references.json`: `heygen2026hyperframes` (Version 0.8.216 im npm-Register bestätigt, 29.10.2026, Apache 2.0), `netland2025aivideos` (Crossref und Verlagsseite: 447 Teilnehmende über MTurk, EOQ eines von vier Themen, Prüfungsergebnis gleich, Erleben leicht zugunsten menschlicher Videos). Im Text daher „Online-Experiment“.
- HTML-Render des ganzen Buchs (Quarto 1.8.25, getrennter Ausgabeordner, `docs/` unberührt): 0 Warnungen, 0 ungelöste Verweise, 0 TODO, alle acht Medienpfade vorhanden, alle Videos laden (readyState 4). Sichtprüfung 1280 px und 390 px: Videos passen (rechter Rand 365 px).
- Keine HTML-Kommentare in `kapitel04.qmd`.

## Offen / zur Entscheidung
1. **Merge** `kapitel04-videos` → `main` nach Durchsicht des Diffs (Roman).
2. **Druck-PDF** nicht gerendert (gehört zum Gesamtlauf „Druck-PDF rendern und messen“): vier neue ganzseitige Abbildungen in Kapitel 4, Seitenzahl steigt.
3. **Prüfpunkt 4.3.2:** Der Satz „Aufgabenpakete zu Teilthemen wie Kinematik, Kräften oder Energieerhaltung“ ist nicht an Kestin et al. (2025) geprüft; das Video selbst zeigt eine Aufgabe zur Oberflächenspannung. Primärquelle konnte in dieser Sitzung nicht abgerufen werden (Freigabe ausstehend). Ebenso 4.3 Absatz „Individuelle Anpassung: Das System erkennt unterschiedliche Lernstände …“ mit Beleg `@kestin2025` gegen die Primärquelle prüfen; nach der Korrektur in 4.3.2 widerspricht er ihr womöglich.
4. Die Zahlen in 4.3.2 (194, Median 4,5/3,5/2,75, 49 vs. 60 min) stammen aus der Notiz vom 29.10. (nach Primärquelle formuliert), heute nicht erneut abgeglichen.
5. Auf Handys (390 px) ist Schrift in den 1080p-Videos sehr klein; Vollbild hilft. Optional später eine Hochformat-Fassung.
6. Bestehendes Problem, nicht von P3: Kapitel 4 ist bei 390 px zu breit wegen `@tbl-acemoglu` (461 px).
7. NotebookLM-Fassung des EOQ-Vergleichs entfällt (Entscheidung 30.10.).
8. Making-of nennt „neun Minuten“; das Protokoll im Video zeigt 17:43–17:51 plus Rendern. Passt, bei Neuproduktion abgleichen.
