# Feedback Roman 01.11.2026 (13:30): Priorisierung und Startaufträge je Sitzung

Grundlage: Romans Feedbackliste vom 01.11. (iPad), Projektstand laut `claude/merge-p5-p4/STATUS-merge-p5-p4-2026-11-01.md` (4D in 2.6 gemergt und live), `claude/kapitel02-umbau/STATUS-kapitel02-umbau-2-1-2026-10-31.md` (Umbau 2.1 inkl. Frontier-Animationen), `claude/fachbegriffe/STATUS-rag-erklaerung-2026-11-01.md` (Akronym-Regel, RAG-Patch nicht gepusht). Abgabe an Logos: 15.11.2026.

## Entscheidungen Roman (MC, 01.11., ca. 13:45)
- Weiter mit **S1a und S2 in zwei neuen Sitzungen parallel**; die Planungssitzung ist abgeschlossen.
- S5: **Stimmen per TTS-Dienst**; Claude schreibt das Drehbuch mit Regieanweisungen, Roman erzeugt die mp3-Dateien (z. B. ElevenLabs) und lädt sie hoch.
- S8: Escape Room steht **am Ende von Kapitel 2** als Wiederholung (4D, Modellwahl, Halluzination).
- Hinweis: Eine parallele Sitzung hat bereits `claude/phrasencheck/VORSCHLAG-phrasencheck-kap01-2026-11-01.md` angelegt (Sprachcheck Kap. 1). S9 baut darauf auf und doppelt Kap. 1 nicht.

## Stand (Nachtrag S1a, 01.11., ca. 15:20)
- **S1a erledigt**: Plan `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md` (Variante B, −25 %, Vertiefung am Kapitelende). Einbaustellen S3/S4/S5/S8 stehen dort.
- **S2 erledigt und gemergt** (`31450ba`), siehe `STATUS-animationen-tempo-eingespielt-2026-11-01.md`.
- Nächster Schritt: **S1b**.

## Stand (Nachtrag S1b Teil 1, 01.11., ca. 16:15)
- **S1b Teil 1 erledigt** (Branch `kapitel02-neugliederung`, nicht gemergt): Abschnitte nach 4D verschoben (`697a78a`, parallele Sitzung), Querverweise und Glossar (`3aa5bc4`, `8bd9812`). Siehe `STATUS-kapitel02-neugliederung-teil1-2026-11-01.md`.
- Nächster Schritt: **S1b Teil 2** (Kürzungen N1–N38, Brücken, Apparat, Lernpfade, Merge). Startauftrag in der Statusnotiz.
- Achtung: Pro Branch nur eine Sitzung starten (Teil 1 lief versehentlich doppelt).

## Stand (Nachtrag S1b, 01.11., ca. 16:30)
- **S1b vollständig erledigt und gemergt** (`main` @ `2b5ab18`, live geprüft): Kap. 2 nach 4D neu gegliedert, Druckumfang −24,6 %, 58 → 48 Druckseiten. Siehe `STATUS-kapitel02-neugliederung-s1b-2026-11-01.md`.
- Der Startauftrag „S1b Teil 2“ (aus `STATUS-kapitel02-neugliederung-teil1-2026-11-01.md`) ist **überholt, nicht starten**.
- Nächste Schritte: S6 (Fachbegriffe, buchweit), Einbau S3/S4/S5 an den Stellen aus dem Neugliederungsplan, dann S9.

## Ordnungsprinzip

Drei Gesichtspunkte bestimmen Rang und Reihenfolge. Erstens zählt für die Abgabe am 15.11. nur, was im **Druck** steht: Gliederung, Kürzung, Fachbegriffe und Sprache. Animationen, Spiele, Audio und Escape Room sind nur online und können notfalls nach der Abgabe folgen; im Druck erscheinen sie als Schlussbild mit QR-Code. Zweitens greifen alle Text-Änderungen an Kapitel 2 in dieselbe Datei `kapitel02.qmd`; sie laufen nacheinander, und die Neugliederung kommt zuerst, damit spätere Einbauten an der endgültigen Stelle landen. Neue Animationen sind eigene HTML-Dateien und lassen sich parallel bauen; nur ihr Einbau wartet auf die Neugliederung. Drittens kommt der Sprachcheck zuletzt, weil jede spätere Textänderung neue Artefakte erzeugen kann.

