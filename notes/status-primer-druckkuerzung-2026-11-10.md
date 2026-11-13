# Status: Anhang C, Druckkürzung des Praxis-Primers (Sitzung 10.11.2026, 21:09; Abschluss 13.11.2026)

Vorgänger: `claude/primer/STATUS-primer-anhang-c-2026-11-10.md` (mit Nachtrag 20:30). Diese Sitzung hat den Kern des Startauftrags ausgeführt; Grafiken und Merge stehen aus.

## Vorgefunden

- Der Patch war schon eingespielt: Eine Parallelsitzung (`…CSiW2…`) hat ihn um 20:16 als Commit `8ae8279` nachgebaut („inhaltsgleich mit 79fa95e“), als Branch `primer-anhang` gepusht und um 21:04 `main` @ `c18fa56` hineingemergt (`4a658f7`). Roman bestätigte per MC, dass diese Sitzung beendet ist. Kein zweites `git am`.
- In Tresorit lag bereits `primer/primer-anhang-c-2026-11-10.patch` in der nachgebauten Fassung (29.806 Bytes, Commit `8ae8279`), nicht die Fassung `79fa95e` aus dem Projekt.

## Umgesetzt (Branch `primer-anhang`, Commit `962a2dc`, **gepusht, nicht gemergt**)

- Nur `anhang-primer.qmd`, +25/−9, per Skript mit Zählprüfung (je vier Treffer). Je Primer A–D stehen jetzt nur online: Kasten „Empfehlungen“, Arbeitsablauf, Prüfliste, Kasten „Umsetzung, Stand 10/2026“, Kasten „Was die Forschung nicht belegt“. Im Druck bleiben Prinzip, Weiche-Tabelle (Primer 0, C, D), Abbildung mit QR-Code und ein Verweissatz: „Sechs Empfehlungen mit Prüffragen, den Arbeitsablauf mit KI, die Prüfliste, ein erprobtes Beispiel und die Grenzen der Evidenz enthält die Online-Fassung dieses Primers (QR-Code in @fig-…).“
- Einleitung des Anhangs: Die Druckfassung nennt als Aufbau Prinzip, Tabelle und Abbildung und verweist für alles Übrige auf die Online-Version; die Online-Fassung ist unverändert.
- Druckwörter (`scripts/zaehle_druck.py`): 3.645 → **1.293** (Kopf 103, Weiche 194, A 223, B 219, C 291, D 263). Die drei Druckgrafiken bringen je einen Satz Bildunterschrift dazu; das Ziel von rund 1.500 bleibt erreichbar.

## Prüfung

- `quarto render --to html` (1.8.25, eigener Ausgabeordner, `docs/` unberührt): kein unaufgelöster Verweis in `anhang-primer.html`; alle Kästen online vorhanden (4 Empfehlungen, 4 Umsetzung, 4 „nicht belegt“); der Druck-Verweissatz erscheint online nicht; Abschnitte C.1–C.5; die vier Rückverweise aus Kap. 2, 6 und 7 lösen auf.
- `quarto render --profile print --to pdf`: 372 Seiten. Anhang C auf den PDF-Seiten 351–359 (Buchseiten 331–339): **sieben Seiten Text, zwei Seiten Literatur**; Glossar ab PDF-Seite 361. Im Container fehlte `fontawesome5.sty`; behoben mit `apt-get update && apt-get install -y --no-install-recommends texlive-fonts-extra`.
- **Tabellenumbrüche:** Tabelle C.1 (Weiche) bricht nach zwei Zeilen von Buchseite 331 auf 332 um, Tabelle C.3 (Lernspiele) nach zwei Zeilen von 336 auf 337. Nicht behoben, weil die drei Druckgrafiken den Seitenlauf verschieben; danach richten.
- Abb. C.3 und C.4 bestehen im Druck nur aus QR-Code und Bildunterschrift, bis C-4 und D-4 gebaut sind.
- Der PDF-Lauf meldet zwei unaufgelöste Verweise, die nicht aus dem Primer stammen: `@sec-loesung-stuetzraeder` und `@sec-loesung-token-genres` (Kap. 2 → Lösungshinweise). Bestand vor dieser Sitzung; vor dem Druck klären.
- Nicht geprüft: 390 px, Live-Seite (kein Merge), EPUB.

