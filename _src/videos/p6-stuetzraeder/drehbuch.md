# Drehbuch: Stützräder – wie die Prompting-Ratschläge kamen und gingen

Erzeugt aus `manifest.json` (einzige Quelle; Änderungen dort, dann `node scripts/genrefilm/drehbuch.mjs --film kap02-stuetzraeder`).
Bildsprache: Graustufen + eine Akzentfarbe (#c1002a; auf dunklem Grund #ff5c7a); Leitobjekt: Prompt-Zettel (weiße Karte): wächst in Szene 1–3, verliert die Aufkleber in 4–5, wird in 6–7 neu gebaut.
Laufzeit mit aktueller Tonspur: 159.9 s.

## Vorhersage vor dem Start

Bevor der Film startet: Ein gut gebauter Arbeitsauftrag an ein heutiges Modell ist im Vergleich zu einem guten Prompt von 2023 eher …

a) länger.  
b) etwa gleich lang.  
c) kürzer. **(richtig)**

Auflösung: Kürzer. Szene 9 zeigt es am Quiz-Ersteller aus Anhang B: Er schrumpfte auf weniger als die Hälfte (von 275 auf 119 Wörter), weil Rolle, Ablaufvorschriften und Ermahnungen wegfielen. Ziel, Wozu, Material und Abnahme blieben.

## Szene 1: Stummfilm (0.0–21.7 s)

**Idee:** Few-Shot: Man macht dem Modell die Aufgabe an Beispielen vor.  
**Sprechtext (39 Wörter):** 2020. Sprachmodelle verstehen eine Aufgabe noch schlecht. Also macht man es ihnen vor: drei gelöste Beispiele, dann die eigene Aufgabe. Few-Shot-Prompting heißt das, Lernen aus wenigen Beispielen. Es wirkt erstaunlich gut. Der erste Ratschlag ist geboren: Zeig’s ihm vor.  
**Stimme:** Ansager eines alten Wochenschau-Films: gemessen, etwas feierlich  
**Bildtext:** „Stummfilm“, „2020“, „Prompt“, „Beispiel 1“, „Beispiel 2“, „Beispiel 3“, „Ihre Aufgabe“, „● Studie“  
**Bild:** Schwarzer Grund mit Filmkratzern und Flackern; Zwischentitel „2020“ im Doppelrahmen; danach der Prompt-Zettel mit drei Beispielkarten (Akzent) und einem gestrichelten Feld „Ihre Aufgabe“  
**Gekennzeichnet:** Beispielkarten schematisch (graue Balken statt Text)  

| Fachaussage | Beleg |
|---|---|
| Few-Shot-Prompting: Das Modell löst Aufgaben aus wenigen Beispielen im Prompt, ohne Nachtraining; deutlich besser als ohne Beispiele. | Brown et al. (2020) |
| Leitjahr 2020 | Brown et al. (2020) |

## Szene 2: Zaubershow (21.7–37.9 s)

**Idee:** Chain of Thought: Ein Satz lässt das Modell Zwischenschritte schreiben.  
**Sprechtext (35 Wörter):** Meine Damen und Herren: ein einziger Satz! ‚Denken wir Schritt für Schritt.‘ Und das Modell löst plötzlich 79 statt 18 von hundert Rechenaufgaben. Kein Trick, sondern gemessen. Ab jetzt gilt: Lass das Modell laut denken.  
**Stimme:** Zauberkünstler auf der Bühne: große Geste, dann ein Flüstern beim Zaubersatz  
**Bildtext:** „Zaubershow“, „2022“, „Prompt“, „Denken wir Schritt für Schritt.“, „18“, „79“, „von 100 Aufgaben“, „● Studie“  
**Bild:** Bühne mit Vorhangstreifen und Spotlicht; Zylinder und Zauberstab; der Satz fliegt aus dem Hut auf den Zettel (Akzent); zwei Balken 18 und 79 von 100  
**Gekennzeichnet:** Werte gerundet: 17,7 → 78,7 % (MultiArith, text-davinci-002)  

