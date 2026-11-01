# Status: Merge `wiss-schreiben-a-d` und Website live (01.11.2026, ca. 10:45)

Auftrag: `claude/wiss-schreiben/AUFTRAG-merge-wiss-schreiben-a-d-2026-11-01.md`.

## Entscheidungen Roman (01.11., Multiple Choice)
- Hängendes Pages-Deployment (`4cadf3a`): Roman bricht in GitHub Actions selbst ab. Erledigt.
- Zweig `wiss-schreiben-a-d`: mergen und `docs/` rendern. Die Wahl fiel auf diese Option statt „Erst Kürzung“, damit bleibt `tbl-werkzeugtyp-phase` vorerst auch im Druck.

## Erledigt
1. Probe-Merge auf `main` @ `32c7333`: konfliktfrei (6 Dateien, +301 Zeilen). Alle neuen Zitate und Querverweise lösen sich auf, `references.json` hat 468 Einträge ohne Dubletten.
2. Merge `--no-ff` nach `main`: **`71d624c`**, gepusht.
3. `docs/`: Die parallele Sitzung (Kapitelauftakt Kap. 2/3) hat direkt danach beide Merges gemeinsam gerendert (**`f69042c`**, Quarto 1.8.25, Download-PDF/EPUB unverändert). Mein eigener Render-Commit war damit doppelt und wurde verworfen, nicht gepusht.
4. Geprüft in `docs/` auf `main`: Kap. 4 enthält „Literaturrecherche in vier Phasen“, `sec-bots-quellentreue` und `tbl-werkzeugtyp-phase`; Kap. 5 „Eine Fakultätsregel auf einer Seite“; keine `quarto-unresolved-ref`. Sichtprobe Tabelle 4.3 bei 1280 px: korrekt.
5. **Website live:** `schreibtrainer.html` liefert 200, und `kapitel04.html` zeigt den neuen Kasten online. Keine JS-Fehler auf den Live-Seiten Kap. 3/4.

## Offen
1. Urheberzeile Absatztrainer (Bot 8): Roman gab am 01.11. „gemeinsam entwickelt (Bartnik & Schmid)“ an, `schreibtrainer.qmd`, `downloads/schreibtrainer/absatztrainer.md` und 4.2.1 nennen nur Julia Schmid. Angleichen oder so lassen? (Roman fragen.)
2. PDF-Probe Kap. 4/5 (Tabellenbreiten `tbl-werkzeugtyp-phase`, `tbl-schreibtrainer`, QR-Code): Im Cloud-Container fehlt TeX, die Probe lief daher nicht.
3. Umfang A–C liegt über +800 Wörtern; Kandidat zum Kürzen: `tbl-werkzeugtyp-phase` nur online.
4. Korrekturliste BOT2–BOT7 → kopierbare Fassungen auf `schreibtrainer.qmd` (falls gewünscht).
5. Übung aus `sec-bots-quellentreue` einmal selbst durchführen.

## Hinweis für Folgesitzungen
Mehrere Sitzungen mergen und rendern parallel auf `main`. Vor jedem Render-Commit `git fetch` ausführen und prüfen, ob `docs/` schon neu gerendert wurde.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (Merge `71d624c` gepusht, gemergt: ja; docs `f69042c`; Website live)
