# STATUS Sitzung B: Anhang B, Druck-Prompts neu gefasst (02.11.2026)

Auftrag: `claude/prompting-primer/AUFTRAG-prompting-kap02-anhangB-2026-11-02.md`, Abschnitt „Sitzung B“, einschließlich Nachtrag 11:42 („Prompts von der KI schreiben lassen“, fünf Kontrollpunkte).

## Stand

Branch `anhangB-prompts-neu`, auf `main` @ `5837b77` rebased (Sitzung A ist gemergt; Rebase konfliktfrei), gepusht, **nicht gemergt**. Geändert: `kapitel07-appendix02-prompt-sammlung.qmd`, dazu eine Zeile in `kapitel02.qmd` (Z. 570, Querverweis-Prüfung laut Auftrag) und diese Notiz. Inhaltlich von Roman abgenommen (12:46: „Rest ist gut“); offen sind nur sein Test und der Merge.

## Entstanden

- **Vorbemerkung** neu: Sammlung 2024/25, RTF/CREATE-Labels als Lesehilfe, zwei Muster (Arbeitsauftrag: Ziel, Wozu, Material, Abnahme; Verhaltensbeschreibung: Zweck, Ablauf, Regeln, Grenzfälle, Ende; entsteht ein Werkstück, nennt das Ende die Kriterien), Modellklasse je Prompt (`@sec-model-choice`), Verweis `@sec-access`, Stand November 2026. Druckhinweis: elf Prompts im Buch, 23 online.
- **Auftrags-Interviewer** ersetzt den Strukturierten Prompt Designer (Anker `sec-prompt-strukturierer`), 219 Wörter, **im Druck**. Interview mit Antwortoptionen, Freigabe der Zusammenfassung, [Annahme]-Markierung, Stilregeln, Frage nach Zwischenabnahme.
- **System-Prompt-Ersteller** (`sec-prompt-systemprompt`, Titel „System-Prompt für typische Anforderungen erstellen“, passt zu Anhang D Z. 205/216): allgemeiner Assistent für die eigene Lehre und Forschung (Roman 12:36), nicht Tutor-Bot. Profilkarte, Interview mit Optionen, Freigabe, [Annahme], Überschriften Wer ich bin / Wobei du hilfst / Wie du antwortest / Grenzen, zwei Felder für die ChatGPT-Personalisierung, sechs bis acht Testanfragen, Kaltlesung, kleinste Änderung.
- **Quiz me** (Roman 12:37/12:38): neutral und auf Deutsch, mit Block „Anpassen“ am Anfang (Fach, Studierende, Lehrbuch, Prüfungsformat, Beispiel Alltagswort/Fachbegriff); Rechen- und Begriffsstoff; Folgeprompt auf Deutsch. Quelle: verallgemeinert nach Romans englischem SSCM-Prompt; Vorbilder Tutor Blueprint (`moreUsefulThingsInstructorPrompts`, Seite am 02.11. geprüft), GPT Tutor in `bastani2025` (PNAS, Hinweise statt Lösungen, hinterlegte Lösungen und typische Fehler), ChatGPT study mode (`openai2026studymode`, Seite geprüft); `roediger2006` für die Abrufübung. Anthropics Learning Mode nicht zitiert (kein Literatureintrag).
- **Fallstudie** (Roman 12:40, MC a): sechs Kriterien als Maßstab am Ende (Hauptfigur mit Entscheidung, Komplikation, kausale Folge, mehrere vertretbare Optionen, genug Angaben, Kursthema nötig); Studierende prüfen selbst; `willingham2021` in den didaktischen Elementen. **Regel (MC a):** Werkstücke in Verhaltensbeschreibungen bekommen Kriterien im „Ende“; umgesetzt bei Pre-Mortem (Gegenmaßnahme und Verantwortliche je wichtigem Risiko) und Verhandlung (Feedback mit Stelle im Verlauf); Goal Play misst schon an den Grundsätzen.
- **Modellklasse** (Roman 12:34) bei allen elf Druck-Prompts mit Halbsatz-Begründung. Groß: Auftrags-Interviewer, System-Prompt, Quiz-Ersteller, Fallstudie, Verhandlung, Goal Play, Aktivierungs-Coach (klein für erste Ideen). Klein: Quiz me, Sokratischer Dialog, Pre-Mortem, AI-Sandwich (Notizen in Hochschulzugang oder offenes Modell).
- **Antwortoptionen** (Roman 12:03) in jedem Einstiegsinterview; bewusst nicht bei Abruffragen (Quiz me) und Scheitergründen (Pre-Mortem).
- **O\*NET-Übung:** RTF/CREATE ersetzt; Kasten nennt die zwei Muster; Idee 4 „Die Hälfte streichen“; Deep Research mit Abnahmekriterium „jede Aussage mit prüfbarer Quelle“.

