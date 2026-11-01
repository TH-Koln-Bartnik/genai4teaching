# Plan: Kapitel 2 neu gliedern nach dem 4D-Modell (S1a, 01.11.2026)

Grundlage: `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitt S1a), Statusnotizen `merge-p5-p4`, `kapitel02-umbau-2-1`, `kapitel02-4d-p4`, `kapitelauftakt-kap02-03`. Bestandsaufnahme per Skript auf `main` @ `0a48673`; seither hat S2 (`31450ba`) in `kapitel02.qmd` nur zwei iframe-Höhen geändert (Z. 626, 650), alle Zeilennummern unten gelten weiter. Keine Änderung an Buchdateien in dieser Sitzung.

Wortzählung: Fließtext einschließlich Tabellen, Kästen und Druck-Bildunterschriften, ohne iframes, Zitierschlüssel und URLs (Skript `zaehle_kapitel.py`; Kürzungsbilanz `kuerzung.py`; beide im Repo unter `notes/kapitel02-neugliederung/` und im Tresorit). Nach dieser Zählung hat Kapitel 2 heute **13.560 Wörter**; die Statusnotiz vom 01.11. nennt 14.630 nach einer anderen Zählung. Das zeilenweise Skript `zaehle_kapitel.py` liefert auf `31450ba` **13.522** (Absatz- statt Zeilenzählung, Abweichung 0,3 %); diesen Wert in S1b als Ausgangswert nehmen und nachher mit demselben Skript messen. Ziel: ≤ 10.140.

## Entscheidungen Roman (Multiple Choice, 01.11., 14:20–15:00)

1. Repo mit Schreibzugriff; Tresorit verbunden.
2. **Gliederung Variante B**: 4D-Überblick vorn, dann Modell/Harness/Agent, dann die vier D, die Vertiefung (alt 2.1.2–2.1.5) **am Kapitelende** vor dem Escape Room.
3. **Kürzung −25 %** (Ziel ≈ −3.390 Wörter).
4. **Skills-Animation `skill-karte`** („Vier Wochen Feedback, improvisiert und mit Skill-Karte“) fällt weg; Datei bleibt in `interactions/`.
5. **Kompetenzrahmen-Vergleich** (alt 2.6.1) wird ein Kasten (~150 Wörter) im Überblick, die Tabelle der fünf Rahmen steht nur noch online (Druck: QR).
6. **Delegation (2.3) gegliedert nach den drei Unterkompetenzen**: Was die Modelle können → Setup → Modell → Arbeitsweisen (neu eigener Unterabschnitt).
7. **Kapiteltitel „Grundbegriffe und vier Kompetenzen“** (ID `#sec-grundbegriffe` bleibt).
8. **Vertiefung**: Überschrift „Vertiefung: …“ und darunter ein kurzer Hinweis „kann übersprungen werden“, online wie im Druck, im Kapitelauftakt erwähnt; kein Symbol, kein Filter.
9. **Kurs-Bot (Kratzke) und „Falscher Eintrag überlebt das Gespräch“** bleiben online im Kapitel, im Druck je ein Satz mit Verweis.
10. **Lernpfad Linie 2** („Erfahren mit KI“) hält künftig an 2.1 und überspringt den Rest von Kapitel 2.
11. **Einschätzungen im Kapitelkopf** in Lesereihenfolge umsortieren; IDs `ez-k2-1` bis `ez-k2-4` bleiben, damit gespeicherte Antworten erhalten bleiben.

## Beschlossene Gliederung (Variante B, verfeinert)

Das 4D-Modell steht vorn und übernimmt die Ordnung: Wer das Kapitel liest, weiß nach 2.1, dass alles Folgende eine der vier Fragen beantwortet. 2.2 liefert die drei Begriffe, ohne die keine der vier Fragen zu stellen ist. Die Technik, die man zum Arbeiten nicht braucht, wandert ans Ende und ist als Vertiefung erkennbar. Die Zuordnung der alten Abschnitte bestätigt Romans Arbeitshypothese bis auf zwei Punkte: Die Setup-Wahl LLM/RAG/Agent (alt 2.1.3) gehört zur Delegation, weil sie die Unterkompetenz *platform awareness* ist, und die Verantwortung beim Gedächtnis (alt 2.1.5, letzter Absatz) gehört zu Diligence.

