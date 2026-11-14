# Status: Kurztitel und Fußnoten für Abbildungen und Tabellen (14.11.2026, Sitzung kurztitel-fussnoten)

Auftrag Roman (14.11.): Abbildungen und Tabellen bekommen Kurztitel; Detailbeschreibung, Quellennachweis und Legende wandern in eine Fußnote.

## Entscheidungen (MC, 14.11.)
- Fußnote in allen Ausgaben (online als Popup und am Seitenende, PDF, EPUB).
- Kurztitel als kurzer Aussagesatz.
- Kurztitel-Liste vorab freigeben, dann einbauen.
- Repo-Zugriff mit Push erneut angefragt und erhalten.

## Stand
- Branch `kurztitel-fussnoten` von `pdf-testbau` @ `c0425b1` (`pdf-testbau` ist noch nicht auf `main`; dort steckt der Automatik-Kurztitel für das Abbildungsverzeichnis, `_filters/druck-satz.lua` Abschnitt 3).
- Vorschlag: `VORSCHLAG-kurztitel-fussnoten-2026-11-14.md` (46 Abbildungsunterschriften, 27 Tabellen; Web- und Druckfassungen getrennt). Daten zum Einbau: `vorschlag.json`, erzeugt mit `vorschlag.py`.
- Noch nichts an Kapiteldateien geändert.

## Technischer Befund (Testbuch, Quarto 1.8.25, XeLaTeX)
- Markdown-Fußnote in der Unterschrift funktioniert für Abbildungen und Tabellen außerhalb von Kästen: Verzeichnis zeigt nur den Kurztitel, `\footnotetext` folgt der Abbildung.
- In Kästen (Callouts) bricht LaTeX ab („Argument of \caption@listentry@ has an extra }“), weil Quarto die Fußnote dort zu `\footnotemark` macht und kein Kurztitel fürs Verzeichnis entsteht. Abhilfe getestet: Filter setzt für Gleitobjekte in Kästen `fig-scap` bzw. `caption.short` = Unterschrift ohne Fußnote.
- `fig-scap` außerhalb von Kästen verschluckt den Fußnotentext. Deshalb muss `druck-satz.lua` Abschnitt 3 (setzt `fig-scap` automatisch) entfallen oder auf Kästen beschränkt werden.
- Gleitende Abbildungen (`fig-pos: htbp`) können auf die Folgeseite wandern, die Fußnote bleibt an der Quellposition. Plan: im PDF `fig-pos="H"` für Abbildungen mit Fußnote, Weißraum danach prüfen.
- `fig-detektor-duell` wird von `scripts/detektor-einbetten.py` erzeugt: dort ändern, nicht in `_einbau/`.
- Kap. 4: Die Zeilen „*Quelle: Erstellt mit Gemini 3 Pro …*“ unter den drei Illustrationen wandern in die Fußnote.

## Startauftrag nächste Sitzung (falls diese endet)
```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (Push-Zugriff), Branch kurztitel-fussnoten.
Lies notes/kurztitel-fussnoten/STATUS-kurztitel-fussnoten-2026-11-14.md und den VORSCHLAG daneben.
Nach Romans Freigabe: Kurztitel + Fußnoten aus vorschlag.json einbauen (Skript, nicht von Hand),
Filter für Gleitobjekte in Kästen, druck-satz.lua Abschnitt 3 ersetzen, fig-pos H im PDF,
detektor-einbetten.py anpassen; HTML, PDF (--profile print), EPUB rendern; Verzeichnisse und
Fußnotenseiten als Bild prüfen; docs/ aus Git zurückholen. Fragen nur als Multiple Choice.
```