**Achtung Sprungmarken:** Die QR-Codes im Druck zeigen auf Sprungmarken wie `kapitel02.html#sec-…`. Bei Umbau und Umbenennung bleiben vorhandene IDs erhalten oder bekommen einen Ersatzanker.

## Übersicht

| Nr. | Sitzung | Feedbackpunkte | Rang | Parallel möglich? | wartet auf |
|---|---|---|---|---|---|
| S1a | Kap. 2 neu gliedern: Plan | 4D früh als Gliederung; Überblick → Modellerklärung → optionaler Deep Dive (2.1.2–2.1.5); Skills-Animation 1 raus; kürzen | A (Druck) | nein | – |
| S1b | Kap. 2 neu gliedern: Umsetzung | wie S1a | A | nein | S1a |
| S2 | Tempo und Fokus bestehender Animationen | METR-Animation schrittweise; 725-Raster mit fester Leitfrage; Acemoglu-Video (Kap. 4) langsamer | B | ja, sofort (andere Dateien) | – |
| S3 | Neue Animation Scaling Laws | Scaling Laws | B | Bau ja, Einbau nach S1b | S1b (Einbau) |
| S4 | Visualisierung der Rollen | Centaur, Cyborg, Beschwörer, Dämmerfabrik, dunkle Fabrik | B | Bau ja, Einbau nach S1b | S1b (Einbau) |
| S5 | Audio-Beispiele | 3 englische Sätze Vokabeltrainer + fiktives Vorstellungsgespräch mit Füllwörtern, Transkript rechts | C | Bau ja, Einbau nach S1b | S1b (Einbau), mp3 von Roman |
| S6 | Englische Fachbegriffe, Akronyme, Glossar | englische Begriffe in Klammern; offene Akronyme; Glossar-Nachträge | A (Druck) | nein (buchweit) | S1b |
| S7 | Glossar-Spiele | Ratespiel, Memory nach Schwierigkeitsstufen, MC Bedeutung → Begriff | C | ja | S6 |
| S8 | Escape Room im Comic-Stil (Ende Kap. 2) | Escape Room | C | Bau ja, Einbau nach S1b | S1b |
| S9 | Sprachcheck auf KI-Artefakte | Sprachcheck | A (Druck) | je Kapitel | alle Textänderungen |

Vorschlag Zeitplan: 01./02.11. S1a und S2 parallel; 03.11. S1b; 04.–05.11. S6, parallel Bau S3/S4/S5; 06.11. Einbau S3–S5 (eine Sitzung); 07.–11.11. S9 in zwei bis drei Sitzungen; S7 und S8 nur bei Luft vor dem 15.11., sonst danach (nur online).

Deutung offener Stellen (in den Prompts als MC-Frage an Roman eingebaut): „Allgemein kürzen“ steht unter „In 2“ und gilt hier für Kapitel 2. „Animation 1 zu Skills“ ist vermutlich die erste Skills-Animation in 2.1.4 (Skill-Wochen bzw. Skill-Karte). „Video zu Tasks, Acemoglu ist [zu] schnell“ meint das 38-s-Video in 4.1.1.

## Gemeinsamer Kopf für jede Sitzung

Jeden Startauftrag mit diesem Absatz beginnen (spart Rückfragen):

```
Projekt Logos-Lehrbuch „Generative KI als Hilfe zum Lehren und Lernen“, Repo TH-Koln-Bartnik/genai4teaching. Lies zuerst nur claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md (Abschnitt „Entscheidungen“ und den Abschnitt dieser Sitzung) und die dort genannten Notizen, keine weiteren Projektdateien ohne Anlass. Kläre vorab per Multiple Choice: (1) Repo-Schreibzugriff in dieser Sitzung ja/nein – sonst Ergebnis als Patch; (2) Tresorit-Ordner C:\Users\roman\My Tresors\0_Roman Arbeit\0_GenAI\1-Research\06-Lehrbuch-Publikation-Logos verbinden. Arbeite auf eigenem Branch von aktuellem origin/main; vor dem Merge Diff per Multiple Choice mit mir durchgehen. Render mit Quarto 1.8.25 (--to html), Download-PDF/EPUB in docs/ vorher sichern und zurücklegen. Vorhandene Sprungmarken (#sec-…, #vid-…) nicht umbenennen, weil QR-Codes im Druck darauf zeigen. Alle Fragen an mich als Multiple Choice. Zum Schluss Skill ergebnisse-sichern (Statusnotiz in Projekt, Tresorit, Repo notes/) und mir die Wahl für die nächste Sitzung als Multiple Choice geben.
```