| Neu | Überschrift (Vorschlag) | ID | Inhalt alt (Zeilen) | 4D | Wörter vorher | nachher | Animationen, Lernspiele, Tabellen |
|---|---|---|---|---|---:|---:|---|
| Kopf | Grundbegriffe und vier Kompetenzen | `#sec-grundbegriffe` (bleibt) | Szene, Einschätzungen (umsortiert), Lernziele (neu nach 4D), Z. 1–47 | – | 341 | 341 | – |
| 2.1 | Mit KI arbeiten: vier Kompetenzen | `#sec-schemas` (bleibt, war 2.6) | 2.6-Einleitung, Kasten aus 2.6.1, 2.6.2 ohne Modalitäten, 2.6.3 ohne Kasten (Z. 834–915) | Rahmen | 932 | 673 | 4d-kreislauf (`@fig-4d-kreislauf`), `@tbl-4d`; `@tbl-kompetenzrahmen` nur online |
| 2.1.1 | Das 4D-Modell | `#sec-4d` (bleibt) | Z. 870–909 | | | | |
| 2.1.2 | Wie dieses Kapitel und das Buch das Schema nutzen | `#sec-4d-nutzung` (bleibt) | Z. 911–915 + Kasten „Warum AI Fluency?“ (aus Z. 842–868); Ersatzanker `<span id="sec-schemas-rahmen">` im HTML | | | | |
| 2.2 | Grundbegriffe: Modell, Harness und Agent | `#sec-definitionen` (bleibt) | Lernspiel Grundbegriffe (Z. 54–68) | Grundlage | 1.839 | 1.197 | llm-game-standalone |
| 2.2.1 | Was ein Sprachmodell tut | `#sec-sprachmodell` (neu) | KI/GenAI/LLM in drei Sätzen + nächstes Wort (aus Z. 203–207) | | | | Verweis auf 2.7.1 |
| 2.2.2 | Was sich seit 2022 geändert hat | `#sec-harness` (bleibt) | Z. 70–189 ohne Tabelle `tbl-harness-wandel` | | | | harness-schichten, autonomiestufen, drei-labs-ein-bauplan, `@tbl-modell-harness-agent` |
| 2.3 | Delegation: Was übernimmt die KI? | `#sec-delegation` (neu) | Einstieg aus „Was das für Lehrende heißt“ (Z. 191–199) | Delegation | 4.492 | 3.321 | – |
| 2.3.1 | Was die Modelle können – und was nicht | `#sec-capabilities` (bleibt) | Z. 593–673, 722–723 (ohne Arbeitsweisen) | *goal and task awareness* | 1.473 | 1.054 | METR-Zeithorizont, 725-Raster, tutor-kosten; **neu S3** Scaling Laws, **neu S5** Audio |
| 2.3.2 | Welches Setup: LLM, RAG oder Agent? | `#sec-patterns-usage` (bleibt) | Z. 247–297 | *platform awareness* | 579 | 457 | Lernspiel llm-rag-agent-game, chatbot-zu-agent, Link llm-agent-patterns-matching |
| 2.3.3 | Welches Modell? | `#sec-model-choice` (bleibt) | Z. 517–589 + Satz „Fahrrad auf der Autobahn“ (Z. 725) | *platform awareness* | 1.379 | 1.032 | modellwahl-baum, `@fig-modellklassen`, `@fig-abo-stufen`, `@tbl-modellstand`, QR Modellübersicht; Kurs-Bot-Kasten nur online |
| 2.3.4 | Wer macht was: Arbeitsweisen von Centaur bis dunkle Fabrik | `#sec-arbeitsweisen` (neu) | Z. 675–720 + Modalitäten (Z. 886–890) + Kasten „Delegation an einem Berufsprofil“ (Z. 917–928) | *task delegation* | 924 | 658 | arbeitsweisen-Schema, Durchspiel; **neu S4** Rollenkarte |
| 2.4 | Description: Wie sage ich der KI, was ich will? | `#sec-access` (bleibt) | Z. 730–832, Unterabschnitte 2.4.1–2.4.6 mit allen IDs | Description | 1.334 | 1.158 | `@tbl-lab-empfehlungen` |
| 2.5 | Discernment: Wie beurteile ich, was die KI liefert? | `#sec-hallucinations` (bleibt) | Z. 494–515 + Satz zu Prüfmethoden (Z. 860–861) | Discernment | 358 | 318 | – |
| 2.6 | Diligence: Verantwortung, Offenlegung, Ressourcen | `#sec-diligence` (neu) | „Die Technik verschiebt die Verantwortung“ (Z. 436–442), neuer Absatz Offenlegung mit Verweis `@sec-ki-vo` | Diligence | 381 | 337 | – |
| 2.6.1 | Ressourcenverbrauch der Modelle | `#sec-energy` (bleibt) | Z. 932–947 | | | | QR Energie |
| 2.7 | Vertiefung: Was im Modell und im Harness passiert | `#sec-vertiefung` (neu) | Hinweis „Dieser Abschnitt vertieft … und kann übersprungen werden; die Kernaussagen setzen ihn nicht voraus.“ | Vertiefung | 3.373 | 2.241 | – |
| 2.7.1 | Tokens, Zahlen, Aufmerksamkeit | `#sec-gpt-bedeutung` (bleibt) | Z. 207–229, 244 | | | | vom-satz-zum-naechsten-wort |
| 2.7.2 | Blick ins Modell | `#sec-blick-ins-modell` (neu) | Interpretierbarkeit aus 2.2 (Z. 466–492) + Zwischenschritt-Animation (Z. 231–242) | | | | zwischenschritt-texas |
| 2.7.3 | Agenten in der Praxis: Skills und Werkzeuganschluss | `#sec-agenten-praxis` (bleibt) | Z. 299–376 ohne Skill-Karte | | | | skills-handbuch, agenten-engpass (Kugeln); **skill-karte raus** |
| 2.7.4 | Gedächtnis | `#sec-agenten-gedaechtnis` (bleibt) | Z. 378–462 ohne Verantwortungs-Absatz | | | | agenten-gedaechtnis, sitzung-und-gedaechtnis; Anwendungsbeispiel nur online |
| 2.8 | Wiederholung: Der Escape Room zu Kapitel 2 | `#sec-escape-room-k2` (neu) | neu (S8) | alle | 0 | 50 | **neu S8** escape-room-kap02 (Druck: Schlussbild mit QR) |
| – | Kernaussagen, Lernfragen | – | Z. 949–991 | – | 510 | 510 | – |
| | **Summe** | | | | **13.560** | **10.146 (−25,2 %)** | |