| Fachaussage | Beleg |
|---|---|
| „Let’s think step by step“ hebt MultiArith von 17,7 auf 78,7 % (text-davinci-002), gerundet 18 → 79 von 100. | Kojima et al. (2022) |
| Chain-of-Thought-Prompting verbessert Rechen- und Denkaufgaben (laut denken lassen). | Wei et al. (2022) |

## Szene 3: Teleshopping (37.9–55.4 s)

**Idee:** Aufkleber-Inflation: Rolle, Trinkgeld, Großbuchstaben, emotionale Appelle.  
**Sprechtext (39 Wörter):** Aber das ist noch nicht alles! Jetzt neu: die Expertenrolle! Das Trinkgeld! Großbuchstaben! Und dazu: Das ist sehr wichtig für meine Karriere. Einiges davon stand in Studien und Hersteller-Anleitungen, vieles nur in Ratgebern. Der Zettel wird länger und länger.  
**Stimme:** Verkaufssender: schnell, überdreht; die beiden letzten Sätze ruhig und trocken  
**Bildtext:** „Teleshopping“, „2023“, „Prompt“, „Denken wir Schritt für Schritt.“, „NEU!“, „Expertin!“, „200 $ Trinkgeld“, „WICHTIG!!!“, „Karriere!“, „■ Labor“, „● Studie“, „▲ Folklore“  
**Bild:** Hell gestreifter Studiogrund, Stern „NEU!“; vier Aufkleber prasseln schräg auf den Zettel, jeder mit eigener Quellenmarke (Expertin ■, Karriere ●, Trinkgeld ▲, WICHTIG ▲); der Zettel wächst über den unteren Bildrand  

| Fachaussage | Beleg |
|---|---|
| Rollen- bzw. Persona-Prompts standen in Hersteller-Anleitungen. | OpenAI (2023), Prompt engineering guide; Anthropic Doku (Rollen-Prompt) |
| „Das ist sehr wichtig für meine Karriere“ (EmotionPrompt) verbesserte in einer Studie Ergebnisse damaliger Modelle. | Li et al. (2023) |
| Trinkgeld und Großbuchstaben kursierten als Ratgeber-Tipps; keine Hersteller-Empfehlung gefunden. | Meincke et al. (2025c), Einleitung; Anthropic (2026a) rät von aggressiver Sprache ab |

**Haltepunkt nach Szene 3:** Helfen Trinkgeld, Drohung und Expertenrolle heutigen Modellen bei schweren Aufgaben?  
a) Ja, deutlich.  
b) Kaum oder gar nicht. **(richtig)**  
c) Nur die Expertenrolle.  
Auflösung: Kaum oder gar nicht. In Tests mit schweren Fragen hatten Trinkgeld und Drohungen keinen messbaren Effekt, und Expertenrollen machten die Antworten nicht genauer. Für Ton und Simulationen bleiben Rollen sinnvoll. Die nächste Szene zeigt die Beweisaufnahme.

## Szene 4: Gerichtsdrama (55.4–74.0 s)

**Idee:** Die Hausrezepte im Test: bringt nichts.  
**Sprechtext (32 Wörter):** Die Beweisaufnahme, 2025. Der KI eine Rolle geben: kein Effekt bei neueren Modellen. Trinkgeld und Drohungen: kein messbarer Effekt. Höflichkeit: keine Wirkung. Das Gericht urteilt: bringt nichts. Die Aufkleber kommen vom Zettel.  
**Stimme:** Vorsitzende Richterin: ruhig, sachlich, Pausen vor dem Urteil  
**Bildtext:** „Gerichtsdrama“, „2025“, „Prompt“, „1“, „2“, „3“, „Expertin“, „Trinkgeld“, „Bitte“, „bringt nichts“, „● Studie“  
**Bild:** Holzvertäfelung in Graustufen, Richtertisch; drei Beweisstücke (Expertin, Trinkgeld, Bitte) mit Nummern; Hammerschlag; Stempel „bringt nichts“ (Akzent); die Aufkleber fallen vom Zettel  

