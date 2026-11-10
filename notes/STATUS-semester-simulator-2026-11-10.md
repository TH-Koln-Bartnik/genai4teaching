# STATUS: Semester-Simulator (Kap. 1)

Stand: Di 10.11.2026, 22:00 · Status: **gebaut, geprüft, auf Branch `claude/semester-simulator` gepusht; nicht nach `main` gemergt.**
Gehört zu: `STATUS-auswahl-startprompts-2026-11-10.md`, `OPTIONEN-fable-interaktionen-2026-11-10.md`.

## Entstanden

| Datei | Zweck |
|---|---|
| `interactions/semester-simulator.html` | Simulator: eine HTML-Datei, kein Server, kein Live-Modell, Zufallsstartwert 20261110 |
| `tests/semester-simulator.test.mjs` | zehn Tests; in `npm test` aufgenommen (44 von 44 bestanden) |
| `scripts/druck-semester-simulator.cjs` | Druckstandbild (Woche 8 des Standardlaufs) und QR-Code |
| `images/druck/semester-simulator-qr.png`, `images/qr/qr-semester-simulator.png` | Druckabbildung mit QR |
| `kapitel01-einleitung.qmd` | neuer Abschnitt `#sec-semester-simulator` am Ende von „Was hilft?“: Text, iframe, Druckfassung mit `#fig-semester-simulator` und `#tbl-semester-simulator` |
| `praxisbeispiele.qmd` | Eintrag mit iframe und Verweis ins Kapitel |
| `scripts/qr-in-abbildung.py`, `scripts/aufmerksamkeit-ziele.json`, `package.json` | je eine Zeile ergänzt |

Commit `93b6355` auf `claude/semester-simulator`. Quarto ist im Cloud-Container nicht installiert: **der Buch-Build (HTML und PDF) wurde nicht ausgeführt.**

## Entscheidungen Roman (10.11., per Auswahlfrage)

Skizze freigegeben, Ausbau in derselben Sitzung · Zeitkonto bleibt als Annahme · Abstandsregel nach Cepeda bleibt, deutlich gekennzeichnet · Aufsicht bleibt als Annahme.

## Was Lesende tun

Klausurschnitt schätzen (Marke bleibt im Bild) → zwölf Wochen lang je einen von fünf Zügen wählen (Nichts ändern, Chatbot frei, Tutor mit Leitplanken, Abrufübung, Aufsicht), begrenzt durch Albers' Zeitkonto → Klausur → Rückblick je Woche und Vergleich mit „zwölf Wochen Aufsicht“ und „zwölf Wochen Chatbot frei“. 120 Punkte auf einer Achse 0–100: Tinte = lernt, Akzent = kürzt ab, hohl = ausgestiegen. „Zug zurück“, „Neu beginnen“, Regler rechnen den Lauf sofort neu. Kasten „Bauplan zum Mitnehmen“: sieben Stationen des Baus und kopierbarer Prompt.

## Modell

Zustand = f(Startwert, Parameter, Züge). Verlust je Abkürzer so bemessen, dass der Kurs als Ganzes genau −17 % verliert, gleich bei welchem Abkürzeranteil. Abrufbonus je Woche = 0,51 × Streuung ÷ 12, in der Folgewoche × 0,78. Ausgestiegene schreiben nicht mit.

| Stellgröße | Wert | Herkunft | Prüfung |
|---|---|---|---|
| Test ohne Hilfsmittel nach freiem Chatbot, gegenüber Klassen ohne KI | −17 % | Bastani et al. (2025), Tab. 1: −0,054 bei Kontrollmittel 0,321 | Volltext (Europe PMC, PMC12232635) |
| Derselbe Test nach Tutor | kein belegter Unterschied (−0,004, SE 0,013) | Bastani et al. (2025) | Volltext |
| Übungsleistung Chatbot / Tutor | +48 % / +127 % (+0,137 / +0,361 bei 0,284) | Bastani et al. (2025), Tab. 1 | Volltext |
| Abrufübung statt Wiederlesen | g = 0,51 | Adesope et al. (2017) | **nur sekundär** über Yang et al. (2021); Original hinter Bezahlschranke |
| geballt / verteilt | 36,7 % / 47,3 % Abruf, 271 Leistungsdifferenzen | Cepeda et al. (2006), Tab. 1, S. 359 | Volltext |
| 14 Regler: Bezugsschnitt 60, Streuung 15, Bestehensgrenze 50, Hausübung 30 %, Abkürzer 50 % / 20 %, Folgefaktor 0,78, Ausstieg ab Woche 3 unter 50 % mit 30 %, Zeitkonto 1,5 h/Woche, Zugkosten 3 / 3 / 1 h | – | Annahme, verstellbar | – |
| 5 Bauregeln (Übertragung Test → Klausur; Aufsummieren; wer den Verlust trägt; Aufsicht und Tutor ohne Abkürzen; 120 Personen, zwölf Wochen, Deckel 100) | – | Annahme, in der Tafel als „Bauart“ | – |