Die Hauptlinie ohne Vertiefung umfasst danach rund 7.900 Wörter. Abschnitte 2.4 bis 2.6 bekommen je einen Einstieg von zwei bis drei Sätzen mit der Leitfrage aus `@tbl-4d`; 2.3 übernimmt dafür den Lehrenden-Absatz aus dem alten 2.1.1. Discernment bleibt mit gut 300 Wörtern der kürzeste Teil, weil die Prüfmethoden in Kap. 4 und Anhang D stehen; 2.5 verweist dorthin (`@sec-tutor-betrieb`, `@sec-widget-pruefen`), und S8 übt das Prüfen im Escape Room.

### Verworfene Varianten (zur Nachvollziehbarkeit)

**A** folgte der Vorgabe wörtlich: 4D-Überblick → Modell/Harness/Agent → Vertiefung → vier D. Nachteil: Die überspringbare Vertiefung unterbricht die Hauptlinie gleich nach dem Einstieg, und die Auflösung der Einschätzung `ez-k2-1` (Skript-Chatbot) läge in einem Teil, den viele überspringen. **C** las „Modellerklärung“ als das 4D-Modell: Harness-Überblick → 4D → Vertiefung → vier D. Nachteil wie A, zusätzlich stünde das Ordnungsprinzip des Kapitels erst an zweiter Stelle.

### Umsetzungsregeln für S1b

Die Gliederung ändert sich in zwei Commits, damit Roman den Diff lesen kann: Commit 1 verschiebt Abschnitte ohne Textänderung (Überschriften neu, IDs unverändert, neue IDs gesetzt), Commit 2 kürzt nach der Liste unten und schreibt die Brücken. Neue Überschriften der vier D tragen das englische Wort voran („Delegation: …“), weil `@tbl-4d` und Kap. 4 die vier D englisch führen. Die vier D-Einleitungen zitieren nur `@dakan2025` und belegte Stellen aus dem Bestand. Der Satz „Wie wir im oben gezeigten Beispiel sehen“ (Z. 503) verliert seinen Bezug, weil die Interpretierbarkeits-Beispiele in die Vertiefung gehen; er beginnt neu mit Kesslers erfundener Literaturangabe aus dem Kapitelkopf. Die Einleitung von 2.6 alt („Der vorige Abschnitt hat gezeigt, wie ein guter Prompt gebaut ist“, Z. 836) wird umgeschrieben, weil 2.1 jetzt am Anfang steht.

## Kürzungsliste

