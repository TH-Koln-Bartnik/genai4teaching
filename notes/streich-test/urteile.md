# Streich-Test (P1): Urteile je Zeile

Stand 02.11.2026. Diese Tabelle ist die einzige Quelle für Zeilen, Urteile und Begründungen des Elements `interactions/streich-test-prompting.html`; `scripts/streich-test-daten.py` liest sie ein und bettet sie in die HTML-Datei ein. Änderungen an Zeilen oder Begründungen nur hier vornehmen und das Skript neu laufen lassen.

**Alter Prompt:** Quiz-Ersteller aus `kapitel07-appendix02-prompt-sammlung.qmd`, Stand `main` @ `df0f9bc` (letzter Stand vor Sitzung B; Branch `anhangB-prompts-neu` ist noch nicht gemergt). Zeilen 1–8 wörtlich, Auslassungen im Element als „[…]“. Zeilen 9 und 10 sind ergänzte Beispielzeilen (im Original fehlen Denkaufforderung, Selbstprüfbefehl und Trinkgeld; höchstens zwei Ergänzungen erlaubt, deshalb sind Denkaufforderung und Selbstprüfbefehl in einer Zeile zusammengefasst).

**Neuer Prompt:** Quiz-Ersteller aus Branch `anhangB-prompts-neu` @ `3c1b91f` (Entwurf, noch nicht gemergt; nach dem Merge von B Skript mit `--neu main`).

**Regeln.** Labor-Urteile (■) nur aus den im Status-Dokument geprüften Hersteller-Seiten, Wortlaut am 02.11.2026 erneut aufgerufen. Folklore (▲) nur für Ratschläge, die keine Hersteller-Doku je empfahl. Studie (●) für Urteile, die sich auf einen Test stützen. Zeilen, deren Inhalt bleibt und deren Form sich ändert, erhalten „umformulieren“.

**Wertung im Element.** Streichen: richtig, wenn gestrichen. Behalten: richtig, wenn nicht gestrichen. Umformulieren: „teils“, gleich wie entschieden; diese Zeilen zählen nie als Hyperkorrektur.

Spalte „Neu“ nennt das Label im neuen Prompt, das den Inhalt der Zeile aufnimmt (leer = entfällt). Zeilenumbrüche innerhalb einer Zelle als `<br>`.

