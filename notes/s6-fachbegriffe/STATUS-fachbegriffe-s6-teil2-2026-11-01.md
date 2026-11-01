# Status S6 Teil 2: Fachbegriffe, Akronyme, Glossar – Kap. 4–6, Vorwort, Anhänge, Primer, Lösungshinweise (01.11.2026, ca. 20:40)

Grundlage: `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (S6), `claude/fachbegriffe/s6/STATUS-fachbegriffe-s6-teil1-2026-11-01.md`. S6 ist damit **abgeschlossen**.

## Entscheidungen Roman (MC, 01.11.)
- Glossar: englischer Begriff **in der Begriffszeile** („Kontextfenster (*context window*)“); Schwierigkeitsstufen in **eigener Datei** `data/glossar-stufen.yml`.
- Kap. 4: alle außer K4-30 (lange englische Klammer der vier Bullwhip-Ursachen). Kap. 5: alle inkl. Nebenfunde; KI-Verordnung mit korrigierter Herleitung („KI-VO, *AI Act*; *regulation* von lat. *regula* …“). Kap. 6/Vorwort/Anh. A: alle außer VW-04/05 (Vorwort bleibt knapp).
- Buchweit **„System-Prompt“** (nicht „Systemprompt“).
- Anh. B/C: alle, „Gruppendenken (*groupthink*)“ wie Kap. 4. Anh. D/Primer/Lösungen: alle inkl. Online-Stellen und AD-04. Glossar: alle, **„Centaur“** wie Kap. 2; zusätzlich Umformulierungen Harness, Deep Research, Artifact, Skill, Vier Rollen.
- Vorwort: „Taskforce GenAI in der Lehre“ ist richtig. Anh. C: Zeitschrift ist *Systems* (MDPI). Sachprüfungen am Volltext → **S9**.

## Erledigt (main @ `fac94da`, live geprüft)
- `3b76028` Kap. 4 (+107 W.), Kap. 5 (+77), Kap. 6 (+123), Vorwort (+13), Anh. A (+10): u. a. Aufgabenmodell nach Acemoglu kursiv, zerklüftete Grenze (*jagged technological frontier*), Bullwhip/Beer Game umschrieben, *Intelligent Tutoring Systems*, *scaffolding*, *fine-tuning*, KI-VO-Rollen (*provider*, *deployer*), *AI literacy*, *boundary objects*, *coherence principle*. Nebenfunde korrigiert: Ou et al. „AI-powered language tools“, „Intelligent Tutoring Systems“, À la / S. 145, yusuf2026 = Lernende vor Studienbeginn, Walsh-Titel, ChatGPT, „testgestützt“, „KI-Kompetenz“, kaputter Anhang-Verweis Kap. 5 → `@sec-prompts`, Kap. 6 „erwünschte Schwierigkeiten“; Zeilenumbrüche in „z. B.“/„ggf.“ Kap. 4.
- `f30126a` Anh. B (+148), C (+136), D (+148), Primer (+72), Lösungshinweise (+16), Glossar (+409): RTF/CREATE erstmals aufgelöst, „zehn Prompts“, AD-04 führt 4D-Begriffe ein, Anh. D „erwünschte Schwierigkeit“. **Glossar:** 46 Einträge (vorher 40); neu AI Fluency, Delegation, Description, Discernment, Diligence (nach „Sprachmodell“), Programmier-Agent (*coding agent*, nach „Deep Research“); „Scaling Laws“ → „Skalierungsgesetze (*scaling laws*)“; alle „Kap. x.y“ → `@sec-…` (keine Nummernverweise mehr); explanatory questioning; RLHF „from“; Agent als Betriebsweise aus Modell und Harness; Custom-GPT-Abschaltung 11.12.2026; Centaur. `data/glossar-stufen.yml`: 46 Schlüssel = Begriffszeile ohne kursiven englischen Teil, 16 grund / 16 fortgeschritten / 14 experte (für S7). Tabelle `@tbl-prompts-online` repariert (Leerzeile in der Tabelle; Druckwarnung weg). CSS `include/style.css`: `.quarto-xref > span { white-space: normal; }` – Titel-Querverweise brechen auf dem Handy um (Glossar 390 px: vorher 489 px breit, jetzt 390).
- `665d382` Anh. C „Systems: 2079-8954“ (Romans Angabe). Merge `fac94da`, Pages-Deployment erfolgreich, live: Glossar, Kap. 4, Anh. C zeigen die neuen Begriffe.
- Prüfung: `quarto render --to html` nur die bekannten 36 × „OJS block count mismatch“, kein `?@`; Playwright 1200/390 px für Vorwort, Kap. 4–6, Anhänge, Primer, Lösungen, Glossar: gleiche Werte wie main vorher (siehe Offen 6). Drucktest in Kopie (`--profile print --to pdf`, fontawesome5 aus ftp.fau.de/ctan in `/root/texmf`): **keine Warnung**, keine `??`, **396 Seiten**. Download-PDF/EPUB per SHA256 unverändert.
- Branch `fachbegriffe-erklaeren`: inhaltlich vollständig in main (48e7484). **Löschen scheiterte**: Der Proxy der Cloud-Sitzung erlaubt keine Branch-Löschung (git push --delete bricht ab, GitHub-API 403). Roman löscht ihn im Browser: github.com/TH-Koln-Bartnik/genai4teaching/branches → Papierkorb. Ebenso überholt: `fachbegriffe-s6`, `fachbegriffe-s6-teil2` (beide gemergt).

## Ablage der Arbeitsdateien
Repo `notes/s6-fachbegriffe/` und Tresorit `Projektnotizen-Claude/fachbegriffe/s6/`: `AUFTRAG-teil2.md` (gemeinsamer Prüfauftrag), `vorschlag-kap04.md`, `vorschlag-kap05.md`, `vorschlag-kap06-vorwort-anhA.md`, `vorschlag-anhB-anhC.md`, `vorschlag-anhD-primer-loesungen.md`, `vorschlag-glossar.md` (Belege je Begriff mit DOI/URL), `UEBERSICHT-teil2-paket1.md`, `UEBERSICHT-teil2-paket2.md`, `anwenden.py` (IDs jetzt beliebiges Präfix `XX-nn`), diese Statusnotiz. Projekt: diese Statusnotiz unter `claude/fachbegriffe/s6/`.

## Offen (für S9 bzw. später)
1. **Sachprüfung am Volltext (S9 je Kapitel):** Vorwort Morehead et al. 2016 („mit den Studierenden teilten“ steht so nicht im Abstract); Kap. 4 Z. ~581 klassische ITS ≠ verzweigte Entscheidungsbäume; Kap. 5 Z. ~197 MIT-Bericht („acht Prinzipien“) ungeprüft; Anh. C „Goal Play“ in drei Bedeutungen, Z. ~118/151 belegt mit mollick2024, dort kommt der Begriff nicht vor (richtig nur mollick2024a); Anh. C Liste „2025 publizierte Fachartikel“ enthält Lin 2024 und Zhan 2026; Anh. D teo2026ai („kurz vor der Einsicht“) und hou2026comet („schlägt beide starren Varianten“) stärker als Abstract; Anh. D Z. ~27 „Kontrollpunkte“ kein Begriff von Parasuraman et al.; Lösungshinweise Carlile Z. ~71 vs. ~75 widersprüchlich.
2. **Inhaltlich offen:** Kap. 2 `tbl-modellstand` und `modelluebersicht.qmd` nennen Custom GPTs ohne Hinweis auf die Abschaltung am 11.12.2026; Glossar „Centaur und Cyborg“ nennt zwei Arbeitsweisen, Kap. 2 inzwischen fünf; Anh. D UrbanRide-Paket und Beispielbericht Ü3 nirgends erklärt, `anhang-d-material.qmd` alle Dateien „folgt“; Kap. 6 Z. ~131/375 „Regelwerk“ nicht eingeführt (vermutlich Lernsong-Regelwerk im Primer); Primer „Klatschprobe“ unerklärt.
3. **Einheitlichkeit:** Programmier-Agent / Programmieragent / Coding-Agent; „der/die DOI“; LM-Arena heißt inzwischen „Arena“ (arena.ai) – prüfen; hdw nrw in Kap. 1 nicht aufgelöst (im Vorwort jetzt ja).
4. Kap. 5.2 („Ausrichtung der Anpassungen nach Empfehlungen der Lernforschung“) hat keine `{#sec-…}`; mit ID könnte das Glossar dorthin verweisen.
5. Aus Teil 1 weiter offen (Kap. 2): THKI-Auflösung, SAE „teilautonom“, HEA-Übersetzungssatz.
6. Schon vorher bestehend (nicht S6): Überbreite bei 390 px durch Tabellen in Kap. 4 (648 px), 5 (753), 6 (646), Anh. A (444), C (995), D (681), Primer (617); Kap. 4 wirft einen JS-Fehler (pageerror) – auch auf main vorher.

## Startauftrag nächste Sitzungen
- S9 (Sprachcheck) Kap. 1–6: „Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitt S9) und `claude/fachbegriffe/s6/STATUS-fachbegriffe-s6-teil2-2026-11-01.md` (Offen 1–3) und arbeite S9 für Kap. <n> ab; prüfe dabei die Nebenfunde aus Offen 1 am Volltext.“
- S7 (Glossar-Spiele) ist jetzt möglich: Daten aus `glossar.qmd` + `data/glossar-stufen.yml`.
- Parallel: Bau/Einbau S4/S5/S8 (Kap. 2, nacheinander).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ `fac94da`)
