# Fachbegriffe S6 Teil 2 – Vorschläge Glossar (glossar.qmd)

Stand: 2026-11-01, Branch `fachbegriffe-s6-teil2`, Datei unverändert (nur Vorschläge). Zeilennummern beziehen sich auf den aktuellen Stand (183 Zeilen, 40 Einträge). Alle ALT mit `grep -c -F` geprüft: je genau 1 Treffer, außer GL-03, GL-04, GL-06 (Begriffszeile kommt als Teilstring auch im Fließtext vor; ganze Zeile per `grep -c -x -F` genau 1 Treffer, s. Hinweis bei den Blöcken). Keine Überlappung zwischen den ALT-Stellen (Prüfskript, Abschnitt 5).

Entscheidung Roman (01.11.2026): Englischer Begriff in der Begriffszeile, Form „Kontextfenster (*context window*)“. Schwierigkeitsstufen in eigene Datei `data/glossar-stufen.yml` (Inhalt in Abschnitt 6, Datei nicht angelegt).

## 1. Vorschläge

### 1a. Englischer Begriff je Eintrag (Aufgabe 1)

| Nr | Datei | Zeile | Typ | Begriff dt. (Begriffszeile) | Begriff engl./Akronym | Beleg | Sicherheit |
|:--|:--|--:|:--|:--|:--|:--|:--|
| GL-01 | glossar.qmd | 5 | A | Generative KI (GenAI) | *generative AI* | aus Teil 1 (K1-01): bastani2025, Titel „Generative AI without guardrails …“, doi:10.1073/pnas.2422633122; lee2025, Abstract „Generative AI (GenAI)“, doi:10.1145/3706598.3713778 | bestätigt |
| GL-02 | glossar.qmd | 10 | A (Format) | Sprachmodell, Large Language Model (LLM) | *Large Language Model*, LLM | aus Teil 1 (K1-02): mollick2023a, Abstract „Large Language Models (LLMs)“, doi:10.48550/arXiv.2306.10052; Form wie Kap. 2 Z. 152 „**Sprachmodell** (*Large Language Model*, LLM)“ | bestätigt |
| – | glossar.qmd | 15 | – | GPT | – (schon englisch) | Akronym im Eintrag aufgelöst | – |
| – | glossar.qmd | 18 | – | Token | – (schon englisch) | – | – |
| – | glossar.qmd | 21 | – | Embedding | – (schon englisch) | – | – |
| – | glossar.qmd | 24 | – | Transformer und Attention | – (schon englisch) | – | – |
| – | glossar.qmd | 29 | – | Pretraining und RLHF | – (schon englisch) | – | – |
| GL-03 | glossar.qmd | 32 | A | Kontextfenster | *context window* | aus Teil 1 (K2-11): jurafsky2025, Kap. 7, Abschn. 7.7: „filling the full context window“, https://web.stanford.edu/~jurafsky/slp3/7.pdf | bestätigt |
| GL-04 | glossar.qmd | 37 | A | Halluzination | *hallucination* | lindsey2025 (in Kap. 2 zitiert), Abschnittsüberschrift „Entity Recognition and Hallucinations“; „Hallucination is especially common when models are asked about relatively obscure facts“, https://transformer-circuits.pub/2025/attribution-graphs/biology.html | bestätigt |
| – | glossar.qmd | 42 | – | Reasoning-Modell | – (schon englisch) | – | – |
| – | glossar.qmd | 47 | – | Jagged Frontier | – (schon englisch) | dellacqua2023, Titel „Navigating the Jagged Technological Frontier …“ | – |
| – | glossar.qmd | 52 | – | Zentaur und Cyborg → Centaur und Cyborg (GL-40) | – (nach Umbenennung schon englisch); falls Roman „Zentaur“ behält: *centaur*, *cyborg* | dellacqua2023, SSRN-Abstract: „One set of consultants acted as "Centaurs," … Another set of consultants acted more like "Cyborgs,"“, doi:10.2139/ssrn.4573321 | bestätigt |
| – | glossar.qmd | 57 | – | Prompt | – (schon englisch) | – | – |
| – | glossar.qmd | 62 | – | Prompt Engineering | – (schon englisch) | – | – |
| – | glossar.qmd | 67 | – | System-Prompt | – (schon englisch) | – | – |
| – | glossar.qmd | 72 | – | Few-Shot-Beispiele | – (schon englisch) | – | – |
| – | glossar.qmd | 75 | – | Chain of Thought | – (schon englisch) | – | – |
| GL-06 | glossar.qmd | 80 | A | Temperatur | *temperature* | jurafsky2025 (in Kap. 2 zitiert), Kap. 7, Abschn. „Temperature sampling“: „dividing the logit by a temperature parameter τ“, https://web.stanford.edu/~jurafsky/slp3/7.pdf | bestätigt |
| – | glossar.qmd | 85 | – | RAG (Retrieval-Augmented Generation) | – (schon englisch) | – | – |
| – | glossar.qmd | 90 | – | Agent | – (gleichlautend) | – | – |
| – | glossar.qmd | 95 | – | Harness | – (schon englisch) | – | – |
| – | glossar.qmd | 98 | – | Deep Research | – (schon englisch) | – | – |
| – | glossar.qmd | 103 | – | Skill | – (schon englisch) | – | – |
| GL-07 | glossar.qmd | 106 | A | Konnektor (MCP) | *connector* | anthropic2024mcp (in Kap. 2 zitiert): „Developers can start building and testing MCP connectors today.“; „Instead of maintaining separate connectors for each data source …“, https://www.anthropic.com/news/model-context-protocol | bestätigt |
| – | glossar.qmd | 111 | – | Artifact | – (schon englisch) | – | – |
| – | glossar.qmd | 116 | – | Custom GPT, Projekt | – (schon englisch bzw. Produktname) | – | – |
| GL-30 | glossar.qmd | 121 | A | Scaling Laws → Skalierungsgesetze | *scaling laws* | kaplan2020, Titel „Scaling laws for neural language models“, doi:10.48550/arXiv.2001.08361; Kap. 2 Z. 293 „**Skalierungsgesetze** (*scaling laws*)“ | bestätigt |
| GL-08 | glossar.qmd | 126 | A (Format) | Erwünschte Schwierigkeiten | *desirable difficulties* | aus Teil 1 (K1-05): bjork2011, Titel „… Creating desirable difficulties to enhance learning“ | bestätigt |
| GL-09 | glossar.qmd | 129 | A (Format) | Testgestütztes Lernen | *test-enhanced learning* | aus Teil 1 (K3-11): roediger2006, Titel „Test-enhanced learning …“, doi:10.1111/j.1467-9280.2006.01693.x | bestätigt |
| – | glossar.qmd | 134 | – | Spacing und Interleaving | – (schon englisch) | Kap. 3 dt. „zeitliche Verteilung und inhaltliche Mischung“ | – |
| GL-10 | glossar.qmd | 139 | A (Korrektur) | Fragebasierte Ausarbeitung | *explanatory questioning* (statt *elaborative questioning*) | aus Teil 1 (K3-15): roediger2012, Abstract „explanatory questioning (elaborative interrogation and self-explanation)“, doi:10.1016/j.jarmac.2012.09.002; so auch Kap. 3 Z. 158 | bestätigt |
| – | glossar.qmd | 144 | – | ICAP | – (Akronym aus *interactive, constructive, active, passive*, Teil 1 K3-16, chi2018) | Definition nennt die vier Modi schon auf Deutsch | – |
| GL-12 | glossar.qmd | 147 | A (Format) | Kognitive Belastung | *cognitive load* | sweller2011, Titel „Cognitive load theory“ (references.json; in Anhang A zitiert); Kap. 3 Z. 69 „(*cognitive load*)“ | bestätigt |
| – | glossar.qmd | 152 | – | Scaffolding | – (schon englisch) | – | – |
| GL-13 | glossar.qmd | 155 | A | Protégé-Effekt | *protégé effect* | love2025, Abstract: „eliciting the Protégé effect, a pedagogical phenomenon known to increase engagement“, doi:10.1007/s40593-025-00461-1 | bestätigt |
| – | glossar.qmd | 160 | – | Vier Rollen: Hiwi, Copilot, Tutor, Simulator | nicht bestätigt (s. Abschnitt 3) | – | – |
| – | glossar.qmd | 165 | – | Role Play und Goal Play | – (schon englisch) | – | – |
| – | glossar.qmd | 170 | – | Debriefing und Human in the Loop | – (schon englisch) | – | – |
| – | glossar.qmd | 175 | – | Vier-Säulen-Modell | – (deutsche Quelle, s. Abschnitt 3) | – | – |
| – | glossar.qmd | 180 | – | Homework Apocalypse | – (schon englisch) | – | – |
| N1–N6 | glossar.qmd | neu | A | AI Fluency; Delegation; Description; Discernment; Diligence | – (schon englisch) | dakan2025, Titel „The AI Fluency Framework …“, https://aifluencyframework.org/; Tab. 4D in Kap. 2 | bestätigt |
| N7 | glossar.qmd | neu | A | Programmier-Agent | *coding agent* | willison2025, Titel „Embracing the parallel coding agent lifestyle“, https://simonwillison.net/2025/Oct/5/parallel-coding-agents/; bockeler2026harness, Titel „Harness engineering for coding agent users“; balepur2026agents, Titel „(Im)Paired programming: Coding agents improve productivity …“, doi:10.48550/arXiv.2607.26375 | bestätigt |

