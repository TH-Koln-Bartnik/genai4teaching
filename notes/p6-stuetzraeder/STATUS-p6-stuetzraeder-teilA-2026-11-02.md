# STATUS P6 „Stützräder – wie die Prompting-Ratschläge kamen und gingen“, Sitzung A (02.11.2026)

Auftrag: `claude/prompting-primer/AUFTRAG-p6-stuetzraeder-film-2026-11-02.md`, Schritte 1–9 umgesetzt. Drehbuch freigegeben (G2b); eine Textänderung in Szene 7 per MC (siehe unten). Offen: Vertonung durch Roman, dann Sitzung B (G3).

## Ergebnis in einem Satz

Ein Film von 2:16 min mit Platzhalterstimme (Piper), neun Szenen in neun Genres mit Prompt-Zettel als Hauptfigur und Quellenmarke je Szene, läuft im erweiterten Genrefilm-Player (Vorhersage mit Sicherheit 1–3, drei Haltepunkte, Selbsttest, Making-of); Kap. 2.4 hat die Einfügung am Abschnittsende (online iframe, Druck Raster + QR + Selbsttest), alle Prüfungen sind grün.

## Repo

- Branch `prompting-film-stuetzraeder`, Commits `7efa2bb` (Bau), `cfb0ed0` (Merge von `main` @ `5837b77` mit Sitzung A zu Kap. 2.4; Konflikt in `references.json` per Vereinigung der Einträge gelöst, `vallverdu2025` bleibt entfernt), `61435a6` (Einbau Kap. 2.4, Szene 7, Poster), gepusht, **nicht gemergt**.
- **Abhängigkeit:** Der Branch zweigt von `mollick-s5-token-genres` ab (S5-Pipeline, nicht gemergt). Ein Merge von P6 bringt S5 Sitzung A mit nach `main`; deshalb erst nach S5 Sitzung B/G3 mergen oder S5 zuerst.
- Neu: `_src/videos/p6-stuetzraeder/{manifest.json, szenen.mjs, drehbuch.md}`, `notes/p6-stuetzraeder/{quellen.md, VERTONUNG-…, STATUS-…}`, `scripts/p6-quiz-woerter.py`, `images/druck/video-stuetzraeder.png`, `images/qr/qr-video-stuetzraeder.png`, `interactions/media/kap02-stuetzraeder-poster.png`.
- Geändert: `kapitel02.qmd` (nur Einfügung, 35 Zeilen vor `## Discernment`), `kapitel10-appendix05-loesungshinweise.qmd` (`#sec-loesung-stuetzraeder`), `references.json` (+`brown2020`, `kojima2022`, `wei2022`, `li2023emotion`, `tippett2010`, `openaireasoning`), Pipeline (rückwärtskompatibel, S5 unverändert geprüft): `interactions/genrefilm-player.html`, `scripts/genrefilm/{pipeline,bauen,drehbuch,player-pruefen}.mjs`, `druckraster.py`, `README.md`, `tests/genrefilm.test.mjs`.
- **Nicht committet (gewollt):** `interactions/media/kap02-stuetzraeder.mp4` und die beiden VTT (Platzhalterstimme); `docs/` nicht gerendert.

## Ort und Text

Ende Kap. 2.4 nach dem Landfair-Kasten, vor `## Discernment` (Sitzung A zu Kap. 2.4 war inzwischen gemergt, daher direkter Einbau statt Patch). Anker `[]{#vid-stuetzraeder}`, iframe `genrefilm-kap02-stuetzraeder`. Drucktext 85 Wörter (Einladung, Brücke zum Streich-Test als Klartext ohne Querverweis, Widerlegungstext mit `@tippett2010`), Druck-Selbsttest 106 Wörter, Making-of-Kasten nur online (Druck hat Werkzeuge und Kennzeichnung in der Bildunterschrift). Bildunterschrift nennt „gut zwei Minuten“; in Sitzung B prüfen.

