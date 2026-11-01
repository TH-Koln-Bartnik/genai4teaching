# Status: Kapitelauftakt Kap. 2 und 3 nach Schablone (01.11.2026, ca. 11:00)

Auftrag: `claude/kapitelkopf-position/AUFTRAG-kapitelauftakt-kap02-06-2026-11-01.md`. Entscheidungen Roman (01.11., Multiple Choice): **diese Sitzung Kap. 2+3**, Kap. 4–6 in neuer Sitzung; **einheitlich vier Aussagen je Kapitel**.

## Vorprüfung „Augmentierung“ online
- Live-`kapitel04.html` enthält „Augmentierung“ (7×, curl, Last-Modified 08:56 GMT = Deployment von `4cadf3a`). WebFetch lieferte noch eine gecachte Altfassung; curl ist maßgeblich.
- **Website hängt auf `4cadf3a`.** Alle Pages-Läufe danach (`dc40e44`, `aa1278e`, `32c7333`) scheitern mit „Deployment request failed … due to in progress deployment. Please cancel 4cadf3a… first“. P4 (2.6), P5, Tabelle 3.2, Schreibtrainer, Lernpfad im Vorwort sind deshalb nicht live (Kap. 3 online ohne ●●●). Re-run aus der Sitzung ist nicht erlaubt.
- **Roman:** GitHub → Actions → „pages build and deployment“ (jüngster Lauf auf `main`) → „Re-run all jobs“. Scheitert er mit derselben Meldung, später erneut; der nächste Push auf `main` (z. B. Merge dieses Branches) startet ebenfalls einen Lauf.

## Basis
Branch `kapitelauftakt-kap02-03`, Commit `c964471`, gepusht, auf `main` @ `32c7333` (nicht `4cadf3a`: `main` war schon weiter, mit 2.6/P4, P5, Tabelle 3.2; `4cadf3a` ist Vorfahr). Kein Konflikt mit `main`. Vergleich: https://github.com/TH-Koln-Bartnik/genai4teaching/compare/main...kapitelauftakt-kap02-03
**Nicht gemergt** – wartet auf Freigabe Roman.