| Nr. | Zeilen (main 0a48673) | Inhalt und Maßnahme | Art | Wörter vorher | nachher | Begründung |
|---|---|---|---|---:|---:|---|
| N1 | 842–868 | Kompetenzrahmen-Vergleich 2.6.1 → Kasten „Warum AI Fluency?“, Tabelle nur online (QR) | online | 375 | 150 | Entscheidung Roman (MC): Kasten statt Abschnitt; der Rahmenvergleich ist Hintergrund, nicht Werkzeug |
| N2 | 836–838, 913–915, 51–54 | Einleitung 2.6, Nutzung 2.6.3, Einleitung 2.1 → ein Überblicksabsatz in neu 2.1 | verdichten | 212 | 90 | drei Einleitungen derselben Idee; der Überblick 2.1 übernimmt die Wegweiserfunktion |
| N3 | 886–890 | Modalitäten Automation/Augmentation/Agency → mit Centaur/Cyborg in 2.3.4 zusammenführen | zusammenlegen | 130 | 60 | Modalitäten und Centaur/Cyborg beschreiben dieselbe Frage (wer macht was) – an einer Stelle erklären |
| N4 | 892–897 | Zwei Schleifen (Dakan/Feller) straffen | straffen | 145 | 100 | Kern (zwei Schleifen, Lesart des Buchs) bleibt, Wiederholungen fallen |
| N5 | 133–137 | „Autonom“-Einschränkung (Etymologie bleibt als Satz) | straffen | 104 | 45 | Etymologie bleibt als ein Satz; die Gegenposition steckt schon in „Autonomie im Vorgehen“ |
| N6 | 153–160 | Name „Harness“ + drei Labore: Text straffen, Animation bleibt | straffen | 147 | 90 | Animation drei-labs zeigt den Vergleich; der Text braucht nur die Definition |
| N7 | 178–184 | Tabelle „Was sich seit 2022 geändert hat“ (@tbl-harness-wandel) streichen, doppelt zu Text und @tbl-modell-harness-agent | streichen | 89 | 0 | Tabelle wiederholt die drei Absätze davor und Tabelle 2.1 |
| N8 | 186–189 | „Die Grenze wandert“ straffen | straffen | 99 | 50 | Kernaussage (Annahmen im Harness veralten) in zwei Sätzen |
| N9 | 191–199 | „Was das für Lehrende heißt“ → Einstieg Delegation 2.3 | verschieben+straffen | 137 | 80 | Praktische Folgerung gehört zur Entscheidung, was an die KI geht |
| N10 | 223–229 | GPT-Begriffe (Vertiefung) straffen | straffen | 182 | 110 | Begriffsherkunft GPT bleibt, Detail zu Pretraining/RLHF kürzer (Glossar) |
| N11 | 249–254, 274–277 | LLM/RAG/Agent: Bücherregal und Skala straffen (→ 2.3.2) | straffen | 238 | 150 | Bücherregal-Bild bleibt, doppelte Erklärung entfällt |
| N12 | 308–320 | Skill-Karte: Animation, Druckbild, Absatz 38/21 Min. entfernen; ein Satz Standardarbeit bleibt | streichen | 261 | 35 | Entscheidung Roman (MC): erste Skills-Animation raus; Datei bleibt in interactions/ |
| N13 | 341–373 | Engpass (Kugeln): Text straffen, Animation bleibt (Vertiefung) | straffen | 596 | 420 | Kugel-Animation trägt die Aussage; drei Absätze auf zwei |
| N14 | 380–395, 427–434 | Gedächtnis: Kontextfenster, vier Stufen, Schreibzeitpunkt straffen | straffen | 511 | 350 | Vier-Stufen-Grafik und Sitzungs-Animation zeigen das Detail |
| N15 | 436–442 | „Die Technik verschiebt die Verantwortung“ → Diligence 2.6 | verschieben+straffen | 124 | 80 | Verantwortung beim Gedächtnis ist Diligence |
| N16 | 466–492 | Interpretierbarkeit (Sprachen, Planen, Rechnen) → Vertiefung „Blick ins Modell“ | verschieben+straffen | 426 | 180 | Befunde der Interpretierbarkeitsforschung sind Vertiefung; für Discernment bleibt nur „Fragen hilft nicht“ |
| N17 | 494–501 | „Können wir das Modell fragen?“ straffen (bleibt Discernment) | straffen | 143 | 100 | bleibt als Discernment-Kern (Selbstauskunft des Modells ist unzuverlässig) |
| N18 | 573–587 | Anwendungsbeispiel Kurs-Bot (Kratzke) nur online; Druck ein Satz mit Verweis | online | 211 | 30 | Entscheidung Roman (MC): online im Kapitel, Druck ein Satz mit Verweis |
| N19 | 589 | LM-Arena-Hinweis → Online-Modellübersicht | verschieben | 26 | 0 | gehört zur lebenden Modellübersicht |
| N20 | 609–618 | Liste „gut nutzbar für …“ streichen (veraltet, Beispiele in Kap. 4–6) | streichen | 44 | 0 | Liste veraltet schnell; Beispiele liefern Kap. 4–6 |
| N21 | 632–636 | Peer-Review, Turing-Test, Callcenter streichen | streichen | 102 | 0 | drei lose Einzelbefunde ohne Bezug zur Lehrentscheidung |
| N22 | 641–645 | 725-Raster: Begleittext straffen (Animation erklärt sich, S2) | straffen | 160 | 100 | S2 hat das Raster mit Leitfrage umgebaut; der Text muss die Stufen nicht nacherzählen |
| N23 | 671 | Satz „exponentielles Wachstum“ streichen | streichen | 16 | 0 | Behauptung ohne Beleg, Aussage steckt in Zeithorizont und Kosten |
| N24 | 699–710 | Durchspiel-Begleittext straffen | straffen | 283 | 150 | Durchspiel erklärt sich selbst; Begleittext nur Fall und Leseanleitung |
| N25 | 722–728 | P&G-Studie ein Satz; „Fahrrad auf der Autobahn“ ein Satz → Modellwahl | straffen | 121 | 50 | P&G als Ergänzung zu Centaur/Cyborg; Fahrrad-Bild als Satz in die Modellwahl |
| N26 | 734–754 | Zugänge, Jemisin-Bild, Prompt-Definition straffen | straffen | 317 | 200 | drei Zugänge und Prompt-Definition bleiben, Jemisin-Bild in einem Satz |
| N27 | 806–809 | Sportwagen-Absatz straffen | straffen | 103 | 60 | Sportwagen-Vergleich in zwei Sätzen |
| N28 | 444–453 | Anwendungsbeispiel „Falscher Eintrag überlebt“ nur online; Druck ein Satz | online | 158 | 30 | Entscheidung Roman (MC): online im Kapitel, Druck ein Satz |
| N29 | 72–77, 102–131 | Harness-Einstieg, Kernsatz, Werkzeuge/Gedächtnis/Autonomie straffen | straffen | 581 | 370 | Gespann-Bild und Kernsatz bleiben, Ermöglicher je zwei Sätze kürzer |
| N30 | 519–533 | Modellklassen, Abo, Fußnote Preisstufen, Hochschulzugänge straffen | straffen | 470 | 330 | Preise stehen in Tabelle @tbl-modellstand und Fußnote; Text nur die Logik der Stufen |
| N31 | 679–687 | Beschwörer/Dämmer-/dunkle Fabrik straffen (Platz für S4-Rollenkarte) | straffen | 182 | 140 | Begriffe bleiben; Platz für die Rollenkarte aus S4 |
| N32 | 405–409, 421–425 | Gedächtnis: Sitzung vs. Gedächtnis, Abgrenzung RAG straffen | straffen | 208 | 140 | Abgrenzungen auf je zwei Sätze |
| N33 | 334–336 | Werkzeuganschluss MCP und eigene Quellen straffen | straffen | 127 | 90 | MCP ein Satz, eigene Quellen mit Prüfidee |
| N34 | 203–207, 244 | KI-Begriffe, Tokens, Kontextfenster straffen (2.2 Kern / 2.7 Vertiefung) | straffen | 289 | 210 | KI/GenAI/LLM als drei Sätze in 2.2.1, Tokens/Kontextfenster in 2.7.1 |
| N35 | 758–762, 813–816 | Prompt-Bausteine, didaktische Prompts straffen | straffen | 251 | 195 | Daumenregeln und Grundsatz „schwer machen“ bleiben |
| N36 | 932–937 | Energie-Zusammenfassung straffen | straffen | 210 | 170 | Größenordnungen und Lehrfolgerung bleiben |
| N37 | 503–509 | Halluzinationsursachen straffen | straffen | 147 | 110 | Mechanismus in drei Sätzen; Beispiel aus dem Kapitelkopf (Kessler) aufgreifen |
| N38 | Bildunterschriften Druck | fig-ki-kosten 173→80, fig-performance 93→60, chatbot-zu-agent 89→55, drei-labs 82→50, harness-schichten 67→45, autonomiestufen 64→45, Durchspiel 61→40 | straffen | 629 | 375 | Druck-Bildunterschriften auf Aussage + Lesehilfe + QR; Details stehen online |
| | | **Summe Kürzungen** | | | | **−3714** |
| | | Neuer Text: Brücke 2.1 (60), Einleitungen der vier D-Abschnitte (4 × 40), Hinweis Vertiefung (30), Einleitung Escape Room (50) | | | | **+300** |
| | | **Netto** | | 13.560 | 10.146 | **−3414 Wörter = −25,2 %** |

