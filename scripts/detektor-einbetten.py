# Detektor-Duell (Kap. 5, S4): Daten ins Spiel einbetten, Einbau-Dateien für das Buch erzeugen.
#
# Laiensicht: Das Trainingsskript hat Gewichte, Spieltexte und Kennzahlen als JSON abgelegt.
# Dieses Skript kopiert sie in die Spieldatei (die so ohne Nachladen funktioniert) und schreibt
# daraus die Textbausteine für Kapitel 5 und Anhang B, die Druckabbildung und den QR-Code.
# Alle Zahlen im Buch kommen damit aus derselben Skript-Ausgabe; von Hand wird nichts abgetippt.
#
# Aufruf (Repo-Wurzel, nach scripts/detektor-trainieren.py):
#   python3 -I scripts/detektor-einbetten.py _src/detektor
# QR-Code danach: node scripts/qr-detektor-duell.mjs
import json, re, sys

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

QUELLE = sys.argv[1]
URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel05-4d-phasen.html#sec-detektor-duell"
HINWEIS = "<!-- Automatisch erzeugt von scripts/detektor-einbetten.py aus _src/detektor/. Nicht von Hand ändern. -->\n"

modell = json.load(open(f"{QUELLE}/modell.json", encoding="utf-8"))
spiel = json.load(open(f"{QUELLE}/spieltexte.json", encoding="utf-8"))
kz = json.load(open(f"{QUELLE}/kennzahlen.json", encoding="utf-8"))

