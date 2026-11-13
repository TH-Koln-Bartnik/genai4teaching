# Status: PDF-Testbau (Sitzung pdf-testbau, 13.11.2026)

Branch `pdf-testbau` von `main` @ `0c69e55` (`452a9b5` plus Notiz-Commit). Stand dieser Notiz: Befundliste fertig, **noch keine Korrektur**, Entscheidung per Multiple Choice steht aus.

## 1 Druckwörter (`scripts/zaehle_druck.py`, je Datei)

| Teil | Druckwörter | PDF-Seiten |
|---|---:|---|
| Vorwort (`index.qmd`) | 659 | 17–21 |
| Kap. 1 Einleitung | 2.809 | 25–38 |
| Kap. 2 Grundlagen | 6.089 | 39–72 |
| Kap. 3 Automation | 2.325 | 73–85 |
| Kap. 4 Lernmechanismen | 4.313 | 87–108 |
| Kap. 5 4D-Phasen | 6.119 | 111–147 |
| Kap. 6 Rollen | 6.906 | 149–182 |
| Kap. 7 Artefakte | 6.948 | 183–217 |
| Anhang A Prompt-Sammlung | 5.218 | 219–254 |
| Anhang B Lösungshinweise | 2.809 | 255–271 |
| Anhang C Praxis-Primer | 1.293 | 273–281 |
| Glossar | 3.137 | 283–294 |
| Transparenzhinweis | 277 | 295–296 |
| **Gesamt** | **48.902** | **296** |

Kapitel 1–7 allein: 35.509. Die Schätzung vor dem Merge lag bei rund 42.900; das Skript zählt 6.000 mehr. Es zählt Prompt-Codeblöcke und Tabellenzellen mit; Glossar und Transparenzhinweis (3.414) waren in der Ringe-Rechnung vermutlich nicht enthalten. Der Rest der Differenz ist ungeklärt.

## 2 PDF-Bau

`quarto render --profile print --to pdf` (Quarto 1.8.25, XeTeX, TeX Live 2023): **Exit 0, 296 Seiten** (16 Seiten Titelei und Verzeichnisse, 280 gezählte Seiten), 17 × 24 cm, 8,7 MB. Schätzung war rund 240, Vertrag rund 250 Seiten.

Der erste Lauf brach ab, weil in der Cloud-Umgebung `fontawesome5.sty` fehlte (Paket `texlive-fonts-extra` nachinstalliert); das ist ein Umgebungs- und kein Buchfehler. Der PDF-Bau löscht `docs/` bis auf das PDF; `docs/` wurde aus Git zurückgeholt.

Warnungen:

- Quarto: `Unable to resolve crossref @sec-loesung-stuetzraeder` und `@sec-loesung-token-genres`.
- LaTeX: 8 × `tcolorbox: The upper box part has become overfull` (Anhang A); 27 × fehlendes Zeichen (12 × ★, 12 × ☆, 3 × ₂) in TeX Gyre Pagella; 1 × `Hyper reference 'sec-neue-moeglichkeiten' undefined`; 30 × Overfull hbox (16 über 10 pt, fast alle in Tabellen, größte 103 pt); 144 × Underfull.

## 3 Durchsicht

Alle 296 Seiten als Bild gesehen (37 Kontaktbögen zu je 8 Seiten, auffällige Seiten vergrößert), dazu automatische Prüfungen über Textlage, Schriften und Bilder je Seite.

**QR-Codes.** 54 Codes im Satz, alle bei 300 dpi maschinell lesbar, Kantenlänge 16 bis 37 mm. 48 zeigen auf die eigene Website; jedes Ziel existiert in `docs/` samt Anker. Zwei laufen über einen Umweg: S. 62 zeigt auf die Weiterleitungsseite `kapitel02.html#vid-naechstes-token-genres` (Ankertabelle führt nach `kapitel02-grundlagen.html`), S. 200 auf `galerie-animationen.html#kaya-teaser` (Anker wird vom Skript der Galerie ausgewertet). 6 Codes zeigen nach außen (aipedagogy.org auf S. 54 und 101; hochschulforumdigitalisierung.de auf S. 96, 136, 137, 170). **Die Erreichbarkeit im Netz ist nicht geprüft**: Die Abruf-Freigabe blieb in der Sitzung unbeantwortet, die Shell erreicht diese Adressen nicht.

**Schlüsselbegriffe-Kästen** (S. 34, 65, 83, 102, 140, 174, 211): Punktlinien, Seitenzahlen und Übungstabellen stehen sauber; eine Zeile auf S. 102 bricht um (K1).

**Verwaiste Überschriften:** keine. **`?@`-Verweise:** zwei (B2).

**Kap. 5 Lernfrage 2** (S. 142) gegen „Was Hochschulrichtlinien empfehlen“ (S. 123): siehe S5.

## 4 Befunde nach Schwere (Seitenzahl = PDF-Seite, in Klammern die gedruckte)

### Blockiert die Abgabe

