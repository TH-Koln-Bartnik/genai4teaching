# Fachbegriffe Kapitel 1 (kapitel01.qmd) – Änderungsvorschläge S6

Stand: 2026-11-01, Branch `fachbegriffe-s6`. Repo nicht verändert. Alle ALT-Zeichenketten per `grep -c -F` geprüft: je genau 1 Treffer. Alle 12 Ersetzungen wurden testweise nacheinander auf eine Kopie angewandt (keine Überlappung, alle greifen): +22 Wörter netto.

## 1. Vorschläge

| Nr | Zeile | Typ | Begriff dt. | Begriff engl. | Beleg | Sicherheit |
|---|---|---|---|---|---|---|
| K1-01 | 48 | C/A | generative künstliche Intelligenz (KI) | *generative AI* | @bastani2025, Titel „Generative AI without guardrails …“ (references.json; doi:10.1073/pnas.2422633122); @lee2025, Abstract „Generative AI (GenAI)“ (doi:10.1145/3706598.3713778). Löst zugleich „AI“ in „AI-Sandwich“ (Z. 102) auf. | bestätigt |
| K1-02 | 48 | C | große Sprachmodelle | *Large Language Models*, LLM | @mollick2023a, Abstract „Large Language Models (LLMs)“ (references.json; doi:10.48550/arXiv.2306.10052). Nur Reihenfolge/Kursivierung an Regel C angepasst. | bestätigt |
| K1-03 | 48 | A | häufige kleine Tests | *practice testing* | @dunlosky2013, Abstract: „practice testing … received high utility assessments“ (references.json; doi:10.1177/1529100612453266) | bestätigt (Platzierung s. Hinweis) |
| K1-04 | 74 | A | Wissensarbeiter | *knowledge workers* | @lee2025, Titel „… From a Survey of Knowledge Workers“, Abstract „We survey 319 knowledge workers“ (references.json; doi:10.1145/3706598.3713778) | bestätigt |
| K1-05 | 79 | A | erwünschte Schwierigkeiten | *desirable difficulties* | @bjork2011, Titel „… Creating desirable difficulties to enhance learning“ (references.json); Glossar führt denselben Begriff | bestätigt |
| K1-06 | 82 | B | Reasoning | – (dt. Umschreibung) | Glossar „Reasoning-Modell“: „vor der Antwort schrittweise ‚nachdenkt‘“; Z. 87 „ohne Nachdenkphase“ | bestätigt (Umschreibung aus Glossar) |
| K1-07 | 82 | A | Werkzeugkasten | *harness* | @mollick2025e: „A harness is a system that lets the AI use tools, take actions, and complete multi-step tasks on its own.“ (https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the); Glossar „Harness“ verweist auf Kap. 1.2/@sec-harness | plausibel (Zuordnung Werkzeugkasten = harness ist Autorentscheidung) |
| K1-08 | 94 | A | Anleitung / Ermutigung | *guidance* / *encouragement* | @gallegos2026, Titel „Guidance over adoption …“; Abstract „The encouragement raises the GPT's awareness …“, „Guidance shifts interactions …“ (https://econpapers.repec.org/RePEc:iza:izadps:dp18513; IZA DP 18513) | bestätigt (Quellbegriffe, kein Standardterminus) |
| K1-09 | 102 | A | Leitplanke | *guardrail* | @bastani2025, Titel „Generative AI without guardrails can harm learning“ (references.json; doi:10.1073/pnas.2422633122) | bestätigt |
| K1-10 | 102 | A | Auslagerung (des Denkens) | *cognitive offloading* | @maier2026deskilling, Titel „… Metacognitive feedback reduces cognitive offloading to LLM assistants“, Begriff auch im Abstract (https://arxiv.org/abs/2609.20143) | bestätigt |
| K1-11 | 104 | A | KI-Verordnung | *AI Act* | @eu2024aiact (in references.json, in Kap. 1 nicht zitiert); EUR-Lex, amtl. Titel endet „(Artificial Intelligence Act)“ (https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) | bestätigt |
| K1-12 | 110 | B | Prompts | – (dt. Umschreibung) | Glossar „Prompt“: „Die Eingabe an ein Sprachmodell“ | bestätigt (Umschreibung aus Glossar) |

## 2. Ersetzungen

**K1-01** (Z. 48)
ALT: `**Wie kann generative künstliche Intelligenz** (KI)`
NEU: `**Wie kann generative künstliche Intelligenz** (KI, *generative AI*)`
Hinweis: „KI“ steht schon in Szene (Z. 6), Einschätzung (Z. 22) und Lernziel (Z. 41); Z. 48 ist die Stelle, an der der Autor den Begriff definiert.

**K1-02** (Z. 48)
ALT: `große Sprachmodelle (LLM, Large Language Models)`
NEU: `große Sprachmodelle (*Large Language Models*, LLM)`

**K1-03** (Z. 48)
ALT: `wie häufige kleine Tests oder individuelles Feedback`
NEU: `wie häufige kleine Tests (*practice testing*) oder individuelles Feedback`
Hinweis: Erstes Auftreten ist „Übungstests“ in der Eingangsszene (Z. 6). Eine Klammer würde die Erzählung stören; Z. 48 ist die erste Stelle mit Beleg. Falls Regel E streng gelten soll: Z. 6 `keine Übungstests geschafft` → `keine Übungstests (*practice tests*) geschafft`.

**K1-04** (Z. 74)
ALT: `In einer Befragung von 319 Wissensarbeitern`
NEU: `In einer Befragung von 319 Wissensarbeitern (*knowledge workers*)`

**K1-05** (Z. 79, Prüfkasten; erscheint laut `_filters/einschaetzung.lua` auch im Druck)
ALT: `nennt die Lernforschung erwünschte Schwierigkeiten`
NEU: `nennt die Lernforschung erwünschte Schwierigkeiten (*desirable difficulties*)`

**K1-06** (Z. 82)
ALT: `oft schwächere Modellvarianten ohne Reasoning`
NEU: `oft schwächere Modellvarianten ohne Reasoning (schrittweises Nachdenken)`

**K1-07** (Z. 82)
ALT: `mit kleinem Werkzeugkasten, und genau diesen Zugang`
NEU: `mit kleinem Werkzeugkasten (*harness*), und genau diesen Zugang`
Alternative, falls die Klammer näher am Verweis stehen soll: Z. 87 `Oberfläche und Werkzeugkasten (@sec-harness)` → `Oberfläche und Werkzeugkasten (*harness*, @sec-harness)`. Das wäre aber nicht das erste Auftreten.

**K1-08** (Z. 94)
ALT: `**Anleitung wirkt, Ermutigung nicht:**`
NEU: `**Anleitung (*guidance*) wirkt, Ermutigung (*encouragement*) nicht:**`
Hinweis: niedrigste Priorität, kann ohne Verlust entfallen.

**K1-09** (Z. 102)
ALT: `**Die Leitplanke gehört in Aufgabe und Rückmeldung.**`
NEU: `**Die Leitplanke (*guardrail*) gehört in Aufgabe und Rückmeldung.**`

**K1-10** (Z. 102)
ALT: `halbierte in einem Experiment die Auslagerung`
NEU: `halbierte in einem Experiment die Auslagerung (*cognitive offloading*)`
Hinweis: Vorher nur das Lernziel (Z. 42, ausgenommen) und Verbformen („lagern es aus“ Z. 52, „auslagert“ Z. 79). Z. 102 ist das erste Substantiv im Fließtext und die Stelle mit Beleg.

**K1-11** (Z. 104)
ALT: `Richtlinien im Rahmen der KI-Verordnung`
NEU: `Richtlinien im Rahmen der KI-Verordnung (*AI Act*)`

**K1-12** (Z. 110)
ALT: `Die Anhänge sammeln Prompts`
NEU: `Die Anhänge sammeln Prompts (Eingaben an die KI)`

## 3. Nicht bestätigt / bewusst weggelassen

- **HEPI, CHE** (Z. 52/63): erledigt (Vorgabe des Autors).
- **Fähigkeitsüberhang (*capability overhang*)** (Z. 68): erledigt.
- **„generally faster“** (Z. 48, fett): Der Folgesatz umschreibt es bereits („entstehen mit KI deutlich schneller“). Eine Übersetzung würde das Wortspiel mit *general-purpose technology* verlieren.
- **„Homework Apocalypse“** (Z. 108): Der Satz umschreibt es bereits („Entwertet KI Hausarbeiten, deren Ergebnis ein Sprachmodell in Minuten liefert“); außerdem gibt es einen Glossareintrag.
- **Copilot, Hiwi, Tutor, Simulator** (Z. 108): Die Umschreibung folgt jeweils direkt; die englischen Rollen bei @mollick2023a (AI-tutor, AI-simulator …) lauten gleich.
- **Agenten** (Z. 68): engl. *agents* lautet gleich, die Erklärung folgt in Z. 82.
- **Bloomsche Taxonomie** (Z. 54): engl. *Bloom's Taxonomy* (bestätigt bei @handa2025), aber gleichlautend; die Klammer bringt nichts.
- **Feldexperiment** (Z. 72): *field experiment* steht zwar im Abstract von @bastani2025, ist aber trivial.
- **betreute Lernzeiten** (Z. 94): @oreopoulos2026 schreibt „in-school supervised ed-tech support“; das ist kein feststehender Fachbegriff.
- **„Auto“-Auswahl** (Z. 82): Z. 87 erklärt es („automatisch gewählte Varianten“); @mollick2025e nennt es „auto“ mode.
- **Engpass** (Z. 120): Randbegriff in der Galerie; *bottleneck* bzw. *constraint* bei @goldratt2014 nicht an der Quelle geprüft → nicht bestätigt.
- **Zitate „I'm not using my brain at all“ (Z. 52) und Artikeltitel (Z. 74):** Zitate und Titel, keine Fachbegriffe.
- **metakognitives Feedback** (@maier2026deskilling): Der Begriff steht nicht im Text, nur umschrieben; keine neue Benennung (Kürze).

## Auffälligkeiten

1. **Zitatfehler Z. 74:** Im Text steht „Everybody is cheating their way through college“. Der Originaltitel lautet „Everyone Is Cheating Their Way Through College“ (references.json @walsh2025; NYMag). Bitte korrigieren.
2. **Glossarverweise veraltet:** „Erwünschte Schwierigkeiten“ und „Homework Apocalypse“ verweisen auf „Kap. 1.6“, „Reasoning-Modell“ auf „Kap. 1.4“, „Harness“ auf „Kap. 1.2“. Kap. 1 hat nach der Kürzung nur noch die Abschnitte 1.1–1.4; das Wort „Harness“ kommt in Kap. 1 nicht vor (nur `@sec-harness`).