## Offen

1. **Druckgrafiken 0-2, C-4, D-4** und **Druckzwillinge für A-5/A-8 und B-5/B-8** (Stoffe der Runde 2), dann Tabellenumbrüche richten, PDF neu messen.
2. **Merge nach `main`**, `docs/` rendern (Reihenfolge laut README: erst Druck-PDF sichern), live prüfen. Vor dem Merge `git fetch` und `main` hineinmergen; im Projekt liegen seit dem 10.11. weitere Patches (`vorwort-galerie/*`), die `main` verändern können.
3. Rückverweis in Kap. 7 („Empfehlungen und Prüfschritte … stehen im Praxis-Primer“) zeigt im Druck jetzt auf Inhalte, die nur über den QR-Code erreichbar sind. Lassen oder im Druck „in der Online-Fassung des Praxis-Primers“ ergänzen.
4. Offen 3–8 der Vorgängernotiz unverändert (Lernpfade, Galerie Kap. 1, Praxisbeispiele-Seite, Stand-Vermerke, Originallektüre, Quellen der Runde 2).

## Ablage

- Projekt: `claude/primer/STATUS-primer-druckkuerzung-2026-11-10.md`
- Repo: `notes/status-primer-druckkuerzung-2026-11-10.md` auf `primer-anhang`
- Tresorit `Projektnotizen-Claude/primer/`: `STATUS-primer-anhang-c-2026-11-10.md` und `VORSCHLAG-primer-showcases-2026-11-10.md` am 10.11. kopiert. **Fehlen noch:** `OPTIONEN-primer-showcases-runde2-2026-11-10.md`, `RAPS-c5-c6-entwurf-2026-11-10.md` und diese Notiz. Beim Abschluss am 13.11. war der Rechner `rb-work` nicht mit der Sitzung verbunden.

Ablage geprüft: Projekt ✓ / Tresorit teilweise (2 von 5, drei Dateien nachholen) / Repo ✓ (Branch `primer-anhang` @ Commit dieser Notiz, gemergt: nein)

## Startauftrag nächste Sitzung

> Projekt Logos-Lehrbuch. Lies `claude/primer/STATUS-primer-druckkuerzung-2026-11-10.md`, `claude/primer/OPTIONEN-primer-showcases-runde2-2026-11-10.md` und `claude/primer/VORSCHLAG-primer-showcases-2026-11-10.md`. Kläre per MC Push-Zugriff auf TH-Koln-Bartnik/genai4teaching und die Tresorit-Freigabe für `C:\Users\roman\My Tresors\0_Roman Arbeit\0_GenAI\1-Research\06-Lehrbuch-Publikation-Logos`; kopiere zuerst die drei fehlenden Dateien nach `Projektnotizen-Claude/primer/`. Arbeite auf `origin/primer-anhang` weiter (`main` vorher hineinmergen). Baue die Druckgrafiken 0-2, C-4, D-4 (Graustufen plus eine Akzentfarbe, Bildunterschrift ein Satz; C-4 und D-4 ersetzen die reinen QR-Abbildungen C.3 und C.4) und die Druckzwillinge für A-5/A-8 und B-5/B-8. Rendere HTML und Druck-PDF (`texlive-fonts-extra` nachinstallieren), richte die Umbrüche der Tabellen C.1 und C.3, miss Seiten und Druckwörter von Anhang C, Diff per MC, Merge, `docs/` rendern, live prüfen. Offen 3–5 der Vorgängernotiz mit erledigen, wenn die Sitzung es trägt. Quarto per `pip install --break-system-packages quarto-cli==1.8.25`. Fragen nur als Multiple Choice. Am Ende `ergebnisse-sichern`.