---

## S1a – Kapitel 2 neu gliedern: Plan (keine Textänderung)

```
[Gemeinsamer Kopf]
Aufgabe: Gliederungsplan für Kapitel 2. Lies claude/merge-p5-p4/STATUS-merge-p5-p4-2026-11-01.md, claude/kapitel02-umbau/STATUS-kapitel02-umbau-2-1-2026-10-31.md, claude/kapitel02-4d-p4/STATUS-p4-4d-2026-11-01.md, claude/kapitelkopf-position/STATUS-kapitelauftakt-kap02-03-2026-11-01.md. Von kapitel02.qmd auf main per Skript nur Überschriften, IDs, Absatzanfänge, eingebettete Animationen/Lernspiele und Wortzahl je Abschnitt auslesen.

Meine Vorgaben (01.11.):
1. Das 4D-Modell (heute 2.6.2, #sec-4d) wird früh eingeführt und übernimmt die Gliederungsfunktion des Kapitels. Die übrigen Abschnitte werden einer der vier Kompetenzen zugeordnet (Arbeitshypothese prüfen: Modellwahl und „Was können die Modelle“ → Delegation; Prompting 2.5 → Description; Halluzination 2.2 → Discernment; Ressourcenverbrauch 2.7 → Diligence). Kompetenzrahmen-Vergleich 2.6.1 kürzen oder in einen Kasten/Anhang verschieben (Vorschlag).
2. Abfolge: Überblick → Modellerklärung → erst dann ein optionaler Deep Dive mit den Inhalten von 2.1.2 bis 2.1.5 (Tokens/Aufmerksamkeit, LLM/RAG/Agent, Skills/Werkzeuge, Gedächtnis). Der Deep Dive ist als Vertiefung erkennbar (online z. B. eigener Abschnitt „Vertiefung“ mit Hinweis „kann übersprungen werden“, im Druck gleiche Kennzeichnung).
3. Die erste Skills-Animation in 2.1.4 fällt weg (welche gemeint ist, per MC mit Vorschaubeschreibung bestätigen lassen).
4. Das Kapitel insgesamt kürzen; Zielumfang als MC anbieten (−15 / −25 / −35 %).
5. Am Kapitelende ist ein Escape Room als Wiederholung vorgesehen (S8); Platz dafür einplanen.

Liefere als PLAN-kapitel02-neugliederung-4d-<datum>.md: zwei bis drei Gliederungsvarianten als Tabelle (neuer Abschnitt, Inhalt alt, 4D-Zuordnung, Wörter vorher/nachher, Animationen/Lernspiele); Kürzungsliste mit Nummern und Begründung; Liste aller Querverweise auf Kapitel-2-Abschnitte aus anderen Kapiteln, Anhängen und interactions/*.html; Folgen für Lernziele, Kapitelauftakt-Einschätzungen, Kernaussagen, Lernfragen, Lösungshinweise, Vorwort/Lernpfade; Stellen, an denen später Scaling-Laws-Animation, Rollen-Visualisierung, Audio-Beispiele und Escape Room (S3–S5, S8) eingebaut werden. Entscheidungen mit mir per MC, dann Plan ablegen. Keine Änderung an Buchdateien.
```

## S1b – Kapitel 2 neu gliedern: Umsetzung

