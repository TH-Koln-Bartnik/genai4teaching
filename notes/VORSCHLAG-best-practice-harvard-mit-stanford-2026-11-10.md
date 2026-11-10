# Vorschlag: Best-Practice-Auswahl aus Harvard, MIT, Stanford und Wharton für Primer und Showcases (10.11.2026)

Auftrag Roman (10.11., 19:47): Recherchieren, was Harvard, MIT und andere Vorreiter in den letzten Monaten an Use Cases und Empfehlungen online gestellt haben; daraus eine Auswahl für Primer oder Showcases.

Stand 20:05: Recherche abgeschlossen, Roman hat gewählt (Abschnitt 0), **nichts im Repo geändert**.

## 0 Entscheidungen Roman (MC, 10.11.2026, 19:56) und Korrektur

- **1a:** Gebaut werden S-A, S-F, P-A, P-B.
- **2ab:** Notiz nach Tresorit (erledigt in dieser Sitzung) und nach Repo `notes/` (nächste Sitzung).
- **3a:** Bau in neuer Sitzung, Startauftrag in Abschnitt 7.

**Korrektur zur Zuordnung „Primer“.** Die erste Fassung dieser Notiz hat „Primer“ als Prompting-Primer (Kap. 2.4) gelesen. Seit heute Abend ist der **Praxis-Primer wieder Anhang C** (0 Formatweiche, A Animationen, B Präsentationen, C Lernsongs, D Lernspiele; siehe `claude/primer/STATUS-primer-anhang-c-2026-11-10.md`). Die Auswahl passt dort so:

| Nr. | Ziel nach Korrektur | Begründung |
|---|---|---|
| P-A Kontextdatei und Kursordner | Praxis-Primer, Abschnitt „Arbeitsablauf mit KI“ (nur online), ein gemeinsamer Absatz in der Einleitung von Anhang C | Bok Center nennt als Ergebnis ausdrücklich interaktive Visualisierungen und Aufgabenbanken; das ist der Arbeitsablauf von Primer A und D |
| P-B Eigene Aufgaben durch die KI schicken | **kein** Primer-Thema; Kap. 5 (`sec-pruefen`) oder Transfer nach dem Streich-Test in 2.4 – per MC klären | betrifft Prüfen, nicht Medienbau |
| S-A Papier im Raum, KI im Hintergrund | Praxisbeispiele Kap. 7, Gruppe „Wissen übersetzen“ | unverändert |
| S-F Astronomiekurs | Kap. 5 `sec-kurs-integration` als Kasten | unverändert |
| neu: Bok-Idee 11 „Slide Feedback Loop“ | Primer B, Prüfschritt | KI prüft Foliensatz auf Klarheit, Tempo, Passung zum Lernziel |
| neu: Bok-Idee 14 (schwache KI-Argumente zerlegen) | stützt die Leitidee der Primer-Showcases D-1 und C-2 (`VORSCHLAG-primer-showcases-2026-11-10.md`) | externe Bestätigung des Musters „Fehler suchen statt Muster bewundern“; keine Wirkungsdaten |

Die Primer-Showcases (0-1, A-1, B-1, C-1, D-1) aus der Parallelsitzung bleiben davon unberührt; diese Notiz liefert dafür nur Belege von außen.

## 1 Was die Vorreiter seit Mai 2026 veröffentlicht haben

