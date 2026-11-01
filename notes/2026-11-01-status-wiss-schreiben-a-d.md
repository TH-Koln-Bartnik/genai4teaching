# Status: Lehrbeispiele Recherche und Schreiben eingebaut, Optionen A–D (01.11.2026)

Auftrag: `claude/wiss-schreiben/AUFTRAG-einbau-schreiben-recherche-A-D-2026-11-01.md`. Vor Beginn (09:52) geprüft: keine andere Sitzung hatte P1–P5 übernommen. **Während der Arbeit** hat eine parallele Sitzung (`session_01NiJQCW1gDvfRF25CHBxiok`, Commits `360e013`, `eb3f678`, 10:00) Option B selbst umgesetzt und nach `main` gemergt: `tbl-schreibtrainer`, Online-Seite `schreibtrainer.qmd` mit kopierbaren Anweisungen (Einleitungs- und Absatztrainer), weil OpenAI Custom GPTs am 11.12.2026 einstellt (`@openai2026gptretirement`). Beim Rebase habe ich deren Fassung von 4.2.1 vollständig übernommen und meine eigene P2-Fassung verworfen.

## Entscheidungen Roman (01.11., per Multiple Choice)

- Bots: gemeinsam entwickelt von Bartnik & Schmid; Julia Schmid wird genannt, Zustimmung liegt vor.
- GPT-Links und Render-Umfang: keine Präferenz → Standard gewählt: vorhandene zwei Links nur im HTML; HTML-Render, Zweig pushen, Merge entscheidet Roman.

## Entstanden (Zweig `wiss-schreiben-a-d`, nach Rebase auf `main` @ `66755c9`)

- **P1** `kapitel04.qmd`, `sec-recherche`: Kasten „Aus der Lehre: Literaturrecherche in vier Phasen“ (Sprachmodell als Übersetzer der Suchsyntax; Evidenz Wang et al. 2023/2025; Prüfregel mit zwei Schlüsselstudien; VHB/ISSN in Publish or Perish) plus `tbl-werkzeugtyp-phase` (Tays vier Typen plus Zitationsnetz, Zitationskontext, API). Neue ID `sec-rs-methodik` an „Datengrundlage und Methodik“ in `kapitel08-appendix03-…qmd` als Verweisziel.
- **P2** nicht von dieser Sitzung: Fassung aus `main` (parallele Sitzung, siehe oben) übernommen, unverändert.
- **P3** Unterabschnitt `sec-bots-quellentreue` am Ende von 4.2.1 (drei Kollisionen der ursprünglichen Anweisungen, Abhilfen nach `@tay2025agentic`, `@tay2024mcp`; Bezug auf die bereits korrigierten kopierbaren Fassungen; Verweis auf Handreichung) und Übung „Ausprobiert: Prüfen, ob ein Sprachmodell richtig zitiert · 4D: Discernment“ (allgemeines Sprachmodell statt Bot, weil die kopierbaren Trainer keine Originaltexte mehr aus dem Gedächtnis wiedergeben). Kein separater Lösungshinweis in Anhang (Übung trägt „Worauf achten“ selbst; Kapitel 4 hat keine Lernfragen-Liste). Korrekturliste: `notes/korrekturliste-bots-2026-11-01.md`.
- **P4** `kapitel05.qmd`, `sec-dokumentation`: Absatz „Eine Fakultätsregel auf einer Seite“ (WIng-Handreichung, Leuphana/Baresel-Vorlage, typische Fehler → `sec-recherche`, mündliche Erläuterung → `tbl-vier-saeulen`). Keine Werkzeugempfehlungen übernommen.
- **P5** `references.json`: sechs Einträge alphabetisch eingefügt (nicht am Ende, damit der Merge mit `kapitel04-p5`, `kapitel02-4d-p4` sauber bleibt): `bartnik2025handreichung`, `bartnik2025recherche`, `bartnik2026schreibtrainer`, `leuphanakikennzeichnung`, `wang2023boolean`, `wang2025boolean`.

## Prüfung

- DOIs per Crossref verifiziert: Wang et al. (2023) 10.1145/3539618.3591703 (SIGIR '23, S. 1426–1436); Wang et al. (2025) 10.1145/3726302.3730329 (SIGIR '25, S. 3296–3305). Aussagen gegen Abstracts und Volltext (arXiv v3, Abschnitt Variabilität) geprüft.
- Leuphana: Der Link in der Handreichung (`…/ki-empfehlungen/dokumentation-von-ki-tools.html`) liefert 404; zitiert wird die aktuelle Seite „KI-Kennzeichnung in Prüfungsleistungen“ (https://www.leuphana.de/lehre/kuenstliche-intelligenz/ki-kennzeichnung.html), die die arbeitsphasenorientierte Vorlage aus Baresel et al. (2024) anbietet. **Empfehlung:** Link in der WIng-Handreichung aktualisieren.
- `quarto render --to html` (Quarto 1.8.25, ganzes Buch, Ausgabe in temporären Ordner): Exit 0, keine unaufgelösten Verweise in Kap. 4, 5, Anhang C; nur die bekannten „OJS block count mismatch“-Warnungen. Sichtprüfung `tbl-schreibtrainer` 1280 px: korrekt. `docs/` **nicht** neu gerendert (geschieht nach dem Merge). PDF nicht gerendert.
- Phrasen-Check (`genai-phrase-check-simple`) auf alle neuen Absätze: Stellen geglättet (Wiederholung „legen … fest“, verschachtelte Sätze).
- Umfang dieser Sitzung nach Rebase: Kapitel 4 etwa +700 Wörter (P1 mit Tabelle, P3 mit Übung), Kapitel 5 +145. Zusammen mit der P2-Fassung der parallelen Sitzung liegt A–C über dem Ziel von +800; Kürzungskandidat ist die Tabelle `tbl-werkzeugtyp-phase` (könnte nur online stehen).

## Offen

1. Korrekturliste gilt noch für BOT2–BOT7 (BOT1 und BOT8 sind in `schreibtrainer.qmd` bereits korrigiert) und für die Custom GPTs bis zur Abschaltung am 11.12.2026.
2. Übung aus `sec-bots-quellentreue` einmal selbst durchführen.
3. PDF-Render von Kap. 4/5 nach dem Merge (Tabellenbreiten `tbl-werkzeugtyp-phase`, `tbl-schreibtrainer`).
4. Merge `wiss-schreiben-a-d` → `main` (Roman); danach `docs/` neu rendern.

## Candidate permanent notes

- Ein Sprachmodell, das nur die Suchsyntax schreibt, lässt die Suchstrategie beim Menschen und ist die risikoärmste Form KI-gestützter Recherche.
- KI-geschriebene Boolesche Suchanfragen gewinnen Präzision auf Kosten der Vollständigkeit und schwanken zwischen Läufen.
- Zwei bekannte Schlüsselstudien testen eine Suchsyntax besser als jede Trefferzahl.
- Ein Lern-Bot ohne hinterlegte Quelle kann nicht treu zitieren, auch wenn seine Anweisung „echte Texte“ verlangt.
- Erfundene Quellen in Schreibübungen trennen den rhetorischen Zug von der Quellenwahrheit, brauchen aber eine sichtbare Kennzeichnung.
- Eine Limitation ist eine Designentscheidung mit Preis, kein Pannenbericht.
