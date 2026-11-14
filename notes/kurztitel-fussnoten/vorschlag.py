import json,re
caps=json.load(open('/home/claude/work/caps.json'))
# Detektor (generiert) ergänzen
caps.append(dict(file='_einbau/detektor-duell-druck.qmd (aus scripts/detektor-einbetten.py)',line=27,kind='fig-img',id='fig-detektor-duell',
 cap=open('/home/claude/genai4teaching/_einbau/detektor-duell-druck.qmd').read().split('\n')[26].split('](images')[0][2:]))
# (id, Variante) -> (Kurztitel, Präfix der alten Unterschrift, der entfällt | None, explizite Fußnote | None)
V = {
 'tbl-mechanismen':("Didaktische Mechanismen des Buchs nach Lernziel","Didaktische Mechanismen in diesem Buch, ",None),
 'fig-video-stuetzraeder':("Film über Prompt-Tricks, die mit besseren Modellen entfallen (Standbilder)","",None),
 'fig-llm-nutzung-bloom':("Gespräche von Studierenden mit Claude nach Stufen der Bloomschen Taxonomie","",None),
 'tbl-buchuebersicht':("Aufbau des Buchs","Aufbau des Buchs: ",None),
 'fig-qr-grundbegriffe':("Lernspiel zur Prüfung zentraler Begriffe","",None),
 'fig-harness-schichten':("Sprachmodelle mit wachsender Umgebung: Werkzeuge, Gedächtnis, Arbeitsschleife","",None),
 'tbl-modell-harness-agent':("Modell, Harness und Agent im Vergleich",None,"Zwei Bauteile und eine Betriebsweise; eigene Zusammenstellung."),
 'fig-modellklassen':("Vier Klassen von Sprachmodellen nach Leistung und Datenkontrolle","Vier Modellklassen nach Leistung und Kontrolle über die Daten. ",None),
 'fig-abo-stufen':("Abo-Stufen der großen Anbieter: Modell, Denkstufe und Kontingent je Preis","",None),
 'fig-modellwahl-baum':("Entscheidungsbaum zur Wahl von Modellklasse und Preisstufe","Welches Modell für welche Aufgabe? ",None),
 'tbl-modellstand':("Modelle und Preisstufen der Anbieter im November 2026","Modelle und Preisstufen im November 2026. ",None),
 'tbl-einschraenkungen':("Sechs gezielte Einschränkungen in didaktischen Prompts","Sechs gezielte Einschränkungen in didaktischen Prompts. ",None),
 'fig-qr-llm-rag-agent':("Lernspiel zur Unterscheidung von LLM, RAG und Agent","",None),
 'fig-chatbot-zu-agent':("Vom Chatbot zum Agenten: Spielraum des Modells über den Ablauf","",None),
 'fig-skills-handbuch':("Skills: stufenweises Laden von Anleitung und Zusatzdateien","",None),
 'tbl-bausteine':("Fünf Bausteine einer dauerhaften Arbeitsumgebung",None,"Mit dem Zeitpunkt, zu dem das Modell sie liest. Eigene Darstellung."),
 'fig-agenten-gedaechtnis':("Vier Stufen des Agentengedächtnisses, vom Spickzettel zum Archiv","",None),
 'fig-video-token-genres':("Film über die Vorhersage des nächsten Tokens in neun Genres (Standbilder)","",None),
 'fig-onet-tasks':("25 Aufgaben von BWL-Lehrenden: Häufigkeit und Gespräche mit Claude","Was für Aufgaben erledigen Lehrende? ",None),
 'tbl-acemoglu':("Lehraufgaben, die KI übernimmt, unterstützt oder neu schafft","",None),
 'fig-ki-arbeitsweisen':("Fünf Arbeitsweisen mit KI und die Verteilung der Arbeitsschritte","",None),
 'fig-ki-durchspiel':("Eine Lehraufgabe in fünf Arbeitsweisen mit KI, als Dialog durchgespielt","",None),
 'fig-spacing':("Illustration: zeitlich verteiltes Lernen (spacing)",None,"Erstellt mit Gemini 3 Pro, basierend auf @roediger2012. [bisher eigene Zeile „Quelle: …“ unter dem Bild, entfällt]"),
 'fig-interleaving':("Illustration: inhaltlich gemischtes Lernen (interleaving)",None,"Erstellt mit Gemini 3 Pro, basierend auf @morth2021. [Quellenzeile entfällt]"),
 'fig-testing-effect':("Illustration: testgestütztes Lernen (test-enhanced learning)",None,"Erstellt mit Gemini 3 Pro, basierend auf @roediger2012. [Quellenzeile entfällt]"),
 'tbl-semester-simulator':("Annahmen des Semester-Simulators",None,"— (keine Fußnote)"),
 'fig-semester-simulator':("Semester-Simulator: Lernende und Abkürzende in Woche 8","",None),
 'tbl-stand-kap3':("Kernaussagen und Belege zu Kapitel 4",None,"Stand November 2026."),
 'tbl-4d':("Vier Kompetenzen des AI-Fluency-Modells","Die vier Kompetenzen des AI-Fluency-Modells ",None),
 'fig-4d-kreislauf':("Der 4D-Kreislauf mit äußerer und innerer Schleife","Der 4D-Kreislauf: ",None),
 'fig-qr-kompetenzrahmen':("Vergleich von fünf KI-Kompetenzrahmen (online)","",None),
 'tbl-kompetenzrahmen':("Fünf KI-Kompetenzrahmen im Vergleich","Fünf Kompetenzrahmen für den Umgang mit KI im Vergleich. ",None),
 'fig-performance':("Zeithorizont von KI-Agenten 2019–2026","",None),
 'fig-scaling-laws':("Zwei Skalierungsgesetze: Rechenaufwand im Training und Denkzeit","Zwei Skalierungsgesetze: ",None),
 'fig-ki-kosten':("Kosten je Expertenfrage (GPQA), 2025–2026","",None),
 'fig-tutor-kosten':("Semesterkosten eines Tutor-Bots, 2025–2026","Was ein Tutor-Bot im Semester kostet: ",None),
 'tbl-doc-phases':("Dokumentation der KI-Nutzung nach Arbeitsphasen (Beispiel)",None,"Quelle: @baresel2024a [S. 11]."),
 'tbl-llm-scale':("Grade der KI-Nutzung","Grad der KI-Nutzung, ",None),
 'tbl-doc-tools':("Dokumentation der KI-Nutzung nach Werkzeugen (Beispiel)",None,"Quelle: @baresel2024a [S. 8]."),
 'tbl-doc-reflection':("Reflexionstagebuch zur KI-Nutzung (Beispiel)",None,"Quelle: @baresel2024a [S. 16]."),
 'fig-interaction-types':("Vier Arten der Interaktion von Studierenden mit Sprachmodellen","",None),
 'fig-gmeiner-pillars':("Vier Säulen KI-resistenter Aufgabenstellungen","KI-resistente Aufgabenstellungen: ",None),
 'tbl-vier-saeulen':("Prüfungsformate nach den vier Säulen","Prüfungsformate nach den vier Säulen. ",None),
 'tbl-kurs-phasen':("Drei Phasen der KI-Integration in einen Kurs","Drei Phasen der KI-Integration in einen Kurs; ",None),
 'fig-tutor-bot-bwl':("Tutor-Bot für BWL-Grundlagen (Screenshot)","Beispiel: Tutor-Bot BWL Grundlagen. ",None),
 'tbl-suchtypen':("Vier Typen von KI-Suchhelfern","Vier Typen von KI-Suchhelfern ",None),
 'tbl-werkzeugtyp-phase':("Werkzeugtypen je Phase der Literaturrecherche","Werkzeugtypen je Phase der Literaturrecherche. ",None),
 'tbl-paper-analysis-types':("Arten der Paper-Analyse mit KI",None,"Einfach oder sequenziell, ein Artikel oder Synthese mehrerer Artikel. Quelle: @tay2024classifying."),
 'tbl-schreibtrainer':("Acht Schreibtrainer entlang der Abschlussarbeit",None,"TH Köln, Wirtschaftsingenieurwesen; Julia Schmid und Roman Bartnik."),
 'fig-qr-schreibtrainer':("Schreibtrainer zum Kopieren (online)","Schreibtrainer zum Kopieren: ",None),
 'fig-video-making-of':("Making-of eines Erklärvideos mit Claude Code","",None),
 'fig-video-ps2pal-ablauf':("Ablauf des Physik-Tutors PS2 Pal","Ablauf des Physik-Tutors PS2 Pal nach @kestin2025: ",None),
 'tbl-bsp-uebersicht':("Beispiele des Kapitels im Überblick",None,"Nach Lernstufe, Lerntechnik, Rolle der KI und Gestaltung."),
 'fig-druck-lernsong-forecast':("Lernsong zu Prognosefehlern (MAD, MAPE), Standbild","",None),
 'fig-druck-widget-linie':("Linien-Widget zu Kapazität und Engpass","",None),
 'fig-littles-law':("Little's Law in drei Szenarien","Little's Law in drei Szenarien: ",None),
 'tbl-papier-im-raum':("Papierarbeit und Auswertung: vier Ideen des Bok Center","Papierarbeit und Auswertung in vier Ideen des Bok Center. ",None),
 'fig-druck-fallstudie-kaya':("Teaser zur Fallstudie Backhaus Kaya (Standbild)","",None),
 'fig-bullwhip':("Bullwhip-Effekt in drei Szenarien","Bullwhip-Effekt in drei Szenarien mit derselben Kundennachfrage: ",None),
 'fig-detektor-duell':("Urteile eines Lehr-Detektors über Texte von Menschen und KI","",None),
 'tbl-prompts-online':("Online verfügbare Prompts und Aufgabenstellungen",None,"— (keine Fußnote)"),
 'fig-qr-prompt-sammlung':("Vollständige Prompt-Sammlung (online)","Vollständige Prompt-Sammlung in der Online-Version: ",None),
 'tbl-primer-weiche':("Vier Formate und ihre Lehrziele","Vier Formate, vier Lehrziele. ",None),
 ('fig-primer-eoq',77):("Animation zur optimalen Bestellmenge (Endbild)","",None),
 ('fig-primer-eoq',87):("Animation zur optimalen Bestellmenge","",None),
 ('fig-primer-folien',265):("Dieselbe Folie ohne und mit Regelwerk","",None),
 ('fig-primer-folien',277):("Dieselbe Folie ohne und mit Regelwerk","",None),
 'tbl-primer-lernsongs':("Vom Lehrziel zum Songtyp","Vom Lehrziel zum Songtyp. ",None),
 'fig-primer-lernsongs':("Vollfassung von Primer C: Lernsongs (online)","",None),
 'tbl-primer-lernspiele':("Vom Lehrziel zum Spieltyp","Vom Lehrziel zum Spieltyp. ",None),
 'fig-primer-lernspiele':("Vollfassung von Primer D: Lernspiele (online)","",None),
}
rows=[]
for c in caps:
    if not c.get('id') or not c['cap'].strip(): continue
    if c['file']=='anhang-primer.qmd' and c['kind']=='fig-img': continue
    key=(c['id'],c['line']) if (c['id'],c['line']) in V else c['id']
    if c['id']=='fig-lernpfade': continue
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
