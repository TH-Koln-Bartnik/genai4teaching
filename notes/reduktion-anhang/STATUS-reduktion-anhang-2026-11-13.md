# Status: Anhang A und Lösungshinweise nach der Reduktion (Sitzung reduktion-anhang, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md` (Abschnitt 5) und die Hinweise „Anhang/Lösungshinweise“ in den Statusnotizen K1, K2, K3, K4, K67 und PB. Die Sitzung besaß nur `kapitel07-appendix02-prompt-sammlung.qmd` (Anhang A) und `kapitel10-appendix05-loesungshinweise.qmd` (Anhang B). Branch `reduktion-anhang` von `main` @ `145028a`.

## Entscheidungen Roman (MC, 13.11. gegen 18:30)

| Paket | Entscheidung |
|---|---|
| A Kap. 4 | Lösung 1 und 4 auf Erinnern/Verstehen/Anwenden, wie vorgeschlagen |
| B Kap. 7 | alles wie vorgeschlagen: Kapitelende 1 und 4, Projektlernen, Karriereberater nur online, neue Online-Lösung „Papier im Raum“ |
| C Druckabbildungen | `fig-hoeher-tiefer-loesung` und `fig-bibliothek-loesung` gestrichen |
| D Stützräder | Selbsttest unter Kap. 1 verschoben |
| Diff | gemergt und gesichert |

## Was geändert wurde (nur Anhang B)

- **Kap. 1:** Selbsttest zum Film „Stützräder“ (`sec-loesung-stuetzraeder`, Anker unverändert) steht jetzt unter Kap. 1, weil der Film seit K1 dort steht. Die Druckabbildung `fig-hoeher-tiefer-loesung` ist weg; der Kasten „Raten Sie zuerst“ steht im Druck nicht mehr, online gibt das Spiel selbst Rückmeldung.
- **Kap. 4:** Lösung 1 nennt Erinnern, Verstehen, Anwenden mit den Lerntechniken aus dem ersten Absatz von `sec-lerntechniken` [@anderson2001]; Lösung 4 „häufig ist es das Anwenden“.
- **Kap. 6:** Druckabbildung `fig-bibliothek-loesung` weg (Bibliothek der Prompts ist aus Kap. 3 entfernt und steht nur auf der Praxisbeispiele-Seite mit eigener Auflösung).
- **Kap. 7:** Kapitelende-Lösung 1 nach Lernstufen (Vorschlag K67), Lösung 4 „Lernstufe“; Projektlernen neu nach Carlile 2004 und Grenzobjekt/Repository [@carlile2002]; Karriereberater-Lösung im Online-Block (Frage nur online); neu im Online-Block die bisher fehlende Lösung zur Lernfrage in `sec-bsp-papier-im-raum`.
- Druckwörter Anhang B (`scripts/zaehle_druck.py`): 3.001 → 2.809. Anhang A: 5.218, unverändert.

## Prüfung Anhang A

Kein Änderungsbedarf. Alle @-Verweise im Druckteil (`sec-access`, `sec-model-choice`, `sec-szenarien`, `sec-bsp-fragen-generator`, `sec-schemas`, `sec-prompt-systemprompt`, `tbl-prompts-online`, `fig-qr-prompt-sammlung`) zeigen auf Ziele, die im Druck stehen; keine Erwähnung verlagerter Elemente (Bibliothek, Agenten-Engpass, Little's Law, EOQ, Höher oder tiefer, Wissenstypen, Galerie). „Elf Prompts im Buch“ stimmt (Hiwi 4, Tutor 2, Copilot 3, Simulator 2).

## Prüfungen

Eigener Verweisprüfer (`@`-Ziel fehlt / Ziel nur online bei Verweis im Druck) über beide Anhänge und die Includes `_einbau/streich-test-loesung.qmd`, `_einbau/detektor-duell-loesung.qmd`: ohne Befund. `quarto render --to html` (1.8.25): nur die 36 bekannten OJS-Zeilennummer-Warnungen; keine `?@`-Verweise in `docs/`; Download-PDF/EPUB aus Git zurückgeholt; `docs/`-Diff nur Anhang B und `search.json`. Playwright 1200/390 px: keine JS-Fehler, keine 404, beide Abbildungen weg, kein „knowing“ mehr, Stützräder zwischen Kap. 1 und Kap. 2. Querscrollen bei 390 px nur durch Navbar-Titel und lange URLs im Literaturverzeichnis (bekanntes CSS-Thema). Kein PDF-Testrender.

## Repo

Branch `reduktion-anhang` (Commit `4aefcfb`), gepusht; per Fast-forward nach `main` @ `4aefcfb`, gepusht.

## Offen / Hinweise

- **Kap. 5 Lernfrage 2** (Richtlinien, Detektion): der Abschnitt steht online; im Druck trägt ein Absatz „Was Hochschulrichtlinien empfehlen“ die Antwort, Lösung 2 passt dazu. Kein Handlungsbedarf, beim PDF-Bau gegenlesen.
- **Ungenutzte Dateien** (nicht dieser Sitzung): `images/druck/hoeher-tiefer-ki-aufgaben.svg` und `images/druck/bibliothek-der-prompts.svg` werden im Buch nicht mehr eingebunden (nicht gelöscht; prüfen, ob die Praxisbeispiele-Seite sie braucht).
- Aus PB weiter offen: iframe-Titel „Zehn“ → „Neun“ in `index.qmd` Zeile 24; Skripte `scripts/umzug/verweise_nummern.py` und `scripts/qr-kapitel01.mjs` verweisen auf die gelöschte Galerie Kap. 1; CSS-Sitzung (Navbar, URLs, breite Tabellen bei 390 px); Branches `claude/semester-simulator`, `entfernen-agenten-engpass`, `vorwort-galerie-14` löschen.

## Startauftrag nächste Sitzung

Welle 3 ist abgeschlossen. Empfohlen als Nächstes eine kleine Aufräumsitzung (iframe-Titel `index.qmd`, Galerie-Skripte, ungenutzte Druckbilder, überholte Branches) oder die CSS-Sitzung für 390 px; danach ein PDF-Testbau mit Durchsicht aller neuen Drucksätze mit QR und der Schlüsselbegriffe-Kästen.

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (frisch klonen, Push-Zugriff nötig).
Lies claude/reduktion-anhang/STATUS-reduktion-anhang-2026-11-13.md und claude/reduktion-pb/STATUS-reduktion-pb-2026-11-13.md,
Abschnitte „Offen“. Aufräumen auf Branch aufraeumen-reduktion von main (@ 4aefcfb oder neuer): iframe-Titel
in index.qmd, Skripte mit Bezug auf die gelöschte Galerie Kap. 1, ungenutzte Druckbilder und QR-Dateien
(löschen nur nach MC), überholte Branches. quarto render --to html, PDF/EPUB aus Git zurückholen,
Playwright 1200/390 px, keine ?@-Verweise. Diff per MC, Merge, ergebnisse-sichern. Fragen nur als Multiple Choice.
```

## Candidate permanent notes

- Ein Lösungsanhang muss nach jeder Kürzung gegen die Aufgaben im Druck gezählt werden, sonst stehen Lösungen ohne Frage im Buch.
- Eine Lösung gehört zu dem Kapitel, in dem ihre Aufgabe steht, nicht zu dem, aus dem die Aufgabe stammt.
- Lernfragen, die nur online stehen, brauchen ihre Lösung ebenfalls nur online; so bleibt der Druck schlank, ohne dass online eine Lücke entsteht.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ 4aefcfb)
