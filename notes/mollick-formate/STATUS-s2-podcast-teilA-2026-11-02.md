# S2 Hörstück „Was Forschende über KI sagen“ – Status Sitzung A (02.11.2026)

Auftrag: `claude/mollick-formate/AUFTRAG-s2-interviews-podcast-2026-11-02.md`, Schritte 0–10. G1 (Kap. 4.1, `sec-recherche`) und G2 (Drehbuch durch Agent, Vertonung ElevenLabs v3 durch Roman) waren entschieden.

**Ergebnis:** Element, Kapiteltext, Druckkasten und Lösung sind fertig und geprüft; der Ton ist ein Platzhalter (Piper, 7:07 min). Offen sind G2b (Drehbuch-Freigabe, Frage am Ende), Romans Vertonung (Blatt `VERTONUNG-s2-elevenlabs-2026-11-02.md`, ca. 20–25 min) und Sitzung B.

## Repo

Branch `mollick-s2-podcast` (von `main` df0f9bc), gepusht, **nicht gemergt**.
- `31edde3` Inhalt, `b962b09` docs/ gerendert (Quarto 1.8.25, `--to html`), dazu ein Commit mit dieser Notiz in `notes/mollick-formate/`.

| Datei | Inhalt |
|---|---|
| `scripts/interviewer-s2-auszug.py` | Trennt Interviewer („Assistant:“/„AI:“) von Teilnehmenden („User:“), Stichwortzählung, 93 Originalstellen (≤ 60 Wörter) |
| `scripts/interviewer-s2-suche.py` | Suche für den Prüfagenten: `id`, `wort`, `zaehle`, `wortlaut` |
| `_src/audio/s2-podcast/auszug.json`, `auszug-drehbuch.md` | Zählung, Stichwortlisten, Originalstellen (nur dies ging an Agent A, 3.690 Wörter) |
| `_src/audio/s2-podcast/drehbuch-erstfassung.md` | Erstfassung Agent A, **unverändert** (SHA-256 `7cd98a14…764fb`) |
| `_src/audio/s2-podcast/pruefung-drehbuch.md` | Prüftabelle Agent B, 39 Aussagen mit wörtlichen Belegen |
| `_src/audio/s2-podcast/manifest.json` | Einzige Quelle: 35 Zeilen, 5 Themen, `drehbuch` (Original), `text`, `tts`, `ids`, `pruef`, Zeitmarken; Listen `sprechbarkeit` und `korrekturen` |
| `_src/audio/s2-podcast/elevenlabs-bloecke.md` | 5 Blöcke für Text to Dialogue (1.084–1.713 Zeichen) |
| `_src/audio/s2-podcast/uebung.json` | Texte der Übung (Vorhersage, drei Prüfaussagen, Bilanz, Transfer) |
| `scripts/audio-s2-zusammenfuegen.py` | `manifest` · `bloecke` · `ton [--platzhalter]` · `daten` |
| `interactions/podcast-forschende-ki.html` | Element, fünf Phasen, Daten eingebettet, kein `fetch` |
| `tests/podcast-s2.test.mjs` | 7 Tests (Manifest, Player-Daten, Prüfaussagen, Zählung, Blöcke, IDs, Wortlaut) |
| `scripts/qr-podcast-s2.py`, `images/qr/qr-podcast-forschende.png` | QR auf `kapitel04.html#sec-podcast-interviews`, mit OpenCV gelesen |
| `kapitel04.qmd` | neue `#### Interviews auswerten lassen – und prüfen {#sec-podcast-interviews}` (nur Einfügung, 40 Zeilen) |
| `kapitel10-appendix05-loesungshinweise.qmd` | Lösung „Prüfen Sie selbst“ unter Kapitel 4 |
| `references.json` | `handa2025interviewer` angehängt (Seite geöffnet: 4.12.2025, Titel und 13 Autorinnen/Autoren geprüft) |

**Nicht committet:** Platzhalter-mp3 `interactions/media/kap04-podcast-forschende.mp3` (3,3 MB; wie bei den Hörbeispielen Kap. 2), Piper-Rohdateien, `lokal/antworten.json`. Neu erzeugen: Stimmen `de_DE-kerstin-low`, `de_DE-thorsten-high` von HF `rhasspy/piper-voices` laden, `PIPER_STIMMEN=<ordner> python3 scripts/audio-s2-zusammenfuegen.py ton --platzhalter` (2,5 min).