# 1 Spieldatei: JSON-Block ersetzen (ohne Trainings-IDs, die das Spiel nicht braucht)
m = {k: v for k, v in modell.items() if not k.startswith(("train_ids", "halt_ids"))}
daten = {"modell": m, "runde1": spiel["runde1"], "runde2": spiel["runde2"], "kennzahlen": kz}
roh = json.dumps(daten, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
html_pfad = "interactions/detektor-duell.html"
html = open(html_pfad, encoding="utf-8").read()
html, n = re.subn(r'(<script type="application/json" id="detektor-daten">).*?(</script>)',
                  lambda mm: mm.group(1) + roh + mm.group(2), html, flags=re.S)
assert n == 1
open(html_pfad, "w", encoding="utf-8").write(html)


def pz(x):
    return f"{round(100 * x)} %"


def de(x):
    return str(x)


# 2 Einordnung (zwei Sätze, online und Druck)
ka, mp, co = kz["ki_aktuell"], kz["mensch_persuade"], kz["college_mensch"]
einordnung = (HINWEIS +
    f"Der Lehr-Detektor erkannte {ka['als_ki']} von {ka['n']} aktuellen KI-Texten, die er beim Lernen nicht gesehen hatte, "
    f"hielt aber {pz(mp['anteil_als_ki'])} der Schüleraufsätze und {pz(co['anteil_als_ki'])} der muttersprachlichen "
    f"College-Bewerbungsaufsätze für KI. Solche Fehlalarme sind der Schaden, den @devito2025 beschreiben: Unter Verdacht "
    f"gerät, wer anders schreibt als die Texte, an denen ein Detektor gelernt hat [@liang2023detectors].\n")
open("_einbau/detektor-duell-einordnung.qmd", "w", encoding="utf-8").write(einordnung)

# 3 Online-Einbau
online = """<!-- Online-Einbau „Detektor-Duell“ (Kap. 5). Druckfassung: _einbau/detektor-duell-druck.qmd -->
::: {.content-visible when-format="html"}
```{=html}
<iframe loading="lazy" id="detektor-duell" src="interactions/detektor-duell.html" width="100%" height="1100px" frameborder="0" title="Selbsttest: Detektor-Duell – erkennen Sie besser als ein Detektor, ob ein Text von einem Menschen oder einer KI stammt?"></iframe>
<script>
/* Das Spiel meldet seine Inhaltshöhe; so bleibt unter dem Rahmen kein Leerraum und im Rahmen kein Scrollbalken. */
window.addEventListener("message", function (e) {
  var d = e.data; if (!d || d.typ !== "rahmen-hoehe" || d.id !== "detektor-duell") return;
  var f = document.getElementById(d.id); if (f && d.h > 200) f.style.height = (d.h + 2) + "px";
});
</script>
```
:::
"""
open("_einbau/detektor-duell-online.qmd", "w", encoding="utf-8").write(online)

# 4 Druckkasten (zwei Auszüge, Reihenfolge nicht verraten) und Abbildung
def md_escape(t):
    return t.replace("\\", "\\\\").replace("*", "\\*").replace("_", "\\_").replace("[", "\\[").replace("]", "\\]").replace("$", "\\$").replace("#", "\\#").replace("<", "\\<")

druck = spiel["druck"]
zeilen = []
for buchst, e in zip("AB", druck):
    zeilen.append(f"**Auszug {buchst}** · Aufgabe: {e['aufgabe_de']}\n\n"
                  f"> [{md_escape(e['text'])}]{{lang=\"en\"}}\n\n"
                  f"Mensch $\\square$ KI $\\square$ · Sicherheit: $\\square$ 1 geraten $\\square$ 2 $\\square$ 3 sicher\n")
g = kz
fig_cap = (f"Wen der Lehr-Detektor für KI hält: Anteil der Texte mit Urteil „KI“ (Schwelle 50 %), nur Texte, die er beim Lernen "
           f"nicht gesehen hat. Helle Balken: Texte von Menschen, jedes Urteil „KI“ ist ein Fehlalarm; dunkle Balken: KI-Texte, "
           f"jedes Urteil „KI“ ist ein Treffer. Schüleraufsätze aus PERSUADE 2.0 [@crossley2024persuade], ältere KI-Texte (GPT-3) sowie "
           f"TOEFL- und College-Aufsätze aus @liang2023detectors, aktuelle KI-Texte von Claude Opus 5.5 (eigene Läufe, "
           f"02.11.2026). Eigene Berechnung.")
druck_qmd = (HINWEIS + """::: {.content-visible unless-format="html"}
```{=latex}
\\par\\vspace{0pt plus 14\\baselineskip}\\pagebreak[3]\\vspace{0pt plus -14\\baselineskip}
```

::: {.callout-tip title="Mensch oder KI? Zwei Auszüge zum Selbsttest"}
Ein Auszug stammt aus einer Erörterung einer Schülerin oder eines Schülers der Klassen 11–12 in den USA, der andere von einem aktuellen Sprachmodell, das dieselbe Aufgabe bekam. Kreuzen Sie an, wer welchen Text schrieb, und wie sicher Sie sind. Die Rechtschreibung ist unverändert.

""" + "\n".join(zeilen) + f"""
Die Auflösung mit Herkunft und Detektorwert steht in den Lösungshinweisen (@sec-loesungshinweise). Das Duell gegen den Detektor mit zwölf Auszügen gibt es in der Online-Version: <{URL}>

![](images/qr/qr-detektor-duell.png){{width="16%"}}
:::

![{fig_cap}](images/druck/detektor-duell.svg){{#fig-detektor-duell width="100%"}}
:::
""")
open("_einbau/detektor-duell-druck.qmd", "w", encoding="utf-8").write(druck_qmd)

gruppen = [("Schüleraufsätze\n(PERSUADE 2.0)", g["mensch_persuade"], "Mensch"),
           ("College-Aufsätze\n(Muttersprache)", g["college_mensch"], "Mensch"),
           ("TOEFL-Aufsätze\n(Fremdsprache)", g["toefl_mensch"], "Mensch"),
           ("ältere KI-Texte\n(GPT-3)", g["ki_alt"], "KI"),
           ("aktuelle KI-Texte\n(Claude Opus 5.5)", g["ki_aktuell"], "KI")]
plt.rcParams.update({"font.family": "sans-serif", "font.sans-serif": ["TeX Gyre Heros", "Helvetica", "Arial", "DejaVu Sans"],
                     "svg.fonttype": "none", "font.size": 9})
fig, ax = plt.subplots(figsize=(6.3, 2.9))
ys = list(range(len(gruppen)))[::-1]
for y, (name, w, art) in zip(ys, gruppen):
    v = 100 * w["anteil_als_ki"]
    ax.barh(y, v, color="#bdbdbd" if art == "Mensch" else "#404040", hatch=None if art == "Mensch" else "", edgecolor="#000000", linewidth=0.6, height=0.62)
    ax.text(v + 1.5, y, f"{round(v)} %  ({w['als_ki']} von {w['n']})", va="center", fontsize=8.5)
ax.set_yticks(ys, [n for n, _, _ in gruppen])
ax.set_xlim(0, 110); ax.set_xticks([0, 25, 50, 75, 100], ["0 %", "25 %", "50 %", "75 %", "100 %"])
ax.axvline(50, color="#000000", linestyle=(0, (3, 3)), linewidth=0.6)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
ax.set_xlabel("als KI eingestuft")
fig.tight_layout()
fig.savefig("images/druck/detektor-duell.svg", metadata={"Date": None})

# 5 Lösung für Anhang B
z = []
for buchst, e in zip("AB", druck):
    her = ("ein Schüleraufsatz aus PERSUADE 2.0 (" + e["quelle"].split(", ")[1] + ")" if e["herkunft"] == "Mensch"
           else "ein KI-Text von Claude Opus 5.5 (Prompt-Variante " + e["quelle"][-1] + ", Lauf vom 02.11.2026)")
    urteil = "KI" if e["p_ki"] >= 0.5 else "Mensch"
    richtig = "richtig" if urteil == e["herkunft"] else "falsch"
    z.append(f"**Auszug {buchst}: {e['herkunft']}.** Der Text ist {her}. Der Lehr-Detektor gibt {pz(e['p_ki'])} für KI an und urteilt damit „{urteil}“ ({richtig}).")
loesung = (HINWEIS + "### Detektor-Duell (Kapitel 5) {#loes-detektor-duell .unnumbered}\n\n" + "\n\n".join(z) +
           "\n\nWer beide richtig hatte, sollte sich die eigene Sicherheit ansehen: Bei zwei Auszügen trifft auch Raten in einem von vier Fällen beide. "
           "Belastbarer ist das Duell mit acht Auszügen in der Online-Fassung.\n")
open("_einbau/detektor-duell-loesung.qmd", "w", encoding="utf-8").write(loesung)
print("eingebettet:", len(roh), "Zeichen;", "Einordnung:", einordnung.splitlines()[1][:160])
