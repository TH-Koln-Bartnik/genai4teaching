# Abbildungsrechte: Patch eingespielt, gerendert, gepusht (Stand 01.11.2026, ca. 11:00)

Vorgeschichte: Projekt `claude/abbildungsrechte/STATUS-abbildungsrechte-pruefung-2026-11-01.md`. Auftrag: `claude/abbildungsrechte/AUFTRAG-abbildungsrechte-einspielen-2026-11-01.md`.

## Erledigt
- `main` stand bei `f69042c` (22 Commits über `705dc7e`). `git am -3 abbildungsrechte-2026-11-01.patch` lief ohne Konflikt (Commit `d60d364`, inkl. Löschung der sechs alten Bilder). Keine verwaisten Verweise auf die gelöschten Dateien in `.qmd`/`.yml`.
- HTML (`quarto render --to html`, Quarto 1.8.25): nur die bekannten 36 OJS-Meldungen; `?@`/`???` in Kap. 1–5: 0. Abb. 1.1 (Bloom), 4.2 (O*NET; 4.1 bleibt der Tutor-Bot-Screenshot), 5.1 (Interaktionsarten), 5.2 (vier Säulen) im Browser angesehen: sauber.
- Druck-PDF (`--profile print --to pdf`, Cloud mit TeX Live + `texlive-fonts-extra` für `fontawesome5`): **402 Seiten** gegen **404** für `origin/main` ohne Patch (gleiches Setup gerendert). Abbildungsverzeichnis 60 → 58 Einträge; „Visualisierte Gedanken“ (Kap. 2, im Verzeichnis noch mit rohem `[@lindsey2025]`) und die Tay-Quadranten (Kap. 4) sind weg. Die vier neuen Abbildungen auf S. 12, 104, 154, 155 (gedruckte Seitenzahlen) stehen beim Text, kein Umbruchproblem.
- Einzige Crossref-Warnung im PDF: `@tbl-prompts-online` – besteht schon ohne Patch.
- `docs/` neu gerendert (HTML); Download-PDF/EPUB unverändert zurückgelegt. Gepusht nach Freigabe-Regel „direkt, wenn sauber“.

## Hinweise für spätere Sitzungen
- `quarto render --profile print --to pdf` leert `docs/` (Buchprojekt-Ausgabeordner). Vorher `docs/` sichern oder HTML danach neu rendern.
- Im Abbildungsverzeichnis stehen jetzt die vollen Lizenz-Unterschriften (O*NET 4.2 und Gmeiner 5.2 über mehrere Zeilen). Wer das kürzen will: `fig-scap` (Kurzunterschrift fürs Verzeichnis) setzen.
- Druckgröße: O*NET-Grafik (4.2) und die Stufenbeschreibungen in 1.1 sind im Druck klein (Schrift knapp 6 pt). Lesbar, aber bei der Satzkorrektur anschauen; ggf. `width` erhöhen.

## Offen für Roman
- Eigene Beispiele in Abb. 5.1 (Break-even, Artikelzusammenfassung, ABC-Analyse, Gliederungsfeedback) und deutsche O*NET-Kurzfassungen in Abb. 4.2 gegenlesen.
- Keine juristische Prüfung; bei Zweifeln Publikationsservice der Bibliothek fragen.
