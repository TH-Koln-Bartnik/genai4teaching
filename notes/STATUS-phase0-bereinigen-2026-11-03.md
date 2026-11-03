# STATUS Phase 0 „Bereinigen“ (03.11.2026)

Auftrag: Startauftrag Phase 0 aus `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md`, Abschnitt 8. Sitzung ab 11:26, Claude Opus 5.5.

## Ergebnis
`main` steht auf `da80b9e` (danach nur Notiz-Commits). Drei Branches sind gemergt, einer war schon drin, dreizehn sind zum Löschen freigegeben, der Plan trägt jetzt die Druckwörter je Abschnitt.

| Branch | Ergebnis | Commit |
|---|---|---|
| `mollick-s3-bibliothek` | gemergt. S1 war per Rebase schon in `main` (`git cherry` „-“), G3 damit erfüllt. Konflikte: `references.json` per Skript nach `id` vereinigt (Duplikat `massenkoff2026cadences` verworfen, `onet2026database` neu), `package.json` und `scripts/druck-abbildungen.mjs` beide Seiten, `package-lock.json` neu erzeugt | `db41951` |
| `frontier-begriff` | nicht gemergt, weil schon als `6fca58e` in `main` (Quelländerungen zeilengleich) | – |
| `prompting-rollen-evidenz` | gemergt; MC Druckumfang: **Druck kurz** („Was man jetzt empfiehlt“ + QR, ~170 Wörter), online vollständig (~415); fünf Quellen neu | `a47e41a` |
| `vorwort-praxisbeispiele` | gemergt (MC); `scripts/praxisbeispiele.py` um Bibliothek (S3) und Film „Stützräder“ (P6) ergänzt, Seite neu erzeugt, Vorwort „35“ → „37“ (drei Stellen) | `7917ec1` |
| `docs/` | ganzes Buch neu gerendert (Quarto 1.8.25 aus PyPI, `--to html`), PDF/EPUB aus Git zurückgeholt | `da80b9e` |

## Prüfungen
- `npm test` 34/34, `node --test tests/streich-test.test.mjs` 8/8.
- Render: nur die 36 bekannten OJS-Warnungen, kein `?@`, keine unaufgelösten Verweise.
- `node scripts/pruefe-bibliothek.mjs`: alle Schritte, keine Konsolenfehler, reduced-motion → Liste.
- Playwright 1200/390 px auf Vorwort, Praxisbeispiele, Kap. 2 (Anker `sec-rollen-evidenz`), Kap. 4 (Anker `sec-bibliothek-prompts`): keine Fehler, keine 404. Waagerechtes Scrollen bei 390 px (Vorwort 67, Kap. 2 92, Kap. 4 258 px) besteht unverändert schon vor den Merges.
- Kein Inhalt doppelt: Bibliothek, Rollen-Kasten, Galerie stehen je genau einmal in `main` und standen vorher nicht drin. (Die Parallelnotiz `claude/STATUS-branch-abgleich-2026-11-03.md` führt sie als „schon in main“; sie hat offenbar den Stand nach dem Push gesehen.)
- Live-Prüfung auf GitHub Pages nicht gemacht (Pages-Lauf nicht abgewartet).

## Branches (MC 03.11.)
- **Löschen freigegeben (13):** `frontier-begriff`, `mollick-s3-bibliothek`, `prompting-rollen-evidenz`, `vorwort-praxisbeispiele`, `kapitel02-4d-p4`, `anhangB-prompts-neu`, `mollick-s1-hoeher-tiefer`, `mollick-s1-hoeher-tiefer-rebase`, `mollick-s4-detektor`, `scaling-laws`, `fachbegriffe-erklaeren`, `kapitel02-neugliederung-sitzung-b`, `audio-beispiele`. Geprüft mit `git cherry` und, wo Commits ohne Gegenstück blieben, Zeilenabgleich gegen `main` plus Statusnotizen. Der Proxy blockiert das Löschen (HTTP 403, auch Tags) → **Roman löscht auf https://github.com/TH-Koln-Bartnik/genai4teaching/branches/all**. Gesamtliste der löschbaren Branches (41 + `audio-beispiele`): `claude/STATUS-branch-abgleich-2026-11-03.md`.
- `audio-beispiele` gesichert als Branch **`archiv/audio-beispiele`** (`9c4e151`).
- **`zitierstil-apa7-de` ist nicht überholt** (offizieller APA-7-CSL mit `de-DE`, Buchkapitel „Bd., S.“, 154 Zeilen `references.json` bereinigt); `main` hat noch das Zotero-`apa.csl` von 12/2025. MC: behalten, Merge in Phase 3 mit Druck-Testrender (Plan E10).
- Offen und nicht Teil dieser Sitzung: `mollick-s2-podcast` (G2c, G3), `mollick-s2n-notebook`.