| Quelle | Datum | Art | Kern |
|---|---|---|---|
| MIT Ad Hoc Committee, Bericht | 13.08.2026 (öffentlich 25.08.) | Institutionsbericht | 30 Empfehlungen in drei Blöcken; im Projekt schon als `mit2026aicommittee` (Kap. 5.5) geführt |
| MIT TLL, „Actionable Companion“ | Herbst 2026 (ohne Datum) | Handreichung | 19 Schritte, nach Aufwand L/M/H gestuft |
| MIT TLL, Vier-Optionen-Menü | ca. 05/2026 (ohne Datum) | Vorlage | unbeschränkt / begrenzt / verlangt / verboten, je mit Begründung |
| Harvard Bok Center, Sommerreihe und Herbstangebot | 05–10/2026 | Workshops | vom Chatfenster zur Desktop-App mit Dateizugriff; CLAUDE.md, Skills, Multi-Agenten |
| Harvard Bok Center, „Examples & Ideas“ | 2026 (ohne Datum) | Ideenliste | 15 Einsatzideen, viele mit Bilderkennung auf Papierarbeit |
| Harvard Bok Center, „Designing Courses & Assignments“ | 2026 (ohne Datum) | Handreichung | sieben Muster für KI-integrierte Aufgaben, Kontrollpunkte ohne KI |
| Stubbs et al., Harvard Astronomie | 04.02.2026 | Preprint (arXiv) | Kurs mit vier KI-Einsatzarten, Aufgaben „encouraged/discouraged“, Klausuren ohne Geräte |
| Stanford CTL, AIMES „AI Teaching Strategies“ | aktualisiert 18.09.2026 | Handreichung | drei Wege (assigned, limited, prohibited) mit je eigenen Strategien |
| Stanford CTL, AIMES Library of Examples | laufend | Sammlung | reale Kursartefakte; nur erste Seite gesichtet (39 Einträge) |
| Chung et al. (Wharton/Penn) | 03/2026 | Working Paper, RCT | proaktive Aufgabenreihung +0,15 SD; im Projekt als B-Quelle `chung2026personalized` |

## 2 Vier Muster quer durch die Quellen

1. **Vom Chat zur Arbeit an Dateien.** Harvard schult Lehrende nicht mehr im Prompten, sondern im Einrichten einer Arbeitsumgebung: App installieren, Ordner mit Kursmaterial anbinden, Kontextdatei schreiben (Bok Center, 2026a, 2026b).
2. **KI-bewusst statt KI-sicher.** MIT und Harvard raten von Detektoren ab und verlangen stattdessen einen Moment je Kurs, der sich nicht auslagern lässt (MIT Ad Hoc Committee, 2026, 3.1.2, 3.1.9; MIT TLL, o. J.-a; Bok Center, o. J.-a).
3. **Regel mit Grund.** Jede Kursregel zur KI steht prominent und trägt ihre Begründung (MIT Ad Hoc Committee, 2026, 3.1.8; MIT TLL, o. J.-b; Stanford CTL, 2026).
4. **Lehrende legen offen.** Wer KI für Material, Bewertung oder Feedback nutzt, sagt wie und warum (MIT Ad Hoc Committee, 2026, 3.2.3).

## 3 Auswahl „Primer“ (ursprüngliche Fassung für Kap. 2.4; Zuordnung siehe Abschnitt 0)

| Nr. | Praxis | Quelle | Aufwand |
|---|---|---|---|
| P-A | Kontextdatei statt Rollenfloskel: Wer bin ich, welcher Kurs, welche Werte gelten; dazu Ordner mit Kursmaterial | Bok Center (2026b) | klein |
| P-B | Eigene Aufgaben durch die KI schicken, bevor man über Regeln redet | MIT TLL (o. J.-a), Stufe L | sehr klein |
| P-C | Erst zeigen, wo das Modell irrt, dann wie man bessere Ergebnisse bekommt; Fehlerfälle des eigenen Fachs sammeln | Bok Center (2026a); MIT TLL (o. J.-a), Stufe ML | sehr klein (nicht gewählt) |
| P-D | Vier-Optionen-Menü mit Begründungspflicht; die Parallele Systemprompt–Kursregel ist **meine Deutung**, keine Aussage der Quelle | MIT TLL (o. J.-b) | klein (nicht gewählt) |

## 4 Auswahl für die Showcases (Praxisbeispiele)