## Quellen (Schritt 1)

`notes/p6-stuetzraeder/quellen.md`: 25 Zeilen, jede Szene verweist per `belege[].zeile` darauf; Test prüft Status und Zahlen. Pflichtprüfung OpenAI „Reasoning best practices“: **Wortlaut bestätigt** („Avoid chain-of-thought prompts …“), neue URL developers.openai.com; Szene 5 bleibt. Kojima 17,7 → 78,7 % (MultiArith, text-davinci-002) gerundet 18 → 79, Modell und Benchmark in der Quellenmarke. Trinkgeld und Großbuchstaben nur als ▲ Folklore.
Befunde des Prüf-Teilagenten: Google-Leitfaden-URL (alt) liefert 404, Buchschlüssel `google2026gemini3` zeigt auf die erreichbare Seite; `openai2026gpt55` leitet inzwischen auf „Using GPT-6“ um (Inhalt unter „Previous models“) – Schlüssel aus Sitzung A, nicht geändert; „prune“ steht nicht in Anthropic (2026d) → Szene 9 Quellenmarke „kurz halten“; DeepSeek-R1: Wortlaut aus arXiv-Fassung (Nature nicht abrufbar); Report 1 belegt „Höflichkeit“, nicht „please“.

## Entscheidung in der Sitzung (MC)

**Modell:** Eleven v4 statt v3 (Roman, 02.11.2026, 13:47). v4 versteht dieselben Audio Tags; Sprechtexte unverändert. Kennzeichnung im Manifest (`kennzeichnung.elevenlabs`), Making-of und Druck-Bildunterschrift Kap. 2.4 auf „ElevenLabs v4“ umgestellt; `drehbuch.mjs` liest das Modell jetzt aus `manifest.vertonung`. **Achtung:** Vertonungsblätter S2/S5 und deren Kennzeichnungen nennen noch v3; werden sie ebenfalls mit v4 vertont, in deren Sitzung B auf v4 umstellen.

**Szene 7:** Google nennt kein Erfolgskriterium. Roman wählte: „**In diese Richtung** raten heute alle drei großen Labore: Ziel nennen, Erfolgskriterium nennen, dann fahren lassen.“ (statt „Genau das …“). Im Manifest und Vertonungsblatt umgesetzt.

## Bild und Pipeline

