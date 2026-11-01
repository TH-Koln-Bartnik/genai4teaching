# Status: Kestin-Abgleich (P3-Prüfpunkte 3/4) und P5 Kapitel 4 (01.11.2026, ca. 09:30)

Grundlage: `claude/kapitel04-videos/STATUS-kapitel04-videos-p3-2026-10-31.md`, `claude/status-uebersicht-kapitel-2026-10-31.md`, Leseliste vom 18.10. (`claude/leseliste-tragende-studien-je-rolle-2026-10-18.md`), PDFs in `0_GenAI/1-Research/06-Lehrbuch-Publikation-Logos/Leseliste-Lehrbuch-Update-2026-10/` (2-Copilot 01–06, 4-Simulator 01–03, per `pdftotext` gelesen).

**Branch:** `kapitel04-p5`, Commit `a380174` auf `main` = `b4b22c8` (main war während der Sitzung von `8c442cc` auf `b4b22c8` gewandert; Rebase ohne Konflikt). Gepusht, **nicht gemergt**. PR-Link: https://github.com/TH-Koln-Bartnik/genai4teaching/pull/new/kapitel04-p5. Nach dem Commit eine Kleinigkeit nachgezogen (s. „Nachtrag“).

## 1 Abgleich mit Kestin et al. (2025)

Quelle: Volltext über PubMed Central (PMC12179260), gelesen 01.11.2026. Nature und DOI-Auflösung nicht abrufbar; das Supplement mit dem Systemprompt (MOESM1, DOCX) blockiert per Captcha.

- **Themen (Prüfpunkt 3):** Die Studie behandelt **Oberflächenspannung (Woche 1) und Strömungen (Woche 2)** im Kurs Physical Sciences 2, Herbst 2023. „Kinematik, Kräfte, Energieerhaltung“ kommt nicht vor (Kräfte nur als Vorwissenstest FCI). → ersetzt.
- **Zahlen (Prüfpunkt 4):** N = 194 (von 233), Crossover; Median Abschlusstest 4,5 (KI, N = 142) vs. 3,5 (Präsenz, N = 174), Ausgangswert 2,75 (N = 316); Lernzuwachs mehr als doppelt; Median 49 min vs. angesetzte 60 min; Test direkt nach der Stunde. **Alle bestätigt.** Effektstärke 0,63 (Regression, durch Deckeneffekt unterschätzt) bzw. 0,73–1,3 SD; nicht im Buchtext.
- **Prompt-Regeln:** Der Hauptartikel nennt nur Leitlinien „aktiv einbinden, kognitive Belastung steuern, Wachstumsdenken fördern“ (Praktiken i–iii) und Schritt-für-Schritt-Lösungen im Prompt; mehrteilige Aufgaben portioniert die **Plattform**, weil der Prompt das nicht verlässlich schaffte. „Kurz antworten, ein Schritt pro Nachricht, Lösung nur auf Wunsch“ steht nur im Supplement bzw. in Sekundärquellen (Hechinger Report: „one step at a time“). → Buchtext auf den Hauptartikel zurückgenommen.
- **Schwierigkeitsanpassung:** Die Studie äußert sich dazu nicht (weder ja noch nein). → „berichtet die Studie nichts“ statt „gibt es nicht“.
- **Absatz „Individuelle Anpassung“ (4.3):** Die Lernstandsdiagnose „über typische Fehler“ ist **nicht** belegt. Belegt sind Self-Pacing, Rückmeldung auf Abruf, höheres Engagement/Motivation (Selbstauskunft) und mehr Präsenzzeit für höherstufige Aufgaben. → Absatz als Fließtext neu, Aufzählung mit wörtlichen `\*` entfernt; Überleitung zu Chang 2026 angepasst; „deutlich reduziert“ (Musterlösungen) auf die Absicht der Autoren zurückgenommen; Kernaussage 5 angepasst.
- Übrige Kestin-Stellen geprüft und stimmig: Kap. 3 (Z. 72, 187), Kap. 6 (Z. 214), Anhang C (Z. 258, 277), Anhang D (Z. 568), Forschungsstand.

## 2 P5: 4.2.2 Programmier-Agenten

