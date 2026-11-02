# Status: Kapitelauftakt Kap. 4–6 nach Schablone (02.11.2026, ca. 14:30)

Auftrag: Roman, 02.11.2026 – Einstiegsszene und Einschätzungen für Kap. 4–6 nach `notes/kapitelauftakt-einschaetzungen.md` (Offen-Punkt aus `claude/didaktik/STATUS-vorwort-wie-dieses-buch-lehrt-2026-11-02.md`). Je vier Aussagen, wie in Kap. 1–3.

## Basis und Ablage
- Branch `kapitelauftakt-kap04-06` von `main` @ `8452e89`. Zwei Commits: Quelltext + Notizen, danach `docs/` (Quarto 1.8.25, HTML).
- **Nicht gepusht:** Der Git-Proxy dieser Sitzung hat keinen Schreibzugang zum Repo (403), `add_repo` mit Schreibrecht wurde automatisch abgelehnt. Patch (nur Quelltext) und Bundle (beide Commits) liegen in Tresorit.

## Umgesetzt
**Kap. 4 (`kapitel04.qmd`)** – Szene (106 Wörter): Prof. Dr. Lena Hoffmeister, Produktionslogistik, 90 Studierende im Maschinenbau; Übungsblätter in einer Stunde, Deep-Research-Bericht, Agenten-Simulation ohne Verständnis, Tutor rechnet falsch, Abende mit Kontrollieren. Einleitung „Wie nutzen Lehrende …“ mit Tutor-Screenshot steht jetzt nach den Lernzielen.
1. `ez-k4-1` Übungsblätter in einer Stunde → am Semesterende Zeit gewonnen → **eher nicht**; 4.1 nach „… aber die gibt es auch hier nicht umsonst.“
2. `ez-k4-2` Deep-Research-Bericht = verlässlichste KI-Recherche → **nein**; 4.1.2 nach dem Absatz zur Staffelung der Auswertung (Tay).
3. `ez-k4-3` Programmier-Agent: schneller lauffähig, Code schlechter verstanden → **eher ja** (Balepur, klein, explorativ); 4.2.2 nach dem Agenten-Experiment.
4. `ez-k4-4` Tutor bekommt Musterlösungen als Vorgabe → **ja** (Kestin); 4.3 nach dem Absatz zu Fehlinformationen.
- Kernaussagen 1–6 gruppiert: LZ1 Rollen und Aufgaben (1–2), LZ2 Recherche (3), LZ3 Schreiben/Programmieren/Simulationen (4), LZ4 Tutor und Simulator (5–6). Die MC-Frage zur Simulation entfällt als Aussage; der Inhalt bleibt in Kernaussage 6.

**Kap. 5 (`kapitel05.qmd`)** – Szene (115 Wörter): Prof. Dr. Henrik Sauer, Studiendekan, Marketing, 180 BWL-Studierende; Themen einmal getestet, glatte Hausarbeiten, Detektor-Vorschlag, Protokollpflicht im Entwurf, 90-Minuten-Einführung in Woche 1. Herkunft: Workshops und Gremien.
1. `ez-k5-1` Schwache erste Antwort → Aufgabe kaum mit KI lösbar → **nein**; 5.1 Ende.
2. `ez-k5-2` Gleich üben, Erklärung am Problem > Einführung vorab → **eher ja** (verteiltes Üben; kein direkter Vergleich); 5.3 nach dem Absatz „Gleich anfangen“.
3. `ez-k5-3` Prüfende erkennen KI-Hausarbeit nicht, auch bei authentischer Aufgabe → **ja** (Kofinas); 5.4 nach „Drittens …“.
4. `ez-k5-4` Jede Interaktion mit allen Prompts protokollieren → **nein**; 5.6 nach „Neuere Empfehlungen …“.
- Kernaussagen 1–5 gruppiert: LZ1 (1), LZ2 (2), LZ3 (3), LZ4 Richtlinien und Dokumentation (4–5).

