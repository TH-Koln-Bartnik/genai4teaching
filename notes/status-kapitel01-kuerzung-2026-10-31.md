# Status: Kapitel 1 gekürzt, Galerie A als Einstieg (31.10.2026)

Branch `kapitel01-kuerzung` (von `origin/kapitel01-lehrende`), gepusht, **nicht gemergt**: Roman sieht den Diff vorher. Zuerst auf `main` @ `05cf149` rebased; weil während der Sitzung die Einstiegsfragen-Sitzung nach `main` gemergt wurde (`03f3bbf`: Lernziele auf drei gekürzt, Kasten „Probleme aus der Lehre“ mit Multiple Choice statt Leitfragen, alle Kapitel), neu auf `03f3bbf` aufgesetzt (Commits einzeln übernommen, `docs/` neu gerendert). Im Kopf von Kap. 1 gilt die `main`-Fassung (Lernziele, MC-Kasten); meine Lernziel-Änderungen sind damit entfallen. Die MC-Rückmeldungen verweisen auf `sec-ki-hilfe`, `sec-weiterentwicklung`, `sec-nutzung`, `sec-risiken`, alle erhalten. Vorheriger Stand gesichert als lokaler Branch `kapitel01-kuerzung-alt` (nicht gepusht). Plan: `claude/kapitel01-kuerzung/PLAN-kapitel01-kuerzung-opener-2026-10-31.md`.

## Commits (über `main` @ `03f3bbf`)
1. `c42258f` Kap. 1 Lehrende (aus `kapitel01-lehrende`; Rebase-Konflikte in `references.json` per Vereinigung nach `id` und im Kapitelkopf zugunsten `main` gelöst)
2. `7da4c65` Workshop-Patch vom 30.10. (von Hand eingespielt, Kontextzeile im Patch war abgekürzt)
3. `97e0b83` Galerie `interactions/galerie-kapitel01.html`, QR `images/qr/qr-galerie-kapitel01.png`, Skript `scripts/qr-kapitel01.mjs`
4. `05acad7` Kürzungen K1–K11 (Kap. 1, Kap. 4, Anhang B, `references.json`)
5. `docs/` neu gerendert (HTML) und diese Notiz

## Wortzahl `kapitel01.qmd` (Quelltext, `wc -w`)
| Stand | ganze Datei | Text ab 1.1 |
|---|---|---|
| `main` @ `03f3bbf` (ohne Lehrende-Teil) | 3.977 | – |
| plus Lehrende-Teil und Workshop-Patch (`7da4c65`) | 4.629 | 4.168 |
| nach K1–K11 (`05acad7`) | **2.750** (−1.879, −41 %) | **2.289** (−1.879, −45 %) |

Die ganze Datei enthält den MC-Kasten von `main` (gut 400 Wörter), der im Plan noch nicht vorkam; der Text ab 1.1 ist die Vergleichsgröße zur Planschätzung (≈ 2.500 Gesamt).

Druckabbildungen in Kap. 1: vorher 7 (QR-Galerie, Ergebnisbericht, Folien Claude, Co-Scientist, 2 × Nutzung, TAM) plus 2 Kasten-QR, jetzt 2 (QR-Galerie, Bloom). Zwei Kästen weniger.

## Galerie A „Was 2026 möglich ist“
Vier Beiträge mit Aussagetitel, zwei Sätzen, Link „Im Kapitel ansehen“ und eingeklappter Quelle: `#kosten` → `kapitel02#sec-capabilities`, `#chatbot-agent` → `kapitel02#sec-patterns-usage`, `#lernsong` → `kapitel06-fallbeispiele#sec-bsp-lernsong-forecast`, `#engpass` → `kapitel04#sec-widget-pruefen`. Kicker nennen nur Kapitelnummern (2, 4, 6), keine Abschnittsnummern, weil die parallele Sitzung Kap. 2 umbaut; die Links laufen über Labels.

