# STATUS S3 Einbau – Scaling Laws in 2.3.1 (01.11.2026, ca. 17:15)

Sitzung `session_01NiJQCWSZvpXnpAJLkUaGnh`. Gestartet mit dem S1b-Startauftrag; beim Lesen zeigte sich, dass S1b schon vollständig gemergt war (`STATUS-kapitel02-neugliederung-s1b-2026-11-01.md`, main @ 668a800). Ohne Änderung an S1b umgeschwenkt auf den Einbau von S3.

## Entscheidungen Roman (MC, 01.11.)
- S1b-Teil-2 nicht starten (überholt); stattdessen **Einbau S3 Scaling Laws**.
- Repo mit Push-Recht; Tresorit-Ablage wie bisher (siehe Ablage: Verbindung brach am Sitzungsende ab).
- **iframe-Höhe 1460 px, Felder gestapelt.** Befund: Die Buchspalte ist am Desktop nur 599 px breit, die Animation stapelt unter 600 px; Inhalt 1347–1450 px (Desktop) bzw. 1163–1265 px (390 px). Die im S3-Status vorgeschlagenen 820 px hätten das rechte Feld abgeschnitten. Verworfen: Stapelgrenze auf 520 px senken (passt in 820 px, Beschriftung nur ca. 9 px).
- Anschluss: Der folgende Satz beginnt jetzt „**Trotzdem** bleiben die Grenzkosten der Nutzung sehr niedrig …“, damit er nicht wie ein Widerspruch zu „Reasoning-Modelle kosten je Antwort mehr“ wirkt.
- Merge freigegeben.

## Entstanden (Repo, main @ 7912531, gemergt)
- Branch `scaling-laws` auf origin/main 321660c rebased (konfliktfrei): `451b238` Animation/Druckbild/Quellen, `df4a62a` Notiz.
- `ad6c331` `kapitel02.qmd` 2.3.1: Absatz „Den Fähigkeitszuwachs beschreiben zwei Scaling Laws …“ ersetzt durch den Textvorschlag aus `STATUS-scaling-laws-2026-11-01.md` (Begriff **Skalierungsgesetze** (*scaling laws*), Belege kaplan2020, hoffmann2022, openai2024, snell2024, grootendorst2025, gottweis2025, schwarcz2025; ein Satz je Zeile); danach online iframe `interactions/scaling-laws.html` 1460 px, im Druck `{#fig-scaling-laws}` mit `images/druck/scaling-laws-qr.png`; steht nach dem METR-Zeithorizont und vor „Wie schnell die Preise fallen …“.
- `417a363` Anschluss „Trotzdem bleiben …“.
- `3a39edf` Merge, `7912531` docs/ (Quarto 1.8.25 `--to html`; Download-PDF/EPUB per SHA256 unverändert zurückgelegt).

## Prüfung
- Render `--to html`: nur die bekannten 36 × „OJS block count mismatch“, kein `?@`.
- Playwright 1200/390 px: 20 iframes, keine JS-Fehler; Animation bis Schritt 8 durchklickbar, Inhalt passt ins iframe (≤ 1450 px).
- LaTeX-Testrender (`--profile print --to pdf`, fontawesome5 per apt `texlive-fonts-extra` nachinstalliert): Abb. 2.8 auf Druckseite 29 neben der METR-Abbildung, keine `??`, nur bekannte Warnung `@tbl-prompts-online`. Kap. 2 +1 Seite; Buch 386 → 390 Seiten (Kapitelanfänge verschieben sich auf rechte Seiten).
- Live-Prüfung GitHub Pages: nicht erfolgt (Abruf brauchte Freigabe, keine Antwort). Bitte einmal https://th-koln-bartnik.github.io/genai4teaching/kapitel02.html#sec-capabilities öffnen.

## Offen
1. Live-Prüfung (s. o.).
2. Remote-Branch `scaling-laws` zeigt noch auf den alten Stand `8a01456` (vor dem Rebase; Inhalt ist über main gemergt). Kann auf GitHub gelöscht werden, ebenso `kapitel02-neugliederung`, `kapitel02-neugliederung-sitzung-b`.
3. Tresorit-Kopie dieser Notiz nachholen (Rechner war am Sitzungsende nicht verbunden).
4. Glossar „Scaling Laws“ (glossar.qmd Z. 121) → „Skalierungsgesetz (*scaling law*)“ mit Verweis auf die Animation: Aufgabe S6.
5. Allgemein: Feste iframe-Höhen sind bei 599 px Spaltenbreite für mehrere Animationen knapp; eine automatische Höhenanpassung (postMessage) wäre eine buchweite Verbesserung nach dem 15.11.

## Startauftrag nächste Sitzung (laut Feedback-Plan)
„Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` und arbeite Abschnitt S6 ab (Kap. 1–3).“ Parallel möglich: Bau S4 (Rollenkarte) oder S5 (Audio-Drehbuch).

## Candidate permanent notes
- Eine feste iframe-Höhe stimmt nur für die Breite, an der sie gemessen wurde; die Textspalte eines Buchs ist schmaler als das Browserfenster.
- Zwei wahre Sätze können nebeneinander wie ein Widerspruch wirken, wenn das Bindewort fehlt, das ihr Verhältnis anzeigt.
- Eine Planungsnotiz veraltet, sobald eine parallele Sitzung ihren Auftrag erledigt; vor jedem Start gehört die neueste Statusnotiz gelesen.

## Ablage
- Projekt: `claude/feedback-2026-11-01/STATUS-scaling-laws-einbau-2026-11-01.md`; Stand-Nachtrag in `PLAN-feedback-sitzungen-2026-11-01.md`.
- Repo: `notes/2026-11-01-status-scaling-laws-einbau.md` auf main.
- Tresorit: offen (s. Offen 3).

Ablage geprüft: Projekt ✓ / Tresorit ✗ (nachholen) / Repo ✓ (gemergt: ja, main @ 7912531)