**Kap. 6 (`kapitel06-fallbeispiele.qmd`)** – Szene (108 Wörter): Dr. Sophie Arnold, neu berufen im Wirtschaftsingenieurwesen, erbt SSCM (Quiz-Prompt, Widgets), WAGP (Karriere-Bots) und das Wahlpflichtmodul mit Automobilzulieferer ohne Daten. Herkunft: Person erfunden, Module und Projekte aus der eigenen Lehre.
1. `ez-k6-1` Fragen stellendes Sprachmodell nachweislich besser als Karteikarten → **nein** (nicht untersucht); 6.1.1 nach dem Karteikarten-Absatz.
2. `ez-k6-2` Freies Experimentieren am Widget ohne Aufträge > direkte Erklärung → **nein** (Alfieri); 6.2.1 vor der Lernfrage.
3. `ez-k6-3` Studentische KI-Werkzeuge: Es fehlt der Nutzertest, nicht die Technik → **ja** (56 Berichte); 6.3.4 vor der Lernfrage.
4. `ez-k6-4` Brauchbarer Prototyp für Praxispartner ohne echte Daten → **eher ja** (Gestaltungsregel, Guided Project läuft WS 2026/27); 6.3.5 nach dem Umsetzungskasten.
- Lernziele 1–3 nummeriert; Kernaussagen nummeriert und gruppiert: LZ1 Vom Prinzip zur Umsetzung (1–2, „Belegt sind die Bauprinzipien“ nach vorn), LZ2 Wissensform (3), LZ3 Prüfkriterien (4–6).

**Sonst**
- MC-Technik entfernt: `_filters/mc-frage.lua`, `include/mc-frage.html`, Einträge in `_quarto.yml`; Kommentar beim Include `einschaetzung.html` auf Kap. 1–6.
- `notes/kapitelauftakt-einschaetzungen.md`: Stand Kap. 1–6, Liste der Szenen-Personen. `notes/schablone-leitfragen-lernfragen.md`: Hinweis, dass der Kapitelanfang abgelöst ist.
- `vorwort.qmd`: Kommentar zur Zusage „Einstiegsszene in jedem Kapitel“ aktualisiert (erfüllt); offen bleibt die Zusage zu den Schlüsselbegriffen.

## Geprüft
- `quarto render --to html` (1.8.25): 36 Warnungen = die bekannten OJS-Warnungen; keine `?@` in Kap. 4–6; Download-PDF/EPUB aus Git zurückgeholt.
- Playwright 1200/390 px, Kap. 4, 5, 6: keine JS-Fehler, keine 4xx; je Aussage fünf Knöpfe und genau ein Prüfkasten; Klick → „Gespeichert. Auflösung in Kapitel 4.1 / 4.1.2 / 4.2.2 / 4.3“, „5.1 / 5.3 / 5.4 / 5.6“, „6.1.1 / 6.2.1 / 6.3.4 / 6.3.5“; Link springt zu `#pruefen-ez-kN-i`, dort „Ihre Einschätzung vorab: …“; nach Neuladen erhalten. Seitenbreite bei 390 px: Kap. 4 648 px (`tbl-acemoglu`), Kap. 5 753 px (Altbestand), Kap. 6 646 px (`tbl-bsp-uebersicht`) – nicht aus den neuen Kästen (alle 365 px).
- Druckpfad: LaTeX-Testrender der Köpfe mit `einschaetzung.lua`: je `\newpage`, vier Skalen, Verweise in Klammern, keine Platzhalter. PDF nicht gesetzt (kein TeX).
- Wortzahl Kopf (Titel bis erster Abschnitt): Kap. 4 473, Kap. 5 376, Kap. 6 819 (enthält die Kapiteleinleitung mit Übersichtstabelle).

