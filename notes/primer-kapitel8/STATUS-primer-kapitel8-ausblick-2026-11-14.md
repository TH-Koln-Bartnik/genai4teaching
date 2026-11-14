# Status: Primer als Kap. 8, neues Kap. 9 Ausblick (14.11.2026, Sitzung primer-kapitel8-ausblick)

Auftrag Roman (14.11., 08:51): Primer als viertes Kapitel in Teil II statt Anhang C; Titel „Konkrete Bauanleitungen für Lehr-Artefakte“; sehr kurzes Abschlusskapitel mit Ausblick, damit die Bauanleitungen nicht das letzte Kapitel sind.

## Stand
- Branch `primer-kapitel8-ausblick` von `main` @ `0c69e55`, Commit `00aef99`, **gepusht, nicht gemergt**.
- Merge-Probe: läuft ohne Konflikt auf `pdf-testbau` und `kurztitel-fussnoten`.
- Mit dem k7-Patch (`claude/k7-korrekturen/…patch`, noch nicht im Repo) entstehen zwei triviale Konflikte: `index.qmd` Listenpunkt 7 und `kapitel01-einleitung.qmd` Tabellenzeile 7. Lösung: Zeile 7 in der k7-Fassung („Fallbeispiele aus der Lehre“) übernehmen, die neuen Zeilen 8 und 9 darunter behalten.
- HTML-Render (Quarto 1.8.25, eigener Ausgabeordner, `docs/` unberührt): Exit 0, keine neuen Warnungen, kein `?@`. Seitenleiste: Teil II = Kap. 5–8, dann 9 Ausblick, dann (nur online) „Praxisbeispiele im Überblick“, dann Anhänge A, B.
- PDF (`--profile print`): Exit 0, 298 Seiten (vorher 296). Kap. 8 ab PDF-S. 219 (Buchseite 203), Kap. 9 S. 229–230 plus eine Seite Literatur. Die zwei bekannten Warnungen (`sec-loesung-stuetzraeder`, `sec-loesung-token-genres`) sind auf `pdf-testbau` behoben.

## Umgesetzt
1. `_quarto.yml`: `anhang-primer.qmd` als letztes Kapitel von Teil II; `kapitel09-ausblick.qmd` neu, außerhalb der Teile. Aus beiden `appendices:`-Listen (`_quarto.yml`, `_quarto-web.yml`) entfernt.
2. **Dateiname `anhang-primer.qmd` und Anker `sec-primer-*` bleiben**, damit URLs und die vier gedruckten QR-Codes weiter stimmen. Kapitelanker neu `sec-bauanleitungen` (vorher `sec-anhang-primer`; einziger Verweis in Kap. 1 angepasst).
3. Kap. 8: Titel „Konkrete Bauanleitungen für Lehr-Artefakte“; neuer Einstiegssatz als Brücke von Kap. 7; Abschnittsköpfe ohne „Primer 0/A–D“ (8.1 Welches Format für welches Lehrziel?, 8.2 Didaktische Animationen, 8.3 Präsentationen, 8.4 Lernsongs, 8.5 Lernspiele); „Primer“ im Text durchgehend „Bauanleitung“, „dieses Anhangs“ → „dieses Kapitels“ (29 Ersetzungen, per Skript mit Zählprüfung).
4. Kap. 9 „Ausblick: Was bleibt, wenn die Werkzeuge wechseln“ (rund 330 Wörter): Werkzeuge altern; drei beständige Dinge (Lernforschung, wer prüft, Einbettung); offene Frage Langzeitwirkung und Auswertung im eigenen Kurs; Online-Fassung wächst. Nur vorhandene Quellen (mollick2025e, bjork2011, lee2025, bastani2025, oreopoulos2026, gallegos2026). Keine Lernziele, Einschätzungen, Lernfragen.
5. Verweise: Kap. 6 (Animationen), Kap. 7 (Lernsongs, Lernspiele), Kap. 1 Buchübersicht (Zeilen 8 und 9, Anhänge nur A und B, Unterschrift), Vorwort (Kapitelliste, Satz „acht Kapitel in zwei Teilen, ein kurzer Ausblick und zwei Anhänge“), Kommentar in `scripts/qr-primer.mjs`.

