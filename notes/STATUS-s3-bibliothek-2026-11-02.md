# STATUS S3: „Die Bibliothek der Prompts“ (02.11.2026)

Auftrag: `claude/mollick-formate/AUFTRAG-s3-bibliothek-prompts-2026-11-02.md` (Startprompt Nr. 6 aus `claude/PROMPTS-naechste-schritte-2026-11-02.md`). Schritte 0–9 ausgeführt; offen ist nur **G3 (Merge)**.
Bauzeit: 15:02–15:40 (eine Sitzung, Agent Claude Opus 5.5, dazu fünf Teilagenten für die Übersetzung).

## Ergebnis in einem Satz
Kap. 4.1 „Was sind unsere Aufgaben?“ hat zwischen dem Absatz über Zeitanteile und „Woraus besteht das im Detail …“ einen Block `#sec-bibliothek-prompts` mit einer begehbaren 3D-Bibliothek (22 Regale = SOC-Hauptgruppen, 470 Bücher = Berufe, Buchbreite = Anteil der Gespräche) samt gleichwertiger Listenansicht, einem Ratekasten für den Druck und der Lösung in Anhang B.

## Repo
- Branch `mollick-s3-bibliothek`, gepusht, **nicht gemergt**. Commits `f74d3ad` (Quelle), `69d1594` (docs/), dazu die Statusnotiz unter `notes/`. Basis `main` @ `02f5868` (unverändert bis 15:35).
- Neu: `interactions/bibliothek-der-prompts.html` (894 KB, offline, kein CDN), `interactions/data/aei-bibliothek.json`, `_src/bibliothek/` (vorlage.html, app.js, raum.js, texte.js, aufloesung.json, poster.jpg), `scripts/aei-bibliothek.py`, `scripts/aei-bibliothek-de.json`, `scripts/aei-bibliothek-stichprobe.py`, `scripts/build-bibliothek.mjs`, `scripts/poster-bibliothek.mjs`, `scripts/pruefe-bibliothek.mjs`, `tests/bibliothek.test.mjs`, `tests/fixtures/aei-bibliothek-stichprobe.json`, `images/druck/bibliothek-der-prompts.svg`, `images/qr/qr-bibliothek-prompts.png`.
- Geändert (nur Einfügungen): `kapitel04.qmd` (+50 Zeilen nach Z. 70), `kapitel10-appendix05-loesungshinweise.qmd` (Lösungsabbildung `@fig-bibliothek-loesung`, nur Druck, Anfang „Kapitel 4“), `references.json` (am Ende angehängt: `massenkoff2026cadences`, `onet2026database`), `scripts/druck-abbildungen.mjs` (neue Funktion `bibliothek()` + QR), `package.json`/`package-lock.json` (devDependencies `three@0.187.0`, `esbuild@0.28.2`; `npm test` schließt `tests/bibliothek.test.mjs` ein).
- Neu bauen: `python3 -I scripts/aei-bibliothek.py <aei.csv> <task_statements.csv>`, `python3 -I scripts/aei-bibliothek-stichprobe.py <aei.csv> <task_statements.csv>`, `node scripts/build-bibliothek.mjs`, `npm run druck`, `npm test`; Browserprüfung `node scripts/pruefe-bibliothek.mjs <ordner>`.

## Konflikte beim Merge mit S1 (`mollick-s1-hoeher-tiefer`)
- `references.json`: S1 fügt `massenkoff2026cadences` (identisch) und `richland2009` (steht schon in main) in der Dateimitte ein. Wer als Zweiter mergt, entfernt das Duplikat `massenkoff2026cadences` (Prüfung mit `node --test tests/streich-test.test.mjs`).
- `package.json`, Zeile `"test"`: beide Branches ergänzen eine Testdatei → beide Dateien aufnehmen.
- `scripts/druck-abbildungen.mjs`: beide ergänzen eine Funktion und einen QR-Aufruf am Dateiende → beide behalten.
- `kapitel10-appendix05-loesungshinweise.qmd`: S1 schreibt in „Kapitel 1“, S3 in „Kapitel 4“ → kein Konflikt; Abbildungsnummern B.x verschieben sich.
- Daten: S1 ist nicht in main, deshalb eigenes Auszugsskript; gleicher Datensatz (SHA-256 `f974b358…7b68`), gleicher Datenmonat, Aufgabenübersetzungen aus S1 wörtlich übernommen (70 IDs).

