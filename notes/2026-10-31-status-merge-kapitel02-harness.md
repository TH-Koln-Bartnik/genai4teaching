# Status: Merge Kapitel 2.1.3 „Modell, Harness und Agent“ (31.10.2026, ca. 09:00)

Grundlage: `claude/status-harness-kapitel02-2026-10-30.md` (Projekt).

## Repository
- **Gemergt.** `main` = `revision-2026-druck` = `kapitel02-harness` = `9c96aef`, gepusht. Fast-Forward; vorher `revision-2026-druck` (`de5a721`, Aufmerksamkeitsurteil Phase 2, nur `reviews/`) in den Branch gemergt, konfliktfrei.
- Branches `kapitel02-harness` (`9b614b2`), `p1-bereinigung` (`2edb196`) und `p1-merge-bereit` (`562d7ac`) sind löschbar: `p1-merge-bereit` ist Vorfahr von `main`; `p1-bereinigung` enthält nur ältere Fassungen von Text, der in `main` überarbeitet steht (u. a. die entfernte alte Harness-Definition), keine Quelltext-Kommentare mehr in `main`. Löschen aus der Cloud-Sitzung scheitert am Proxy (HTTP 403 für Branch-Löschung, auch per API); im GitHub-Webinterface unter Branches löschen.
- `docs/` mit **Quarto 1.8.25** gerendert (dieselbe Version wie die bisherigen `docs/`; 1.10.19 hätte `site_libs` ausgetauscht). Nur `--to html`; Download-PDF/EPUB in `docs/` unverändert vom Stand 29.10. Keine unaufgelösten Verweise, nur die bekannten 36 OJS-Warnungen aus Kap. 4. Sichtprüfung im Browser: Tabelle 2.1 und Animation `harness-schichten.html` laden ohne JS-Fehler.
- Lokaler Klon in Tresorit bleibt veraltet (Stand `af29ff9`); vor Arbeit dort neu klonen.

## Belege (live geprüft per Websuche, 31.10.)
| Schlüssel | Ergebnis |
|---|---|
| yao2023react | Titel und sieben Autoren laut arXiv 2210.03629 korrekt; ICLR 2023 |
| schick2023toolformer | Neun Autoren inkl. Hambro laut NeurIPS-36-Proceedings korrekt |
| anthropic2024mcp | Datum 25.11.2024 bestätigt |
| deci2000 | Psychological Inquiry 11(4), 227–268 bestätigt; DOI-Muster des Hefts passt (Ryan & Deci 2000b = …PLI1104_03) |
| holec1981 | Oxford: Pergamon (für den Council of Europe) bestätigt; Erstfassung 1979 Strasbourg |
| sae2021j3016 | URL und Datum 30.04.2021 bestätigt; **DOI 10.4271/J3016_202104 ergänzt** |

Hinweis: WebFetch (direkter Seitenabruf) blieb ohne Freigabe; geprüft wurde über die Websuche mit Treffern der Originalseiten (arXiv, NeurIPS-Proceedings, SAE Mobilus).

## Genus „der Harness“ (Commit `c0cd377`)
- Kap. 1.2: „einen passenden Harness wählen“; Rückverweis „ausführlich in @sec-harness“ ergänzt.
- Anhang D: „ob ein Modell einen Harness hat“.
- Anhang E, Lösungshinweis Kap. 1 Frage 3: „der Harness der Werkzeugkasten“, „ein fehlender Harness“.
- Glossar „Harness“: Verweis Kap. 2.1.2 → 2.1.3.
- Nebenbei: Modellübersicht zeigte „Tabelle Tabelle 2.2“; behoben. Durch die neue Tabelle 2.1 (`tbl-harness-wandel`) ist `tbl-modellstand` jetzt Tabelle 2.2; alle Querverweise laufen über Quarto und stimmen.

## Offen
1. Druck-PDF rendern (Umbruch Tabelle 2.1, Graustufen-Druckbild `harness-schichten-qr.png`, Seitenzahl seit 29.10. nicht gemessen); danach Druckvorlage nach `docs/downloads-genai4teaching.pdf` kopieren (Reihenfolge laut README).
2. Tresorit: Die drei Statusnotizen (diese, `status-harness-kapitel02-2026-10-30.md`, `primer/STATUS-primer-p1-p2-2026-10-31.md`) sind am 31.10. nach `Projektnotizen-Claude/` gespiegelt. Abgleich per Dateiname zeigt 41 weitere Projektnotizen, die in Tresorit fehlen (u. a. `primer/*`, `mollick-2026/*` vom 30.10., `harness-animationen/*`, `agentic-animationen/konzept6-kugel` und `konzept7-*`, `lernsongs/konzept-lernsong-baukasten`, `k4-wirkungsketten-*`); dafür eine eigene Sitzung nach `claude/AUFTRAG-tresorit-sync-2026-10-30.md`.
3. Branches `kapitel02-harness`, `p1-bereinigung`, `p1-merge-bereit` im GitHub-Webinterface löschen (aus der Cloud-Sitzung gesperrt).
4. Roman: Online-Fassung von 2.1.3 einmal auf GitHub Pages ansehen.