### 1b. Weitere Vorschläge (Format, Verweise, Nebenfunde mit eindeutiger Korrektur)

| Nr | Zeile | Typ | Inhalt | Beleg | Sicherheit |
|:--|--:|:--|:--|:--|:--|
| GL-05 | 43 | A (Format) | *test-time compute* kursiv | Kap. 2 Z. 293 „(*test-time compute*)“ | bestätigt |
| GL-11 | 142 | Herkunft | Herkunftszeile zu *explanatory* statt *elaborare* | folgt aus GL-10; lat. *explanare*, „ausbreiten, deutlich machen“, zu *planus*, „eben, flach“ | sicher (Etymologie nach Standardwörterbüchern) |
| GL-14 | 16 | A (Format) | *generative*, *pre-trained* kursiv | Regel „Englisch in Klammern immer kursiv“ | – |
| GL-15 | 135 | A (Format) | *spacing*, *interleaving* kursiv | dito | – |
| GL-16–GL-29 | div. | Verweis | veraltete Kapitelnummern auf `@sec-…` umgestellt (Abschnitt 2c) | jede Zuordnung am Abschnittstext geprüft, Belegzeile je Block | sicher, außer wo vermerkt |
| GL-30–GL-31 | 121–122 | Neu/Korrektur | „Scaling Laws“ → „Skalierungsgesetze (*scaling laws*)“, Definition nach Kap. 2 | Aufgabe 4, s. Abschnitt 2e | bestätigt |
| GL-32–GL-41 | div. | Nebenfund | eindeutige Korrekturen gegen den Kapiteltext (Abschnitt 4) | je Block | sicher |

## 2. ALT / NEU

### 2a. Englischer Begriff in der Begriffszeile

**GL-01** (Z. 5)
ALT: `Generative KI (GenAI)`
NEU: `Generative KI (*generative AI*, GenAI)`

**GL-02** (Z. 10)
ALT: `Sprachmodell, Large Language Model (LLM)`
NEU: `Sprachmodell (*Large Language Model*, LLM)`

**GL-03** (Z. 32) – Achtung: „Kontextfenster“ steht auch in Z. 19 (Token). `grep -c -F` = 2, `grep -c -x -F` = 1. Mit `anwenden.py` nicht anwendbar; zeilengenau einspielen: `sed -i 's/^Kontextfenster$/Kontextfenster (*context window*)/' glossar.qmd`
ALT: `Kontextfenster`
NEU: `Kontextfenster (*context window*)`

**GL-04** (Z. 37) – Achtung: „Halluzination“ steht auch in Z. 3 und Z. 86. `grep -c -F` = 3, `grep -c -x -F` = 1. Zeilengenau: `sed -i 's/^Halluzination$/Halluzination (*hallucination*)/' glossar.qmd`
ALT: `Halluzination`
NEU: `Halluzination (*hallucination*)`

**GL-06** (Z. 80) – Achtung: „Temperatur“ steht auch zweimal in Z. 81. `grep -c -F` = 3, `grep -c -x -F` = 1. Zeilengenau: `sed -i 's/^Temperatur$/Temperatur (*temperature*)/' glossar.qmd`
ALT: `Temperatur`
NEU: `Temperatur (*temperature*)`

**GL-07** (Z. 106)
ALT: `Konnektor (MCP)`
NEU: `Konnektor (*connector*; MCP)`

**GL-08** (Z. 126)
ALT: `Erwünschte Schwierigkeiten (desirable difficulties)`
NEU: `Erwünschte Schwierigkeiten (*desirable difficulties*)`