## Daten (alle Zahlen aus der Skript-Ausgabe)
- Release 2026-06-26 ist weiterhin das neueste (HF-API 02.11., 15:03). Datenmonat **Mai 2026**, `GLOBAL`, `soc_occupation`, `pct`. O*NET: **31.0 Database** (`db_31_0_csv/task_statements.csv`, CC BY 4.0, Vermerk nach O*NET-Vorgabe gesetzt; Erscheinungsmonat steht nicht auf der Downloadseite, zitiert als 2026).
- 22 Regale, 718 veröffentlichte Einzelberufe, davon 470 als Buch (höchstens 40 je Regal, Berufe mit gerundet 0,00 % immer im Sammelbuch), 20 Sammelbücher „weitere Berufe“. Buchbreiten 0,01–5,10 %; 65 Bücher ohne Aufgabe mit Anteil über 0,00 % (meist „sonstige …“-Sammelcodes).
- **SOC 25 weltweit: Platz 3, 12,79 %; Deutschland: Platz 2, 12,87 %.** Top 3 weltweit: Informatik und Mathematik 23,80 %, Kunst/Design/Unterhaltung/Sport/Medien 13,55 %, Bildung/Ausbildung/Bibliothek 12,79 %.
- **Primer-Angabe „drittes Regal, 13 %“ bestätigt** (12,79 %, gerundet 13 %).
- Befund für die Auflösung: Das Buch „Bibliotheken und Mediensammlungen“ trägt 4,22 %, davon 3,74 % die Aufgabe „Nachschlagewerke und Internet durchsuchen, um Auskunftsfragen zu beantworten“. Alle 35 Berufe „… Teachers, Postsecondary“ (25-1xxx) zusammen: 2,12 %.
- Prüfsumme Hauptgruppe − Summe Einzelberufe: höchstens ±0,06 Prozentpunkte (SOC 25: 12,79 − 12,85), ausgewiesen, nicht ausgeglichen (Rundung in der Quelle).
- Jede O*NET-Aufgabe gehört in Task Statements zu genau einem Beruf (Feld `berufe` überall 1); der Hinweis „Wert gilt für die Aufgabe“ bleibt trotzdem stehen.
- Auswahl der drei Bücher in der Auflösung (Agent-Urteil): breitestes Buch (Bibliothek), Tutoren (KI-Tutor-Debatte), Hochschullehrende berufsbildende Fächer (größte 25-1xxx).

## Prüfungen
- `npm test` 28/28 (davon 9 neu); `node --test tests/streich-test.test.mjs` 8/8 (keine doppelten Schlüssel im Branch).
- `quarto render --to html` (ganzes Buch): nur die 36 bekannten OJS-Warnungen, kein `?@`. PDF/EPUB in `docs/` aus Git zurückgeholt.
- Playwright 1200/390 px, Element einzeln und eingebettet: Vorhersage per Tastatur, Rundgang starten, mit N zum Bildungsregal, Enter öffnet Regal (auch während der Kamerafahrt), Buch öffnen, Esc schließt, Auflösung, Bilanz, Transfer, Kopieren meldet „kopiert“, Listenansicht per Tastatur, Umschalter Deutschland; `prefers-reduced-motion` → Liste; keine Konsolenfehler; kein horizontales Scrollen im Element; Rahmenhöhe passt sich an (kein innerer Scrollbalken).
- axe-core 4: Kapitelabschnitt, Element (Liste, Auflösung, Transfer) und 3D-Zustand mit offener Karte (hell und dunkel): **0 Befunde**, nachdem zwei behoben wurden (Regalknopf-Name ≠ sichtbarer Text; Dialog ohne Namen).
- Kapitelseite bei 390 px: 258 px horizontales Scrollen durch **vorhandene** Teile (Navigationstitel, @tbl-acemoglu), nicht durch S3.
- **Bildrate:** Im Container gibt es nur Software-Grafik (SwiftShader, keine GPU). 1200 px: 28 fps, mit 4-fach gedrosselter CPU 18 fps; 390 px: 54 bzw. 46 fps. Das Ziel ≥ 30 fps gedrosselt ist mit Software-Grafik bei 1200 px nicht erreicht; auf Geräten mit Grafikchip nicht messbar hier. Eingebaut: Zeichnen nur bei Bewegung, adaptive Auflösung (bis 60 % der Pixel bei dauerhaft > 30 ms je Bild), Kantenglättung nur bei kleinen Flächen. Empfehlung: Roman öffnet das Element einmal auf Laptop und Tablet.
- **Druck-Testrender** (ganzes Buch, `--profile print --to pdf`, Wegwerfkopie; `texlive-fonts-extra` per apt nachinstalliert, damit `fontawesome5.sty` da ist): Ratekasten S. 116–117 (PDF 134–135, eine Doppelseite), Lösung in Anhang B S. 282 (PDF 300). Ein unauflösbarer Verweis `@sec-bibliothek-prompts` in der Bildunterschrift wurde durch `@sec-hiwi` ersetzt (der Anker hängt an einem Block, nicht an einer Überschrift; im Druck kein Abschnittsverweis möglich).