```
[Gemeinsamer Kopf]
Lies den freigegebenen Plan claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-*.md und setze ihn auf Branch kapitel02-neugliederung um: Abschnitte verschieben, 4D-Einführung nach vorn, Deep Dive kennzeichnen, Skills-Animation entfernen (Datei in interactions/ bleibt, nur Einbindung und Druckbild raus), Kürzungen nach Liste. Vorhandene IDs behalten; wo ein Abschnitt aufgeht, Ersatzanker setzen. Didaktischen Apparat (Lernziele, Einschätzungen, Kernaussagen, Lernfragen, Lösungshinweise) und alle Querverweise nachziehen. Prüfen: Render ohne neue Warnungen, keine ?@, Playwright 1200/390 px (Animationen laden, keine JS-Fehler), Wortzahl vorher/nachher, Druckpfad (LaTeX-Testrender, falls TeX verfügbar). Diff per MC, Merge, docs/ rendern, live prüfen.
```

## S2 – Tempo und Fokus bestehender Animationen (sofort, parallel zu S1)

```
[Gemeinsamer Kopf]
Drei Korrekturen an vorhandenen Animationen; kapitel02.qmd/kapitel04.qmd nur anfassen, wenn Bildunterschrift oder Laufzeit sich ändert (S1a/S1b arbeiten parallel an kapitel02.qmd – Änderungen dort minimal halten und in der Statusnotiz zeilengenau melden). Skill lehranimation-schritte laden; Prüfskript scripts/pruefe-aufmerksamkeit.cjs muss BESTANDEN melden.

1. Animation „KI-Agenten bewältigen immer längere Aufgaben“ (METR-Zeithorizont, Kap. 2; Datei per grep über den Titel in interactions/ finden; Daten laut claude/mollick-2026/datenherkunft-abbildungen-2026-10-29.md): läuft zu schnell. Umbauen auf Klick-für-Klick: je Schritt ein Modell bzw. eine Modellgeneration als neuer Punkt in der Akzentfarbe, ältere Punkte grau, logarithmische Achse mit Klartext-Beschriftung (Minuten, Stunden, Tage), am Ende die Trendlinie mit Verdopplungszeit. Storyboard (Schritte, Bildtext, Bildunterschrift) zuerst per MC freigeben lassen.
2. Animation „Expertenwissen wird 725-mal billiger“ (Kosten-Raster; Notizen claude/mollick-2026/PLAN-kosten-raster-725-2026-10-30.md, ARBEITSNOTIZ-kosten-raster-725-…, -farben-…, -zeitstrahl-…): Die Leitfrage „Wie viele Antworten auf schwierige Fragen (= Kästchen) kann ich für 30 Cent kaufen?“ steht beim Durchklicken immer sichtbar, zentral, groß und fett über dem Raster (bleibt bei jedem Schritt stehen, auch bei 390 px Breite). Bildunterschriften der Schritte darauf beziehen.
3. Video zu Tasks nach Acemoglu (Kap. 4.1.1, #vid-acemoglu-restrepo, 38 s; Quellen _src/videos/acemoglu/, HyperFrames 0.8.216, Notiz claude/kapitel04-aufgabenmodell/STATUS-kapitel04-aufgabenmodell-2026-11-01.md): zu schnell. Optionen per MC: (a) Pausen nach jeder Kachelbewegung verlängern, Ziel ca. 60–75 s; (b) zusätzlich eine Klick-für-Klick-Fassung als HTML statt Video; (c) Video gliedern in drei Teile (Automatisierung, Augmentierung, neue Aufgaben) mit Standbild dazwischen. Neu rendern, hyperframes check, Poster und Druckbild nur ersetzen, wenn sich das Schlussbild ändert; QR-Ziel bleibt.
Ablage: Branch animationen-tempo, Statusnotiz STATUS-animationen-tempo-<datum>.md.
```

## S3 – Neue Animation: Scaling Laws (Bau parallel, Einbau nach S1b)