Die Zeilenangaben beziehen sich auf `kapitel02.qmd` @ `0a48673`. „Online“ heißt: Inhalt bleibt in `::: {.content-visible when-format="html"}`, im Druck steht ein Satz mit Verweis oder QR.

## Querverweise auf Kapitel 2 von außen

Alle Ziel-IDs bleiben erhalten; die Verweise lösen sich deshalb von selbst auf neue Nummern auf. Handarbeit brauchen nur die Stellen, an denen der Wortlaut nicht mehr passt oder eine Nummer fest eingetippt ist.

| Datei, Zeile | Ziel | Wortlaut / Kontext | Folge in S1b |
|---|---|---|---|
| kapitel01.qmd 82, 87 | `@sec-harness` | starkes Modell, Werkzeugkasten | keine (jetzt 2.2.2) |
| kapitel01.qmd 110 | `@sec-grundbegriffe` | „Darunter liegen die Grundbegriffe …“ | prüfen: Kapitel heißt jetzt „Grundbegriffe und vier Kompetenzen“; Satz kann bleiben |
| kapitel04.qmd 181 | `@sec-agenten-praxis` | „die Regel aus …“ | keine (jetzt 2.7.3, Vertiefung) |
| kapitel04.qmd 226 (+ drei weitere Rollenabsätze) | `@sec-schemas` | 4D-Kreislauf je Rolle | keine (jetzt 2.1) |
| kapitel04.qmd 367 | `@sec-definitionen` | „Die Lernspiele in …“ | **ändern**: zweites Lernspiel steht jetzt in 2.3.2 → „in @sec-definitionen und @sec-patterns-usage“ |
| kapitel04.qmd 407 | `@sec-harness` | Schleife Denken, Handeln, Beobachten | keine |
| kapitel04.qmd 574 | `@sec-capabilities` | zerklüftete Grenze | keine (jetzt 2.3.1) |
| kapitel06-fallbeispiele.qmd 164 | `@sec-grundbegriffe` | Zuordnungsspiel | prüfen: genauer `@sec-definitionen` |
| kapitel07-appendix02 (Anhang B) 102 | `@sec-prompt-components` | GPT-Version im Kasten | keine (jetzt 2.4.3) |
| Anhang B 2795, 2806, 3060 | `@sec-schemas`, `@sec-4d` | Übung AI Fluency | keine |
| kapitel09-appendix04 (Anhang D) 5, 49 | `@sec-grundbegriffe` | Begriffe, Tabellenzeile „Chat“ | keine |
| Anhang D 234 | `@sec-patterns-usage` | „Die Grundbegriffe dazu stehen in …“ | keine (jetzt 2.3.2) |
| Anhang D 560 | `@sec-schemas` | „Das Modell selbst und seine zwei Schleifen erklärt …“ | keine |
| kapitel10-appendix05 (Lösungen) 23, 24, 25 | `@sec-agenten-gedaechtnis`, `@sec-harness`, `@sec-schemas` | Lösungshinweise 8–10 | keine; Lösung 8 verweist auf die Vertiefung, Lernfrage 8 bekommt den Zusatz „(Vertiefung)“ |
| modelluebersicht.qmd 3, 37 | `@sec-model-choice`, `@tbl-modellstand` | Gegenstück zur Tabelle | keine |
| energie.qmd 3 | `@sec-energy` + **fest „Abschnitt 2.6 und 2.7“** | Herkunft des Exkurses | **ändern**: Nummern weg („gehörte bis zur Buchfassung 2026 zu Kapitel 2“); war schon vor dem Umbau falsch |
| kapitel05.qmd 65 | **fest „Abschnitt 2.5.2“** | Prompt-Grundlagen | **ändern** in `@sec-how-to-speak` (wird 2.4.2) |
| glossar.qmd (20 Stellen) | **fest „(Kap. 2.1)“, „(Kap. 2.1.1)“, „(Kap. 2.2, 4.3)“, „(Kap. 2.4)“, „(Kap. 2.5.x)“** | Herkunftsangaben der Einträge | **ändern**: auf `[-@sec-…]` umstellen, damit die Nummern künftig mitwandern („(Kap. [-@sec-harness])“); S6 baut darauf auf |
| interactions/4d-kreislauf.html 185 | `kapitel02.html#sec-schemas` | Linktext „Schemas für den systematischen Umgang mit GenAI“ | **ändern**: neuer Titel „Mit KI arbeiten: vier Kompetenzen“ |
| interactions/lernpfade.html 47, 68, 143; scripts/lernpfade/lernpfade_karte.py 16, 107 | `kapitel02.html#sec-grundbegriffe`, Text „Linie 2 lässt Kapitel 2 aus“ | Lernpfade | **ändern** (Entscheidung 10): Linie 2 hält an `kapitel02.html#sec-schemas`; Karte neu erzeugen (Druckbild im Vorwort), Satz in Vorwort und lernpfade.html |
| interactions/autonomiestufen.html 147, drei-labs-ein-bauplan.html 162 | **fest „Abschnitt 2.1.1“** in eingeklappten Quellenhinweisen | Gespann-Bild | **ändern** in „Abschnitt 2.2.2“; Druckbilder nicht betroffen (Text steht nur im eingeklappten Teil, in S1b am PNG prüfen) |
| scripts/druck-frontier-animationen.cjs 1 | Kommentar „Kapitel 2.1“ | – | optional |
| QR-Codes im Druck | keine QR-Ziel-URL zeigt auf einen Kapitel-2-Anker außer der Lernpfad-Karte (`#sec-grundbegriffe`, bleibt) | – | keine |

