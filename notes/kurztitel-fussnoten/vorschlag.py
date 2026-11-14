import json,re
caps=json.load(open('/home/claude/work/caps.json'))
# Detektor (generiert) ergänzen
caps.append(dict(file='_einbau/detektor-duell-druck.qmd (aus scripts/detektor-einbetten.py)',line=27,kind='fig-img',id='fig-detektor-duell',
 cap=open('/home/claude/genai4teaching/_einbau/detektor-duell-druck.qmd').read().split('\n')[26].split('](images')[0][2:]))
# (id, Variante) -> (Kurztitel, Präfix der alten Unterschrift, der entfällt | None, explizite Fußnote | None)
V = {
 ('fig-lernpfade',42):("Sechs Fragen führen zum passenden Lernpfad durch das Buch.","Lernpfade durch das Buch. ",None),
 ('fig-lernpfade',63):("Alle Lernpfade halten an gemeinsamen Stationen.","Lernpfade durch das Buch. ",None),
 'tbl-mechanismen':("Die didaktischen Mechanismen des Buchs sind unterschiedlich gut belegt.","",None),
 'fig-video-stuetzraeder':("Prompt-Tricks entfallen, sobald die Modelle sie nicht mehr brauchen.",None,"Neun Genres, eine Geschichte: Prompt-Tricks glichen Schwächen früherer Modelle aus. §REST§"),
 'fig-llm-nutzung-bloom':("Drei Viertel der Gespräche verlangen Denkleistungen der höheren Stufen.","Drei Viertel der Gespräche verlangen Denkleistungen der höheren Stufen: ",None),
 'tbl-buchuebersicht':("Das Buch hat sieben Kapitel in zwei Teilen und drei Anhänge.","Aufbau des Buchs: sieben Kapitel in zwei Teilen und drei Anhänge. ",None),
 'fig-qr-grundbegriffe':("Ein Lernspiel prüft vorab, welche Grundbegriffe Sie kennen.","",None),
 'fig-harness-schichten':("Gewachsen ist die Schicht um das Modell.","Gewachsen ist die Schicht um das Modell: ",None),
 'tbl-modell-harness-agent':("Modell und Harness sind Bauteile, der Agent ist eine Betriebsweise.",None,"Eigene Zusammenstellung."),
 'fig-modellklassen':("Vier Modellklassen unterscheiden sich in Leistung und Datenkontrolle.","Vier Modellklassen nach Leistung und Kontrolle über die Daten. ",None),
 'fig-abo-stufen':("Ab rund 20 € im Monat arbeitet das große Modell mit hoher Denkstufe.","Was ein Abo kauft: Ab rund 20 € im Monat arbeitet das große Modell mit hoher Denkstufe; ",None),
 'fig-modellwahl-baum':("Drei Fragen führen zu Modellklasse und Preisstufe.","Welches Modell für welche Aufgabe? Drei Fragen führen zu Modellklasse und Preisstufe: ",None),
 'tbl-modellstand':("Namen und Preise wechseln, Klassen und Stufen bleiben.","",None),
 'tbl-einschraenkungen':("Didaktische Prompts schränken das Modell an sechs Stellen gezielt ein.","Sechs gezielte Einschränkungen in didaktischen Prompts. ",None),
 'fig-qr-llm-rag-agent':("Ein Lernspiel ordnet Probleme den Setups LLM, RAG und Agent zu.","",None),
 'fig-chatbot-zu-agent':("Vom Chatbot zum Agenten wächst der Spielraum des Modells über den Ablauf.","Vom Chatbot zum Agenten wächst vor allem der Spielraum des Modells über den Ablauf: ",None),
 'fig-skills-handbuch':("Ein Skill lädt sein Wissen erst, wenn es gebraucht wird.","Ein Skill lädt sein Wissen erst, wenn es gebraucht wird: ",None),
 'tbl-bausteine':("Das Modell liest fünf Bausteine zu verschiedenen Zeitpunkten.","",None),
 'fig-agenten-gedaechtnis':("Das Gedächtnis von Agenten reicht vom Spickzettel bis zum prüfbaren Archiv.","Vom Spickzettel zum prüfbaren Archiv: ",None),
 'fig-video-token-genres':("Sieben Schritte führen vom Text zum nächsten Token.",None,"§ALT§"),
 'fig-onet-tasks':("Lehraufgaben unterscheiden sich in Häufigkeit und Nutzung von Claude.","",None),
 'tbl-acemoglu':("KI übernimmt manche Lehraufgaben, unterstützt andere und schafft neue.","Welche Aufgaben in der Lehre wandern zur KI, bei welchen unterstützt sie, und welche kommen neu hinzu? ",None),
 'fig-ki-arbeitsweisen':("Mit jeder Arbeitsweise gibt der Mensch mehr Arbeitsschritte an die KI ab.","Mit jeder Arbeitsweise gibt der Mensch mehr Arbeitsschritte an die KI ab; ",None),
 'fig-ki-durchspiel':("Je mehr die KI übernimmt, desto mehr sprechen die Agenten miteinander.",None,"Dieselbe Aufgabe in fünf Arbeitsweisen; der Mensch spricht immer weniger. §NACH:miteinander. §"),
 'fig-spacing':("Verteiltes Lernen streut die Wiederholung über die Zeit.",None,"Illustration zum zeitlich verteilten Lernen (*spacing*). Erstellt mit Gemini 3 Pro, basierend auf @roediger2012. [bisher eigene Zeile „Quelle: …“ unter dem Bild, entfällt]"),
 'fig-interleaving':("Gemischtes Üben wechselt zwischen Themen.",None,"Illustration zum inhaltlich gemischten Lernen (*interleaving*). Erstellt mit Gemini 3 Pro, basierend auf @morth2021. [Quellenzeile entfällt]"),
 'fig-testing-effect':("Abrufen festigt Wissen stärker als erneutes Lesen.",None,"Illustration zum testgestützten Lernen (*test-enhanced learning*). Erstellt mit Gemini 3 Pro, basierend auf @roediger2012. [Quellenzeile entfällt]"),
 'tbl-semester-simulator':("Der Semester-Simulator beruht auf ausdrücklich genannten Annahmen.",None,"— (keine Fußnote; bisher keine Quelle angegeben)"),
 'fig-semester-simulator':("Bis Woche 8 fallen die Abkürzenden hinter die Lernenden zurück.","",None),
 'tbl-stand-kap3':("Die Belege zu Kapitel 4 sind unterschiedlich stark.",None,"Kernaussagen und Belege, Stand November 2026."),
 'tbl-4d':("AI Fluency umfasst vier Kompetenzen mit je eigenen Unterkompetenzen.","Die vier Kompetenzen des AI-Fluency-Modells mit ihren Unterkompetenzen. ",None),
 'fig-4d-kreislauf':("Der 4D-Kreislauf dreht sich in zwei Schleifen.","Der 4D-Kreislauf: ",None),
 'fig-qr-kompetenzrahmen':("Die Online-Fassung vergleicht fünf Kompetenzrahmen.",None,"Vergleich nach Zielgruppe, Ordnungsprinzip und Entstehung: §NACH:Online-Fassung: §"),
 'tbl-kompetenzrahmen':("Fünf Kompetenzrahmen ordnen den Umgang mit KI unterschiedlich.","Fünf Kompetenzrahmen für den Umgang mit KI im Vergleich. ",None),
 'fig-performance':("KI-Agenten bewältigen immer längere Aufgaben.","KI-Agenten bewältigen immer längere Aufgaben: ",None),
 'fig-scaling-laws':("Mehr Rechenaufwand und mehr Denkzeit verbessern die Modelle.","",None),
 'fig-ki-kosten':("Expertenwissen wird 725-mal billiger.","Expertenwissen wird 725-mal billiger: ",None),
 'fig-tutor-kosten':("Ein Tutor-Bot fürs Semester kostet statt 8.800 nur noch rund 12 US-$.","Was ein Tutor-Bot im Semester kostet: ",None),
 'tbl-doc-phases':("KI-Nutzung lässt sich nach Arbeitsphasen dokumentieren.",None,"Beispiel. Quelle: @baresel2024a, S. 11."),
 'tbl-llm-scale':("Die KI-Nutzung lässt sich in Graden abstufen.","Grad der KI-Nutzung, ",None),
 'tbl-doc-tools':("KI-Nutzung lässt sich nach Werkzeugen dokumentieren.",None,"Beispiel. Quelle: @baresel2024a, S. 8."),
 'tbl-doc-reflection':("Ein Reflexionstagebuch hält die KI-Nutzung im Verlauf fest.",None,"Beispiel. Quelle: @baresel2024a, S. 16."),
 'fig-interaction-types':("Studierende nutzen vier Arten der Interaktion etwa gleich oft.","Etwa gleichverteilt: ",None),
 'fig-gmeiner-pillars':("KI-resistente Aufgaben stehen auf vier Säulen.","KI-resistente Aufgabenstellungen: ",None),
 'tbl-vier-saeulen':("Jede der vier Säulen legt andere Prüfungsformate nahe.","Prüfungsformate nach den vier Säulen. ",None),
 'tbl-kurs-phasen':("KI zieht in drei Phasen in einen Kurs ein.","Drei Phasen der KI-Integration in einen Kurs; ",None),
 'fig-tutor-bot-bwl':("So arbeitet ein Tutor-Bot für BWL-Grundlagen.","Beispiel: Tutor-Bot BWL Grundlagen. ",None),
 'tbl-suchtypen':("Zwei Unterscheidungen ergeben vier Typen von KI-Suchhelfern.","Vier Typen von KI-Suchhelfern nach zwei Unterscheidungen. ",None),
 'tbl-werkzeugtyp-phase':("Jede Phase der Literaturrecherche hat ihre eigenen Werkzeugtypen.","Werkzeugtypen je Phase der Literaturrecherche. ",None),
 'tbl-paper-analysis-types':("Paper-Analysen unterscheiden sich in Schrittzahl und Zahl der Artikel.",None,"Einfach oder sequenziell, ein Artikel oder Synthese mehrerer Artikel. Quelle: @tay2024classifying."),
 'tbl-schreibtrainer':("Acht Schreibtrainer begleiten die Abschlussarbeit.",None,"TH Köln, Wirtschaftsingenieurwesen; Julia Schmid und Roman Bartnik."),
 'fig-qr-schreibtrainer':("Die Schreibtrainer stehen online zum Kopieren bereit.","Schreibtrainer zum Kopieren: ",None),
 'fig-video-making-of':("Ein Erklärvideo entsteht in sechs geprüften Schritten.","",None),
 'fig-video-ps2pal-ablauf':("Beim Physik-Tutor PS2 Pal setzen Lehrende die Regeln.","",None),
 'tbl-bsp-uebersicht':("Die Beispiele des Kapitels decken Lernstufen und KI-Rollen breit ab.",None,"Geordnet nach Lernstufe, Lerntechnik, Rolle der KI und Gestaltung."),
 'fig-druck-lernsong-forecast':("Ein Lernsong vergleicht drei Prognoseverfahren im Refrain.","",None),
 'fig-druck-widget-linie':("Im Linien-Widget finden Studierende den Engpass selbst.","",None),
 'fig-littles-law':("Little's Law trifft über acht Stunden, nicht über 20 Minuten.","",None),
 'tbl-papier-im-raum':("Vier Ideen des Bok Center verbinden Papierarbeit und Auswertung.","Papierarbeit und Auswertung in vier Ideen des Bok Center. ",None),
 'fig-druck-fallstudie-kaya':("Ein Teaser führt in die Fallstudie Backhaus Kaya ein.","",None),
 'fig-bullwhip':("Lange Lieferzeiten verstärken den Bullwhip-Effekt.","",None),
 'fig-detektor-duell':("Der Lehr-Detektor hält auch Texte von Menschen für KI.","Wen der Lehr-Detektor für KI hält: ",None),
 'tbl-prompts-online':("Weitere Prompts und Aufgaben stehen online.",None,"— (keine Fußnote)"),
 'fig-qr-prompt-sammlung':("Die vollständige Prompt-Sammlung steht online.","Vollständige Prompt-Sammlung in der Online-Version: ",None),
 'tbl-primer-weiche':("Vier Formate dienen vier Lehrzielen.","Vier Formate, vier Lehrziele. ",None),
 ('fig-primer-eoq',77):("Die optimale Bestellmenge gleicht zwei gegenläufige Kosten aus.","Die optimale Bestellmenge gleicht zwei gegenläufige Kosten aus: ",None),
 ('fig-primer-eoq',87):("Die optimale Bestellmenge gleicht zwei gegenläufige Kosten aus.","Die optimale Bestellmenge gleicht zwei gegenläufige Kosten aus. ",None),
 ('fig-primer-folien',265):("Mit Regelwerk belegt die Folie ihren Titel mit einem Diagramm.","",None),
 ('fig-primer-folien',277):("Mit Regelwerk belegt die Folie ihren Titel mit einem Diagramm.","",None),
 'tbl-primer-lernsongs':("Das Lehrziel bestimmt den Songtyp.","Vom Lehrziel zum Songtyp. ",None),
 'fig-primer-lernsongs':("Die Vollfassung von Primer C steht online.","Vollfassung von Primer C ",None),
 'tbl-primer-lernspiele':("Das Lehrziel bestimmt den Spieltyp.","Vom Lehrziel zum Spieltyp. ",None),
 'fig-primer-lernspiele':("Die Vollfassung von Primer D steht online.","Vollfassung von Primer D ",None),
}
rows=[]
for c in caps:
    if not c.get('id') or not c['cap'].strip(): continue
    if c['file']=='anhang-primer.qmd' and c['kind']=='fig-img': continue
    key=(c['id'],c['line']) if (c['id'],c['line']) in V else c['id']
    if key not in V: print("FEHLT",c['id'],c['line']); continue
    t,pre,note=V[key]
    alt=' '.join(c['cap'].split())
    if note is None:
        assert alt.startswith(pre),(c['id'],pre,alt[:80])
        rest=alt[len(pre):]
        rest=rest[:1].upper()+rest[1:] if rest else ''
        note=rest
    else:
        if '§ALT§' in note: note=alt
        if '§REST§' in note:
            note=note.replace('§REST§', alt.split('nicht mehr brauchen. ',1)[1])
        m=re.search(r'§NACH:(.*?)§',note)
        if m: note=note.replace(m.group(0), alt.split(m.group(1),1)[1])
    if note and not note.rstrip().endswith(('.',')','>','!','?','*]','entfällt]')) and not note.startswith('—'): note=note.rstrip()+'.'
    rows.append(dict(id=c['id'],file=c['file'],line=c['line'],kind=c['kind'],alt=alt,titel=t,fussnote=note))
json.dump(rows,open('/home/claude/work/vorschlag.json','w'),ensure_ascii=False,indent=1)
print(len(rows), max(len(r['titel']) for r in rows))
for r in rows:
    if len(r['titel'])>75: print(len(r['titel']),r['titel'])
