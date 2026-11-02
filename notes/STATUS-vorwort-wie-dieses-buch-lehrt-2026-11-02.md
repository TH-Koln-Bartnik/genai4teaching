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

## Fassung 2 (02.11.2026, 14:00, Rückmeldung Roman: „zu kleinteilig, Reihenfolge willkürlich“)
- Gruppiert nach Lernzielen (Anderson & Krathwohl, 2001): Erinnern, Verstehen, Anwenden; Gruppen und Zeilen nach Stärke der Befunde geordnet.
- Zehn statt zwölf Zeilen: Rückmeldung in Abrufübung, Hyperkorrektur in „Fehlvorstellungen widerlegen“ aufgegangen; Signalisieren nur noch als Gestaltungsprinzip in der Übersicht.
- Neue Spalte „Kanonische Quelle“: roediger2006, cepeda2006, richland2009, wallace1994, sweller1985, tippett2010, kornell2008, mar2021, chi2014, wood1976. Neu in `references.json`: wallace1994, wood1976, sweller1985 (DOIs per Crossref geprüft).
- Streich-Test ist inzwischen auf `main` (2.4, `#sec-streichtest`) und steht in der Tabelle.
- Prosa 243 Wörter, gleiche Gruppenfolge wie die Tabelle. Render ohne neue Warnungen, Playwright 1200/390 px ohne JS-Fehler. Commit `a0cd3db` auf `main`.

## Vorwort und Übersicht zusammengelegt (02.11.2026, 14:30, Auftrag Roman: „in dieser Reihenfolge“)
- `index.qmd` ist jetzt die Seite „Vorwort“ (`#sec-vorwort`): Einleitungsabsatz, Lernpfade, „Wie dieses Buch lehrt“, danach `## Übersicht` (`#sec-uebersicht`, Kapitel- und Anhangsliste), `## Updates seit der Vorversion` und `## Didaktische Kurse` (die beiden letzten weiter nur online).
- `vorwort.qmd` gelöscht und aus `_quarto.yml` entfernt. Quarto verlangt `index.qmd` als Startseite, deshalb wanderte das Vorwort dorthin und nicht umgekehrt.
- Alte Adresse: `aliases: [vorwort.html]` erzeugt `docs/vorwort.html` als Weiterleitung; Anker bleiben erhalten (`vorwort.html#sec-wie-dieses-buch-lehrt` → `index.html#sec-wie-dieses-buch-lehrt`, per Playwright geprüft).
- Angepasst: Link in Kap. 1 (`index.qmd#sec-lernpfade`), URL im Druck-Selbsttest (`…/genai4teaching/#sec-lernpfade`), `notes/s6-fachbegriffe/kandidaten.py`.
- Prüfung: `quarto render --to html` (1.8.25) nur die bekannten 36 × „OJS block count mismatch“, kein `?@`; Playwright 1200/390 px ohne JS-Fehler, Abbildung Lernpfade und `@tbl-mechanismen` vorhanden; Download-PDF/EPUB aus Git zurückgeholt. Druckpfad nicht gerendert (kein TeX).
- Commit `0a8184d` auf `main` gepusht (gemergt: ja).
- Hinweis zur Übersicht: Die Kapitelliste nennt Kap. 1 „Einleitung: KI als Hilfe zum Lehren und Lernen“, die Überschrift lautet nur „Einleitung“; Anhang B heißt im Text „…und Aufgabenstellungen“, in der Überschrift „…und GenAI Aufgabenstellungen“. Inhalt bewusst unverändert gelassen.
- Offen: Live-Prüfung nach dem Pages-Lauf; bei der nächsten PDF-Sitzung prüfen, wie das Vorwort mit Übersicht im Druck umbricht.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (`main` @ `0a8184d`, gemergt: ja)

## Fassung 3 (02.11.2026, 14:10, Auftrag Roman)
- Advance Organizer als Mechanismus aufgenommen (Tabellenzeile „Vorangestellte Ordnungshilfe (*advance organizer*)“ unter Verstehen, vor „Geschichte als Einstieg“, Quelle `@ausubel1960`); je Mechanismus Fachbegriff im Fließtext mit Beispiel; für Erstlesende beschrieben, was vorliegt („Am Ende jedes Kapitels stehen Lernfragen …“). Commit `82a4470`.

## Fassung 4 (02.11.2026, 14:20, Entscheidung Roman nach Bewertung Classic Prose: 1a, 2a, 3a)
- Bewertung: `claude/didaktik/BEWERTUNG-vorwort-classic-prose-2026-11-02.md` (Projekt). Hauptbefund: Abstrakta als Handelnde, Hecken, Genitivketten, Klammer-Etiketten am Satzende.
- Ganzes Vorwort in Ich-Stimme neu geschrieben (Einleitungsabsatz, Lernpfade, „Wie dieses Buch lehrt“, Einleitung der Übersicht); Listen, Selbsttest, Updates und Kurse unverändert. Fachbegriff fett als Satzsubjekt, dann Ort im Buch mit „Sie“/„ich“, Wirkung am Satzende. Lernpfade: zwei Leser (Informatiker, Kollegin) als Denkfigur, nicht als beobachtete Szene; Morehead und Kalyuga mit handelnden Forschenden.
- Tabellenbegriff vereinheitlicht: „Selbst-Erzeugen“. „Wie dieses Buch lehrt“ ≈ 550 Wörter Prosa.
- Offen: Name „Taskforce GenAI in der Lehre … seit 2026“ prüfen (sonst Expertisezirkel GenKI?). Kapitel sprechen weiter mit „wir“, das Vorwort mit „ich“ (gewollt).
- Prüfung: `quarto render --to html` (1.8.25) nur 36 × „OJS block count mismatch“, kein `?@`; Playwright 1200/390 px ohne JS-Fehler, `#tbl-mechanismen` vorhanden; Download-PDF/EPUB aus Git zurückgeholt. Druckpfad nicht gerendert.
- Commit `da1f5ee` auf `main` gepusht (gemergt: ja).

Ablage geprüft: Projekt ✓ / Tresorit ✗ (kein Ordner verbunden) / Repo ✓ (`main` @ `da1f5ee`)