| Fachaussage | Beleg |
|---|---|
| Der KI eine Rolle geben: kein Effekt auf die Genauigkeit bei aktuellen Modellen. | Basil et al. (2025) |
| Trinkgeld und Drohungen: kein messbarer Effekt auf schweren Benchmarks (GPQA, MMLU-Pro). | Meincke et al. (2025c) |
| Höflichkeit: keine verlässliche Wirkung (Sprechtext vereinfacht zu „keine Wirkung“; Take übernommen, Roman 02.11.2026). | Meincke et al. (2025a) |

## Szene 5: Naturdokumentation (74.0–91.4 s)

**Idee:** Reasoning-Modelle denken selbst; Denkvorschriften werden zu Stützrädern.  
**Sprechtext (41 Wörter):** Hier sehen wir ein Reasoning-Modell in freier Wildbahn. Es denkt, bevor es antwortet, ganz ohne Aufforderung. Wer ihm vorsagt, wie es denken soll, gewinnt kaum etwas und zahlt mit Zeit und Tokens. Stützräder helfen beim Lernen. In der Kurve stören sie.  
**Stimme:** Tierfilm-Erzähler: leise, staunend, langsam  
**Bildtext:** „Naturdokumentation“, „● REC“, „2024–2026“, „Reasoning-Modell“, „denkt selbst“, „Schritt für Schritt“, „Analogie“, „■ Labor“, „● Studie“  
**Bild:** Dokumentarrahmen mit Ecken und REC; Silhouette mit Denkblase vor der Antwort; Zettelstreifen „Schritt für Schritt“ wird durchgestrichen (Akzent) und fällt; Schnitt: Fahrrad mit Stützrädern, das Stützrad schleift in der Kurve; Etikett „Analogie“  
**Gekennzeichnet:** Stützräder sind eine Analogie, kein Mechanismus  

| Fachaussage | Beleg |
|---|---|
| Reasoning-Modelle denken vor der Antwort selbst; Chain-of-Thought-Aufforderungen sind unnötig. | OpenAI, Reasoning best practices |
| CoT-Aufforderungen bringen bei Reasoning-Modellen kaum Gewinn und kosten Zeit und Tokens. | Meincke et al. (2025b) |
| Few-Shot-Beispiele verschlechtern DeepSeek-R1; Zero-Shot empfohlen. | Guo et al. (2025) |
| Leitjahre 2024–2026: Reasoning-Modelle seit 2024 (o1-preview) in Studien verglichen. | Liu, R. et al. (2025) |
| Stützräder: Analogie, kein Mechanismus. | eigene Analogie (OPTIONEN-Dokument) |

**Haltepunkt nach Szene 5:** Sie schreiben einem Reasoning-Modell „Denke Schritt für Schritt“. Was passiert typischerweise?  
a) Deutlich bessere Antworten.  
b) Kaum bessere, aber langsamere und teurere Antworten. **(richtig)**  
c) Immer schlechtere Antworten.  
Auflösung: Kaum bessere, aber langsamere und teurere Antworten: Reasoning-Modelle gehen ohnehin schrittweise vor. Bei manchen Aufgabentypen wird es sogar schlechter, nämlich dort, wo langes Nachdenken auch Menschen schadet (Liu, R. et al., 2025).

## Szene 6: Kochshow (91.4–109.2 s)

**Idee:** Was bleibt: Ziel, Wozu, Material, Format, Stilbeispiele; im Tutor der Ablauf.  
**Sprechtext (41 Wörter):** Was bleibt im Topf? Das Ziel. Der Grund, wozu Sie es brauchen. Ihr Material, lange Texte oben, die Frage darunter. Format und Länge. Beispiele, wenn der Stil zählt. Und bei Tutor-Bots bleibt das Rezept, denn dort ist der Ablauf das Gericht.  
**Stimme:** Fernsehkoch: gut gelaunt, zügig, jedes Wort wie eine Zutat  
**Bildtext:** „Kochshow“, „Prompt“, „Ziel“, „Wozu“, „Material“, „?“, „Format“, „Tutor: Ablauf bleibt“, „■ Labor“, „● Studie“  
**Bild:** Küchentheke mit Fliesen; Schälchen Ziel, Wozu, Material, Format springen auf einen neuen Zettel (das jeweils neue in Akzent); im Feld Material ein Dokument oben, ein Fragezeichen darunter; Rezeptkarte „Tutor: Ablauf bleibt“  