Graustufen + `--red` (#c1002a, dunkel #ff5c7a) nur für das neue Element; Prompt-Zettel wächst (1–3), verliert Aufkleber (4–5), wird neu gebaut (6–7), Zeitkapsel 308 vs. „rund 120“ (9). Quellenmarken ■ Labor / ● Studie / ▲ Folklore / ◆ Zählung, Zitate klein. Stützrad in Szene 5 mit Etikett „Analogie“. Keine Logos, Labornamen nur als Text. Poster = Zwischentitel „2020“ (Schlussbild hätte die Vorhersage verraten; neues Manifest-Feld `posterZeit`).
Neue optionale Pipeline-Felder (README): `grenzen.woerter` (P6: 30–55, weil die freigegebenen Texte 31–42 Wörter haben), `quellenliste` (Test: bestätigte Zeilen, Zahlen, Bildtext im Code = Manifest), `sicherheit` (1–3, Hinweis bei sicherem Irrtum nach Butterfield & Metcalfe, 2001), `vorhersage.nachSzene` = letzte Szene → Auflösung am Ende, `quellenmarken` (Legende), `farben.player`, `makingof.schwaeche`, `vertonung`. QR-Einzeldatei mit Ruhezone 4 Module (vorher bei kurzen URLs nicht lesbar).

## Endzahl Szene 9 (Schritt 2)

`python3 scripts/p6-quiz-woerter.py origin/main origin/anhangB-prompts-neu` → **308 / 124**. Anhang B ist nicht gemergt; Szene 9 sagt „rund 120“ (passt zu 124). **Offen:** nach Merge von Anhang B erneut zählen; weicht die Zahl stark ab, Sprechtext und Bild anpassen.

## Kennzahlen

Laufzeit 136,2 s (2:16); MP4 1280 × 720, 30 fps, H.264 CRF 23 veryfast: 4,9 MB; Lautheit −16,7 LUFS. Rendern 204 s (Faktor 1,5). Kontrast WCAG: kleinster Wert 5,67 : 1.

## Prüfungen (Schritt 8)

- `node --test tests/genrefilm.test.mjs`: 9/9 (S5 unverändert grün; P6 neu: Quellenzeilen bestätigt, Zahlen = Quellenliste, Bildtext im Code = Manifest, ≤ 8 neue Bildwörter).
- `quarto render kapitel02.qmd --to html`: 40 Warnungen mit und ohne Einfügung, **keine neuen**; kein `?@`.
- Player Playwright 1200/390 px: **43/43 OK** (Vorhersage mit Sicherheit, Halt nach Szene 3, Hinweis bei sicherem Irrtum, Weiter, Kapitelsprung, Tastatur, Auflösung der Vorhersage am Ende, Selbsttest, Kopier-Knopf, keine Konsolenfehler, kein horizontales Scrollen); axe Player 0 Verstöße. S5-Player lädt unverändert.
- Kapitelseite: iframe meldet Höhe (1200 px: 1133, 390 px: 1309), keine Seitenfehler; axe im Einfügebereich 0 Verstöße (Seite gesamt bestehend: frame-title 2, image-alt 2, link-in-text-block 9, link-name 2). Überbreite bei 390 px stammt aus Bestehendem (Navbar-Titel, Tabelle), nicht aus P6.
- Druckabbildung in Graustufen angesehen; QR farbig und grau gelesen. PDF-Testrender nicht versucht (TeX im Container unvollständig, wie S5).
- Kein eigener Prüfagent für die Szenen: Die Sprechtexte waren freigegeben; die Quellen prüfte ein frischer Teilagent gegen die Originalseiten.

## Take-Liste für Roman (ElevenLabs v4)

Arbeitsblatt mit Audio Tags (für Eleven v4): `VERTONUNG-p6-elevenlabs-2026-11-02.md` (Projekt, Tresorit, Repo `notes/p6-stuetzraeder/`). Ablage der mp3: Tresorit `06-Lehrbuch-Publikation-Logos/Audio-P6-Stuetzraeder/` (Ordner angelegt). Länge = Platzhalter (Piper); ElevenLabs darf 10–30 % länger sein.

| Datei | Genre | Sprechtext | Platzhalter |
|---|---|---|---|
| `p6-szene01.mp3` | Stummfilm | 2020. Sprachmodelle verstehen eine Aufgabe noch schlecht. Also macht man es ihnen vor: drei gelöste Beispiele, dann die eigene Aufgabe. Few-Shot-Prompting heißt das, Lernen aus wenigen Beispielen. Es wirkt erstaunlich gut. Der erste Ratschlag ist geboren: Zeig’s ihm vor. | 16,7 s |
| `p6-szene02.mp3` | Zaubershow | Meine Damen und Herren: ein einziger Satz! ‚Denken wir Schritt für Schritt.‘ Und das Modell löst plötzlich 79 statt 18 von hundert Rechenaufgaben. Kein Trick, sondern gemessen. Ab jetzt gilt: Lass das Modell laut denken. | 13,1 s |
| `p6-szene03.mp3` | Teleshopping | Aber das ist noch nicht alles! Jetzt neu: die Expertenrolle! Das Trinkgeld! Großbuchstaben! Und dazu: Das ist sehr wichtig für meine Karriere. Einiges davon stand in Studien und Hersteller-Anleitungen, vieles nur in Ratgebern. Der Zettel wird länger und länger. | 14,6 s |
| `p6-szene04.mp3` | Gerichtsdrama | Die Beweisaufnahme, 2025. Trinkgeld und Drohungen: kein messbarer Effekt auf schweren Tests. Expertenrollen: keine genaueren Fakten. Höflichkeit: hilft mal, schadet mal. Das Gericht urteilt: nicht erwiesen. Die Aufkleber kommen vom Zettel. | 16,1 s |
| `p6-szene05.mp3` | Naturdokumentation | Hier sehen wir ein Reasoning-Modell in freier Wildbahn. Es denkt, bevor es antwortet, ganz ohne Aufforderung. Wer ihm vorsagt, wie es denken soll, gewinnt kaum etwas und zahlt mit Zeit und Tokens. Stützräder helfen beim Lernen. In der Kurve stören sie. | 14,4 s |
| `p6-szene06.mp3` | Kochshow | Was bleibt im Topf? Das Ziel. Der Grund, wozu Sie es brauchen. Ihr Material, lange Texte oben, die Frage darunter. Format und Länge. Beispiele, wenn der Stil zählt. Und bei Tutor-Bots bleibt das Rezept, denn dort ist der Ablauf das Gericht. | 13,7 s |
| `p6-szene07.mp3` | Roadmovie | Dem Taxifahrer sagen Sie nicht: blinken, kuppeln, links. Sie sagen: Hauptbahnhof, bis 14:40, ich muss den Zug kriegen. **In diese Richtung** raten heute alle drei großen Labore: Ziel nennen, Erfolgskriterium nennen, dann fahren lassen. | 13,9 s |
| `p6-szene08.mp3` | Heist-Film | Und wenn das Ziel noch unscharf ist? Dann zuerst der Plan. Das Modell interviewt Sie, eine Frage nach der anderen. Daraus wird eine Spezifikation. Die Ausführung startet in einer frischen Sitzung, und am Ende prüft jemand, der beim Planen nicht dabei war. | 13,3 s |
| `p6-szene09.mp3` | Science-Fiction | Eine Nachricht an Sie, später. Unser eigener Quiz-Prompt schrumpfte von 308 auf rund 120 Wörter. Auch die Regeln von heute gleichen nur aus, was Modelle heute noch nicht können. Wenn das nächste Modell kommt: Zettel hervorholen, Zeile für Zeile prüfen. | 15,0 s |

Aussprache prüfen: „2020“, „79 statt 18“, „14:40“ (vierzehn Uhr vierzig), „308“; „Reasoning-Modell“ und „Few-Shot-Prompting“ englisch. Kann mit S2/S5/S6 in einem Durchgang erfolgen (gleiche Stimme empfohlen).
Platzhalterfilm zum Ansehen: Tresorit `Projektnotizen-Claude/prompting-primer/p6-stuetzraeder/kap02-stuetzraeder-PLATZHALTER-piper.mp4` (dort auch Screenshots und Druckbild).

## Startauftrag Sitzung B

> Lies `claude/prompting-primer/AUFTRAG-p6-stuetzraeder-film-2026-11-02.md` und `claude/prompting-primer/STATUS-p6-stuetzraeder-teilA-2026-11-02.md` und führe „Sitzung B“ aus. Die Takes liegen in Tresorit `06-Lehrbuch-Publikation-Logos/Audio-P6-Stuetzraeder/`. Branch `prompting-film-stuetzraeder`: Takes nach `_src/videos/p6-stuetzraeder/audio/`, `node scripts/genrefilm/bauen.mjs --film kap02-stuetzraeder --audio _src/videos/p6-stuetzraeder/audio --stimme elevenlabs`, `python3 scripts/genrefilm/druckraster.py --film kap02-stuetzraeder --name stuetzraeder`, Wortzahl Quiz-Ersteller neu zählen (`scripts/p6-quiz-woerter.py`), Tests und `scripts/genrefilm/player-pruefen.mjs`, MP4/VTT/Poster/Druckbild committen, Bildunterschrift „gut zwei Minuten“ prüfen, am Ende G3 per MC (Merge-Reihenfolge mit S5 beachten).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: nein)
