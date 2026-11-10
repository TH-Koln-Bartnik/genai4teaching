# Status: K7, Kasten 1 (Holbein) und Isley et al. eingebaut (10.11.2026, 21:30)

Auftrag: Startprompt „K7, Kasten 1 (Holbein)“ aus `claude/mini-cases/ENTWURF-fundstueck-kaesten-druck-2026-11-09.md`.

## Umgesetzt

Branch `k7-kasten-holbein`, Commit `32c5e32`, Basis `main` @ `c18fa56`, gepusht, **nicht gemergt**. Zwei Dateien, +126 Zeilen.

| Was | Ort | Druckwörter |
|---|---|---|
| Kasten „Anwendungsbeispiel: Eine realistische Politiksimulation zu bauen kostet Wochen“, wörtlich aus dem Entwurf (Fassung 2) | `kapitel07-artefakte.qmd`, `sec-bsp-simulationen-lehrende`, nach dem Callout „Umsetzung, Planung Stand 10/2026“, vor der Lernfrage | +213 |
| Absatz mit drei Sätzen zu Isley et al. (2026) | `kapitel07-artefakte.qmd`, `sec-bsp-fragen-generator`, nach dem Absatz „Ob ein Sprachmodell als Fragesteller mehr leistet …“, vor „Ihre Einschätzung prüfen“ | +70 |
| `holbein2026budget`, `isley2026exams` | `references.json`, hinter `chernikova2020` eingefügt (nicht am Dateiende, wo `main` und `best-practice-vorreiter` beide angehängt haben) | – |

Kap. 7 im Druck (`scripts/zaehle_druck.py`): 7.891 → 8.174, also +283. Abschnitt `sec-bsp-simulationen-lehrende` 621 → 834, `sec-bsp-fragen-generator` 729 → 799. Der Entwurf rechnete für den Kasten mit 214.

Wortlaut des Isley-Absatzes:

> Untersucht ist dagegen die Güte der Fragen. In einer Feldstudie mit 91 Kursen und knapp 1.700 Studierenden an US-Colleges schnitten Multiple-Choice-Fragen, die ein Sprachmodell aus dem Kursmaterial erzeugt und in mehreren Runden aus Kritik und Überarbeitung verbessert hatte, in der testtheoretischen Auswertung der Antworten ebenso gut ab wie Fragen, die Fachleute für eine standardisierte Prüfung geschrieben hatten [@isley2026exams]. Gemessen wurde die Qualität der Fragen, nicht der Lernerfolg.

## Quellenprüfung

- **Isley et al. (2026), Autorenliste geprüft** an der AAAI-Seite (OJS) und gegen arXiv (2508.08314, „Calvin Isley and 11 other authors“) sowie die HKS-Publikationsseite. Zwölf Autorinnen und Autoren: Calvin Isley, Joshua Gilbert, Evangelos Kassos, Michaela Kocher, Allen Nie, Emma Brunskill, Ben Domingue, Jake Hofman, Joscha Legewie, Teddy Svoronos, Charlotte Tuminelli, Sharad Goel. *Proceedings of the AAAI Conference on Artificial Intelligence, 40*(45), 38626–38634. https://doi.org/10.1609/aaai.v40i45.41205
- Was der Text trägt: 91 Kurse, knapp 1.700 Studierende, Dutzende US-Colleges; Fragen entstehen in Schleifen aus Erzeugen, KI-Kritik und Überarbeitung; nach Item-Response-Theorie gleichwertig mit Expertenfragen für standardisierte Prüfungen (Abstract). Aus dem Volltext: je 10 Multiple-Choice-Fragen, auf das Kursmaterial zugeschnitten; in 71 Kursen (rund 1.200 Studierende) wurde die Güte gemessen, in 20 Kursen (rund 500) gegen Aufgaben einer Advanced-Placement-Prüfung verglichen. Der Buchsatz nennt weder „IRT“ noch „AP“, sondern umschreibt beides; welche IRT-Kennwerte berichtet werden, habe ich nicht am Volltext gelesen und deshalb nicht behauptet.
- CSL-Typ: `article-journal` statt `paper-conference`. Mit `paper-conference` ließ `apa.csl` den Bandtitel weg; die AAAI-Proceedings erscheinen mit Band und Heft, das Verzeichnis zeigt sie jetzt vollständig.
- **Holbein:** Eintrag wie im Entwurf, ergänzt um `accessed` 09.11.2026 und `language`. Die Kursseite ließ sich in dieser Sitzung nicht noch einmal abrufen (Freigabe für den Abruf blieb unbeantwortet); der Kasten stützt sich auf die Prüfung vom 09.11. (X-Post und Kursseite). Weiter gilt aus der Übersicht: Die Kursseite selbst nennt die KI-Werkzeuge nicht, das tut nur der X-Post.

