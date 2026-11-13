# Zielwörter nach Romans Ring-Entscheidungen (13.11.2026); Körper = Druckwörter ohne Kapitelend-Apparat
# (Kap, Thema-Nr, Abschnitt(e), Druck, davon Apparat, Ring, Ziel-Körper)
T=[
('Vw',1,'sec-lernpfade',569,0,'Kennenswert',60),
('Vw',2,'sec-wie-dieses-buch-lehrt',854,0,'Wichtig',300),
('Vw',4,'sec-uebersicht + sec-neue-moeglichkeiten',306,0,'Wichtig (nach K1)',0),
('1',3,'sec-nutzung + sec-spiel-ki-aufgaben',1223,47,'Kennenswert',120),
('1',4,'sec-kapiteluebersicht',1340,980,'Wichtig',350),
('2',6,'sec-harness',1058,0,'Wichtig',500),
('2',7,'sec-informiert',171,0,'online',0),
('2',7,'sec-model-choice',1273,0,'Wichtig, Preisstufen bleiben',650),
('2',8,'sec-prompts-schreiben-lassen + sec-prompting-myths',522,48,'Wichtig',300),
('2',10,'sec-agenten-praxis',726,0,'Wichtig',350),
('2',11,'sec-agenten-gedaechtnis',707,0,'Wichtig',350),
('2',12,'sec-gpt-bedeutung',758,0,'Wichtig',450),
('2',12,'sec-blick-ins-modell',1412,1195,'Kennenswert',60),
('2',13,'sec-energy',205,0,'Wichtig',150),
('3',14,'sec-aufgaben',1635,74,'Kennenswert',250),
('3',15,'sec-arbeitsweisen',730,0,'Wichtig',450),
('3',16,'sec-leitungsaufgabe (ohne Kugel)',380,0,'Kern',300),
('4',17,'sec-ziele-genai',772,123,'Wichtig',400),
('4',18,'sec-wissenstypen + sec-anwendungsbeispiele',803,0,'Kennenswert',100),
('4',19,'sec-lerntechniken („Ausrichtung“-Liste raus)',1416,63,'Kern',1150),
('4',20,'sec-evidenz (Text oder Tabelle)',3110,1038,'Kern',1700),
('5',21,'sec-schemas + sec-4d + sec-4d-nutzung',715,0,'Wichtig',450),
('5',22,'sec-delegation + sec-capabilities',1052,0,'Wichtig',650),
('5',25,'sec-diligence',428,0,'Wichtig',300),
('5',25,'Richtlinien + sec-ki-vo',564,0,'Kennenswert',80),
('5',26,'sec-dokumentation',746,0,'Wichtig',500),
('5',27,'sec-pruefen + Detektor + vier Säulen',2514,0,'Kern, Dopplung raus',1900),
('5',28,'sec-kurs-integration',1243,945,'Wichtig',300),
('6',29,'sec-recherche',1084,71,'Wichtig',700),
('6',30,'sec-podcast-interviews',531,0,'Wichtig',250),
('6',31,'sec-copilot',579,0,'Wichtig',200),
('6',32,'sec-cyborg-writing + sec-bots-quellentreue',1047,0,'Kennenswert',150),
('6',33,'sec-coding',1520,81,'Kennenswert',250),
('6',34,'sec-widget-littles-law + sec-widget-bullwhip',1001,0,'nur Kap. 7',40),
('6',36,'sec-tutor + sec-complex-tutors',842,66,'Kern, zusammengelegt',650),
('6',37,'sec-simple-tutors',774,0,'Wichtig',300),
('6',38,'sec-tutor-betrieb',1125,0,'Wichtig',650),
('6',40,'sec-sim-echtheit',1761,1112,'Wichtig',500),
('7',41,'sec-bsp-quizspiele',543,0,'Wichtig',300),
('7',42,'sec-bsp-lernsong-forecast',556,0,'Wichtig',350),
('7',43,'sec-bsp-widgets (+ Little\'s Law kurz)',648,62,'Wichtig',500),
('7',46,'sec-bsp-simulationen-lehrende (+ Bullwhip)',621,0,'Wichtig',450),
('7',47,'sec-fall-job-buddy',723,72,'Kennenswert',120),
('A',49,'Anhang A Prompt-Sammlung',5218,0,'Wichtig',3800),
]
import collections
k=collections.defaultdict(lambda:[0,0])
for kap,n,a,d,app,r,z in T:
    body=d-app; z=min(z,body); k[kap][0]+=body; k[kap][1]+=body-z
print('Kap  betroffener Körper  Kürzung')
for kk,(b,c) in k.items(): print(f'{kk:3s} {b:8d} {c:8d}')
tot=sum(c for b,c in k.values()); print('Kürzung Abschnitte',tot)
sb=2000; print('+ Schlüsselbegriffe-Kästen ~',sb,'=> gesamt',tot+sb)
print('Druck heute 60.585 -> ca.',60585-tot-sb)
with open('ziele.csv','w') as f:
    f.write('Kap;Thema;Abschnitt;Druck;Apparat;Koerper;Ring;Ziel;Kuerzung\n')
    for kap,n,a,d,app,r,z in T:
        b=d-app; zz=min(z,b); f.write(f'{kap};{n};{a};{d};{app};{b};{r};{zz};{b-zz}\n')
