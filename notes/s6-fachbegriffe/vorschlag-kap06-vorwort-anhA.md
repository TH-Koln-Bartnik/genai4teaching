# Fachbegriffe S6 Teil 2 – Vorschläge Kap. 6 + Vorwort + Anhang A (kapitel06-fallbeispiele.qmd, vorwort.qmd, kapitel06-appendix01-prompt-ueberblick.qmd)

Stand: 2026-11-01, Branch `fachbegriffe-s6-teil2` (origin/main @ a80086b), Buchdateien unverändert (nur Vorschläge). Zeilennummern beziehen sich auf den aktuellen Stand (Kap. 6: 398 Zeilen, Vorwort: 38, Anhang A: 18). Jede Datei zählt als eigenes Kapitel. Alle ALT mit grep -c -F geprüft: je genau 1 Treffer in der Zieldatei; keine Überlappung (Prüfskript, Ergebnis in Abschnitt 5). Kap. 6 beschreibt Studierendenprojekte; technische Begriffe dort durchgehend laienverständlich umschrieben.

## 1. Vorschläge

| Nr | Datei | Zeile | Typ | Begriff dt. | Begriff engl./Akronym | Beleg | Sicherheit |
|:--|:--|--:|:--|:--|:--|:--|:--|
| K6-01a–c | kapitel06 | 65 | A | übertragen, übersetzen, umformen | *transferring, translating, transforming* | carlile2004, Titel „Transferring, translating, and transforming: An integrative framework …“ (references.json; doi:10.1287/orsc.1040.0094). Ordnungsrahmen des ganzen Kapitels | bestätigt |
| K6-02 | kapitel06 | 65 | A | Projektlernen | *project-based learning* | chenyang2019, Titel „Revisiting the effects of project-based learning on students' academic achievement …“; doi:10.1016/j.edurev.2018.11.001. Erstes Auftreten Z. 65, Quelle zitiert in Z. 303/327/351 | bestätigt |
| K6-03 | kapitel06 | 67 | A | verteiltes / testgestütztes Lernen | *distributed practice* / *practice testing* | dunlosky2013, Abstract (references.json): „Practice testing and distributed practice received high utility assessments“; doi:10.1177/1529100612453266 | bestätigt |
| K6-04 | kapitel06 | 67 | A | gemischtes Üben / fragebasierte Ausarbeitung | *interleaved practice* / *elaborative interrogation, self-explanation* | dunlosky2013, Abstract: „Elaborative interrogation, self-explanation, and interleaved practice received moderate utility assessments“. Zu Kap. 3 (*explanatory questioning*) s. Nebenfund 3 | bestätigt |
| K6-05 | kapitel06 | 95 | B | Eingabe an die KI | Prompt | Typ B; erstes Auftreten im Fließtext (Z. 19 steht im MC-Block, analog zu Romans Entscheidung in Kap. 2); Wortlaut wie Kap. 1 | – |
| K6-06 | kapitel06 | 99 | B | nachhaltiges Lieferkettenmanagement | *Sustainable Supply Chain Management* (SSCM) | Typ B; englischer Modulname, Akronym schon aufgelöst, Bedeutung für Fachfremde fehlt | – |
| K6-07 | kapitel06 | 117 | A | musikalische Merkhilfen | *musical mnemonics* | derksdijkman2024, Titel „Musical mnemonics in cognitively unimpaired individuals …“; doi:10.1007/s11065-023-09585-4 | bestätigt |
| K6-08 | kapitel06 | 117 | A | ausgearbeitete Lösungsbeispiele | *worked examples* | barbieri2023, Titel „A meta-analysis of the worked examples effect on mathematics performance“; doi:10.1007/s10648-023-09745-1. Erste Nennung mit Quelle (Tabelle Z. 72 und Steckbrief Z. 114 davor ohne Quelle) | bestätigt |
| K6-09 | kapitel06 | 127 | B | interaktive Übung im Browser | Widget | Typ B; erstes Auftreten im Fließtext (Z. 39 MC-Block, Z. 74 Tabelle). Z. 190 nennt später die Technik (HTML-Datei) | – |
| K6-10 | kapitel06 | 156 | B | digitale Lernspiele | Serious Games | Typ B; Begriff aus wouters2013, Titel „… effects of serious games“; doi:10.1037/a0031311 | – |
| K6-11 | kapitel06 | 164 | B | selbstständig handelnde KI-Systeme | Agenten | Typ B; Glossar-Erstnennung im Kapitel (Kandidatenliste); gleiche Umschreibung wie VW-03 | – |
| K6-12 | kapitel06 | 164 | C | Webseite | HTML | Typ C; erstes Auftreten (Z. 136 ist Codeblock). Für Fachfremde nicht gängig | – |
| K6-13 | kapitel06 | 166 | B | Bezug von zwei Lieferanten | Dual Sourcing | Typ B; Beschaffungsbegriff, für Fachfremde unklar | – |
| K6-14 | kapitel06 | 168 | C | Erstsemestermodul zum wissenschaftlichen Arbeiten | WAGP | Typ C; erstes Auftreten Z. 168, Auflösung steht erst Z. 335 | – |
| K6-15 | kapitel06 | 177 | A | angeleitetes Entdecken | *enhanced discovery* | alfieri2011, Abstract: „outcomes were favorable for enhanced discovery when compared with other forms of instruction“ (Semantic Scholar; doi:10.1037/a0021017) | bestätigt |
| K6-16 | kapitel06 | 180 | A | Kohärenzprinzip | *coherence principle* | mayer2014, Titel „Principles for Reducing Extraneous Processing in Multimedia Learning: Coherence, Signaling, …“; doi:10.1017/cbo9781139547369.015. Benennt das Prinzip hinter „Fachfremde Zierelemente lenken ab“ | bestätigt |
| K6-17 | kapitel06 | 190 | B | Rechenblätter mit Programmcode im Browser | Colab-Notebooks | Typ B; Werkzeug für Fachfremde unbekannt, tritt Z. 251/311/315 wieder auf | – |
| K6-18 | kapitel06 | 190 | B | Kennzahlen-Übersicht | Dashboard | Typ B | – |
| K6-19 | kapitel06 | 192 | B | Programmiersprache | Python | Typ B; Eigenname, für Fachfremde unklar | – |
| K6-20 | kapitel06 | 214 | A | aktives Lernen | *active learning* | kestin2025, Titel „AI tutoring outperforms in-class active learning …“; doi:10.1038/s41598-025-97652-6 (wie K3-01) | bestätigt |
| K6-21 | kapitel06 | 214 | A | Leitplanken | *guardrails* | bastani2025, Titel „Generative AI without guardrails can harm learning …“; doi:10.1073/pnas.2422633122 (wie K3-18) | bestätigt |
| K6-22 | kapitel06 | 239 | A | Sachtexte | *expository texts* | mar2021, Titel „Memory and comprehension of narrative versus expository texts: A meta-analysis“; doi:10.3758/s13423-020-01853-1 | bestätigt |
| K6-23 | kapitel06 | 239 | A | Vorabtest-Effekt | *pretesting effect* | pan2023prequestion, Titel „Prequestioning and pretesting effects: A review …“; doi:10.1007/s10648-023-09814-5 | bestätigt |
| K6-24 | kapitel06 | 243 | B | Begleittext für Lehrende | Teaching Note | Typ B; erstes Auftreten Z. 243, Inhalt erst Z. 251 | – |
| K6-25 | kapitel06 | 279 | A | Gerüste | *scaffolding* | chernikova2020, Abstract: „different types of scaffolding to facilitate effective learning“ (Crossref; doi:10.3102/0034654320933544). Erstes Auftreten von „Gerüst“ ist Z. 270 ohne Quelle; Z. 279 ist die belegte Stelle | bestätigt |
| K6-26 | kapitel06 | 279 | C | Effektstärke | d | Typ C; einziges Effektmaß ohne Wort „Effekt“ im Satz (Z. 303 sagt „großen Gesamteffekt (g = …)“ und „Effekt … (d = 0,71)“) | – |
| K6-27 | kapitel06 | 279 | B | Planspiel zur Lieferkette | Beer Game | Typ B; Begriff bei wukatok2006learning, doi:10.1016/j.jom.2005.08.006 | – |
| K6-28 | kapitel06 | 287 | B | Peitscheneffekt: Bestellschwankungen schaukeln sich auf | Bullwhip | Typ B; chen2000quantifying, Titel „Quantifying the bullwhip effect …“; doi:10.1287/mnsc.46.3.436.12069. Erstes Auftreten Z. 287 | – |
| K6-29 | kapitel06 | 315 | B | Bestand gleich Durchsatz mal Durchlaufzeit | Little's Law | Typ B; im Kapitel sonst nur als ID (@sec-widget-littles-law) | – |
| K6-30 | kapitel06 | 317 | C | vier Kompetenzen im Umgang mit KI | 4D-Modell | Typ C; dakan2025, Titel „The AI Fluency Framework …“ (https://aifluencyframework.org/); die vier D sind im Kapitel nicht genannt | – |
| K6-31 | kapitel06 | 337 | B | Zuordnung | Matching | Typ B | – |
| K6-32 | kapitel06 | 337 | B | feste Grundanweisung an die KI | System-Prompt | Typ B; Glossar-Erstnennung im Kapitel (Kandidatenliste) | – |
| K6-33 | kapitel06 | 339 | C | Programmierschnittstelle | API | Typ C; Funktion des Schlüssels ist erklärt, das Akronym nicht. Optional | optional |
| K6-34 | kapitel06 | 359 | C | generative KI | GenAI | Typ C; erstes Auftreten im Modulnamen (Eigenname bleibt), wieder Z. 361 | – |
| K6-35 | kapitel06 | 359 | B | Preisvergleiche mit dem Markt | Preisbenchmarks | Typ B | – |
| K6-36 | kapitel06 | 359 | B | betreutes Praxisprojekt | Guided Project | Typ B; tritt Z. 361/363 wieder auf | – |
| K6-37 | kapitel06 | 359 | A (Format) | Angebotsanfrage | *Request for Quotation* | Englisch schon da, aber nicht kursiv. Fachbegriff des Einkaufs; keine Quelle im Satz, nur Formatkorrektur | – |
| K6-38 | kapitel06 | 361 | C | Leistungspunkte | ECTS | Typ C; in Kap. 5 erklärt, in Kap. 6 nicht | – |
| K6-39 | kapitel06 | 361 | B | Anwendungsfall | Use Case | Typ B; das Kapitel sagt sonst „Anwendungsfall“ (Z. 54, 355, 359) | – |
| K6-40 | kapitel06 | 361 | B | automatisierte Arbeitsabläufe | Workflow-Automatisierung | Typ B; Überschrift Z. 346 nicht angefasst | – |
| K6-41 | kapitel06 | 363 | B | Projektordner mit Versionsverwaltung | Git-Repository | Typ B; Z. 365 baut darauf auf (*repository* bei Carlile) | – |
| K6-42 | kapitel06 | 363 | B | Textsprache für Diagramme | Mermaid | Typ B; im selben Satz sind Markdown und CSV schon so erklärt | – |
| K6-43 | kapitel06 | 363 | B | im Repository gespeichert | eingecheckt | Typ B | – |
| K6-44 | kapitel06 | 365 | A | Grenzobjekte | *boundary objects* | carlile2002, Titel „A pragmatic view of knowledge and boundaries: Boundary objects in new product development“; doi:10.1287/orsc.13.4.442.2953 | bestätigt |
| VW-01 | vorwort | 3 | A | Sprachmodelle | *Large Language Models* | mollick2023a, Abstract: „Large Language Models (LLMs) in education“ (doi:10.48550/arXiv.2306.10052); Schreibweise wie Kap. 1 Z. 48. Quelle im Vorwort nicht zitiert | bestätigt |
| VW-02 | vorwort | 3 | C | Netzwerk für hochschuldidaktische Weiterbildung | hdw nrw | Typ C; Selbstbeschreibung „Hochschuldidaktische Weiterbildung Nordrhein-Westfalen“ (https://hochschule-bochum.de/fileadmin/public/Die-BO_Einrichtungen/BO_Akademie/Lernen_und_Lehren/hdw_nrw.pdf) | – |
| VW-03 | vorwort | 9 | B | eigenständig handelnde KI-Systeme | Agenten | Typ B; Glossar-Erstnennung (Kandidatenliste). Der Selbsttest Z. 32 umschreibt Agenten, steht aber nur im Druck | – |
| VW-04 | vorwort | 9 | A | verteiltes Üben | *distributed practice* | cepeda2006, Titel „Distributed practice in verbal recall tasks …“ (doi:10.1037/0033-2909.132.3.354); dunlosky2013, Abstract. Im Vorwort nicht zitiert (morehead2016 nennt die Strategie im Abstract nicht, PubMed 25625188). Optional | bestätigt (Buchquelle) |
| VW-05 | vorwort | 9 | A | Abrufübungen | *retrieval practice* | roediger2012, Abstract: „retrieval practice (via self testing)“ (wie K3-05). Im Vorwort nicht zitiert. Optional | bestätigt (Buchquelle) |
| VW-06 | vorwort | 9 | A | Expertise-Umkehreffekt | *expertise reversal effect* | kalyuga2003, Titel „The Expertise Reversal Effect“ (Crossref; doi:10.1207/S15326985EP3801_4). Benennt den Befund, den der Satz beschreibt | bestätigt |
| AA-01 | anhA | 3 | B | Eingaben an die KI | Prompts | Typ B; Erstnennung im Fließtext (Z. 1 ist Überschrift); Wortlaut wie Kap. 1 | – |
| AA-02 | anhA | 3 | A (Format) | erwünschte Schwierigkeiten | *desirable difficulties* | bjork2011, Titel „… Creating desirable difficulties to enhance learning“ (references.json). Englisch steht in Anführungszeichen ohne deutschen Begriff; dt. Begriff wie Glossar Z. 126 und Kap. 1 | bestätigt |
| AA-03 | anhA | 7 | A | aktives Lernen | *active learning* | freeman2014, Titel „Active learning increases student performance …“ (references.json, wie K3-01). In Anhang A nicht zitiert | bestätigt (Buchquelle) |
| AA-04 | anhA | 14 | A | kognitive Belastung | *cognitive load* | sweller2011, Titel „Cognitive load theory“ (references.json), in derselben Zeile zitiert | bestätigt |

## 2. ALT / NEU

### kapitel06-fallbeispiele.qmd

**K6-01a** (Z. 65)
ALT: `wo beide Seiten dieselben Begriffe teilen (syntaktisch)`
NEU: `wo beide Seiten dieselben Begriffe teilen (syntaktisch; *transferring*)`

**K6-01b** (Z. 65)
ALT: `wo dieselben Wörter Verschiedenes bedeuten (semantisch)`
NEU: `wo dieselben Wörter Verschiedenes bedeuten (semantisch; *translating*)`

**K6-01c** (Z. 65)
ALT: `Wissen gegen sie angewendet werden muss (pragmatisch)`
NEU: `Wissen gegen sie angewendet werden muss (pragmatisch; *transforming*)`

**K6-02** (Z. 65)
ALT: `Wörtlich gilt sie erst beim Projektlernen mit Praxispartnern`
NEU: `Wörtlich gilt sie erst beim Projektlernen (*project-based learning*) mit Praxispartnern`

**K6-03** (Z. 67)
ALT: `hoch für verteiltes und testgestütztes Lernen,`
NEU: `hoch für verteiltes (*distributed practice*) und testgestütztes Lernen (*practice testing*),`

**K6-04** (Z. 67)
ALT: `mittel für gemischtes Üben und fragebasierte Ausarbeitung,`
NEU: `mittel für gemischtes Üben (*interleaved practice*) und fragebasierte Ausarbeitung (*elaborative interrogation, self-explanation*),`

**K6-05** (Z. 95)
ALT: `geben Sie ihnen einen Prompt mit, der das Modell`
NEU: `geben Sie ihnen einen Prompt (Eingabe an die KI) mit, der das Modell`

**K6-06** (Z. 99)
ALT: `*Sustainable Supply Chain Management* (SSCM) liegt`
NEU: `*Sustainable Supply Chain Management* (SSCM, nachhaltiges Lieferkettenmanagement) liegt`

**K6-07** (Z. 117)
ALT: `einen Vorteil musikalischer Merkhilfen, neun keinen`
NEU: `einen Vorteil musikalischer Merkhilfen (*musical mnemonics*), neun keinen`

**K6-08** (Z. 117)
ALT: `Diesen Teil tragen ausgearbeitete Lösungsbeispiele, die`
NEU: `Diesen Teil tragen ausgearbeitete Lösungsbeispiele (*worked examples*), die`

**K6-09** (Z. 127)
ALT: `mit der Fallstudie der Woche, dem Prognose-Widget oder`
NEU: `mit der Fallstudie der Woche, dem Prognose-Widget (interaktive Übung im Browser) oder`

**K6-10** (Z. 156)
ALT: `Serious Games schnitten in einer Metaanalyse`
NEU: `Serious Games (digitale Lernspiele) schnitten in einer Metaanalyse`

**K6-11** (Z. 164)
ALT: `ergänzt Begriffe zu Agenten und eine Diagnoserunde`
NEU: `ergänzt Begriffe zu Agenten (selbstständig handelnden KI-Systemen) und eine Diagnoserunde`

**K6-12** (Z. 164)
ALT: `Das Spiel ist eine einzelne HTML-Datei und läuft`
NEU: `Das Spiel ist eine einzelne Webseite (HTML-Datei) und läuft`

**K6-13** (Z. 166)
ALT: `Lebenszykluskostenrechnung und Dual Sourcing. Das Programm`
NEU: `Lebenszykluskostenrechnung und Dual Sourcing (Bezug von zwei Lieferanten). Das Programm`

**K6-14** (Z. 168)
ALT: `Ein Team im Modul WAGP (@sec-fall-job-buddy) baute`
NEU: `Ein Team im Erstsemestermodul zum wissenschaftlichen Arbeiten (WAGP, @sec-fall-job-buddy) baute`

**K6-15** (Z. 177)
ALT: `tragend sind angeleitetes Entdecken und Konkretheitsabbau`
NEU: `tragend sind angeleitetes Entdecken (*enhanced discovery*) und Konkretheitsabbau`

**K6-16** (Z. 180)
ALT: `Fachfremde Zierelemente lenken ab [@mayer2014].`
NEU: `Fachfremde Zierelemente lenken ab (Kohärenzprinzip, *coherence principle*) [@mayer2014].`

**K6-17** (Z. 190)
ALT: `Neben den Widgets stehen Colab-Notebooks, in denen`
NEU: `Neben den Widgets stehen Colab-Notebooks (Rechenblätter mit Programmcode im Browser), in denen`

**K6-18** (Z. 190)
ALT: `endet mit einem Dashboard, das sie in vier Schritten`
NEU: `endet mit einem Dashboard (Kennzahlen-Übersicht), das sie in vier Schritten`

**K6-19** (Z. 192)
ALT: `jede Zahl in Python zu rechnen, nie im Kopf des Modells`
NEU: `jede Zahl in der Programmiersprache Python zu rechnen, nie im Kopf des Modells`

**K6-20** (Z. 214)
ALT: `eine Präsenzstunde mit aktivem Lernen [@kestin2025]`
NEU: `eine Präsenzstunde mit aktivem Lernen (*active learning*) [@kestin2025]`

**K6-21** (Z. 214)
ALT: `Ohne solche Leitplanken kehrt sich die Wirkung um`
NEU: `Ohne solche Leitplanken (*guardrails*) kehrt sich die Wirkung um`

**K6-22** (Z. 239)
ALT: `besser verstanden und erinnert als Sachtexte;`
NEU: `besser verstanden und erinnert als Sachtexte (*expository texts*);`

**K6-23** (Z. 239)
ALT: `lernt die richtige Antwort danach oft besser [@pan2023prequestion]`
NEU: `lernt die richtige Antwort danach oft besser (Vorabtest-Effekt, *pretesting effect*) [@pan2023prequestion]`

**K6-24** (Z. 243)
ALT: `Stimmen Fall, Lösungsschlüssel und Teaching Note in jeder Zahl`
NEU: `Stimmen Fall, Lösungsschlüssel und Teaching Note (Begleittext für Lehrende) in jeder Zahl`

**K6-25** (Z. 279)
ALT: `und Gerüste wie Beispiele oder Reflexionsphasen verstärken`
NEU: `und Gerüste (*scaffolding*) wie Beispiele oder Reflexionsphasen verstärken`

**K6-26** (Z. 279)
ALT: `um rund 25 Prozent (d = 0,67)`
NEU: `um rund 25 Prozent (Effektstärke d = 0,67)`

**K6-27** (Z. 279)
ALT: `Im Beer Game sanken die Bestellschwankungen`
NEU: `Im Beer Game (Planspiel zur Lieferkette) sanken die Bestellschwankungen`

**K6-28** (Z. 287)
ALT: `Das Bullwhip-Widget aus @sec-widget-bullwhip simuliert`
NEU: `Das Bullwhip-Widget (zum Peitscheneffekt: Bestellschwankungen schaukeln sich auf) aus @sec-widget-bullwhip simuliert`

**K6-29** (Z. 315)
ALT: `Little's Law innerhalb von zehn Prozent`
NEU: `Little's Law (Bestand gleich Durchsatz mal Durchlaufzeit) innerhalb von zehn Prozent`

**K6-30** (Z. 317)
ALT: `In der Sprache des 4D-Modells [@dakan2025]`
NEU: `In der Sprache des 4D-Modells (vier Kompetenzen im Umgang mit KI) [@dakan2025]`

**K6-31** (Z. 337)
ALT: `ein regelbasiertes Matching auf Moduldaten`
NEU: `ein regelbasiertes Matching (Zuordnung) auf Moduldaten`

**K6-32** (Z. 337)
ALT: `Ein Team leitete den System-Prompt seines Bewerbungstrainers`
NEU: `Ein Team leitete den System-Prompt (feste Grundanweisung an die KI) seines Bewerbungstrainers`

**K6-33** (Z. 339, optional)
ALT: `In zwei Abgaben stand der API-Schlüssel, mit dem`
NEU: `In zwei Abgaben stand der API-Schlüssel (Schlüssel für die Programmierschnittstelle), mit dem`

**K6-34** (Z. 359)
ALT: `lief erstmals das Wahlpflichtmodul „GenAI im Einsatz“, in dem`
NEU: `lief erstmals das Wahlpflichtmodul „GenAI im Einsatz“ (GenAI: generative KI), in dem`

**K6-35** (Z. 359)
ALT: `über Lieferantenrecherche und Preisbenchmarks bis zu`
NEU: `über Lieferantenrecherche und Preisbenchmarks (Preisvergleiche mit dem Markt) bis zu`

**K6-36** (Z. 359)
ALT: `Im Wintersemester 2026/27 folgt ein Guided Project mit`
NEU: `Im Wintersemester 2026/27 folgt ein Guided Project (betreutes Praxisprojekt) mit`

**K6-37** (Z. 359)
ALT: `den Angebotsanfrage-Zyklus (Request for Quotation) mit`
NEU: `den Angebotsanfrage-Zyklus (*Request for Quotation*) mit`

**K6-38** (Z. 361)
ALT: `Das Wahlpflichtmodul (4 ECTS, 40 Stunden Präsenz)`
NEU: `Das Wahlpflichtmodul (4 Leistungspunkte nach ECTS, 40 Stunden Präsenz)`

**K6-39** (Z. 361)
ALT: `Studierende wählen einen Use Case und klären ihn`
NEU: `Studierende wählen einen Use Case (Anwendungsfall) und klären ihn`

**K6-40** (Z. 361)
ALT: `(eigene Quellen, Agenten, Workflow-Automatisierung;`
NEU: `(eigene Quellen, Agenten, automatisierte Arbeitsabläufe, sogenannte Workflows;`
*Hinweis: keine Klammer in der Klammer; dafür „sogenannte“.*

**K6-41** (Z. 363)
ALT: `organisiert sich in einem einzigen Git-Repository, das zugleich`
NEU: `organisiert sich in einem einzigen Git-Repository (Projektordner mit Versionsverwaltung), das zugleich`

**K6-42** (Z. 363)
ALT: `und Code, Diagramme in Mermaid, Prozessmodelle`
NEU: `und Code, Diagramme in Mermaid (Textsprache für Diagramme), Prozessmodelle`

**K6-43** (Z. 363)
ALT: `in Interviewprotokollen, bevor sie eingecheckt werden`
NEU: `in Interviewprotokollen, bevor sie eingecheckt (im Repository gespeichert) werden`

**K6-44** (Z. 365)
ALT: `Carlile beschreibt solche Objekte als Grenzobjekte, die`
NEU: `Carlile beschreibt solche Objekte als Grenzobjekte (*boundary objects*), die`

### vorwort.qmd

**VW-01** (Z. 3)
ALT: `wie man die neuen Sprachmodelle eigentlich sinnvoll`
NEU: `wie man die neuen Sprachmodelle (*Large Language Models*) eigentlich sinnvoll`

**VW-02** (Z. 3)
ALT: `eine Reihe von Kursen im Netzwerk hdw nrw an Hochschulen`
NEU: `eine Reihe von Kursen im Netzwerk für hochschuldidaktische Weiterbildung (hdw nrw) an Hochschulen`

**VW-03** (Z. 9)
ALT: `Ein Informatiker, der täglich mit Agenten arbeitet`
NEU: `Ein Informatiker, der täglich mit Agenten (eigenständig handelnden KI-Systemen) arbeitet`

**VW-04** (Z. 9, optional)
ALT: `warum verteiltes Üben länger hält`
NEU: `warum verteiltes Üben (*distributed practice*) länger hält`

**VW-05** (Z. 9, optional)
ALT: `die die Befunde zu Abrufübungen kennt`
NEU: `die die Befunde zu Abrufübungen (*retrieval practice*) kennt`

**VW-06** (Z. 9)
ALT: `die Bekanntes ein zweites Mal verarbeiten müssen [@kalyuga2003]`
NEU: `die Bekanntes ein zweites Mal verarbeiten müssen (Expertise-Umkehreffekt, *expertise reversal effect*) [@kalyuga2003]`

### kapitel06-appendix01-prompt-ueberblick.qmd

**AA-01** (Z. 3)
ALT: `schränken didaktische Prompts es dagegen bewusst ein`
NEU: `schränken didaktische Prompts (Eingaben an die KI) es dagegen bewusst ein`

**AA-02** (Z. 3)
ALT: `die Lernforschung nennt das „desirable difficulties“ [@bjork2011]`
NEU: `die Lernforschung nennt das erwünschte Schwierigkeiten (*desirable difficulties*) [@bjork2011]`

**AA-03** (Z. 7)
ALT: `| Keine fertige Lösung | **Aktives Lernen:** Die KI`
NEU: `| Keine fertige Lösung | **Aktives Lernen (*active learning*):** Die KI`

**AA-04** (Z. 14)
ALT: `**Kognitive Belastung begrenzen:** Spart unnötige`
NEU: `**Kognitive Belastung (*cognitive load*) begrenzen:** Spart unnötige`

## 3. Nicht bestätigt / bewusst weggelassen

**Nicht bestätigt (kein Beleg in der zitierten Quelle)**
- *situiertes Lernen* (Anhang A Z. 10) → „situated learning“: Die Zeile zitiert nichts; der Begriff stammt aus Lave & Wenger (1991), das nicht in references.json steht. Weggelassen.
- *Fehlannahmen* (Vorwort Z. 9) → „misconceptions“: morehead2016 schreibt im Abstract „beliefs inconsistent with research in learning and memory (e.g., learning styles)“, nicht „misconceptions“ (PubMed 25625188). Weggelassen.
- *offenes Modell* (Kap. 6 Z. 228) → „open-weight model“: gerber2026 ist deutschsprachig; die englische Form ist dort nicht belegt. In Kap. 2 schon erklärt. Weggelassen.
- Aus Teil 1 weiter offen: Engpass (Goldratt; Kap. 6 Z. 58/190/249 ohne Quelle), problem-based learning, learning by teaching, deliberate practice, situational barriers, standardized work: in diesen drei Dateien nicht zitiert, daher nicht erneut geprüft.

**Bewusst weggelassen**
- Schon erledigt in Kap. 6: Markdown, CSV, BPMN, RAG, Vektordatenbank (Z. 337/363), TF-IDF (Z. 337 umschrieben), MAD und MAPE (Z. 125, deutsch ausgeschrieben), *concreteness fading* (Z. 177), *Discernment*/*Diligence* (Z. 317), *repository* (Z. 365).
- *Debriefing* (Kap. 6 Z. 77/276): Z. 279 erklärt es drei Zeilen später („Nachgespräch: Debriefings, in denen Lernende ihr Handeln systematisch auswerten“). Tabelle und Steckbrief nicht belastet.
- Rollen *Tutor, Copilot, Simulator, Hiwi* (Kap. 6 Tabelle, Steckbriefe; Anhang A Z. 3): Eigennamen des Rollenmodells, jede Nennung verweist auf die Definition (@sec-szenarien, @sec-copilot usw.).
- *Nützlichkeitsstufe* (Kap. 6 Z. 91) → *high utility* (dunlosky2013, bestätigt): nach K6-03 geringer Mehrwert. Bei Bedarf: ALT `in der höchsten Nützlichkeitsstufe` → NEU `in der höchsten Nützlichkeitsstufe (*high utility*)`.
- *direkte Instruktion* (Kap. 6 Z. 180): alfieri2011 sagt „explicit instruction“; „direct instruction“ ist ein anderer, enger gefasster Begriff (Engelmann). Eine Klammer würde den Unterschied verwischen.
- *massiertes Üben* (Z. 117): katz2021 sagt „massed“ und „spacing effect“; K6-03 deckt das Verteilen ab.
- *Simulationsspiele*, *simulationsbasiertes Lernen*, *Projektlernen* in Tabelle/Steckbriefen, *Rückmeldung* (wisniewski2020): wörtliche Übersetzungen ohne Mehrwert bzw. durch K6-02 abgedeckt.
- *Selbsterklären* (Vorwort Z. 34): steht nur im Druck-Selbsttest; *self-explanation* ist über K6-04 im Buch belegt. Bei Bedarf analog zu VW-04/05.
- Titel und Namen: *Quiz me*, *Every Forecast Is Wrong …*, *Einsatzbereit! Strategic Procurement Simulator*, *Try this* (Widget-Beschriftung), *Never promise bread you cannot bake* (Zitat in der Geschichte), „BWL-Memory“, Job-Buddy, Claude, Suno, LTX-2.5.
- Gängig oder selbsterklärend: KI, BWL, HTML-Widgets (nach K6-12), Chatbot, Bot, Workshop, Taskforce, Teaser-Video, Q1 bis Q6 („Die Fragen Q1 bis Q6“), Smartphone, Browser, Code, Prototyp.
- *GenAI* im Vorwort (Z. 3, „Taskforce GenAI in der Lehre“): Eigenname eines Gremiums; die Bedeutung ergibt sich aus dem Buchtitel. Siehe offene Frage in Abschnitt 4.
- Kandidaten aus der CSV ohne Handlungsbedarf: kursive Steckbrief-Labels (*Wissensform:* usw.), *Fortgeschritten*, Großschreibung im Prompt-Zitat (Anhang A Z. 16: KEINE, NUR, HILFE AUF DEUTSCH sind keine Akronyme, sondern Zitat), Fettungen Wiederholen/Anwenden/Beurteilen.
- Lernspiel-Lösungen: Kap. 6 verrät keine; nichts angefasst.

## 4. Nebenfunde

1. **Kap. 6 Z. 337, Terminologie:** „dem Konzept erwünschter Erschwernisse (*desirable difficulties*)“. Glossar Z. 126, Kap. 1 und Kap. 3 sagen „erwünschte Schwierigkeiten“; AA-02 übernimmt das. Eindeutig, daher als ALT/NEU:

**K6-45** (Z. 337, Nebenfund)
ALT: `dem Konzept erwünschter Erschwernisse (*desirable difficulties*)`
NEU: `dem Konzept erwünschter Schwierigkeiten (*desirable difficulties*)`

2. **Kap. 6 Z. 131 und Z. 375, Bezug unklar:** „In der Typologie des Regelwerks …“ und „jede Zeile gegen das Regelwerk geprüft“. Ein Regelwerk wird in Kap. 6 vorher nicht eingeführt; gemeint ist wohl das Lernsong-Regelwerk im Primer (@sec-primer-lernsongs, Z. 131 Satzende). Vorschlag ohne ALT/NEU, weil nicht eindeutig: in Z. 131 „des Regelwerks für Lernsongs im Primer“.
3. **Fragebasierte Ausarbeitung, Kap. 3 vs. Kap. 6:** Kap. 3 übersetzt mit *explanatory questioning* (roediger2012), Kap. 6 zitiert für dieselbe Technik dunlosky2013, wo sie *elaborative interrogation* und *self-explanation* heißt. K6-04 nennt beide Dunlosky-Begriffe; sie sind genau das, was Roediger & Pyc (2012) unter „explanatory questioning (elaborative interrogation and self-explanation)“ zusammenfassen. Für das Glossar (Teil 2, Punkt 2) beide Formen nennen.
4. **Vorwort Z. 9, Quellenwiedergabe:** „teilten mit ihnen aber verbreitete Fehlannahmen [@morehead2016]“. Der Abstract (PubMed 25625188) sagt, Lehrende „held several beliefs inconsistent with research … (e.g., learning styles)“ und kannten wirksame Strategien „moderately“ besser, „although the difference was small“. Dass sie die Fehlannahmen *mit den Studierenden teilten*, steht im Abstract nicht ausdrücklich; Volltext prüfen oder „hatten aber selbst verbreitete Fehlannahmen“ schreiben.
5. **Anhang A Z. 12 und Z. 16:** Als einzige Zeilen der Tabelle ohne Verweis auf den Prompt, aus dem die Formulierung stammt; die Tabellenunterschrift sagt „Formulierungen mit Verweis stammen aus den Prompts in Anhang B“. Unklar, ob die beiden Formulierungen aus Anhang B stammen.
6. Geprüft und in Ordnung: chernikova2020 (145 Studien, g = 0,85, Beispiele bei wenig, Reflexion bei viel Vorwissen; Crossref-Abstract), katz2021 (verteilt vs. massiert, drei Wochen), alfieri2011 (Rückmeldung, Beispiele, Gerüste, Erklärungen), roediger2006 (5 min / 2 Tage / 1 Woche), dunlosky2013 (hoch/mittel wie im Steckbrief).

## 5. Kennzahlen

- Vorschläge gesamt: 54 Vorschläge + 1 Nebenfund = 57 ALT/NEU-Blöcke (K6: 47 einschließlich K6-01a–c und Nebenfund K6-45; VW: 6; AA: 4). Davon optional: K6-33, VW-04, VW-05.
- Je Typ (K6-01a–c als ein Vorschlag gezählt): A 22 (davon A (Format) 2: K6-37, AA-02), B 24, C 8; dazu 1 Nebenfund (K6-45). Kap. 6: A 15 (1 Format), B 22, C 7; Vorwort: A 4, B 1, C 1; Anhang A: A 3 (1 Format), B 1.
- Mehrwörter gesamt (NEU minus ALT, leerzeichengetrennt): Kap. 6 +123, Vorwort +17, Anhang A +10, zusammen +150 (ohne die optionalen K6-33, VW-04, VW-05: +142).
- Prüfung (Python, `str.count` wie `grep -c -F`): alle 57 ALT je genau 1 Treffer in der Zieldatei, kein Backtick im ALT, keine Überlappung der Fundstellen innerhalb einer Datei. Probelauf `anwenden.py` auf Kopien in `/tmp/s6probe/` (je Datei die IDs der anderen Dateien als Ausschluss): Kap. 6 47, Vorwort 6, Anhang A 4 angewandt, 0 FEHLER; danach jeder NEU-Text genau einmal vorhanden. Aufruf je Datei: `python3 anwenden.py vorschlag-kap06-vorwort-anhA.md <ziel.qmd> <IDs der anderen Präfixe>`.