```
[Gemeinsamer Kopf]
Neue Klick-Animation interactions/scaling-laws.html (Skill lehranimation-schritte, Graustufen + eine Akzentfarbe, ein neues Element je Schritt, höchstens 40 Wörter sichtbar). Inhalt: die beiden zentralen Begriffe aus Abschnitt 2.4: Training Scaling Law (mehr Daten, Rechenleistung, Parameter → geringerer Fehler, als gerade Linie auf doppelt-logarithmischer Achse; Kaplan et al. 2020, Hoffmann et al. 2022 „Chinchilla“) und Inference/Test-Time Scaling Law (mehr Rechenzeit beim Antworten → bessere Lösungen, Grundlage der Reasoning-Modelle; OpenAI 2024 zu o1, Snell et al. 2024). Quellen vor Verwendung im Original prüfen, DOI/arXiv-ID notieren, unbestätigte Details weglassen. Analogie für Laien vorschlagen (z. B. Lernzeit vor der Prüfung = Training, Bearbeitungszeit in der Prüfung = Inferenz) und per MC wählen lassen. Erst Storyboard (6–8 Schritte, Vorhersagefrage, Bildtexte, Bildunterschriften, eingeklappter Quellenteil) per MC freigeben, dann bauen, Prüfskript, Druckbild mit QR nach Muster scripts/druck-chatbot-zu-agent.cjs und scripts/qr-in-abbildung.py, references.json-Einträge. Einbau in kapitel02.qmd erst nach S1b an der im Neugliederungsplan vorgesehenen Stelle (Begriff mit Original: Skalierungsgesetz (*scaling law*)).
```

## S4 – Visualisierung der Rollen (Bau parallel, Einbau nach S1b)

```
[Gemeinsamer Kopf]
Zum Absatz „Mit stärkeren Agenten kommen Arbeitsweisen hinzu, in denen der Mensch nicht mehr in jeder Schleife sitzt. Als Beschwörer …“ (Kap. 2.4) eine Visualisierung der Rollen: Centaur, Cyborg, Beschwörer, Mensch in der Dämmerfabrik (mit vermittelndem Agenten), Mensch in der dunklen Fabrik. Zuerst prüfen, was es schon gibt: Durchspiel und Dämmerfabrik-Schema in 2.4, Notizen claude/mollick-2026/ARBEITSNOTIZ-arbeitsweisen-diagramm-2026-10-30.md, plan-durchspiel-arbeitsweisen-2026-10-30.md, ARBEITSNOTIZ-durchspiel-arbeitsweisen-2026-10-30.md, claude/kapitel02-p8-modellwahl/STATUS-p8-merge-2026-10-31.md (Kugel). Dann per MC: (a) neue kompakte Rollenkarte direkt am Absatz (fünf Spalten: wo sitzt der Mensch – in jeder Schleife / an Übergaben / am Anfang und Ende / nur bei Freigaben / nur bei der Zielsetzung), statisch mit Druckfassung; (b) Klick-Animation, die den Menschen Schritt für Schritt aus der Schleife herauswandern lässt; (c) bestehendes Durchspiel an diese Stelle verschieben und um die Rollenkarte ergänzen. Herkunft jedes Begriffs prüfen und belegen (Centaur/Cyborg: Dell'Acqua et al. 2023; Beschwörer, Dämmer-/dunkle Fabrik: Primärquelle im Buch nachsehen). Doppelungen mit dem vorhandenen Durchspiel vermeiden. Einbau nach S1b.
```

## S5 – Audio-Beispiele nach dem Satz „Zum Standardumfang der großen Chat-Interfaces …“ (Bau parallel, Einbau nach S1b)

```
[Gemeinsamer Kopf]
Nach dem Satz „Zum Standardumfang der großen Chat-Interfaces gehören inzwischen vier Funktionsklassen …“ (Kap. 2.4) zwei Hörbeispiele für Audio-Modelle mit steuerbarem Tonfall:
(1) Drei englische Sätze aus der Vokabeltrainer-App (Studierendenprojekt; in kapitel06-fallbeispiele.qmd und claude/triage-wagp-ki-projekte-2026-10-29.md suchen; findet sich die App nicht, per MC fragen, woher die Sätze kommen).
(2) Ein fiktiver Dialog aus der Simulation eines Vorstellungsgesprächs (Bezug Job-Buddy/Karriereberater, @sec-fall-job-buddy), 6–10 Wortwechsel; die Studentin sagt öfter „äh“, „ähm“, „also“, bricht Sätze ab; die KI-Interviewerin bleibt ruhig und hakt nach.
Stimmen (Entscheidung Roman 01.11.): Roman erzeugt die mp3-Dateien mit einem TTS-Dienst (z. B. ElevenLabs). Liefere deshalb zuerst ein Drehbuch je Sprecherin mit Regieanweisungen (Tempo, Zögern, Pausen in Sekunden, Betonung, Stimmcharakter), Dateinamen je Satz bzw. Wortwechsel und eine kurze Anleitung zur Erzeugung; Drehbuch per MC freigeben. Danach auf die hochgeladenen Dateien warten (Ordnerfreigabe per MC erfragen) und Zeitmarken für die Hervorhebung messen.
Darstellung online: Player links, Transkript rechts, der gerade gesprochene Satz wird hervorgehoben; bei 390 px untereinander. Kennzeichnung: „fiktiver Dialog, Stimmen KI-erzeugt“ (Transparenzpflicht für synthetische Audioinhalte nach Art. 50 KI-VO prüfen und im Text erwähnen). Druck: Transkript-Auszug als Kasten mit QR-Code. Einbau nach S1b; Dateien unter interactions/media/.
```

