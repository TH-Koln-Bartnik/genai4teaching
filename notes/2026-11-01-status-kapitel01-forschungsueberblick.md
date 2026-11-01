# Status: Kapitel 1 als Forschungsüberblick plus Vorschau (01.11.2026, ca. 10:30)

Plan: `claude/kapitel01-ziele/PLAN-kapitel01-forschungsueberblick-vorschau-2026-11-01.md` (Projekt).
Branch `kapitel01-forschungsueberblick` (gepusht), Basis `main` @ `d933cd7`. Commits `48f11b4` (Technik aus den Patches), `eebe9af` (Umbau). **Nicht gemergt: Roman prüft den Diff.**
Vergleich: https://github.com/TH-Koln-Bartnik/genai4teaching/compare/main...kapitel01-forschungsueberblick

## Entscheidungen Roman (01.11., 09:16–09:30, Multiple Choice)
- Kapitelkopf: Hybrid (Daft-Auftakt + Auflösung an der Textstelle + Klammer Lernziele/Kernaussagen).
- Frageformat: Einschätzungen aus dem Kopf-Patch gelten (erste Antwort „MC beibehalten“ nach Rückfrage revidiert).
- Lernpfade: 2×2 (KI-Erfahrung × Lernforschung), U-Bahn-Karte = Buchlandkarte T3, Selbsttest bleibt, keine Zonen.
- Tabelle Kapitelübersicht: gestrichen.

## Übernommen
Die Projekt-Patches `claude/kapitelkopf-position/kapitelkopf-position-kap01.patch` (9cb0fa6) und `claude/lernpfade/kapitel01-lernpfade-2026-11-01.patch` + `…-teil2-…patch` (5dea69c, 74ce838) sind in diesem Branch enthalten. **Nicht mehr einspielen.** Karte und Widget wurden aus `scripts/lernpfade/` neu erzeugt (Geometrie identisch).

## Umgesetzt
- `kapitel01.qmd`: Szene (Albers, ergänzt um Kollegin mit KI-Tutor) → Seitenumbruch → vier Einschätzungen (1.1 Studierende/Prüfungen: ja; 1.2 Täuschen: eher nicht; 1.2 Gratis-Version: nein; 1.3 Tutor-Zugang: nein) → Lernziele 1–3 → Einstieg ohne Überschrift (zwei Lehrprobleme, E-Bike, Verweis @sec-ziele-genai) → 1.1 `sec-nutzung` → 1.2 `sec-risiken` (Bastani, Lee, Mittal, Walsh; zwei Sätze Agenten/Gratis-Zugang) → 1.3 `sec-was-hilft` (Bastani-Leitplanken, Bjork, Oreopoulos, Gallegos, Maier, Ates, AI-Sandwich, vier Hebel Kap. 5) → 1.4 `sec-kapiteluebersicht` (Workshop-Fragen → vier Rollen, Buchaufbau mit Kap.-6-Projekten, Kasten „Fünf Fragen“, Galerie) → 1.4.1 `sec-lernpfade` → Kernaussagen 1–5 nach Lernzielen → Lernfragen (3 und 6 neu).
- Raus aus Kap. 1: Cockpit-Absatz, Berufsproduktivität (Peng, Dell'Acqua, Brynjolfsson; stehen in Kap. 2/4), Johnston (steht in Kap. 2/Anh. D), Kosten Faktor 725, Deep Research, Skills, Korinek, Bubeck (`bubeck2025` jetzt nirgends zitiert), Workshop-Absatz (ein Satz bleibt in 1.4), Tabelle `tbl-kapiteluebersicht`.
- Label `sec-weiterentwicklung` entfällt; Verweis in `kapitel02.qmd` (Z. 543) durch die Quellen des Agentic Turn ersetzt.
- Kasten „Fünf Fragen“: Frage 3 (4D) verweist vorerst auf `@sec-d-modus` (Anhang D), weil 2.6 (P4) fehlt.
- `interactions/galerie-kapitel01.html`: fünf Formate (Engpass-Animation, Präsentationsfolie als Standbild, Lernsong, Zuordnungsspiel, Rollenspiel als Szenario-Karte nach Barton 2026); neue Typen `image` und `karte`; Linktext „Im Buch ansehen“. QR-URL unverändert, Bildunterschrift im Druck angepasst.
- `kapitel10-appendix05-loesungshinweise.qmd`: Hinweise zu Lernfragen 3 und 6 neu.

## Geprüft
- `quarto render --to html` (Quarto 1.8.25): 36 Warnungen = bekannte OJS-Warnungen; keine Querverweis-/Zitierwarnungen; Download-PDF/EPUB aus Git zurückgeholt.
- Playwright `kapitel01.html` 1200/390 px: keine JS-Fehler, keine 404, kein horizontales Scrollen; Einschätzung speichert, Link springt zum Prüfkasten, Anzeige „stimme eher nicht zu“.
- Galerie 1200/390 px: alle fünf Beiträge laden, keine Fehler. `pruefe-aufmerksamkeit.cjs --buehne "#galerie"`: Beiträge 2–5 im Budget; Beitrag 1 (Engpass-Animation, 96 Wörter) ist der bekannte offene Punkt aus Kap. 4.
- Wortzahl `kapitel01.qmd` (wc): 2.755 → 2.952; davon Lernpfade ≈ 560 und vier Prüfkästen ≈ 240. Ab Einstieg ohne Lernpfade ≈ 2.070 (Plan ≈ 1.900).
- Druck-PDF nicht gerendert (kein TeX in der Cloud).

## Offen
1. Roman: Diff prüfen → Merge in `main` (origin/main hat seit der Basis nur eine Statusnotiz, kein Konflikt zu erwarten).
2. Nach P4 (2.6 4D): Frage 3 im Kasten auf 2.6 umstellen, 2.6 als Station in die Lernpfad-Karte.
3. Kapitelauftakt Kap. 2–6 (`claude/kapitelkopf-position/AUFTRAG-kapitelauftakt-kap02-06-2026-11-01.md`) braucht Filter und Include aus diesem Branch: erst nach dem Merge starten oder von diesem Branch abzweigen.
4. Vorwort prüfen, ob der Workshop-Hintergrund (hdw nrw, Fächerbreite) dort ausführlicher stehen soll.
5. Galerie: Rahmen des Lernspiels zeigt mobil Leerraum unter dem Spiel; Engpass-Animation Wortbudget.
6. Buchweit: Crossref-Präfix „Kapitel 1.2“ statt „Abschnitt 1.2“; Druck: openright vs. Daft-Doppelseite mit Logos klären.