## Prüfung

- `quarto render --to html` (1.8.25) in einer Kopie: fehlerfrei, nur die bekannten OJS-Warnungen. In `kapitel07-artefakte.html` keine unaufgelösten Verweise. `@sec-widget-pruefen` → „Kapitel 6.2.2.3“ (`kapitel06-rollen.html#sec-widget-pruefen`); `@holbein2026budget`, `@chernikova2020`, `@isley2026exams` lösen auf und stehen im Kapitelverzeichnis.
- `quarto render --profile print --to pdf` in der Kopie: fehlerfrei, 362 Seiten, kein „??“ im Text. Isley-Absatz auf PDF-Seite 262, Kasten auf 277–278 (Buchseiten 259–260), beide Quellen im Literaturverzeichnis von Kap. 7 (PDF-S. 291–292). Der Kasten bricht nach vier Zeilen von „Das Dilemma“ über die Seite um.
- Für den PDF-Render fehlte im Container `fontawesome5` (`texlive-fonts-extra`), nachinstalliert.
- **Nicht geprüft:** Darstellung bei 390 px, Live-Seite. `docs/` ist auf dem Branch nicht neu gerendert.

## Offen

1. Merge von `k7-kasten-holbein` nach `main` und Render von `docs/`. Der Branch berührt `kapitel07-artefakte.qmd` an anderen Stellen als `best-practice-vorreiter` (dort neuer Abschnitt `sec-bsp-papier-im-raum` am Ende von „Wissen übersetzen“); Probe-Merge (`git merge-tree`) mit `best-practice-vorreiter`: Die Kapiteldatei geht sauber zusammen. `references.json` meldet einen Konflikt, der nicht von diesem Branch stammt: `main` (Handa et al., Commit `6d97307`) und `best-practice-vorreiter` haben beide am Dateiende angehängt. Auflösung: beide Blöcke behalten.
2. Druckbudget: +283 Wörter in Kap. 7, gegen die Kürzungsliste vom 03.11. zu rechnen.
3. Seitenumbruch im Kasten: bei der Schlussdurchsicht des Satzes entscheiden, ob er zusammengehalten wird.
4. Kästen 2 (K3b) und 3 (K5) stehen aus; Startprompts im Entwurf.
5. Isley et al. ist auch für Kap. 5 `sec-pruefen` vorgemerkt (Übersicht A2), dort nicht eingebaut.

## Startauftrag nächste Sitzung

> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/mini-cases/STATUS-k7-kasten-holbein-2026-11-10.md`. Der Branch `k7-kasten-holbein` (`32c5e32`) liegt auf origin, nicht gemergt. Merge ihn nach `main` (vorher Stand von `main`, `primer-anhang` und `best-practice-vorreiter` prüfen), rendere `docs/` und prüfe live die Anker `#sec-bsp-simulationen-lehrende` und `#sec-bsp-fragen-generator`. Danach K3b, Kasten 2, nach dem Startprompt in `claude/mini-cases/ENTWURF-fundstueck-kaesten-druck-2026-11-09.md`. Fragen nur als Multiple Choice. Am Ende `ergebnisse-sichern`.

## Candidate permanent notes

- KI-erzeugte Prüfungsfragen erreichen nach mehreren Runden aus Kritik und Überarbeitung die Messgüte von Expertenfragen.
- Die Güte einer Frage zu belegen ist etwas anderes, als den Lernerfolg durch das Abfragen zu belegen.
- KI senkt die Produktionskosten der Inszenierung einer Simulation, nicht die Pflicht, ihre Rechnung zu prüfen.
- Eine Simulation bewertet man am begründeten Ringen um die Entscheidung, nicht am Ausgang.

## Ablage

- Projekt: `claude/mini-cases/STATUS-k7-kasten-holbein-2026-11-10.md`
- Tresorit: `Projektnotizen-Claude/mini-cases/STATUS-k7-kasten-holbein-2026-11-10.md`, `…/k7-kasten-holbein-druckseiten-2026-11-10.pdf` (PDF-Seiten 262, 277, 278 der Druckvorlage)
- Repo: `notes/STATUS-k7-kasten-holbein-2026-11-10.md` auf `k7-kasten-holbein`