**GL-09** (Z. 129)
ALT: `Testgestütztes Lernen (test-enhanced learning)`
NEU: `Testgestütztes Lernen (*test-enhanced learning*)`

**GL-12** (Z. 147)
ALT: `Kognitive Belastung (cognitive load)`
NEU: `Kognitive Belastung (*cognitive load*)`

**GL-13** (Z. 155)
ALT: `Protégé-Effekt`
NEU: `Protégé-Effekt (*protégé effect*)`

### 2b. Format (englische Klammern kursiv)

**GL-05** (Z. 43)
ALT: `statt ins Training gesteckt (test-time compute)`
NEU: `statt ins Training gesteckt (*test-time compute*)`

**GL-14** (Z. 16)
ALT: `Texte erzeugt (generative), vorab mit großen Textmengen trainiert wurde (pre-trained)`
NEU: `Texte erzeugt (*generative*), vorab mit großen Textmengen trainiert wurde (*pre-trained*)`

**GL-15** (Z. 135)
ALT: `in einem Block (spacing) und Themen gemischt statt nacheinander üben (interleaving)`
NEU: `in einem Block (*spacing*) und Themen gemischt statt nacheinander üben (*interleaving*)`

### 2c. Veraltete Verweise → `@sec-…` (Aufgabe 2)

Kapitelzählung heute: Kap. 1 Einleitung (1.1 `sec-nutzung`, 1.2 `sec-risiken`, 1.3 `sec-was-hilft`, 1.4 `sec-kapiteluebersicht`), Kap. 2 Grundbegriffe, Kap. 3 Didaktik (3.1 `sec-ziele-genai` … 3.4 `sec-lerntechniken`), Kap. 4 Szenarien (4.1.2 `sec-recherche`, 4.2.1 `sec-cyborg-writing`, 4.2.2 `sec-coding`, 4.3 `sec-tutor`, 4.4 `sec-simulator`, 4.4.2 `sec-goal-play`), Kap. 5 (5.4 `sec-pruefen`). Anhänge: A `sec-prompts-ueberblick`, B `sec-prompts`, C `sec-rollenspiele`, D `sec-fortgeschrittene-nutzung`. Die alten „Kap. 1.x“-Angaben stammen aus der Zeit, als Kap. 1 die Grundbegriffe enthielt; sie zeigen heute auf falsche Abschnitte.

**GL-16** (Z. 38) Halluzination. Kap. 4.3 = KI als Tutor (`sec-tutor`, Musterlösungen in `sec-complex-tutors`, eigene Quellen in `sec-tutor-betrieb`); Kap. 2 Discernment verweist selbst auf den Tutor.
ALT: `(@sec-hallucinations; Kap. 4.3)`
NEU: `(@sec-hallucinations; @sec-tutor)`

**GL-17** (Z. 43) Reasoning-Modell. Denkzeit/test-time compute und „darauf beruhen die Reasoning-Modelle“ in `sec-capabilities` (Kap. 2 Z. 293); Definition „denken vor der Antwort in mehreren Schritten nach“, Denkstufe in `sec-model-choice` (Z. 395). Kap. 1.4 ist heute die Kapitelübersicht.
ALT: `zuverlässiger als ihre schnellen Varianten (Kap. 1.4)`
NEU: `zuverlässiger als ihre schnellen Varianten (@sec-capabilities; @sec-model-choice)`

**GL-18** (Z. 53) Zentaur und Cyborg. Kap. 4.2.1 = „Besser schreiben – als Cyborg“ (`sec-cyborg-writing`), passt.
ALT: `(@sec-arbeitsweisen; Kap. 4.2.1)`
NEU: `(@sec-arbeitsweisen; @sec-cyborg-writing)`

**GL-19** (Z. 68) System-Prompt. Anhang-Buchstaben stimmen noch (A = Gezielte Einschränkungen, B = Prompt-Sammlung); Umstellung nur zur Robustheit, optional. B präzisiert auf den Abschnitt „System-Prompt für typische Anforderungen erstellen“.
ALT: `über den System-Prompt gebaut (Anhang A, B)`
NEU: `über den System-Prompt gebaut (@sec-prompts-ueberblick; @sec-prompt-systemprompt)`

**GL-20** (Z. 96) Harness. Eingeführt in `sec-harness` („Der Name für das Gewachsene: Harness“); Kap. 1.2 ist heute „Was geht schief?“.
ALT: `(Kap. 1.2; @sec-harness)`
NEU: `(@sec-harness)`

**GL-21** (Z. 99) Deep Research. „Research-Harnesses („Deep Research“, Recherche-Agenten)“ in `sec-capabilities` (Z. 339); Tays vier Typen (einmalig/iterativ × Liste/Zusammenfassung) in `sec-recherche` (= Kap. 4.1.2, passt).
ALT: `(Kap. 1.2, 4.1.2)`
NEU: `(@sec-capabilities; @sec-recherche)`

**GL-22** (Z. 104) Skill. Erstnennung „Skills (bei Bedarf geladene Gebrauchsanweisungen)“ in `sec-delegation` (Z. 261), Definition in `sec-agenten-praxis` (Z. 737).
ALT: `Modulares Wissen zum Hinzubuchen (Kap. 1.2, 1.4)`
NEU: `Modulares Wissen zum Hinzubuchen (@sec-delegation; @sec-agenten-praxis)`

**GL-23** (Z. 107) Konnektor (MCP). MCP eingeführt in `sec-harness` (Z. 201, USB-Bild); „Akademische Konnektoren … lizenzierte Volltexte“ in `sec-recherche` (Kap. 4 Z. 211, = 4.1.2, passt).
ALT: `dokumentiert ist (Kap. 4.1.2)`
NEU: `dokumentiert ist (@sec-harness; @sec-recherche)`

**GL-24** (Z. 112) Artifact. Kap. 4.2.2 = „Jeder kann jetzt programmieren“ (`sec-coding`, Z. 388 „Interaktive Simulationen mit den Claude Artifacts erstellen“), passt.
ALT: `(@sec-definitionen; Kap. 4.2.2)`
NEU: `(@sec-definitionen; @sec-coding)`

GL-25 (Z. 117, kein eigener Block) Custom GPT – zusammen mit dem Nebenfund „Abschaltung“ in GL-34 (dort).

**GL-26** (Z. 127) Erwünschte Schwierigkeiten. Erstnennung mit Englisch in Kap. 1 Z. 79 (Verweis auf `sec-was-hilft`), Bjork in `sec-was-hilft` (Z. 92); Kap. 3.1 = `sec-ziele-genai` (Z. 69), passt; Anhang A Z. 3.
ALT: `(Kap. 1.6, 3.1, Anhang A)`
NEU: `(@sec-was-hilft; @sec-ziele-genai; @sec-prompts-ueberblick)`

