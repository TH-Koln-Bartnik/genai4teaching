# Status P1: „Der Streich-Test“ – gebaut, geprüft, gemergt, live (02.11.2026)

Auftrag: `claude/prompting-primer/AUFTRAG-p1-streich-test-2026-11-02.md`. Repo `TH-Koln-Bartnik/genai4teaching`, Branch `prompting-streichtest` @ `0d7452c` (auf `main` @ `5837b77`, also nach dem Merge von Sitzung A), nach G3 per Fast-Forward nach `main` gemergt; `docs/` gerendert (`1011dc6`).

## Was entstanden ist

Interaktive Leserübung `interactions/streich-test-prompting.html` (eine Datei, kein Framework) in vier Phasen: zehn Zeilen eines alten Prompts streichen und je Zeile die Sicherheit angeben (1 geraten, 2, 3 sicher; Standard 2); Auflösung je Zeile mit Wertung (richtig / daneben / ½ teils), Urteil, Quellenmarke (■ Labor-Doku, ● Studie, ▲ Folklore), Begründung und englischem Kurzzitat; Hervorhebung von Irrtümern mit Sicherheit 3 (Hyperkorrektur, roter Rand plus Text); vorher – nachher mit vollständigem alten und neuem Quiz-Ersteller nebeneinander, Wortzahlen per Skript, Zuordnung „← Zeile n“ zu den Labels Ziel / Wozu / Zuerst / Material / Abnahme; Transfer („Streichen Sie die Hälfte …“), Verweis auf Anhang B, Making-of, didaktische Begründung, Quellenliste. Nach der Auflösung sind die Streichungen gesperrt; „Noch einmal“ setzt zurück.

Einbau in Kap. 2.4.1 „Vom Wunsch zum Werkvertrag“, direkt nach den Ankern und vor dem Jemisin-Absatz (vor der neuen Grundregel): Anker `[]{#sec-streichtest}`, drei Einleitungssätze mit `@richland2009` und `@butterfield2001`, dann zwei Includes. Online iframe mit Höhenmeldung (`typ: "rahmen-hoehe"`, id `streich-test`). Druck: Kasten mit Tabelle (Zeile / streichen? / Sicherheit 1–3) und QR `images/qr/qr-streich-test.png` → `https://th-koln-bartnik.github.io/genai4teaching/kapitel02.html#sec-streichtest`. Lösung in Anhang F (`kapitel10-appendix05-loesungshinweise.qmd`), Abschnitt „Streich-Test (Kapitel 2)“ `{#loes-streichtest}`, am Ende der Kap.-2-Hinweise.

## Dateien

| Datei | Inhalt |
|---|---|
| `notes/streich-test/urteile.md` | einzige Quelle für Zeilen, Urteile, Marken, Quellen, Kurzzitate, Begründungen |
| `scripts/streich-test-daten.py` | liest `urteile.md` und beide Prompts aus git, zählt Wörter, schreibt Daten ins HTML, `_einbau/streich-test-druck.qmd` und `_einbau/streich-test-loesung.qmd` |
| `_einbau/streich-test-online.qmd` | iframe-Block |
| `scripts/qr-streich-test.mjs` | QR-Code |
| `tests/streich-test.test.mjs` | 8 Konsistenzprüfungen (Element = Tabelle, Zeilen wörtlich im Original, Wortzahlen, Druck/Lösung vollständig, Quellenschlüssel vorhanden, keine doppelten Schlüssel) |
| `notes/streich-test/pruefe-playwright.mjs` | Browserprüfung 1200/390 px, Maus und Tastatur, axe, iframe-Höhe |
| `notes/streich-test/bilder/` | sechs Screenshots (auch in Tresorit) |
| `references.json` | neu: `openai2026reasoning`, `kojima2022`, `richland2009`, `butterfield2001`; `anthropic2026prompting`, `anthropic2026opus5`, `openai2026gpt55`, `basil2025` kamen schon mit Sitzung A |

