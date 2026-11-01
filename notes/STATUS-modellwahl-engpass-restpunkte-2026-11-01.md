# Status: Restpunkte Modellwahl 2.3 und Engpass-Animation erledigt (01.11.2026, ca. 08:50)

Vorlagen: `claude/modellwahl/STATUS-modellwahl-2026-10-31.md`, `claude/kapitel02-p8-modellwahl/STATUS-p8-merge-2026-10-31.md`.

## Entscheidungen Roman (01.11., Multiple Choice)
1. 2.3: **Daumenregel-Bild streichen, Setup-Satz behalten** (Bild doppelte die Prüfregel).
2. `rogers2026`, `vellum2025` **aus `references.json` entfernt** (Sicherung: `notes/references-backup-2026-10-17-vor-screening.json`, Git-Historie).
3. Engpass-Animation: **breiter Rahmen + automatische Höhe**.
4. `interactions/agenten-protokoll.html`: **gelöscht** (Quelle und `docs/`; wiederherstellbar aus Commit `8c442cc`).
5. Branch **gemergt**; danach neue Sitzung.

## Umsetzung (Repo `TH-Koln-Bartnik/genai4teaching`)
Branch `kapitel02-modellwahl-engpass-offen` von `main` (`8c442cc`), Commit **`0e7b33a`**, per Fast-Forward in **`main` gemergt und gepusht**.

| Datei | Änderung |
|---|---|
| `kapitel02.qmd` @sec-model-choice | `fig-reasoning-models-better` (images/use-reasoning-models.jpg) entfernt; JPG liegt weiter in `images/`, unverwendet |
| `kapitel02.qmd` @sec-harness-Umfeld (Engpass) | Einleitungssatz eigener Block; iframe in `:::: {.column-page}` (verschachtelt in `content-visible`, sonst geht die Klasse verloren), `id="agenten-engpass"`, Startwert 1000 px, Listener für Nachricht `rahmen-hoehe` |
| `interactions/agenten-engpass.html` | meldet Inhaltshöhe per `postMessage({typ:"rahmen-hoehe", id:"agenten-engpass", h})` über ResizeObserver (Muster wie Galerie Kap. 1); Text Schritt 4 von 46 auf 35 Wörter: „Allein ist Kugel A nach 24 Minuten fertig, mit sieben anderen nach 43,5. 19,5 Minuten davon wartet sie auf den Menschen; die Agenten arbeiten nur 16 Minuten an ihr.“ + kurzer Vorhersage-Satz |
| `references.json` | zwei Einträge entfernt (nur Löschungen im Diff) |
| `docs/` | ganzes Buch als HTML neu gerendert (Quarto 1.8.25), Download-PDF/EPUB unverändert zurückkopiert |

## Prüfung (Playwright)
| Fenster | Rahmen vorher | Rahmen nachher | seitliches Schieben |
|---|---|---|---|
| 1400 px | 749 × 1160 | 1300 × 931 (Inhalt 929) | nein (vorher ja) |
| 1100 px | 566 × 1160 | 1049 × 931 | nein (vorher ja) |
| 768 px | 508 × 1160 | 717 × 911 | ja, 75 px (Grenze 760 px, gewollt) |
| 390 px | 339 × 1160 | 339 × 1248 | ja, Wisch-Hinweis (gewollt) |

Rahmen wächst mit, wenn in Schritt 4 die Erklärung aufklappt (1212 px). Keine JS- oder 404-Fehler; Render: nur die 36 bekannten OJS-Warnungen, `?@` in `kapitel02.html`: 0.

## Offen
1. **Druck-PDF** (Profil print) rendern und prüfen: Abbildungen 2.1, 2.3 (`fig-modellklassen`, `fig-abo-stufen`, Baum-SVG mit QR), P8, Fußnote `[^preisstufen]`. TeX fehlt in der Cloud → lokal oder TinyTeX-Versuch.
2. OpenAI-Euro-Preise auf chatgpt.com (deutsche Ansicht) und Anthropic-Euro-Preis im Bestellvorgang selbst gegenprüfen.
3. Kapitel 2 bei 390 px 657 px breit: Tabelle in @sec-harness umbrechen.
4. Branches löschen laut `claude/status-branches-2026-11-01.md` (16 Branches, alle in main oder verworfen) plus `kapitel02-modellwahl-engpass-offen`.
5. Optional: `images/use-reasoning-models.jpg` löschen (unverwendet).
6. Tablet-Breite 700–760 px: Animation schiebt noch 75 px; bei Bedarf Grenze im Umbau der Animationen senken.

## Startauftrag für die nächste Sitzung
„Lies `claude/modellwahl/STATUS-modellwahl-engpass-restpunkte-2026-11-01.md`. Kläre per Multiple Choice, ob das Druck-PDF lokal oder per TinyTeX in der Cloud gerendert wird, und prüfe dann die Abbildungen aus 2.1, 2.3 und P8 sowie die Fußnote. Arbeite auf eigenem Branch von `main`.“

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gemergt: ja, `0e7b33a` in main)