- Farbe: Graustufen plus TH-Rot als einziger Akzent; die Bibliotheksfarben von `scm-viz` (Blau, Türkis, Slate-Grau) werden in der Galerie per CSS-Variablen überschrieben. Die eingebetteten Seiten (Kosten-Raster, Chatbot→Agent) behalten ihre eigene Palette.
- Höhe: Rahmen je Beitrag aus der Inhaltshöhe der eingebetteten Seite (gleiche Herkunft; Rückfallhöhen bei `file://`), Gesamthöhe per `postMessage` an Kap. 1 (Empfänger-Skript im html-Block). Kein Scrollbalken.
- Prüfung mit Skill `lehranimation-schritte` / `scripts/pruefe-aufmerksamkeit.cjs --buehne "#galerie"` (ein Beitrag = ein Schritt): **BESTANDEN** 4/4 (Wörter 37/37/33/96, Farbtöne je 1). Die 96 Wörter in Beitrag 4 stammen aus der Engpass-Animation selbst; als letzter Schritt zulässig. Erster Lauf: Beitrag 4 mit 3, dann 2 Farbtönen → behoben.
- Sichtprüfung Playwright 1200 und 390 px, eigenständig und eingebettet in `docs/kapitel01.html`: keine Scrollbalken, keine Konsolenfehler. Rahmenhöhen im Kapitel: 1708/896/602/559 px (1200) bzw. 2141/1026/521/586 px (390).
- `galerie-animationen.html` (Kaya) bleibt unverändert als QR-Ziel von Kap. 6. `images/qr/qr-galerie-animationen.png` ist jetzt unbenutzt, nicht gelöscht.

## Kürzungen: Umsetzung und Abweichungen vom Plan
- Neue Gliederung: 1.1 KI als Hilfe (Problem → Galerie → Workshops → drei Fragen → E-Bike → Cockpit), 1.2 Stand Herbst 2026 (`sec-weiterentwicklung`), 1.3 Nutzung, 1.4 Risiken, Kernaussagen, Lernfragen, Übersicht als Tabelle (`tbl-kapiteluebersicht`).
- **Abweichung Labels:** Der Plan wollte `sec-2025-examples` behalten. Da 1.2 und 1.4 verschmolzen sind und Kap. 2 auf `sec-weiterentwicklung` verweist, trägt 1.2 dieses Label; der einzige Verweis auf `sec-2025-examples` (in 1.3) zeigt jetzt dorthin. `sec-forschung` hatte keine Verweise und entfällt.
- Deep-Research- und Skills-Satz (Schwarcz, Liang, Skills) als ein Satz in 1.2 erhalten; Plan nannte sie nicht ausdrücklich.
- K7: HEPI 2026 geprüft (Stephenson & Armstrong, HEPI Report 199, 12.03.2026; Savanta, Dez. 2025, n = 1.054; 95 %, 94 %, 12 % vs. 3 %); Zitat „I'm not using my brain at all“ als Brücke zu 1.4. Neuer Eintrag `stephenson2026hepi`.
- K10: Anhang B `sec-prompt-ai-sandwich` hat einen Einleitungsabsatz (Problem, Lösungsansatz, „Ergebnisse nicht berichtet“, Lee 2025). K11: Saarbrücken-Kasten in Kap. 4 hinter dem Pedersen-Kasten, mit einem Überleitungssatz.
- Lernziele und MC-Kasten: `main`-Fassung (s. oben). Deren Lernziel 3 nennt nur Studierende, nicht Lehrende und Fähigkeitsüberhang; bei Bedarf ergänzen. Lernfragen und Lösungshinweise unverändert gültig (Lernfrage 6 trägt Kernaussage 3).
- In Kap. 1 nicht mehr zitiert und nirgends sonst: `alammara`, `freeman2025`, `ma2025`, `marangunic2015b`, `monib2025`, `openai2025b`, `willemain1994`, `willemain1995`, `willison2025a`. Stehen weiter in `references.json` (erscheinen nicht im Verzeichnis); bei Bedarf entfernen.
- Bilddateien der gestrichenen Abbildungen bleiben in `images/`; `docs/images/` hat sie beim Render entfernt.

## Render
`quarto render --to html` (Quarto 1.8.25): Zitier- und Querverweiswarnungen **0**; `?@`/`???` in den geänderten Seiten 0. Übrig: 36 × „OJS block count mismatch“, alle aus `kapitel04.qmd` (Little's-Law-Widget) und auf `main` identisch, also Altbestand. Download-PDF/EPUB in `docs/` nach dem Render aus Git zurückgeholt (unverändert, enthalten die Kürzung noch nicht).

## Offen
1. Roman: Diff ansehen (<https://github.com/TH-Koln-Bartnik/genai4teaching/compare/main...kapitel01-kuerzung>; nur Quelltext: Dateien `kapitel01.qmd`, `kapitel04.qmd`, `kapitel07-appendix02-prompt-sammlung.qmd`, `interactions/galerie-kapitel01.html`), dann Merge nach `main`. Vorher gegen den Kap.-2-Branch rebasen (Plan-Abhängigkeit).
2. Druck-PDF neu rendern (Reihenfolge laut README), sobald gemergt.
3. Optional: ungenutzte Einträge aus `references.json` entfernen; Updates U1, U3–U8 aus `kapitel01-argumente-und-optionen` (nicht Teil dieses Plans).
