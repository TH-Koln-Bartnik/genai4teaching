# Status: Archivinhalte in die Kapitel überführt (02.11.2026, Sitzung 5)

Auftrag: Startprompt Nr. 5 aus `claude/PROMPTS-naechste-schritte-2026-11-02.md`, Grundlage `claude/anhaenge-entfernt/STATUS-anhaenge-entfernt-2026-11-02.md` (Offen, Punkt 2).

## Entscheide Roman (MC)
- Zuordnungstabelle (16 Zeilen) unverändert übernommen.
- Neue Kästen vollständig im Druck (keine Kurzfassung, nicht nur online).
- Diff freigegeben, Merge nach `main`.

## Zuordnungstabelle (umgesetzt)

| Nr. | Archivabschnitt | Ziel | Umfang |
|---|---|---|---|
| 1 | Ex-Anhang A: Gezielte Einschränkungen | Kap. 2 `sec-prompts-teaching` | Absatz + `@tbl-einschraenkungen` (6 Zeilen) |
| 2 | Anhang D: fünf Bausteine der Arbeitsumgebung | Kap. 2 `sec-agenten-praxis` | `@tbl-bausteine` + Merkregel |
| 3 | Anhang D: prüfbare Regeln, Folien-Skill + Primer B Präsentationen | Kap. 2 `sec-agenten-praxis` | 1 Absatz (nepal2026faithful, garner2013, wecker2012) |
| 4 | Anhang D: lokale Modelle + Codenamen | Kap. 2 `sec-model-choice` | 1 Absatz |
| 5 | Anhang D: Tutoren (Überhilfe, Prüfschichten, Mini-Goldstandard, Studierendenprojekt) | Kap. 4.3 vor dem 4D-Kreislauf | Kasten „Einen Tutor vor der Freigabe testen: das Überhilfe-Audit“ |
| 6 | Anhang C: Mehrwert von GenAI im Rollenspiel | Kap. 4.4 Einleitung | 1 Absatz (sechs Stärken) |
| 7 | Anhang C: gestufter Einstieg + strukturierte Gestaltung | Kap. 4.4 nach Goal Play | Kasten „Ein Rollenspiel bauen“ |
| 8 | Primer A Animationen | Kap. 4 `sec-coding` (Manim/HyperFrames-Vergleich) | 1 Absatz (berney2016, ploetzner2020/2021) |
| 9 | Primer C Lernsongs | Kap. 6 Prinzip-Kasten Lernsong | 1 Satz (mocko2024) |
| 10 | Primer D Lernspiele | Kap. 6 Prinzip-Kasten Quizspiele | 1 Satz (clark2016) |
| 11–16 | Primer 0 Weiche; Anhang C Mechanismen, Grenzen, Methodik, Journal-Liste, Studien 2025, Update, Schnellstart; Anhang D Nutzungsmodus, RAG, Agenten/Deep Research, Prozesse/BPMN, n8n, Ausblick, Übungen Ü1–Ü7, Online-Material; Primer-Vollfassungen | – | entfällt (in Kap. 2, 3, 4.4, 6 schon abgedeckt oder nicht mit echten Diensten geprüft) |

## Druckumfang (scripts/zaehle_druck.py)

| Kapitel | vorher | nachher | Differenz |
|---|---|---|---|
| Kap. 2 | 9 888 | 10 544 | +656 |
| Kap. 4 | 11 677 | 12 231 | +554 |
| Kap. 6 | 7 165 | 7 212 | +47 |

`scripts/zaehle_druck.py` liegt jetzt im Repo (Kopie aus `notes/kapitel02-neugliederung/`).

## Repo
- Branch `archiv-integration`: `a09a446` Kap. 2, `8c8b711` Kap. 4, `d4ce379` Kap. 6, `12964a8` docs/. Fast-Forward nach `main` (@ `12964a8`), gepusht.
- Prüfung: `quarto render --to html` (1.8.25), nur die 36 bekannten OJS-Warnungen, kein `?@`. `node --test tests/streich-test.test.mjs` 8/8. Playwright 1200/390 px ohne JS-Fehler; axe (WCAG 2 AA) für beide Tabellen und beide Kästen ohne Befund. `@tbl-bausteine` war bei 390 px zu breit, deshalb stehen beide Tabellen jetzt in `.tabelle-scroll`. Den Überlauf der Titelzeile bei 390 px gab es schon vorher.
- Download-PDF/EPUB in `docs/` aus Git zurückgeholt (alter Stand, Druck-Sitzung Nr. 13).
- Live geprüft nach Pages-Lauf: Kap. 2, 4, 6 mit allen neuen Elementen, keine JS-Fehler.

## Offen
- PDF-Druckpfad nicht getestet: Tabellen stehen außerhalb von Callouts, Kästen enthalten nur Listen. Bitte in der Druck-Sitzung (Nr. 13) prüfen: `@tbl-einschraenkungen` und `@tbl-bausteine` im Tabellenverzeichnis, Umbruch der beiden Kästen in Kap. 4.
- `_archiv-anhaenge/` bleibt als Archiv erhalten (Übungen Ü1–Ü7, Primer-Vollfassungen, Skill-Dateien). Ob einzelne Übungen später online zurückkehren, ist nicht entschieden.
- Kap. 2 hat jetzt 10 544 Druckwörter; Kürzungsreserve ist der Absatz „Offene Modelle auf dem eigenen Laptop“ (−120).

## Startauftrag nächste Sitzung
Nächster freier Schritt laut Reihenfolge: Nr. 6 (S3 Bibliothek der Prompts) oder Nr. 7 (S4 Detektor-Duell); Prompts in `claude/PROMPTS-naechste-schritte-2026-11-02.md`.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja)
