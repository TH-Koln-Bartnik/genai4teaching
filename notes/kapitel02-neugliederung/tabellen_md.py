import json
d=json.load(open('kuerzung.json'))
grund={
"N1":"Entscheidung Roman (MC): Kasten statt Abschnitt; der Rahmenvergleich ist Hintergrund, nicht Werkzeug",
"N2":"drei Einleitungen derselben Idee; der Überblick 2.1 übernimmt die Wegweiserfunktion",
"N3":"Modalitäten und Centaur/Cyborg beschreiben dieselbe Frage (wer macht was) – an einer Stelle erklären",
"N4":"Kern (zwei Schleifen, Lesart des Buchs) bleibt, Wiederholungen fallen",
"N5":"Etymologie bleibt als ein Satz; die Gegenposition steckt schon in „Autonomie im Vorgehen“",
"N6":"Animation drei-labs zeigt den Vergleich; der Text braucht nur die Definition",
"N7":"Tabelle wiederholt die drei Absätze davor und Tabelle 2.1",
"N8":"Kernaussage (Annahmen im Harness veralten) in zwei Sätzen",
"N9":"Praktische Folgerung gehört zur Entscheidung, was an die KI geht",
"N10":"Begriffsherkunft GPT bleibt, Detail zu Pretraining/RLHF kürzer (Glossar)",
"N11":"Bücherregal-Bild bleibt, doppelte Erklärung entfällt",
"N12":"Entscheidung Roman (MC): erste Skills-Animation raus; Datei bleibt in interactions/",
"N13":"Kugel-Animation trägt die Aussage; drei Absätze auf zwei",
"N14":"Vier-Stufen-Grafik und Sitzungs-Animation zeigen das Detail",
"N15":"Verantwortung beim Gedächtnis ist Diligence",
"N16":"Befunde der Interpretierbarkeitsforschung sind Vertiefung; für Discernment bleibt nur „Fragen hilft nicht“",
"N17":"bleibt als Discernment-Kern (Selbstauskunft des Modells ist unzuverlässig)",
"N18":"Entscheidung Roman (MC): online im Kapitel, Druck ein Satz mit Verweis",
"N19":"gehört zur lebenden Modellübersicht",
"N20":"Liste veraltet schnell; Beispiele liefern Kap. 4–6",
"N21":"drei lose Einzelbefunde ohne Bezug zur Lehrentscheidung",
"N22":"S2 hat das Raster mit Leitfrage umgebaut; der Text muss die Stufen nicht nacherzählen",
"N23":"Behauptung ohne Beleg, Aussage steckt in Zeithorizont und Kosten",
"N24":"Durchspiel erklärt sich selbst; Begleittext nur Fall und Leseanleitung",
"N25":"P&G als Ergänzung zu Centaur/Cyborg; Fahrrad-Bild als Satz in die Modellwahl",
"N26":"drei Zugänge und Prompt-Definition bleiben, Jemisin-Bild in einem Satz",
"N27":"Sportwagen-Vergleich in zwei Sätzen",
"N28":"Entscheidung Roman (MC): online im Kapitel, Druck ein Satz",
"N29":"Gespann-Bild und Kernsatz bleiben, Ermöglicher je zwei Sätze kürzer",
"N30":"Preise stehen in Tabelle @tbl-modellstand und Fußnote; Text nur die Logik der Stufen",
"N31":"Begriffe bleiben; Platz für die Rollenkarte aus S4",
"N32":"Abgrenzungen auf je zwei Sätze",
"N33":"MCP ein Satz, eigene Quellen mit Prüfidee",
"N34":"KI/GenAI/LLM als drei Sätze in 2.2.1, Tokens/Kontextfenster in 2.7.1",
"N35":"Daumenregeln und Grundsatz „schwer machen“ bleiben",
"N36":"Größenordnungen und Lehrfolgerung bleiben",
"N37":"Mechanismus in drei Sätzen; Beispiel aus dem Kapitelkopf (Kessler) aufgreifen",
"N38":"Druck-Bildunterschriften auf Aussage + Lesehilfe + QR; Details stehen online",
}
rows=["| Nr. | Zeilen (main 0a48673) | Inhalt und Maßnahme | Art | Wörter vorher | nachher | Begründung |","|---|---|---|---|---:|---:|---|"]
for n,z,inh,v,na,art in d['items']:
    rows.append(f"| {n} | {z} | {inh} | {art} | {v} | {na} | {grund[n]} |")
cut=d['cut']; add=d['add']
rows.append(f"| | | **Summe Kürzungen** | | | | **−{cut}** |")
rows.append(f"| | | Neuer Text: Brücke 2.1 (60), Einleitungen der vier D-Abschnitte (4 × 40), Hinweis Vertiefung (30), Einleitung Escape Room (50) | | | | **+{add}** |")
rows.append(f"| | | **Netto** | | 13.560 | {13560-cut+add:,}".replace(',', '.')+f" | **−{cut-add} Wörter = −{100*(cut-add)/13560:.1f} %** |")
open('kuerzung.md','w').write('\n'.join(rows))
print('\n'.join(rows[-3:]))
