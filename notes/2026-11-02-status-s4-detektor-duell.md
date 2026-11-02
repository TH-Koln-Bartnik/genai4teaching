# Status S4 „Detektor-Duell – Mensch oder KI?“ (02.11.2026, 15:55)

Auftrag: `claude/mollick-formate/AUFTRAG-s4-detektor-duell-2026-11-02.md`. Gemeinsame Regeln: `claude/PROMPTS-naechste-schritte-2026-11-02.md`. Sitzung Nr. 7 der Reihenfolge.

## Entstanden

Branch `mollick-s4-detektor` (von `main` 02f5868, gepusht, **nicht gemergt**, wartet auf G3). Commits: cc3d528 (Daten, Detektor), a6645a9 (Spiel, Druck, Tests), 8fce380 (Kap. 5, Anhang B, Quellen, docs), dazu ein Folge-Commit (Bauzeit im Making-of, Statusnotiz).

| Datei | Inhalt |
|---|---|
| `interactions/detektor-duell.html` | Spiel, eine Datei, Daten eingebettet, kein `fetch`; fünf Phasen; Anzeigetafel im Arcade-Stil; Tasten M/K/1–3/Enter/N; Ton standardmäßig aus; Bestwert `genai4teaching:s4:best` |
| `kapitel05.qmd` | neuer Abschnitt `### Selbsttest: Erkennen Sie KI-Texte besser als ein Detektor? {#sec-detektor-duell}` direkt vor „Formate nach den vier Säulen“; Bestand unverändert |
| `_einbau/detektor-duell-{online,druck,einordnung,loesung}.qmd` | automatisch erzeugt von `scripts/detektor-einbetten.py` |
| `kapitel10-appendix05-loesungshinweise.qmd` | Lösung des Druckkastens am Ende von Kapitel 5 (Anhang B), Anker `#loes-detektor-duell` |
| `images/druck/detektor-duell.svg`, `images/qr/qr-detektor-duell.png` | Druckabbildung (Abb. 5.3), QR auf `kapitel05.html#sec-detektor-duell` |
| `scripts/detektor-trainieren.py` | Training und Bewertung, `python3 -I`, Pfade als Argumente, Startwert 20261102 |
| `scripts/detektor-einbetten.py`, `scripts/qr-detektor-duell.mjs` | Daten ins Spiel, Einbau-Dateien, Abbildung, QR |
| `tests/detektor-duell.test.mjs` | 6 Tests, alle grün (mit `DETEKTOR_QUELLEN=…` auch der Wörtlich-Test der Menschentexte) |
| `_src/detektor/` | `ki-essays.jsonl` (40 Essays mit SHA-256), `ki-briefings.json` (Prompts wörtlich), `modell.json`, `spieltexte.json`, `kennzahlen.json`, `pruef-texte.json` |
| `references.json` | neu am Ende: `crossley2024persuade`, `liang2023detectors`, `weberwulff2023`, `fleckenstein2024` (alle per Crossref geprüft) |

## Daten und Lizenzen

- **PERSUADE 2.0:** Original von den Google-Drive-Links im README von `scrosseye/persuade_corpus_2.0` geladen (Train-CSV 617 MB, Test-ZIP mit veröffentlichtem Passwort) – maßgeblich CC BY 4.0. Gegenprobe mit dem HF-Spiegel `realbenpope/PERSUADE_manageable`: 20 von 20 Stichproben-Volltexten identisch. Der Spiegel enthält keine Klassenstufen und Aufgaben, deshalb Original als Hauptquelle.
- **Liang et al. (2023):** HF `WxWx/ChatGPT-Detector-Bias`, `all_data.json`, MIT. TOEFL-Texte laut Paper (arXiv v3, Results): „91 human-authored TOEFL essays obtained from a Chinese educational forum“; Vergleichsgruppe im Paper: 88 Aufsätze US-amerikanischer Achtklässler aus dem Hewlett-ASAP-Datensatz (nicht im HF-Datensatz). Zahlen aus dem Paper: mittlere Falsch-Positiv-Rate 61,22 %; 18 von 91 einstimmig von allen sieben Detektoren als KI eingestuft; 89 von 91 von mindestens einem.
- **Fleckenstein et al. (2024)** und **Weber-Wulff et al. (2023):** nur Abstract-Aussagen verwendet (N = 89 / 200, nicht zuverlässig, überschätzt; 14 Werkzeuge, weder genau noch zuverlässig, Tendenz zu „menschlich“, Verschleierung verschlechtert). Prozentzahlen aus Sekundärquellen (z. B. „38 %“) bewusst nicht übernommen.
- Im Spiel nur Auszüge, keine Personen-Metadaten außer Klassenstufe.