Interne Verweise in Kapitel 2 selbst (rund 80) zeigen auf IDs, die alle erhalten bleiben. Zu prüfen sind Formulierungen mit Richtungswörtern („oben“, „vorige Abschnitt“, „im Folgenden“); in S1b per `grep -n "oben\|vorige\|folgende\|unten" kapitel02.qmd` vor und nach dem Verschieben durchgehen. Nicht mehr verwiesen wird `@tbl-harness-wandel` (N7) und `@fig-skill-karte` (N12); beide Abbildungs-/Tabellennummern verschwinden, alle späteren Nummern in Kapitel 2 rücken auf.

Weitere Fundstellen der Skill-Karte, die S1b nachzieht: `scripts/qr-in-abbildung.py` und `scripts/druck-agenten-animationen.cjs` (Eintrag lassen, Druckbild wird nur nicht eingebunden), `scripts/aufmerksamkeit-ziele.json` (Ziel bleibt, Animation existiert online weiter), Abbildungsrechte-Liste falls sie Kapitel-2-Abbildungen nummeriert (`claude/abbildungsrechte/…`).

## Folgen für den didaktischen Apparat

**Kapitelkopf.** Die Szene (Kessler) bleibt; sie berührt Delegation (Chatbot oder Agent), Description (Trinkgeld-Prompt), Discernment (verzählt, erfundene Quelle) und Diligence (kann sie das Werkzeug empfehlen?). Die vier Einschätzungen in Lesereihenfolge: `ez-k2-3` (2.3.1), `ez-k2-1` (2.3.2), `ez-k2-4` (2.4.5), `ez-k2-2` (2.5); die Prüfkästen bleiben an ihren Absätzen und wandern mit. Die Druck-Gliederung „In diesem Kapitel“ erzeugt der Filter `einschaetzung.lua` aus den Überschriften der Ebene 2, also 2.1 bis 2.8; der Hinweis auf die Vertiefung steht damit automatisch im Kapitelauftakt. `notes/kapitelauftakt-einschaetzungen.md` bekommt die neue Reihenfolge.