## Daten und Stichwortzählung (Schritt 1)

Datensatz: HF `Anthropic/AnthropicInterviewer`, `interview_transcripts/scientists_transcripts.csv`, ohne Login geladen. README: „Data released under CC-BY, code released under MIT License“; Einwilligung aller Teilnehmenden zur Veröffentlichung.
Skriptprüfung: 125 Transkripte, 179.809 Wörter (920 / Median 1.348 / 2.784), davon 84.271 Wörter Antworten der Teilnehmenden.
Befund am Rand: Der Interviewer heißt nach der Begrüßung „AI:“, nicht „Assistant:“; erste Trennung zählte deshalb seine Fragen mit (korrigiert vor jeder Weiterverwendung).

Ein Interview zählt für ein Thema, wenn mindestens ein Stichwort (Wortanfang, Groß/klein egal) in den Antworten vorkommt:

| Thema | Interviews | Stichwörter |
|---|---|---|
| Literatur und Schreiben | 105 | literature, paper, manuscript, writing, write, wrote, draft, summari, proofread, grant, abstract, citation |
| Code und Datenanalyse | 102 | code, coding, python, script, programm, debug, data analys, analyz, analys, statistic, dataset |
| Ideen und Hypothesen | 93 | idea, brainstorm, hypothes, creativ, inspir, novel |
| Prüfen und Verifizieren | 95 | verif, double-check, double check, check, validat, cross-check, fact-check, confirm |
| Misstrauen und Fehler | 73 | hallucinat, fabricat, made up, make up, makes up, incorrect, wrong, mistake, inaccura, unreliab, not trust, n't trust, distrust, skeptic, sceptic |
| Zeitgewinn | 62 | save time, saves time, saved time, saving time, time-saving, time saving, faster, quicker, speed up, sped up, efficien |
| Sorge um Fachkompetenz | 9 | deskill, de-skill, atroph, critical thinking, over-reli, overreli, over reli, dependen, lazy, lose the abilit, lose my, lose our, lose skill, losing skill |
| Wunsch nach Grenzen | 12 | boundar, guardrail, draw the line, off-limits, off limits, wouldn't let, would never, never let, never use, wouldn't trust, not comfortable, uncomfortable |

Bekannte Fehltreffer (vom Drehbuch-Agenten und vom Prüfagenten selbst bemerkt): „dependen“ trifft Softwareabhängigkeiten (nur 3 von 9 Kompetenz-Treffern passen), „boundar“ trifft Grenzschichten und „Grenzen der Wissenschaft“ (4 von 12), „check“ allein trifft 62 Interviews, „mistake“ auch Grammatikfehler. Mit engeren Prüfwörtern (ohne check/confirm) 73 statt 95.

## Agent A: Drehbuch (Schritt 2)

Frischer Teilagent (general-purpose), Material nur `auszug-drehbuch.md`, ein Durchgang, 75 s, 1.154 Wörter, 5 Themen. Prompt im Wortlaut:

> Schreibe ein deutsches Podcast-Gespräch von etwa 1.150 Wörtern (8 Minuten) zwischen zwei Moderierenden, Lea und Jonas, über die angehängten Auszüge aus 125 Interviews mit Forschenden zu ihrer Arbeit mit KI. Zielgruppe: Hochschullehrende. Zitiere Teilnehmende sinngemäß auf Deutsch und nenne bei jedem Zitat die Transkript-ID in eckigen Klammern. Gliedere in vier bis fünf Themen. Ende mit einer offenen Frage an die Hörenden.
>
> Anhang (die Auszüge): Lies die Datei /home/claude/genai4teaching/_src/audio/s2-podcast/auszug-drehbuch.md. Das ist dein einziges Material; lies keine anderen Dateien.
>
> Technische Form (damit das Drehbuch maschinell weiterverarbeitet werden kann):
> - Jede Themengliederung als Zeile „## Thema: <Titel>“.
> - Jeder Redebeitrag als eigener Absatz, beginnend mit „Lea:“ oder „Jonas:“, ein Beitrag höchstens etwa 60 Wörter.
> - Transkript-IDs genau in der Form [science_0042] direkt hinter dem sinngemäßen Zitat.
> - Schreibe in einem Durchgang und überarbeite den Text danach nicht.
>
> Speichere das Ergebnis mit dem Write-Werkzeug als /home/claude/genai4teaching/_src/audio/s2-podcast/drehbuch-erstfassung.md (nur das Drehbuch, ohne Vorbemerkung). Antworte danach nur mit „fertig“ und der Wortzahl.

