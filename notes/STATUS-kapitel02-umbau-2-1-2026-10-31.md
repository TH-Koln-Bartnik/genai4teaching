# Status: Kapitel 2.1 umgebaut (Variante A), sechs Animationen eingebunden (31.10.2026, ca. 17:30)

Entscheidungen Roman (31.10., Multiple Choice): Variante A; Tokenizer-Ersatz T1 + T4 (neue Klick-Animation + Link Transformer Explainer); Kürzungen und Repo ohne Vorliebe → Empfehlung umgesetzt (alle K1–K19, eigener Branch ohne Merge).

## Repository
Branch **`kapitel02-umbau-2-1`** (Commit `9a6054f`, gepusht), Basis `kapitel02-frontier-animationen` (`7934417`) → enthält die fünf Frontier-Animationen. **Nicht gemergt.**
Diff: <https://github.com/TH-Koln-Bartnik/genai4teaching/compare/main...kapitel02-umbau-2-1>
Damit ist `kapitel02-frontier-animationen` überholt (löschbar nach Merge).

## Neue Gliederung 2.1
| Abschnitt | Inhalt | Animationen |
|---|---|---|
| 2.1 (Einstieg) | zwei Sätze Orientierung, Lernspiel Grundbegriffe (K1, K3, K4) | llm-game |
| 2.1.1 Modell, Harness, Agent `{#sec-harness}` | harness-schichten als Landkarte; neue **Tabelle 2.1** `tbl-modell-harness-agent` (Pferd/Geschirr/Gespann, Kernsatz, Russell-Norvig, Ausubel 1960); Werkzeuge, Gedächtnis, Schleife; Autonomie-Exkurs gekürzt (K16) + **autonomiestufen**; Harness-Name + **drei-labs-ein-bauplan**; Regler, Tabelle 2.2 (alt 2.1), „Grenze wandert“ (+ Annahmen-Satz Martin et al.), Lehrende | harness-schichten, autonomiestufen, drei-labs |
| 2.1.2 Was im Modell passiert `{#sec-gpt-bedeutung}` | KI/GenAI/LLM in drei Sätzen (K5, K6), Tokens/Embedding (K8), **vom-satz-zum-naechsten-wort** (neu, T1), GPT-Begriffe gestrafft, Pretraining jetzt *selbstüberwacht* (K10), **zwischenschritt-texas**, Kontextfenster ein Satz (K11), Vertiefung + Transformer Explainer (T4) | T1, texas |
| 2.1.3 LLM, RAG oder Agent `{#sec-patterns-usage}` | Bücherregal/Werkzeugkoffer, Lernspiel, RAG-Beispiele, Workflow/Agent nur Rückverweis (K14), chatbot-zu-agent; zweites Lernspiel nur noch als Online-Link (K15, −1 QR) | chatbot-zu-agent |
| 2.1.4 Agenten in der Praxis | Skill-Karte, neuer Technik-Absatz + **skills-handbuch**; MCP ein Satz, RAG nur Prüfidee, Johnston-Satz zu Nutzungsdaten raus (K17) | skill-karte, skills-handbuch, engpass |
| 2.1.5 Gedächtnis | **sitzung-und-gedaechtnis** nach der Vier-Stufen-Grafik; Speicherregeln und Dreaming verdichtet (K18) | agenten-gedaechtnis, sitzung |
| Schluss | CIO-Link → Link aufs Glossar (K19) | |

Verschoben: K2 Setup-Absatz + `fig-reasoning-models-better` → 2.3 (nach „Welches Sprachmodell sollte man nutzen?“); K7 HTML-Tipp → 4.2.2 `sec-coding`; K9 Prompt/Prompt Engineering/Vallverdú → 2.5.2 `sec-how-to-speak`. K13: Deep-Research-Workflow-Satz gestrichen, Anhang D (`sec-d-agenten`, Ü3) deckt ihn schon ab.
Nebenarbeiten: Lernziele 1/2 getauscht (Harness zuerst); Vorwort „Tokenizer zum Ausprobieren“ → „Klick-Animationen zu Harness, Tokens und Gedächtnis“; `drei-labs-ein-bauplan.html` Verweis „vorigen Abschnitt“ → „Abschnitt 2.1.1“.

