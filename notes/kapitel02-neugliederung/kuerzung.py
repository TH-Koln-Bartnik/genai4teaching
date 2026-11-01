# Kürzungsliste Kapitel 2 (S1a), Wortzahlen vorher aus kapitel02.qmd @ 0a48673 (Fließtext ohne iframes, Zitierschlüssel, URLs)
items = [
# Nr, Zeilen, Inhalt, vorher, nachher, Art
("N1","842–868","Kompetenzrahmen-Vergleich 2.6.1 → Kasten „Warum AI Fluency?“, Tabelle nur online (QR)",375,150,"online"),
("N2","836–838, 913–915, 51–54","Einleitung 2.6, Nutzung 2.6.3, Einleitung 2.1 → ein Überblicksabsatz in neu 2.1",68+71+73,90,"verdichten"),
("N3","886–890","Modalitäten Automation/Augmentation/Agency → mit Centaur/Cyborg in 2.3.4 zusammenführen",130,60,"zusammenlegen"),
("N4","892–897","Zwei Schleifen (Dakan/Feller) straffen",145,100,"straffen"),
("N5","133–137","„Autonom“-Einschränkung (Etymologie bleibt als Satz)",104,45,"straffen"),
("N6","153–160","Name „Harness“ + drei Labore: Text straffen, Animation bleibt",147,90,"straffen"),
("N7","178–184","Tabelle „Was sich seit 2022 geändert hat“ (@tbl-harness-wandel) streichen, doppelt zu Text und @tbl-modell-harness-agent",89,0,"streichen"),
("N8","186–189","„Die Grenze wandert“ straffen",99,50,"straffen"),
("N9","191–199","„Was das für Lehrende heißt“ → Einstieg Delegation 2.3",137,80,"verschieben+straffen"),
("N10","223–229","GPT-Begriffe (Vertiefung) straffen",182,110,"straffen"),
("N11","249–254, 274–277","LLM/RAG/Agent: Bücherregal und Skala straffen (→ 2.3.1)",142+96,150,"straffen"),
("N12","308–320","Skill-Karte: Animation, Druckbild, Absatz 38/21 Min. entfernen; ein Satz Standardarbeit bleibt",261,35,"streichen"),
("N13","341–373","Engpass (Kugeln): Text straffen, Animation bleibt (Vertiefung)",596,420,"straffen"),
("N14","380–395, 427–434","Gedächtnis: Kontextfenster, vier Stufen, Schreibzeitpunkt straffen",166+182+163,350,"straffen"),
("N15","436–442","„Die Technik verschiebt die Verantwortung“ → Diligence 2.6",124,80,"verschieben+straffen"),
("N16","466–492","Interpretierbarkeit (Sprachen, Planen, Rechnen) → Vertiefung „Blick ins Modell“",426,180,"verschieben+straffen"),
("N17","494–501","„Können wir das Modell fragen?“ straffen (bleibt Discernment)",143,100,"straffen"),
("N18","573–587","Anwendungsbeispiel Kurs-Bot (Kratzke) nur online; Druck ein Satz mit Verweis",211,30,"online"),
("N19","589","LM-Arena-Hinweis → Online-Modellübersicht",26,0,"verschieben"),
("N20","609–618","Liste „gut nutzbar für …“ streichen (veraltet, Beispiele in Kap. 4–6)",44,0,"streichen"),
("N21","632–636","Peer-Review, Turing-Test, Callcenter streichen",102,0,"streichen"),
("N22","641–645","725-Raster: Begleittext straffen (Animation erklärt sich, S2)",160,100,"straffen"),
("N23","671","Satz „exponentielles Wachstum“ streichen",16,0,"streichen"),
("N24","699–710","Durchspiel-Begleittext straffen",283,150,"straffen"),
("N25","722–728","P&G-Studie ein Satz; „Fahrrad auf der Autobahn“ ein Satz → Modellwahl",121,50,"straffen"),
("N26","734–754","Zugänge, Jemisin-Bild, Prompt-Definition straffen",109+73+108+27,200,"straffen"),
("N27","806–809","Sportwagen-Absatz straffen",103,60,"straffen"),
("N28","444–453","Anwendungsbeispiel „Falscher Eintrag überlebt“ nur online; Druck ein Satz",158,30,"online"),
("N29","72–77, 102–131","Harness-Einstieg, Kernsatz, Werkzeuge/Gedächtnis/Autonomie straffen",105+85+77+121+66+127,370,"straffen"),
("N30","519–533","Modellklassen, Abo, Fußnote Preisstufen, Hochschulzugänge straffen",138+107+106+119,330,"straffen"),
("N31","679–687","Beschwörer/Dämmer-/dunkle Fabrik straffen (Platz für S4-Rollenkarte)",182,140,"straffen"),
("N32","405–409, 421–425","Gedächtnis: Sitzung vs. Gedächtnis, Abgrenzung RAG straffen",95+113,140,"straffen"),
("N33","334–336","Werkzeuganschluss MCP und eigene Quellen straffen",127,90,"straffen"),
("N34","203–207, 244","KI-Begriffe, Tokens, Kontextfenster straffen (2.2 Kern / 2.7 Vertiefung)",111+115+63,210,"straffen"),
("N35","758–762, 813–816","Prompt-Bausteine, didaktische Prompts straffen",156+95,195,"straffen"),
("N36","932–937","Energie-Zusammenfassung straffen",210,170,"straffen"),
("N37","503–509","Halluzinationsursachen straffen",147,110,"straffen"),
("N38","Bildunterschriften Druck","fig-ki-kosten 173→80, fig-performance 93→60, chatbot-zu-agent 89→55, drei-labs 82→50, harness-schichten 67→45, autonomiestufen 64→45, Durchspiel 61→40",173+93+89+82+67+64+61,375,"straffen"),
]
neu = [("2.1 Überblick: Brücke vom Kapitelkopf zu 4D, Hinweis „Vertiefung“",60),
       ("Einleitung je D-Abschnitt (4 × 2–3 Sätze, Leitfrage aus @tbl-4d)",4*40),
       ("2.7 Vertiefung: Hinweis „kann übersprungen werden“",30),
       ("2.8 Escape Room: Einleitung (Platzhalter für S8)",50)]
basis=13560
cut=sum(v-n for *_,v,n,_a in items)
add=sum(w for _,w in neu)
print(f"Kürzung brutto {cut}, neu {add}, netto {cut-add} = {100*(cut-add)/basis:.1f} %")
print(f"Ziel -25 %: {round(basis*0.25)}; nachher {basis-cut+add}")
import json; json.dump({"items":items,"neu":neu,"cut":cut,"add":add},open('/home/claude/s1a/kuerzung.json','w'),ensure_ascii=False)
