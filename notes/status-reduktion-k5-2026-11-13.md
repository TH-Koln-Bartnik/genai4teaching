# STATUS Sitzung K5 – Kap. 5 nach drei Ringen (13.11.2026, ca. 17:30)

Auftrag: Abschnitt „Sitzung K5 – Kap. 5“ aus `claude/zuspitzung-drei-ringe/STARTAUFTRAEGE-welle1-reduktion-2026-11-13.md`. Grundlage: `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, `PLAN-zuspitzung-drei-ringe-2026-11-13.md` Abschnitte 2–4, `STATUS-merge-best-practice-primer-2026-11-13.md`. Geänderte Buchdatei: nur `kapitel05-4d-phasen.qmd` (dazu `images/qr/qr-ki-vo.png`, `scripts/qr-ki-vo.py`, `docs/`).

## Entscheidungen Roman (MC, 13.11.)
1. Wichtig-Abschnitte: **eine** verdichtete Fassung für online und Druck; nur ganze Blöcke wandern unverändert online (fünf Befunde, Richtlinien/KI-VO-Langtext mit Stand-Kasten, Absatz Funktionsklassen, Making-of Detektor, Langfassung „Warum AI Fluency?“).
2. Paket A (4D, Fähigkeiten): freigegeben.
3. Paket B (Diligence, Richtlinien/KI-VO, Dokumentation): freigegeben.
4. Paket C (Prüfen): freigegeben, Strömberg-Kasten bleibt im Druck.
5. Merge nach Diff: ja.

## Ergebnis (Druckwörter nach `scripts/zaehle_druck.py`)

| Bereich | vorher | nachher | Ziel |
|---|---:|---:|---:|
| 4D (sec-schemas, sec-4d, sec-4d-nutzung) | 715 | 512 | ~450 |
| Fähigkeiten (sec-delegation, sec-capabilities) | 1.052 | 712 | ~650 |
| Diligence + Richtlinien/KI-VO | 992 | 297 | ~300 + 80 |
| Dokumentation | 746 | 510 | ~500 |
| Prüfen + Detektor + vier Säulen | 2.754 | 1.864 | ~1.900 |
| Kurs-Integration (Körper) | ~333 | ~333 | ~400, unverändert |
| Kapitel gesamt (mit Apparat) | 8.598 | 6.119 | |

4D und Fähigkeiten liegen gut 10 % über dem Ziel, weil Tabelle 5.1 (130 Wörter) und der Prüfkasten ez-k2-3 (81) unverändert bleiben.

Umsetzung im Einzelnen:
- **4D:** Einleitung auf drei Sätze, Verweis auf Description jetzt `@sec-access` (Kap. 2); Schleifenabsatz und Bildunterschrift gekürzt; Kasten „Warum AI Fluency?“ im Druck zwei Sätze + QR `qr-kompetenzrahmen`, online unverändert mit Tabelle der fünf Rahmen.
- **Fähigkeiten:** Delegation drei Sätze (Job-Buddy-Verweis entfällt, da Kap. 7 ihn online stellt); Zeithorizont, Skalierungsgesetze, GPQA, Tutor-Rechnung je ~3 Sätze; Gründe von Epoch AI nur online; vier Bildunterschriften ~35–40 Wörter; Funktionsklassen online. Alle sechs Elemente bleiben (4D-Kreislauf, METR, Skalierungsgesetze, „725-mal billiger“, Tutor-Kosten-Rechner, Detektor-Duell).
- **Discernment:** Satz mit Verweis auf `@sec-blick-ins-modell` nur online (K2 stellt den Abschnitt online).
- **Diligence:** Druck: Kurzliste der vier Tobor-Praktiken (Anker `sb-k5-eigenstaendigkeitserklaerung`); online: vollständige Richtlinien-Übersicht (An 2025, Tobor). `### Was die KI-Verordnung von Hochschulen verlangt {#sec-ki-vo}` jetzt Ebene 3 und in beiden Formaten (Kap. 1, 3, 6, 7 verweisen darauf); Druck zwei Sätze Art. 4 mit Anker `sb-k5-betreiber` + neuer QR `qr-ki-vo.png`; Langtext und Kasten „Stand November 2026: Hochschulen in Deutschland“ (Titel ohne „bei Drucklegung“) nur online.
- **Dokumentation:** Einstieg und drei Formen verdichtet; `tbl-llm-scale` bleibt (Kap. 6 verweist), Beispielspalte gekürzt („Beispiele gekürzt“ in der Legende); Fakultätsregel leicht gekürzt.
- **Prüfen:** Einstieg (Handa, Walsh, Mollick) ~300; fünf Befunde online, im Druck ein Absatz mit Verweis auf `@sec-evidenz`, Rismanchian, Delikoura (Anker `sb-k5-ueberabhaengigkeit`) und Kofinas (trägt Auflösung ez-k5-3); Strömberg-Kasten und Prüfkasten ez-k5-3 im Druck; Making-of Detektor online; Absatz mündliche Formate und Schluss gestrafft (Sway-Link nur online). Tabelle vier Säulen, MIT-Schritt, CBS- und Webers-Kasten unverändert.
- **Kurs-Integration:** unverändert (Körper schon unter ~400; Tabelle, zwei Regeln, Harvard-Satz + QR bleiben). Als Abschnitt belassen, nicht als Kasten, damit `@sec-kurs-integration` aus Kap. 1 weiter auflöst.
- **Schlüsselbegriffe:** elf Begriffe mit Beispielsatz statt Definition (Szenen der Übung unverändert).

