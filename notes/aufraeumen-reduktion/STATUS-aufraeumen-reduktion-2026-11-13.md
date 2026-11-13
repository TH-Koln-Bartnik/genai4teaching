# Status: Aufräumen nach der Reduktion (Sitzung aufraeumen-reduktion, 13.11.2026)

Grundlage: Abschnitte „Offen“ in `claude/reduktion-anhang/STATUS-reduktion-anhang-2026-11-13.md` und `claude/reduktion-pb/STATUS-reduktion-pb-2026-11-13.md`. Branch `aufraeumen-reduktion` von `main` @ `64a52d5`.

## Entscheidungen Roman (MC, 13.11. gegen 18:40)

| Paket | Entscheidung |
|---|---|
| Bilder | alle drei Gruppen löschen: 12 Druckbilder, 13 QR dazu, 14 Alt-QR |
| Skripte | `scripts/qr-kapitel01.mjs` löschen, `scripts/umzug/verweise_nummern.py` bereinigen |
| Branches | 3 überholte + 47 vollständig gemergte löschen |
| Diff | mergen und sichern |

## Was geändert wurde (Commit `452a9b5`)

- **`index.qmd`:** iframe-Titel der Vorwort-Galerie „Zehn“ → „Neun Praxisbeispiele“; Quelltextkommentar darüber ebenso. `docs/index.html` neu gerendert (einzige geänderte Datei in `docs/`).
- **`_quarto.yml`:** Kommentar zur Ressource `images/druck/folie-mit-regeln.png` nennt jetzt die Praxisbeispiele-Seite statt „Galerie Kap. 1“. Die Ressourcenzeile bleibt.
- **`scripts/qr-kapitel01.mjs`:** gelöscht (erzeugte nur den QR auf die gelöschte Galerie Kap. 1).
- **`scripts/umzug/verweise_nummern.py`:** Pfad `interactions/galerie-kapitel01.html` gestrichen; Kopf kennzeichnet das Skript als einmaliges, erledigtes Umzugsskript.
- **`scripts/druck-abbildungen.mjs`** (zusätzlich, im Diff gezeigt): Aufrufe `hoeherTiefer()`, `bibliothek()` und die beiden zugehörigen QR-Aufrufe auskommentiert. Sonst hätte `npm run druck` die gelöschten Bilder neu erzeugt. Die Funktionen bleiben im Skript.
- **`images/druck`, 12 Dateien gelöscht (1,7 MB):** `agenten-engpass-qr.png`, `autonomiestufen-qr.png`, `drei-labs-ein-bauplan-qr.png`, `ki-arbeitsweisen-qr.png`, `sitzung-und-gedaechtnis-qr.png`, `skill-karte-qr.png`, `vom-satz-zum-naechsten-wort-qr.png`, `zwischenschritt-texas-qr.png`, `video-acemoglu-restrepo.png`, `video-eoq-vergleich.png`, `hoeher-tiefer-ki-aufgaben.svg`, `bibliothek-der-prompts.svg`.
- **`images/qr`, 27 Dateien gelöscht:** zu den Druckbildern `qr-agenten-engpass`, `qr-autonomiestufen`, `qr-drei-labs-ein-bauplan`, `qr-ki-arbeitsweisen`, `qr-sitzung-und-gedaechtnis`, `qr-skill-karte`, `qr-vom-satz-zum-naechsten-wort`, `qr-zwischenschritt-texas`, `qr-galerie-kapitel01`, `qr-hoeher-tiefer`, `qr-bibliothek-prompts`, `qr-video-acemoglu-restrepo`, `qr-video-eoq-vergleich`; Alt-QR `qr-anhang-c-literatur`, `qr-anhang-d-online-material`, `qr-anhang-d-ue1` bis `-ue7`, `qr-ab-ai-sandwich`, `qr-online-version`, `qr-galerie-animationen`, `qr-lernspiel-agent-patterns`, `qr-tokenizer-explorer` (alle `.png`).

## Bewusst behalten

- **20 QR-Dateien in `images/qr`**, die kein Kapitel direkt einbindet, die aber in gedruckte Abbildungen eingebaut sind oder von einem Druckskript erzeugt werden: `qr-agenten-gedaechtnis`, `qr-chatbot-zu-agent`, `qr-harness-schichten`, `qr-ki-durchspiel`, `qr-ki-kosten`, `qr-ki-zeithorizont`, `qr-scaling-laws`, `qr-semester-simulator`, `qr-skills-handbuch`, `qr-tutor-kosten`, `qr-4d-kreislauf`, `qr-modellwahl-baum`, `qr-onet-heatmap`, `qr-video-stuetzraeder`, `qr-fallstudie-kaya`, `qr-lernsong-forecast`, `qr-video-making-of`, `qr-video-ps2pal-ablauf`, `qr-video-token-genres`, `qr-widget-linie`.
- **`images/druck/onet-aufgaben.svg`**: in keiner Buchquelle eingebunden, aber Vorlage für die Kurzfassungen in `scripts/onet-heatmap.py` und in `scripts/druck-abbildungsrechte.py` geführt. Nicht Teil der MC-Entscheidung, deshalb nicht angefasst.
- **Druckskripte der verlagerten Elemente** (`scripts/druck-vom-satz-zum-naechsten-wort.cjs`, `druck-agenten-animationen.cjs`, `druck-frontier-animationen.cjs`): Ein Lauf würde die gelöschten Bilder wieder schreiben. Die Elemente stehen online weiter, die Skripte bleiben für den Fall, dass eines in den Druck zurückkehrt.
- **`scripts/umzug/ankertabelle.json`** und die Weiterleitung `kapitel01.html` führen noch die Anker `galerie-kapitel01` und `fig-qr-galerie`. Alte Links landen damit am Kopf von Kapitel 1; das ist das gewünschte Verhalten einer Weiterleitung.

