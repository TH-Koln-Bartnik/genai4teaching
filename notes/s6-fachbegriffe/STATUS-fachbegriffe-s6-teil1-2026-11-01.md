# Status S6 Teil 1: Englische Fachbegriffe, Akronyme, Umschreibungen – Kap. 1–3 (01.11.2026, ca. 19:15)

Grundlage: `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md`, Abschnitt S6; Regel aus `claude/fachbegriffe/STATUS-rag-erklaerung-2026-11-01.md`.

## Entscheidungen Roman (MC, 01.11.)
- Repo-Schreibzugriff in dieser Sitzung angefordert; Tresorit-Ordner `0_GenAI` reicht.
- Umfang Teil 1: Schritt 0 (RAG-Patch) + Kandidatenliste buchweit + Einbau Kap. 1–3. Teil 2: Kap. 4–6, Vorwort, Primer, Anhänge, Glossar.
- Kap. 1: alle Vorschläge außer *guidance*/*encouragement* (keine etablierten Fachbegriffe); Artikeltitel Walsh an Original angepasst („Everyone Is Cheating Their Way Through College“).
- Kap. 2: alle Vorschläge mit drei Änderungen: Prompt in Z. 53 statt in der Eingangsszene erklärt; „AI Fluency (etwa: Gewandtheit im Umgang mit KI)“; Lernspiel-Kasten (Cognitive Debt, Sycophancy, Prompt Injection) bleibt ohne Umschreibung, weil sie die Spiellösungen verrät. Böckeler-Satz an Quelle angepasst (kein „inner harness“ bei Böckeler; nur *outer harness*). DLHN-Rahmen heißt in der Tabelle jetzt „KI-Kompetenzrahmen Hochschule“, Spalte 4 löst DLHN auf.
- Kap. 3: alle 25 Vorschläge, dazu Nebenfunde: Säuberli (2024) prüft deutschsprachige Leseverständnis-Aufgaben, nicht MINT (Sachfehler korrigiert); „Abschnitt 4.3“ → `@sec-complex-tutors`, dort RAG erklärt; Kestin-Zitat vom Codeblock zum Blockzitat (Quelle wird jetzt gerendert); „Problemorientiertes“ → „Problembasiertes Lernen“.
- Glossar-Verweise auf alte Abschnittsnummern (Kap. 1.6, 1.4, 1.2): in Teil 2 beheben.

## Erledigt (main @ `31f66d8`, live geprüft)
- `48e7484` RAG-Akronyme aus Branch `fachbegriffe-erklaeren` übernommen; Kap. 2 nach S1b neu eingesetzt (Bibliothekarin-Bild für RAG, METR, GPQA, PRISMA, IEA, GWDG, API; LM-Arena-Stelle war gestrichen). Branch `fachbegriffe-erklaeren` ist damit überholt.
- `e415128` Kap. 1 (+29 Wörter): generative KI (*generative AI*), LLM, häufige kleine Tests (*practice testing*), Wissensarbeiter (*knowledge workers*), erwünschte Schwierigkeiten (*desirable difficulties*), Reasoning (schrittweises Nachdenken), Werkzeugkasten (*harness*), Leitplanke (*guardrail*), Auslagerung (*cognitive offloading*), KI-Verordnung (*AI Act*), Prompts (Eingaben an die KI).
- `c116e94` Kap. 3 (+95 Wörter): u. a. aktives Üben (*active learning*), Kraftverstärker (*force multiplier*), Abruf-Übungen (*retrieval practice*), Testeffekt (*testing effect*), Hinweisreize (*cues*), transfergerechtes Verarbeiten (*transfer-appropriate processing*), Abrufwege (*retrieval routes*), ICAP-Modi (*interactive, constructive, active, passive*), Leitplanke, Auslagerung, selbstreguliertes Lernen (*self-regulated learning*), *mastery-based practice*, kritisches Denken (*critical thinking*), RCT; Kursivierung spacing & interleaving, test-enhanced learning, explanatory questioning; Umschreibungen Drill-and-Practice, worked examples, Teachable Agent, novelty effects, Crossover-Design; Abkürzungslegende vor der Evidenztabelle (SD, g, Cluster-RCT, EEG, MBA); ETH, B2+/C1.1.
- `561b1c2` Kap. 2 (+159 Wörter inkl. RAG-Neueinsatz): KI-Kompetenz (*AI literacy*), Werkzeuge (*tools*)/Gedächtnis (*memory*), Kontextfenster (*context windows*), Zeithorizont (*time horizon*), Autonomie der Lernenden (*learner autonomy*), sechs Stufen (*Levels of Autonomy*), Orchestrierungsschicht (*orchestration layer*), Haltepunkte (*checkpoints*), Denkzeit (*test-time compute*, in den S3-Text eingesetzt), Denkstufe (*reasoning effort*), offene Modelle (*open-weight models*), Unteragenten (*subagents*), Schaltkreis (*circuit*), Merkmale (*features*); Umschreibungen Token, Skills, Frontier-Modell, Research-Harnesses; Akronyme KI, HEA, OECD, USB, NRW, RWTH, DLHN.
- Rebase auf den parallel gemergten S3-Einbau (Scaling Laws) ohne Verlust: S3-Text bleibt, „Skalierungsgesetze (*scaling laws*)“ stammt aus S3, K2-18 entfiel.
- Prüfung: Render `--to html` nur die bekannten 36 × „OJS block count mismatch“, kein `?@`; Playwright 1200/390 px Kap. 1–3 ohne JS-Fehler, 20 iframes in Kap. 2; Überbreite Kap. 3 bei 390 px (Tabelle Wissensarten, 624 px) besteht live schon vorher. LaTeX-Testrender (`--profile print --to pdf`, fontawesome5 von ftp.fau.de/ctan in TEXMFHOME): keine `??`, nur bekannte Warnung `@tbl-prompts-online`, Buch 386 → 390 Seiten (Stand vor S3-Rebase). Download-PDF/EPUB per SHA256 unverändert. Live: Kap. 1–3 zeigen die neuen Begriffe.
- Achtung für Folgesitzungen: `quarto render --profile print` leert `docs/`; danach `--to html` neu rendern und PDF/EPUB zurücklegen.

## Ablage der Arbeitsdateien
- Vorschlagslisten mit Belegen (DOI/URL je Begriff): `vorschlag-kap01.md`, `vorschlag-kap02.md`, `vorschlag-kap03.md`.
- Kandidatenliste buchweit (alle Kapitel, Anhänge, Primer): `kandidaten-alle.csv` (Spalten Kapitel; Zeile; Begriff; englisch/kursiv; Akronym; erklärt/vorhanden; Typ). Zeilennummern Stand vor Teil 1.
- Skripte: `kandidaten.py` (Liste erzeugen), `anwenden.py` (ALT/NEU-Blöcke anwenden, Ausschluss-IDs, Zusatz-TSV).
- Orte: Vorschlagslisten, Kandidatenliste und Skripte in Tresorit `Projektnotizen-Claude/fachbegriffe/s6/` und Repo `notes/s6-fachbegriffe/`; diese Statusnotiz zusätzlich im Projekt `claude/fachbegriffe/s6/`.

## Offen für Teil 2
1. Kap. 4, 5, 6, Vorwort, Primer, Anhänge A–D, Lösungshinweise: gleiches Verfahren (je Kapitel ein Prüfauftrag mit Belegpflicht, Freigabe per MC). Kap. 5 Z. 73–75: englische Klammern nicht kursiv (wie in Kap. 3 nachziehen).
2. Glossar: jede Definition um den englischen Begriff ergänzen; „elaborative questioning“ → „explanatory questioning“ (Roediger & Pyc 2012; Kap. 3 und 5); veraltete Verweise „Kap. 1.6/1.4/1.2“ auf `@sec-…` umstellen; neue Einträge Delegation, Description, Discernment, Diligence, AI Fluency, Programmier-Agent, Skalierungsgesetz (jeweils Herkunftszeile, Verweis); Schwierigkeitsstufe je Eintrag (Grundbegriff / Fortgeschritten / Experte) als Metadatum für S7.
3. Ungeklärt: THKI (keine offizielle Auflösung gefunden); SAE-Vergleich „teilautonom“ (Norm sagt *partial driving automation*) sachlich prüfen; HEA-Übersetzungssatz Kap. 2 Z. ~106 ggf. präzisieren; `interactions/harness-schichten.html` spricht vom „inneren Harness“ (eigene Wortwahl, nicht Böckeler zugeschrieben, kann bleiben).
4. Nicht bestätigt, daher nicht eingefügt: situational barriers (Henderson 2007), learning by teaching, problem-based learning (Hattie 2023), deliberate practice, standardized work (Spear 1999), Engpass (Goldratt).

## Startauftrag nächste Sitzung (S6 Teil 2)
„Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitt S6) und `claude/fachbegriffe/s6/STATUS-fachbegriffe-s6-teil1-2026-11-01.md` und arbeite S6 Teil 2 ab: Kap. 4–6, Vorwort, Primer, Anhänge, Glossar (inkl. Schwierigkeitsstufen für S7). Kandidatenliste und Skripte liegen in `notes/s6-fachbegriffe/`.“
Parallel möglich: Bau S4/S5/S8 (Einbau in `kapitel02.qmd` nacheinander), S9 Kap. 1–3 (Fachbegriffe dort stehen jetzt fest).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ `31f66d8`)
