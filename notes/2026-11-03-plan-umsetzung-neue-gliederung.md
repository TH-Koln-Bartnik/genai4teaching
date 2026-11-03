# Plan: Umsetzung der neuen Gliederung (03.11.2026)

Grundlage: Gliederungsnotiz „Generative KI als Hilfe zum Lehren und Lernen – neue Zweiteilung“, Fassung 9 (Sprachgespräch 03.11.2026, https://claude.ai/artifact/JWPsezE4AUkKToK9nvjn9k), gegengeprüft am Repo `main` @ `f5a694d` und an allen Remote-Branches. Verlagsabgabe: Sonntag, 15.11.2026. Es bleiben zwölf Tage.

**Nachtrag Phase 0 (03.11.2026, nachmittags):** `main` @ `da80b9e` enthält jetzt S3 Bibliothek, den Rollen-Kasten 2.4.4 und die Vorwort-Galerie mit der Seite „Praxisbeispiele im Überblick“ (37 Beispiele). Druckwörter je Abschnitt stehen in Abschnitt 2.9, die Druckspalte in Abschnitt 1; Branch-Stand in Abschnitt 5.

**Nachtrag Phase 1 (03.11.2026, abends, vorgezogen):** Umzug erledigt, `main` @ `4006a9c`. Vorher S2 gemergt (`808c52f`). Sieben Kapiteldateien `kapitel01-einleitung.qmd`, `kapitel02-grundlagen.qmd`, `kapitel03-automation.qmd`, `kapitel04-lernmechanismen.qmd`, `kapitel05-4d-phasen.qmd`, `kapitel06-rollen.qmd`, `kapitel07-artefakte.qmd`; Teil I/II in `_quarto.yml`; alte Adressen leiten mit Ankertabelle weiter. Die Dateien der Phase-2-Tabelle (Abschnitt 4) heißen jetzt so. Druckwörter je Datei und Abweichungen von Abschnitt 2 stehen in `claude/gliederung-neu/STATUS-phase1-umzug-2026-11-03.md`.

Kurz zu den Werkzeugbegriffen: Ein *Branch* ist eine Arbeitskopie des Buchs, an der eine Sitzung ändert, ohne die veröffentlichte Fassung zu berühren; ein *Merge* führt sie in die Hauptfassung `main` zurück. *Rebase* heißt, eine ältere Arbeitskopie auf den neuesten Stand umzusetzen. *Rendern* baut aus dem Quelltext die Webseiten und das PDF. Ein *Redirect* ist eine Weiterleitung von einer alten Webadresse auf die neue.

## 1. Ausgangslage in Zahlen

Wortzahlen gesamt (online und Druck, ohne Code) und Druckwörter nach `scripts/zaehle_druck.py` (Stand `main` @ `da80b9e`, 03.11. nach Phase 0; Glossar und Transparenz nicht gezählt):

| Datei | heute | Druck 03.11. | Inhalt |
|---|---:|---:|---|
| index.qmd (Vorwort) | 1.750 | 1.829 | Lernpfade, „Wie dieses Buch lehrt“ (871 mit Mechanismen-Tabelle); seit 03.11. mit Galerie-Abschnitt (181 Druck) |
| kapitel01.qmd | 3.794 | 3.602 | Einleitung, „Was Sie im Buch erwartet“ (1.461; Druck 1.340) |
| kapitel02.qmd | 13.210 | 12.021 | 4D-gegliedert seit 01.11.; Vertiefung 4.310 (Druck 3.983); seit 03.11. mit Rollen-Kasten |
| kapitel03.qmd | 7.130 | 6.217 | Didaktik; Evidenz seit 2025: 3.921 (Druck 3.110) |
| kapitel04.qmd | 13.978 | 13.398 | Rollen; Coding allein 3.547 (Druck mit Widgets 3.409); seit 03.11. mit S3 Bibliothek |
| kapitel05.qmd | 8.552 | 6.711 | Umsetzung: Prüfen 2.582 (Druck 2.514 mit Detektor-Duell und „Formate nach den vier Säulen“), Richtlinien + KI-VO (Druck 856), Kurs-Integration 2.463 (Druck 1.243), Dokumentieren 1.203 (Druck 746) |
| kapitel06-fallbeispiele.qmd | 8.305 | 7.891 | nach Wissenstypen gegliedert |
| Anhang A Prompts | 5.822 | 5.218 | AI-Fluency-Übung (1.810) steht schon nur online: Druck 0 |
| Anhang B Lösungen | 2.801 | 2.927 | nach Kapiteln 1–6 |
| **Summe** | **65.342** | **59.814** | |
| Archiv (nicht im Buch) | 24.839 | – | Primer 7.585, Rollenspiele 5.099, Fortgeschrittene Nutzung 11.309 |

Das Repo enthält 331 automatische Querverweise (`@sec-…`) und 86 fest eingetippte Angaben wie „Kapitel 4“ oder „Abschnitt 2.3“. Die automatischen überleben jede Verschiebung, die eingetippten nicht.

## 2. Zielgliederung mit Herkunft

Wortziele gelten für die empfohlene Budgetvariante (rund 54.000 Wörter, etwa 300 Druckseiten; siehe Entscheidung E1).

### Teil I: Grundlagen

**Kap. 1 Einleitung** (Ziel 3.300). Bleibt. „Was Sie im Buch erwartet“ wird neu geschrieben: der Mehrwert beider Teile aus Sicht der Lesenden, wie in der Gliederungsnotiz formuliert, dazu der Pitch.

**Kap. 2 Grundlagen von KI und LLMs** (Ziel 7.500). Leitidee: erst das einfache LLM als Blackbox, dann das erweiterte.

| Neu | Herkunft (heute) | Wörter heute | Maßnahme |
|---|---|---:|---|
| Auftakt + Abbildung „einfaches und erweitertes LLM“ | Kap. 2 Auftakt | 363 | Abbildung neu (Kern: Text rein, Text raus; Ring: Memory, Werkzeuge, RAG, Agenten) |
| 2.1 Grundbegriffe | 2.2 `sec-definitionen`, `sec-sprachmodell` | 239 | bleibt |
| | 2.2.2 `sec-harness` „Was sich seit 2022 geändert hat“ | 1.137 | ein Absatz „Entwicklung schnell, Prinzipien bleiben“; Chronik als datierte Zeittafel auf `modelluebersicht.qmd`, QR im Druck; Harness-Definition nach 2.4 |
| Kasten „Mit diesem Buch und der KI parallel arbeiten“ (Ende 2.1) | alt 5.1 `sec-durchspielen` | 253 | neu formuliert |
| 2.2 Modellwahl | 2.3.3 `sec-model-choice` | 1.559 | ein Satz mit Verweis auf 2.4 für Websuche, Datei-Upload, Projekte |
| 2.3 Wie mit der KI sprechen | 2.4 Description komplett | 1.403 | zwei, drei Sätze, warum Empfehlungen von 2024 überholt sind |
| 2.4 Das erweiterte LLM | 2.3.2 `sec-patterns-usage`, 2.7.3 `sec-agenten-praxis`, 2.7.4 `sec-agenten-gedaechtnis` | 3.800 | Gedächtnis auf etwa 1.200 kürzen |
| 2.4 Vertiefung Funktionsweise | 2.7.1 `sec-gpt-bedeutung`, 2.7.2 `sec-blick-ins-modell` | 996 | bleibt |

Wandert aus Kap. 2 hinaus: 4D-Block (914) nach Kap. 5; `sec-capabilities` (1.058) nach Kap. 5 Delegation; `sec-arbeitsweisen` (796, Centaur bis dunkle Fabrik) nach Kap. 3; Discernment (351) und Diligence (149) nach Kap. 5; `sec-energy` (236) in Anhang C oder online.

**Kap. 3 Prinzipien der Automation von Aufgaben** (Arbeitstitel, neu, Ziel 3.500). Vier Ebenen nach der soziotechnischen Systemsicht, jede Kernaussage mit Bedeutung für die Lehre und Lösungsansatz.

| Ebene | Vorhandenes Material | Neu zu schreiben |
|---|---|---|
| 3.1 Aufgabe | Kap. 4 „Was sind unsere Aufgaben?“ mit `@tbl-acemoglu` und Bibliothek der Prompts (S3, Branch) – der Teil zur Aufgabenverlagerung; der Teil zu Zeitanteilen Lehrender bleibt beim Hiwi | O-Ring/Engpass, Acemoglu & Johnson |
| 3.2 Einzelarbeit | `sec-arbeitsweisen` mit Durchspiel | Deskilling, Out-of-the-Loop |
| 3.3 Leitungsaufgabe Mensch–LLM | Agenten-Engpass-Simulation (bisher Kap. 2) | Ironien der Automation, Complacency, Leitungsspanne, Prüfung als Engpass |
| 3.4 Organisation | Idee Flyvbjerg-Spiel / S6 Planungsfehlschluss (ohne Ort) | Dynamo/J-Kurve, Variabilität, Fehlerfortpflanzung |

Von den rund 20 Quellen der Notiz fehlen mindestens acht in `references.json` (Bainbridge, Kremer, Flyvbjerg, Kingman, Graicunas, Endsley, Catalini, Trist); Mackworth, Monsell, Reason, Perrow und David sind noch nicht abgeglichen, und bei Acemoglu, Autor, Brynjolfsson, Parasuraman und Goldratt ist offen, ob die vorhandenen Einträge die gemeinten Werke sind. Sie werden vor dem Schreiben per Crossref geprüft; Catalini et al. (2026) und Autor et al. (2026) brauchen besondere Sorgfalt, weil sie jung sind.

**Kap. 4 Lern- und Wirkmechanismen** (bisher Kap. 3, Ziel 5.500). Gliederung Erinnern, Verstehen, Anwenden; der am besten belegte Mechanismus zuerst.

| Herkunft | Wörter | Maßnahme |
|---|---:|---|
| `sec-ziele-genai` | 802 | auf etwa 400 als Kapitelauftakt |
| `sec-wissenstypen`, `sec-anwendungsbeispiele` | 834 | auf einen Absatz; die Wissenstypen gliedern künftig kein Kapitel mehr |
| `sec-lerntechniken` | 1.236 | auf die drei Lernziele verteilt |
| Mechanismen-Tabelle aus „Wie dieses Buch lehrt“ | ~300 | wandert hierher; im Vorwort Kurzfassung mit Verweis (Empfehlung zum offenen Punkt 1) |
| alt 5.2 „Ausrichtung nach Lernforschung“ | 207 | eingearbeitet |
| `sec-evidenz` (KI-Evidenz seit 2025) | 3.921 | auf etwa 2.500 |

### Teil II: Anwendungen

**Kap. 5 Phasen der Arbeit mit generativer KI (4D)** (neu zusammengesetzt, Ziel 5.000).

| Neu | Herkunft | Wörter | Maßnahme |
|---|---|---:|---|
| Auftakt, 4D als Arbeitsprozess | Kap. 2 `sec-schemas`, `sec-4d`, `sec-4d-nutzung` | 914 | auf 600 |
| Durchgehendes Beispiel | Anhang A `sec-ai-fluency-uebung` (Berufsprofil in vier Phasen) | 1.810 | wandert aus dem Anhang, auf etwa 900; liefert die „Beispiele“, die die Notiz verlangt |
| 5.1 Delegation | `sec-capabilities` | 1.058 | auf 700 |
| 5.2 Description | – | – | 250 Wörter neu, verweist auf 2.3 |
| 5.3 Discernment | `sec-hallucinations` | 351 | bleibt |
| 5.4 Diligence | `sec-diligence`; Richtlinien + `sec-ki-vo`; Dokumentieren | 149 + 890 + 1.203 | Regelungen stark gekürzt (etwa 400), Dokumentieren etwa 500 |
| 5.5 Prüfen | alt 5 `sec-pruefen` mit Detektor-Duell | 2.582 | auf 1.500; Ort siehe Entscheidung E2 |
| entfällt oder Kasten | alt 5 `sec-kurs-integration` (drei Semesterphasen) | 2.463 | zeitliche Gliederung entfällt laut Notiz; Kern als Kasten (etwa 400) in Kap. 7 oder streichen |
| Kasten | alt 5 `sec-einfuehrung-studierende` + Beispiel | 435 | Kasten in 5.1 |
| Kasten | alt 5 `sec-informiert` | 176 | in den Kasten am Ende von 2.1 |

**Kap. 6 Rollen der KI** (bisher Kap. 4, Ziel 11.000). Die vier 4D-Durchläufe am Ende jeder Rolle gibt es schon (Z. 209, 561, 670, 743); sie verweisen künftig auf Kap. 5 statt auf `@sec-schemas`. Kürzung vor allem in `sec-coding` (3.547 auf etwa 1.800; Bauanleitungen wandern nach Kap. 7).

**Kap. 7 Artefakte** (bisher Kap. 6 + Primer aus dem Archiv, Ziel 9.000). Nach Artefakten gegliedert, jedes Artefakt in derselben Folge: Mechanismus (Verweis Kap. 4), Bauweise, Beispiel aus der Lehre, Prüfen vor dem Einsatz.

| Artefakt | Herkunft |
|---|---|
| Quizfragen und Abrufübungen | `sec-bsp-fragen-generator`, `sec-bsp-quizspiele` |
| Lernsongs | `sec-bsp-lernsong-forecast`, Primer C |
| Lernspiele | Primer D, Quizspiele-Teil |
| Animationen und interaktive Widgets | `sec-bsp-widgets`, Primer A, Bau-Teile aus `sec-coding` |
| Präsentationen | Primer B |
| Fallstudien | `sec-bsp-fallstudie` |
| Simulationen und Planspiele | `sec-bsp-simulationen-lehrende`, `sec-bsp-simulationen-studierende` |
| Tutoren und Berater | `sec-fall-tutor-bwl`, `sec-fall-job-buddy` |
| Wissensassistenten mit eigenen Quellen | `sec-fall-unternehmen` (RAG-Projekte) |
| Fazit | `sec-fallbeispiele-fazit` (1.103 auf 500) |

Damit ist der offene Punkt 2 der Notiz beantwortet: Die Fallbeispiele gehen im Artefakt-Kapitel auf. Die Übungen aus dem alten Anhang D bleiben im Archiv.

**Anhänge.** A Prompt-Sammlung (ohne AI-Fluency-Übung, etwa 4.000), B Lösungshinweise (sieben Kapitel, neue Lernfragen zu Kap. 3), C Ressourcenverbrauch (aus `energie.qmd`, etwa 400; oder nur online, Entscheidung in Sitzung K2b), Glossar, Transparenz.

### Budget (Empfehlung)

| Teil | Ziel | | Teil | Ziel |
|---|---:|---|---|---:|
| Vorwort | 1.300 | | Kap. 5 | 5.000 |
| Kap. 1 | 3.300 | | Kap. 6 | 11.000 |
| Kap. 2 | 7.500 | | Kap. 7 | 9.000 |
| Kap. 3 | 3.500 | | Anhang A–C | 7.400 |
| Kap. 4 | 5.500 | | **Summe** | **53.500** |

### 2.9 Druckwörter je Abschnitt (03.11.2026)

Gezählt mit `scripts/zaehle_druck.py` auf `main` @ `da80b9e`; die Tabelle trennt zusätzlich an Überschriften ohne ID, die Dateisummen sind mit dem Skript identisch. Online-Blöcke zählen nicht, Druck-Blöcke (`unless-format="html"`) zählen mit. Rohe HTML-Blöcke außerhalb von Online-Blöcken zählt das Skript mit; das macht im ganzen Buch weniger als 60 Wörter aus.

Abstand zum Budget: Druck heute 59.814 Wörter, dazu Kap. 3 neu (3.500) und Anhang C (etwa 400), Ziel 53.500; zu kürzen sind damit rund **10.200 Wörter**. Zwei Befunde ändern die Herkunftstabellen: Die AI-Fluency-Übung, die Kap. 5 mit etwa 900 Wörtern als durchgehendes Beispiel übernehmen soll, steht heute im Druck gar nicht (online only), bringt also +900 statt einer Verschiebung. „Was sind unsere Aufgaben?“ hat keine eigene ID; die 1.590 Druckwörter unter `sec-hiwi` gehören dorthin (mit Bibliothek-Ratekasten).

**index.qmd** – Druck gesamt 1.829

| Abschnitt | ID | Druck |
|---|---|---:|
| (Kopf) | – | 3 |
| Vorwort | (ohne ID) | 120 |
| Neue Möglichkeiten durch KI – Interaktionen und vieles mehr | `sec-neue-moeglichkeiten` | 181 |
| Wählen Sie Ihren Lernpfad | `sec-lernpfade` | 569 |
| Wie dieses Buch lehrt | `sec-wie-dieses-buch-lehrt` | 848 |
| Übersicht | `sec-uebersicht` | 108 |

**kapitel01.qmd** – Druck gesamt 3.602

| Abschnitt | ID | Druck |
|---|---|---:|
| Einleitung | `sec-einleitung` | 398 |
| Wie verbreitet ist KI-Nutzung? | `sec-nutzung` | 683 |
| &nbsp;&nbsp;Höher oder tiefer: Wofür Menschen KI tatsächlich nutzen | `sec-spiel-ki-aufgaben` | 540 |
| Was geht schief? | `sec-risiken` | 348 |
| Was hilft? | `sec-was-hilft` | 293 |
| Was Sie im Buch erwartet | `sec-kapiteluebersicht` | 1.340 |

**kapitel02.qmd** – Druck gesamt 12.021

| Abschnitt | ID | Druck |
|---|---|---:|
| Grundbegriffe und vier Kompetenzen | `sec-grundbegriffe` | 345 |
| Mit KI arbeiten: vier Kompetenzen | `sec-schemas` | 99 |
| &nbsp;&nbsp;Das 4D-Modell | `sec-4d` | 401 |
| &nbsp;&nbsp;Wie dieses Kapitel und das Buch das Schema nutzen | `sec-4d-nutzung` | 215 |
| Grundbegriffe: Modell, Harness und Agent | `sec-definitionen` | 121 |
| &nbsp;&nbsp;Was ein Sprachmodell tut | `sec-sprachmodell` | 102 |
| &nbsp;&nbsp;Was sich seit 2022 geändert hat | `sec-harness` | 1.058 |
| Delegation: Was übernimmt die KI? | `sec-delegation` | 129 |
| &nbsp;&nbsp;Was die Modelle können und was nicht | `sec-capabilities` | 923 |
| &nbsp;&nbsp;Welches Setup: LLM, RAG oder Agent? | `sec-patterns-usage` | 441 |
| &nbsp;&nbsp;Welches Modell? | `sec-model-choice` | 1.273 |
| &nbsp;&nbsp;Wer macht was: Arbeitsweisen von Centaur bis dunkle Fabrik | `sec-arbeitsweisen` | 730 |
| Description: Wie sage ich der KI, was ich will? | `sec-access` | 20 |
| &nbsp;&nbsp;Vom Wunsch zum Werkvertrag | `sec-how-to-speak` | 178 |
| &nbsp;&nbsp;Ein Auftrag mit Abnahmekriterium | `sec-prompt-components` | 167 |
| &nbsp;&nbsp;Prompts schreiben lassen, ohne das Steuer abzugeben | `sec-prompts-schreiben-lassen` | 179 |
| &nbsp;&nbsp;Drohen und Bestechen bringt nichts: Hausrezepte im Test | `sec-prompting-myths` | 343 |
| &nbsp;&nbsp;Was heißt das für Prompts in der Lehre? | `sec-prompts-teaching` | 652 |
| Discernment: Wie beurteile ich, was die KI liefert? | `sec-hallucinations` | 321 |
| Diligence: Verantwortung, Offenlegung, Ressourcen | `sec-diligence` | 136 |
| &nbsp;&nbsp;Ressourcenverbrauch der Modelle | `sec-energy` | 205 |
| Vertiefung: Was im Modell und im Harness passiert | `sec-vertiefung` | 42 |
| &nbsp;&nbsp;Tokens, Zahlen, Aufmerksamkeit | `sec-gpt-bedeutung` | 716 |
| &nbsp;&nbsp;Blick ins Modell | `sec-blick-ins-modell` | 217 |
| &nbsp;&nbsp;Agenten in der Praxis: Skills und Werkzeuganschluss | `sec-agenten-praxis` | 1.106 |
| &nbsp;&nbsp;Gedächtnis: Was ein Agent von einer Sitzung in die nächste mitnimmt | `sec-agenten-gedaechtnis` | 1.902 |

**kapitel03.qmd** – Druck gesamt 6.217

| Abschnitt | ID | Druck |
|---|---|---:|
| Didaktische Ziele und Mechanismen | `sec-didaktik` | 321 |
| Was für Ziele verfolgen wir mit dem Einsatz von GenAI in der Lehre? | `sec-ziele-genai` | 772 |
| Wissenstypen | `sec-wissenstypen` | 273 |
| Anwendungsbeispiele nach Wissenskategorien | `sec-anwendungsbeispiele` | 530 |
| Effektive Lerntechniken und Unterstützung mit KI | `sec-lerntechniken` | 0 |
| &nbsp;&nbsp;Wie lernen wir besonders effektiv? | (ohne ID) | 742 |
| &nbsp;&nbsp;Wie können LLMs genutzt werden, um diese Lerntechniken zu unterstützen? | (ohne ID) | 469 |
| Was die Forschung seit 2025 zeigt: Lernwirkung und kognitive Auslagerung | `sec-evidenz` | 3.110 |

**kapitel04.qmd** – Druck gesamt 13.398

| Abschnitt | ID | Druck |
|---|---|---:|
| Vier Szenarien der Nutzung von GenAI: Hiwi, Copilot, Tutor, Simulator | `sec-szenarien` | 417 |
| KI als Hiwi | `sec-hiwi` | 0 |
| &nbsp;&nbsp;Was sind unsere Aufgaben? | (ohne ID) | 1.590 |
| &nbsp;&nbsp;Fachartikel finden und auswerten: Welches Werkzeug passt zu welcher Aufgabe? | `sec-recherche` | 1.084 |
| KI als Copilot | `sec-copilot` | 579 |
| &nbsp;&nbsp;Besser schreiben – als Cyborg | `sec-cyborg-writing` | 725 |
| &nbsp;&nbsp;&nbsp;&nbsp;Was unsere eigenen Bots über Quellentreue lehren | `sec-bots-quellentreue` | 322 |
| &nbsp;&nbsp;Jeder kann jetzt programmieren | `sec-coding` | 1.520 |
| &nbsp;&nbsp;&nbsp;&nbsp;Beispiel: Little's Law selbst nachrechnen | `sec-widget-littles-law` | 363 |
| &nbsp;&nbsp;&nbsp;&nbsp;Beispiel: Den Bullwhip-Effekt zerlegen | `sec-widget-bullwhip` | 638 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prüfen, ob eine KI-gebaute Simulation rechnet | `sec-widget-pruefen` | 888 |
| KI als Tutor | `sec-tutor` | 531 |
| &nbsp;&nbsp;Beispiele für einfache Tutoren | `sec-simple-tutors` | 774 |
| &nbsp;&nbsp;Komplexer Physik Tutor mit Musterlösungen | `sec-complex-tutors` | 311 |
| &nbsp;&nbsp;Vom Prototyp zum Betrieb: Tutoren mit eigenen Quellen | `sec-tutor-betrieb` | 1.125 |
| KI als Simulator | `sec-simulator` | 117 |
| &nbsp;&nbsp;Role Play | `sec-role-play` | 354 |
| &nbsp;&nbsp;Goal Play – zielgerichtete Spiele | `sec-goal-play` | 299 |
| &nbsp;&nbsp;Wie echt ist das Gegenüber? | `sec-sim-echtheit` | 1.761 |

**kapitel05.qmd** – Druck gesamt 6.711

| Abschnitt | ID | Druck |
|---|---|---:|
| Empfehlungen zur Umsetzung | `sec-umsetzung` | 329 |
| Typische Aufgaben und Fragestellungen mit der KI durchspielen, Prompts anpassen, experimentieren | `sec-durchspielen` | 236 |
| Ausrichtung der Anpassungen nach Empfehlungen der Lernforschung | (ohne ID) | 205 |
| Einführung der Studierenden planen: Besser praktisch, häufig und niedrigschwellig | `sec-einfuehrung-studierende` | 195 |
| &nbsp;&nbsp;Beispiel: KI-Übung in Präsenzveranstaltung am Ende eines Theorieblock zu Nachhaltigkeit in Lieferketten | (ohne ID) | 216 |
| Wie prüfen wir jetzt? Jenseits der Homework Apocalypse | `sec-pruefen` | 1.211 |
| &nbsp;&nbsp;Selbsttest: Erkennen Sie KI-Texte besser als ein Detektor? | `sec-detektor-duell` | 174 |
| &nbsp;&nbsp;Formate nach den vier Säulen | (ohne ID) | 1.129 |
| Richtlinien zur KI-Nutzung - welche Handreichungen geben Hochschulen und was wird empfohlen? | (ohne ID) | 12 |
| &nbsp;&nbsp;Übersicht: Was regeln die Richtlinien der Hochschulen? | (ohne ID) | 280 |
| &nbsp;&nbsp;Was die KI-Verordnung von Hochschulen verlangt | `sec-ki-vo` | 564 |
| Wie können Studierende die Nutzung von LLM dokumentieren? Stichworte, nach Arbeitsphase, nach Werkzeug oder als Reflexionstagebuch | `sec-dokumentation` | 746 |
| Kurs-Integration: Drei Phasen eines Semesters | `sec-kurs-integration` | 1.243 |
| Wie bleiben Sie informiert? | `sec-informiert` | 171 |

**kapitel06-fallbeispiele.qmd** – Druck gesamt 7.891

| Abschnitt | ID | Druck |
|---|---|---:|
| Fallbeispiele aus der Lehre | `sec-fallbeispiele` | 700 |
| Wissen übertragen: Begriffe, Formeln, Reihenfolgen | `sec-bsp-syntaktisch` | 0 |
| &nbsp;&nbsp;Fragen-Generator: Abrufübung mit dem eigenen Material | `sec-bsp-fragen-generator` | 729 |
| &nbsp;&nbsp;Lernsongs: ein Verfahrenslied mit Rechenpausen | `sec-bsp-lernsong-forecast` | 556 |
| &nbsp;&nbsp;Quizspiele: Abruf mit Rückmeldung, und wann ein Quiz kein Simulator ist | `sec-bsp-quizspiele` | 543 |
| Wissen übersetzen: Bedeutungen erschließen | `sec-bsp-semantisch` | 0 |
| &nbsp;&nbsp;Interaktive Widgets: vom Studentenleben zur Fabrik | `sec-bsp-widgets` | 648 |
| &nbsp;&nbsp;Tutoring: Übungstutor und sokratischer Tutor | `sec-fall-tutor-bwl` | 470 |
| Wissen umformen: anwenden gegen Interessen und Folgen | `sec-bsp-pragmatisch` | 0 |
| &nbsp;&nbsp;Fallstudien generieren: Backhaus Kaya | `sec-bsp-fallstudie` | 635 |
| &nbsp;&nbsp;Simulationen durch Lehrende: Prozess und Verhandlung | `sec-bsp-simulationen-lehrende` | 621 |
| &nbsp;&nbsp;Simulationen und Planspiele selbst bauen: Gruppenprojekt mit Prüfzelle | `sec-bsp-simulationen-studierende` | 573 |
| &nbsp;&nbsp;Karriereberater: Erstsemester bauen KI-Werkzeuge für andere | `sec-fall-job-buddy` | 723 |
| &nbsp;&nbsp;Projektlernen mit Praxispartnern: RAG und Einkaufs-Workflows | `sec-fall-unternehmen` | 673 |
| Was die Beispiele gemeinsam zeigen | `sec-fallbeispiele-fazit` | 1.020 |

**kapitel07-appendix02-prompt-sammlung.qmd** – Druck gesamt 5.218

| Abschnitt | ID | Druck |
|---|---|---:|
| Best-Practice-Sammlung didaktischer Prompts und GenAI Aufgabenstellungen | `sec-prompts` | 0 |
| Vorbemerkung zur Struktur der Sammlung | (ohne ID) | 294 |
| Hiwi: Schnelle Hilfe zur Lehrgestaltung | (ohne ID) | 5 |
| &nbsp;&nbsp;Hiwi: Aktivierungs-Coach für die Präsenzlehre | `sec-prompt-aktivierungs-coach` | 222 |
| &nbsp;&nbsp;Hiwi: Auftrags-Interviewer | `sec-prompt-strukturierer` | 334 |
| &nbsp;&nbsp;Hiwi: System-Prompt für typische Anforderungen erstellen | `sec-prompt-systemprompt` | 500 |
| &nbsp;&nbsp;Hiwi: Quiz-Ersteller | `sec-prompt-quiz-maker` | 184 |
| Tutor: Beratender Beistand | (ohne ID) | 14 |
| &nbsp;&nbsp;Tutor: Quiz me – Abrufübung mit dem Kerninhalt einer Woche | `sec-prompt-quiz-me` | 679 |
| Aufgabenstellungen Tutorat | (ohne ID) | 2 |
| &nbsp;&nbsp;Tutor-Aufgabe: Sokratischer Dialog mit GenAI | `sec-prompt-sokratischer-dialog` | 375 |
| Copilot: Gemeinsam zu neuen Horizonten | (ohne ID) | 5 |
| &nbsp;&nbsp;Copilot: Fallstudie gemeinsam erstellen | `sec-prompt-fallstudie-erstellen` | 456 |
| &nbsp;&nbsp;Copilot: Dem Tod ins Auge sehen - Pre-Mortem für Projekte | `sec-prompt-project-premortem` | 385 |
| Aufgabenstellungen Copilot | (ohne ID) | 2 |
| &nbsp;&nbsp;Copilot-Aufgaben: 'AI-Sandwich ' - GenAI in einen Kurs integrieren | `sec-prompt-ai-sandwich` | 451 |
| Simulator: Didaktisches Erleben | (ohne ID) | 3 |
| &nbsp;&nbsp;Simulator: Verhandlungssimulation | `sec-prompt-verhandlungssimulator` | 436 |
| &nbsp;&nbsp;Simulator: Goal Play - Zielsetzung üben | `sec-prompt-goal-setting` | 434 |
| Weitere Prompts und Aufgabenstellungen der Online-Sammlung | `sec-prompts-online-weitere` | 437 |

**kapitel10-appendix05-loesungshinweise.qmd** – Druck gesamt 2.927

| Abschnitt | ID | Druck |
|---|---|---:|
| Lösungshinweise zu Lernfragen und Übungen | `sec-loesungshinweise` | 97 |
| Kapitel 1: Einleitung | (ohne ID) | 318 |
| Kapitel 2: Grundbegriffe | (ohne ID) | 612 |
| &nbsp;&nbsp;Selbsttest zum Film „Stützräder“ | `sec-loesung-stuetzraeder` | 81 |
| &nbsp;&nbsp;Selbsttest zum Film „Das nächste Token in neun Genres“ | `sec-loesung-token-genres` | 78 |
| Kapitel 3: Didaktische Ziele und Mechanismen | (ohne ID) | 245 |
| Kapitel 4: Vier Szenarien der Nutzung von GenAI | (ohne ID) | 431 |
| Kapitel 5: Empfehlungen zur Umsetzung | (ohne ID) | 259 |
| Kapitel 6: Fallbeispiele aus der Lehre | (ohne ID) | 806 |

## 3. Arbeitsregeln

1. **Umzug vor Umbau.** Zuerst wandern alle Abschnitte wörtlich an ihren neuen Ort, in einer einzigen Sitzung, die als einzige an den Kapiteldateien schreibt. Erst danach wird gekürzt und neu geschrieben. Prüfstein: Die Wortsumme vor und nach dem Umzug ist gleich.
2. **Eine Datei, eine Sitzung.** Nach dem Umzug hat jedes Kapitel eine eigene Datei; jede Sitzung der Phase 2 besitzt genau eine Datei und einen Branch. So können drei Sitzungen parallel laufen, ohne sich zu überschreiben.
3. **IDs bleiben.** Abschnitts-IDs (`#sec-…`) werden nicht umbenannt; so bleiben 331 Querverweise und die Anker in QR-Codes gültig.
4. **Alte Adressen leiten weiter.** Für `kapitel02.html` bis `kapitel06-fallbeispiele.html` entstehen Weiterleitungsseiten mit einer Ankertabelle: `kapitel02.html#sec-model-choice` landet im neuen Kap. 2, `kapitel02.html#sec-4d` im neuen Kap. 5.
5. Geltende Regeln: keine Platzhalter, keine TODO-Kommentare im Quelltext, Akronyme erst erklären, Prinzip vor Werkzeug, Quellen vor dem Schreiben prüfen, Kürzungen per MC in Paketen freigeben, Abschluss jeder Sitzung mit dem Skill `ergebnisse-sichern`.

## 4. Ablauf mit Terminen

| Phase | Datum | Sitzungen | Ergebnis | Gate |
|---|---|---|---|---|
| 0 Bereinigen | Di 03.11. | 1 + drei Audio-Sitzungen (S5 B, P6 C, S2 B) | offene Branches gemergt oder geparkt; Druckwörter je Abschnitt gezählt | MC je Branch |
| 1 Umzug | Mi 04.11. | 1 (exklusiv) | sieben Kapiteldateien, `_quarto.yml` mit Teil I/II, Weiterleitungen, Lernpfade k1–k7, Anhang B umsortiert, 86 eingetippte Verweise korrigiert | Wortsumme gleich, Render ohne neue Warnungen, kein `?@` |
| 2 Umbau | Do 05.–Mi 11.11. | 9, höchstens drei parallel | Kapitel auf Zielumfang, Kap. 3 neu | MC je Kürzungspaket und Merge |
| 3 Integration | Do 12.–Fr 13.11. | 2 | APA-7-Zitierstil (`zitierstil-apa7-de`, E10), Lösungshinweise, Glossar, Kapitelauftakte und Schlüsselbegriffe, Sprachcheck neuer Texte, Druck-PDF mit TeX, Seitenzahl | Seitenzahl im Budget |
| 4 Abgabe | Sa 14.11. | 1 | Abgabe-PDF, Begleitmail an Logos | Romans Freigabe |

Reihenfolge in Phase 2 (Pfeil = muss vorher fertig sein):

| Nr. | Sitzung | Datei | ab | Abhängigkeit |
|---|---|---|---|---|
| K3a | Kap. 3 Quellen prüfen, Gliederung der Kernaussagen, Titel | – | 05.11. | – |
| K2a | Kap. 2 Abbildung, 2.1 mit Kasten, 2.2, 2.3 | kapitel02 | 05.11. | – |
| K4 | Kap. 4 nach Lernzielen, Evidenz kürzen | kapitel04 | 05.11. | – |
| K3b | Kap. 3 schreiben, Szene, Lernfragen | kapitel03 | 06.11. | K3a |
| K2b | Kap. 2.4 kürzen, Energie-Anhang | kapitel02 | 06.11. | K2a |
| K5 | Kap. 5 zusammensetzen, Regelungen kürzen | kapitel05 | 07.11. | – |
| K7 | Kap. 7 nach Artefakten, Primer einbauen | kapitel07 | 07.11. | – |
| K6 | Kap. 6 Verweise, Coding kürzen | kapitel06 | 09.11. | K5, K7 (Verweisziele) |
| K1 | Einleitung „Aufbau des Buchs“, Pitch, Vorwort-Tabelle kürzen | kapitel01, index | 10.11. | alle anderen |

## 5. Offene Branches

| Branch | eigene Änderung | Vorschlag |
|---|---|---|
| `mollick-s3-bibliothek` | Kap. 4.1, +54 Zeilen | **03.11. gemergt** (`db41951`; S1 war per Rebase in `main`, Duplikat `massenkoff2026cadences` entfernt, `package.json` und Druckskript beide Seiten); zieht mit „Was sind unsere Aufgaben?“ nach Kap. 3 |
| `frontier-begriff` | Kap. 2, Glossar, +11 | **war schon in `main`** (`6fca58e`, Quelländerungen identisch); löschen |
| `prompting-rollen-evidenz` | Kap. 2.4, +32 | **03.11. gemergt** (`a47e41a`), MC: Druck kurz („Was man jetzt empfiehlt“ + QR, ~170 Wörter), online vollständig |
| `vorwort-praxisbeispiele` | Vorwort, Praxisseite, +427 | **03.11. gemergt** (`7917ec1`); Seite um Bibliothek (S3) und Film „Stützräder“ (P6) ergänzt, jetzt 37 Beispiele. Galerie- und Seitenverweise „Kapitel 6“/„Kapitel 4“ im Umzug anpassen (`scripts/praxisbeispiele.py`, Linktexte) |
| `mollick-s5-token-genres-b` | Kap. 2, +44 | in `main` (laut `git cherry` ein Commit ohne Gegenstück, 4.094 von 4.146 Zeilen in `main`, Rest durch spätere Fassung ersetzt); löschen |
| `prompting-film-stuetzraeder-c` | Kap. 2, +41 | in `main` (Vorfahr); löschen |
| `mollick-s2-podcast` | Kap. 4, +44 | **03.11. gemergt** (`808c52f`, vor dem Umzug; Podcast steht jetzt in Kap. 6 `sec-podcast-interviews`). Vorher offen: G2c (S2 oder S2-N) und G3, siehe `claude/mollick-formate/STATUS-s2-podcast-sitzungB-2026-11-03.md`; nach dem Umzug verpflanzen, falls nicht vorher gemergt (E3) |
| `mollick-s2n-notebook` | nur Material | bleibt geparkt, hängt an G2c |
| `zitierstil-apa7-de` | `apa.csl` offizielle APA-7-Fassung mit `de-DE`, `references.json` bereinigt | **nicht überholt** (in `main` steht das alte Zotero-`apa.csl` von 12/2025). MC 03.11.: behalten, Rebase und Merge in Phase 3 mit Druck-Testrender |
| `audio-beispiele` | Hörbeispiele Kap. 2.3.1 (Player, Drehbuch), nie eingebaut, mp3 nie aufgenommen | MC 03.11.: gesichert als Branch `archiv/audio-beispiele` (Tags blockiert der Proxy), Original löschen |
| `fachbegriffe-erklaeren`, `kapitel02-neugliederung-sitzung-b`, `kapitel02-4d-p4`, `anhangB-prompts-neu`, `mollick-s1-hoeher-tiefer(-rebase)`, `mollick-s4-detektor`, `scaling-laws` | in `main` (`git cherry` plus Zeilenabgleich und Statusnotizen) | MC 03.11.: löschen |

**Löschen:** Die Cloud-Sitzung darf keine Branches löschen (Proxy 403, auch für Tags). Roman löscht auf https://github.com/TH-Koln-Bartnik/genai4teaching/branches/all; die vollständige Liste der 41 löschbaren Branches steht in `claude/STATUS-branch-abgleich-2026-11-03.md` (dort fehlt nur `audio-beispiele`, das nach Anlage des Archiv-Branches ebenfalls weg kann). Nicht löschen: `main`, `archiv/audio-beispiele`, `zitierstil-apa7-de`, `mollick-s2-podcast`, `mollick-s2n-notebook`.

Branches, die nach dem Umzug kommen, lassen sich nicht mehr einfach rebasen, weil Git einen Abschnitt nicht über Dateigrenzen verfolgt. Sie werden wie bei S1 als Block an die neue Stelle verpflanzt; das kostet je etwa eine halbe Sitzung.

## 6. Entscheidungen

| Nr. | Frage | Empfehlung | gefällt |
|---|---|---|---|
| E1 | Umfangsziel | rund 54.000 Wörter (≈ 300 S.) | **03.11.: so entschieden** |
| E2 | Ort von „Prüfen“ | Kap. 5, nach Diligence, mit Dokumentieren | **03.11.: so entschieden** |
| E3 | Audio-Branches S2, S5, P6 | – | **03.11.: P6-Aufnahmen liegen vor, S2 und S5 werden heute aufgenommen; alle drei am 03.11. einbauen und vor dem Umzug mergen (Reihenfolge S5 → P6, S2 unabhängig). Was bis zum Abend nicht in `main` ist, wird nach dem Umzug verpflanzt.** |
| E4 | Dateinamen | neue Namen (`kapitel01-einleitung.qmd` … `kapitel07-artefakte.qmd`) plus Weiterleitungen | **03.11.: umgesetzt (Phase 1)** |
| E5 | Mechanismen-Tabelle | in Kap. 4; im Vorwort Kurzfassung mit Verweis | in K1 |
| E6 | Kurs-Integration (2.463) | Kasten etwa 400 in Kap. 7 | in K5 |
| E7 | Titel Kap. 3 | in K3a | in K3a |
| E8 | Druckumfang Rollen-Kasten 2.4.4 | Druck kurz + QR | **03.11.: so entschieden** |
| E9 | `vorwort-praxisbeispiele` | mergen | **03.11.: gemergt** |
| E10 | `zitierstil-apa7-de` | Phase 3 | **03.11.: behalten, Merge in Phase 3** |

## 7. Risiken

Der Engpass ist Romans Freigabe, nicht die Schreibarbeit: Neun Umbau-Sitzungen mit je zwei bis drei MC-Gates ergeben rund 25 Freigaben in sieben Tagen. Drei parallele Sitzungen sind deshalb die Obergrenze. Kap. 3 ist das einzige Kapitel ohne Text; fällt K3b aus, bleibt eine Lücke im Teil I. Rückfallebene: Kap. 3 erscheint im Druck in einer Kurzfassung von etwa 2.000 Wörtern, die Vollfassung folgt online bis Ende November. Ein Druck-Render mit TeX hat seit dem 02.11. nicht stattgefunden; Phase 3 braucht dafür `texlive-fonts-extra`.

## 8. Startaufträge

**Phase 0.** „Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md`, Abschnitte 5 und 6. Kläre per MC Repo-Schreibzugriff und Tresorit-Freigabe. Merge nacheinander `mollick-s3-bibliothek` (nach Startauftrag in `claude/mollick-formate/STATUS-s3-bibliothek-2026-11-02.md`), `frontier-begriff`, `prompting-rollen-evidenz` (vorher MC Druckumfang) und, nach MC, `vorwort-praxisbeispiele`. Prüfe die als überholt gelisteten Branches mit `git cherry` und lösche sie nach MC. Zähle danach mit `scripts/zaehle_druck.py` die Druckwörter je Abschnitt und trage sie in Abschnitt 2 des Plans nach. Lege den Plan (Tresorit-Kopie liegt seit 03.11. in `Projektnotizen-Claude/gliederung-neu/`) zusätzlich im Repo unter `notes/2026-11-03-plan-umsetzung-neue-gliederung.md` ab. Abschluss mit `ergebnisse-sichern`.“

**Phase 0, Audio (parallel, heute).** „S5 Sitzung B und P6 Sitzung C nach den Startaufträgen in `claude/mollick-formate/STATUS-s5-token-genres-2026-11-02.md` und `claude/prompting-primer/STATUS-p6-stuetzraeder-teilB-2026-11-02.md`; die P6-Aufnahme liegt in `My Tresors\0_Roman Arbeit\0_GenAI\1-Research\06-Lehrbuch-Publikation-Logos\Audio-P6-Stuetzraeder\` (Ordnerfreigabe per MC anfragen). S2 Sitzung B nach `claude/mollick-formate/STATUS-s2-podcast-teilA-2026-11-02.md`, sobald die fünf Blöcke vorliegen. Merge-Reihenfolge S5 vor P6. Alle drei müssen vor dem Start von Phase 1 in `main` sein oder ausdrücklich als „nach dem Umzug verpflanzen“ markiert werden.“

**Phase 1.** „Lies den Plan, Abschnitte 2–4. Du bist die einzige Sitzung, die heute Kapiteldateien ändert. Lege die sieben Kapiteldateien nach E4 an und verschiebe die Abschnitte wörtlich nach den Zuordnungstabellen in Abschnitt 2 (per Skript über die Abschnitts-IDs, ein Commit nur für Verschiebungen). Danach: `_quarto.yml` mit `part:` für Teil I und II, Weiterleitungsseiten mit Ankertabelle für die alten Adressen, Lernpfade-Widget und Druckkarte k1–k7, Anhang B in neuer Kapitelfolge, die 86 eingetippten Kapitel- und Abschnittsnummern. Prüfen: Wortsumme vor/nach gleich, Render ohne neue Warnungen, kein `?@`, Playwright 1200/390 px, Stichprobe von zehn alten Adressen mit Anker. Diff per MC, Merge, live prüfen, `ergebnisse-sichern`.“

**Phase 2, je Sitzung.** „Lies den Plan, Abschnitt 2 (dein Kapitel) und Abschnitt 3. Du besitzt nur `<Datei laut Tabelle in Abschnitt 4>` auf Branch `umbau-<Kürzel>`. Ziel-Wortzahl laut Budget. Kürzungen als nummerierte Liste in Paketen per MC freigeben lassen, neue Quellen vor dem Einbau per Crossref prüfen, dann Render, Playwright, Diff per MC, Merge, `ergebnisse-sichern`.“