## Agent B: Prüfung (Schritt 3)

Zweiter frischer Teilagent ohne Kenntnis von Prompt A, Zugriff auf die CSV nur über `interviewer-s2-suche.py`, 5,5 min, 24 Werkzeugaufrufe. Prompt im Wortlaut:

> Du bist Prüfer. Prüfe jede Sachaussage eines deutschen Podcast-Drehbuchs an den Originalquellen.
>
> Material:
> - Drehbuch: /home/claude/genai4teaching/_src/audio/s2-podcast/drehbuch-erstfassung.md (lesen).
> - Quellen: 125 englische Interview-Transkripte mit Forschenden über ihre Arbeit mit KI (Anthropic Interviewer, 2025). Die CSV liegt unter /home/claude/daten/interviewer/scientists_transcripts.csv. Lies sie NIE ganz (180.000 Wörter), sondern nur über das Suchskript:
>   python3 -I /home/claude/genai4teaching/scripts/interviewer-s2-suche.py /home/claude/daten/interviewer/scientists_transcripts.csv id science_0042      (alle Antworten eines Interviews)
>   ... wort "regex" --max 25 --fenster 35   (Stellen mit Begriff, mit ID)
>   ... zaehle "regex"                         (in wie vielen Interviews kommt der Begriff in den Antworten vor)
>   ... wortlaut "exakter Text"                (kommt ein Textstück wörtlich vor?)
> - Grobe Stichwortzählung (Anzahl Interviews von 125, in deren Antworten ein Stichwort des Themas vorkommt): Literatur/Schreiben 105, Code/Datenanalyse 102, Ideen/Hypothesen 93, Prüfen/Verifizieren 95, Misstrauen/Fehler 73, Zeitgewinn 62, Sorge um Fachkompetenz 9, Wunsch nach Grenzen 12. Die Stichwortlisten stehen in /home/claude/genai4teaching/scripts/interviewer-s2-auszug.py (THEMEN). Häufigkeitsaussagen im Drehbuch ("die meisten", "viele", "fast alle", "einige", Zahlen) prüfst du gegen diese Zählung und mit eigenen zaehle-Abfragen.
>
> Auftrag:
> 1. Zerlege das Drehbuch in Sachaussagen: jedes sinngemäße Zitat mit ID, jede Häufigkeits- oder Verallgemeinerungsaussage, jede sonstige Behauptung über die Interviews oder die Teilnehmenden. Reine Moderationsfloskeln, Meinungen der Moderierenden und Fragen ausnehmen.
> 2. Stufe jede Aussage ein: belegt / überzogen / nicht belegt.
>    - belegt: Die Quelle sagt das sinngemäß so.
>    - überzogen: Kern stimmt, aber Verallgemeinerung, Zuspitzung, Gewicht oder Kontext gehen über die Quelle hinaus (z. B. ein Einzelfall wird als typisch dargestellt, ein Nebensatz zur Kernaussage).
>    - nicht belegt: Die genannte Quelle sagt das nicht, ID falsch, oder keine Stelle zu finden.
>    Prüfe bei jedem Zitat die genannte ID mit "id" und suche das Original. Prüfe auch, ob Fachgebiete, Rollen oder Details über Personen erfunden sind.
> 3. Nenne zu jeder Aussage 1–3 Belegstellen: Transkript-ID und Originalstelle WÖRTLICH aus der Ausgabe des Skripts (englisch, höchstens 50 Wörter je Stelle, ohne Auslassungen innerhalb eines Satzes; prüfe jede Stelle mit "wortlaut"). Bei "nicht belegt" die nächstliegende Stelle, falls vorhanden.
> 4. Markiere Aussagen, die eine teilnehmende Person falsch oder herabsetzend wiedergeben.
>
> Ausgabe: Schreibe mit dem Write-Werkzeug /home/claude/genai4teaching/_src/audio/s2-podcast/pruefung-drehbuch.md mit
> - einer Markdown-Tabelle: Nr | Sprecher | Aussage (Wortlaut aus dem Drehbuch, gekürzt auf das Geprüfte) | Absatz-Nr. im Drehbuch (Redebeiträge durchgezählt ab 1, Themenzeilen nicht mitgezählt) | Urteil | Beleg-IDs | Begründung (1–2 Sätze, deutsch)
> - danach je Aussage einen Block "### Aussage N" mit den wörtlichen Belegstellen als Liste "- [science_00xx] "…"".
> - am Ende eine Zusammenfassung: Zahl der Aussagen je Urteilsstufe, Persönlichkeitsschutz-Befunde.
> Schreibe sachlich, keine Bewertung des Stils. Antworte danach nur mit den drei Zahlen (belegt/überzogen/nicht belegt).

