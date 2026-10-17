# Integrationsplan: Appendix C "Rollenspiele und Simulationen mit KI"

Stand: 2026-07-14

## Was bereits erledigt ist

**Neue Kapiteldatei** `kapitel08-appendix03-rollenspiele-simulationen.qmd` liegt im Repo-Ordner. Sie folgt den Konventionen von Appendix B (Frontmatter mit `title`, `bibliography: references.json`, `csl: apa.csl`, `lang: de`, `reference-section-title`). Das Literaturverzeichnis des PDFs wurde entfernt — Quarto erzeugt es beim Rendern automatisch aus den `@key`-Zitationen am Kapitelende (das steuert die Einstellung `section-bibliographies: true` in der `_quarto.yml`).

**`references.json` wurde ergänzt** um 16 neue Einträge (Backup: `references-backup-2026-07-14.json`). Neue Keys: `bjork1994`, `ericsson1993`, `csikszentmihalyi2008`, `willingham2021`, `wolfram2023`, `nofal2025`, `goslen2025`, `kindenberg2025`, `choi2025`, `yu2025a`, `wang2025c`, `nguyen2025a`, `nguyen2024a`, `lee2025a`, `vega2025`, `corbin2025`. Die Suffixe (`a`, `c`) vermeiden Kollisionen mit bestehenden Keys (`yu2024`, `wang2025`, `lee2025`, `nguyen2021`). Alle 38 im Kapitel verwendeten Zitationskeys wurden gegen die Datei geprüft.

Wichtig für deinen Workflow: Falls du `references.json` normalerweise aus Zotero (Better BibTeX) exportierst, überschreibt der nächste Export diese manuellen Ergänzungen. Dann bitte die 16 Quellen auch in Zotero anlegen — die Angaben stehen im Backup-Vergleich bzw. im PDF-Literaturverzeichnis.

## Schritt 1: `_quarto.yml` ändern (die einzige nötige Änderung)

Die `_quarto.yml` ist das Inhaltsverzeichnis und die Steuerzentrale des Buchs — Quarto liest daraus, welche Dateien in welcher Reihenfolge zum Buch gehören. Im Abschnitt `appendices` eine Zeile ergänzen:

```yaml
  appendices:  # Hier beginnt der Anhang (wird automatisch A, B... nummeriert)
    - kapitel06-appendix01-prompt-ueberblick.qmd
    - kapitel07-appendix02-prompt-sammlung.qmd
    - kapitel08-appendix03-rollenspiele-simulationen.qmd   # NEU
```

Die Nummerierung "Appendix C" vergibt Quarto automatisch aus der Position in der Liste — nirgendwo manuell "C" eintragen.

## Schritt 2 (optional): `index.qmd` aktualisieren

Die Startseite listet die Kapitel manuell auf (Zeilen 16–24). Dort ergänzen:

```
8.  Appendix 03: Rollenspiele und Simulationen mit generativer KI \
```

Und ggf. unter "Neu in dieser Version" einen Hinweis auf den neuen Anhang aufnehmen.

## Schritt 3: Lokal rendern und prüfen

Rendern heißt: Quarto verwandelt die .qmd-Textdateien in die fertige Website (HTML-Seiten im Ordner `docs/`). In RStudio: Terminal öffnen (oder Build-Pane → "Render Book"), dann:

```
quarto render
```

Prüfen im Vorschau-Browser: (a) Erscheint der neue Anhang als "C" in der Seitenleiste? (b) Werden alle Zitationen aufgelöst (keine Ausgabe wie "@nofal2025" im Text — das wäre ein fehlender Key)? (c) Stimmen die beiden Tabellen und die zwei Callout-Boxen? (d) Funktionieren die Querverweise auf die Abschnitte C.6/C.7?

## Schritt 4: Veröffentlichen

Die Website wird von GitHub Pages direkt aus dem Ordner `docs/` im Repository ausgeliefert. Veröffentlichen heißt deshalb einfach: die geänderten Dateien (neue .qmd, `_quarto.yml`, `references.json`, `index.qmd` und den gesamten neu gerenderten `docs/`-Ordner) committen und pushen — also die Änderungen im Versionsverzeichnis speichern und zu GitHub hochladen. In RStudio über das Git-Pane: alle Änderungen anhaken → Commit (z. B. "Add Appendix C: Rollenspiele und Simulationen mit KI") → Push. Nach 1–2 Minuten ist die Seite unter https://th-koln-bartnik.github.io/genai4teaching/ aktualisiert; PDF- und EPUB-Downloads werden beim Rendern automatisch mit erneuert.

## Inhaltliche Anmerkungen (bitte prüfen)

Vier Stellen des PDF-Originals waren inkonsistent; ich habe sie wie folgt behandelt:

1. **"Lim, Y., et al. (2025)"** in Tabelle 1 (Pharmazie-Zeile) fehlt im Literaturverzeichnis des PDFs. Die Lim-Studie in Tabelle 2 behandelt Lehramtsstudierende, nicht Pharmazie — vermutlich eine andere Quelle. Ich habe die Zelle als reinen Text belassen (keine Zitation). Bitte Quelle nachtragen oder Zeile prüfen.
2. **"Nguyen & Le, 2025"** (Abschnitt 3.3) steht im PDF-Text, fehlt aber im PDF-Literaturverzeichnis. Ich habe die Zitation weggelassen, statt eine Quelle zu erfinden.
3. **"Kross, 2020"** (Goal-Play-Box) fehlt ebenfalls im PDF-Literaturverzeichnis; im Text steht jetzt "Selbst-Distanzierung nach Kross" ohne Jahreszitat. Falls gemeint ist: Kross, E. (2021). *Chatter*. Crown — gern nachtragen.
4. **"Wannemacher et al., 2025 Fälle 132/172/17"**: Die abgeschnittene "17" habe ich zu "177" ergänzt (so steht es in Tabelle 1 des PDFs). Bitte gegenprüfen.

Außerdem angepasst: Fußnote 1 verweist jetzt auf "Kapitel 1 bis 5 dieses Skripts" statt auf das separate Grundlagenskript, und doppelt eingefügte Zitationsklammern des PDFs (Copy-Paste-Artefakte in Abschnitt 1) wurden bereinigt.
