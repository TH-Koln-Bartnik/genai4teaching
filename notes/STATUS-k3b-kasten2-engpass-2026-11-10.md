# Status: K3b – Kasten 2 „Engpass Prüfen“ in Kap. 3 eingebaut (10.11.2026, 21:20)

Auftrag: Startprompt K3b aus `claude/mini-cases/ENTWURF-fundstueck-kaesten-druck-2026-11-09.md`.

## Entscheidungen Roman (MC, nach Abschluss des Einbaus)

1. **Animation raus, Kasten bleibt.** Der Branch `entfernen-agenten-engpass` wird gemergt; der Kasten schließt dann an den Fließtext von `sec-leitungsaufgabe` an, der Übergang wird beim Merge neu gefasst.
2. Merge in einer neuen Sitzung.

## Umgesetzt

**Branch `k3b-kasten2-engpass`** (Commit `6e7bd3a`, Basis `main` @ `c18fa56`, gepusht, nicht gemergt).

| Datei | Änderung |
|---|---|
| `kapitel03-automation.qmd` | Kasten „Anwendungsbeispiel: Die KI vervielfacht die Abgaben, nicht die Zeit zum Prüfen“ am Ende von `sec-leitungsaufgabe`, Wortlaut wie im Entwurf (Fassung 2). Er steht nach der Engpass-Animation **und** nach dem Auswertungsabsatz „Kugel A wartet länger …“, damit Modell und Auswertung zusammenbleiben. Online und im Druck sichtbar. |
| `references.json` | `reimers2026books` und `codreanu2026science` ergänzt (509 → 511 Einträge, keine doppelten Schlüssel). Eingefügt hinter `sapkota2026`, nicht am Dateiende, damit der Merge nicht mit den Branches kollidiert, die am Ende anhängen. |

Druckwörter Kap. 3 (`scripts/zaehle_druck.py`): 2.745 → 2.916, also +171 (der Entwurf zählte 174 mit Titel).

## Quellenprüfung (10.11.2026)

- **Codreanu et al.:** `https://doi.org/10.48550/arXiv.2609.28504` antwortet mit 302 und leitet auf `https://arxiv.org/abs/2609.28504`; der Handle-Eintrag bei doi.org ist am 25.09.2026 registriert. Der DOI ist damit bestätigt. Die arXiv-Seite selbst ließ sich heute nicht erneut abrufen (Freigabe für den Abruf blieb unbeantwortet); Titel, Autorenliste und Zahlen stammen aus der Prüfung am Abstract vom 09.11.
- **Reimers & Waldfogel:** NBER-Seite heute gelesen. Titel „AI and the Quantity and **Usage** of Creative Products: Have LLMs Boosted Creation of Valuable Books?“, Working Paper 34777, Januar 2026, DOI `10.3386/w34777` (neu im Eintrag, ebenso Monat und `genre` nach dem Muster der übrigen NBER-Einträge). Abstract deckt die drei Aussagen des Kastens: Erscheinungen bis Ende 2025 etwa verdreifacht, KI-Bücher über der Hälfte der Titel von 2025, Nutzung (erhaltene Bewertungen, Verkaufsränge) und Sternebewertung im Schnitt gesunken.
- **Titelfehler korrigiert** („usage“ statt „quality“) in `UEBERSICHT-x-influencer-3-monate-2026-11-09.md` und `VORSCHLAG-mini-cases-x-feed-2026-11-09.md`, jeweils in beiden Projektkopien (Wurzel und `claude/mini-cases/`), mit Korrekturvermerk am Ende und den beiden DOI in den Quellenlisten.

## Render (Quarto 1.8.25, in einer Kopie des Branches; `docs/` im Repo unverändert)

- **PDF** (`quarto render --profile print --to pdf`): fehlerfrei, 360 Seiten. Der Kasten steht auf S. 93 direkt unter dem Auswertungsabsatz, ungeteilt, vor dem Literaturverzeichnis des Kapitels; Abb. 3.5 auf S. 92. Alle drei Zitate und der Verweis auf Kapitel 5.5 lösen auf; beide neuen Quellen stehen im Kapitel-Literaturverzeichnis. Seitenbild geprüft.
- **HTML** (`quarto render --to html`): fehlerfrei. Kasten nach dem iframe `agenten-engpass`; Links `#ref-reimers2026books`, `#ref-codreanu2026science`, `#ref-sapkota2026` und `kapitel05-4d-phasen.html#sec-pruefen` vorhanden.
- **Nicht geprüft:** Darstellung bei 390 px, Live-Seite, EPUB.

## Auffälligkeiten

1. **Branch `entfernen-agenten-engpass`** (`dc380d8`, 03.11.2026, nicht gemergt) nimmt die Engpass-Animation aus Kap. 3, Vorwort-Galerie und Praxisbeispielen. Auf `main` steht sie noch, der Kasten baut darauf auf. Wird jener Branch gemergt, gibt es einen Konflikt in `kapitel03-automation.qmd`, und der Kasten verliert das Modell, das er ins Empirische verlängert. Entschieden: Animation raus, Kasten bleibt (siehe oben).
2. Der Verweis `@sec-pruefen` heißt im PDF „Kapitel 5.5“, im HTML „Kapitel 5.6“. Die Abschnittszählung von Kap. 5 weicht zwischen den Formaten ab (vermutlich ein nur online sichtbarer Abschnitt); bestand vor dieser Sitzung.
3. PDF-Render meldet zwei nicht auflösbare Verweise, `@sec-loesung-stuetzraeder` und `@sec-loesung-token-genres`; bestand vor dieser Sitzung, nicht in Kap. 3.
4. Der arXiv-Eintrag erscheint im Literaturverzeichnis ohne das Wort „arXiv“ (Titel, dann DOI), wie die übrigen arXiv-Einträge im Buch.