## Prüfung
- `quarto render --to html` (1.8.25): 36 Warnungen (bekannte OJS-Warnungen), keine `?@` im Buch; Download-PDF/EPUB aus Git zurückgeholt. Andere Kapitel-HTML ändern nur Abschnittsnummern der Verweise (5.5.1.2 → 5.5.2 usw.).
- Playwright 1200/390 px: keine JS-Fehler, sechs iframes, alle Anker (sec-ki-vo, sb-k5-*, tbl-llm-scale, tbl-kompetenzrahmen, bsp-astronomie-harvard) vorhanden; Querscrollen 390 px 753 px wie vorher (Altbestand).
- Druck: PDF-Testrender in einer Kopie scheiterte an fehlendem `fontawesome5.sty` in der Container-TeX-Installation (nicht an Kap. 5). Geprüft wurde die erzeugte `index.tex`: Kap. 5 ohne `?@`, alle `\ref`/`\pageref` aufgelöst, alle elf sb-Anker gesetzt, Online-Blöcke fehlen wie geplant.

## Ablage
- Repo: Branch `reduktion-k5` (`37b364d` Text, `53ffcbd` docs), per Fast-forward nach `main` gemergt (`main` @ `53ffcbd`), gepusht. Branch `reduktion-k5` kann gelöscht werden.
- Projekt und Tresorit (`Projektnotizen-Claude/zuspitzung-drei-ringe/`): diese Notiz und `reduktion-k5-kapitel05-2026-11-13.diff`.
- Tresorit-Ordner liegt im verbundenen Ordner `0_GenAI`; eine eigene Freigabe war nicht nötig.

## Hinweise für die anderen Welle-1-Sitzungen (K2, K67)
- `main` hat sich durch diesen Merge bewegt; vor eurem Merge `main` hereinholen. `references.json` wurde in K5 **nicht** geändert, Konflikte nur in `docs/` (neu rendern).

## Offen
1. **Glossar** (eigene Sitzung, Datei `glossar.qmd`): Die Definitionen aus dem Schlüsselbegriffe-Kasten stehen jetzt nur hier. Homework Apocalypse und Vier-Säulen-Ansatz sind schon im Glossar, die übrigen fehlen:
   - Überabhängigkeit (*over-reliance*): Lernende verlassen sich so weit auf die KI, dass ihre eigenständige Lernfähigkeit und Selbststeuerung nachlassen. Über diesen Weg bedrohen Modellrisiken auch die Aussagekraft von Prüfungen.
   - KI-Detektor: Software, die KI-erzeugte Texte erkennen soll. Sie gilt als unzuverlässig, ihre Fehlalarme beschuldigen Studierende zu Unrecht; Richtlinien empfehlen stattdessen, Verdachtsfälle im Gespräch zu klären.
   - Mündlichkeit: Säule nach Gmeiner: Verständnis, Transfer und Autorschaft werden im Gespräch sichtbar, eigene Entscheidungen müssen erläutert und verteidigt werden. Die schriftliche Arbeit wird vom Leistungsnachweis getrennt.
   - Prozessorientierung: Säule nach Gmeiner: Das Gewicht wandert vom Produkt auf den Weg dorthin, und die Prüfenden sind am Entstehen beteiligt, etwa über ein Prozessjournal mit Versionsverlauf.
   - Kontextualisierung: Säule nach Gmeiner: Die Leistung wird an reale, lokale oder persönliche Daten, Orte und Rollen gebunden. Solche Aufgaben sind „un-promptbar“, weil sie eigene Beobachtung und nicht öffentliche Informationen verlangen.
   - Kollaboration und Kreation: Säule nach Gmeiner: Gruppenaufgaben in der Veranstaltung, Peer- und Selbstbeurteilung und gestufte Projekte prüfen die soziale, bewertende und kreative Seite des Lernens. Kurze Nachgespräche sichern die Autorschaft.
   - Interaktive mündliche Prüfung (*interactive oral assessment*): Ein praxisnahes Szenario oder ein Fall im offenen Gespräch mit Prüfenden oder anderen Studierenden, bewertet nach Rubrik. Sie lässt sich auch in Erstsemesterkursen mit mehreren hundert Studierenden einsetzen.
   - Angepasste Eigenständigkeitserklärung: Studierende erklären bei schriftlichen Prüfungen ohne Aufsicht, ob und wie sie KI-Werkzeuge genutzt haben. Die Anpassung gehört zu den Punkten, in denen die Hochschulrichtlinien übereinstimmen.
   - Betreiber (*deployer*): Nach der KI-Verordnung eine Organisation, die KI-Systeme bereitstellt, also auch eine Hochschule mit Chat-Zugängen oder eigenen Tutoren. Artikel 4 verlangt von ihr Maßnahmen für die KI-Kompetenz ihres Personals.
   - Reflexionstagebuch: Eine Form, die KI-Nutzung zu dokumentieren: Studierende halten während der Arbeit fortlaufend fest, wie sie KI einsetzen, und setzen sich damit auseinander. Praktikabler als ein vollständiges Protokoll jeder Interaktion.
2. Druck-PDF neu rendern, wenn alle Welle-1-Sitzungen gemergt sind (in einer Umgebung mit `fontawesome5`).
3. Kern-Abschnitt `sec-einfuehrung-studierende` enthält weiter das Beispiel mit „Bing Copilot = GPT-4“ und Voss Automotive (siehe `VORSCHLAG-kuerzung-kap05-1-3-2026-11-02.md`); nicht Teil dieses Auftrags.
4. Querscrollen bei 390 px in Kap. 5 (Altbestand).

## Startauftrag nächste Sitzung
Welle 2 nach `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, Abschnitt 5 (K4 mit Semester-Simulator, K3 mit Kasten 2, K1 und Vorwort), sobald K2 und K67 gemergt sind.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja)