**Ergebnis:** 39 Sachaussagen: **33 belegt, 6 überzogen, 0 nicht belegt.** Alle IDs passen, alle Zahlen reproduzierbar, keine erfundenen Fachgebiete oder Rollen.
Überzogen: Nr. 12 „Das spart keine Zeit“ (science_0082, galt nur für komplexe Datenanalyse) · Nr. 15 „fast so präsent wie die Nutzung selbst“ (Schluss aus „check“) · Nr. 16 „Fehlerberichte sehr fachspezifisch“ (viele betreffen erfundene Quellen) · Nr. 22 „Arbeit selbst wiederholen“ als allgemeine Gegenposition (science_0105, galt für Auswertungen) · Nr. 28 Trainingsdaten-Zitat verschoben (science_0089) · Nr. 34 „Viele ziehen klare persönliche Grenzen“ (12 von 125, davon 4 Fehltreffer).
Vollständige Tabelle: `_src/audio/s2-podcast/pruefung-drehbuch.md`.

## Auswahl der drei Prüfaussagen (Schritt 3.4, vor jeder Änderung)

Regel: je eine Aussage je Urteilsstufe; da keine Aussage „nicht belegt“ ist, gilt die Ersatzregel: die zwei auffälligsten Verallgemeinerungen plus ein wörtliches Zitat, bevorzugt zu Lehre, Prüfen, Schreiben.
1. **Zeile 12 (Prüfagent Nr. 15), überzogen:** „Das Thema ist also fast so präsent wie die Nutzung selbst.“ Verallgemeinerung zum Thema Prüfen; zeigt, wie eine korrekte Zahl einen falschen Schluss trägt.
2. **Zeile 28 (Nr. 34), überzogen:** „Viele ziehen klare persönliche Grenzen.“ Auffälligste Verallgemeinerung, direkt an der Zählung (12/125) prüfbar; auch Druckaufgabe.
3. **Zeile 29 (Nr. 36), belegt:** science_0087, KI-Vorschläge als Sprungbrett, Aufsätze auf Echtheit prüfen. Zitat zu Literatur und Prüfen; ein belegtes Beispiel verhindert das Antwortmuster „alles ist überzogen“.

## Sprechbarkeit (Schritt 2.2) und Persönlichkeitsschutz (Schritt 3.5)

Sprechbarkeit, 37 Einträge in `manifest.json → sprechbarkeit`, keine inhaltlichen Änderungen: 33 Transkript-IDs nicht gesprochen (Feld `ids`), Zahlen in 6 Zeilen im Eingabetext ausgeschrieben (Anzeige behält Ziffern; das Skript vergleicht beide wortgleich), drei v3-Tags: Zeile 1 `[warmly]`, 17 `[thoughtful]`, 34 `[curious]`.

Persönlichkeitsschutz, 3 Korrekturen vor der Vertonung (`manifest.json → korrekturen`; Originalabsatz im Feld `drehbuch`):
- Zeile 15 (science_0032): Kontext ergänzt, dass die drei Werte nur zum Vermuten einer Formel dienen, die die Person ohne KI beweist.
- Zeile 17 (science_0010): Rahmung „heikel / schmale Grundlage für Vertrauen“ entfernt; „sie prüfe Informationen“ und das triviale Beispiel (Einheiten) ergänzt.
- Zeile 23 (science_0089): richtiggestellt (Werkzeug stützt sich zu stark auf Trainingsdaten, nicht Nutzende). Damit ist Prüfaussage Nr. 28 in der Hörfassung korrigiert; **im Hörstück bleiben 5 überzogene Aussagen**, offengelegt in Bilanz und Making-of.
Nicht geglättet (bewusst, Schritt 3.5): Nr. 12, 15, 16, 22, 34.

