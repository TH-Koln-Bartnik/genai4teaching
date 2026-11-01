import json
d=json.load(open('kuerzung.json'))
items={i[0]:i for i in d['items']}
blocks={ # neuer Abschnitt: [(Herkunft, Wörter vorher)]
"Kopf":[("Szene, Einschätzungen, Lernziele",341)],
"2.1":[("2.6 Einleitung",68),("2.6.1 Kompetenzrahmen",375),("2.6.2 4D ohne Modalitäten",418),("2.6.3 Nutzung ohne Kasten",71)],
"2.2":[("2.1 Einstieg + Lernspiel",140),("2.1.1 ohne Lehrenden-Absatz",1725-137),("2.1.2 KI-Begriffe",111)],
"2.3":[("2.1.1 Lehrenden-Absatz",137),("2.1.3",579),("2.3",1379),("2.4",2158),("2.6.2 Modalitäten",130),("2.6.3 Kasten Berufsprofil",109)],
"2.4":[("2.5 (alle Unterabschnitte)",1334)],
"2.5":[("2.2 ohne Interpretierbarkeit",358)],
"2.6":[("2.1.5 Verantwortung",124),("2.7 Energie",257)],
"2.7":[("2.1.2 ohne KI-Begriffe",574),("2.2 Interpretierbarkeit",426),("2.1.4",1242),("2.1.5 ohne Verantwortung",1131)],
"2.8":[],
"Apparat":[("Kernaussagen, Lernfragen",510)],
}
zu={"2.1":["N1","N2","N4"],"2.2":["N5","N6","N7","N8","N29"],"2.3":["N3","N9","N11","N18","N19","N20","N21","N22","N23","N24","N25","N30","N31"],
"2.4":["N26","N27","N35"],"2.5":["N17","N37"],"2.6":["N15","N36"],"2.7":["N10","N12","N13","N14","N16","N28","N32","N33"]}
delta={k:sum(items[n][3]-items[n][4] for n in v) for k,v in zu.items()}
# geteilte Posten
delta["2.2"]+= (111-80)+ (82-50)+(67-45)+(64-45)   # N34 Teil KI-Begriffe, N38 Teil
delta["2.7"]+= (115+63)-(130)                       # N34 Teil Tokens/Kontext
delta["2.3"]+= (173-80)+(93-60)+(89-55)+(61-40)     # N38 Teil
neu={"2.1":60,"2.3":40,"2.4":40,"2.5":40,"2.6":40,"2.7":30,"2.8":50}
tot_v=tot_n=0
for k,b in blocks.items():
    v=sum(w for _,w in b); n=v-delta.get(k,0)+neu.get(k,0)
    tot_v+=v; tot_n+=n
    print(f"{k:8s} {v:6d} {n:6d}  {', '.join(h for h,_ in b)}")
print("Summe",tot_v,tot_n,f"{100*(tot_n-tot_v)/tot_v:.1f} %")