| Fachaussage | Beleg |
|---|---|
| Ziel und Grund (Kontext, „warum“) angeben; Format und Länge vorgeben; Beispiele für Stil und Format. | Anthropic (2026a) |
| Lange Dokumente oben, Frage unten. | Anthropic (2026a); Liu, N. F. et al. (2024) |
| Bei Tutor-Bots bleibt der Ablauf: Er ist Spezifikation, nicht Lösungsweg. | Leitlinie Kap. 2.4 / Anhang A (Buch) |

## Szene 7: Roadmovie (109.2–125.2 s)

**Idee:** Die neue Grundregel: Ziel und Erfolgskriterium nennen, dann fahren lassen.  
**Sprechtext (34 Wörter):** Dem Taxifahrer sagen Sie nicht: blinken, kuppeln, links. Sie sagen: Hauptbahnhof, bis 14:40, ich muss den Zug kriegen. In diese Richtung raten heute alle drei großen Labore: Ziel nennen, Erfolgskriterium nennen, dann fahren lassen.  
**Stimme:** Roadmovie-Erzähler: gelassen, trocken, gleichmäßiges Tempo  
**Bildtext:** „Roadmovie“, „2026“, „TAXI“, „Ziel: Hauptbahnhof“, „Abnahme: 14:40, ICE“, „Anthropic“, „OpenAI“, „Google“, „■ Labor“  
**Bild:** Nachtstraße mit Mittelstreifen; Taxi von hinten; Zettel an der Heckscheibe mit Ziel und Abnahme (Zeile „Abnahme“ in Akzent); drei Wegweiser mit Labornamen als Text zeigen in dieselbe Richtung  
**Gekennzeichnet:** Taxi-Beispiel ausgedacht (Analogie)  

| Fachaussage | Beleg |
|---|---|
| Anthropic: vollständige Aufgabe vorab übergeben und laufen lassen (Opus 5); Abschlussbedingung vorab nennen (Opus 5.5). | Anthropic (2026b, 2026c) |
| OpenAI: erwartetes Ergebnis und Erfolgskriterien nennen; Schritt-für-Schritt-Anleitungen reduzieren. | OpenAI (2026) |
| Google: knappe, direkte Anweisungen statt komplexer Prompt-Technik (Erfolgskriterium dort nicht ausdrücklich). | Google Cloud (2026) |
| Taxi, Hauptbahnhof, 14:40: ausgedachtes Beispiel (Werkvertrag statt Dienstvertrag). | eigene Analogie (OPTIONEN-Dokument) |

**Haltepunkt nach Szene 7:** Sie wissen selbst noch nicht genau, was am Ende herauskommen soll. Was tun Sie?  
a) Eine ausführliche Schrittliste schreiben.  
b) Sich vom Modell interviewen lassen, daraus eine Spezifikation machen, dann neu starten. **(richtig)**  
c) „Du bist ein erfahrener Didaktiker“ voranstellen.  
Auflösung: Erst das Interview, dann eine Spezifikation; die Ausführung startet in einer frischen Sitzung, und am Ende prüft jemand, der beim Planen nicht dabei war. Die nächste Szene zeigt den Plan.

## Szene 8: Heist-Film (125.2–141.6 s)

**Idee:** Unklares Ziel: Interview, Spezifikation, frische Sitzung, fremde Prüfung.  
**Sprechtext (42 Wörter):** Und wenn das Ziel noch unscharf ist? Dann zuerst der Plan. Das Modell interviewt Sie, eine Frage nach der anderen. Daraus wird eine Spezifikation. Die Ausführung startet in einer frischen Sitzung, und am Ende prüft jemand, der beim Planen nicht dabei war.  
**Stimme:** Kopf einer Einbrecherbande über dem Bauplan: leise, verschwörerisch, präzise  
**Bildtext:** „Heist-Film“, „Interview“, „Spezifikation“, „neue Sitzung“, „fremde Prüfung“, „■ Labor“  
**Bild:** Bauplan auf dunklem Tisch mit Raster; Taschenlampenkegel; vier Stationen werden nacheinander eingezeichnet und mit Pfeilen verbunden; Station „Spezifikation“ in Akzent  