## Umgesetzt
**Kap. 2 (`kapitel02.qmd`)**
- Szene (108 Wörter): Dr. Miriam Kessler, Statistik für 300 Psychologie-Studierende; Chatbot zum Skript, Kollege rät zum Agenten, Trinkgeld-Prompt, Regressionsaufgabe gelöst/Buchstaben verzählt, erfundene Literaturangabe. Herkunft: Workshops.
- Aussagen und Prüfkästen:
  1. `ez-k2-1` Chatbot zum Skript braucht keinen Agenten, Abruf genügt → **ja**; Prüfkasten in 2.1.3 nach „RAG macht das Modell kundiger, nicht selbstständiger.“ (vor der Animation).
  2. `ez-k2-2` Erfundene Quellen = Programmfehler, nächste Versionen stellen ihn ab → **nein**; 2.2 nach dem Halluzinations-Absatz (Lindsey).
  3. `ez-k2-3` Wer Schweres löst, löst Leichtes erst recht → **nein**; 2.4 nach dem Jagged-Frontier-Absatz (Dell'Acqua, 19 Prozentpunkte).
  4. `ez-k2-4` Höflichkeit/Drohung/Trinkgeld verbessern nicht zuverlässig → **ja**; 2.5.5 nach dem Meincke-Absatz.
- Entfallen: MC-Fragen 4D-Modell und Energie. Lernziele 5 → 4 (Energie in LZ 2, Prompt + 4D in LZ 4). Kernaussagen 1–7 gruppiert: LZ1 Setup (1), LZ2 Funktionsweise/Halluzinationen/Energie (2–4), LZ3 Jagged Frontier (5), LZ4 Prompts und 4D (6–7).

**Kap. 3 (`kapitel03.qmd`)**
- Szene (106 Wörter): Thomas Brandt, Lehrkraft für besondere Aufgaben, Kostenrechnung, 250 Erstsemester; 18 SWS, feste Bänke, Skript dreimal lesen, Übungsblätter per Chatbot, Tutor mit Verbots-Prompt, Kollege: Anweisung ausgehebelt. Herkunft: Workshops und eigene Lehre.
- Aussagen und Prüfkästen:
  1. `ez-k3-1` Wirksame Methoden selten, weil Lehrende die Forschung nicht kennen/ihr misstrauen → **eher nicht**; 3.1 nach „Warum werden trotzdem Vorlesungen …“.
  2. `ez-k3-2` Richtige Sofortlösungen schaden nicht → **nein**; 3.1 nach dem Kestin-Zitat.
  3. `ez-k3-3` Verteilte kleine Abfragen > Wiederlesen → **ja**; 3.4 nach „Häufige Aktivierung … [@roediger2006]“.
  4. `ez-k3-4` Gute Anweisung an das Modell genügt für einen lernförderlichen Tutor → **nein** (neu, statt Wiederholung der Kap.-1-Aussage zum Tutorzugang; Beleg `barth2026steering`); 3.5 nach „Welche Gestaltungsmerkmale schützen vor Auslagerung?“.
- Lernziele 1–4 nummeriert; Kernaussagen gruppiert: LZ1 Zeit (1), LZ2 Bremsen (2), LZ3 Wissensstufen/Lerntechniken/ICAP (3–5), LZ4 Evidenz (6).

**Sonst:** `notes/kapitelauftakt-einschaetzungen.md` – Stand Kap. 1–3 vermerkt. MC-Technik (`_filters/mc-frage.lua`, `include/mc-frage.html`, `_quarto.yml`) bleibt, Kap. 4–6 nutzen sie noch.

## Geprüft
- `quarto render --to html` (Quarto 1.8.25), zweimal (vor und nach Rebase): 36 Warnungen = bekannte OJS-Warnungen; Download-PDF/EPUB aus Git zurückgeholt; Rebase-Render identisch.
- Playwright 1200/390 px, Kap. 2 und 3: keine JS-Fehler, keine 4xx; je Aussage Skala sichtbar, genau ein Prüfkasten; Klick → „Gespeichert. Auflösung in Kapitel 2.1.3 / 2.2 / 2.4 / 2.5.5“ bzw. „3.1 / 3.1 / 3.4 / 3.5“, Link springt zu `#pruefen-ez-kN-i`, dort „Ihre Einschätzung vorab: …“, nach Neuladen erhalten. Horizontale Breite bei 390 px: Kap. 2 657 px, Kap. 3 624 px – beides Altbestand (vorher gleich).
- Druckpfad: LaTeX-Testrender der Köpfe mit `einschaetzung.lua`: Gliederung „In diesem Kapitel“, `\newpage`, vier Skalen je Kapitel, Verweise in Klammern, keine Platzhalter. PDF nicht gesetzt (kein TeX in der Cloud).
- Wortzahl Kopf (Titel bis erster Abschnitt): Kap. 2 635 → 378, Kap. 3 455 → 365. Kapitel gesamt: Kap. 2 14.537 → 14.630, Kap. 3 6.766 → 6.989 (Prüfkästen).

## Offen
1. Roman: Diff prüfen → Merge in `main` (Freigabe), danach Pages-Lauf kontrollieren (siehe oben).
2. Kap. 4–6 nach Schablone in neuer Sitzung (je 4 Aussagen; Kap. 4: 5 MC → 4; Kap. 6 = `kapitel06-fallbeispiele.qmd`, eigene Fälle für die Szene). Danach MC-Technik entfernen, `notes/schablone-leitfragen-lernfragen.md` auf neue Schablone verweisen.
3. Inhaltlich prüfen: Szenen-Personen (Kessler, Brandt) erfunden und als Komposit gekennzeichnet; Aussage `ez-k3-4` ersetzt die alte MC-Frage zur Einbettung (Einbettung bleibt in Kap. 1, `ez-k1-4`).

## Startauftrag nächste Sitzung
Von `main` abzweigen (nach Merge dieses Branches, sonst von `kapitelauftakt-kap02-03`), Branch `kapitelauftakt-kap04-06`. Kap. 4, 5, 6 nach `notes/kapitelauftakt-einschaetzungen.md`; IDs `ez-k4-1` …; Szenen mit neuen Personen/Fächern (bisher: Albers/Technische Mechanik, Kessler/Statistik Psychologie, Brandt/Kostenrechnung). Prüfschritte wie oben.

Ablage geprüft: Projekt ✓ / Tresorit ✓ (Projektnotizen-Claude) / Repo ✓ (Branch `kapitelauftakt-kap02-03`, `notes/2026-11-01-status-kapitelauftakt-kap02-03.md`, gepusht; nicht gemergt)