## KI-Texte (einmalige, dokumentierte Läufe)

Modell: Claude Opus 5.5 (`claude-opus-5-5`) als Teilagent in Claude Code, 02.11.2026. Acht frische Teilagenten, je Zelle (Aufgabe × Prompt-Variante × Durchgang) einer, jeder schrieb fünf Essays nacheinander direkt in Dateien; keine Auswahl, keine Nachbearbeitung. Briefing wörtlich in `_src/detektor/ki-briefings.json`. Prompt-Varianten wie im Auftrag, ergänzt um „Aim for about 550 words.“ (Distance learning) bzw. „594 words“ (Summer projects) = Median der menschlichen Essays Kl. 11–12; Formatvorgabe „plain text, no title, no markdown“.

## Detektor

Logistische Regression, Klassengewichte balanced, auf Auszügen (erste ganze Sätze bis ≥ 110 Wörter). Training: 400 PERSUADE-Essays Kl. 11–12 (200 je Aufgabe), 32 eigene KI-Essays, 141 ältere KI-Texte (80 % von `CollegeEssay_gpt3_31` + `CS224N_gpt3_145`).

Gewichte (standardisiert): Satzlänge −0,37 · Satzlängen-Wechsel −0,92 · Wortvielfalt +0,27 · lange Wörter +2,34 · Kommas je Satz +0,30 · Flüchtigkeitsfehler −1,64 · Ich-Form +1,51 · Kurzformen −0,30 · „KI-Wörter“ +0,78; Achsenabschnitt −1,32. „KI-Wörter“ aus den Trainingstexten abgeleitet (Log-Odds, themengleich): august, flexibility, clear, meant, june, offered, structure, actually, week, first, real, last, almost, problem, lives.

Kennzahlen auf zurückgehaltenen Texten (Schwelle 50 %, unverändert berichtet, nicht nachjustiert):

| Gruppe | n | als KI eingestuft |
|---|---|---|
| Schüleraufsätze PERSUADE (Fehlalarm) | 300 | 41 (14 %) |
| ältere KI-Texte GPT-3 (Treffer) | 35 | 27 (77 %) |
| aktuelle KI-Texte Claude (Treffer) | 8 | 5 (62,5 %) |
| TOEFL-Aufsätze, Mensch (Fehlalarm) | 91 | 33 (36 %) |
| College-Aufsätze, Mensch (Fehlalarm) | 70 | 53 (76 %) |
| gesamt (PERSUADE + alt + aktuell) | 343 | 291 richtig (85 %) |

Befund: Der Lehr-Detektor zeigt den Liang-Befund **nicht** (TOEFL 36 % < College 76 %). Er verdächtigt alle, die anders schreiben als seine „Mensch“-Trainingstexte. So steht es im Spiel; die Runde 2 nennt zusätzlich die veröffentlichten Raten aus Liang et al.

## Spieltexte (fester Startwert, vor jedem Spielen festgelegt)

