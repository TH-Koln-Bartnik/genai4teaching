# Nutzwertanalyse Zuspitzung Logos-Lehrbuch, Stand main 2ba1edb (13.11.2026)
# Kriterien 0-3: K Kernbotschaft, H Handlungsrelevanz, D Haltbarkeit, E Evidenz, A Alleinstellung eigene Praxis, R Redundanzfreiheit
import csv
W = dict(K=.25, H=.20, D=.20, E=.15, A=.10, R=.10)
FAKTOR = {'behalten': .90, 'verdichten': .55, 'online+QR': .15, 'aus Druck': .05}
def massnahme(s):
    return 'behalten' if s >= 2.3 else 'verdichten' if s >= 1.7 else 'online+QR' if s >= 1.2 else 'aus Druck'
# (Kapitel, ID, Druckwörter, K,H,D,E,A,R, Anmerkung)
S = [
('Vw','sec-neue-moeglichkeiten',181, 1,1,1,0,2,1,'doppelt mit Kap.1 „fünf Formate“'),
('Vw','sec-lernpfade',569, 1,2,3,0,2,2,'Liniennetz als Abbildung genügt'),
('Vw','sec-wie-dieses-buch-lehrt',854, 2,2,3,3,2,1,'Tabelle doppelt mit Kap. 4 (Plan E5)'),
('Vw','sec-uebersicht',125, 1,1,2,0,1,1,'mit Kap.1-Übersicht zusammenlegen'),
('1','sec-nutzung',683, 2,1,0,2,1,2,'Nutzungszahlen altern schnell'),
('1','sec-spiel-ki-aufgaben',540, 1,1,0,2,2,1,'Economic Index auch in Kap. 3'),
('1','sec-risiken',348, 3,2,3,3,1,2,''),
('1','sec-was-hilft',293, 3,3,3,3,1,2,''),
('1','sec-kapiteluebersicht',1340, 2,2,2,0,1,0,'doppelt mit Vorwort; als Tabelle'),
('2','sec-definitionen+sprachmodell',223, 2,2,3,2,0,3,''),
('2','sec-harness',1058, 1,1,0,1,1,1,'Chronik 2022–2026; Fuhrwerk-Bild behalten'),
('2','sec-durchspielen',236, 3,3,3,2,1,3,''),
('2','sec-informiert',171, 0,2,0,0,0,3,'Linkliste veraltet'),
('2','sec-model-choice',1273, 1,2,0,1,1,3,'Preise, Produktnamen'),
('2','sec-how-to-speak+prompt-components',345, 2,3,2,2,1,2,'Werkvertrag'),
('2','sec-prompts-schreiben-lassen',179, 1,3,2,1,1,2,''),
('2','sec-prompting-myths',343, 1,2,2,3,1,2,''),
('2','sec-prompts-teaching',652, 3,3,3,2,2,2,'didaktische Einschränkungen = Leitplanken'),
('2','sec-patterns-usage',441, 2,3,2,1,1,2,'LLM/RAG/Agent'),
('2','sec-agenten-praxis',726, 1,2,1,0,2,2,'Skills, MCP'),
('2','sec-agenten-gedaechtnis',707, 0,1,1,1,1,3,''),
('2','sec-energy',205, 0,2,1,2,0,3,'online-Exkurs existiert'),
('2','sec-gpt-bedeutung',758, 2,1,3,2,2,2,'erklärt Halluzination; Token-Film'),
('2','sec-blick-ins-modell',1412, 0,0,2,3,0,3,'Interpretierbarkeitsforschung'),
('3','sec-aufgaben',1635, 2,2,2,2,2,1,'Bibliothek-Spiel doppelt mit Kap. 1'),
('3','sec-arbeitsweisen',730, 2,2,2,2,2,1,'Centaur auch in Kap. 2'),
('3','sec-leitungsaufgabe',380, 3,2,2,1,2,3,'Prüfen als Engpass'),
('4','sec-ziele-genai',772, 3,2,2,2,1,1,'doppelt mit Kap.1 „zwei Probleme“'),
('4','sec-wissenstypen+anwendungsbeispiele',803, 1,2,2,1,0,0,'zweite Typologie neben Kap. 7'),
('4','sec-lerntechniken',1416, 3,3,3,3,1,2,'Kern; „Ausrichtung“-Liste doppelt'),
('4','sec-evidenz',3110, 3,3,2,3,1,1,'Tabelle und Text sagen dasselbe'),
('5','sec-schemas+4d+4d-nutzung',715, 2,2,2,1,1,2,'Rahmen für Teil II'),
('5','sec-delegation+capabilities',1052, 2,3,1,2,1,1,'Jagged Frontier auch Kap. 2/3'),
('5','sec-einfuehrung-studierende',411, 2,3,2,1,2,2,''),
('5','sec-hallucinations',321, 3,3,3,2,0,2,''),
('5','sec-diligence',428, 2,3,2,1,0,2,'Offenlegung'),
('5','sec-ki-vo (+Richtlinien)',564, 1,2,0,1,0,2,'Rechtsstand, Statistik'),
('5','sec-dokumentation',746, 2,3,2,1,1,3,''),
('5','sec-pruefen',1211, 3,3,2,2,1,1,'5 Befunde wiederholen Kap. 4'),
('5','sec-detektor-duell',174, 2,2,1,2,2,3,'interaktiv'),
('5','Formate nach den vier Säulen',1129, 2,3,2,2,1,2,''),
('5','sec-kurs-integration',1243, 2,2,2,1,2,1,'Rollen aus Kap. 6, Beispiele aus Kap. 7'),
('6','sec-recherche',1084, 2,3,1,2,3,3,'Werkzeugtypen behalten'),
('6','sec-podcast-interviews',531, 1,1,1,1,2,3,'Showcase'),
('6','sec-copilot',579, 2,2,2,0,0,2,'DuPont-Fall ohne Ergebnis'),
('6','sec-cyborg-writing',725, 2,3,2,1,3,2,'Schreibtrainer'),
('6','sec-bots-quellentreue',322, 2,2,2,2,3,2,''),
('6','sec-coding',1520, 1,2,1,1,1,1,'Sonic Pi, Copilot-Studien'),
('6','sec-widget-littles-law',363, 1,1,3,1,3,1,'Widget-Beispiele auch Kap. 7'),
('6','sec-widget-bullwhip',638, 1,1,3,2,3,0,'Bullwhip auch Kap. 7'),
('6','sec-widget-pruefen',888, 3,3,2,1,3,2,'rechnet oder spielt nur ab'),
('6','sec-tutor',531, 3,3,2,3,0,2,''),
('6','sec-simple-tutors',774, 2,2,1,1,0,2,'Produktnamen; Gestaltungsregeln behalten'),
('6','sec-complex-tutors',311, 3,2,2,3,0,1,'PS2 Pal schon in 6.3-Auftakt'),
('6','sec-tutor-betrieb',1125, 3,3,2,2,1,2,''),
('6','sec-role-play',354, 2,3,2,1,0,2,''),
('6','sec-goal-play',299, 2,3,2,1,0,2,''),
('6','sec-sim-echtheit',1761, 2,2,2,3,0,2,''),
('7','sec-bsp-fragen-generator',729, 3,3,3,3,3,2,''),
('7','sec-bsp-lernsong-forecast',556, 2,2,2,2,3,2,'Primer C überlappt'),
('7','sec-bsp-quizspiele',543, 2,2,3,3,2,1,'Mechanismus wie Fragen-Generator'),
('7','sec-bsp-widgets',648, 2,3,3,3,3,1,'nimmt Widgets aus Kap. 6 auf'),
('7','sec-fall-tutor-bwl',470, 3,3,2,2,3,1,''),
('7','sec-bsp-fallstudie',635, 2,3,3,3,3,3,''),
('7','sec-bsp-simulationen-lehrende',621, 2,3,3,3,3,1,'nimmt Bullwhip aus Kap. 6 auf'),
('7','sec-bsp-simulationen-studierende',573, 3,3,3,3,3,2,''),
('7','sec-fall-job-buddy',723, 2,2,2,2,3,2,''),
('7','sec-fall-unternehmen',673, 2,2,2,2,3,3,''),
]
rows=[]
for k,i,w,*sc,note in S:
    s=round(sum(W[c]*v for c,v in zip('KHDEAR',sc)),2); m=massnahme(s)
    rows.append(dict(Kap=k,ID=i,Woerter=w,K=sc[0],H=sc[1],D=sc[2],E=sc[3],A=sc[4],R=sc[5],Score=s,Massnahme=m,Rest=round(w*FAKTOR[m]),Anmerkung=note))