Neu in „Jeder kann jetzt programmieren“ (`#sec-coding`): ein Absatz Copilot → Programmier-Agent (Claude Code, Codex, Cursor-Agent; Verweis `@sec-harness`; Willison/Steinberger aus der Klammer am Anfang hierher verschoben) vor dem Making-of; nach dem EOQ-Video zwei Absätze:
- Evidenz: Balepur et al. (2026): 54 CS-Studierende, Agent vs. Chatbot (GPT-4.1), Agent schneller und vollständiger, Verständnis deutlich schlechter (d > 0,8), Erweiterung ohne Agent: Vorsprung kehrt sich nach Kontrolle des Ausgangscodes um; kopierte Aufgabenstellung und Auto-Accept mit geringerem, Fachbegriffe und Einzel-Annahme je Datei mit höchstem Verständnis; Präferenz trotzdem Agent; explorativ. Anschluss an `@sec-evidenz` und Bergh et al. (2026). Wu (2026): StudyChat-Daten eines Semesters, 78,8 % der Anfragen nicht verstehensorientiert, 11,1 % mit eigener Begründung.
- Folgerung: Arbeitsteilung nach Lernziel; wo Code Lernziel ist: Fachbegriffe statt kopierter Aufgabe, Einzel-Annahme, schriftliche Begründung (Tao et al. 2026, als Übertrag aus dem Schreiben gekennzeichnet), Erweiterung ohne Agent; Verweise `@sec-widget-pruefen`, `@sec-d-modus`.
- Contractor & Reyes und Autor et al. nicht erneut verwendet, da in Kap. 3 (Tabelle, Kasten) bereits eingeordnet.
- Kernaussage 4 um einen Satz ergänzt.

Hinweis: In Tabelle 1 bei Balepur hat „Agent soll Codebasis erklären“ (n = 6) einen niedrigeren Verständniswert als „Aufgabe kopiert“, obwohl der Text „copy lowest“ sagt. Buchtext deshalb ohne Superlativ („Weniger verstand, wer …“).

## 3 P5: 4.4.3 „Wie echt ist das Gegenüber?“ (`#sec-sim-echtheit`)

Neuer Unterabschnitt nach Goal Play, vor den allgemeinen Schlussabsätzen von 4.4:
- Kuric et al. (2026): 12 First-Click-Tests, 3.431 Menschen vs. GPT-4.1/GPT-5.2; in 53 % der Aufgaben signifikant andere Verteilung; Personas, Chain-of-Thought, Sampling erhöhen nur die Glaubwürdigkeit.
- Ahn et al. (2026): 4 Datensätze, > 400.000 Befragte, > 6.000 Items; Mittelwerte gut getroffen, individuelle Abweichung nur 3,05 % erklärt vs. 53,6 % Test-Retest-Obergrenze; reichere Personas, Fine-Tuning ohne Effekt; komprimierte Verteilungen.
- Folgerung für Rollenspiele: typischer Fall statt Einzelfall; Studierenden sagen, Nachbesprechung „wie hätte ein echtes Gegenüber reagiert?“. Ausdrücklich als Übertrag gekennzeichnet (keine Lehrstudie).
- Yang et al. (2026): RCT, 100 Medizinstudierende (China), Patient-, sokratischer Tutor- und Bewerter-Agent vs. strukturierte Kontrolle ohne LLM; Abschlussprüfung 71,8 % vs. 55,6 % (β = 16,4 pp), Kommunikation 3,53 vs. 2,64, Empathie-Item +31 pp, Diagnose gleich (84 vs. 86 %). Bezug auf Pitch Quest (Rollen trennen).
- Verweis auf Anhang C (`@sec-rs-gestaltung`, `@sec-update-2026-07-rs`); in C.6 ein Rückverweis-Satz auf 4.4.3.
- Kernaussage 6 ergänzt. „Für beide Typen gilt“ → „Für Role Play wie Goal Play gilt“ (Nachtrag).

## 4 Literatur (neu in `references.json`, aus den PDFs und arXiv geprüft)

