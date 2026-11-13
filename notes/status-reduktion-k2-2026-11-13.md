# Status Reduktion Kap. 2 (Sitzung K2, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/STARTAUFTRAEGE-welle1-reduktion-2026-11-13.md`, Abschnitt „Sitzung K2“. Alle Kürzungen hat Roman per MC freigegeben; die Pakete stehen in `claude/reduktion-k2/PAKETE-kuerzung-k2-2026-11-13.md`.

## Ergebnis

- `kapitel02-grundlagen.qmd`: 9.107 → 6.089 Druckwörter (`scripts/zaehle_druck.py`). Harness 537, Modellwahl 676 (Preisstufen mit Abbildung und Fußnote im Druck), Prompts schreiben lassen + Hausrezepte 328, Agenten 387, Gedächtnis 373, Energie 138, Tokens 499. „Wie bleiben Sie informiert?“ und „Blick ins Modell“ stehen online vollständig, im Druck je ein Satz + QR (`images/qr/qr-informiert.png`, `images/qr/qr-blick-ins-modell.png`, Skript `scripts/qr-kapitel02-ringe.mjs`). Die Tabelle „Stand bei Drucklegung“ (`tbl-modellstand`) steht nur noch online; der Druck verweist per QR auf die lebende Modellübersicht.
- Elemente 15 → 9. Raus samt Standbild und QR: Autonomiestufen, Drei Labore, Sitzung und Gedächtnis, Zwischenschritt Texas, Vom Satz zum nächsten Wort, Film Stützräder. Es bleiben Grundbegriffe, Harness, Modellwahl-Baum, Streich-Test, LLM/RAG/Agent, Chatbot→Agent, Skills, Vier Stufen und der Token-Film. Der Satz „Dieselbe Kette … als Film“ ist umgeschrieben, das Bank-Baum-Beispiel ist jetzt ohne Animation erklärt.
- Centaur/Cyborg: Kernaussage 4 verweist auf @sec-arbeitsweisen; der Begriff ist aus dem Schlüsselbegriffe-Kasten von Kap. 2 entfernt (MC), seine Ablenker im Fallspiel sind ersetzt. Der Anker `sb-k2-centaur-cyborg` in Kap. 3 bleibt ohne Gegenstück (harmlos).
- Schlüsselbegriffe Kap. 2: Jeder Begriff zeigt jetzt einen Beispielsatz („*Beispiel:* …“) statt der Definition; die Definition steht im Glossar. Gemeinsame Datei `include/schluesselbegriffe.html`: Der Knopf heißt jetzt „Beispiel zeigen“ statt „Musterantwort zeigen“, Anleitung angepasst (MC). Kommentar in `_filters/schluesselbegriffe.lua` angepasst.
- Lernfrage 8 verweist auf @sec-agenten-gedaechtnis.

## Prüfungen

`quarto render --to html` (1.8.25) ohne Warnungen außer den bekannten OJS-Zeilennummern; keine `?@`-Verweise in `docs/`; Download-PDF/EPUB aus Git zurückgeholt. Playwright 1200/390 px: 9 iframes, keine JS-Fehler, Schlüsselbegriffe-Karten funktionieren. Bei 390 px laufen noch die Navbar-Überschrift und lange URLs in der Kapitel-Literaturliste über den Rand; das betrifft alle Kapitel (Kap. 5 ebenso) und gehört in eine eigene Sitzung (CSS `overflow-wrap` für `.references a` und die Navbar).

## Repo

Branch `reduktion-k2` (Kopf `2543107`, mit `main` inkl. K5 zusammengeführt), gemergt nach `main` als `99b00bc`, gepusht. Keine Änderung an `references.json`.

## Hinweise an folgende Sitzungen

- **K1 (Welle 2):** Stützräder-Film nach den Lernzielen von Kap. 1 einbauen (Z8); die Lösung `sec-loesung-stuetzraeder` im Anhang B steht noch und wird von Kap. 2 nicht mehr referenziert. Bis dahin hat der Film keinen Platz im Kapiteltext.
- **K1, K3, K4 und K67:** Der Knopf heißt schon „Beispiel zeigen“. Kapitel, deren Kasten noch Definitionen trägt (bis zur jeweiligen Sitzung), zeigen unter diesem Knopf vorerst die Definition; Wiederkehr-Karten aus Kap. 1 in Kap. 2 ebenso.
- **PB (Welle 3):** `praxisbeispiele.qmd` / `scripts/praxisbeispiele.py` verlinken noch auf `kapitel02-grundlagen.qmd#vid-stuetzraeder` (Anker gibt es nicht mehr; künftig Kap. 1) und führen Autonomiestufen, Drei Labore, Sitzung und Gedächtnis, Texas als „Im Buch“; auf „Nur hier“ umstellen. „Vom Satz zum nächsten Wort“ ganz streichen (auch von der Praxisbeispiele-Seite).
- **Anhang/Lösungshinweise:** Lösung 9 zu Kap. 2 passt weiter (Harness enthält den Satz zur Autonomie der Lernenden). Lösung 8 passt (vierte Stufe, prüfbarer Ordner).

## Startauftrag nächste Sitzung

Welle 1 ist mit K2 und K5 gemergt; K67 läuft noch. Danach Welle 2 nach `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, Abschnitt 5 (K4, K3, K1+Vorwort), jeweils mit `main` ab `99b00bc` oder neuer.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gemergt: ja)