**GL-27** (Z. 130) Testgestütztes Lernen. Kap. 3.4 = `sec-lerntechniken` (Z. 144), passt.
ALT: `den Aufwand, sie zu erstellen (Kap. 3.4)`
NEU: `den Aufwand, sie zu erstellen (@sec-lerntechniken)`

**GL-28** (Z. 135) Spacing und Interleaving. 3.4 = `sec-lerntechniken` (Z. 130–140). 5.2 ist heute „Ausrichtung der Anpassungen nach Empfehlungen der Lernforschung“ (Kap. 5 Z. 69, behandelt Spacing & Interleaving, passt inhaltlich), hat aber **keine ID** → hier weggelassen, s. Abschnitt 3.
ALT: `das passende Werkzeug für ein Problem zu wählen (Kap. 3.4, 5.2)`
NEU: `das passende Werkzeug für ein Problem zu wählen (@sec-lerntechniken)`

**GL-29a** (Z. 140) Fragebasierte Ausarbeitung. `sec-lerntechniken` (Z. 158).
ALT: `können solche Fragen stellen (Kap. 3.4)`
NEU: `können solche Fragen stellen (@sec-lerntechniken)`

**GL-29b** (Z. 145) ICAP. Kap. 3 Z. 160 (`sec-lerntechniken`); Anhang C Z. 46 (Kapitelanfang `sec-rollenspiele`, Chi & Wylie 2014).
ALT: `KI-gestützte Lernaktivität sein kann (Kap. 3.4, Anhang C)`
NEU: `KI-gestützte Lernaktivität sein kann (@sec-lerntechniken; @sec-rollenspiele)`

**GL-29c** (Z. 148) Kognitive Belastung. Kap. 3.1 = `sec-ziele-genai` (Z. 69 „*cognitive load*“), passt; Anhang A Z. 14–16 („Eine Frage pro Zug“).
ALT: `etwa auf eine Frage pro Zug (Kap. 3.1, Anhang A)`
NEU: `etwa auf eine Frage pro Zug (@sec-ziele-genai; @sec-prompts-ueberblick)`

**GL-29d** (Z. 153) Scaffolding. Buchstaben stimmen (Anhang B Prompts, Anhang C Z. 85–93, 132); Umstellung optional.
ALT: `Grundmuster sokratischer Tutor-Prompts (Anhang B, C)`
NEU: `Grundmuster sokratischer Tutor-Prompts (@sec-prompts; @sec-rollenspiele)`

**GL-29e** (Z. 156) Protégé-Effekt. Kap. 4.4.2 = `sec-goal-play` (Z. 705–706 „Teach the AI“, „Protégé-Effekt“), passt; in Anhang B steht „Lernen durch Lehren (Learning by Teaching)“ im Prompt „Goal Play – Zielsetzung üben“ (Z. 2135).
ALT: `die Studierenden lehren (Kap. 4.4.2, Anhang B)`
NEU: `die Studierenden lehren (@sec-goal-play; @sec-prompt-goal-setting)`

**GL-29f** (Z. 161) Vier Rollen. Kapitelanfang Kap. 4 (Z. 4, 38).
ALT: `stellt sie Übungssituationen bereit (Kap. 4)`
NEU: `stellt sie Übungssituationen bereit (@sec-szenarien)`

**GL-29g** (Z. 166) Role Play und Goal Play. 4.4.1 `sec-role-play`, 4.4.2 `sec-goal-play`.
ALT: `Wissen an, das der KI-Figur fehlt (Kap. 4.4)`
NEU: `Wissen an, das der KI-Figur fehlt (@sec-role-play; @sec-goal-play)`

**GL-29h** (Z. 171) Debriefing und Human in the Loop. Kap. 4 Z. 719 (Teil von 4.4 `sec-simulator`), Anhang C Z. 123, 197, 229.
ALT: `die Verantwortung behält (Kap. 4.4, Anhang C)`
NEU: `die Verantwortung behält (@sec-simulator; @sec-rollenspiele)`

**GL-29i** (Z. 176) Vier-Säulen-Modell. 5.4 = `sec-pruefen` (Z. 108 Gmeiner), passt.
ALT: `ohne die KI-Nutzung zu verbieten (Kap. 5.4)`
NEU: `ohne die KI-Nutzung zu verbieten (@sec-pruefen)`

**GL-29j** (Z. 181) Homework Apocalypse. Erstnennung Kap. 1 Z. 108 (`sec-kapiteluebersicht`), ausführlich Kap. 5 Z. 98–102 (`sec-pruefen`). „Kap. 1.6“ gibt es nicht mehr.
ALT: `empfundene Sinnlosigkeit der Aufgabe (Kap. 1.6, 5.4)`
NEU: `empfundene Sinnlosigkeit der Aufgabe (@sec-kapiteluebersicht; @sec-pruefen)`

### 2d. elaborative → explanatory questioning (Aufgabe 3)

**GL-10** (Z. 139)
ALT: `Fragebasierte Ausarbeitung (elaborative questioning)`
NEU: `Fragebasierte Ausarbeitung (*explanatory questioning*)`

**GL-11** (Z. 142) Herkunftszeile passt nach GL-10 nicht mehr zum Begriff.
ALT: `*Herkunft:* lat. *elaborare*, „herausarbeiten“.`
NEU: `*Herkunft:* *explanatory* zu lat. *explanare*, „ausbreiten, deutlich machen“, von *planus*, „eben, flach“: Erklären heißt, etwas glatt auszubreiten.`

### 2e. Scaling Laws → Skalierungsgesetze (Aufgabe 4, Ersatz statt Doppeleintrag)

Das Glossar hat schon „Scaling Laws“ (Z. 121). Ein zusätzlicher Eintrag „Skalierungsgesetz“ wäre ein Doppel; daher Umbau des vorhandenen Eintrags. Kap. 2 verwendet den Plural: „zwei **Skalierungsgesetze** (*scaling laws*)“ (Z. 293). Die alte Definition nennt „Training Scaling“ und „Inference Scaling“, Begriffe, die im Buch nicht vorkommen; Kap. 2 spricht von Training und „Denkzeit“ (*test-time compute*). Herkunftszeile Z. 124 bleibt.

**GL-30** (Z. 121)
ALT: `Scaling Laws`
NEU: `Skalierungsgesetze (*scaling laws*)`