## Druckwörter
Plan Abschnitt 1 (Spalte „Druck 03.11.“) und neuer Abschnitt 2.9 (je Abschnitt, auch Überschriften ohne ID). Summe 59.814 (Vorwort, Kap. 1–6, Anhang A, B). Mit Kap. 3 neu (3.500) und Anhang C (~400) sind bis zum Budget 53.500 rund **10.200 Wörter** zu kürzen. Befunde: AI-Fluency-Übung steht schon nur online (Druck 0; Kap. 5 holt sie als +900 herein); „Was sind unsere Aufgaben?“ (1.590) hat keine ID. Das Zählskript zählt rohe HTML-Blöcke mit; Auswirkung buchweit < 60 Wörter, Skript unverändert.

## Ablage
- Plan: Projekt `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md` (überschrieben), Tresorit `Projektnotizen-Claude/gliederung-neu/` (überschrieben), Repo `notes/2026-11-03-plan-umsetzung-neue-gliederung.md`.
- Diese Notiz: Projekt `claude/gliederung-neu/`, Tresorit `Projektnotizen-Claude/gliederung-neu/`, Repo `notes/`.

## Offen
1. Roman: 13 Branches auf GitHub löschen (Liste oben), Proxy erlaubt es der Sitzung nicht.
2. Roman: Datei `.schreibtest_claude` (leer) im Tresorit-Ordner `0_GenAI` löschen; entstand beim Schreibtest, die Sitzung hat keine Löschrechte.
3. GitHub-Pages-Lauf live prüfen: Vorwort-Galerie, Praxisbeispiele, Kap. 4 Bibliothek (Bildrate auf Laptop und Tablet, aus S3 offen).
4. Umzug (Phase 1): Linktexte „Kapitel 6 …“/„Kapitel 4 …“ in `scripts/praxisbeispiele.py` und Galerie auf neue Kapitelnummern setzen, Seite neu erzeugen.
5. S2: G2c/G3 vor Phase 1 entscheiden oder als „nach dem Umzug verpflanzen“ markieren (E3).

## Startauftrag nächste Sitzung (Phase 1, Mi 04.11.)
> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md`, Abschnitte 2–5, und `claude/gliederung-neu/STATUS-phase0-bereinigen-2026-11-03.md`. Kläre per MC Repo-Schreibzugriff, Tresorit-Freigabe und ob S2 (`mollick-s2-podcast`) vorher gemergt oder nach dem Umzug verpflanzt wird. Dann Phase 1 nach Startauftrag in Abschnitt 8 (du bist die einzige Sitzung an Kapiteldateien); zusätzlich Linktexte in `scripts/praxisbeispiele.py` auf die neuen Kapitel setzen. Quarto per `pip install --break-system-packages quarto-cli==1.8.25`. Abschluss mit `ergebnisse-sichern`.

## Candidate permanent notes
- Ein Branch ist nicht schon dann erledigt, wenn `git cherry` ihn als offen meldet: Nach Konfliktlösung oder Rebase trägt derselbe Inhalt eine andere Patch-ID.
- Eine Liste „überholter“ Arbeitsstände muss am Inhalt geprüft werden, weil ein falsch einsortierter Stand beim Aufräumen echte Arbeit löscht.
- Eine Wortzählung für den Druck muss dieselben Weichen auswerten wie der Satz, sonst misst sie das Online-Buch.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja – S3, Rollen-Kasten, Vorwort-Praxisbeispiele in `main`; nicht gemergt: `zitierstil-apa7-de`, `mollick-s2-podcast`, `mollick-s2n-notebook`, `archiv/audio-beispiele`)
