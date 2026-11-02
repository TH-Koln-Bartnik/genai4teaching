# Status: Sitzung A – Kap. 2.4 Prompting gekürzt, gemergt (02.11.2026)

Grundlage: `claude/prompting-primer/AUFTRAG-prompting-kap02-anhangB-2026-11-02.md` (Fassung mit Nachtrag 11:42), `VORSCHLAG-kuerzung-prompting-kap02-2026-11-02.md`, `STATUS-prompting-primer-recherche-2026-11-02.md`.
Repo `TH-Koln-Bartnik/genai4teaching`: Branch `prompting-kuerzung` (2462b0c, d093947) per Fast-Forward nach `main`, dazu `docs/` (98020e2). Anhang B nicht angefasst.

## Entscheidungen Roman (MC, 02.11.2026)
- Diff freigegeben (a).
- Umfang: 827 Druckwörter bleiben (a), statt Ziel ≈ 720.
- Merge: Repo für die Sitzung freigegeben (b); Push und Merge aus der Cloud.

## Neue Gliederung 2.4 (Druckwörter nach `zaehle_druck.py`)
| Unterabschnitt | Anker | Wörter |
|---|---|---|
| 2.4 Einstieg | `sec-access` | 20 |
| 2.4.1 Vom Wunsch zum Werkvertrag | `sec-how-to-speak` (+ leerer Anker `sec-lab-recommendations`) | 110 |
| 2.4.2 Ein Auftrag mit Abnahmekriterium | `sec-prompt-components` | 167 |
| 2.4.3 Prompts schreiben lassen, ohne das Steuer abzugeben (neu, 2b) | `sec-prompts-schreiben-lassen` | 179 |
| 2.4.4 Drohen und Bestechen bringt nichts | `sec-prompting-myths` | 182 |
| 2.4.5 Was heißt das für Prompts in der Lehre? | `sec-prompts-teaching` | 169 |
| **Summe Druck** | | **827** (vorher 1.139, −27 %) |

Online 942 Wörter (vorher 1.131). Buch Druck 410 → 408 Seiten; 2.4 jetzt S. 53–55.

Umgesetzt: K1 (2.4.1 alt gestrichen, ein Satz zu drei Zugängen in Anhang D `sec-d-arbeitsumgebung`, mit `schwarze2025`), K2, K3 (Tabelle `tbl-lab-empfehlungen` entfällt), K4, K5 (Werkvertrag statt Hiwi), K6 (Personas, GROSSBUCHSTABEN, „Prüf das nochmal“, Prompt-Durchsicht), K7 (Landfair-Kasten im Druck drei Sätze plus QR, online vollständig). Planungsregel in 2.4.2. Ein Satz zu Arbeitsauftrag vs. Verhaltensbeschreibung in 2.4.5 (Zielpunkt für die Vorbemerkung von Anhang B). Tabellenzeile 6 (kleinste Änderung) wandert mit `@kotha2025` in 2.4.3.

Folgeänderungen: Lernziel 3, Kernaussage 5, Lernfrage 3, Lösungshinweis 3 (Anhang F), Auflösung `ez-k2-4` (→ `sec-prompt-components`), Glossar (Description, Prompt Engineering, Few-Shot → `sec-prompt-components`, Chain of Thought → `sec-prompting-myths`), Anhang D Vorbemerkung („als Auftrag mit Ziel und Abnahmekriterium“).

## Literatur (neu in `references.json`, alle Quellen am 02.11. aufgerufen)
- `anthropic2026prompting` – Prompting best practices (Grund, Beispiele, lange Dokumente oben, keine CRITICAL/MUST; „Kollegin ohne Vorwissen“-Test).
- `anthropic2026opus5` – Prompting Claude Opus 5 (vollständige Aufgabe vorab; Prüfbefehle streichen).
- `openai2026gpt55` – **Achtung:** URL `developers.openai.com/api/docs/guides/gpt-5.5` zeigt jetzt die Seite „Using GPT-6“; die zitierten Sätze („fresh baseline“, „target outcome, success criteria“) stehen dort im Abschnitt „Using GPT-5.5“. Eintrag: Titel „Using GPT-5.5“, Container „Using GPT-6 (OpenAI API Docs)“.
- `google2026gemini3` – **geändert gegenüber Vorschlag:** Die Vertex-Seite „Gemini 3 prompting guide“ stützt „ältere Prompt-Technik weglassen“ nicht. Zitiert ist der *Gemini 3 developer guide* (ai.google.dev/gemini-api/docs/gemini-3): „It may over-analyze verbose or overly complex prompt engineering techniques used for older models.“ Die Seite ist als veraltet markiert (verweist auf Gemini 3.8 Flash).
- `basil2025` – Prompting Science Report 4 (arXiv:2512.05858).
- `liu2024lost` – Lost in the Middle, TACL 12, 157–173 (Crossref geprüft).
- `liu2025mindstep` – Mind Your Step (by Step), arXiv:2410.21333 v4 (13.06.2025); ICML-Fassung nicht bestätigt, daher als Preprint.
- Entfernt: `vallverdu2025` (nicht mehr zitiert). `kotha2025`, `google2025`, `anthropic2025c` bleiben (Anhang B, `kotha2025` auch 2.4.3); `mollick2024d`, `gottweis2025`, `berryman2025` werden weiter zitiert.

