# STATUS K5, Kasten 3 „Hausaufgabe als Signal“ (10.11.2026 Einbau und Render, 13.11.2026 Merge)

Auftrag: Startprompt „K5, Kasten 3“ aus `claude/mini-cases/ENTWURF-fundstueck-kaesten-druck-2026-11-09.md`. Sitzung Claude Fable 5.2. Geänderte Buchdateien: `kapitel05-4d-phasen.qmd`, `kapitel04-lernmechanismen.qmd`, `references.json`, `docs/`.

## Entscheidungen (MC, Roman)
- Tresorit: Ordnerfreigabe `Projektnotizen-Claude` am 10.11. erteilt.
- Merge (13.11.): „Alles mergen“, also Kasten 3 und die Tabellenzeile in Kap. 4.

## Ergebnis
`main` stand beim Start und beim Merge auf `c18fa56`; Fast-forward, Branch `k5-kasten3-hausaufgabe` danach löschbar.

| Commit | Inhalt |
|---|---|
| `533b9e8` | `kapitel05-4d-phasen.qmd`: Kasten 3 wörtlich aus dem Entwurf (Fassung 2) unter `@sec-pruefen`, direkt nach dem Absatz „Erstens …“ zu `@rismanchian2026`, vor „Zweitens …“; `references.json`: `stromberg2026penalty`, `smith2026sparkm50` (511 Einträge, keine doppelten Schlüssel) |
| `31fb977` | `kapitel04-lernmechanismen.qmd`: Strömberg et al. als Zeile in der Evidenztabelle, Web- und Druckfassung |
| `135328d` | `docs/`: Kap. 4 und 5 als HTML neu, `search.json`, Druck-PDF neu; EPUB aus Git zurückgeholt, unverändert |

## Quellenprüfung
**Strömberg, D., Lei, V., & Wu, Y. (2026).** *The generative AI learning penalty: Evidence from Chinese secondary education* (CEPR Discussion Paper Nr. 21577). CEPR Press. https://cepr.org/publications/dp21577

- Vornamen: David Strömberg, **Victor Lei**, **Yanhui Wu**. Erscheinungsdatum: **2. Juni 2026** („Published: 2 Jun 2026“). Übereinstimmend belegt durch die CEPR-Seite, SSRN (Abstract 6977138, „Date Written: June 02, 2026“, doi 10.2139/ssrn.6977138), RePEc/IDEAS (cpr:ceprdp:21577) und den KIT-Katalog.
- Google Scholar („Alle Versionen“) ließ sich in der Sitzung **nicht** öffnen: Der Abruf verlangte eine Freigabe, die unbeantwortet blieb. Das CEPR-PDF selbst (kostenpflichtig, 6 £) wurde nicht gelesen; die Angaben stammen von den vier genannten Katalogseiten. Die SSRN-Fassung ist die frei zugängliche Version.
- Zahlen des Kastens am Abstract (RePEc) geprüft: 26.811 Schülerinnen und Schüler, Klassen 7–12, 30 Monate, neun Fächer; Hausaufgaben +18 %, Bearbeitungszeit −30 %; Monatsklausuren −20 % binnen sechs Monaten; Aufnahmeprüfungen −18 % und −24 %; volle Einbuße nach etwa zwei Jahren; rund 80 % der Nutzenden mit Auslagerungsmuster. Design: Difference-in-Differences mit gestaffelter Einführung, also Beobachtungsstudie, wie der Kasten sagt.
- Hinweis: Der Abstract nennt für die Aufnahmeprüfungen zwei Werte (18 % und 24 %), der Kasten schreibt „18 bis 24 %“. Wer genauer sein will, schreibt „um 18 und 24 %“.

**Smith, S. (2026, 3. November).** AI marking machine claims to grade a full class of handwritten papers in five minutes. *Dimsum Daily*. https://www.dimsumdaily.hk/?p=649388 — unverändert aus dem Entwurf übernommen (dort am 09.11. geprüft); der erneute Abruf am 10.11. scheiterte an derselben fehlenden Freigabe.

