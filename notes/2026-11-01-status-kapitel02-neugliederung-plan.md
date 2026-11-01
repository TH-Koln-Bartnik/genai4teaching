# Status S1a: Gliederungsplan Kapitel 2 nach dem 4D-Modell (01.11.2026, ca. 15:15)

Auftrag: Abschnitt S1a in `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md`. Keine Änderung an Buchdateien.

## Entstanden
- **Plan** `PLAN-kapitel02-neugliederung-4d-2026-11-01.md`: elf Entscheidungen Romans (MC), Gliederungstabelle (neuer Abschnitt, ID, Inhalt alt mit Zeilen, 4D-Zuordnung, Wörter vorher/nachher, Animationen), verworfene Varianten A und C, Kürzungsliste N1–N38 mit Begründung, Querverweise von außen samt fest eingetippter Nummern, Folgen für Kopf, Lernziele, Kernaussagen, Lernfragen, Lösungen, Lernpfade, Glossar, Druck, Einbaustellen S3/S4/S5/S8, Startauftrag S1b.
- **Zählskript** `kuerzung.py` (+ `kuerzung.json`, `tabelle.py`, `tabellen_md.py`): Kürzungsposten und Bilanz; Zählweise für den Vorher-/Nachher-Vergleich in S1b.

## Kernergebnis
Variante B: 2.1 Überblick 4D (`#sec-schemas`) → 2.2 Modell, Harness, Agent (`#sec-definitionen`, `#sec-harness`) → 2.3 Delegation (2.3.1 Fähigkeiten, 2.3.2 Setup, 2.3.3 Modell, 2.3.4 Arbeitsweisen neu) → 2.4 Description → 2.5 Discernment → 2.6 Diligence (mit Energie) → 2.7 Vertiefung (Tokens, Blick ins Modell, Skills/Werkzeuge, Gedächtnis; „kann übersprungen werden“) → 2.8 Escape Room. Alle vorhandenen IDs bleiben; neu: `#sec-sprachmodell`, `#sec-delegation`, `#sec-arbeitsweisen`, `#sec-diligence`, `#sec-vertiefung`, `#sec-blick-ins-modell`, `#sec-escape-room-k2`. Kapiteltitel „Grundbegriffe und vier Kompetenzen“. Wortbilanz 13.560 → 10.146 (−25,2 %), Hauptlinie ohne Vertiefung rund 7.900.

## Hinweise
- Basis der Zeilenangaben `main` @ `0a48673`; S2 ist inzwischen gemergt (`31450ba`), in `kapitel02.qmd` nur zwei iframe-Höhen geändert, Zeilen gelten weiter.
- Nachgeholt aus der Planungssitzung: Kopie des Feedback-Plans im Repo (`notes/2026-11-01-plan-feedback-sitzungen.md`) und im Tresorit.
- Gefunden nebenbei: `energie.qmd` Z. 3 nennt schon heute falsche Abschnittsnummern („2.6 und 2.7“); Glossar hat 20 fest eingetippte Kapitel-2-Nummern.

## Offen
1. S1b: Umsetzung nach Plan (zwei Commits: verschieben, dann kürzen).
2. In S1b per MC: Kernaussagen 7 oder 8 (eigene Aussage zu Arbeitsweisen).
3. S3, S4, S5, S8 können parallel bauen; Einbaustellen stehen im Plan.

## Startauftrag S1b
„Lies `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md` (Abschnitte „Entscheidungen“ und S1b) und `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md` und setze den Plan um.“ (Ausführlicher Auftrag am Ende des Plans.)

## Candidate permanent notes
- Ein Kompetenzmodell, das ein Kapitel gliedert, macht jede technische Erklärung zur Antwort auf eine erkennbare Arbeitsfrage.
- Technische Grundlagen am Kapitelende als markierte Vertiefung lassen Erfahrene die Hauptlinie lesen, ohne Einsteigern das Fundament zu nehmen.
- Die Wahl zwischen Sprachmodell, RAG und Agent ist eine Delegationsentscheidung, keine Technikfrage.
- Fest eingetippte Abschnittsnummern machen jede Neugliederung teuer; automatische Querverweise machen sie fast kostenlos.

## Ablage
- Projekt: `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md`, diese Statusnotiz, aktualisierter `PLAN-feedback-sitzungen-2026-11-01.md` (Stand-Nachtrag).
- Tresorit: `Projektnotizen-Claude/feedback-2026-11-01/` (Plan, Feedback-Plan, Statusnotiz) und `…/kapitel02-neugliederung/` (Skripte).
- Repo `main` (gepusht, `1471de0` + Statusnotiz-Commit): `notes/2026-11-01-plan-kapitel02-neugliederung-4d.md`, `notes/2026-11-01-plan-feedback-sitzungen.md`, `notes/2026-11-01-status-kapitel02-neugliederung-plan.md`, `notes/kapitel02-neugliederung/*.py|json`. Keine Buchdatei geändert.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht auf main; nur Notizen, kein Merge nötig)