| Nr | Zeile | Herkunft | Urteil | Marke | Quellen | Kurzzitat | Begründung | Neu |
|---|---|---|---|---|---|---|---|---|
| 1 | Du bist ein kompetenter Lehrassistent und Experte für Leistungsbewertung. | Original | umformulieren | Studie | basil2025; anthropic2026prompting | „Expert personas don't improve factual accuracy“ (Basil et al. 2025, Report 4) | Für die Genauigkeit bringt die Expertenrolle nichts: In sechs Modellen änderte sie die Trefferquote auf schweren Testfragen nicht signifikant. Was die Zeile mitteilt, wandert in den Kontext („für meine Lehrveranstaltung“); für den Ton und in Simulationen, wo die Rolle der Inhalt ist, bleibt sie sinnvoll. | Ziel |
| 2 | Du agierst strukturiert, präzise und didaktisch reflektiert. | Original | streichen | Labor-Doku | openai2026gpt55 | „Start with the smallest prompt that preserves the product contract“ (OpenAI 2026, Using GPT-5.5) | Drei Adjektive beschreiben einen Charakter, kein Ergebnis. Was „präzise“ heißen soll, steht im neuen Prompt prüfbar unter Abnahme. | |
| 3 | Phase 1 – Einstieg (Pflichtreihenfolge einhalten!) | Original | streichen | Labor-Doku | openai2026gpt55 | „Reduce or remove detailed step-by-step process guidance.“ (OpenAI 2026, Using GPT-5.5) | Reasoning-Modelle planen den Weg selbst; eine Phasen-Choreografie mit Ausrufezeichen ersetzt kein Ziel. Anders bei Tutoren und Simulationen: Dort ist der Ablauf das Produkt und bleibt. | |
| 4 | Warte zwingend auf die Antwort des Lehrers, bevor du fortfährst. | Original | umformulieren | Labor-Doku | anthropic2026prompting | „The fix is to soften any aggressive language.“ (Anthropic 2026, Prompting best practices) | Das Warten bleibt, denn das Modell soll erst fragen und dann bauen. „Zwingend“ entfällt: Neuere Modelle befolgen Anweisungen genauer, und Nachdruck führt eher zu Übereifer. Neu: „Eine Frage pro Nachricht.“ | Zuerst |
| 5 | Frage zusätzlich, welche typischen Schwierigkeiten oder Fehlvorstellungen auftreten könnten. | Original | behalten | Labor-Doku | anthropic2026prompting | „a brilliant but new employee who lacks context“ (Anthropic 2026, Prompting best practices) | Welche Fehlvorstellungen in Ihrem Kurs vorkommen, kann kein Modell wissen. Aus dieser Antwort entstehen die falschen Antwortoptionen; die Zeile liefert Kontext, keinen Lösungsweg. | Zuerst |
| 6 | - 5 Multiple-Choice-Fragen<br>- 2 offenen Fragen<br>- Anordnung von leicht → anspruchsvoll | Original | behalten | Labor-Doku | openai2026gpt55 | „State the expected outcome and success criteria.“ (OpenAI 2026, Using GPT-5.5) | Anzahl, Fragetyp und Reihenfolge sind Abnahmekriterien: Sie und das Modell können prüfen, ob das Ergebnis sie erfüllt. Genau diese Art Zeile wird wichtiger. | Abnahme |
| 7 | - Jede falsche MC-Antwort muss plausibel sein. | Original | umformulieren | Labor-Doku | anthropic2026prompting | „Being specific about the output you want can help enhance results.“ (Anthropic 2026, Prompting best practices) | Die Absicht bleibt, aber „plausibel“ lässt sich nicht prüfen. Prüfbar wird es so: „Jede falsche Option beruht auf einer echten Fehlvorstellung.“ | Abnahme |
| 8 | - Weise darauf hin, dass diagnostische Tests sowohl Bewertungsinstrument als auch Lernereignis (Abrufübung, Identifikation von Wissenslücken) sind. | Original | umformulieren | Labor-Doku | anthropic2026prompting | „Claude can generalize from the explanation.“ (Anthropic 2026, Prompting best practices) | Die Zeile belehrt die Lehrperson über etwas, das sie weiß. Als Grund an das Modell gerichtet wird sie nützlich: Wer weiß, dass der Test eine Abrufübung ohne Notenfolgen ist, entscheidet auch ungeregelte Fälle passend. | Wozu |
| 9 | Denke Schritt für Schritt nach und prüfe jede Frage zweimal, bevor du sie ausgibst. | ergänzt | streichen | Labor-Doku | openai2026reasoning; anthropic2026opus5; meincke2025a; kojima2022 | „prompting them to ‘think step by step’ is unnecessary“ (OpenAI 2026, Reasoning best practices) | 2022 hob die Aufforderung „Let's think step by step“ die Trefferquote älterer Modelle deutlich. Reasoning-Modelle denken und prüfen von selbst; Anthropic rät, Prüfbefehle wie „double-check your answer“ zu streichen, weil sie Kosten ohne Qualitätsgewinn verursachen. | |
| 10 | Wenn der Test gut wird, gebe ich dir 200 € Trinkgeld. | ergänzt | streichen | Folklore | meincke2025b | „Threatening or tipping a model generally has no significant effect“ (Meincke et al. 2025, Report 3) | Kein Leitfaden der Labore hat Trinkgeld je empfohlen; der Rat verbreitete sich über Erfahrungsberichte. Im Test änderten Trinkgeld und Drohungen die Ergebnisse auf schweren Fragen insgesamt nicht. | |

## Quellenschlüssel (CSL-JSON in `references.json`)

| Schlüssel | Kurzbeleg im Element | Geprüft |
|---|---|---|
| anthropic2026prompting | Anthropic (2026), *Prompting best practices* | Wortlaut aufgerufen 02.11.2026 |
| anthropic2026opus5 | Anthropic (2026), *Prompting Claude Opus 5* | Wortlaut aufgerufen 02.11.2026 |
| openai2026gpt55 | OpenAI (2026), *Using GPT-5.5* | Wortlaut aufgerufen 02.11.2026 |
| openai2026reasoning | OpenAI (2026), *Reasoning best practices* | Wortlaut aufgerufen 02.11.2026 (über developers.openai.com; der in der OPTIONEN-Datei offene Wortlaut ist damit bestätigt) |
| basil2025 | Basil et al. (2025), Prompting Science Report 4 | arXiv-Abstract aufgerufen 02.11.2026 |
| meincke2025a | Meincke et al. (2025), Prompting Science Report 2 | bestehender Eintrag; Abstract aufgerufen 02.11.2026 |
| meincke2025b | Meincke et al. (2025), Prompting Science Report 3 | bestehender Eintrag; Abstract aufgerufen 02.11.2026 |
| butterfield2001, richland2009 | Didaktische Begründung im Kapiteltext | DOIs per Crossref geprüft 02.11.2026 |
| kojima2022 | Kojima et al. (2022), zero-shot „Let's think step by step“ | DOI aus OPTIONEN-Datei, arXiv aufgerufen 02.11.2026 |

Hinweis zu den Kurzbelegen: Im Element stehen Herausgeber, Jahr und Titel statt Jahresbuchstaben, weil die Buchstaben (2026a, 2026b …) erst beim Rendern aus allen Einträgen des Buchs vergeben werden und sich mit jedem neuen Eintrag verschieben können. Die Repo-Schlüssel `meincke2025a` und `meincke2025b` meinen Report 2 und 3.
