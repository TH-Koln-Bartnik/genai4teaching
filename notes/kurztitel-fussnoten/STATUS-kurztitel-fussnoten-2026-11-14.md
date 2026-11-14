# Status: Kurztitel und Fußnoten für Abbildungen und Tabellen (14.11.2026, Sitzung kurztitel-fussnoten)

Auftrag Roman (14.11.): Abbildungen und Tabellen bekommen Kurztitel; Detailbeschreibung, Quellennachweis und Legende wandern in eine Fußnote.

## Entscheidungen (MC, 14.11.)
- Fußnote in allen Ausgaben (online als Popup und am Seitenende, PDF, EPUB).
- Kurztitel deskriptiv und kurz (Runde 2); Prüfkriterium: Der Titel allein sagt im Verzeichnis, was die Abbildung zeigt. Runde 1 (Aussagesätze) verworfen.
- Abbildung „Lernpfade“ (Liniennetz, online Selbsttest) entfällt in allen Ausgaben; dafür Tabelle „Hauptinteresse, ich will … / Empfohlene Lesefolge / Begründung“ mit sechs Zeilen, darunter „Anwendungsbeispiele ansehen“ und „GenAI systematisch einführen (4D)“. Skripte in `scripts/lernpfade/` bleiben.
- Harness-Abbildung: Titel ohne Jahreszahl („Sprachmodelle mit wachsender Umgebung: Werkzeuge, Gedächtnis, Arbeitsschleife“).
- Druck: Abbildungen mit Fußnote fest an der Textstelle (`fig-pos="H"`).
- Fußnoten auf der Folgeseite (9 Fälle): erst beim Endsatz beheben; bis dahin nach jedem Druck-Render `python3 -I scripts/pruefe-bildfussnoten.py docs/downloads-genai4teaching.pdf`.
- Merge: `kurztitel-fussnoten` (enthält `pdf-testbau`) nach `main`, in einer neuen Sitzung.

## Umgesetzt (Branch `kurztitel-fussnoten`, von `pdf-testbau` @ `c0425b1`)
- 70 Unterschriften in 10 Kapiteldateien per Skript (`notes/kurztitel-fussnoten/apply.py` aus `vorschlag.json`), dazu `fig-detektor-duell` über `scripts/detektor-einbetten.py` (Generator angepasst, `_einbau/` neu erzeugt). Fußnoten-Labels `[^abb-…]` / `[^tab-…]` direkt hinter dem Gleitobjekt.
- Kap. 4: Zeilen „*Quelle: Erstellt mit Gemini 3 Pro …*“ unter den drei Illustrationen in die Fußnote verschoben.
- Explizite `fig-scap` aus `pdf-testbau` (Abb. 2.4, 5.1, 6.2) entfernt; `druck-satz.lua` Abschnitt 3 (automatischer Kurztitel) ersetzt durch: Abbildungen mit Fußnote → `fig-pos H`. Grund: `fig-scap` außerhalb von Kästen verschluckt den Fußnotentext.
- `include/preamble.tex`: `\footnotemark` robust, in Abbildungs- und Tabellenverzeichnis stumm (sonst Abbruch bei Tabellen in Kästen).
- Vorwort: Tabelle `tbl-lernpfade`; Verweise in Tabelle der Mechanismen und auf der Seite „Praxisbeispiele“ (inkl. `scripts/praxisbeispiele.py`) angepasst.
- Neues Prüfskript `scripts/pruefe-bildfussnoten.py`: listet Unterschriften, deren Fußnote auf einer anderen PDF-Seite steht.

## Prüfung
- Druck-PDF (Quarto 1.8.25, XeLaTeX, deutsche Trennmuster): 280 Seiten (Basis `pdf-testbau`: 282, dort ohne deutsche Trennmuster gebaut). Abbildungs- und Tabellenverzeichnis zeigen nur noch Kurztitel, keine URLs. Keine `??`.
- HTML: nur bekannte OJS-Warnungen; Fußnoten an den Unterschriften. EPUB: Fußnoten als Notenverweise; 35 fehlende Quellen wie bisher (Forschungsstand-Seite).
- `docs/`: HTML neu gerendert; Download-PDF/EPUB unverändert (wie in `pdf-testbau`).
- **Offen:** 9 Gleitobjekte, deren Fußnote auf die Folgeseite rutscht (PDF-Seiten 36, 50, 108, 113, 121, 125, 146, 184, 197). LaTeX kann eine Fußnote nicht an ein nicht gleitendes Bild am Seitenende binden; jede Textänderung davor verschiebt die Fälle.
- Umgebungshinweis Cloud: `texlive-fonts-extra` und `texlive-lang-german` nachinstallieren, sonst fehlt `fontawesome5` bzw. trennt LaTeX englisch („Arbeitss-chritte“). Frühere Cloud-PDFs hatten dieses Trennproblem.

## Startauftrag nächste Sitzung (Merge)
```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (add_repo mit Push-Zugriff, frisch klonen).
Lies notes/kurztitel-fussnoten/STATUS-kurztitel-fussnoten-2026-11-14.md.
Auftrag (Roman, 14.11.): Branch kurztitel-fussnoten (@ 3d61408, enthält pdf-testbau) mit dem
neuesten main zusammenführen. Parallele Sitzungen vom 14.11. (k7-korrekturen, k5-description,
primer-kapitel8) können Unterschriften berührt haben: Konflikte in Unterschriften zugunsten
Kurztitel + Fußnote lösen, neue Abbildungen/Tabellen aus main nach demselben Muster
nachziehen (deskriptiver Kurztitel, Rest als [^abb-…]/[^tab-…]) und Roman die neuen Titel per MC zeigen.
Umgebung: Quarto 1.8.25, apt texlive-fonts-extra texlive-lang-german.
Rendern: PDF (--profile print), Prüfskript pruefe-bildfussnoten.py, EPUB, HTML; Download-PDF/EPUB
in docs/ nur nach Rückfrage ersetzen. git fetch vor dem Push. Fragen nur als Multiple Choice.
```
