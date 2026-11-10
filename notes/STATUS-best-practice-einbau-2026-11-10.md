# Status: Best-Practice-Auswahl eingebaut – S-A, S-F, P-A, P-B (10.11.2026, 21:15)

Auftrag: Startauftrag aus `VORSCHLAG-best-practice-harvard-mit-stanford-2026-11-10.md`, Abschnitt 7. Roman hatte S-A, S-F, P-A, P-B gewählt.

## Entscheidungen Roman (MC, 10.11.2026)

1. Repo: Branch pushen, Merge erst nach Diff-Entscheidung. Schreibzugriff besteht (Probelauf und Push erfolgreich).
2. Tresorit: Freigabe für den ganzen Ordner `06-Lehrbuch-Publikation-Logos` erteilt. Pfad: `C:\Users\roman\My Tresors\0_Roman Arbeit\0_GenAI\1-Research\06-Lehrbuch-Publikation-Logos`.
3. P-B steht in Kap. 5 `sec-pruefen`.
4. Patch `primer-anhang-c` war nicht eingespielt; in dieser Sitzung nachgeholt.
5. Diff: **so lassen, nicht mergen.** Merge in der Primer-Sitzung, die Anhang C kürzt und `docs/` rendert.
6. S-A: Satz „in meiner Lehre ist das Format noch nicht erprobt“ **gestrichen**.

## Umgesetzt

**Branch `primer-anhang`** (Commit `8ae8279`, Basis `main` @ `64493e8`, gepusht, nicht gemergt). Inhaltsgleich mit Patch `79fa95e`: Der Patch lag nur als Projekttext vor, die Änderungen wurden per Skript nachgebaut; `git diff --stat` stimmt Zeile für Zeile mit dem Patch überein (8 Dateien, +37/−8), Druckwörter Anhang C 3.645 wie im Status vom Abend.

**Branch `best-practice-vorreiter`** (auf `primer-anhang`, gepusht, nicht gemergt):

| Nr. | Ort | Was | Druck |
|---|---|---|---|
| P-B | `kapitel05-4d-phasen.qmd`, Anfang von „Formate nach den vier Säulen“ | zwei Sätze: eigene Aufgabe einem Sprachmodell stellen, Schritt 1 von 19 im TLL-Companion | +58 |
| S-F | `kapitel05-4d-phasen.qmd`, `sec-kurs-integration`, vor dem Verweis auf Kap. 7; Anker `#bsp-astronomie-harvard` | Kasten „Anwendungsbeispiel“ nur online; im Druck ein Absatz mit QR | +80 |
| S-A | `kapitel07-artefakte.qmd`, neuer Abschnitt `sec-bsp-papier-im-raum` am Ende von „Wissen übersetzen“ | online: Prinzip, Empfehlung, Kasten „Vorschlag, Stand 11/2026“ mit Tabelle `tbl-papier-im-raum`, drei Prüfschritte, Lernfrage; Druck: ein Absatz mit QR | +89 |
| P-A | `anhang-primer.qmd`, Einleitung vor Primer 0, nur online | ein Absatz „Arbeitsablauf mit KI: erst der Kursordner, dann der Auftrag“ | 0 |

Druckwörter (`scripts/zaehle_druck.py`): Kap. 5 8.323 → 8.461; Kap. 7 7.913 → 8.002; Anhang C 3.645 → 3.645. Zusammen +227.

Neue Quellen in `references.json` (alle URLs am 10.11.2026 aufgerufen): `stubbs2026astronomy`, `bokcenterideas`, `bokcenter2026fall`, `bokcenter2026summer`, `mittllcompanion`. Zwei QR-Codes: `images/qr/qr-bsp-papier-im-raum.png`, `images/qr/qr-bsp-astronomie-harvard.png`.

## Was die Quellen tragen und was nicht

- **Stubbs et al. (2026), Volltext gelesen.** Astronomy 17, Herbst 2025, 14 Studierende. Umfrage zur Kursmitte: 5 Antworten; Kursbewertung: 11. Kein Kontrollgruppenvergleich. Kursbewertung etwa eine Standardabweichung über dem Vorjahr, das eine andere Lehrperson ohne KI unterrichtet hatte. Slack-Bot kaum genutzt (2,8 von 5), Code im Notebook am höchsten bewertet (4,4). Notengewichte laut Text: Zwischenklausur 20, Abschlussklausur 25, Wochenaufgaben 30, Mitarbeit 25; der Text nennt daneben „im Wesentlichen 50/50“. Der Kasten nennt 45 %. Die genauen Bewertungszahlen stehen nur in Abb. 6 des Papiers und sind nicht übernommen.
- **Bok-Ideenseite.** Die Adresse aus der Vorschlagsnotiz (`/how-to-use-AI-in-your-teaching`) liefert nur einen Ausschnitt; gültig ist `/examples-and-ideas-for-using-AI-for-your-teaching`. 15 Ideen, ohne Kurse, Personen, Wirkungsdaten, Datum.
- **Bok-Workshops.** „CLAUDE.md files and skills“, „problem banks based on your past problems“, „interactive visualizations“ und „connect Cowork to a folder of course materials“ stehen in den aufklappbaren Tagesbeschreibungen der Sommerreihe und in den Veranstaltungsseiten; gelesen über die Suchtreffer, der Seitenabruf zeigte die eingeklappten Teile nicht. Der Herbst-Workshop behandelt weiter Grundlagen des Promptens; „Harvard schult nicht mehr im Prompten“ aus der Vorschlagsnotiz ist überzogen und steht nicht im Buch.
- **TLL-Companion.** 19 Schritte (7/6/6), Schritt 1 „Run your own assignments through an AI“, Aufwand „Low“. Kein Datum.
- **Eigene Zutaten, als solche gekennzeichnet:** der SCM-Fall in S-A (Brötchenlinie Kaya auf dem Plakat) ist ein Vorschlag; die drei Prüfschritte in S-A und der Inhalt der Kontextdatei in P-A sind Ableitungen aus @levine2026, @sec-ki-vo und @sec-agenten-praxis, keine Aussagen des Bok Center.

