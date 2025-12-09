# KI-Lehre-Buch (Quarto Book)

## Quickstart
1. R: `renv::init()` → `renv::snapshot()`
2. Python: `python -m venv .venv` → `source .venv/bin/activate` (Win: `.venv\Scripts\Activate.ps1`) → `pip install -r requirements.txt`
3. Render: `quarto render` (oder in RStudio: Render Book)

## Hinweise
- EPUB/DOCX sind in `_quarto.yml` aktiviert.
- Passe in `_quarto.yml` den Python-Pfad unter `execute.python.path` an dein OS an.