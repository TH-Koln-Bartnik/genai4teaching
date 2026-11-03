# STATUS Abb. 3.1 als interaktive Heatmap (03.11.2026, 22:14–23:30)

Auftrag: „Erstelle für Abbildung 3.1 eine interaktive Heatmap o. ä.“ (https://th-koln-bartnik.github.io/genai4teaching/kapitel03-automation.html). Sitzung Claude Opus 5.5, einzige Datei im Buchtext: `kapitel03-automation.qmd`.

## Entscheidungen (MC, Roman)
- Konzept: drei Ansichten (Wie oft? · Wie arbeitet KI mit? · In welchem Zusammenhang?), sortierbar, Tooltip mit englischem Originaltext.
- Einbau: online ersetzt die Heatmap die statische Liste; Druck behält `images/druck/onet-aufgaben.svg` plus QR-Code.
- Repo: Branch, Diff per MC, Merge freigegeben. Tresorit: Freigabe erteilt.
- Reiter 3 heißt „In welchem Zusammenhang?“ statt „Wer fragt?“, weil der Index Gesprächsinhalte einstuft, nicht Personen.

## Daten (alle per Skript, keine Werte aus dem Gedächtnis)
- O*NET 31.0 (`task_statements.csv`, `task_ratings.csv`, Download onetcenter.org): 25 Aufgaben von 25-1011.00, Wichtigkeit (IM 1–5) und Häufigkeit (FT, 7 Stufen), Stelleninhaber, Stand 08/2019, ca. 104 Befragte je Aufgabe, keine Unterdrückungsempfehlung.
- Anthropic Economic Index, Release 2026-06-26, `aei_claude_ai_2026-06-26.csv` (HF), Monat Mai 2026, weltweit, O*NET-Aufgabenebene (2.713 Aufgaben mit Werten).
- Befund: Nur 9 der 25 Aufgaben erscheinen im Index (Vorlesungen, Bewerten, Diskussionen, Kursmaterial, Curricula, Forschen, Prüfungen, Beratung, Forschungsanträge); 16 sind nicht veröffentlicht. Höchster Automatisierungsanteil: Prüfungen erstellen (60 %), niedrigster: Forschungsanträge (14 %). Vorlesungen: 92 % der Gespräche als Studium eingestuft. Nur 8 der 25 Aufgaben erledigt die Mehrheit mindestens mehrmals pro Woche.
- Kooperationsmuster nach Handa et al. (2025), geprüft: arXiv:2503.04761, https://doi.org/10.48550/arXiv.2503.04761 (Anweisung, Rückkopplung = Automatisierung; Überarbeiten, Lernen, Prüfen = Augmentierung). Hinweis im Widget: Das ist die Art des Gesprächs, nicht Automatisierung im Aufgabenmodell (Tab. 3.1).

## Ergebnis
`main` steht auf `f14d9d4` („Abb. 3.1 als interaktive Heatmap (O*NET + Economic Index)“), Fast-forward von `6378b21`, Branch `abb-3-1-heatmap` (löschbar, identisch mit `main`).

| Datei | Inhalt |
|---|---|
| `interactions/onet-heatmap.html` | Widget, eine Datei, Daten als JSON-Block eingebettet; TH-Rot als einfarbige Skala (OKLab), Dunkelmodus, Tastatur (Reiter mit Pfeiltasten, Zeilen fokussierbar), schraffierte Zeilen „nicht veröffentlicht“, meldet seine Höhe per `postMessage`; Startansicht per `?ansicht=ki` / `?ansicht=wer` |
| `interactions/data/onet-heatmap.json` | Daten (25 Aufgaben) |
| `scripts/onet-heatmap.py` | `python3 -I scripts/onet-heatmap.py <aei.csv> <task_statements.csv> <task_ratings.csv>`; schreibt JSON und setzt den Datenblock in die HTML-Seite ein; prüft Summen |
| `scripts/qr-onet-heatmap.mjs`, `images/qr/qr-onet-heatmap.png` | QR auf `kapitel03-automation.html#fig-onet-tasks` |
| `kapitel03-automation.qmd` | HTML: Einleitungssatz, `::: {#fig-onet-tasks}` mit iframe + Höhen-Listener, Bildunterschrift mit `@onet2026database` und `@massenkoff2026cadences`. Druck: bisherige SVG mit QR-Satz in der Unterschrift und QR-Bild (18 %) |
| `docs/` | neu gerendert (Quarto 1.8.25, `--to html`), PDF/EPUB aus Git zurückgeholt |

## Prüfungen
- Render: nur die 36 bekannten OJS-Warnungen, kein `?@`, Querverweis „Abbildung 3.1“ aufgelöst.
- Playwright Widget 980/390/339 px, hell und dunkel, alle drei Ansichten: keine Konsolenfehler, kein waagerechtes Scrollen (mobil senkrechte Spaltenköpfe). Hover-Tooltip und Sortierung getestet.
- Kapitelseite 1200/390 px: keine 404, iframe-Höhe passt sich an (1.358 bzw. 2.053 px).
- PDF **nicht** gerendert (Druckblock nur um QR ergänzt) → Phase 3.
- Live auf GitHub Pages nicht geprüft.

## Offen
1. Live-Prüfung: https://th-koln-bartnik.github.io/genai4teaching/kapitel03-automation.html#fig-onet-tasks
2. Druck-Render (Phase 3): Abb. 3.1 mit QR-Bild, Umbruch prüfen; Druckwörter +~15 (QR-Satz).
3. Handa et al. (2025) steht nur im Widget, nicht in `references.json`; aufnehmen, falls K3b den Befund (9 von 25, Kooperationsmuster) im Fließtext nutzt.
4. K3b: Text unter Abb. 3.1 kann den Befund aufgreifen („Welche Auswirkungen können wir erwarten?“ → 16 Aufgaben ohne Daten, Prüfungen am stärksten automatisiert).
5. Bei neuem AEI-Release Skript erneut laufen lassen (`MONAT` im Skript anpassen).
6. Roman: Branch `abb-3-1-heatmap` auf GitHub löschen.

## Startauftrag nächste Sitzung (optional, nur falls K3b den Befund einbauen will)
> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/abb-3-1-heatmap/STATUS-abb-3-1-heatmap-2026-11-03.md`. Ergänze in `kapitel03-automation.qmd` nach @fig-onet-tasks zwei bis drei Sätze zum Befund aus `interactions/data/onet-heatmap.json` und nimm Handa et al. (2025, doi 10.48550/arXiv.2503.04761) per Crossref/arXiv geprüft in `references.json` auf. Kläre per MC Repo-Schreibzugriff und Tresorit-Freigabe; Render, Playwright, Diff per MC, Merge, `ergebnisse-sichern`.

## Candidate permanent notes
- Eine Aufgabe, die im Economic Index fehlt, ist nicht ungenutzt, sondern liegt unter der Veröffentlichungsschwelle.
- Der Economic Index misst Gesprächsinhalte, nicht Personen: Gespräche über Vorlesungen stammen überwiegend aus dem Studium.
- „Automatisierung“ im Economic Index beschreibt die Gesprächsform, nicht die Verlagerung einer Aufgabe im Aufgabenmodell.
- Prüfungen zu erstellen ist unter den Lehraufgaben die mit dem höchsten Automatisierungsanteil der Gespräche.
- Eine Heatmap wird zur barrierearmen Tabelle, wenn jede Zelle ihren Wert als Text trägt und die Farbe nur verstärkt.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja – `f14d9d4` in `main`)