## Evidenztabelle Kap. 4 (`@sec-evidenz`): Prüfung und Entscheidung
Strömberg et al. gehört hinein, in die Zeile „Ungebremster Zugang hebt die Leistung mit KI und senkt, was ohne KI bleibt“ (Frage „Was passiert ohne didaktische Bremse?“). Gründe: Die Studie misst genau diese Dissoziation (Hausaufgabe hoch, Klausur ohne Hilfsmittel runter); sie ist mit 30 Monaten die einzige Quelle der Zeile mit langem Zeithorizont und ergänzt den RCT von Bastani et al. um den Verlauf im Feld; Stichprobe und Design entsprechen dem Rang der Paneldaten von Rismanchian et al. Die Evidenzstufe der Zeile (hoch) bleibt, weil sie am RCT hängt. Eingefügter Punkt: „@stromberg2026penalty: Paneldaten, 26.811 Schülerinnen und Schüler, 30 Monate; +18 % Hausaufgaben, −20 % Monatsklausuren“.

## Render und Prüfungen
- Druck: `quarto render --profile print --to pdf` (Quarto 1.8.25), 360 Seiten, 17 × 24 cm. Kasten auf S. 157–158 (Umbruch mitten im Kasten, sauber), Tabellenzeile auf S. 117, beide Einträge im Literaturverzeichnis von Kap. 5. Seiten gesichtet. Zwei Warnungen `@sec-loesung-stuetzraeder`, `@sec-loesung-token-genres` (nicht auflösbar), unabhängig von dieser Änderung.
- Das bisher in `docs/` liegende PDF stammte vom 02.11. (408 S., vor dem Umbau der Gliederung); es ist jetzt durch die Druckfassung vom 10.11. ersetzt.
- HTML: `quarto render --to html`, 36 Warnungen wie bisher (OJS), keine neuen unaufgelösten Verweise; in `docs/` änderten sich nur Kap. 4, Kap. 5, `search.json` und das PDF.
- Nicht gemacht: Playwright-Prüfung (Breite 390 px, Konsole), Live-Prüfung auf GitHub Pages.
- Wörter (Python): Kasten 197 ohne, 207 mit Titel; Tabellenzeile 15. Gegen die Kürzungsliste vom 03.11. zu rechnen.

## Offen
1. Tresorit: Kopie dieser Notiz und des Druck-PDF fehlt; die Geräteverbindung war am 13.11. nicht mehr verfügbar. Nachholen.
2. Die Branches zu Kasten 1 (K7) und Kasten 2 (K3b) hängen ebenfalls Einträge ans Ende von `references.json` an; beim Merge ist dort ein Konflikt zu erwarten (beide Blöcke behalten).
3. Der Fließtext von `@sec-evidenz` nennt Strömberg et al. nicht, nur die Tabelle; ein Halbsatz nach Rismanchian wäre möglich.
4. „18 bis 24 %“ oder „18 und 24 %“ (siehe oben).
5. Google-Scholar-Cluster und CEPR-PDF nachsehen, falls die Seitenzahl oder eine revidierte Fassung gebraucht wird.
6. Live-Prüfung: https://th-koln-bartnik.github.io/genai4teaching/kapitel05-4d-phasen.html#sec-pruefen

## Startauftrag nächste Sitzung (optional)
> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/mini-cases/STATUS-k5-kasten3-hausaufgabe-2026-11-13.md`. Kopiere die Notiz und `docs/downloads-genai4teaching.pdf` nach Tresorit (`Projektnotizen-Claude\mini-cases\`), Ordnerfreigabe per MC. Prüfe die Live-Seite #sec-pruefen und Kap. 5 mit Playwright bei 1200 und 390 px. Kläre per MC die offenen Punkte 3 und 4. Quarto per `pip install --break-system-packages quarto-cli==1.8.25`; für das PDF zusätzlich `apt-get update && apt-get install -y texlive-fonts-extra texlive-lang-german`.

## Candidate permanent notes
- Hausaufgabennoten verlieren unter KI ihren Signalwert, weil Leistung mit Hilfsmittel und Können ohne Hilfsmittel auseinanderlaufen.
- Der Lernverlust durch ausgelagerte Hausaufgaben zeigt sich in Monatsklausuren nach Monaten und in Abschlussprüfungen erst nach rund zwei Jahren.
- Kurze Experimente unterschätzen Lernverluste, die sich über Schuljahre aufsummieren.
- Schnellere Korrektur verbessert eine Note nicht, die nicht mehr Können misst.
- Eine Beobachtungsstudie mit langem Zeithorizont ergänzt einen RCT um den Verlauf, ersetzt aber nicht dessen Kausalschluss.

Ablage geprüft: Projekt ✓ / Tresorit ✗ (Gerät nicht verbunden, nachzuholen) / Repo ✓ (gepusht, gemergt: ja, Fast-forward nach `main`)