- **B1 Anhang A, acht Prompt-Kästen laufen über.** Der Kastenkopf steht allein auf einer Seite (223, 226, 231, 234, 237, 240, 246, 249), der Prompt folgt auf der nächsten, ragt unten aus dem Kasten und wird am Seitenrand abgeschnitten: 227 (211), 232 (216), 235 (219), 238 (222), 241 (225), 247 (231), 250 (234); auf 224 (208) läuft er in die Seitenzahl. Textverlust. Ursache: Der Codeblock ist selbst ein Kasten (`code-block-bg`) und kann im umgebenden Callout nicht umbrechen. Kasten „AI-Sandwich“ 243/244 hat nur den abgetrennten Kopf.
- **B2 Zwei unaufgelöste Verweise im Fließtext:** „?@sec-loesung-stuetzraeder“ S. 27 (11), „?@sec-loesung-token-genres“ S. 61 (45). Die Zielüberschriften in Anhang B sind `.unnumbered`.
- **B3 Fehlende Zeichen als leere Kästchen:** Sterne ★☆ in der Bildunterschrift von Abb. 2.7, S. 57 (41) und im Abbildungsverzeichnis S. 8; tiefgestellte 2 in „CO₂“ S. 199 (183), 205 (189), 206 (190).
- **B4 Tabellen mit überdruckten Spalten:** Tab. 5.2 S. 125 (109) („Ideenfindung/Strukturierung“ über „Tools“), Tab. 5.4 S. 133–134 (117–118) (Säulennamen über der Formatspalte), Tab. C.1 S. 273–274 („Präsentation“, „Faktenwissen“). Leichter: Tab. 6.1 S. 152 (136), Tab. 5.5 S. 138 (122).
- **B5 Text über den Seitenrand:** URL in der Quellenzeile A.6.1 S. 245 (229) läuft aus der Seite; A.4.1 S. 236 (220) ragt 15 mm in den Rand.
- **B6 Platzhalter:** Impressum S. 2 ([Monat], ISBN, DOI, Verlagsanschrift, Umschlag, Druckerei, Logo des Publikationsfonds); Transparenzhinweis S. 295 endet mit „[Optional: Hinweis …]“. Wartet auf Verlagsangaben und eine Entscheidung.
- **B7 Umfang:** 296 Seiten gegen rund 250 im Vertrag. Hebel ohne Textkürzung: Abbildungsverzeichnis (7 Seiten, weil jede Bildunterschrift samt URL dort steht; mit Kurztiteln 2–3), Literaturverzeichnisse je Kapitel (rund 32 Seiten), Leerseiten vor Kapiteln und Teilen (rund 12), Anhang A nach der Kastenkorrektur.

### Sollte

- **S1** Abbildungsverzeichnis S. 7–13: volle Bildunterschriften mit URLs statt Kurztiteln.
- **S2** Teil-Seiten doppelt beschriftet: „Teil I / Teil I: Grundlagen“ S. 23, „Teil II / Teil II: Anwendungen“ S. 109.
- **S3** QR-Code allein am Seitenkopf, getrennt von seinem Satz: S. 29 (13), 61 (45), 64 (48), 101 (85).
- **S4** Toter PDF-Link: „online eine Galerie im Vorwort“ S. 33 (17) zeigt auf `sec-neue-moeglichkeiten`, das im Druck entfällt.
- **S5 Kap. 5 Lernfrage 2:** Die Frage unterstellt, „die meisten Hochschulrichtlinien“ hätten Elemente gemeinsam; der Absatz sagt, eine Auswertung von 27 Hochschulen „hebt vier bewährte Praktiken hervor“. Die vier Elemente der Lösung decken sich mit dem Absatz. Der Lösungssatz „ein Detektionswert taugt höchstens als Anlass für ein Gespräch, nie als Beweis“ steht nirgends im Drucktext; „selbst Prüfende … nicht unterscheiden“ stammt aus Kap. 5.5, nicht aus dem Absatz.
- **S6** Glossar S. 286 (270): Stichwort „Beschwörer, Dämmerfabrik und dunkle Fabrik (conjurer, twilight factory, dark factory)“ ragt 6 mm in den Rand.
- **S7** Tab. C.1 bricht nach der ersten Zeile um, S. 273/274.

### Kosmetisch

- **K1** Schlüsselbegriffe Kap. 4, S. 102 (86): „Transfergerechte Verarbeitung (transfer-appropriate processing)“ gesperrt, Seitenzahl in eigener Zeile.
- **K2** Große Weißflächen um Abbildungen: S. 62 (Abb. 2.10), S. 194 (Abb. 7.2); halbleere Seiten in Anhang A (Folge von B1).
- **K3** Sehr kleine Schrift in Grafiken: Abb. 4.4 S. 100, Abb. 5.8 S. 129, Abb. 3.1 S. 78.
- **K4** Glossar und Transparenzhinweis tragen je ein eigenes Literaturverzeichnis mit ein bis zwei Einträgen (S. 294, 296).
- **K5** Titelseite S. 1 ohne Verlagslogo oder Reihenangabe.

## Offen

- Entscheidung zu den Korrekturen (MC), danach Diff, Merge, PDF nach Tresorit.
- Externe QR-Ziele im Netz prüfen (sechs Codes, fünf Adressen).
- Unverändert: CSS bei 390 px, Durchsicht der 16 Branches, Branch-Löschskript, `onet-aufgaben.svg`, Adesope et al. (2017) am Original.

## Startauftrag nächste Sitzung

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (frisch klonen, Push-Zugriff nötig).
Lies notes/pdf-testbau/STATUS-pdf-testbau-2026-11-13.md, Abschnitt 4.
Auftrag: Korrekturen aus dem PDF-Testbau auf Branch pdf-testbau (B1 bis B5 zuerst), danach
quarto render --profile print --to pdf, die betroffenen Seiten als Bild prüfen, docs/ aus Git
zurückholen. Umgebung: texlive-fonts-extra nachinstallieren (fontawesome5). Diff per MC, Merge,
PDF nach Tresorit, ergebnisse-sichern. Fragen nur als Multiple Choice.
```
