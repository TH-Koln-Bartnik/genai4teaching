# STATUS Befundtext unter Abb. 3.1 (10.11.2026, 19:42–20:45)

Auftrag: Startauftrag aus `claude/abb-3-1-heatmap/STATUS-abb-3-1-heatmap-2026-11-03.md` (offene Punkte 3 und 4). Sitzung Claude Fable 5.2. Geänderte Buchdateien: `kapitel03-automation.qmd`, `references.json`, `docs/`.

## Entscheidungen (MC, Roman)
- Repo: Branch, Diff per MC, Merge freigegeben. Tresorit: Ordnerfreigabe erteilt.
- Diff: „Mergen wie gezeigt“ (Absatz in Online- und Druckfassung, Satz 2 mit Zusatz zur Gesprächsform).

## Ausgangslage
`main` stand nicht mehr auf `64493e8`, sondern auf `f38ab89` (eine Commit „Notizen Fable-Interaktionen“, nur `notes/`); kein Konflikt mit Kap. 3 oder `references.json`.

## Ergebnis
`main` steht auf `dbf474e`, Fast-forward von `f38ab89`; Branch `abb-3-1-befundtext` identisch mit `main` (löschbar).

| Commit | Inhalt |
|---|---|
| `6d97307` | `kapitel03-automation.qmd`: neuer Absatz nach beiden Fassungen von Abb. 3.1, vor „Historische Studien zeigen …“; `references.json`: Eintrag `handa2025economic` |
| `dbf474e` | `docs/kapitel03-automation.html`, `docs/search.json` neu gerendert (Quarto 1.8.25, `--to html`); PDF/EPUB aus Git zurückgeholt, unverändert |

Eingefügter Text:

> Eine erste Antwort geben die Nutzungsdaten des Anthropic Economic Index für Mai 2026 [@massenkoff2026cadences]: Nur 9 der 25 Aufgaben erscheinen dort überhaupt; für die übrigen 16, darunter Sprechstunden, Gremienarbeit und die Betreuung von Abschlussarbeiten, sind keine Werte veröffentlicht.
> Den höchsten Automatisierungsanteil hat das Erstellen, Durchführen und Bewerten von Prüfungen: In 60 % dieser Gespräche gibt der Mensch die Aufgabe an das Modell ab, statt mit ihm an ihr zu arbeiten, wobei Automatisierung hier nach @handa2025economic die Form des Gesprächs beschreibt und nicht die Verlagerung der Aufgabe selbst.
> Gespräche über Vorlesungen stuft der Index dagegen zu 92 % als Studium ein und nur zu 6 % als Arbeit; er ordnet Inhalte ein, keine Personen, doch das Muster passt zu Studierenden, die eine Vorlesung nacharbeiten, eher als zu Lehrenden, die eine vorbereiten.

Zahlen per Skript aus `interactions/data/onet-heatmap.json` gelesen: 9 von 25 Aufgaben mit Indexwerten; Aufgabe 9 (Prüfungen) Automatisierung 60,39 %; Aufgabe 1 (Vorlesungen) Studium 92,0 %, Arbeit 5,73 %, privat 2,27 %. Sprechstunden (10), Gremien (15) und Betreuung von Abschlussarbeiten (23) gehören zu den 16 Aufgaben ohne Werte.

## Quelle
Handa, K., Tamkin, A., McCain, M., Huang, S., Durmus, E., Heck, S., Mueller, J., Hong, J., Ritchie, S., Belonax, T., Troy, K. K., Amodei, D., Kaplan, J., Clark, J., & Ganguli, D. (2025). *Which economic tasks are performed with AI? Evidence from millions of Claude conversations*. arXiv. https://doi.org/10.48550/arXiv.2503.04761

Geprüft am 10.11.2026 gegen die arXiv-Seite (https://arxiv.org/abs/2503.04761, v1 vom 11.02.2025) und den DOI-Datensatz (DataCite über doi.org, CSL-JSON): Titel und alle 15 Namen in dieser Reihenfolge stimmen überein. Der Schlüssel heißt `handa2025economic`, weil `handa2025` schon den Anthropic Education Report bezeichnet (Kap. 1 und 5).

## Prüfungen
- Render: 36 Warnungen wie bisher (OJS), kein `?@`; Zitat „Handa et al. (2025)“ und Eintrag im Literaturverzeichnis von Kap. 3 aufgelöst. In `docs/` änderten sich nur die Kapitelseite und `search.json`.
- Playwright Kapitelseite 1200 und 390 px: keine Konsolenfehler, keine 4xx, iframe-Höhe 1.358 bzw. 2.354 px, Zitatlink vorhanden; Bildschirmfoto 1200 px gesichtet.
- Mobil (390 px) hat die Seite 450 px Breite, also waagerechtes Scrollen. Ursache ist eine Tabelle (`table.caption-top`), nicht der neue Absatz; der Stand vor dieser Sitzung zeigt denselben Wert.
- PDF **nicht** gerendert; Druckfassung wächst um ca. 110 Wörter (Phase 3).
- Live auf GitHub Pages nicht geprüft.

## Offen
1. Live-Prüfung: https://th-koln-bartnik.github.io/genai4teaching/kapitel03-automation.html#fig-onet-tasks
2. Druck-Render (Phase 3): Abb. 3.1 mit QR-Bild und neuem Absatz, Umbruch prüfen.
3. Tabelle in Kap. 3 läuft bei 390 px über den Rand (450 px); eigener kleiner Auftrag.
4. In der Druckfassung nennt der Absatz Indexwerte, die die gedruckte Abbildung nicht zeigt (nur über QR); beim Druck-Review entscheiden, ob das so bleibt.
5. Bei neuem AEI-Release: Skript `scripts/onet-heatmap.py` neu laufen lassen **und** die drei Zahlen im Absatz (9 von 25, 60 %, 92 % / 6 %) sowie „Mai 2026“ nachziehen.
6. Roman: Branches `abb-3-1-heatmap` und `abb-3-1-befundtext` auf GitHub löschen.

## Startauftrag nächste Sitzung (optional)
> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/abb-3-1-heatmap/STATUS-abb-3-1-befundtext-2026-11-10.md`. Behebe in `kapitel03-automation.qmd` den waagerechten Überlauf der Tabelle bei 390 px (Seite 450 px breit) und prüfe die Live-Seite #fig-onet-tasks. Prüfe vorher mit git log, ob main seit dem Stand der Statusnotiz weitergegangen ist. Kläre per MC Repo-Schreibzugriff und Tresorit-Freigabe; Render, Playwright, Diff per MC, Merge, `ergebnisse-sichern`. Quarto per `pip install --break-system-packages quarto-cli==1.8.25`.

## Candidate permanent notes
- Ein Automatisierungsanteil im Economic Index ist nur lesbar, wenn der Text dazusagt, dass er die Gesprächsform misst.
- Zahlen im Fließtext, die aus einem Datensatz mit Releases stammen, brauchen einen Vermerk, welches Skript sie erzeugt.
- Ein Zitierschlüssel aus Name und Jahr kollidiert, sobald dieselbe Erstautorin im selben Jahr zweimal publiziert.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja – `dbf474e` in `main`, Statusnotiz als Folge-Commit)