## Element und Kapiteltext (Schritte 4–8)

- Fünf Phasen: Vorhersage → Hören (Player, Tempo 0,75/1/1,25, Sprungmarken je Thema, Transkript mit Hervorhebung, Prüfaussagen gepunktet unterstrichen) → Prüfen (je Aussage „Stelle anhören“ spielt nur diese Zeile und lässt sich anhalten, 2 Originalstellen EN + Arbeitsübersetzung + ID, Urteil + Sicherheit 1–3, Auflösung mit Begründung) → Bilanz (Tabelle, Befund 39/33/6/0, Vorhersage gegen Zählung mit Balken, Kasten „Was diese Daten zeigen – und was nicht“, Quellen) → Für Ihre Lehre (Vorlage 62 Wörter mit Kopier-Knopf, Datenschutzsatz mit Verweis Kap. 5, aufklappbar Prompt + gefundene Schwächen).
- Kennzeichnung im Player: „Stimmen KI-erzeugt (ElevenLabs v3); Drehbuch KI-erzeugt, ungeprüft.“ Im Platzhalterbetrieb schreibt das Skript „(vorläufig Piper)“.
- Kapiteltext: Einleitung (≈ 125 Wörter, Gemini Notebook in einem Satz, Datensatz-Fußnote mit CC BY), iframe mit Höhenmeldung, Druckkasten „Prüfen Sie selbst: Ziehen Forschende der KI klare Grenzen?“ mit QR, Einordnung (39/33/6/0, Regel für eigene Auswertungen), Kasten „So entstand dieses Hörstück“ (≈ 95 Wörter).

**Abweichungen vom Auftrag (bitte kurz ansehen):**
1. *Ort:* nach dem Absatz „Der 4D-Kreislauf beim Hiwi“, direkt vor `## KI als Copilot`, damit der 4D-Absatz nicht unter die neue Unterüberschrift rutscht.
2. *Vorhersagefrage:* Statt „Wobei vertrauen Forschende der KI?“ fragt das Element „Worüber sprechen die Forschenden am häufigsten …?“, weil die Stichwortzählung Erwähnungen misst, nicht Vertrauen. Der Regler (Misstrauen) bleibt wie geplant.
3. *Didaktik-Zitate:* Statt Richland et al. (2009) steht der im Buch schon geführte Schlüssel `pan2023prequestion` (Kap. 6). Clinton-Lisell (2022) und Butterfield & Metcalfe (2001) sind **nicht** zitiert: Der Crossref-Abruf brauchte eine Freigabe, die in der Sitzung niemand erteilen konnte; ohne geprüfte DOI kein Zitat.
4. *Druckkasten:* Englische Originale kursiv im Kasten statt als Fußnoten; im LaTeX-Test bekamen zwei Fußnoten im Kasten beide die Nummer 2.
5. *Making-of-Kasten:* nicht eingeklappt, weil Quartos eingeklappte Kästen einen axe-Befund (`aria-allowed-attr`) erzeugen; buchweit betrifft das alle `collapse="true"`-Kästen (eigener Punkt für später).
6. *Making-of nennt ElevenLabs v3* als Stimmen; das stimmt erst nach Sitzung B. Bis dahin steht der Branch ohne Ton.

## Prüfung (Schritt 9)

