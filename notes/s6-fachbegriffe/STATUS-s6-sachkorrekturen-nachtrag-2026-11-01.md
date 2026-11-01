# Status: S6-Zweitprüfung und Sachkorrekturen-Nachtrag (01.11.2026, ca. 21:15)

Grundlage: `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (S6), Statusnotizen S6 Teil 1 und Teil 2 in `claude/fachbegriffe/s6/`.

## Was passiert ist
- Auftrag war „S6 abarbeiten (Kap. 1–3)“. Kap. 1–3 hatte eine parallele Sitzung kurz zuvor erledigt (main @ `31f66d8`). Auf Romans Wahl (MC) hat diese Sitzung danach S6 Teil 2 übernommen. Dieselbe Arbeit lief aber in einer **dritten Sitzung unter demselben Branch-Namen** `fachbegriffe-s6-teil2` und wurde dort um 20:34 gemergt (main @ `fac94da`). Die Arbeit dieser Sitzung war damit eine unabhängige Zweitprüfung.
- Entscheidung Roman (MC, ca. 21:00): Den Doppel-Branch verwerfen (er lag nur lokal und war nie gepusht). Nur die **Sachkorrekturen**, die auf main fehlten, als Nachtrag einspielen. Die Glossar-Stufen bleiben in `data/glossar-stufen.yml`, so wie es live ist; eine sichtbare Zeile im Glossar gibt es nicht.

## Erledigt (main @ `e9f1821`, live geprüft)
Branch `s6-sachkorrekturen-nachtrag`, Commit `fa518ec`, Merge und docs-Render `e9f1821`:
1. Kap. 6: Der Bullwhip-Ballade-Text steht nicht in Anhang B. Der Satz verweist jetzt auf den Primer zu Lernsongs (`@sec-primer-lernsongs`).
2. Kap. 6 (zwei Stellen): liu2026courseintegrated folgt jetzt der Quelle. Es heißt nicht mehr „weil … als Antwortmaschine konfiguriert“, sondern: Die meisten Lehrenden behielten den voreingestellten *direct instruction mode*, und die Autoren vermuten eine Verdrängung des eigenen Arbeitens.
3. Kap. 5: Die Avigad-Paraphrase folgt jetzt der Quelle (arXiv:2603.03684v3, S. 4), Z. ~120 und ~169. Die Behauptung „ohne ihren Nachweischarakter zu verlieren“ ist gestrichen (yusuf2026 lässt die Lernwirkung offen).
4. Kap. 4 und 5: `[@dang2026verified; Preprint]` lautet jetzt `[@dang2026verified, Preprint, also noch nicht begutachtet]` (die alte Form rendert falsch).
5. Kap. 4 (zwei Stellen): „source faithfulness“ ist nicht mehr Tay zugeschrieben. Der Text sagt jetzt „Quellentreue“, der Tay-Beleg bleibt an der Aussage.
6. Anh. A, Tabelle der Einschränkungen: Drei Zitate, die in Anhang B nicht vorkommen, sind gestrichen; die belegten Zitate bleiben.
7. Anh. D: Die Übungsnummern stimmen jetzt (Folien in Ü3, Testfragen aus Ü2 werden in Ü6 zum Goldstandard). Die festen Nummern „B.1.5/B.1.2“ sind entfernt, weil die Nummerierung im Druck abweicht; es bleiben die `@sec`-Verweise.
8. Anh. C: Die Zeile „Pharmazie“ ist gestrichen, weil sie keine Quelle hatte (lim2025 ist eine Lehramtsstudie). lim2025 steht jetzt in der Zeile Lehrerausbildung. Z. ~118 nennt das Format nicht mehr „goal play“.
9. Kap. 6: Der Satz zum Prompt *Verhandlungssimulation* verlinkt jetzt auf `@sec-prompt-verhandlungssimulator`.
- Prüfung: Render `--to html` mit nur den bekannten 36 OJS-Warnungen, kein `?@`. Playwright bei 1200 und 390 px ohne JS-Fehler, Breiten wie vorher. PDF/EPUB unverändert. Live: Kap. 5, 6 und Anh. D zeigen die neuen Sätze.
- Lehre: main bewegte sich während der Prüfung (Scroll-Performance, lazy iframes). Gerenderte docs/ deshalb nie vom alten Stand übernehmen, sondern nach dem Merge neu rendern.

## Für S9 (Sachprüfung)
- `notes/s6-fachbegriffe/BEFUNDE-zweitpruefung-s6-2026-11-01.md` enthält die Auffälligkeiten der Zweitprüfung je Kapitel, mit Fundstellen und Quellen. Die oben erledigten Punkte sind dort enthalten und abgehakt zu denken. Noch offen sind u. a.: gerber2026 (62 Studierende und die Begründung nicht im Abstract), Anh. C GenAI doppelt eingeführt, „VHB-Ranking“ statt „VHB Rating“, Überschrift „fehlerfrei“, Lin 2024 und Zhan 2026 in der 2025-Liste, RAGAs/RAGAS, CREATE ohne Einführung im Druck.
- In der Statusnotiz Teil 2, Offen 1, ist „Anh. C Goal Play Z. ~118“ damit teilweise erledigt (Begriff entfernt, Beleg mollick2024 bleibt zu prüfen).
- Verworfene lokale Branches: `fachbegriffe-s6-teil2` (diese Sitzung, nie gepusht). Zum Löschen auf GitHub (Browser): `fachbegriffe-erklaeren`, `fachbegriffe-s6`, `fachbegriffe-s6-teil2`, `s6-sachkorrekturen-nachtrag` (gemergt).

## Lehre für die Sitzungsplanung
Zwei Sitzungen bekamen denselben Startauftrag, und eine dritte arbeitete parallel dazu. Vor jedem Start `git ls-remote origin` und die neuesten Statusnotizen im Projekt prüfen. Die erste Aktion jeder Sitzung ist, den Branch zu pushen, damit eine Doppelung sofort sichtbar wird.

## Startauftrag nächste Sitzung
„Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitt S9), `claude/fachbegriffe/s6/STATUS-fachbegriffe-s6-teil2-2026-11-01.md` (Offen 1–3) und `notes/s6-fachbegriffe/BEFUNDE-zweitpruefung-s6-2026-11-01.md` und arbeite S9 für Kap. <n> ab.“

## Candidate permanent notes
- Parallele Agentensitzungen brauchen eine Sperre am gemeinsamen Ort, weil ein gleicher Startauftrag sonst doppelte Arbeit erzeugt.
- Eine unabhängige Zweitprüfung findet andere Sachfehler als die Erstprüfung, auch wenn beide dasselbe Verfahren nutzen.
- Ein Literaturbeleg kann eine Zahl stützen und zugleich die Begründung nicht, die der Text an die Zahl knüpft.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gemergt: ja, main @ `e9f1821`)