## Prüfungen

Suche nach ungenutzten Dateien: jede Datei in `images/druck` und `images/qr` gegen alle Buchquellen (`*.qmd`, `_einbau/`, `include/`, `interactions/`, `_src/`, `_quarto*.yml`, Filter, CSS), getrennt davon gegen `scripts/` und `tests/`. `quarto render --to html` (1.8.25): Exit 0, nur die 36 bekannten OJS-Warnungen. Kein `?@` in `docs/` (Festtextsuche). Download-PDF/EPUB aus Git zurückgeholt. Kein lokaler Bild-, Video- oder Seitenverweis in `docs/**/*.html` zeigt ins Leere (0 Treffer). `docs/`-Diff: nur `index.html`. `npm test`: 44 von 44 bestanden. Playwright 1200/390 px über Vorwort, Praxisbeispiele, Kapitel 1–7, Lösungshinweise und die Galerie allein: keine JS-Fehler, keine 4xx, keine kaputten Bilder; iframe-Titel lautet „Galerie: Neun Praxisbeispiele …“. Querscrollen bei 390 px unverändert (bekanntes CSS-Thema, 20–363 px je Seite). Kein PDF-Testrender.

## Repo

Branch `aufraeumen-reduktion` (Commit `452a9b5`), gepusht; per Fast-forward nach `main` @ `452a9b5`, gepusht. Diese Notiz und das Löschskript folgen als eigener Notiz-Commit.

## Offen

- **Branches löschen: nicht ausgeführt.** Die Cloud-Sitzung darf auf GitHub keine Branches löschen (git push --delete und die GitHub-API werden vom Proxy der Sitzung abgewiesen), der Rechner-Zugang hat keine GitHub-Anmeldung. Fertig liegt `notes/aufraeumen-reduktion/branches-loeschen-2026-11-13.sh` (auch in Tresorit): in Git Bash im lokalen Klon `bash notes/aufraeumen-reduktion/branches-loeschen-2026-11-13.sh`. Es löscht jeden der 50 Branches nur, wenn er noch auf dem notierten Commit steht. Alternative: github.com/TH-Koln-Bartnik/genai4teaching/branches.
- **16 Branches mit eigenen Commits bleiben** (in der MC-Frage irrtümlich als 14 gezählt) und brauchen eine Durchsicht (vermutlich per Rebase oder in anderer Form nach main gelangt): `frontier-begriff`, `mollick-s5-token-genres`, `fachbegriffe-erklaeren`, `zitierstil-apa7-de` (je 1), `archiv/audio-beispiele`, `audio-beispiele`, `scaling-laws` (je 2), `mollick-s1-hoeher-tiefer`, `mollick-s2n-notebook`, `kapitel02-neugliederung-sitzung-b`, `kapitel02-4d-p4` (je 3), `mollick-s5-token-genres-b` (4), `mollick-s1-hoeher-tiefer-rebase` (5), `mollick-s4-detektor` (6), `prompting-film-stuetzraeder` (8), `anhangB-prompts-neu` (10). `aufraeumen-reduktion` kann nach dieser Sitzung ebenfalls weg.
- `images/druck/onet-aufgaben.svg` löschen oder behalten (siehe oben).
- Unverändert aus den Vorsitzungen: CSS-Sitzung für 390 px (Navbar-Titel, lange URLs im Literaturverzeichnis, breite Tabellen); Adesope et al. (2017) am Original prüfen; Kap. 5 Lernfrage 2 beim PDF-Bau gegenlesen; PDF-Testbau mit Durchsicht aller neuen Drucksätze mit QR und der Schlüsselbegriffe-Kästen.

## Zum Löschen vorgesehene Branches (Stand der Commits am 13.11.2026, 18:45)