## S6 – Englische Fachbegriffe in Klammern, Akronyme, Glossar (buchweit, nach S1b)

```
[Gemeinsamer Kopf]
Regel (Roman, 01.11.): Beim ersten Auftreten je Kapitel steht zum deutschen Fachbegriff der englische Originalbegriff kursiv in Klammern, z. B. „motiviertes Denken (*motivated reasoning*)“ – nur wo es einen etablierten englischen Fachbegriff in der zitierten Literatur gibt (an der Quelle prüfen, nicht raten). Englische Begriffe, die im Text schon englisch stehen (Prompt, Token), bekommen stattdessen eine deutsche Umschreibung beim ersten Auftreten (bestehende Regel aus claude/fachbegriffe/STATUS-rag-erklaerung-2026-11-01.md).
Schritte:
0. Prüfen, ob claude/fachbegriffe/rag-erklaerung-2026-11-01.patch schon in main ist; sonst zuerst einspielen.
1. Per Skript Kandidatenliste je Kapitel (Kap. 1–6, Primer, Anhänge): Glossarbegriffe, kursiv eingeführte Begriffe, Begriffe mit Literaturbeleg; Spalten Kapitel, Zeile, deutscher Begriff, englischer Begriff, Quelle, schon vorhanden ja/nein.
2. Offene Akronyme aus der RAG-Statusnotiz (RLHF, API, METR, GPQA, PRISMA, ICAP, STEM, CAT, UI, VR, ECTS, HAWKI, CSV, BPMN, LLM je Kapitel) mit Kurzumschreibung.
3. Freigabe per MC in Paketen je Kapitel (alles übernehmen / einzelne streichen / Liste zeigen).
4. Glossar: jede Definition um den englischen Begriff ergänzen; fehlende Einträge anlegen (Delegation, Description, Discernment, Diligence, AI Fluency, Programmier-Agent, Skalierungsgesetz; je mit Herkunftszeile und Verweis). Für S7 je Eintrag eine Schwierigkeitsstufe vorschlagen (Grundbegriff / Fortgeschritten / Experte) und als Metadatum ablegen.
Zwei Sitzungen, wenn nötig: Kap. 1–3 / Kap. 4–6 + Anhänge + Glossar.
```

## S7 – Glossar-Spiele (nach S6)

```
[Gemeinsamer Kopf]
Ein Lernspiel zum Glossar mit drei Modi und drei Schwierigkeitsstufen (Grundbegriff / Fortgeschritten / Experte, aus den Metadaten von S6): (1) Ratespiel: Definition wird Stück für Stück aufgedeckt, Begriff eintippen oder wählen; (2) Memory mit verdeckten Karten, Paare Begriff–Definition; (3) Multiple Choice von der Wortbedeutung zum Begriff (drei plausible Ablenker aus derselben Stufe). Daten beim Build aus der Glossardatei erzeugen (JSON), damit Spiel und Glossar nie auseinanderlaufen; keine KI-generierten Paare zur Laufzeit. Lehren aus der Kritik am BWL-Memory (Kap. 6.1.3) umsetzen: Karten verdeckt, falsch beantwortete Begriffe kommen wieder, verlassen die Wiederholungsliste aber nach zwei richtigen Antworten. Typ S1/S2 nach claude/lernspiele/regelwerk-lernspiele-synthese-2026-10-31.md, ehrlich benennen. Vorhandenes Lernspiel in 2.1 (llm-game) prüfen und wo sinnvoll wiederverwenden. Einbindung oben auf der Glossarseite (online), im Druck ein Satz mit QR-Code. Prüfen bei 1200/390 px, Tastaturbedienung.
```

