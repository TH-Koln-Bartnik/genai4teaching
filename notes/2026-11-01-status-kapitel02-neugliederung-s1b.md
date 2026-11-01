# Status S1b: Kapitel 2 nach dem 4D-Modell neu gegliedert und gekürzt (01.11.2026, ca. 16:30)

Auftrag: Abschnitt S1b in `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md`, Plan `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md`. Sitzung `session_01NiJQCWhrSL2NiFXW6tur5p`.

**S1b ist vollständig erledigt und gemergt.** Der Startauftrag „S1b Teil 2“ aus `STATUS-kapitel02-neugliederung-teil1-2026-11-01.md` ist damit überholt und darf nicht mehr gestartet werden.

## Entscheidungen Roman (MC, 01.11.)
- Repo mit Push, Tresorit verbunden; alles in dieser Sitzung, Diff-Freigabe je Commit.
- Kernaussagen: **7** (Arbeitsweisen als Satz in der Delegations-Aussage, keine neue Lernfrage).
- Commit 1 freigegeben, einschließlich Abweichung: P&G-Studie steht bei Centaur/Cyborg in 2.3.4 (gleiches Team, N25), nicht in 2.3.1.
- Commit 2 freigegeben, Merge, docs/.

## Doppelung mit paralleler Sitzung
Eine zweite Sitzung hat parallel „S1b Teil 1“ bearbeitet, auf meinem Commit 1 (`697a78a`) aufgesetzt und Querverweise plus Glossar committet (`3aa5bc4`, `8bd9812`, Notizen `8fc42c5`–`3fded86`). Sie hielt diese Sitzung für beendet. Ich habe meine Commits auf ihren Stand gesetzt (rebase). Ihre Querverweise waren mit meinen identisch; beim Glossar gilt ihre Fassung (`@sec-…`: Druck „Kapitel 2.7.1“, online der Abschnittstitel als Link). Ihre Merkposten 1–4 sind in Commit 2 erledigt (Überschrift 2.2.2 gekürzt, Vertiefungshinweis, P&G nach Entscheidung Roman in 2.3.4, Prüfmethoden-Satz in 2.5). Offen aus ihrer Notiz: Branch `kapitel02-neugliederung-sitzung-b` auf GitHub löschen (Proxy lässt Löschen nicht zu).

## Entstanden (Repo, `main` @ `2b5ab18`, gemergt)
- `697a78a` Commit 1: nur Verschieben (Wortzahl 13.522 vorher und nachher, jede Textzeile identisch).
- `bf47d63` Commit 2: Kürzungen N1–N38, Brücken (Einstiege 2.3–2.6 mit Leitfrage aus `@tbl-4d`, Bezug „oben gezeigtes Beispiel“ ersetzt durch Kesslers erfundene Quelle), Lernziele nach 4D, 7 Kernaussagen, Einschätzungen in Lesereihenfolge `ez-k2-3, ez-k2-1, ez-k2-4, ez-k2-2` (IDs unverändert), Lernfragen 1 und 8 mit „(Vertiefung, @sec-vertiefung)“, Vertiefung mit Hinweis „kann übersprungen werden“, Kasten „Warum AI Fluency?“ mit Ersatzanker `sec-schemas-rahmen` (Tabelle online, Druck QR `images/qr/qr-kompetenzrahmen.png`, Skript `scripts/qr-kompetenzrahmen.py`), Skill-Karte nicht mehr eingebunden (Datei bleibt), Kurs-Bot und Gedächtnis-Fall nur online, Fuhrwerk- und Modellstand-Tabelle scrollbar.
- `a322b38` Lernpfade (Linie 2 hält an 2.1; Karte, Widget, Druck-SVG neu erzeugt), LM-Arena-Hinweis in die Modellübersicht (N19), `notes/kapitelauftakt-einschaetzungen.md`.
- Skripte `notes/kapitel02-neugliederung/schritt1.py`, `schritt2.py` (bauen Kap. 2 reproduzierbar aus dem Stand `fdb087a`), `zaehle_druck.py` (Druckwortzahl ohne reine Online-Inhalte).
- `c4cda4f` Merge, `2b5ab18` docs/ (Quarto 1.8.25, `--to html`; Download-PDF/EPUB per SHA256 unverändert).