## Prüfungen
- HTML-Render: keine neuen Warnungen (nur die bekannten 36 OJS-Zeilen), kein `?@`.
- Druck-PDF (`--profile print`): ohne Warnung, keine `??`, 408 Seiten. Dafür in der Cloud `texlive-fonts-extra` (fontawesome5) per apt nachinstalliert.
- Vollrender: Citeproc-Meldungen nur aus `forschungsstand.qmd` (eigene Online-Bib), unabhängig von dieser Änderung.
- Playwright 1.200/390 px: Layout in Ordnung; der horizontale Überlauf bei 390 px (472 px) bestand schon auf `main` und liegt außerhalb von 2.4.
- `docs/`: HTML und EPUB neu, Download-PDF = Druckvorlage (README-Reihenfolge).
- Live (GitHub Pages, 02.11. ca. 12:45): `kapitel02.html` zeigt 2.4.1 „Vom Wunsch zum Werkvertrag“ und 2.4.3 „Prompts schreiben lassen, ohne das Steuer abzugeben“; alte Überschrift „Wo sprechen?“ entfernt.

## Technischer Befund: leere Anker
Ein leerer Span `[]{#sec-…}` ist für Quarto **kein** Querverweisziel (`@sec-…` meldet „Unable to resolve crossref“). Deshalb trägt `sec-prompt-components` jetzt die Überschrift 2.4.2; `sec-lab-recommendations` bleibt nur als HTML-Sprungmarke für alte Links und darf nicht per `@` zitiert werden. `sec-access-modes` entfällt ganz (keine Verweise).

## Für Sitzung B (vor ihrem Merge: `git fetch && git rebase origin/main`)
- Anhang B Z. 5 und Z. 102 verweisen auf `@sec-prompt-components`; das löst weiter auf (2.4.2 „Ein Auftrag mit Abnahmekriterium“). Z. 102 spricht von einem „Kasten in @sec-prompt-components“, den es dort nicht mehr gibt (gab es schon vorher nicht) – beim Umbau der Vorbemerkung bzw. des Strukturierers korrigieren.
- 2.4.3 verweist online auf `@sec-prompt-strukturierer` und `@sec-prompt-systemprompt`, im Druck nur auf `@sec-prompt-systemprompt`, weil der Strukturierer bisher nur online steht. Wenn B den Auftrags-Interviewer (Anker `sec-prompt-strukturierer`) in die Druckfassung holt, in `kapitel02.qmd` den Span `[Eine Vorlage dafür steht in Anhang B (@sec-prompt-systemprompt).]{.content-visible unless-format="html"}` durch den gemeinsamen Satz mit beiden Verweisen ersetzen.
- Für die Vorbemerkung von B: Die zwei Prompt-Arten stehen in 2.4.5 (`sec-prompts-teaching`), die Kontrollpunkte in 2.4.3 (`sec-prompts-schreiben-lassen`).
- B hat Konfliktpotenzial nur in `references.json`, falls B dort Einträge ergänzt (A hat 7 Einträge am Dateiende angehängt und `vallverdu2025` entfernt).

## Ablage
- Projekt: `claude/prompting-primer/STATUS-prompting-kap02-A-2026-11-02.md`
- Tresorit: `Projektnotizen-Claude/prompting-primer/STATUS-prompting-kap02-A-2026-11-02.md` (dazu der Wort-Diff `DIFF-prompting-kap02-A-2026-11-02.diff`)
- Repo: `notes/STATUS-prompting-kap02-A-2026-11-02.md` auf `main`

## Offen
- Kein offener Punkt aus Sitzung A. Optional später: Druckfassung 2.4 auf ≈ 720 Wörter straffen (Jemisin-Einstieg, Sportwagen-Absatz, Auflösungstext).

## Startauftrag nächste Sitzung
Sitzung A ist abgeschlossen. Weiter mit Sitzung B laut `AUFTRAG-prompting-kap02-anhangB-2026-11-02.md`; vor deren Merge `git fetch && git rebase origin/main` und die Hinweise oben unter „Für Sitzung B“ abarbeiten.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja; main @ bd7ac26 + Notiz-Update)