Änderungen an Zeilen oder Begründungen nur in `urteile.md`, dann `python3 -I scripts/streich-test-daten.py notes/streich-test/urteile.md` und `node --test tests/streich-test.test.mjs`.

## Material und Zahlen

Alter Prompt: Quiz-Ersteller in Anhang B, Stand `df0f9bc` (letzter Stand vor Sitzung B). Neuer Prompt: Branch `anhangB-prompts-neu` @ `3c1b91f` (**Entwurf**, B ist nicht gemergt; im Element mit „Entwurf“ gekennzeichnet). Nach dem Merge von B: Skript mit `--neu main` laufen lassen, dann verschwindet die Kennzeichnung.

Wortzahlen (Skript, Regel: jedes durch Leerraum getrennte Stück mit Buchstabe oder Ziffer): **alt 275, neu 119, −57 %**. Die OPTIONEN-Datei nannte 308 Wörter für den alten Prompt; die Differenz kommt aus der Zählregel (Aufzählungszeichen, Pfeile und Gedankenstriche zählen hier nicht). Im Buch steht nur die Skriptzahl.

Zehn Zeilen, davon 8 wörtlich aus dem Original und 2 ergänzt (im Original fehlten Denkaufforderung, Selbstprüfbefehl und Trinkgeld; Denkaufforderung und Prüfbefehl deshalb in einer Zeile). Urteile: streichen 2, 3, 9, 10; behalten 5, 6; umformulieren 1, 4, 7, 8. Marken: 8 × Labor-Doku, 1 × Studie (Rolle, Basil et al. 2025), 1 × Folklore (Trinkgeld). Rolle differenziert: für Genauigkeit wirkungslos, für Ton und in Simulationen sinnvoll („umformulieren“). Wertung: „umformulieren“ zählt als „½ teils“ und nie als Hyperkorrektur.

Quellen am 02.11.2026 erneut aufgerufen, Kurzzitate wörtlich: Anthropic *Prompting best practices* (Kontext, „soften any aggressive language“, Rolle für Ton), Anthropic *Prompting Claude Opus 5* (Prüfbefehle streichen), OpenAI *Using GPT-5.5* (Schrittanleitungen reduzieren, Erfolgskriterien, kleinster Prompt), OpenAI *Reasoning best practices* („think step by step“ unnötig; der in OPTIONEN offene Wortlaut ist damit direkt bestätigt), Basil et al. 2025, Meincke et al. 2025 Report 2 und 3, Kojima et al. 2022 (17,7 → 78,7 %). Didaktik-DOIs (Richland 2009, Butterfield & Metcalfe 2001, Tippett 2010) per Crossref geprüft; Tippett nur im Element zitiert, nicht in `references.json`.

## Prüfungen

- `quarto render --to html` (ganzes Buch, Quarto 1.8.25): Exit 0, nur die 36 bestehenden OJS-Warnungen aus Kap. 4 (identisch mit `main`), kein `?@`.
- `node --test tests/streich-test.test.mjs`: 8/8; `npm test`: 19/19.
- Playwright (`pruefe-playwright.mjs`): 1200 und 390 px, je Maus und Tastatur (Tab, Leertaste/Enter, ←/→): Streichen, Durchstreichung plus Text „gestrichen“, Hyperkorrektur genau bei der erwarteten Zeile, zehn Begründungen, Sperre nach Auflösung, vorher – nachher, Transfer, „Noch einmal“, kein horizontales Scrollen bei 390 px, keine Konsolenfehler, axe ohne Befund (Element und iframe auf der Kapitelseite), iframe-Höhe passt sich dem Inhalt an. Alle Prüfungen bestanden.
- Druck-Testrender `--to pdf` (xelatex): Exit 0. In der Cloud fehlt das TeX-Paket `fontawesome5` (auch auf `main`); für den Test lag ein Platzhalter außerhalb des Repos bereit, nur Callout-Icons betroffen. Kasten auf S. 52–53 (Einleitung links, Tabelle rechts, also eine Doppelseite), Lösung in Anhang F auf S. 392 f.; Rätsel und Lösung damit klar getrennt. Keine fehlenden Glyphen (→, €).