## Prüfung
- Wortzahl: Druck 13.221 → **9.977 (−24,6 %)** mit `zaehle_druck.py`; gesamt einschließlich Online-Inhalten 13.522 → 10.777 (`zaehle_kapitel.py`). Der Plan rechnete die online verschobenen Teile (N1, N18, N28) als gekürzt, deshalb ist die Druckzählung der passende Vergleich.
- Render `--to html`: nur die bekannten 36 × „OJS block count mismatch“, kein `?@`.
- Playwright 1200/390 px: 19 iframes geladen, keine JS-Fehler, alle Anker vorhanden; 390 px Seitenbreite 398 statt 657 px (Rest: lange URL; der Buchtitel in der Navigationsleiste ragt auf allen Seiten über, nicht Teil dieses Umbaus).
- LaTeX-Testrender (`--profile print --to pdf`, TeX-Paket fontawesome5 in der Cloud nachinstalliert): Kap. 2 **58 → 48 Seiten**, Buch 400 → 386, keine `??`; einzige Warnung `@tbl-prompts-online` bestand schon vorher. Druckseiten Kapitelauftakt und Kasten angesehen.
- Live (GitHub Pages, Build `2b5ab18` erfolgreich): Vertiefungshinweis vorhanden, Skill-Karte entfernt, Anker `sec-schemas-rahmen` vorhanden.
- Zitierschlüssel, die aus Kap. 2 entfallen: `jones2025`, `korinek2024`, `lovely2025`, `naddaf2025` (N20/N21), `deci2000` (N5); Einträge in `references.json` bleiben.
- Abbildungsrechte: entfallen sind nur eigene Darstellungen (Skill-Karte, Tabelle Harness-Wandel); keine Rechtefrage.

## Hinweise für Folgesitzungen
- `claude/fachbegriffe/rag-erklaerung-2026-11-01.patch` passt nicht mehr auf Kap. 2 (Zeilen verschoben); S6 baut die RAG-Erklärung von Hand ein (RAG-Satz steht jetzt in 2.3.2).
- Einbaustellen S3/S4/S5/S8 wie im Plan: Scaling Laws ersetzt den Absatz „Den Fähigkeitszuwachs beschreiben zwei Scaling Laws …“ in 2.3.1; Rollenkarte nach dem Absatz „Mit stärkeren Agenten …“ in 2.3.4; Audio nach „Zum Standardumfang der großen Chat-Interfaces …“ am Ende von 2.3.1; Escape Room als 2.8 vor den Kernaussagen.
- Sprachcheck S9 für Kap. 2 kann jetzt laufen (nach S3–S5-Einbau).

## Offen
1. Branch `kapitel02-neugliederung-sitzung-b` auf GitHub löschen (Roman, Weboberfläche).
2. Nächste Sitzungen laut Feedback-Plan: S6 (Fachbegriffe, buchweit), Einbau S3/S4/S5, dann S9.

## Candidate permanent notes
- Eine Kürzung lässt sich nur am Druckumfang messen, wenn online verschobene Inhalte aus der Zählung fallen.
- Ein Umbau, der aus Zeilenblöcken des Originals per Skript entsteht, bleibt prüfbar, weil jede unveränderte Zeile nachweislich unverändert ist.
- Eine Neugliederung entlang eines Kompetenzmodells verkürzt ein Kapitel, weil Doppelungen zwischen Abschnitten sichtbar werden.

## Ablage
- Projekt: `claude/feedback-2026-11-01/STATUS-kapitel02-neugliederung-s1b-2026-11-01.md`; Stand-Nachtrag in `PLAN-feedback-sitzungen-2026-11-01.md`.
- Tresorit: `Projektnotizen-Claude/feedback-2026-11-01/STATUS-kapitel02-neugliederung-s1b-2026-11-01.md`.
- Repo: `notes/2026-11-01-status-kapitel02-neugliederung-s1b.md` auf `main`.