- Ahn, D., Mao, C., & Lee, D. (2026). *Item-mean surrogates: Why richer persona data fail to improve LLMs as human surrogates* (arXiv:2608.29455). https://doi.org/10.48550/arXiv.2608.29455 — `ahn2026surrogates`
- Balepur, N., Baumler, C., Chen, V., Choi, E., Rudinger, R., & Boyd-Graber, J. L. (2026). *(Im)Paired programming: Coding agents improve productivity but harm understanding* (arXiv:2607.26375). https://doi.org/10.48550/arXiv.2607.26375 — `balepur2026agents`
- Kuric, E., Demcak, P., & Krajcovic, M. (2026). *What would GPT click: Practical effects of human-AI behavioral misalignment and the cost of synthetic participants in user experience* (arXiv:2605.18302). https://doi.org/10.48550/arXiv.2605.18302 — `kuric2026synthetic`
- Wu, M. (2026). *Constructing epistemic AI literacy: Detecting epistemic aims and processes in student-AI co-programming* (arXiv:2607.00211; ALIT4ALL-Workshop, AIED 2026). https://doi.org/10.48550/arXiv.2607.00211 — `wu2026epistemic`
- Yang, L., Liu, H., Li, S., Jia, R., Xiao, Y., Chen, G., & Lu, L. (2026). *Evaluating scaffolding-oriented multi-agent large language model system for clinical interview training* (arXiv:2609.10939). https://doi.org/10.48550/arXiv.2609.10939 — `yang2026clinical`
- Geprüft (bereits vorhanden): Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning. *Scientific Reports, 15*. https://doi.org/10.1038/s41598-025-97652-6 (Volltext: https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/)

## 5 Prüfung

HTML-Render des ganzen Buchs mit Quarto 1.8.25 (`--to html`, Ausgabe außerhalb von `docs/`, `docs/` unberührt): 0 Warnungen nach Korrektur (ein Verweis auf die reine Druckabbildung `@fig-chatbot-zu-agent` entfernt), keine `?@`, 0 TODO, keine HTML-Kommentare in den geänderten `.qmd`. Alle fünf neuen Schlüssel aufgelöst; Anhang C verlinkt auf „Kapitel 4.4.3“. Sichtprüfung 1280 px. Bei 390 px Seitenbreite 515 px, Ursache wie online `@tbl-acemoglu` (461 px), nicht diese Änderung. Wörter im Diff: ca. +1.500 brutto.

## Offen / zur Entscheidung
1. **Diff durchsehen und mergen** (`kapitel04-p5` → `main`), danach `docs/` rendern (Download-PDF/EPUB vorher sichern).
2. **PS2-Pal-Video** (`#vid-ps2pal-ablauf`): prüfen, ob die Szene „Regeln im Prompt“ die Supplement-Regeln (kurz, ein Schritt, Lösung nur auf Wunsch) zeigt. Wenn ja, entweder Supplement öffnen (DOCX über Browser/VPN: https://pmc.ncbi.nlm.nih.gov/articles/instance/12179260/bin/41598_2025_97652_MOESM1_ESM.docx) und Text wieder präzisieren, oder Bildunterschrift neutral lassen (sie ist es bereits).
3. Kap. 4 Z. 154: Kestin als Beispiel für „zeitintensive Einrichtung“; die Studie belegt das nicht ausdrücklich. Optional umformulieren.
4. Forschungsstand-Seite: Kuric, Ahn, Yang, Balepur, Wu noch nicht in den Tabellen.
5. Lernfrage zu 4.4.3 (Schablone) und ggf. Glossar „Programmier-Agent“.
6. Druck-PDF weiter ungerendert (Gesamtlauf).
7. Restliche P5-nahe Leseliste (Copilot B/C, Simulator B/C: Nixon, Hale & Gratch, Jabarian & Henkel, Cao) nicht eingearbeitet; nicht beauftragt.

## Startauftrag nächste Sitzung (Kapitel 4)
Diff `kapitel04-p5` mit Roman durchgehen, mergen, `docs/` rendern und live prüfen; danach Punkt 2 (Video ↔ Supplement) und P4 Rollenabsätze 4D bzw. Lernsong-Kasten 4.1 → Primer C.

## Candidate permanent notes
- Coding agents raise task completion while lowering students' understanding of their own code.
- How students accept an agent's edits predicts how much of the resulting code they understand.
- LLM personas reproduce the average respondent but not the individual deviation that makes a person difficult.
- Richer persona descriptions make simulated respondents more believable without making them more accurate.
- Separating patient, tutor and evaluator roles lets an AI role-play train communication without inflating diagnostic knowledge.
- The Harvard AI-tutor effect rests on self-pacing and feedback on demand, not on diagnosing the learner's level.

Ablage geprüft: siehe Nachtrag unten