## Abweichungen vom Auftrag
1. Anker `#sec-bibliothek-prompts` an einem Block (Div) statt an einer Unterüberschrift: Eine Überschrift an dieser Stelle hätte die folgenden Absätze („Woraus besteht das im Detail …“, Acemoglu) in den Abschnitt der Bibliothek gezogen. QR und Sprungmarke funktionieren; ein Querverweis `@sec-…` darauf ist nicht möglich.
2. Die Brücke mit den Zahlen (Platz 3, 12,79 %) steht nur online; im Druck stünde sie direkt unter dem Ratekasten und verriete die Lösung. Im Druck stehen die Zahlen in der Bildunterschrift der Lösung (Anhang B).
3. Tastatur im 3D-Raum: Statt Tab durch die Regale (würde den Fokus im Canvas festhalten) N/Bild↓ und P/Bild↑ für nächstes/voriges Regal, Enter öffnet die Bücherliste als Knöpfe, dazu die Auswahlliste „Zum Regal springen“.
4. Bildrate-Ziel siehe Prüfungen.
5. Phase 1: Anteil-Regler 0–30 % in 0,5er-Schritten; Startwerte Platz 11, 5 %.

## Die tatsächlich aufgetretene Schwäche (Making-of)
Fünf Teilagenten übersetzten 1.483 Berufsnamen und Aufgaben parallel und uneinheitlich: Großschreibung am Satzanfang (S1-Vorlage groß, neue Einträge klein) und „students“ mal „Studierende“, mal „Lernende“. Die Schreibweise wurde per Skript angeglichen; die Bedeutungsfrage nicht – Aufgaben aus S1 sagen auch bei Schulberufen (z. B. Vertretungslehrkräfte) „Studierende“. Zweiter echter Fehler beim Bau: Enter während der Kamerafahrt öffnete das falsche Regal (behoben, Test ergänzt).

## Übersetzungen: wichtigste Zweifelsfälle (vollständige Liste: `claude/mollick-formate/UEBERSETZUNG-s3-zweifelsfaelle-2026-11-02.md`)
- „students“ in Schulberufen (5217 und weitere aus S1, 17027, 17034, 17037 Tutoren): „Studierende“ ist zu eng; 18638, 5616, 18627, 6975 stehen als „Lernende“.
- 25-1194.00 „Career/Technical Education Teachers, Postsecondary“ → „Hochschullehrende berufsbildende Fächer“ (in den USA meist Community Colleges).
- 25-9044.00 „Teaching Assistants, Postsecondary“ → „Lehrassistenz an Hochschulen“.
- 25-2012.00 „Kindergarten Teachers“ → „Lehrkräfte Vorschulklasse“ (nicht Kita).
- 5450 „learning styles“ → „Lernstile“: korrekt übersetzt, der Begriff selbst gilt empirisch als widerlegt; es ist eine O*NET-Aufgabenbeschreibung, keine Empfehlung.
- 7404 „system designers“ → „Personen in Systementwicklung“ (S1 hatte generisches Maskulinum).

## Vorschau (Screenshots)
Im Container erzeugt (`b1200-1-vorhersage`, `b1200-2a-3d-start`, `b1200-2b-3d-buch`, `b1200-3a/3b-aufloesung`, `b1200-4-bilanz`, `b1200-5-transfer`, `b1200-2c-liste`, dieselben für 390 px, `3d-buch-dark`, `kap-1200`, `kap-390`, `druck-svg`, `druck-s-135`, `druck-s-300`). Ablage in Tresorit nur, wenn die Ordnerfreigabe erteilt wird (siehe unten).

## Gate G3 (Roman, Multiple Choice)
a) Mergen wie vorliegend
b) Nachbessern (was?) und dann mergen
c) Erst S1 mergen, dann S3 darauf rebasen (Duplikat `massenkoff2026cadences` entfernen) und mergen
d) Zurückstellen bis nach der Abgabe 15.11.

## Nächste Sitzung (Startauftrag nach G3)
> Lies claude/PROMPTS-naechste-schritte-2026-11-02.md (Gemeinsame Regeln) und claude/mollick-formate/STATUS-s3-bibliothek-2026-11-02.md. Setze den G3-Entscheid um: Branch mollick-s3-bibliothek auf main rebasen, Konflikte nach Abschnitt „Konflikte beim Merge mit S1“ lösen, npm test, Render, Playwright (node scripts/pruefe-bibliothek.mjs), Diff per MC freigeben lassen, mergen, Pages-Lauf abwarten und live prüfen (Element auf Laptop und Tablet öffnen, Bildrate notieren).

## Candidate permanent notes
- Ein großes Regal im Economic Index heißt nicht, dass der Beruf besonders von KI betroffen ist, sondern dass viele Gespräche Aufgaben berühren, die O*NET diesem Beruf zuordnet.
- Das Bildungsregal ist im Economic Index breit, weil Recherche- und Auskunftsgespräche dem Bibliotheksberuf zugeordnet werden, nicht weil Hochschullehrende viel mit Claude sprechen.
- Parallele Übersetzungs-Agenten erzeugen uneinheitliche Begriffe, die sich per Skript nur in der Schreibweise, nicht in der Bedeutung angleichen lassen.
- Eine 3D-Ansicht trägt das Lernziel nur, wenn eine gleichwertige Listenansicht dieselbe Aussage allein tragen kann.

Ablage geprüft: Projekt ✓ / Tresorit ✗ (Ordnerfreigabe abgelehnt, siehe MC) / Repo ✓ (gepusht, gemergt: nein)