## Neue Animation T1 `interactions/vom-satz-zum-naechsten-wort.html`
8 Schritte (Satz → 7 Tokens → Nummern → Bedeutungskarte → Geld/Park → Aufmerksamkeit Baum→Bank → Wahrscheinlichkeitsbalken → anhängen/Schleife, Temperatur). Echte Werte o200k_base (`gpt-tokenizer` 4.1.0, gegengeprüft mit `js-tiktoken` 1.0.21): „Lieferantenbewertung“ 5 Tokens [Lie][fer][anten][bew][ertung], „supplier evaluation“ 2; „Die Bank steht unter einem Baum.“ 7 Tokens (8796, 9950, 27717, 9720, 7470, 70581, 13). Karte und Wahrscheinlichkeiten schematisch, im Bild gekennzeichnet. Prüfziel A13 in `scripts/aufmerksamkeit-ziele.json`; Prüfskript BESTANDEN.
Fachliche Entscheidung: Aufmerksamkeit wirkt kausal (Token blickt nur zurück), deshalb Pfeil von „Baum“ zurück auf „Bank“ und neuer Punkt „Bank im Satz“.
Abweichung: Quellenteil der HTML zitiert Jurafsky & Martin (2026, Manuskript 19.08.2026), das Buch weiter `jurafsky2025` → bei Bedarf angleichen.

## Druck
Neue Druckbilder mit QR (`images/druck/*-qr.png`): drei-labs-ein-bauplan, zwischenschritt-texas, skills-handbuch, sitzung-und-gedaechtnis, autonomiestufen, vom-satz-zum-naechsten-wort. Skripte `scripts/druck-frontier-animationen.cjs`, `scripts/druck-vom-satz-zum-naechsten-wort.cjs`; `qr-in-abbildung.py` um die sechs Namen ergänzt. Alle Bilder angesehen.
Druckbilanz 2.1: +6 Abbildungen, −2 QR-Kästchen (Tokenizer, Lernspiel Agent-Patterns). **Seitenzahl im Druck steigt** → nächstes PDF-Rendern messen.

## Literatur
`references.json` +8: morris2024, martin2026managed, bolin2026codex, wiesinger2024agents, milam2025sessions, anthropic2025tracing, ausubel1960, cho2025 (S. 29625–29627 verifiziert). Für Lindsey et al. wird der vorhandene Schlüssel `lindsey2025` genutzt.

## Prüfung
`quarto render --to html` (1.8.25, Arbeitskopie): 0 Zitier-/Querverweiswarnungen, `?@`/`???` in Kap. 2 und 4: 0; übrig 36 × „OJS block count mismatch“ (Altbestand Kap. 4). Nummerierung 2.1–2.1.5 im HTML geprüft, Seite angesehen.
Wortzahl Fließtext 2.1 (ohne Bildunterschriften, Tabellen, URLs): 5.217 → 4.558 (−13 %); mit Bildunterschriften 5.927 → 5.702. Weniger als die geplanten −1.480, weil sechs Animationen Einleitungssätze und Druckunterschriften mitbringen und der Abgrenzungskasten hinzukam.

## Offen
1. Roman: Diff ansehen, dann Merge nach `main`. Probe-Merge mit `kapitel01-kuerzung` (`795d197`): einziger Konflikt `references.json` (beide hängen Einträge ans Ende an; beide Blöcke behalten). `kapitel04.qmd` merged sauber (verschiedene Stellen).
2. Danach P8-Branch und Modellwahl 2.3 auf den neuen Stand rebasen (2.3 bekommt durch K2 das Bild `use-reasoning-models.jpg`).
3. Druck-PDF rendern, Seitenzahl und Umbruch der sechs neuen Abbildungen prüfen.
4. Altdateien `interactions/tokenizer-explorer.html`, `images/qr/qr-tokenizer-explorer.png`, `images/qr/qr-lernspiel-agent-patterns.png` liegen noch im Repo (nicht verlinkt bzw. nur online-Link); löschen, wenn gewünscht.
5. `anthropic2026dreams` wird in Kap. 2 nicht mehr zitiert (steht weiter in `references.json`).
6. Lösungshinweise Kap. 2 sind unverändert gültig (keine Lernfrage verweist auf gestrichene Inhalte).

## Nachtrag: Merge nach `main` (31.10.2026, ca. 17:05, Auftrag Roman)
`kapitel02-umbau-2-1` in `main` gemergt (Merge-Commit `888219d`, auf Stand `d81443f` mit gemergtem Kapitel 1). Konflikt nur in `references.json`: Stand `main` (Kap.-1-Bereinigung, neun Einträge entfernt) plus die acht neuen Einträge; 439 Einträge, keine doppelten Schlüssel.
`docs/` neu gerendert (Quarto 1.8.25): HTML und EPUB, Download-PDF unverändert (Druckvorlage). HTML: 0 Zitier-/Querverweiswarnungen, `?@`/`???` in Kap. 1 und 2: 0. Commit `da81d86`, gepusht; GitHub Pages zeigt den neuen Stand nach dem nächsten Deploy.
Löschbar (nur im GitHub-Webinterface): `kapitel02-umbau-2-1`, `kapitel02-frontier-animationen`.
Offen Nr. 1 erledigt; Nr. 2 (P8, Modellwahl 2.3 rebasen) ist der Startauftrag der nächsten Sitzung, jetzt direkt auf `main`.