Standardwerte: zwölf Wochen Aufsicht 61,1 Punkte (116 Angetretene), „Nichts ändern“ 58,0 (112), Chatbot frei 52,3 (109; auf alle 120 gerechnet 47,5).

## Prüfungen

- `npm test`: 44 von 44. Der Simulator-Test rechnet nach: Schnitt 60 und Streuung 15 im Bezugskurs; −17 % bei 20, 35, 50, 80, 100 % Abkürzern; +48 % und +127 % bei drei Hausübungsniveaus; Abrufbonus verteilt, geballt, zwölf am Stück; gleiche Züge → gleiches Ergebnis; kein Ausstieg vor Woche 3 und in Woche 12; keine feste Zahl 50, 18 oder 12 in `simuliere()`. Der Test schaltet den Ausstieg ab; im Spiel verschiebt der Ausstieg die Schnitte (−14,4 % unter Angetretenen, −19,6 % auf alle).
- Playwright, 1000 px hell und 390 px dunkel: ganzer Lauf klickbar, keine Konsolenfehler, kein Querscrollen, Fokus springt nach „Festlegen“ auf den ersten Zug.
- axe: 0 Verstöße in beiden Ansichten.
- Kontrast: Tinte 17,2 · Grau 5,3 · Akzent 5,0 auf Weiß; dunkel 16,0 · 7,2 · 8,5. Im Druck sind Abkürzende mittelgrau (5,1 gegen Schwarz, 3,4 gegen Weiß).
- `pruefe-aufmerksamkeit.cjs`: BESTANDEN, 14 Schritte, höchstens 24 Wörter im Bild, 1 Farbton.
- Frischer Prüfagent: 14 Mängel, alle eingearbeitet. Wichtigste: Bastanis „Klausur“ ist ein Test direkt nach jeder der vier Übungssitzungen (Tafel und Kapiteltext umformuliert, Übertragung als Bauart-Annahme); „80 von 120 bestehen“ hatte den falschen Nenner; Bestehensgrenze, Ausstiegswoche, Zugkosten und Bauregeln fehlten in der Tafel; Cepeda-Zeile mischte Studie und Modellregel (jetzt getrennt); Deckel verfälschten −17 % und +127 % leicht (behoben, Test auf 1e-9); Stationstext behauptete Ungeprüftes.

## Offen

1. **Adesope et al. (2017) am Original nachlesen** (Tabelle mit dem Restudy-Vergleich). Bis dahin steht in der Tafel „zitiert nach Yang et al. (2021)“. Yang et al. (2021) fehlt in `references.json`; der Kapiteltext zitiert nur `@adesope2017`.
2. Hinweis des Prüfagenten aus Yang et al. (2021): bei Adesope ein Übungstest etwa 0,70, mehrere etwa 0,51. Das spricht gegen das Aufsummieren; die Tafel nennt die Aufteilung deshalb Annahme.
3. Buch-Build mit Quarto (HTML, PDF) und Blick auf Tabelle `#tbl-semester-simulator` im Satz.
4. Merge nach `main` (Entscheidung Roman).
5. iframe-Höhe 2350 px prüfen, wenn der Bauplan-Kasten offen ist (Seite dann rund 3100 px).

## Startauftrag nächste Sitzung

Startprompt „Sitzung 2 – Zwei Tutoren, eine Klausur“ aus `STATUS-auswahl-startprompts-2026-11-10.md`. Zusatz: Bildsprache, Tafel und Testmuster aus `interactions/semester-simulator.html` übernehmen; Bastani-Zahlen mit Fundstellen stehen oben; den Test bei Bastani nicht „Klausur“ nennen, ohne die Übertragung zu kennzeichnen.

## Quellen (DOI am 10.11.2026 geprüft)

Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. *Review of Educational Research, 87*(3), 659–701. https://doi.org/10.3102/0034654316689306
Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS, 122*(26), e2422633122. https://doi.org/10.1073/pnas.2422633122
Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354
Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: A systematic and meta-analytic review. *Psychological Bulletin, 147*(4), 399–435. https://doi.org/10.1037/bul0000309

## Candidate permanent notes

- Ein Lehrmodell wird ehrlich, wenn jede Stellgröße sichtbar als Studie oder als Annahme ausgewiesen ist.
- Bastani et al. maßen den Lernverlust in einem Test direkt nach der Übung, nicht in einer Semesterklausur.
- Wer aussteigt, schreibt nicht mit, und hebt damit den Schnitt der Übrigen.
- Ein frischer Prüfer findet Mängel, die der eigene Test durchlässt, weil der Test die Annahmen des Erbauers teilt.
- Die Hausübung zeigt mit Chatbot mehr Leistung und sagt weniger über die Klausur.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht auf `claude/semester-simulator`, gemergt: nein)