| Nr. | Use Case | Quelle | Anschluss im Buch | Bewertung |
|---|---|---|---|---|
| S-A | Papier im Raum, KI im Hintergrund: Fotos annotierter Ausdrucke oder Gruppenplakate werden über die Klasse ausgewertet | Bok Center (o. J.-b), Ideen 1, 2, 12, 13 | Neues Beispiel unter „Wissen übersetzen“; in keinem der 37 Praxisbeispiele vorhanden | **gewählt** |
| S-B | Stakeholder-Bots debattieren: Studierende bauen je einen Bot für eine Interessengruppe | Bok Center (o. J.-b), Idee 8 | Erweiterung „Studierende bauen“; SCM-Fassung Einkauf – Lieferant – Qualität | nicht gewählt |
| S-C | Absichtlich schwache KI-Argumente oder fehlerhafte Beweise zum Zerlegen | Bok Center (o. J.-b), Idee 14 | Beleg für Primer-Showcases D-1, C-2 | Beleg |
| S-D | Kursspezifischer KI-Coach zum privaten Üben des Vortragens (Mediationskurs) | MIT Ad Hoc Committee (2026) | Beleg für die Verhandlungssimulation; nur anekdotisch | Beleg |
| S-E | Größere Projekte: Capstone baut in einem Semester fast produktionsreife Software | MIT Ad Hoc Committee (2026, 3.1.3) | Einordnung der RAG-Projekte mit Unternehmen | Beleg |
| S-F | Ganzer Kurs als Muster: Aufgaben „KI erwünscht / KI unerwünscht“, Slack-Bot mit RAG-Lehrbuch, Klausuren ohne Geräte; Evaluation nicht schlechter als im Vorjahr | Stubbs et al. (2026) | Kasten in „Kurs-Integration: Drei Phasen“ (Kap. 5) | **gewählt, Preprint** |
| S-G | Der Tutor wählt die nächste Aufgabe, statt nur zu antworten | Chung et al. (2026) | Aufwertung von B nach A im Tutor-Abschnitt prüfen | bekannt |

Druckbudget: Das Buch liegt mit 60.438 Druckwörtern über dem Ziel von 54.000. S-A und S-F daher online mit QR, im Druck je ein Absatz; P-A nur online.

## 5 Grenzen der Recherche

- MIT-Bericht über die HTML-Fassung gelesen; das PDF ließ sich nicht abrufen. Die Umfragezahlen (49 % Verwaltung, 38 % Prüfungen erstellen, 36 % Vorlesungsnotizen) stammen aus The Tech (2026), nicht am Bericht selbst geprüft.
- Die von Forbes genannten TLL-Beispiele (Übersetzungsvergleich, Datenvisualisierung) habe ich auf der TLL-Seite nicht gefunden; nicht verwenden, bevor die Primärseite vorliegt.
- Bok-Ideenliste und TLL-Seiten tragen kein Datum; die Ideen nennen keine Kurse oder Personen und keine Wirkungsbelege.
- Stanford-Bibliothek: nur die erste Seite. Stubbs et al. nur Abstract; vor dem Einbau Volltext lesen.
- Wharton: seit Mai 2026 kein neues Prompt-Papier für die Lehre gefunden; Mollick (2026) fasst nur die zwei Penn-Studien zusammen.

## 6 Quellen (alle URLs am 10.11.2026 aufgerufen)

Chung, A. T.-H., Zhang, B., Kung, L.-C., Bastani, H., & Bastani, O. (2026). *Effective personalized AI tutors via LLM-guided reinforcement learning* [Working Paper]. https://hamsabastani.github.io/llmRL_doe.pdf

Derek Bok Center for Teaching and Learning. (2026a). *Teaching and learning with AI: Fall 2026 offerings*. Harvard University. https://bokcenter.harvard.edu/teaching-and-learning-ai-fall-2026-offerings

Derek Bok Center for Teaching and Learning. (2026b). *Summer workshop series: Claude for teaching, course development, and research*. Harvard University. https://bokcenter.harvard.edu/summer-workshop-series-claude-teaching-course-development-and-research

Derek Bok Center for Teaching and Learning. (o. J.-a). *Designing courses & assignments in the age of AI*. Harvard University. https://bokcenter.harvard.edu/courses-and-assignments-in-age-of-ai

Derek Bok Center for Teaching and Learning. (o. J.-b). *Examples & ideas for using AI for your teaching*. Harvard University. https://bokcenter.harvard.edu/how-to-use-AI-in-your-teaching

MIT Ad Hoc Committee on AI Use in Teaching, Learning, and Research Training. (2026, 13. August). *Report*. Massachusetts Institute of Technology. https://aiandeducation.mit.edu/report/

MIT Teaching + Learning Lab. (o. J.-a). *An actionable companion to the MIT AI report*. https://tll.mit.edu/teaching-resources/course-design/ai-in-teaching-learning/an-actionable-companion-to-the-mit-ai-report/

