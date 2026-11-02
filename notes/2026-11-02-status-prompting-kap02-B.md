# STATUS Sitzung B: Anhang B, Druck-Prompts neu gefasst (02.11.2026)

Auftrag: `claude/prompting-primer/AUFTRAG-prompting-kap02-anhangB-2026-11-02.md`, Abschnitt „Sitzung B“, einschließlich Nachtrag 11:42 („Prompts von der KI schreiben lassen“, fünf Kontrollpunkte).

## Entstanden

Branch `anhangB-prompts-neu` (von `main` @ `df0f9bc`), nur `kapitel07-appendix02-prompt-sammlung.qmd`, Inhalt in drei Commits bis `7b01e1b`, Statusnotiz danach, Branch-Kopf `e75fb2a` oder neuer, gepusht, **nicht gemergt**.

- **Vorbemerkung** neu: Sammlung 2024/25, RTF/CREATE-Labels als Lesehilfe, zwei Muster (Arbeitsauftrag: Ziel, Wozu, Material, Abnahme; Verhaltensbeschreibung: Zweck, Ablauf, Regeln, Grenzfälle, Ende), Verweis `@sec-access`, Stand November 2026. Druckhinweis: elf Prompts im Buch, 23 online.
- **Auftrags-Interviewer** ersetzt den Strukturierten Prompt Designer (Anker `sec-prompt-strukturierer` bleibt), 219 Wörter, **jetzt auch im Druck** (MC Roman 12:2x, a). Interview mit Antwortoptionen, Freigabe der Zusammenfassung, [Annahme]-Markierung, Stilregeln, Frage nach Zwischenabnahme. GPT-Link des alten Designers entfernt; Zeile in der Online-Tabelle entfernt.
- **System-Prompt-Ersteller → Verhaltens-Interviewer** (`sec-prompt-systemprompt`, Überschrift „System-Prompt für Tutor, Simulation oder Assistent schreiben lassen“), 1.020 → 327 Wörter; Profiltext optional; acht Testnachrichten (≥ 3 unfreundlich), Prüfliste Kaltlesung, kleinste Änderung; Verweis `@sec-d-ue6`.
- **Zehn Druck-Prompts** umgebaut, je mit Zeile „Muster: …“ und „neu gefasst 11/2026“ in der Quelle (MC Roman 11:5x: Muster-Zeile bei allen zehn).
- **Wunsch Roman 12:03:** jedes Einstiegsinterview mit Antwortoptionen (a, b, c) plus Eigenes. Bewusst ohne Optionen: Abruffragen in „Quiz me“, Scheitergründe im Pre-Mortem (Optionen nähmen die Lernleistung vorweg); jeweils in der Muster-Zeile begründet.
- **O\*NET-Übung:** RTF/CREATE durch „Ziel, Wozu, Material, Abnahme“ ersetzt; Kasten nennt die zwei Muster; Idee 4 → „Die Hälfte streichen“; Deep-Research-Schritt mit Abnahmekriterium „jede Aussage mit prüfbarer Quelle“.

| Prompt | Typ | Wörter alt | neu | Δ |
|---|---|---|---|---|
| Auftrags-Interviewer | Arbeitsauftrag + Freigabe; Generator | 548 | 219 | −60 % |
| Quiz-Ersteller | Arbeitsauftrag + Interview | 308 | 124 | −60 % |
| Aktivierungs-Coach | Arbeitsauftrag + Interview + Zwischenabnahme | 154 | 148 | −4 % (war schon kurz) |
| Verhaltens-Interviewer | Arbeitsauftrag + Freigabe; Generator | 1020 | 327 | −68 % |
| Quiz me | Verhaltensbeschreibung (englisch) | 325 | 371 | +14 % (Gründe, Grenzfälle, Ende ergänzt) |
| Sokratischer Dialog | Aufgabenstellung | 700 | 260 | −63 % |
| Fallstudie | Verhaltensbeschreibung | 633 | 302 | −52 % |
| Pre-Mortem | Verhaltensbeschreibung | 864 | 281 | −67 % |
| AI-Sandwich | Aufgabenstellung | 637 | 217 | −66 % |
| Verhandlungssimulation | Verhaltensbeschreibung mit Rolle | 586 | 329 | −44 % |
| Goal Play Zielsetzung | Verhaltensbeschreibung mit Rolle | 946 | 327 | −65 % |
| **Zehn Druck-Prompts** | | **6173** | **2686** | **−56 %** |

Gegenüberstellung alt/neu je Prompt: Tresorit `Projektnotizen-Claude/prompting-primer/DIFF-anhangB-alt-neu-2026-11-02.md` (85 KB, daher nicht im Projekt; Stand vor der Druckaufnahme des Interviewers, Prompt-Texte unverändert). Neu erzeugen: `git diff main anhangB-prompts-neu -- kapitel07-appendix02-prompt-sammlung.qmd`.

## Prüfung

- Quarto 1.8.25 (in der Cloud installiert mit Romans Erlaubnis), ganzes Buch `--to html`: Exit 0, kein `?@`, nur die 36 bestehenden OJS-Warnungen aus `kapitel04.qmd`. `docs/` nicht committet (Render erst nach dem Merge).
- Skriptprüfung: Codeblöcke und Kästen geschlossen, alle Anker und Literaturschlüssel vorhanden, kein Verweis aus dem Druck auf reine Online-Abschnitte.
- Playwright 1200/390 px: Anhang B sauber; Überbreite bei 390 px stammt aus Bestehendem (Navbar-Titel, lange URLs im Literaturverzeichnis), nicht aus diesem Branch.
- LaTeX/PDF nicht getestet (kein TeX in der Cloud).

## Für Sitzung A wichtig

- `kotha2025`, `google2025`, `anthropic2025c` werden in der Quellenzeile des Verhaltens-Interviewers weiter zitiert, also **nicht** aus `references.json` entfernen.
- `@sec-prompt-strukturierer` ist jetzt im Druck auflösbar; der Entwurfsabsatz 2b kann darauf und auf `@sec-prompt-systemprompt` verweisen.
- Anhang B verweist auf `@sec-access` (Kap. 2.4); dieser Anker muss bleiben.

## Offen

1. Roman testet Quiz-Ersteller, Quiz me und Verhandlungssimulation (läuft, 02.11. mittags).
2. Danach Diff-Freigabe per MC; vor dem Merge `main` holen (rebase, falls A zuerst gemergt hat) und Querverweise `sec-prompt-strukturierer`, `sec-prompt-components`, `sec-access` prüfen; Merge; `docs/` rendern; live prüfen; ggf. LaTeX-Testrender.
3. Die 19 Online-Prompts nach der Verlagsabgabe (15.11.2026).

## Startauftrag nächste Sitzung

```
Lies claude/prompting-primer/STATUS-prompting-kap02-B-2026-11-02.md. Roman hat Quiz-Ersteller, Quiz me und Verhandlungssimulation getestet: [Testbericht einfügen]. Setze nötige Änderungen auf Branch anhangB-prompts-neu um, hole main (rebase), prüfe Querverweise, rendere das Buch (Quarto 1.8.25), lass den Diff per MC freigeben, merge, rendere docs/ und prüfe live. Fragen nur als Multiple Choice; Statusnotiz in Projekt, Tresorit und Repo.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: nein)