with open('nwa-ergebnis.csv','w',newline='',encoding='utf-8') as f:
    wr=csv.DictWriter(f,fieldnames=rows[0].keys()); wr.writeheader(); wr.writerows(rows)
import collections
agg=collections.defaultdict(lambda:[0,0,0])
for r in rows:
    a=agg[r['Massnahme']]; a[0]+=1; a[1]+=r['Woerter']; a[2]+=r['Rest']
print('Maßnahme       n  Wörter  danach')
for m in FAKTOR: print(f"{m:12s}{agg[m][0]:4d}{agg[m][1]:8d}{agg[m][2]:8d}")
tw=sum(r['Woerter'] for r in rows); tr=sum(r['Rest'] for r in rows)
print('bewertet',tw,'->',tr,'Ersparnis',tw-tr)
kap=collections.defaultdict(lambda:[0,0])
for r in rows: kap[r['Kap']][0]+=r['Woerter']; kap[r['Kap']][1]+=r['Rest']
for k,(a,b) in kap.items(): print(f'Kap {k:3s} {a:6d} -> {b:6d}  ({b-a:+d})')
print()
for r in sorted(rows,key=lambda r:r['Score']): print(f"{r['Score']:4.2f} {r['Massnahme']:10s} {r['Kap']:2s} {r['ID'][:38]:38s} {r['Woerter']:5d}")
