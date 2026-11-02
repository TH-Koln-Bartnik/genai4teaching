# Status S4 Detektor-Duell: Merge-Sitzung (02.11.2026, ca. 16:20)

Grundlage: `claude/mollick-formate/STATUS-s4-detektor-duell-2026-11-02.md` (G3 = a, mergen wie gebaut), Gemeinsame Regeln in `claude/PROMPTS-naechste-schritte-2026-11-02.md`.

## Ergebnis

S4 „Detektor-Duell – Mensch oder KI?“ ist in `main` (ef161eb, Fast-Forward) und live:
https://th-koln-bartnik.github.io/genai4teaching/kapitel05.html#sec-detektor-duell

## Ablauf

1. Branch `mollick-s4-detektor` auf `main` rebast, zweimal: zuerst auf ef1d04d (Kap. 1 Verbreitung), dann auf cffb414, weil S5 (Token-Film) während des Renders gemergt wurde.
2. Konflikt beide Male nur in `references.json`, Einträge am Ende. Auflösung: beide Blöcke behalten, `main` zuerst, S4 danach. Reihenfolge am Ende: … schmidt2026dlhn, mollick2026rekursion, heygen2026hyperframes092, crossley2024persuade, liang2023detectors, weberwulff2023, fleckenstein2024. 496 Einträge, keine doppelten Schlüssel.
3. `kapitel05.qmd` und Anhang B (`kapitel10-appendix05-loesungshinweise.qmd`) automatisch zusammengeführt; Abschnitt sitzt zwischen #sec-pruefen und „Formate nach den vier Säulen“. Kein „Anhang F“ im S4-Diff.
4. Tests: `npm test` 19/19; `node --test tests/detektor-duell.test.mjs` 5 grün, 1 übersprungen (Wörtlich-Test braucht `DETEKTOR_QUELLEN` mit PERSUADE-Rohdaten, wie vorgesehen); `tests/streich-test.test.mjs` 8/8.
5. `quarto render --to html` (Quarto 1.8.25, ganzes Buch), zweimal: je 36 bekannte OJS-Warnungen, kein `?@`. Download-PDF/EPUB aus Git zurückgeholt. Das neu gerenderte `docs/` war identisch mit dem automatisch gemergten Stand, also kein eigener docs-Commit nötig.
6. Merge: Fast-Forward `main` cffb414 → ef161eb, gepusht. Pages-Lauf 41467466269 erfolgreich für ef161eb.
7. Live-Prüfung mit Playwright: Kapitelseite 1200 px und 390 px, Abschnitt sichtbar, Spiel-iframe lädt (Höhe 643 bzw. 945 px), keine JS- oder Konsolenfehler. Spiel direkt angespielt: „Duell starten“, Mensch + Sicherheit 2, „Auflösen“ → Spielstand Sie 1, Detektor 1. Lösung in Anhang B live (`#loes-detektor-duell`).

## Befunde, nicht S4

- Kap. 5 scrollt bei 390 px horizontal (Seitenbreite 753 px). Ursache: Bestandstabellen „Formate nach den vier Säulen“ (727 px), zwei Tabellen in #sec-dokumentation, eine in #sec-kurs-integration, lange URLs (Sway, HFD, DOI), Navbar-Titel. Der neue Abschnitt ist nicht beteiligt. Kandidat für eine Aufräumsitzung (z. B. Tabellen in `.table-responsive` bzw. `overflow-x: auto`, `overflow-wrap: anywhere` für Links).
- QR `images/qr/qr-detektor-duell.png` ist online 404. Erwartet: QR-Codes gehen nur in den Druck, keiner liegt in `docs/`.
- Der Remote-Branch `mollick-s4-detektor` steht noch auf dem alten Stand vor dem Rebase (941246c); der Force-Push des rebasten Branches wurde vom Werkzeug blockiert. Inhaltlich unschädlich, alles steht in `main`. Branch kann in der Aufräumsitzung gelöscht werden.

## Offen (aus der Bausitzung übernommen)

- Druckkasten bricht über eine Seite (S. 177–178); in der Druck-Sitzung Nr. 13 mit `\needspace` oder kürzeren Druckauszügen lösen.
- Abbildungsverzeichnis übernimmt die lange Bildunterschrift; ggf. `fig-scap` in der Druck-Sitzung.

## Nächste Sitzung (Multiple Choice an Roman)

a) Nr. 9 P6 Sitzung C (Stützräder), da S5 jetzt in `main` ist
b) Nr. 10 S2 Sitzung B (Podcast), sobald die fünf ElevenLabs-Blöcke da sind
c) Kurze Aufräumsitzung: 390-px-Überlauf in Kap. 5, gemergte Remote-Branches löschen
d) Pause

Startauftrag zu a):
```
Lies claude/PROMPTS-naechste-schritte-2026-11-02.md (Gemeinsame Regeln) und claude/prompting-primer/STATUS-p6-stuetzraeder-teilB-2026-11-02.md und führe „Sitzung C“ aus. S5 und S4 sind seit 02.11. in main (ef161eb); Konflikte in references.json sind reine Anhänge am Ende, beide Blöcke behalten.
```

Ablage geprüft: siehe Abschlusszeile unten.
