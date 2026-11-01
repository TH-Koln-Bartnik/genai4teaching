# S6 Teil 2 – gemeinsamer Prüfauftrag (für alle Prüfpakete)

Repo: `/home/claude/genai4teaching`, Branch `fachbegriffe-s6-teil2` (von origin/main @ a80086b). **Buchdateien nicht ändern.** Ergebnis ist nur eine Vorschlagsdatei `notes/s6-fachbegriffe/vorschlag-<paket>.md`. Kein git commit, kein push.

## Regeln (Roman, 01.11.2026)
- **Typ A – deutscher Fachbegriff + englisches Original:** Beim ersten Auftreten *je Kapitel/Anhang* steht zum deutschen Fachbegriff der englische Originalbegriff kursiv in Klammern, z. B. „motiviertes Denken (*motivated reasoning*)“. Nur, wenn es einen **etablierten englischen Fachbegriff in der zitierten Literatur** gibt. **An der Quelle prüfen, nicht raten:** zuerst `references.json` (Titel/Abstract zum Zitierschlüssel, z. B. `python3 -c "import json;d=json.load(open('references.json'));print([x for x in d if x['id']=='KEY'])"`), sonst DOI-Seite/Verlagsseite/PDF per WebFetch/WebSearch. Im Beleg die wörtliche Fundstelle (kurz) und DOI/URL nennen. Nicht bestätigte Begriffe **nicht vorschlagen**, sondern unter „Nicht bestätigt“ auflisten.
- **Typ B – englischer Begriff steht schon im Text** (Prompt, Token, Skill, Debriefing, Role Play …): beim ersten Auftreten je Kapitel eine kurze deutsche Umschreibung, z. B. „Prompts (Eingaben an die KI)“ oder „Debriefing (Nachbesprechung)“.
- **Typ C – Akronyme:** beim ersten Auftreten je Kapitel zuerst in einfachen Worten umschreiben, dann benennen, z. B. „ein Verfahren, bei dem die KI vor der Antwort in hinterlegten Dokumenten nachschlägt (Retrieval-Augmented Generation, RAG)“. Gängige Abkürzungen (KI, EU, PDF, URL, z. B.) nicht.
- **Format:** Englisch in Klammern immer kursiv. Vorhandene englische Klammern, die nicht kursiv sind, auf kursiv umstellen (Typ „A (Format)“).
- **Sparsam:** kurze Umschreibungen (2–6 Wörter), keine Erklärsätze, wo ein Klammerzusatz reicht. Ein Begriff, der im Kapitel schon erklärt ist, bekommt nichts mehr.
- **Nicht anfassen:** Inhalt von Prompt-Blöcken und Codeblöcken (```), Zitate in Anführungszeichen aus Quellen, Zitierschlüssel `@…`, IDs `{#…}`, iframes/HTML, YAML-Kopf, Lösungen von Lernspielen (nicht verraten). Überschriften nur, wenn unvermeidbar (ID bleibt).
- **Schon erledigt (nicht doppeln):** RAG-Patch hat in Kap. 4 LLM, API, UI, VHB, ISSN, VR, ICAP erklärt; Kap. 5 LLM, ECTS; Kap. 6 Markdown, CSV, BPMN, RAG, Vektordatenbank. Vorher prüfen, ob die Erklärung schon dasteht.
- **In Teil 1 nicht bestätigt** (nur vorschlagen, wenn du die Quelle diesmal wörtlich findest): situational barriers (Henderson 2007), learning by teaching, problem-based learning (Hattie 2023), deliberate practice, standardized work (Spear 1999), Engpass (Goldratt).
- Nebenfunde (Sachfehler, falsch wiedergegebene Quelle, kaputte Verweise) in eigenem Abschnitt melden, mit Beleg; als ALT/NEU nur, wenn eindeutig.

## Lieferformat (exakt so, damit `anwenden.py` greift)
Muster: `notes/s6-fachbegriffe/vorschlag-kap03.md` (ansehen!).

```
# Fachbegriffe S6 Teil 2 – Vorschläge <Paket> (<dateien>)
Stand: 2026-11-01 … Alle ALT mit grep -c -F geprüft: je genau 1 Treffer; keine Überlappung.

## 1. Vorschläge
| Nr | Datei | Zeile | Typ | Begriff dt. | Begriff engl./Akronym | Beleg | Sicherheit |

## 2. ALT / NEU
**K4-01** (Z. 55)
ALT: `exakter, einzeiliger Textausschnitt aus der Datei`
NEU: `derselbe Ausschnitt mit Ergänzung`

## 3. Nicht bestätigt / bewusst weggelassen
## 4. Nebenfunde
## 5. Kennzahlen  (Anzahl Vorschläge je Typ, Mehrwörter gesamt)
```
- IDs: Präfix je Datei (siehe Paketauftrag), laufend zweistellig.
- ALT: einzeilig, ohne Backtick im Text, **genau ein Treffer** in der Zieldatei (`grep -c -F -- "ALT" datei` = 1), möglichst kurz (5–12 Wörter), Überlappungen zwischen Vorschlägen vermeiden. Mit einem kleinen Python-Skript gegenprüfen und das Ergebnis in Abschnitt 5 nennen.
- Die Tabelle braucht für jede Zeile einen Beleg (Typ A: Fundstelle + DOI/URL; Typ B/C: kurze Begründung).

Antworte am Ende mit höchstens 12 Zeilen: Pfad der Datei, Anzahl Vorschläge je Typ, die 3 wichtigsten Nebenfunde, offene Fragen an Roman.