## Offen

1. Merge von `k3b-kasten2-engpass` nach `main` und Render von `docs/`; bis dahin ist der Kasten nicht live.
2. Übergang in `sec-leitungsaufgabe` neu fassen, wenn die Animation entfällt (Entscheidung 1).
3. Druckbudget: +171 Wörter gegen die Kürzungsliste vom 03.11.
4. K5 (Kasten 3, Strömberg et al.) nach dem Startprompt im Entwurf. K7 (Kasten 1, Holbein) ist laut `STATUS-k7-kasten-holbein-2026-11-10.md` auf Tresorit heute in einer anderen Sitzung bearbeitet worden; beide Branches ändern `references.json`, beim Merge auf Überschneidung achten.
5. Das KI-Gutachten (Kurzrock, X) bleibt ungeprüft und steht nicht im Kasten.

## Startauftrag nächste Sitzung

> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/mini-cases/STATUS-k3b-kasten2-engpass-2026-11-10.md`. Entschieden ist: Die Engpass-Animation kommt aus dem Buch, Kasten 2 bleibt. Prüfe mit `git log`, wie weit `main` seit `c18fa56` gegangen ist. Merge `entfernen-agenten-engpass` (`dc380d8`) und `k3b-kasten2-engpass` nach `main`; löse den Konflikt in `kapitel03-automation.qmd` so, dass Animation, Standbild, Vorhersage-Aufforderung und der Auswertungsabsatz „Kugel A wartet länger …“ entfallen und der Kasten an den Absatz „Jeder Haltepunkt kostet Zeit …“ anschließt. Fasse den Übergang neu (der Satz „Das folgende Modell verfolgt …“ entfällt, die Regel „nur so viele Agenten starten, wie wir prüfen können“ bleibt als ein Satz erhalten) und lege mir die Neufassung per MC vor. Prüfe, dass kein Verweis auf `@fig-agenten-engpass` übrig bleibt und `references.json` gültig ist. Dann Druck-PDF rendern und sichern, HTML rendern, `docs/` committen, Live-Seite und 390 px prüfen. Kopiere diese Statusnotiz nach Tresorit `Projektnotizen-Claude/mini-cases/` (dort liegt noch die Fassung ohne die Entscheidungen). Quarto per `pip install --break-system-packages quarto-cli==1.8.25`, Schriften per `apt-get update && apt-get install -y texlive-fonts-extra tex-gyre`. Fragen nur als Multiple Choice. Am Ende `ergebnisse-sichern`.

## Quellen

- Codreanu, M., Imas, A., Mateos-Garcia, J., Emmens, J., Muiruri, E., Turrell, A., Jacobs, J., Kasirzadeh, A., Trisovic, A., Chen, Y., Rodchenko, T., Pollard, C., Strand, S., Rock, D., Iscenko, Z., Curto Millet, F., Thompson, N., & Manyika, J. (2026). *AI in science: Early insights* (arXiv:2609.28504). arXiv. https://doi.org/10.48550/arXiv.2609.28504
- Reimers, I., & Waldfogel, J. (2026). *AI and the quantity and usage of creative products: Have LLMs boosted creation of valuable books?* (NBER Working Paper No. 34777). National Bureau of Economic Research. https://doi.org/10.3386/w34777

## Candidate permanent notes

- Wird Erzeugen billig, wird Prüfen zum Engpass.
- Mehr Bücher durch Sprachmodelle heißt im Schnitt weniger gelesene Bücher.
- Zeitersparnis durch KI staut sich vor dem Schritt, den die KI nicht übernimmt.
- Ein Befund aus Buchmarkt oder Wissenschaft belegt in der Lehre eine Verschiebung, keine Lernwirkung.

## Ablage

- Projekt: `claude/mini-cases/STATUS-k3b-kasten2-engpass-2026-11-10.md`; korrigiert: `claude/mini-cases/UEBERSICHT-…`, `claude/mini-cases/VORSCHLAG-…` und die beiden Kopien in der Projektwurzel
- Tresorit: `Projektnotizen-Claude/mini-cases/` (Statusnotiz, korrigierte UEBERSICHT und VORSCHLAG, `druck-kap03-kasten2-s92-93.pdf` als Druckansicht der beiden Seiten)
- Repo: Branch `k3b-kasten2-engpass`, `notes/STATUS-k3b-kasten2-engpass-2026-11-10.md`

Ablage geprüft: Projekt ✓ / Tresorit ✓ (Fassung ohne die Entscheidungen; der Rechner war beim Nachtrag nicht mehr erreichbar) / Repo ✓ (gepusht, gemergt: nein)