## Offen
1. Branch pushen und mergen (Repo-Zugriff mit Schreibrecht oder Roman lokal: `git fetch <bundle> kapitelauftakt-kap04-06` bzw. `git am`).
2. Inhaltlich prüfen: Szenen-Personen Hoffmeister, Sauer, Arnold (erfunden); Kap. 6 Szene nennt den Automobilzulieferer aus dem Wahlpflichtmodul.
3. Schlüsselbegriffe Kap. 2–6 (zweite Zusage im Vorwort).

## Ablage
- Projekt: `claude/kapitelkopf-position/STATUS-kapitelauftakt-kap04-06-2026-11-02.md` (diese Notiz).
- Tresorit `Projektnotizen-Claude/kapitelkopf-position/`: diese Notiz, `kapitelauftakt-kap04-06-2026-11-02.patch` (Quelltext-Commit `3a63e33`), `kapitelauftakt-kap04-06-2026-11-02.bundle` (beide Commits inkl. `docs/`, Basis `main` @ `8452e89`).
- Repo: Commits `3a63e33` (Quelltext, enthält diese Notiz als `notes/2026-11-02-status-kapitelauftakt-kap04-06.md`) und `3e4a80a` (`docs/`) auf Branch `kapitelauftakt-kap04-06`, **nur lokal im Container, nicht gepusht** (Proxy 403).

## Startauftrag nächste Sitzung
Repo mit Schreibrecht freigeben lassen. Dann `git fetch <bundle> kapitelauftakt-kap04-06:kapitelauftakt-kap04-06` (Bundle aus Tresorit) oder `git checkout -b kapitelauftakt-kap04-06 origin/main && git am <patch> && quarto render --to html` (Download-PDF/EPUB in `docs/` aus Git zurückholen). Ist `main` inzwischen weiter: rebasen; Konfliktkandidaten `kapitel04.qmd`, `kapitel05.qmd`, `kapitel06-fallbeispiele.qmd`, `_quarto.yml`, `vorwort.qmd`. Pushen, nach Freigabe Roman mergen, Pages-Lauf und Live-Seite Kap. 4–6 prüfen.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✗ (Branch nur lokal, Patch und Bundle in Tresorit; gemergt: nein)

## Nachtrag 02.11.2026, nach Rückfrage Roman
- Schreibzugriff erneut angefragt und erteilt. Branch auf `origin/main` @ `4a62d44` rebased (dort ist `vorwort.qmd` in `index.qmd` aufgegangen; der Kommentar zur Zusage steht jetzt in `index.qmd`). `docs/` neu gerendert (36 bekannte OJS-Warnungen), Playwright 1200/390 px Kap. 4–6 erneut ohne Fehler.
- **Gepusht:** `kapitelauftakt-kap04-06` @ `1f0d376` (Quelltext `b610672`, `docs/` `1f0d376`). Vergleich: https://github.com/TH-Koln-Bartnik/genai4teaching/compare/main...kapitelauftakt-kap04-06
- **Nicht gemergt** – Entscheidung Roman: erst Szenen und Aussagen lesen, dann mergen. Patch und Bundle in Tresorit sind damit überholt.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (Branch gepusht; gemergt: nein)

## Merge (02.11.2026, 14:23, Freigabe Roman)
- `kapitelauftakt-kap04-06` in `main` gemergt (`6c82122`), ohne Konflikte mit den inzwischen gemergten Vorwort-Fassungen 3/4; gepusht. Erneutes Rendern danach ohne Änderung an `docs/`.
- Live-Seite um 14:23 aktualisiert: Kap. 4, 5, 6 mit `ez-k4/5/6-…`, ohne `mc-frage`. Playwright gegen die Live-Seite, 1200/390 px: keine Fehler, alle Skalen, Speicherung und Sprünge funktionieren. Branch `kapitelauftakt-kap04-06` kann gelöscht werden.
- Offen bleibt: Schlüsselbegriffe Kap. 2–6 (zweite Zusage im Vorwort).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gemergt: ja, `main` @ `6c82122`)