## Offen
- Kap. 8 hat keinen Kapitelapparat wie Kap. 1–7 (Lernziele, Einschätzungen, Kernaussagen, Schlüsselbegriffe, Lernfragen). Ergänzen oder bewusst weglassen?
- Lernpfad-Karte (`images/lernpfade/lernpfade-karte.svg`, Widget `interactions/lernpfade.html`) kennt nur Kap. 1–7 und Anhang A; die Sitzung kurztitel-fussnoten plant, die Abbildung durch eine Tabelle zu ersetzen. Kap. 8 dort eintragen.
- Dateiname: umbenannt in `kapitel08-bauanleitungen.qmd` (Roman, MC 14.11.); `anhang-primer.html` leitet mit Anker weiter; vier QR-Codes neu erzeugt und dekodiert.
- Online steht „Praxisbeispiele im Überblick“ nach dem Ausblick (Profil-Liste wird angehängt).
- Nach Merge: `docs/` rendern, live prüfen.

## Nachtrag 14.11.2026, 10:30 (dieselbe Sitzung, Antworten Roman per MC)

- **Umbenannt und gemergt:** `anhang-primer.qmd` → `kapitel08-bauanleitungen.qmd`; `anhang-primer.html` (Repo-Wurzel, unter `resources` in `_quarto.yml`) leitet mit gleichem Anker weiter, per Playwright geprüft (`#sec-primer-lernsongs` → 8.4). Vier QR-Codes (`scripts/qr-primer.mjs`) neu erzeugt und dekodiert. `main` @ `db5a27d` (Merge `8222ab2` auf `6613e17`, danach `docs/` mit `quarto render --to html`, Download-PDF/EPUB aus Git zurückgeholt; diese sind damit noch auf altem Stand). Live-Prüfung der Website steht aus (Abruf-Freigabe in der Sitzung unbeantwortet).
- **Kapitelapparat Kap. 8** auf Branch `kap8-apparat` (`bfd130a`, von `main` @ `db5a27d`), **gepusht, nicht gemergt, wartet auf Freigabe**: Szene Dr. Miriam Lenz (Grundlagen der Elektrotechnik, erfunden), vier Einschätzungen `ez-k8-1` bis `ez-k8-4` mit Auflösung nach dem Prinzip-Kasten bzw. der Typtabelle jedes Abschnitts, drei Lernziele, sieben Kernaussagen, neun Schlüsselbegriffe `k8-*` (Wissensarten, Aussage-Beleg-Folie, Merkjingle, Abrufspiel, Planspiel, Gamification) mit sechs Fall-Aufgaben und Wiederkehr (`k3-testgestuetzt`, `k4-debriefing`, `k6-merkhilfe`), sechs Lernfragen; Lösungen in Anhang B (`## Kapitel 8 …`, `sb-loesungen kapitel="8"`). Nur vorhandene Quellen.
- Prüfung: HTML ohne neue Warnungen, Playwright 1200/390 px ohne JS-Fehler, alle neun Anker vorhanden; PDF 304 Seiten (+6), Kap. 8 S. 203–216 (Buchseiten), Lösungen in Anhang B gesetzt, keine `??`. Querscrollen bei 390 px kommt von breiten Tabellen und besteht schon auf `main` (auch Kap. 7).

## Startauftrag (falls neue Sitzung)
```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (Push-Zugriff).
Lies notes/primer-kapitel8/STATUS-primer-kapitel8-ausblick-2026-11-14.md (Branch kap8-apparat).
Nach Romans Freigabe: kap8-apparat nach main mergen, quarto render --to html, Download-PDF/EPUB
in docs/ aus Git zurückholen, pushen, Live-Seite kapitel08-bauanleitungen.html und
anhang-primer.html#sec-primer-lernsongs prüfen. Offen: Lernpfad-Karte/-Widget um Kap. 8 ergänzen
(oder Tabelle aus kurztitel-fussnoten), k7-Patch einspielen (Konflikte Zeile 7 in index.qmd und
Kap.-1-Tabelle). Fragen nur als Multiple Choice.
```