## Prüfung

- `quarto render --to html` (1.8.25) in einer Kopie: fehlerfrei; alle fünf neuen Zitate und alle neuen Verweise (`@sec-hiwi`, `@sec-bsp-fallstudie`, `@sec-ki-vo`, `@sec-agenten-praxis`, `@tbl-kurs-phasen`, `@tbl-papier-im-raum`) lösen auf.
- **Nicht geprüft:** Druck-PDF, Darstellung bei 390 px, Live-Seite. `docs/` ist auf keinem der beiden Branches neu gerendert.

## Offen

1. Merge beider Branches nach `main` und Render von `docs/` in der Primer-Sitzung (Startauftrag in `claude/primer/STATUS-primer-anhang-c-2026-11-10.md`; dort entfällt jetzt `git am`, der Branch `primer-anhang` liegt auf origin).
2. Die QR-Anker `#sec-bsp-papier-im-raum` und `#bsp-astronomie-harvard` führen erst nach dem Merge und Render zum Ziel.
3. Druckbudget: +227 Wörter bei 60.438 gegen Ziel 54.000. Kürzbar auf je einen Satz mit QR (rund −110).
4. Aus Abschnitt 0 der Vorschlagsnotiz nicht gebaut: Bok-Idee 11 „Slide Feedback Loop“ als Prüfschritt in Primer B; Bok-Idee 14 als Beleg für die Primer-Showcases D-1 und C-2.
5. Vorschlagsnotiz Abschnitt 5: MIT-Umfragezahlen weiter nur aus The Tech; Stanford-Bibliothek nur Seite 1.

## Startauftrag nächste Sitzung

> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/best-practice-vorreiter/STATUS-best-practice-einbau-2026-11-10.md` und `claude/primer/STATUS-primer-anhang-c-2026-11-10.md`. Die Branches `primer-anhang` (`8ae8279`) und `best-practice-vorreiter` liegen auf origin, nicht gemergt; `git am` entfällt. Arbeite auf `best-practice-vorreiter` weiter: Primer im Druck auf rund 1.500 Wörter kürzen, Druckgrafiken 0-2, C-4, D-4 und Druckzwillinge A-1, B-1 bauen (Einzelheiten im Primer-Status), HTML und Druck-PDF rendern, Diff per MC, Merge nach `main`, `docs/` rendern, live prüfen, auch die beiden neuen QR-Anker. Fragen nur als Multiple Choice. Am Ende `ergebnisse-sichern`.

## Candidate permanent notes

- Ein angekündigter Nachweis ohne KI macht KI-erlaubte Hausaufgaben erst tragfähig.
- Studierende brauchen die Begründung für die KI-Regeln eines Kurses in der ersten Woche, nicht zur Semestermitte.
- Ein öffentlicher Kurs-Bot wird gemieden, weil Fragen dort sichtbar sind.
- KI kann Papierarbeit auswerten, ohne den Studierenden die Denkarbeit abzunehmen.
- Die eigene Aufgabe einem Sprachmodell zu stellen ist der billigste Test ihrer Aussagekraft.
- Eine Kontextdatei ersetzt die Rollenfloskel, weil sie Kurs und Regeln einmal festhält statt in jedem Prompt.

## Ablage

- Projekt: `claude/best-practice-vorreiter/STATUS-best-practice-einbau-2026-11-10.md`, `…/best-practice-einbau-2026-11-10.diff`
- Tresorit: `Projektnotizen-Claude/best-practice-vorreiter/` (Status, Diff), `Projektnotizen-Claude/primer/` (drei Dateien vom 10.11. nachgeholt)
- Repo: `notes/STATUS-best-practice-einbau-2026-11-10.md`, `notes/VORSCHLAG-best-practice-harvard-mit-stanford-2026-11-10.md` (mit Nachtrag Abschnitt 8)