**GL-31** (Z. 122)
ALT: `Erfahrungsregeln, nach denen Modelle mit mehr Trainingsdaten und Rechenleistung verlässlich besser werden (Training Scaling) und bessere Antworten geben, wenn ihnen mehr Rechenzeit beim Antworten gegeben wird (Inference Scaling) (@sec-capabilities).`
NEU: `Zwei Erfahrungsregeln, die erklären, warum die Modelle so schnell besser werden. Erstens sinkt der Vorhersagefehler verlässlich, je mehr Daten, Rechenleistung und Parameter ins Training fließen, sofern Daten und Modellgröße im Gleichschritt wachsen. Zweitens liefert ein fertig trainiertes Modell bessere Lösungen, wenn es vor der Antwort mehr Denkzeit (*test-time compute*) bekommt; darauf beruhen die Reasoning-Modelle (@sec-capabilities).`

Vollständiger Block nach Umbau (zur Kontrolle):

```markdown
Skalierungsgesetze (*scaling laws*)
:   Zwei Erfahrungsregeln, die erklären, warum die Modelle so schnell besser werden. Erstens sinkt der Vorhersagefehler verlässlich, je mehr Daten, Rechenleistung und Parameter ins Training fließen, sofern Daten und Modellgröße im Gleichschritt wachsen. Zweitens liefert ein fertig trainiertes Modell bessere Lösungen, wenn es vor der Antwort mehr Denkzeit (*test-time compute*) bekommt; darauf beruhen die Reasoning-Modelle (@sec-capabilities).

    *Herkunft:* *scale* zu lat. *scala*, „Treppe, Leiter“: Stufe um Stufe besser.
```

Beleg: Kap. 2 Z. 293–295 (@kaplan2020, @hoffmann2022, @openai2024, @snell2024). Option: Eintrag an die Stelle nach „Jagged Frontier“ verschieben (gleicher Abschnitt `sec-capabilities`); nicht als ALT/NEU, weil Verschieben mehrzeilig ist.

### 2f. Nebenfunde mit eindeutiger Korrektur (Begründung in Abschnitt 4)

**GL-32** (Z. 30) RLHF
ALT: `Reinforcement Learning with Human Feedback`
NEU: `Reinforcement Learning from Human Feedback`

**GL-33** (Z. 91) Agent als Betriebsweise (Kap. 2)
ALT: `Ein Sprachmodell, das nicht nur antwortet, sondern handelt: Es nutzt Werkzeuge`
NEU: `Eine Betriebsweise aus Modell und Harness, in der das Modell seinen Ablauf selbst steuert: Es nutzt Werkzeuge`

**GL-35** (Z. 91) Agent: Abgrenzung zum Workflow und Verweis auf die Einführungsstelle
ALT: `Bildlich: der Werkzeugkoffer neben dem Bücherregal (@sec-patterns-usage).`
NEU: `Anders als in einem Workflow folgt der Ablauf keinem vorgegebenen Pfad. Bildlich: der Werkzeugkoffer neben dem Bücherregal (@sec-harness; @sec-patterns-usage).`

**GL-34** (Z. 117) Custom GPT: Abschaltung und veralteter Verweis (ersetzt GL-25)
ALT: `Die einfachste Form, einen Tutor oder eine Simulation in die Lehre zu bringen (Kap. 1.5, Anhang B).`
NEU: `Eine einfache Form, einen Tutor oder eine Simulation in die Lehre zu bringen. OpenAI schaltet Custom GPTs am 11. Dezember 2026 ab; was bleibt, ist die Anweisung, die in jedem Chatwerkzeug funktioniert (@sec-cyborg-writing; @sec-d-arbeitsumgebung).`

**GL-40** (Z. 52) Schreibweise wie Kap. 2 („Centaur“, 6×; „Zentaur“ 0× im Buch)
ALT: `Zentaur und Cyborg`
NEU: `Centaur und Cyborg`

**GL-41** (Z. 53)
ALT: `Der Zentaur teilt die Arbeit sauber auf`
NEU: `Der Centaur teilt die Arbeit sauber auf`

**GL-36** (Z. 175) Wortlaut wie Kap. 5 Z. 108 („Vier-Säulen-Ansatz nach Gmeiner“); niedrige Priorität
ALT: `Vier-Säulen-Modell`
NEU: `Vier-Säulen-Ansatz`

### 2g. Neue Einträge (Aufgabe 4)