| Branch | Commit | Grund |
|---|---|---|
| `reduktion-anhang` | `4aefcfb` | in main enthalten |
| `prompting-film-stuetzraeder-c` | `d2b3b25` | in main enthalten |
| `vorwort-praxisbeispiele` | `0192147` | in main enthalten |
| `schluesselbegriffe-kap02-06` | `81afc78` | in main enthalten |
| `reduktion-k3` | `a5f276b` | in main enthalten |
| `prompting-rollen-evidenz` | `5da15a8` | in main enthalten |
| `kapitel01-verbreitung` | `ef1d04d` | in main enthalten |
| `archiv-integration` | `12964a8` | in main enthalten |
| `mollick-s3-bibliothek` | `58320cd` | in main enthalten |
| `kapitelauftakt-kap04-06` | `33faa4a` | in main enthalten |
| `vorwort-wie-dieses-buch-lehrt` | `cc3cce9` | in main enthalten |
| `mollick-s2-podcast` | `c0fef1d` | in main enthalten |
| `prompting-streichtest` | `c79ae49` | in main enthalten |
| `reduktion-k1` | `6906c6d` | in main enthalten |
| `prompting-kuerzung` | `d093947` | in main enthalten |
| `s9-sprachcheck-kap01-02` | `301e1a8` | in main enthalten |
| `phrasencheck-kap01-03` | `b6d626e` | in main enthalten |
| `fachbegriffe-s6-teil2` | `665d382` | in main enthalten |
| `fachbegriffe-s6` | `561b1c2` | in main enthalten |
| `reduktion-k4` | `dcc4472` | in main enthalten |
| `kapitel02-neugliederung` | `e0a71f7` | in main enthalten |
| `reduktion-k67` | `a3e96a8` | in main enthalten |
| `animationen-tempo` | `5c9a7d9` | in main enthalten |
| `kapitel02-kessler-quelle` | `16c8708` | in main enthalten |
| `vorwort-kuerzen` | `42b92e9` | in main enthalten |
| `tabellen-in-kaesten` | `7a26cfc` | in main enthalten |
| `kapitelauftakt-kap02-03` | `aa2d8df` | in main enthalten |
| `wiss-schreiben-a-d` | `065e2dc` | in main enthalten |
| `schreibtrainer-gpt-ersatz` | `b2a4a1a` | in main enthalten |
| `vorwort-lernpfade` | `2f41e2a` | in main enthalten |
| `reduktion-pb` | `fb1191b` | in main enthalten |
| `kapitel01-forschungsueberblick` | `9c05121` | in main enthalten |
| `kapitel03-tabelle-kernaussagen` | `b819563` | in main enthalten |
| `kapitel04-p5` | `d10d58c` | in main enthalten |
| `kapitel04-video-aufgabenmodell` | `c5b72ca` | in main enthalten |
| `kapitel04-aufgabenmodell` | `f756f5f` | in main enthalten |
| `reduktion-k2` | `2543107` | in main enthalten |
| `reduktion-k5` | `53ffcbd` | in main enthalten |
| `k3-kapitelauftakt` | `1e01e52` | in main enthalten |
| `k3b-kasten2-engpass` | `7aa6516` | in main enthalten |
| `k5-kasten3-hausaufgabe` | `2ba1edb` | in main enthalten |
| `k7-kasten-holbein` | `b1c6bc7` | in main enthalten |
| `primer-anhang` | `fa69f1e` | in main enthalten |
| `best-practice-vorreiter` | `06276a0` | in main enthalten |
| `abb-3-1-befundtext` | `dbf474e` | in main enthalten |
| `abb-3-1-heatmap` | `f14d9d4` | in main enthalten |
| `umzug-phase1` | `4006a9c` | in main enthalten |
| `claude/semester-simulator` | `4bbc643` | überholt (eigene Commits verworfen) |
| `entfernen-agenten-engpass` | `dc380d8` | überholt (eigene Commits verworfen) |
| `vorwort-galerie-14` | `fbea180` | überholt (eigene Commits verworfen) |

## Startauftrag nächste Sitzung

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (frisch klonen, Push-Zugriff nötig).
Lies claude/aufraeumen-reduktion/STATUS-aufraeumen-reduktion-2026-11-13.md, Abschnitt „Offen“.
CSS-Sitzung auf Branch css-390 von main (@ 452a9b5 oder neuer): Querscrollen bei 390 px beheben
(Navbar-Titel, lange URLs im Literaturverzeichnis, breite Tabellen), Seite für Seite mit Playwright messen.
quarto render --to html, PDF/EPUB aus Git zurückholen, keine ?@-Verweise. Danach PDF-Testbau
(quarto render --profile print --to pdf) mit Durchsicht der Drucksätze mit QR. Diff per MC, Merge,
ergebnisse-sichern. Fragen nur als Multiple Choice.
```

## Candidate permanent notes

- Ob eine Bilddatei ungenutzt ist, entscheidet die Suche in den Buchquellen und nicht die Suche im ganzen Repo, weil das erzeugende Skript jede Datei beim Namen nennt.
- Wer eine erzeugte Datei löscht, muss den Aufruf abschalten, der sie erzeugt, sonst kehrt sie beim nächsten Skriptlauf zurück.
- Ein QR-Code, der in eine Abbildung eingebaut ist, bleibt als Zwischenprodukt im Repo, auch wenn kein Kapitel ihn einbindet.
- Ein Branch ohne eigenen Commit gegenüber main ist nur noch ein Etikett und kann ohne Verlust gelöscht werden.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ 452a9b5 plus Notiz-Commit)