| Runde | Herkunft | ID | Quelle | Aufgabe | Wörter | Detektor p(KI) |
|---|---|---|---|---|---|---|
| 1 | Mensch | A67D3F549FAD | PERSUADE 2.0, Kl. 11 | Distance learning | 114 | 0,006 |
| 1 | Mensch | 86C3CBD25A60 | PERSUADE 2.0, Kl. 11 | Summer projects | 116 | 0,132 |
| 1 | Mensch | 180B47FDF4C2 | PERSUADE 2.0, Kl. 11 | Distance learning | 138 | 0,063 |
| 1 | KI | dl_b_r2_2 | Claude, Variante b | Distance learning | 134 | 0,355 |
| 1 | Mensch | F62C0023C996 | PERSUADE 2.0, Kl. 11 | Summer projects | 114 | 0,064 |
| 1 | KI | sp_b_r2_4 | Claude, Variante b | Summer projects | 121 | 0,777 |
| 1 | KI | sp_a_r1_4 | Claude, Variante a | Summer projects | 117 | 0,628 |
| 1 | KI | dl_a_r1_3 | Claude, Variante a | Distance learning | 118 | 0,039 |
| 2 | Mensch | TOEFL_real_91#18 | Liang et al., TOEFL | – | 78 | 0,156 |
| 2 | Mensch | TOEFL_real_91#29 | Liang et al., TOEFL | – | 114 | 0,927 |
| 2 | Mensch | CollegeEssay_real_70#49 | Liang et al., College | – | 117 | 0,883 |
| 2 | Mensch | CollegeEssay_real_70#45 | Liang et al., College | – | 122 | 0,902 |
| Druck A | KI | dl_a_r1_2 | Claude, Variante a | Distance learning | 77 | 0,961 |
| Druck B | Mensch | 5470F4CF4DED | PERSUADE 2.0, Kl. 11 | Summer projects | 89 | 0,122 |

Detektor in Runde 1: 6 von 8 richtig (alle Menschentexte richtig, 2 von 4 KI-Texten erkannt).

## Prüfungen

- `node --test tests/detektor-duell.test.mjs`: 6/6 grün; `tests/streich-test.test.mjs` 8/8 (doppelte Schlüssel in `references.json`: keine).
- `quarto render --to html` (ganzes Buch): 36 bekannte OJS-Warnungen, kein `?@`. Download-PDF/EPUB in `docs/` aus Git zurückgeholt.
- Playwright: 1200 px im Kapitel per Klick (alle fünf Phasen, Kopier-Knopf, Zwischenablage geprüft), 390 px nur Tastatur, kein horizontales Scrollen, keine Konsolenfehler, Bestwert nach Neuladen sichtbar. Rahmenhöhe folgt dem Inhalt (ResizeObserver auf `body`; die erste Fassung mit `resize`-Listener schaukelte sich auf, behoben).
- axe: Spiel in allen fünf Phasen ohne Befund. Kapitelseite: sechs Befundarten, alle aus Quarto-Bestand (Callout-Collapse `aria-expanded`, Logo-Links, Navbar-Landmarks, Abbildungen ohne Alt-Text in Kap. 5 Bestand); der neue Making-of-Kasten erbt den Collapse-Befund.
- Druck-Testrender (`--profile print --to pdf`, nach `apt-get install texlive-fonts-extra`): Kasten auf S. 177–178 (über den Seitenwechsel), Abb. 5.3 auf S. 179, Making-of S. 180, Lösung in Anhang B S. 281 – nicht auf derselben Doppelseite. Seitenbilder in Tresorit.

## Abweichungen vom Auftrag

