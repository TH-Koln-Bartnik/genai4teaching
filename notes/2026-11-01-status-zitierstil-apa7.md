# Status Zitierstil APA 7 deutsch (01.11.2026, ca. 10:45)

Branch `zitierstil-apa7-de` (Basis `main` = `aa1278e`). **Nicht gemergt**, Entscheidung Roman offen. Nur Quellen geändert (`apa.csl`, `references.json`), `docs/` bewusst nicht neu gerendert, um Konflikte mit parallelen Sitzungen zu vermeiden.

## Punkt 0 (Website live?) – Ergebnis: nein
- Live-Seite `kapitel04.html` zeigt noch „Verdrängung / Produktivität / Wiedereinsetzung“, 0 × „Augmentierung“; Stand der Website = Deploy von `f756f5f` (09:17).
- Alle Pages-Deploys danach scheitern (`d933cd7` dreimal, `1d70d0a`, `dc40e44`, `aa1278e`): „in progress deployment … Please cancel f756f5f… first“. Das Deployment-Objekt von `f756f5f` meldet „success“, der interne Pages-Vorgang hängt trotzdem. „Re-run all jobs“ hilft nicht.
- Abhilfe (Roman, im eigenen Terminal mit `gh` angemeldet):
  `gh api -X POST repos/TH-Koln-Bartnik/genai4teaching/pages/deployments/f756f5f0c4da69b10742f71d207dc9d279838a6f/cancel`
  danach in GitHub → Actions den letzten Lauf „pages build and deployment“ → „Re-run all jobs“. Claude durfte den Abbruch in dieser Sitzung nicht selbst auslösen (Sicherheitsfreigabe fehlte).

## Befund Zitierstil (Punkt 2)
Die bisherige `apa.csl` war eine gekürzte Eigenfassung (517 Zeilen, Stand 2023) mit drei Fehlern:
1. Buchkapitel: Doppelpunkt vor der Klammer, Seiten ohne „S.“: „Handbook of Labor Economics: (vol. 6, 1–114)“.
2. Tagungsbeiträge ohne Herausgeber verlieren Tagungsband und Seiten ganz (z. B. bender2021, lewis2020, morris2024; 20 Einträge).
3. Englische Begriffe („eds.“, „vol.“, „p.“) auf der Literaturseite im Anhang. Ursache: Quarto erzeugt das Gesamtverzeichnis eines Buchs in einem eigenen Schritt, der `lang: de` nicht weitergibt (gilt auch für Einzeldatei-Renders). Kapitelverzeichnisse waren deutsch. Abhilfe: Sprache im Stil selbst festlegen (`default-locale="de-DE"`).

## Lösung auf dem Branch
- `apa.csl` = offizieller APA-7-Stil des CSL-Projekts (Stand 07.02.2026, https://github.com/citation-style-language/styles/blob/master/apa.csl) mit zwei Anpassungen: `default-locale="de-DE"`; Datum „27. März“ statt „März 27“ (Makro `date-issued-month-day`).
- `references.json` (51 Datensätze): arXiv als Verlag statt Zeitschrift (34; vorher „In arXiv.“), Ethan Mollick einheitlich „Ethan R.“ (7; vorher zwei verschiedene „Mollick, E. (2026a)“ und getrennte Zitate), Sprache „en“ bei drei Mollick-&-Mollick-Titeln (sonst keine Zusammenfassung „2023a, 2023b“), „n.d.“-Literal entfernt (2; jetzt „o. J.“), AG-München-Urteil und beide EU-Verordnungen als Bericht mit Urheber (sonst Volltitel als Kurzbeleg im Text), EBSCO-Login-URL bei brown2014 und „First Edition“ bei berryman2025 entfernt.

## Prüfung (voller HTML-Render, Quarto 1.8.25 = Pandoc 3.6.3)
- 431 Einträge, 410 ändern sich im Wortlaut; vollständige Gegenüberstellung: `notes/2026-11-01-zitierstil-vergleich-alle-eintraege.csv` (Semikolon, Excel-tauglich).
- Nach der Umstellung: 0 × „eds./vol./p.“, 0 × „: (“, 0 × „In arXiv“, 0 × „n.d.“; 951 Zitate im Text, 0 nicht zusammengefasste Mehrfachzitate.
- Warnungen: nur die bekannten 36 × „OJS block count mismatch“.

Typische Änderungen:
- Kapitel: `In C. Dustmann & T. Lemieux (Hrsg.), Handbook of Labor Economics (Bd. 6, S. 1–114). Elsevier.`
- Tagung: `… Can language models be too big?🦜. Proceedings of the 2021 ACM conference on fairness, accountability, and transparency, 610–623.`
- Alle Einträge: kein Punkt mehr nach DOI/URL (APA 7); Punkt nach Körperschaft („Anthropic. (2025a).“); Blogname kursiv ergänzt; Software mit „[Software]“ und Version; Zeitungsartikel mit URL.
- Im Text: „S. 25“ statt „S.25“; Buchstaben a/b/c bei gleichen Autor-Jahr-Paaren teils neu verteilt (automatisch konsistent mit dem Verzeichnis).

## Offen / Entscheidung Roman
1. Branch mergen? Danach `docs/` neu rendern (HTML; PDF/EPUB in `docs/downloads` zurücklegen wie bisher).
2. Interaktive Seiten (`interactions/ki-entwicklung.html`, `ki-arbeitsweisen-durchspiel.html`, `modellwahl-baum.html`) zitieren „Mollick (2026)“ ohne Buchstaben; nach Merge an die neuen Buchstaben anpassen.
3. Titel-Großschreibung in den Daten uneinheitlich (z. B. „Prompting Science Report 2: The Decreasing Value…“ vs. Satzschreibung); APA 7 verlangt Satzschreibung für Artikel- und Buchtitel. Eigener Durchgang, nicht automatisch.
4. Druck-PDF weiterhin nicht gerendert (TeX fehlt in der Cloud); der neue Stil gilt dort ebenso.