MIT Teaching + Learning Lab. (o. J.-b). *Acceptable AI use policies*. https://tll.mit.edu/teaching-resources/course-design/ai-in-teaching-learning/acceptable-ai-use-policies/

Mollick, E. (2026, 26. Mai). *Choosing to stay human*. One Useful Thing. https://www.oneusefulthing.org/p/choosing-to-stay-human

Stanford Center for Teaching and Learning. (2026, 18. September). *AI teaching strategies*. https://ctl.stanford.edu/aimes/ai-teaching-strategies

Stanford Center for Teaching and Learning. (o. J.). *AIMES library of examples*. https://ctl.stanford.edu/aimes/aimes-library-examples

Stubbs, C. W., Huang, D., Koh, J., Woods, M., & Plazas Malagón, A. A. (2026). *Lessons learned from integrating generative AI into an introductory undergraduate astronomy course at Harvard* (arXiv:2602.04389). https://arxiv.org/abs/2602.04389

The Tech. (2026, 17. September). *MIT AI report takes first step towards an Institute-wide response*. https://thetech.com/2026/09/17/ai-committee-report

## 7 Startauftrag für die nächste Sitzung

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies claude/best-practice-vorreiter/VORSCHLAG-best-practice-harvard-mit-stanford-2026-11-10.md (Abschnitt 0 zuerst) und claude/primer/STATUS-primer-anhang-c-2026-11-10.md. Roman hat gewählt: S-A, S-F, P-A, P-B. Kläre per MC: (1) Repo-Schreibzugriff, (2) Tresorit-Freigabe für 06-Lehrbuch-Publikation-Logos, (3) Ort von P-B (Kap. 5 sec-pruefen oder Transfer nach dem Streich-Test), (4) ob der Patch primer-anhang-c schon eingespielt ist; P-A setzt Anhang C voraus. Dann: Volltext Stubbs et al. (arXiv 2602.04389) lesen; Bok-Ideenseite und TLL-Companion erneut aufrufen; Entwürfe schreiben (S-A online mit QR und ein Druckabsatz, S-F Kasten in sec-kurs-integration, P-A ein Absatz im Online-Teil „Arbeitsablauf mit KI“ von Anhang C, P-B ein bis zwei Sätze). Quellen in references.json, URLs vorher aufrufen. Eigener Branch, Druckwörter mit scripts/zaehle_druck.py vorher/nachher, Diff per MC. Diese Notiz nach notes/ im Repo. Abschluss mit ergebnisse-sichern.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ (`Projektnotizen-Claude/best-practice-vorreiter/`) / Repo ✗ (nächste Sitzung, `notes/`)

## 8 Nachtrag aus der Bausitzung (10.11.2026, 21:00): Korrekturen nach Volltext

- **Stubbs et al.:** 14 Studierende; Umfrage zur Kursmitte mit 5 Antworten, Kursbewertung mit 11. Die Kursbewertung lag rund eine Standardabweichung **über** dem Vorjahr, das eine andere Lehrperson ohne KI unterrichtet hatte; „nicht schlechter als im Vorjahr“ (Abschnitt 4, S-F) war zu vorsichtig und verschwieg den Wechsel der Lehrperson. Der Slack-Bot war die am zweitschlechtesten bewertete Nutzung (2,8 von 5) und wurde kaum genutzt. Kein Kontrollgruppenvergleich; die Autoren nennen die Arbeit explorativ.
- **Bok-Ideenseite:** gültige Adresse ist `https://bokcenter.harvard.edu/examples-and-ideas-for-using-AI-for-your-teaching`; 15 Ideen, Nummern 1, 2, 12, 13 (und 15) arbeiten mit Fotos von Papierarbeit. Keine Kurse, Personen, Wirkungsdaten.
- **Muster 1 („Harvard schult nicht mehr im Prompten“)** ist überzogen: Der Einstiegsworkshop behandelt weiter die Grundlagen des Promptens und verbindet danach die Anwendung mit einem Ordner voll Kursmaterial.
- **TLL-Companion:** 19 Schritte in drei Bereichen (7/6/6) bestätigt; „Run your own assignments through an AI“ ist Schritt 1, Aufwand „Low“.
- Umsetzung: `notes/STATUS-best-practice-einbau-2026-11-10.md`.
