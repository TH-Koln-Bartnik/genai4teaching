# Status: Vorwort-Abschnitt „Wie dieses Buch lehrt“ (02.11.2026)

Grundlage: `claude/didaktik/UEBERSICHT-didaktische-mechanismen-2026-11-02.md` (12 Mechanismen mit Wirkweise, Beispiel, Ort, Stand; DOIs per Crossref geprüft).

## Entscheidungen Roman (MC, 02.11.2026)
- Übersicht als Vorwort-Abschnitt umsetzen; pushen und mergen.
- Zwei Zusagen beschreiben den Zielzustand und bleiben so stehen (Einstiegsszene „jedes Kapitel“, bisher Kap. 1–3; Wiederkehr der Schlüsselbegriffe, bisher nur Kasten in Kap. 1). Ein Kommentar im Quelltext hält das fest.

## Was entstanden ist
- `vorwort.qmd`: Abschnitt `{#sec-wie-dieses-buch-lehrt}` nach den Lernpfaden, 266 Wörter Prosa + `@tbl-mechanismen` (12 Zeilen: Mechanismus, Wirkweise, Wo Sie ihm begegnen). Querverweise in der Tabelle als kurze Links, nicht als `@sec-` (die volle Abschnittsüberschrift sprengte die Zellen).
- `references.json`: `kornell2008`, `tippett2010` neu (`butterfield2001` lag schon vor).
- `include/style.css`: `#tbl-mechanismen { overflow-x: auto; }` – die Tabelle scrollt bei 390 px in sich.
- Nach Merge in Kommentar vorgesehen: Hyperkorrektur (Streich-Test, Höher oder tiefer, Detektor-Duell), Genrefilme mit Haltepunkten, Escape Room Kap. 2.

## Prüfung
- `quarto render --to html` (1.8.25): nur die bekannten 36 × „OJS block count mismatch“; keine `?@`; „Tabelle 1“ verlinkt; Download-PDF/EPUB aus Git zurückgeholt.
- Playwright 1200/390 px: keine JS-Fehler; Tabelle bei 390 px 339 px sichtbar, scrollt intern. Seitenbreite Vorwort 447 px stammt nicht aus der Tabelle (Kap. 1: 410 px, Kap. 5: 753 px, Altbestand).
- Druckpfad nicht gerendert (kein TeX im Container).
- Merge `8a51f07` auf `main` gepusht; Live-Seite zeigte den Abschnitt drei Minuten nach dem Push noch nicht (Pages-Lauf ausstehend, nicht weiter geprüft).

## Offen
- Live-Prüfung des Vorworts.
- Kap. 4–6: Einstiegsszene + Einschätzungen; Schlüsselbegriffe Kap. 2–6 – erst dann stimmen die beiden Zusagen.
- Tabelle nach Merge von P1, S1, S4, S5/P6, Escape Room um die Zeile Hyperkorrektur ergänzen.

Ablage geprüft: Projekt `claude/didaktik/`, Repo `notes/`; Tresorit offen (Ordnerfreigabe nicht erteilt).