## Abweichungen vom Auftrag

1. Beim Klonen (12:14) war Sitzung A noch nicht auf `main` sichtbar; Element zuerst gegen `df0f9bc` gebaut, nach dem Merge von A auf `5837b77` rebased (Konflikt nur in `references.json`, gleiche Schlüssel wie A, aufgelöst) und dann direkt in `kapitel02.qmd` eingefügt; ein Patch ist deshalb nicht nötig.
2. Neuer Prompt aus Branch B statt aus dem AUFTRAG-Muster, weil B eine fertige, gegenüber dem Muster leicht geänderte Fassung hat (Antwortoptionen a/b/c, Schlüssel getrennt); im Element als „Entwurf“ gekennzeichnet.
3. Making-of steht nur im Element (Phase 4), nicht im Druck.
4. Druckkasten als LaTeX-Tabelle im Kasten (statt Ankreuzzeilen im Fließtext), weil die erste Fassung im Blocksatz große Lücken hatte und über zwei Seiten lief.
5. `package.json` nicht geändert (der Test-Eintrag kollidiert sonst mit dem S1-Branch); Test einzeln aufrufen.

## Schwäche (steht im Making-of)

Ein Claude-Modell hat die Urteile vorgeschlagen und stützt sich bei acht von zehn Zeilen auf Leitfäden von Herstellern, darunter seinem eigenen, statt auf unabhängige Messungen. Jede Zeile nennt deshalb Quelle und Wortlaut.

## G3 und Merge

G3 (Roman, MC, 02.11.2026): **mergen**, in dieser Sitzung. Fast-Forward `prompting-streichtest` → `main` (`4aa3fd0`), dann `quarto render --to html`, `docs/` committet und gepusht (`1011dc6`). Live geprüft mit `pruefe-playwright.mjs` gegen `https://th-koln-bartnik.github.io/genai4teaching`: alle Prüfungen bestanden (1200/390 px, Maus/Tastatur, axe, iframe-Höhe). **PDF und EPUB in `docs/` nicht neu erzeugt:** Der EPUB-Render leert `docs/` (Ausgabeordner), und der PDF-Render braucht `fontawesome5`, das in der Cloud fehlt; beide Dateien stehen auf dem Stand von Sitzung A, ohne Streich-Test. Beim nächsten vollständigen Render (lokal oder mit installiertem `fontawesome5`) mitnehmen.

## Offen

- Download-PDF und EPUB neu erzeugen (siehe oben).
- Nach dem Merge von B: `python3 -I scripts/streich-test-daten.py notes/streich-test/urteile.md --neu main`, Kennzeichnung „Entwurf“ fällt weg; Wortzahl prüfen.
- S1 (`mollick-s1-hoeher-tiefer`) fügt `richland2009` ebenfalls an `references.json` an; beim Merge von S1 das Duplikat entfernen (`node --test tests/streich-test.test.mjs` prüft das).

## Startauftrag für die nächste Sitzung (nach dem Merge von Anhang B)

```
Lies claude/prompting-primer/STATUS-p1-streich-test-2026-11-02.md. Anhang B ist gemergt. Repo th-koln-bartnik/genai4teaching frisch klonen, Branch streichtest-anhangB-final von main, python3 -I scripts/streich-test-daten.py notes/streich-test/urteile.md --neu main, node --test tests/streich-test.test.mjs, docs/ rendern (Quarto 1.8.25, --to html), Diff per MC freigeben lassen, mergen, live prüfen. Statusnotiz in Projekt, Tresorit und Repo.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (`main` @ `1011dc6` + diese Notiz, gemergt: ja)
