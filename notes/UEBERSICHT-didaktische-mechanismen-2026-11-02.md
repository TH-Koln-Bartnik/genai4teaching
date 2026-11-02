# Didaktische Mechanismen im Lehrbuch „Generative KI als Hilfe zum Lehren und Lernen“

Stand: 02.11.2026, Fassung 2 (gruppiert nach Lernzielen, je Mechanismus eine kanonische Quelle). Abgeglichen mit `main` des Repos `genai4teaching` (Commit `a0cd3db`). Im Buch umgesetzt als Vorwort-Abschnitt „Wie dieses Buch lehrt“ (`#sec-wie-dieses-buch-lehrt`, `@tbl-mechanismen`).

Das Buch wendet auf seine Leserinnen und Leser an, was es über wirksames Lernen lehrt. Die Mechanismen ordnen sich nach drei Lernzielen der revidierten Taxonomie (Anderson & Krathwohl, 2001): Erinnern, Verstehen, Anwenden. Die Gruppen stehen in dieser Reihenfolge, weil die Befunde fürs Erinnern am stärksten sind (Dunlosky et al., 2013); innerhalb jeder Gruppe steht der am besten belegte Mechanismus oben. „Im Buch“ heißt: auf `main` und online sichtbar.

## 1 Erinnern

| Mechanismus | Wirkmechanismus | Beispiel | Wo eingebaut | Stand | Kanonische Quelle |
|---|---|---|---|---|---|
| **Abrufübung mit Rückmeldung** (*retrieval practice*) | Abrufen festigt die Gedächtnisspur und übt den Weg zu ihr; Wiederlesen erzeugt nur das Gefühl, den Stoff zu können. Begründete Rückmeldung wirkt stärker als richtig/falsch. | Lernfrage Kap. 3: „Erklären Sie ohne Nachschlagen, warum ein Chatbot, der sofort die richtige Antwort gibt, dem Testeffekt entgegenwirkt.“ Lösungshinweise erst nach eigener Antwort. | Lernfragen am Kapitelende; Anhang F; Schlüsselbegriffe (Kap. 1); Lernspiele Kap. 2 | Im Buch; Schlüsselbegriffe Kap. 2–6 offen | Roediger & Karpicke (2006) |
| **Verteiltes Wiederholen** (*spacing*) | Mit Abstand muss Gelerntes rekonstruiert statt aus dem Kurzzeitgedächtnis abgelesen werden; das hält länger. | Begriffe, die eine Leserin in Kap. 1 als „nicht gewusst“ einstuft, kehren in späteren Kapiteln als Bonuskarten zurück. | Wiederkehr-Karten; Kernaussagen; Film „Stützräder“ und Escape Room als Wiederholung | Technik im Buch, wirksam ab Kap. 2; Film und Escape Room in Arbeit | Cepeda et al. (2006) |
| **Vortest** (*pretesting*) | Ein Rateversuch vor dem Lesen, auch ein falscher, aktiviert Vorwissen und lenkt die Aufmerksamkeit auf die Stelle, an der die Antwort kommt. | Kap. 3 fragt vorab, ob verteilte kleine Abfragen mehr bringen als Wiederlesen; in 3.4 zeigt „Ihre Einschätzung prüfen“ die gespeicherte Wahl und die Auflösung. | „Bevor Sie weiterlesen“ (Kap. 1–3); Fragen vor dem Lesen (Kap. 4–6); Streich-Test (2.4) | Im Buch; „Höher oder tiefer“, Detektor-Duell in Arbeit | Richland et al. (2009) |
| **Melodie als Gedächtnisstütze** | Melodie und Rhythmus geben dem Wortlaut ein Abrufgerüst. | Verfahrenslied mit Rechenpausen, in denen Lösungsbeispiele den Rechenteil tragen. | Kap. 6 „Lernsongs I“; Primer C | Im Buch | Wallace (1994) |

## 2 Verstehen

| Mechanismus | Wirkmechanismus | Beispiel | Wo eingebaut | Stand | Kanonische Quelle |
|---|---|---|---|---|---|
| **Ausgearbeitete Beispiele** (*worked examples*) | Ein vollständig gelöstes Beispiel entlastet das Arbeitsgedächtnis von Neulingen, die es sonst für Suchen statt Verstehen verbrauchen. | Kap. 6, Fragen-Generator: Prinzip (Abruf schlägt Wiederlesen), Empfehlung mit Prüfkriterium („Stellt das System eine Frage und wartet?“), Umsetzung aus der eigenen Lehre. | Kap. 6 (Prinzip, Empfehlung, Umsetzung); Anwendungsbeispiele Kap. 1–5; Making-of-Kästen | Im Buch | Sweller & Cooper (1985) |
| **Fehlvorstellungen widerlegen** (*refutation text*, mit Hyperkorrektur) | Die alte Vorstellung wird genannt, als überholt gekennzeichnet und mit Gründen ersetzt. Wer sich dabei sicher geirrt hat, korrigiert besonders gründlich (Hyperkorrektur). | Streich-Test: Lesende streichen Zeilen eines alten Prompts und geben je Zeile ihre Sicherheit an; sicher falsch beurteilte Zeilen werden hervorgehoben. Danach „Vom Wunsch zum Werkvertrag“. | Kap. 2.4 mit Streich-Test; Einschätzungen mit Auflösung „nein“ | Im Buch; Film „Stützräder“ in Arbeit | Tippett (2010); Hyperkorrektur: Butterfield & Metcalfe (2001) |
| **Unterscheiden durch Vermischen** (*interleaving*) | Wer ähnliche Begriffe nebeneinander zuordnen muss, lernt die Merkmale, die sie trennen. | Fall-Zuordnung: Ein Studierender bittet einen Tutor-Bot dreimal um die Lösung → „Leitplanke“, Ablenker aus derselben Liste. | Schlüsselbegriffe (Fall, Stapel, Verwechslungspaare); Lernspiel LLM, RAG oder Agent | Im Buch | Kornell & Bjork (2008) |
| **Geschichte als Einstieg** | Kausal verknüpfte Ereignisse um eine Person mit einem Konflikt werden besser behalten und verstanden als Sachtext. | Kap. 1: Professorin Albers, 120 Studierende, falsche Chatbot-Lösung, ein Student, der seine fehlerfreie Hausübung nicht erklären kann. | Einstiegsszenen; Rahmengeschichte im Escape Room | Kap. 1–3 im Buch; Kap. 4–6 offen | Mar et al. (2021) |