| Prompt | Typ | Wörter alt | neu | Δ |
|---|---|---|---|---|
| Auftrags-Interviewer | Arbeitsauftrag + Freigabe; Generator | 548 | 219 | −60 % |
| Quiz-Ersteller | Arbeitsauftrag + Interview | 308 | 124 | −60 % |
| Aktivierungs-Coach | Arbeitsauftrag + Interview + Zwischenabnahme | 154 | 148 | −4 % (war schon kurz) |
| System-Prompt erstellen | Arbeitsauftrag + Freigabe; Generator | 1020 | 349 | −66 % |
| Quiz me | Verhaltensbeschreibung mit Anpassungsblock | 325 | 364 | +12 % |
| Sokratischer Dialog | Aufgabenstellung | 700 | 260 | −63 % |
| Fallstudie | Verhaltensbeschreibung + Kriterien | 633 | 376 | −41 % |
| Pre-Mortem | Verhaltensbeschreibung | 864 | 303 | −65 % |
| AI-Sandwich | Aufgabenstellung | 637 | 217 | −66 % |
| Verhandlungssimulation | Verhaltensbeschreibung mit Rolle | 586 | 340 | −42 % |
| Goal Play Zielsetzung | Verhaltensbeschreibung mit Rolle | 946 | 327 | −65 % |
| **Zehn Druck-Prompts** | | **6173** | **2808** | **−55 %** |

Gegenüberstellung alt/neu (Zwischenstand 12:2x): Tresorit `Projektnotizen-Claude/prompting-primer/DIFF-anhangB-alt-neu-2026-11-02.md`. Aktuell: `git diff main anhangB-prompts-neu -- kapitel07-appendix02-prompt-sammlung.qmd`.

## Prüfung (letzter Lauf nach allen Änderungen)

- Quarto 1.8.25 (in der Cloud installiert, mit Romans Erlaubnis), ganzes Buch `--to html`: Exit 0, kein `?@` in `docs/*.html`, nur die 36 bestehenden OJS-Warnungen aus `kapitel04.qmd`. `docs/` nicht committet.
- Kein Verweis aus dem Druck auf reine Online-Abschnitte; `sec-prompt-testen` in Kap. 2 steht nur online (geprüft).
- Playwright 1200/390 px (vor den letzten Änderungen): Anhang B sauber; Überbreite bei 390 px stammt aus Bestehendem (Navbar-Titel, lange URLs).
- LaTeX/PDF nicht getestet (kein TeX in der Cloud).
- Literaturschlüssel `kotha2025`, `google2025`, `anthropic2025c` bleiben nötig (Quellenzeile System-Prompt).
- Glossar Z. 93 verweist bei „System-Prompt“ für Tutoren auf `@sec-prompt-systemprompt`; als Beispiel eines System-Prompts vertretbar, ggf. später präzisieren.

## Offen

1. Roman testet Quiz-Ersteller, Quiz me und Verhandlungssimulation (Testhinweise im Chat 02.11., 12:4x; Kurzfassung unten).
2. Danach: Korrekturen, `main` holen (rebase), Querverweise prüfen, Render, Diff-Freigabe per MC, Merge, `docs/` rendern, live prüfen, LaTeX-Testrender, falls TeX verfügbar.
3. Die 19 Online-Prompts nach der Verlagsabgabe (15.11.2026).

**Testhinweise kurz:** jeder Prompt in frischem Chat, großes Modell (Quiz me auch im kleinen); je zwei Durchläufe, „bis es klappt“ und „bis es scheitert“. Quiz-Ersteller: kommt eine Frage pro Nachricht mit Optionen? Beruht jede falsche Option auf einer echten Fehlvorstellung, steht nichts außerhalb des Materials? Quiz me: Anpassungsblock ausfüllen, Kerninhalt einer SSCM-Woche anhängen; testen: sofort Lösung verlangen, falsche Antwort verteidigen, Thema wechseln, nach Zahl fragen, die nicht im Material steht, „fertig“ sagen. Verhandlungssimulation: Optionen zur Erfahrung, drei Szenarien, verdeckte BATNA spürbar? Mitten im Spiel Rat verlangen, abbrechen, Einigung erzwingen; Feedback mit Zitat aus dem Verlauf?

## Startauftrag nächste Sitzung

```
Lies claude/prompting-primer/STATUS-prompting-kap02-B-2026-11-02.md. Roman hat Quiz-Ersteller, Quiz me und Verhandlungssimulation getestet: [Testbericht: je Prompt Modell, was klappte, was scheiterte, Zitat der problematischen Stelle]. Setze nötige Änderungen nach dem Prinzip der kleinsten Änderung auf Branch anhangB-prompts-neu um (Repo frisch klonen, Quarto 1.8.25 installieren), hole main (rebase), prüfe Querverweise, rendere das Buch, lass den Diff per MC freigeben, merge, rendere docs/ und prüfe live. Fragen nur als Multiple Choice; Statusnotiz in Projekt, Tresorit und Repo.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: nein)