**Lernziele** (Vorschlag, vier wie bisher, jetzt nach 4D):
1. das 4D-Modell als Ordnung für die Arbeit mit KI erklären und Modell, Harness und Agent abgrenzen;
2. mit der Jagged Frontier begründen, welche Aufgaben einer Lehrveranstaltung an die KI gehen, und dafür Setup (LLM, RAG, Agent), Modell und Arbeitsweise wählen (Delegation);
3. einen Prompt aus Rolle, Aufgabe, Format und Beispielen bauen und verbreitete Prompt-Tricks als wirkungslos erkennen (Description);
4. in Laiensprache erklären, warum Sprachmodelle halluzinieren, Ergebnisse prüfen und Verantwortung, Offenlegung und Energiebedarf einordnen (Discernment, Diligence).

**Kernaussagen** (Inhalt bleibt, Gruppierung neu): LZ 1 ← KA 7 (4D) und der Harness-Teil von KA 1, dazu KA 2 (nächstes Wort, gekürzt auf die Grundidee); LZ 2 ← KA 1 (Kontext, Setup) und KA 5 (Jagged Frontier), ergänzt um einen Satz zu den Arbeitsweisen; LZ 3 ← KA 6; LZ 4 ← KA 3 (Halluzinationen) und KA 4 (Energie). Die Nummerierung folgt dann der Gruppierung (1–7 oder 1–8 mit dem Arbeitsweisen-Satz als eigener Aussage; Entscheidung in S1b per MC).

**Lernfragen und Lösungshinweise.** Die zehn Lernfragen bleiben in Wortlaut und Nummer, damit die Lösungshinweise (`@sec-loesungshinweise`) gültig bleiben. Lernfrage 1 („wie ein Sprachmodell aus einem Prompt eine Antwort erzeugt“) und 8 (Gedächtnis) greifen auf die Vertiefung zurück und bekommen den Zusatz „(Vertiefung, @sec-vertiefung)“; Lösung 1 bleibt gültig, weil 2.2.1 die Grundidee in drei Sätzen trägt. Neue Lernfrage nur, falls die Arbeitsweisen eine eigene Kernaussage bekommen.

**Vorwort und Lernpfade.** Linie 2 hält an 2.1 (Entscheidung 10): Text in `interactions/lernpfade.html` (Z. 47, 143), Kartenlegende in `scripts/lernpfade/lernpfade_karte.py` (Z. 107), Karte neu erzeugen, Satz im Vorwort zur Linienwahl prüfen. Der Vorwort-Satz „Klick-Animationen zu Harness, Tokens und Gedächtnis“ bleibt richtig.

**Glossar.** Die 20 fest eingetippten Kapitelnummern auf `[-@sec-…]` umstellen (siehe Tabelle). Neue Einträge (Delegation, Description, Discernment, Diligence, AI Fluency, Skalierungsgesetz) bleiben Aufgabe von S6 und verweisen dann auf `@sec-schemas`, `@sec-delegation` usw.