## 3 Anwenden

| Mechanismus | Wirkmechanismus | Beispiel | Wo eingebaut | Stand | Kanonische Quelle |
|---|---|---|---|---|---|
| **Selbst erzeugen** (aktives, konstruktives Lernen) | Wer formuliert, erklärt oder baut, lernt tiefer als wer liest; die ICAP-Rangfolge ordnet Tätigkeiten von passiv bis interaktiv. | „Ausprobiert: Prüfen, ob ein Sprachmodell richtig zitiert“ (Kap. 4): drei Sätze mit dem Original abgleichen. | Kästen „Ausprobiert“; eigene Erklärung vor der Musterantwort; Transferaufträge und Prompt-Vorlagen | Teils im Buch, teils in Arbeit | Chi & Wylie (2014) |
| **Scaffolding und Ausblenden** (*fading*) | Hilfen stützen, solange sie nötig sind, und treten mit wachsendem Können zurück, weil Erklärungen für Neulinge Erfahrene belasten (Expertise-Umkehr-Effekt). | Sechs Aussagen im Vorwort ordnen Lesende einer von vier Linien zu; Erfahrene überspringen die Grundlagen. | Lernpfade (Vorwort); Lernfragen in drei Stufen; Vertiefung Kap. 2 (2.7) | Im Buch | Wood et al. (1976); Ausblenden: Kalyuga et al. (2003) |

**Gestaltungsprinzip der Animationen und Filme** (nicht als eigener Mechanismus im Vorwort): Graustufen plus eine Akzentfarbe, höchstens acht neue Bildwörter je Schritt, Erklärung über die Stimme (Signalisierungs- und Kohärenzprinzip; Mayer, 2014).

**Offene Lücke:** Kap. 4–6 haben noch Multiple-Choice-Fragen statt Einstiegsszene und Einschätzungsskala; die Schlüsselbegriffe-Kästen fehlen in Kap. 2–6. Erst mit ihnen stimmen die beiden Zusagen im Vorwort.

## Literatur

Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives*. Longman.

Butterfield, B., & Metcalfe, J. (2001). Errors committed with high confidence are hypercorrected. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 27*(6), 1491–1494. https://doi.org/10.1037/0278-7393.27.6.1491

Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354

Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. *Educational Psychologist, 49*(4), 219–243. https://doi.org/10.1080/00461520.2014.965823

Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266

Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist, 38*(1), 23–31. https://doi.org/10.1207/S15326985EP3801_4

Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the "enemy of induction"? *Psychological Science, 19*(6), 585–592. https://doi.org/10.1111/j.1467-9280.2008.02127.x

Mar, R. A., Li, J., Nguyen, A. T. P., & Ta, C. P. (2021). Memory and comprehension of narrative versus expository texts: A meta-analysis. *Psychonomic Bulletin & Review, 28*(3), 732–749. https://doi.org/10.3758/s13423-020-01853-1

Mayer, R. E. (2014). Principles for reducing extraneous processing in multimedia learning: Coherence, signaling, redundancy, spatial contiguity, and temporal contiguity principles. In R. E. Mayer (Ed.), *The Cambridge handbook of multimedia learning* (2nd ed., pp. 279–315). Cambridge University Press. https://doi.org/10.1017/CBO9781139547369.015

Richland, L. E., Kornell, N., & Kao, L. S. (2009). The pretesting effect: Do unsuccessful retrieval attempts enhance learning? *Journal of Experimental Psychology: Applied, 15*(3), 243–257. https://doi.org/10.1037/a0016496

Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x

Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. *Cognition and Instruction, 2*(1), 59–89. https://doi.org/10.1207/s1532690xci0201_3

Tippett, C. D. (2010). Refutation text in science education: A review of two decades of research. *International Journal of Science and Mathematics Education, 8*(6), 951–970. https://doi.org/10.1007/s10763-010-9203-x

Wallace, W. T. (1994). Memory for music: Effect of melody on recall of text. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 20*(6), 1471–1485. https://doi.org/10.1037/0278-7393.20.6.1471

Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry, 17*(2), 89–100. https://doi.org/10.1111/j.1469-7610.1976.tb00381.x

Alle DOIs am 02.11.2026 über Crossref geprüft oder aus `references.json` übernommen; alle hier zitierten Schlüssel liegen jetzt in `references.json` (Anderson & Krathwohl als `anderson2001`). Weitere Belege der Fassung 1 (St. Hilaire et al., 2024; Kang et al., 2009; Adesope et al., 2017; Wisniewski et al., 2020; Barbieri et al., 2023; Slamecka & Graf, 1978; Derks-Dijkman et al., 2024; Katz et al., 2021) bleiben im Buch bzw. in den Projektnotizen gültig.
