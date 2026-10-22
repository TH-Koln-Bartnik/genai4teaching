# Generative KI als Hilfe zum Lehren und Lernen (Quarto-Buch)

Online-Skript und Druckvorlage für das Open-Access-Lehrbuch (Logos Verlag Berlin, 2026) aus **einer** Quarto-Quelle.

## Rendern
- Voraussetzungen: Quarto ≥ 1.7, eine TeX-Distribution mit XeLaTeX, KOMA-Script, tcolorbox, fontawesome5 und den TeX-Gyre-Schriften (TeX Live: `texlive-xetex texlive-latex-extra texlive-fonts-extra texlive-lang-german lmodern`), außerdem `rsvg-convert` (librsvg) für SVG-Abbildungen im PDF. Es wird kein R und kein Python benötigt (keine ausführbaren Code-Chunks).
- `quarto render` erzeugt HTML (nach `docs/`), PDF und EPUB (`docs/downloads-genai4teaching.*`).
- `quarto render --profile print --to pdf` erzeugt nur die Druckvorlage (17 × 24 cm, ohne die lebenden Online-Seiten, mit Impressum; Einstellungen in `_quarto.yml` unter `format: pdf`, LaTeX-Präambel in `include/preamble.tex`).
- Achtung Reihenfolge: Ein reiner PDF-Render leert die HTML-Dateien in `docs/`. Deshalb zuerst die Druckvorlage rendern und sichern, dann `quarto render` (Online-Version samt Download-PDF/EPUB) und zuletzt die gesicherte Druckvorlage nach `docs/downloads-genai4teaching.pdf` zurückkopieren, damit der Download auf der Website die Druckfassung ist.
- Prompt-Kästen (Codeblöcke) werden im PDF mit Zeilenumbruch gesetzt (`fvextra`, definiert in `include/preamble.tex`).

## Veröffentlichung
GitHub Pages wird aus dem Ordner `docs/` des Branches `main` bedient. Der frühere Workflow nach `gh-pages` wurde entfernt; der Branch `gh-pages` (Stand Dezember 2025) kann gelöscht werden.

## Struktur
- `index.qmd`, `kapitel01.qmd` … `kapitel05.qmd`: Hauptkapitel
- `kapitel06-…`, `kapitel07-…`, `kapitel08-…`: Anhänge A–C; `references.qmd`: konsolidiertes Literaturverzeichnis
- `references.json` (CSL-JSON, nur zitierte Einträge), `apa.csl`
- `_filters/`: Lua-Filter (z. B. `<br>` → Zeilenumbruch in allen Formaten)
- `interactions/`: interaktive Lernspiele (nur online; im Druck QR-Codes aus `images/qr/`)
- `notes/`: Arbeitsnotizen zu früheren Änderungen

Interaktive Elemente stehen in `::: {.content-visible when-format="html"}`-Blöcken, die Druckalternative (QR-Code) in `unless-format="html"`.