| Fachaussage | Beleg |
|---|---|
| Interview → Spezifikation → frische Sitzung; Prüfung durch einen Agenten ohne Planungskontext. | Anthropic (2026d) |
| Planungsregel: Ziel unklar → Interview und Spezifikation, dann neue Sitzung. | Leitlinie Kap. 2.4 (Buch) |

## Szene 9: Science-Fiction (141.6–159.9 s)

**Idee:** Zeitkapsel: Der eigene Prompt schrumpfte; auch heutige Regeln sind Stützräder auf Zeit.  
**Sprechtext (39 Wörter):** Eine Nachricht an Sie, später. Unser eigener Quiz-Prompt schrumpfte auf weniger als die Hälfte. Auch die Regeln von heute gleichen nur aus, was Modelle heute noch nicht können. Wenn das nächste Modell kommt: Zettel hervorholen, Zeile für Zeile prüfen.  
**Stimme:** Botschaft aus der Zukunft: ruhig, freundlich, leicht entrückt  
**Bildtext:** „Science-Fiction“, „Prompt“, „Ziel“, „Wozu“, „Material“, „Abnahme“, „vorher“, „weniger als ½“, „Stand: November 2026“, „prüfen“, „■ Labor“  
**Bild:** Sternenhimmel; Zeitkapsel öffnet sich; alter Zettel (lang, viele graue Zeilen, „vorher“) neben neuem (kurz, „weniger als ½“ in Akzent); Stempel „Stand: November 2026“; Prüflinie fährt über den neuen Zettel  
**Gekennzeichnet:** Zettelzeilen schematisch; Wortzahlen per Skript gezählt (275 → 119, Zählregel wie Streich-Test)  

| Fachaussage | Beleg |
|---|---|
| Quiz-Ersteller (Anhang B) schrumpft auf weniger als die Hälfte: 275 → 119 Wörter (−57 %), Zählregel wie Streich-Test (P1). | eigene Zählung, scripts/p6-quiz-woerter.py |
| Anweisungen kurz halten und regelmäßig kürzen; bei neuen Modellen mit frischer Basis beginnen. | Anthropic (2026d); OpenAI (2026) |
| Stand: November 2026 | Stand der Quellen |

## Selbsttest

1. Warum halfen Tricks wie „Denke Schritt für Schritt“ früher?  
   a) Sie glichen eine Schwäche damaliger Modelle aus. **(richtig)**  
   b) Modelle reagieren auf Höflichkeit.  
   c) Sie verkürzten die Antwort.  
   Frühe Modelle gingen nicht von sich aus schrittweise vor; der Satz holte das nach. Reasoning-Modelle tun es selbst, deshalb bringt er heute kaum noch etwas.
2. Welche Zeile streichen Sie in einem Arbeitsauftrag an ein Reasoning-Modell zuerst?  
   a) „Der Test dient Erstsemestern zur Klausurvorbereitung.“  
   b) „Denke sorgfältig und prüfe deine Antwort zweimal.“ **(richtig)**  
   c) „Höchstens eine Seite.“  
   Die Denk- und Prüfaufforderung erledigt das Modell selbst. Zeile (a) ist das Wozu, Zeile (c) das Format; beide bleiben.
3. Ein Tutor-Prompt verlangt: „Erst nachfragen, dann einen Hinweis geben, nie die Lösung.“ Streichen?  
   a) Ja, das Modell plant selbst.  
   b) Nein, hier ist der Ablauf das Produkt. **(richtig)**  
   c) Nur „nie die Lösung“ streichen.  
   In Tutor- und Simulationsprompts ist der Gesprächsablauf die Spezifikation, nicht ein Lösungsweg für das Modell. Er bleibt, am besten mit einem Halbsatz Begründung je Regel.