## S8 – Escape Room im Comic-Stil am Ende von Kapitel 2 (Bau parallel, Einbau nach S1b)

```
[Gemeinsamer Kopf]
Ein Escape Room im Comic-Stil am Ende von Kapitel 2 als Wiederholung (Entscheidung Roman 01.11.): Stoff 4D-Kompetenzen, Modellwahl, Halluzination, Grundbegriffe. Zuerst per MC klären: (1) Bilder: Comic-Panels als SVG von dir / ich erzeuge Panels mit Gemini nach deinen Bildprompts / reine Text-Sprechblasen ohne Bilder; (2) Umfang: 3 / 5 Räume. Dann Storyboard per MC freigeben: Rahmengeschichte mit benannter Figur und Konflikt (Willingham), je Raum ein Rätsel, dessen Lösung Fachwissen verlangt (Code aus Begriffen, Fehler in einer KI-Antwort finden, richtige 4D-Kompetenz wählen), Hinweisstufen, Auflösung mit Erklärung. Nach Regelwerk claude/lernspiele/regelwerk-lernspiele-synthese-2026-10-31.md einordnen (Abrufspiel im Erzählrahmen, nicht „Simulation“ nennen). Keine geschützten Figuren oder Stile bekannter Comics. Eine HTML-Datei interactions/escape-room-kap02.html; Druck: Schlussbild mit QR. Einbau nach S1b an der im Neugliederungsplan vorgesehenen Stelle.
```

## S9 – Sprachcheck auf KI-Artefakte (zuletzt, je Kapitel)

```
[Gemeinsamer Kopf]
Sprachcheck des Buchtexts auf typische KI-Formulierungen mit dem Skill genai-phrase-check-detailed. Zuerst claude/phrasencheck/VORSCHLAG-phrasencheck-kap01-2026-11-01.md lesen (parallel entstandener Vorschlag zu Kap. 1): Kap. 1 nicht doppeln, Stand dort übernehmen bzw. abschließen. Reihenfolge danach: Kap. 2 (nach S1b), dann 3–6, Vorwort, Primer, Anhänge; zwei bis drei Sitzungen. Je Kapitel eine Fundliste (Zeile, Muster, Originalsatz, Vorschlag), z. B. gehäufte „nicht X, sondern Y“-Konstruktionen, Dreierreihen, Doppelpunkt-Pointen, Gedankenstrich-Einschübe, Floskeln („spielt eine entscheidende Rolle“, „zentral“, „gerade“), Metadiskurs, Absatzschlüsse mit Moral. Maßstab: klassische Prosa nach Thomas & Turner. Zitate, Zahlen, Belege und Fachbegriffe in Klammern (S6) nicht verändern. Freigabe per MC in Paketen (alle übernehmen / einzeln / Liste zeigen), dann umsetzen, rendern, Wortzahl vorher/nachher.
```

## Offen / zur Entscheidung
1. S7/S8 vor oder nach dem 15.11. (nach Stand am 07.11. entscheiden).
2. S5: Quelle der Vokabeltrainer-Sätze, falls die App im Buch nicht auffindbar ist.

## Startauftrag nächste Sitzungen (Entscheidung Roman: zwei parallel)
- Sitzung A: „Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` und arbeite Abschnitt S1a ab.“ – **erledigt**
- Sitzung B: „Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` und arbeite Abschnitt S2 ab.“ – **erledigt**
- Als Nächstes: „Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` und arbeite Abschnitt S1b ab.“

Ablage: Projekt `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` · Tresorit `Projektnotizen-Claude/feedback-2026-11-01/` · Repo `notes/2026-11-01-plan-feedback-sitzungen.md` (beide nachgeholt in S1a).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (nachgeholt in S1a, 01.11.)