Wortlaut der Begriffe wie Kap. 2 (`sec-4d`, Tab. 4D, Z. 57–70) und Kap. 4 (`sec-coding`, Z. 407). Quelle des 4D-Modells im Buch: @dakan2025 (Rick Dakan und Joseph Feller, „The AI Fluency Framework“, Version 1.1, herausgegeben von der irischen Higher Education Authority, CC BY-SA 4.0, https://aifluencyframework.org/) und @dakan2025teaching (Kurs „Teaching AI Fluency“ in der Anthropic Academy, Quelle der zwei Schleifen). Das Glossar nennt wie in den übrigen Einträgen Namen, keine Zitierschlüssel. Herkunftszeilen der vier D übernommen aus Tab. 4D, Spalte „Herkunft des Wortes“.

Einfügeort N1–N5: **nach dem Eintrag „Sprachmodell, Large Language Model (LLM)“** (nach Z. 13, vor „GPT“), in dieser Reihenfolge; Kap. 2 beginnt heute mit dem 4D-Modell, die Technikbegriffe (GPT, Token …) gehören zur Vertiefung am Kapitelende.

**N1 AI Fluency**

```markdown
AI Fluency
:   „Gewandtheit im Umgang mit KI“: die Fähigkeit, effektiv, effizient, ethisch und sicher mit KI zu arbeiten. Der Kompetenzrahmen von Rick Dakan und Joseph Feller zerlegt sie in vier Kompetenzen, das 4D-Modell aus Delegation, Description, Discernment und Diligence, mit je drei Unterkompetenzen. Kapitel 2 ist danach gegliedert (@sec-4d).

    *Herkunft:* engl. *fluency* über lat. *fluentia* zu *fluere*, „fließen“: Wer eine Sprache fließend spricht, muss nicht über jedes Wort nachdenken.
```

**N2 Delegation**

```markdown
Delegation
:   Die erste der vier Kompetenzen im 4D-Modell: entscheiden, was der Mensch übernimmt und was die KI. Dazu gehört, das eigene Ziel zu kennen, zu wissen, was die verfügbaren Werkzeuge können, und die Arbeit danach aufzuteilen. Bildet mit Diligence die äußere Schleife, die einmal je Vorhaben läuft (@sec-4d; @sec-delegation).

    *Herkunft:* lat. *delegare*, „übertragen“.
```

**N3 Description**

```markdown
Description
:   Die zweite Kompetenz im 4D-Modell: der KI klar sagen, was man will, also welches Ergebnis, welche Art der Zusammenarbeit und welches Verhalten. Im Alltag heißt das vor allem, gute Prompts zu schreiben. Bildet mit Discernment die innere Schleife, die sich in jedem Arbeitsgang mehrmals dreht (@sec-4d; @sec-access).

    *Herkunft:* lat. *describere*, „umreißen, aufzeichnen“.
```

**N4 Discernment**

```markdown
Discernment
:   Die dritte Kompetenz im 4D-Modell: beurteilen, was die KI liefert, also das Ergebnis, den Verlauf der Zusammenarbeit und das Verhalten der KI. Nötig, weil ein Sprachmodell keine Wahrheit prüft und über sein eigenes Vorgehen nicht verlässlich Auskunft gibt (@sec-4d; @sec-hallucinations).

    *Herkunft:* lat. *discernere*, „unterscheiden, trennen“.
```

**N5 Diligence**

```markdown
Diligence
:   Die vierte Kompetenz im 4D-Modell: KI verantwortlich und offen einsetzen, also sorgfältig beim Erzeugen, offen darüber, wo KI mitgearbeitet hat, und prüfend, bevor ein Ergebnis oder ein System freigegeben wird. Die Technik verschiebt die Verantwortung, sie nimmt sie nicht ab (@sec-4d; @sec-diligence).

    *Herkunft:* lat. *diligentia*, „Sorgfalt“, von *diligere*, „hochachten, sorgsam auswählen“.
```

Einfügeort N6: **nach dem Eintrag „Deep Research“** (nach Z. 101, vor „Skill“): zweiter Agententyp nach dem Recherche-Agenten. Eingeführt (fett, mit Definition) in Kap. 4 `sec-coding` Z. 407; Kap. 2 nennt ihn nur beiläufig (Z. 235 „Programmieragenten Codex“).

**N6 Programmier-Agent**

```markdown
Programmier-Agent (*coding agent*)
:   Ein Agent für Programmierarbeit: Er bekommt einen Auftrag in Alltagssprache, liest die vorhandenen Dateien, ändert mehrere davon, startet Tests und meldet das Ergebnis. Ein Copilot ergänzt die Zeile, die man gerade schreibt; der Programmier-Agent arbeitet in der Schleife aus Denken, Handeln und Beobachten, und der Mensch beschreibt, prüft und entscheidet. Beispiele sind Claude Code und Codex (@sec-coding).

    *Herkunft:* *Programm* über lat. *programma* zu griech. *prógramma*, „öffentliche schriftliche Bekanntmachung“, von *prographein*, „vorher schreiben“.
```

**N7 Skalierungsgesetze**: als Umbau des vorhandenen Eintrags „Scaling Laws“ an Ort und Stelle (Z. 121), s. 2e (GL-30, GL-31).

## 3. Nicht bestätigt / bewusst weggelassen

- **Vier Rollen: Hiwi, Copilot, Tutor, Simulator:** kein englischer Sammelbegriff. Die Quellen in Kap. 4 (mollick2023a „Assigning AI: Seven Approaches …“, mollick2024a) ordnen anders; „Hiwi“ ist die deutsche Lesart des Buchs. Copilot, Tutor, Simulator sind ohnehin englisch/international.
- **Vier-Säulen-Modell:** Quelle deutschsprachig (gmeiner2025, „Ohne Shortcut zur Leistung …“), kein englischer Fachbegriff.
- **Reasoning-Modell, Few-Shot-Beispiele, System-Prompt:** englischer Teil steht schon im Begriff; keine Klammer nötig.
- **Programmier-Agent, Schreibweise:** im Buch drei Formen: „Programmier-Agent“ (Kap. 4 Z. 407, fett eingeführt), „Programmieragent“ (Kap. 2 Z. 235, 430; modelluebersicht Z. 22), „Coding-Agent“ (Kap. 2 Z. 743, 765). N6 folgt der fett eingeführten Form; Vereinheitlichung entscheidet Roman.
- **Kap. 5.2 ohne ID:** „Ausrichtung der Anpassungen nach Empfehlungen der Lernforschung“ (kapitel05.qmd Z. 69) behandelt Spacing & Interleaving, testgestütztes Lernen und fragebasierte Ausarbeitung, hat aber keine `{#sec-…}`. Wenn Roman dort z. B. `{#sec-lernforschung-anpassung}` ergänzt, könnten GL-27, GL-28, GL-29a zusätzlich darauf verweisen. Nicht vorgeschlagen, weil es eine Buchdatei außerhalb des Pakets betrifft.
- **Variante 2** (eigene Zeile `*Englisch:*`): entfällt nach Romans Entscheidung.
- Die in Teil 1 unbestätigten Begriffe (situational barriers, learning by teaching, problem-based learning, deliberate practice, standardized work, Engpass) kommen im Glossar nicht als Begriffszeile vor.

## 4. Nebenfunde (Aufgabe 6, Kapiteltext maßgeblich)

1. **RLHF falsch ausgeschrieben** (Z. 30): Glossar „Reinforcement Learning *with* Human Feedback“, Kap. 2 Z. 704 „*Reinforcement Learning from Human Feedback*, **RLHF**“; „from“ ist die etablierte Form. → GL-32.
2. **Custom GPT veraltet** (Z. 117): Glossar nennt Custom GPTs „die einfachste Form“, das Buch meldet ihre Abschaltung am 11.12.2026 (Kap. 4 Z. 314 mit @openai2026gptretirement; Anhang D Z. 184: „beim Umzug wird die Anleitung zum Skill“). Verweis „Kap. 1.5“ existiert nicht mehr. → GL-34. Außerhalb des Pakets: Kap. 2 Tab. `tbl-modellstand` Z. 427 „eigene „GPTs“ lassen sich als Tutoren teilen“ (ebenso modelluebersicht.qmd) ohne Hinweis auf die Abschaltung einen Monat nach Drucklegung.
3. **Agent als „Sprachmodell“** (Z. 91): Kap. 2 trennt ausdrücklich: Modell und Harness sind Bauteile, der Agent ist „eine Betriebsweise: Das Modell steuert seinen Ablauf selbst“ (Tab. `tbl-modell-harness-agent`, Z. 183), Abgrenzung zum Workflow nach @schluntz2024agents (Z. 210). Eingeführt in `sec-harness`, nicht erst in `sec-patterns-usage`. → GL-33, GL-35.
4. **Zentaur/Centaur** (Z. 52–53): Kap. 2 schreibt durchgängig „Centaur“ (Überschrift `sec-arbeitsweisen`, Z. 476, Z. 500, Abb. Z. 492/509, Kernaussage Z. 871). → GL-40, GL-41. Alternative: Glossar behält „Zentaur“, dann GL-40/41 ausschließen und „(*centaur*, *cyborg*)“ in die Begriffszeile (Beleg Abschnitt 1a). Die Definition nennt „Zwei Arbeitsweisen“; Kap. 2 hat inzwischen fünf (bis zur dunklen Fabrik). Nicht falsch, aber unvollständig.
5. **Scaling Laws**: Begriffe „Training Scaling/Inference Scaling“ stehen nicht im Buch; Kap. 2 nutzt „Skalierungsgesetze“ und „Denkzeit (*test-time compute*)“. → GL-30, GL-31.
6. **Fragebasierte Ausarbeitung**: Herkunftszeile *elaborare* gehört zum alten Begriff. → GL-11.
7. **Harness** (Z. 96, ohne ALT/NEU): „die Ausstattung, die ein Modell zum Agenten macht“ steht in Spannung zu Kap. 2 Z. 191 „Jeder Agent braucht einen Harness, aber nicht jeder Harness macht einen Agenten“. Vorschlag zur Wahl: „die Ausstattung, mit der ein Modell als Agent handeln kann“.
8. **Deep Research** (Z. 99, ohne ALT/NEU): „Ein Agent für Recherche“; Kap. 4 Z. 179 nach Tay: Die meisten akademischen Deep-Research-Tools liegen „am verdrahteten Ende“, sind also eher Workflows. Vorschlag: „Ein Recherche-Werkzeug, das …“.
9. **Artifact** (Z. 112, ohne ALT/NEU): „So wurden die interaktiven Elemente dieses Buchs gebaut“ ist zu pauschal. Kap. 4 Z. 367: Die Lernspiele entstanden „mit Hilfe von Sprachmodellen … (Gemini, ChatGPT, Claude)“, die Animationen u. a. mit Claude Code (Z. 410). Vorschlag: „So entstanden etwa die Lernspiele in Kapitel 2.“
10. **Vier Rollen** (Z. 161, ohne ALT/NEU): Glossar „als Copilot ermöglicht sie, was man allein nicht könnte“, Kap. 4 Z. 38 „als Copilot arbeitet sie mit“. Kleine Unschärfe.
11. **Vier-Säulen-Modell** heißt in Kap. 5 „Vier-Säulen-Ansatz“ (Z. 108), sonst „vier Säulen nach Gmeiner“. → GL-36 (optional).
12. **Skill** (Z. 104, ohne ALT/NEU): „das einem Modell … mitgegeben wird“ unterschlägt das Kennzeichen aus Kap. 2 Z. 737–743: Der Agent lädt die Anleitung erst bei Bedarf. Optional: „das ein Agent bei Bedarf lädt“.
13. **AI Fluency, Zuschreibung**: Der Auftrag nennt das „Anthropic AI Fluency Framework“. Laut references.json und Kap. 2 Z. 104 stammt der Rahmen von Rick Dakan und Joseph Feller (Ringling College, University College Cork; v1.1 bei der irischen HEA); Anthropic bietet den Kurs „Teaching AI Fluency“ an (@dakan2025teaching). N1 nennt deshalb Dakan und Feller, nicht Anthropic.

## 5. Kennzahlen

- Englischer Begriff in Begriffszeile (Typ A): 8 (GL-01, 03, 04, 06, 07, 10, 13, 30), davon 3 nur zeilengenau anwendbar (GL-03, 04, 06); Typ A (Format): 7 (GL-02, 05, 08, 09, 12, 14, 15).
- Verweise auf `@sec-…`: 18 (GL-16–24, 26–28, 29a–29j, ohne GL-25, das in GL-34 aufgeht); davon 2 nur Robustheit (GL-19, GL-29d: Anhang-Buchstaben stimmen).
- Herkunft/Definition: GL-11, GL-31; Nebenfunde mit ALT/NEU: GL-32, 33, 34, 35, 36, 40, 41.
- Neue Einträge: 6 Blöcke (N1–N6) + Umbau „Scaling Laws“ (N7 = GL-30/31). Glossar danach 46 Einträge.
- Mehrwörter (Englisch-Ergänzungen in Begriffszeilen, ohne Format und ohne den Austausch in GL-10): 11 Wörter.
- Prüfskript (ALT-Zählung, ganze Zeile, Überlappung): Ergebnis s. unten.

Prüfskript (`/tmp/glcheck/pruef.py`, Regex wie `anwenden.py`): 46 ALT/NEU-Blöcke erkannt, alle einzeilig. 43 ALT mit `grep -c -F` = 1; GL-03 (F = 2), GL-04 (F = 3), GL-06 (F = 3) nur als ganze Zeile eindeutig (`grep -c -x -F` = 1). Keine Überlappung der ALT-Fundstellen. Alle 31 verwendeten `@sec-…` (NEU-Texte und neue Einträge) existieren als `{#sec-…}` in den .qmd. Probelauf auf einer Kopie: `anwenden.py … GL-03,GL-04,GL-06` → „43 von 46 angewandt“, danach die drei `sed`-Befehle; anschließend 0 Treffer für „Kap. <Zahl>“ oder „Anhang <Buchstabe>“ im Glossar. `glossar.qmd` im Repo unverändert.

## 6. Inhalt für `data/glossar-stufen.yml` (Aufgabe 5)

Schlüssel = Begriffszeile nach Einspielen der Vorschläge, ohne den kursiven englischen Teil (bei Mischklammern bleibt das Akronym). Falls GL-40 (Centaur) oder GL-36 (Ansatz) ausgeschlossen werden, Schlüssel entsprechend auf „Zentaur und Cyborg“ bzw. „Vier-Säulen-Modell“ ändern. Verteilung: 16 grund, 16 fortgeschritten, 14 experte.

| Begriff | Stufe | Begründung |
|:--|:--|:--|
| Generative KI (GenAI) | grund | Sammelbegriff, ohne den kein Kapitel lesbar ist. |
| Sprachmodell (LLM) | grund | Kernbegriff von Kap. 2; erklärt, warum KI nicht auf Wahrheit prüft. |
| AI Fluency | grund | Ordnet Kap. 2 und die Rollenabsätze in Kap. 4. |
| Delegation | grund | Erste der vier Kompetenzen, Leitfrage für jede Lehraufgabe. |
| Description | grund | Zweite Kompetenz, Grundlage jedes Prompts. |
| Discernment | grund | Dritte Kompetenz; Prüfen gehört zu jeder Nutzung. |
| Diligence | grund | Vierte Kompetenz; Verantwortung und Offenlegung betreffen alle Lehrenden. |
| Halluzination | grund | Wichtigstes Risiko, das Lehrende Studierenden erklären müssen. |
| Jagged Frontier | grund | Begründet in Kap. 1–2, warum man an eigenen Aufgaben testet. |
| Prompt | grund | Basis jeder Interaktion mit einem Sprachmodell. |
| RAG (Retrieval-Augmented Generation) | grund | Kap. 2 nennt das Setup mit eigenem Material den richtigen Einstieg. |
| Agent | grund | Einer der drei Grundbegriffe von Kap. 2 (Modell, Harness, Agent). |
| Harness | grund | Einer der drei Grundbegriffe von Kap. 2. |
| Erwünschte Schwierigkeiten | grund | Zentrales Argument in Kap. 1 und 3 gegen Chatbots ohne Bremsen. |
| Testgestütztes Lernen | grund | Am besten belegte Lerntechnik in Kap. 3. |
| Homework Apocalypse | grund | Sorge, mit der Kap. 1 einsteigt; prägt die Prüfungsfrage. |
| Kontextfenster | fortgeschritten | Wird wichtig, sobald man Material in eigene Bots lädt. |
| Reasoning-Modell | fortgeschritten | Für die Modellwahl beim Bau eigener Werkzeuge. |
| Centaur und Cyborg | fortgeschritten | Arbeitsweisen, die man beim Gestalten von KI-Aufgaben bewusst wählt. |
| Prompt Engineering | fortgeschritten | Systematisches Prompten für wiederverwendbare Bots. |
| System-Prompt | fortgeschritten | Kernbaustein jedes eigenen Tutors oder Simulators. |
| Skill | fortgeschritten | Baustein des äußeren Harness für eigene Arbeitsumgebungen. |
| Artifact | fortgeschritten | Weg, Lernspiele und Simulationen selbst zu bauen. |
| Custom GPT, Projekt | fortgeschritten | Einfachste Form, einen eigenen Bot zu teilen. |
| Spacing und Interleaving | fortgeschritten | Wird beim Planen KI-gestützter Aufgabenserien gebraucht. |
| Fragebasierte Ausarbeitung | fortgeschritten | Grundlage für Warum-Fragen in Tutor-Bots und Simulationen. |
| Kognitive Belastung | fortgeschritten | Begründet Einschränkungen in didaktischen Prompts (Anhang A). |
| Scaffolding | fortgeschritten | Grundmuster sokratischer Tutor-Prompts. |
| Vier Rollen: Hiwi, Copilot, Tutor, Simulator | fortgeschritten | Ordnet in Kap. 4 die eigenen Einsatzideen. |
| Role Play und Goal Play | fortgeschritten | Unterscheidet die zwei Simulationsformen beim Bau eigener Übungen. |
| Debriefing und Human in the Loop | fortgeschritten | Pflichtschritt jeder selbst gebauten Simulation. |
| Vier-Säulen-Ansatz | fortgeschritten | Für die Umgestaltung eigener Prüfungen (Kap. 5). |
| GPT | experte | Technische Auflösung eines Produktnamens. |
| Token | experte | Technische Einheit aus der Vertiefung von Kap. 2. |
| Embedding | experte | Rechenschritt im Modell, nur für technisches Verständnis. |
| Transformer und Attention | experte | Modellarchitektur, Vertiefung. |
| Pretraining und RLHF | experte | Trainingsverfahren, Vertiefung. |
| Chain of Thought | experte | Technik aus der Modellforschung, bei Reasoning-Modellen weitgehend eingebaut. |
| Few-Shot-Beispiele | experte | Fachwort aus der Modellforschung (few-shot learning). |
| Temperatur | experte | Technischer Parameter, meist nur über API einstellbar. |
| Deep Research | experte | Werkzeugklasse für Recherche und Forschung. |
| Programmier-Agent | experte | Werkzeug für Softwarearbeit mit Code und Tests. |
| Konnektor (MCP) | experte | Technisches Protokoll zum Anschluss externer Dienste. |
| Skalierungsgesetze | experte | Forschungsbefund zur Modellentwicklung. |
| ICAP | experte | Theorie der Lernforschung, für Gestaltung nicht zwingend. |
| Protégé-Effekt | experte | Lernpsychologischer Fachbegriff hinter „Teach the AI“. |

```yaml
# data/glossar-stufen.yml – Schwierigkeitsstufen für das Glossar-Lernspiel
# Schlüssel: Begriffszeile ohne kursiven englischen Teil; Werte: grund | fortgeschritten | experte
"Generative KI (GenAI)": grund
"Sprachmodell (LLM)": grund
"AI Fluency": grund
"Delegation": grund
"Description": grund
"Discernment": grund
"Diligence": grund
"GPT": experte
"Token": experte
"Embedding": experte
"Transformer und Attention": experte
"Pretraining und RLHF": experte
"Kontextfenster": fortgeschritten
"Halluzination": grund
"Reasoning-Modell": fortgeschritten
"Jagged Frontier": grund
"Centaur und Cyborg": fortgeschritten
"Prompt": grund
"Prompt Engineering": fortgeschritten
"System-Prompt": fortgeschritten
"Few-Shot-Beispiele": experte
"Chain of Thought": experte
"Temperatur": experte
"RAG (Retrieval-Augmented Generation)": grund
"Agent": grund
"Harness": grund
"Deep Research": experte
"Programmier-Agent": experte
"Skill": fortgeschritten
"Konnektor (MCP)": experte
"Artifact": fortgeschritten
"Custom GPT, Projekt": fortgeschritten
"Skalierungsgesetze": experte
"Erwünschte Schwierigkeiten": grund
"Testgestütztes Lernen": grund
"Spacing und Interleaving": fortgeschritten
"Fragebasierte Ausarbeitung": fortgeschritten
"ICAP": experte
"Kognitive Belastung": fortgeschritten
"Scaffolding": fortgeschritten
"Protégé-Effekt": experte
"Vier Rollen: Hiwi, Copilot, Tutor, Simulator": fortgeschritten
"Role Play und Goal Play": fortgeschritten
"Debriefing und Human in the Loop": fortgeschritten
"Vier-Säulen-Ansatz": fortgeschritten
"Homework Apocalypse": grund
```