**Druck.** Seitenzahl sinkt durch −25 % und den Wegfall von `fig-skill-karte` und `tbl-harness-wandel` um geschätzt acht bis zehn Seiten (bei rund 400 Wörtern je Seite und zwei entfallenden Abbildungsflächen); in S1b nach dem LaTeX-Testrender messen. Die Tabelle `@tbl-kompetenzrahmen` wird online-only und damit im Druck nicht mehr nummeriert.

## Einbaustellen für S3, S4, S5 und S8

| Sitzung | Element | Stelle nach der Neugliederung | Begründung |
|---|---|---|---|
| S3 | Klick-Animation Scaling Laws (`interactions/scaling-laws.html`) | 2.3.1, ersetzt den heutigen Absatz „Den Fähigkeitszuwachs beschreiben zwei Scaling Laws …“ (Z. 638) als Text + Animation; Begriff „Skalierungsgesetz (*scaling law*)“; steht nach dem METR-Zeithorizont und vor dem 725-Raster | erklärt, warum die Grenze wandert (Zeithorizont) und warum Rechenzeit beim Antworten Geld kostet (Raster) |
| S4 | Rollenkarte bzw. Rollen-Animation | 2.3.4, direkt nach dem Absatz zu Beschwörer, Dämmer- und dunkler Fabrik (Z. 679–687), vor dem Arbeitsweisen-Schema; Modalitäten (Automation, Augmentation, Agency) als Spaltenkopf oder Legende mit aufnehmen | 2.3.4 bündelt alle Arbeitsweisen; die Karte ersetzt Text (N31 hat dafür 40 Wörter frei gemacht) |
| S5 | Zwei Hörbeispiele (Vokabeltrainer, Vorstellungsgespräch) | 2.3.1, nach dem Satz „Zum Standardumfang der großen Chat-Interfaces gehören inzwischen vier Funktionsklassen …“ (Z. 673); Hinweis auf Kennzeichnung nach Art. 50 KI-VO dort, Querverweis aus 2.6 Diligence (Offenlegung) | die Funktionsklassen sind Fähigkeiten; die Kennzeichnungspflicht ist Diligence |
| S8 | Escape Room (`interactions/escape-room-kap02.html`) | 2.8, eigener Abschnitt nach der Vertiefung und vor den Kernaussagen; online iframe, Druck Schlussbild mit QR; Räume entlang der vier D, ein Raum zu den Grundbegriffen | Wiederholung des ganzen Kapitels; steht nach der Vertiefung, setzt sie aber nicht voraus |

## Offen / für S1b

1. Kernaussagen 7 oder 8 (eigene Aussage zu den Arbeitsweisen) – per MC in S1b.
2. Abbildungsrechte-Liste (`claude/abbildungsrechte/`) auf entfallende Nummern prüfen.
3. Kap. 2 bei 390 px ist seit dem Umbau 2.1 657 px breit (`@sec-harness`); in S1b mitprüfen, nicht Ziel dieses Umbaus.
4. Escape Room (S8) bleibt optional für den 15.11.; ohne S8 entfällt 2.8 im Druck, die ID wird erst mit S8 gesetzt.

## Startauftrag S1b

„Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitte „Entscheidungen“ und S1b) und `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md`. Kläre per MC Repo-Schreibzugriff und Tresorit. Branch `kapitel02-neugliederung` von aktuellem origin/main (mindestens `31450ba`). Setze den Plan in zwei Commits um: (1) nur verschieben, Überschriften und IDs nach der Gliederungstabelle; (2) Kürzungen N1–N38, Brücken, Lernziele, Kernaussagen, Einschätzungen umsortieren. Danach Querverweis-Tabelle abarbeiten (kapitel04 367, energie.qmd 3, kapitel05 65, glossar.qmd 20 Stellen, 4d-kreislauf.html, lernpfade, autonomiestufen/drei-labs). Wortzahl mit `notes/kapitel02-neugliederung/zaehle_kapitel.py` vorher/nachher, Render Quarto 1.8.25 `--to html` ohne neue Warnungen und ohne `?@`, Playwright 1200/390 px, LaTeX-Testrender falls TeX verfügbar. Diff per MC, Merge, docs/ rendern (Download-PDF/EPUB sichern), live prüfen, Skill ergebnisse-sichern.“

Ablage: Projekt `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md` · Tresorit `Projektnotizen-Claude/feedback-2026-11-01/` (dieser Plan, Statusnotiz, Skripte) · Repo `notes/2026-11-01-plan-kapitel02-neugliederung-4d.md` und `notes/2026-11-01-plan-feedback-sitzungen.md` (nachgeholte Kopie des Feedback-Plans).
