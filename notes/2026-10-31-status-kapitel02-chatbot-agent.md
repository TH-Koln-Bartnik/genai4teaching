# Status: „Vom Chatbot zum Agenten“ in Kapitel 2.1.2 (31.10.2026, ca. 10:00)

Grundlage: `claude/agentic-animationen/ARBEITSNOTIZ-chatbot-zu-agent-2026-10-31.md` (Projekt).

## Entscheidungen Roman (31.10., Multiple Choice)
1. **Platzierung:** in 2.1.2 `{#sec-patterns-usage}` „Was nutzen – LLM, RAG oder Agent?“, nach dem Absatz zur vierten Entscheidungsfrage und vor dem Zuordnungsspiel. 2.1.3 mit `harness-schichten` bleibt unverändert. Begründung: etwa die Hälfte überschneidet sich mit `harness-schichten` (Werkzeug, Schleife, Harness, Mensch setzt Ziel); neu sind Workflow vs. Agent (fester Abruf, Router), die Sternskala und Multi-Agent – genau die Frage von 2.1.2.
2. **Vorhersage neu** (die alte wiederholte fast die Frage von `harness-schichten`): „Ein Chatbot holt vor jeder Antwort passende Stellen aus Ihren Skripten. Ist das ein Agent?“ – ja, er beschafft sich Wissen selbst / **nein, er folgt einem festen Ablauf** / hängt vom Sprachmodell ab. Rückmeldung im letzten Schritt ergänzt: „Fester Abruf bleibt ☆☆☆.“ Bildunterschrift Schritt 4: „Ein fester *Abruf* holt vor jeder Antwort Textstellen aus eigenen Quellen; den Ablauf bestimmt weiter der Code.“
3. **Lehrbeispiele** mit Kapitel 6 abgeglichen: ☆☆☆ jetzt real (Karriereberater aus WAGP: TF-IDF-Suche im Modulhandbuch, Modell formuliert; dazu die Teams mit BA-Jobsuche-Schnittstelle ohne KI, Modell sortiert nur). Für ★☆☆ bis ★★★ gibt es in Kap. 6 keine passenden Projekte; diese Zeilen sind jetzt ausdrücklich mit „etwa“ als Beispiele markiert (Tutor mit Erklär-/Übungsmodus, Chat mit Websuche, Programmieragent, Rechercheagent). Das erfundene „Karriereberater fragt Stellenbörse ab“ (★★☆) ist entfernt, weil es den realen Projekten widersprach (dort ruft Code die Schnittstelle auf, nicht das Modell).

## Repository (Branch `kapitel02-chatbot-agent`, gemergt in `main`)
- `interactions/chatbot-zu-agent.html` (aus Tresorit, Prüfsumme vor Änderung `f46e3eee…` = Projektfassung). Prüfskript: BESTANDEN, 13 Schritte, 1 Farbton, max. 5 neue Bildwörter, 38 im Endbild.
- `kapitel02.qmd`: sieben Sätze in 2.1.2 (Workflow vs. Agent nach Schluntz & Zhang, Skala nach Roucher et al., „RAG macht das Modell kundiger, nicht selbstständiger.“), iframe (1050 px) und Druckbild `#fig-chatbot-zu-agent`; in 2.1.3 ein Rückverweis-Satz nach Schluntz & Zhang.
- Druckbild: `scripts/druck-chatbot-zu-agent.cjs` → `images/druck/chatbot-zu-agent-qr.png` (2860 × 1125), QR `images/qr/qr-chatbot-zu-agent.png`; `scripts/qr-in-abbildung.py` um den Namen ergänzt.
- `scripts/aufmerksamkeit-ziele.json`: A6 `harness-schichten`, A7 `chatbot-zu-agent` ergänzt (beide fehlten im Messlauf).
- `references.json`: neu `grootendorst2025agents` (17.03.2025) und `roucher2024smolagents` (31.12.2024); `lewis2020` um Band 33 und Seiten 9459–9474 ergänzt. Bereits vorhanden: `grace2026evals`, `schluntz2024agents`, `russell2021`, `yao2023react`.
- Gerendert mit Quarto 1.8.25 `--to html`; nur die 36 bekannten OJS-Warnungen; Download-PDF/EPUB wiederhergestellt (unverändert). Sichtprüfung im Browser: Animation lädt im Kapitel ohne JS-Fehler, Vorhersage und Rückmeldung funktionieren, Querverweise 2.1.2 ↔ 2.1.3 aufgelöst. APA unterscheidet die zwei Grootendorst-Texte als 2025a/2025b.

## Belege (live geprüft 31.10.)
- Hugging-Face-Blog: Titel „Introducing smolagents, a simple library to build agents“ (Title-Tag: „… simple agents that write actions in code“), 31.12.2024, Autoren-Handles m-ric, merve, thomwolf; Sternskala Simple processor / Router / Tool call / Multi-step Agent / Multi-Agent bestätigt. Merve Noyan als Klarname über Sekundärquellen bestätigt.
- Grootendorst: „A Visual Guide to LLM Agents“, 17.03.2025 bestätigt.
- Lewis et al. (2020): NeurIPS 33, S. 9459–9474 bestätigt.

## Push und Merge (31.10., 13:30)
Zuerst blockierte der Git-Proxy den Push (Repository nicht freigegeben); nach Romans Auftrag „pushe das selbst“ freigegeben. Branch `kapitel02-chatbot-agent` gepusht (`483ed41`), dann per Fast-Forward in `main` gemergt und gepusht. Bundle und Patch in Tresorit `agentic-animationen/` sind damit überholt.

## Offen
1. Druck-PDF weiterhin nicht neu gerendert (Umbruch der zwei Abbildungen in 2.1.2/2.1.3 prüfen).
2. Der Satz in 2.1.3 „@schluntz2024agents ziehen daraus die Grenze …“ wiederholt jetzt die Einführung aus 2.1.2; bei der nächsten Kürzungsrunde eventuell straffen.
3. Branch `kapitel02-chatbot-agent` ist nach dem Merge löschbar (GitHub-Webinterface).
4. Roman: 2.1.2 einmal auf GitHub Pages ansehen.
