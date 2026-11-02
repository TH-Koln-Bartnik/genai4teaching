# Status: Kasten „Warum die Rolle aus dem Arbeitsauftrag verschwindet“ in Kap. 2.4.4 (02.11.2026)

Anlass: Wunsch Roman (02.11.2026, 14:25), die Zusammenfassung zur Evidenz für Rollen im Prompt (früher / Wandel / Empfehlung, je mit Offenlegung der Evidenz) ins Skript zu übernehmen, „nicht willkürlich, sondern erläutert“.

## Änderung
- Repo `TH-Koln-Bartnik/genai4teaching`, Branch `prompting-rollen-evidenz` (a249e15, rebased auf `main` @ b37464d), **nicht gemergt**.
- `kapitel02.qmd`, Abschnitt 2.4.4 `sec-prompting-myths`: Der vorhandene Satz zur Expertenrolle (`@basil2025`) bleibt; ein Überleitungssatz und ein `callout-note` „Hintergrund: Warum die Rolle aus dem Arbeitsauftrag verschwindet“ (HTML-Sprungmarke `sec-rollen-evidenz`, nicht per `@` zitierbar) folgen. Drei Absätze: Was früher für Rollen sprach / Was sich geändert hat / Was man jetzt empfiehlt; jeder endet mit einem Satz zur Belegstärke. Verweise auf `@sec-prompts-teaching` (Rolle bleibt in Tutor/Simulation) und `@sec-prompts-schreiben-lassen` (Stereotyp-Test in die Abnahme).
- `references.json`: fünf neue Einträge, im Originalformat angehängt: `zheng2024persona` (Findings EMNLP 2024, 10.18653/v1/2024.findings-emnlp.888), `kong2024roleplay` (NAACL 2024, 10.18653/v1/2024.naacl-long.228), `salewski2023impersonation` (NeurIPS 2023, arXiv 2305.14930), `gupta2024bias` (ICLR 2024, arXiv 2311.04892), `hu2024persona` (ACL 2024, 10.18653/v1/2024.acl-long.554). Alle am 02.11.2026 aufgerufen. Vorhanden und genutzt: `basil2025`, `anthropic2026prompting` (Wortlaut „Setting a role in the system prompt focuses Claude’s behavior and tone“ am 02.11. bestätigt).

## Konsistenz
Passt zu Streich-Test-Urteil Zeile 1 („umformulieren“), 2.4.3 („keine Rollenfloskeln“), 2.4.5 (Rolle in Verhaltensbeschreibungen bleibt) und Kernaussage 5. Keine Änderung nötig.

## Prüfungen
- `quarto render kapitel02.qmd --to html` (Quarto 1.8.25): alle fünf neuen Zitate und beide Kapitelverweise lösen auf; übrige Warnungen betreffen nur Verweise in andere Kapitel (Einzelrender) und bestehen unabhängig. Die beim Einzelrender überschriebenen `docs/`-Dateien wurden verworfen; `docs/` nach dem Merge vollständig neu rendern.
- Druckwörter `sec-prompting-myths`: 182 → 570 (+388; 2.4 gesamt ≈ 827 → ≈ 1.215, ca. +1 Seite).

## Offen (MC an Roman)
1. Druckumfang: Kasten vollständig im Druck / im Druck gekürzt auf den Absatz „Was man jetzt empfiehlt“ + QR, online vollständig / nur online.
2. Merge nach `main` und `docs/` neu rendern.

Ablage: Projekt `claude/prompting-primer/`, Tresorit `Projektnotizen-Claude/prompting-primer/`, Repo `notes/` (Branch `prompting-rollen-evidenz`).