- `node --test tests/podcast-s2.test.mjs`: 7/7 bestanden (inkl. wörtlicher Abgleich aller Prüf- und Auszugsstellen mit der CSV, Leerraum normalisiert).
- `quarto render kapitel04.qmd --to html`: 79 Warnungen, identisch mit `main` (alles Querverweise auf andere Kapitel beim Einzelrender, OJS-Zeilenzählung), keine neue.
- Playwright 1200/390 px, je Klick- und Tastaturdurchlauf: alle Phasen bedienbar; Hervorhebung bei drei Stichproben (Zeilen 3, 17, 31) synchron; Klick auf Zeile springt; Kopier-Knopf kopiert; Fokus wandert beim Phasenwechsel auf die Überschrift; kein horizontales Scrollen; keine Konsolenfehler; iframe-Höhe 1.406 px (Buchspalte) bzw. 2.218 px (390 px). Dabei gefunden und behoben: Prüfkarten wurden nicht eingehängt; kein Halt-Knopf in der Prüfphase; Hinweis stand hinter den Originalstellen.
- axe (Element und Kapitelabschnitt): keine Verstöße (nach Umstellung auf h1-Hierarchie im Element und offenem Making-of-Kasten).
- Hinweis für lokale Vorschau: Pythons `http.server` liefert keine Byte-Bereiche, dann springt das Audio nicht; GitHub Pages kann das. Testserver mit Range: `/home/claude/tools/server.cjs` (nicht im Repo).
- Druck-Testrender des Kastens als Einzeldokument (xelatex, TeX Gyre Pagella, A5): sauber, Ankreuzfelder $\square$ gesetzt, QR lesbar. `fontawesome5.sty` fehlt im Container und wurde für den Test durch einen Platzhalter ersetzt (nur Kastensymbole). Gesamt-PDF des Buchs nicht gebaut.
- Screenshots: Tresorit `Projektnotizen-Claude/mollick-formate/s2-podcast/screens-s2/` (Phasen 1–5 bei 1200 px, Hören und Prüfen bei 390 px, Dunkelmodus, Druckkasten A5). Dort auch: Erstfassung, Hörfassung (`s2-hoerfassung.md`, zum Lesen für G2b), Prüftabelle, ElevenLabs-Blöcke und der Platzhalterton `s2-platzhalter-piper.mp3`.

## Parallelversuch S2-N (Gemini Notebook)

In Tresorit liegt seit 10:00 `AUFTRAG-s2n-podcast-gemini-notebook-2026-11-02.md`: dasselbe Element aus allen 125 Interviews, Hörstück aus Gemini Notebook, Entscheid zwischen beiden Fassungen am Gate **G2c**. S2 läuft laut diesem Auftrag unverändert weiter. Beide nutzen den Anker `#sec-podcast-interviews`; falls S2-N dieselben Dateinamen verwendet (`interactions/podcast-forschende-ki.html`, `_src/audio/s2-podcast/`), vor G2c auf getrennte Namen achten. Für den Vergleich liefert S2 die Prüfzahlen 39/33/6/0 und den Auszug von 3.690 Wörtern als Gegenstück zu „alle 180.000 Wörter“.

## Für Sitzung B

1. Romans Blöcke `s2-block-01.mp3` … `-05.mp3` aus Tresorit `06-Lehrbuch-Publikation-Logos/Audio-S2-Podcast/` nach `_src/audio/s2-podcast/roh/`.
2. `python3 scripts/audio-s2-zusammenfuegen.py ton` (ohne `--platzhalter`). Das Skript findet die Sprecherwechsel in einem Block über Pausen (silencedetect, ≥ 0,25 s, −40 dB); meldet es „Zeitmarken nach Zeichenzahl verteilt“, die Stichproben besonders genau ansehen. Rückfall: Einzeldateien je Zeile in `roh/zeilen/` (Dateinamen `s2-zeile-NN.mp3`).
3. Ändert Roman bei G2b Zeilen, zuerst `manifest.json` (Felder `text` und `tts`) anpassen, dann `bloecke` neu schreiben; **nicht** `manifest --neu` (überschreibt die Korrekturen).
4. Tests, Render, Playwright (`/home/claude/tools/pruefe-s2.cjs` neu anlegen oder aus dieser Notiz nachbauen), mp3 committen, G3.

## G2b – Frage an Roman (Multiple Choice)

Drehbuch: `_src/audio/s2-podcast/drehbuch-erstfassung.md` (Erstfassung) bzw. Spalte `text` in `manifest.json` (Hörfassung mit drei Korrekturen).
- (a) Freigeben, so vertonen.
- (b) Einzelne Stellen ändern (welche?).
- (c) Prüfaussagen tauschen (z. B. eine der zitatbezogenen Überzeichnungen, Nr. 12 oder 22, statt Nr. 15).