1. PERSUADE 2.0 hat für Klassen 11–12 nur **zwei** Aufgaben (Distance learning, Summer projects), nicht vier. Darum 2 Aufgaben × 20 KI-Essays (40 gesamt), 8 zurückgehalten (je Aufgabe × Variante 2), 32 im Training; 200 statt 100 Menschentexte je Aufgabe.
2. Je Teilagent fünf Essays nacheinander statt eines Agenten je Essay (Tokenkosten); Essays einer Zelle teilen den Kontext.
3. Ältere Liang-KI-Texte zu 80/20 geteilt, damit „ältere KI-Texte“ auf zurückgehaltenen Texten bewertet werden kann.
4. Merkmal „Absätze je 100 Wörter“ verworfen: Liang-College- und TOEFL-Texte liegen ohne Zeilenumbrüche vor (Formatartefakt). Rechtschreibmerkmal als „Flüchtigkeitsfehler“ (kleines i, Satzanfang klein, fehlende Apostrophe, kleine Liste häufiger Tippfehler) statt Wörterbuch, damit die JS-Rechnung ohne große Wortliste auskommt.
5. Runde 2 vergleicht TOEFL mit **College**-Aufsätzen (wie im Datensatz), das Paper mit Achtklässler-Aufsätzen; im Spiel so benannt.
6. Auszüge entstehen durch Zusammenziehen der Leerzeichen; bei PERSUADE-Texten mit Titelzeile rückt der Titel vor den ersten Satz (Druck B: „Teacher Designed Summer Projects Summer finally …“).

## Offen

- **G3** (Merge) – Roman, MC unten.
- Druckkasten bricht über eine Seite; bei Bedarf in der Druck-Sitzung (Nr. 13) mit `\needspace` oder kürzeren Druckauszügen (`auszug(…, 70)` → 60) lösen.
- Abbildungsverzeichnis übernimmt die lange Bildunterschrift (wie der Bestand); ggf. `fig-scap` in der Druck-Sitzung.

## Gate G3 (Multiple Choice)

Soll `mollick-s4-detektor` nach `main`?
a) Mergen wie gebaut (empfohlen)
b) Erst nachbessern: Druckkasten auf eine Seite bringen (kürzere Auszüge)
c) Erst nachbessern: andere Spieltexte (neuer Startwert, dokumentiert)
d) Nicht mergen, Branch liegen lassen

**Entscheid Roman (02.11.2026, 16:00, MC): a) mergen wie gebaut, in einer neuen Sitzung mit dem Startauftrag unten.**

## Startauftrag nächste Sitzung (nach G3 = a)

```
Lies claude/PROMPTS-naechste-schritte-2026-11-02.md (Gemeinsame Regeln) und claude/mollick-formate/STATUS-s4-detektor-duell-2026-11-02.md. Branch mollick-s4-detektor auf main rebasen (Konflikte in references.json/Anhang B auflösen), npm test + node --test tests/detektor-duell.test.mjs, quarto render --to html, Download-PDF/EPUB aus Git zurückholen, mergen, Pages-Lauf abwarten, kapitel05.html#sec-detektor-duell live mit Playwright prüfen.
```

## Candidate permanent notes

- Ein Detektor, der „menschlich“ aus einer Textsorte lernt, verdächtigt jede andere Textsorte, nicht gezielt Fremdsprachler.
- Eine hohe Gesamttrefferquote eines KI-Detektors kann allein aus dem Übergewicht leicht erkennbarer Texte im Prüfset entstehen.
- Selbst gebaute Detektoren lernen Themenwörter als „KI-Merkmale“, wenn Trainingstexte von Mensch und Maschine sich zufällig im Wortschatz unterscheiden.
- Fehlalarme eines Detektors verschieben den Schaden von der Prüfungsleistung auf das Vertrauensverhältnis zwischen Prüfenden und Geprüften.

Ablage geprüft: Projekt ✓ (claude/mollick-formate/STATUS-s4-detektor-duell-2026-11-02.md) / Tresorit ✓ (Projektnotizen-Claude/mollick-formate/, Statusnotiz + 22 Dateien in s4-detektor-duell/) / Repo ✓ (Branch mollick-s4-detektor gepusht, notes/2026-11-02-status-s4-detektor-duell.md; gemergt: nein, wartet auf G3)
