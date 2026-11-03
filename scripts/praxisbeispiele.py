"""Erzeugt praxisbeispiele.qmd: alle Praxisbeispiele des Buchs auf einer Online-Seite.

Laiensicht: Die Seite ist ein Schaufenster. Jedes Beispiel (Film, Spiel, Animation, Rechner)
steht hier ohne den Kapiteltext; ein Link führt zur Stelle im Buch, die es erklärt.
Neue Beispiele trägt man unten in BEISPIELE ein und ruft im Repo-Wurzelordner auf:
    python3 scripts/praxisbeispiele.py
Die Seite gehört nur zur Online-Fassung (_quarto-web.yml), nicht zum Druck.
"""

GRUPPEN = [
    ("filme", "Filme und Erklärvideos",
     "Die meisten Filme entstanden als Programmtext: Ein Sprachmodell schrieb Szenen, Daten und Prüfungen, ein Werkzeug rechnete den Film Bild für Bild aus. Der Teaser zur Fallstudie ist ein KI-generiertes Video, die Musik des Lernsongs stammt von Suno."),
    ("spiele", "Spiele und Selbsttests",
     "In jedem Spiel geben Sie zuerst eine Vermutung ab; die Auflösung wirkt am stärksten dort, wo Sie sich sicher waren und falsch lagen."),
    ("widgets", "Durchspiele, Rechner und Widgets",
     "Hier verändern Sie selbst Zahlen, Rollen und Arbeitsweisen und sehen sofort, was daraus folgt."),
    ("animationen", "Animationen zum Durchklicken",
     "Jede Animation baut ein Bild Schritt für Schritt auf und fragt vorher nach Ihrer Vorhersage."),
    ("diagramme", "Diagramme mit echten Daten",
     "Drei Diagramme zeigen, wie schnell sich Fähigkeiten und Preise der Modelle verschieben."),
    ("galerien", "Galerie aus Kapitel 1",
     "Die Galerie der Einleitung zeigt fünf Formate nebeneinander, darunter eine Präsentationsfolie nach Regelwerk und die Szenario-Karte eines KI-Rollenspiels."),
]

# (Gruppe, Titel, Satz, Art, Quelle, Höhe in px, iframe-id, Link ins Buch, Linktext)
# Art: "iframe" (Seite aus interactions/), "video" (MP4; Quelle = Dateiname in interactions/media/),
#      "link" (nur Verweis, etwa auf OJS-Rechner, die im Kapitel selbst laufen)
BEISPIELE = [
    ("filme", "Das nächste Token in neun Genres",
     "Ein Film von gut drei Minuten erklärt in neun Stilen, vom Film noir bis zum Märchen, wie ein Sprachmodell das nächste Token wählt, und fragt vor dem Start nach Ihrer Vorhersage.",
     "iframe", "genrefilm-player.html?film=kap02-token-genres", 900, "genrefilm-kap02-token-genres",
     "kapitel02-grundlagen.qmd#vid-naechstes-token-genres", "Kapitel 2, Tokens, Zahlen, Aufmerksamkeit"),
    ("filme", "Stützräder: wie die Prompting-Ratschläge kamen und gingen",
     "Ein Film von gut zweieinhalb Minuten erzählt in neun Genres, woher die Zeilen alter Prompts stammen und warum viele heute entfallen; an drei Stellen hält er an und fragt nach.",
     "iframe", "genrefilm-player.html?film=kap02-stuetzraeder", 900, "genrefilm-kap02-stuetzraeder",
     "kapitel02-grundlagen.qmd#vid-stuetzraeder", "Kapitel 2, Prompts in der Lehre"),
    ("filme", "Every Forecast Is Wrong: ein Lernsong zu fünf Prognoseverfahren",
     "Fünf Verfahren an den Kaffeebechern eines erfundenen Campus-Cafés, gesungen auf Englisch, mit Rechenpausen und mitlaufendem Diagramm (5:15).",
     "video", "lernsong-forecast", 0, "pb-lernsong",
     "kapitel07-artefakte.qmd#sec-bsp-lernsong-forecast", "Kapitel 7, Lernsongs"),
    ("filme", "Teaser zur Fallstudie Backhaus Kaya",
     "Fünf Sekunden KI-generierter Film ohne Ton eröffnen eine Fallstudie: Aylin Kaya nachts in der Backstube; Bäckerei und Figuren sind erfunden.",
     "video", "kaya-teaser", 0, "pb-kaya-teaser",
     "kapitel07-artefakte.qmd#sec-bsp-fallstudie", "Kapitel 7, Fallstudien generieren"),
    ("filme", "Der Aufgaben-Mix der Lehrenden ändert sich",
     "Vier Aufgaben wandern zur KI, fünf schrumpfen, fünf neue kommen hinzu: Automatisierung, Augmentierung und neue Aufgaben als Kachelbild (60 s, ohne Ton).",
     "video", "kap04-acemoglu-restrepo", 0, "pb-acemoglu-restrepo",
     "kapitel03-automation.qmd#vid-acemoglu-restrepo", "Kapitel 3, Was sind unsere Aufgaben?"),
    ("filme", "Making-of: vom Auftrag zum fertigen Video",
     "Auftrag, Datendatei, Code, automatische Prüfung, Sichtprüfung, Rendern, rekonstruiert aus dem Versionsprotokoll einer echten Arbeitssitzung (59 s, ohne Ton).",
     "video", "kap04-making-of", 0, "pb-making-of",
     "kapitel06-rollen.qmd#sec-coding", "Kapitel 6, Jeder kann jetzt programmieren"),
    ("filme", "Dieselbe Herleitung, zwei Werkzeuge",
     "Die optimale Bestellmenge links in Manim, rechts in HyperFrames, beide Fassungen von Claude programmiert (30 s, ohne Ton).",
     "video", "kap04-eoq-vergleich", 0, "pb-eoq-vergleich",
     "kapitel06-rollen.qmd#vid-eoq-vergleich", "Kapitel 6, Jeder kann jetzt programmieren"),
    ("filme", "Ablauf des Physik-Tutors PS2 Pal",
     "Lehrende legen Regeln und Musterlösungen im Prompt fest, Studierende arbeiten zu Hause Schritt für Schritt mit dem Tutor (44 s, ohne Ton).",
     "video", "kap04-ps2pal-ablauf", 0, "pb-ps2pal-ablauf",
     "kapitel06-rollen.qmd#sec-complex-tutors", "Kapitel 6, Komplexer Physik-Tutor"),

    ("spiele", "Höher oder tiefer: Wofür Menschen KI tatsächlich nutzen",
     "Welche von zwei Arbeitsaufgaben kommt in Gesprächen mit Claude häufiger vor? Die Daten stammen aus dem Anthropic Economic Index.",
     "iframe", "hoeher-tiefer-ki-aufgaben.html", 900, "pb-hoeher-tiefer",
     "kapitel01-einleitung.qmd#sec-spiel-ki-aufgaben", "Kapitel 1, Höher oder tiefer"),
    ("spiele", "Die Bibliothek der Prompts",
     "Ein begehbarer Raum mit 22 Regalen, eines je Berufsgruppe: Sie schätzen zuerst, wie breit das Regal der Bildung ist; dann zeigen Daten des Anthropic Economic Index, welche Aufgaben darin stehen.",
     "iframe", "bibliothek-der-prompts.html", 1250, "pb-bibliothek",
     "kapitel03-automation.qmd#sec-bibliothek-prompts", "Kapitel 3, Was sind unsere Aufgaben?"),
    ("spiele", "Detektor-Duell: Mensch oder KI?",
     "Acht Auszüge aus Erörterungen, vier von Schülerinnen und Schülern, vier von einem Sprachmodell; erst urteilen Sie, dann ein kleiner Lehr-Detektor.",
     "iframe", "detektor-duell.html", 1100, "detektor-duell",
     "kapitel05-4d-phasen.qmd#sec-detektor-duell", "Kapitel 5, Selbsttest Detektor"),
    ("spiele", "Der Streich-Test: Was würden Sie heute streichen?",
     "Zehn Zeilen eines Prompts von 2024: Sie entscheiden, ob Sie sie streichen würden, und nennen Ihre Sicherheit.",
     "iframe", "streich-test-prompting.html", 1500, "streich-test",
     "kapitel02-grundlagen.qmd#sec-streichtest", "Kapitel 2, Streich-Test"),
    ("spiele", "Welche Grundbegriffe kennen Sie schon?",
     "Ein Zuordnungsspiel in zwei Stufen: Begriffe zu Definitionen, die zweite Stufe mit Agenten und einer Diagnoserunde.",
     "iframe", "llm-game-standalone.html", 700, "pb-lernspiel-grundbegriffe",
     "kapitel02-grundlagen.qmd#sec-definitionen", "Kapitel 2, Grundbegriffe"),
    ("spiele", "LLM, RAG oder Agent?",
     "Dieselbe Frage an drei Systeme: Das Spiel zeigt, warum ein Sprachmodell, ein Abruf eigener Quellen und ein Agent verschieden antworten.",
     "iframe", "llm-rag-agent-game.html", 700, "pb-lernspiel-rag-agent",
     "kapitel02-grundlagen.qmd#sec-patterns-usage", "Kapitel 2, Welches Setup"),
    ("spiele", "Agenten-Muster erkennen",
     "Beispielantworten den passenden Mustern zuordnen, von Werkzeugnutzung bis Planung.",
     "iframe", "llm-agent-patterns-matching.html", 760, "pb-agenten-muster",
     "kapitel02-grundlagen.qmd#sec-patterns-usage", "Kapitel 2, Welches Setup"),

    ("widgets", "Dieselbe Aufgabe in fünf Arbeitsweisen",
     "Vom Centaur bis zur dunklen Fabrik: Je mehr die KI übernimmt, desto weniger spricht der Mensch und desto mehr sprechen die Agenten miteinander.",
     "iframe", "ki-arbeitsweisen-durchspiel.html", 1500, "pb-arbeitsweisen-durchspiel",
     "kapitel03-automation.qmd#sec-arbeitsweisen", "Kapitel 3, Arbeitsweisen"),
    ("widgets", "Was ein Tutor-Bot im Semester kostet",
     "Tragen Sie Ihre Kursgröße ein: Von rund 8.800 US-$ im Januar 2025 fielen die Semesterkosten bis Juli 2026 auf rund 12 US-$.",
     "iframe", "tutor-kosten.html", 950, "pb-tutor-kosten",
     "kapitel05-4d-phasen.qmd#sec-capabilities", "Kapitel 5, Was die Modelle können"),
    ("widgets", "Linien-Widget: den Engpass finden",
     "Pizzalinie oder Brötchenlinie: Arbeitsschritte, Personal und Öfen verändern und Kapazität und Durchlaufzeit sofort ablesen (englisch).",
     "iframe", "line-widget.html", 1150, "pb-linien-widget",
     "kapitel07-artefakte.qmd#sec-bsp-widgets", "Kapitel 7, Interaktive Widgets"),
    ("widgets", "Little's Law zählen",
     "Ankunft, Warteschlange, Bearbeitung, Abgang: Die Animation zählt mit, bis Bestand, Durchsatz und Durchlaufzeit zusammenpassen.",
     "iframe", "littles-law-animation.html", 420, "pb-littles-law",
     "kapitel06-rollen.qmd#sec-widget-littles-law", "Kapitel 6, Little's Law selbst nachrechnen"),
    ("widgets", "Welches Modell für welche Aufgabe?",
     "Drei Fragen zu Daten, Aufgabe und Häufigkeit führen zu Modellklasse und Preisstufe.",
     "iframe", "modellwahl-baum.html", 820, "pb-modellwahl",
     "kapitel02-grundlagen.qmd#sec-model-choice", "Kapitel 2, Welches Modell?"),
    ("widgets", "Der 4D-Kreislauf",
     "Zwei Schleifen, vier Kompetenzen; wählen Sie eine Rolle der KI, um zu sehen, wo der Kreislauf am ehesten reißt.",
     "iframe", "4d-kreislauf.html", 760, "pb-4d-kreislauf",
     "kapitel05-4d-phasen.qmd#sec-4d", "Kapitel 5, Das 4D-Modell"),
    ("widgets", "Den Bullwhip-Effekt zerlegen",
     "Ein Rechner direkt im Kapitel: Wie sich Bestellschwankungen entlang einer Lieferkette aufschaukeln.",
     "link", "", 0, "",
     "kapitel06-rollen.qmd#sec-widget-bullwhip", "Kapitel 6, Bullwhip-Effekt"),

    ("animationen", "Vom Satz zum nächsten Wort",
     "Tokens mit echten Nummern, Aufmerksamkeit, Wahrscheinlichkeiten: Wie „Bank“ durch „Baum“ in die Nachbarschaft von „Park“ rückt.",
     "iframe", "vom-satz-zum-naechsten-wort.html", 860, "pb-satz-wort",
     "kapitel02-grundlagen.qmd#sec-gpt-bedeutung", "Kapitel 2, Tokens, Zahlen, Aufmerksamkeit"),
    ("animationen", "Ein Zwischenschritt, der nie im Text steht",
     "Aus „Dallas“ wird intern „Texas“ und daraus „Austin“; ersetzen Forschende „Texas“ durch „California“, antwortet das Modell „Sacramento“.",
     "iframe", "zwischenschritt-texas.html", 820, "pb-zwischenschritt",
     "kapitel02-grundlagen.qmd#sec-blick-ins-modell", "Kapitel 2, Blick ins Modell"),
    ("animationen", "Seit 2022 ist die Schicht um das Modell gewachsen",
     "Werkzeuge, Gedächtnis und eine Arbeitsschleife legen sich als Harness um das Modell.",
     "iframe", "harness-schichten.html", 820, "pb-harness",
     "kapitel02-grundlagen.qmd#sec-harness", "Kapitel 2, Was sich seit 2022 geändert hat"),
    ("animationen", "Sechs Stufen der Selbstständigkeit",
     "Von der Handkorrektur ohne KI bis zum Agenten, der eine Aufgabe allein erledigt, mit Beispielen aus der Hochschullehre.",
     "iframe", "autonomiestufen.html", 860, "pb-autonomiestufen",
     "kapitel02-grundlagen.qmd#sec-harness", "Kapitel 2, Was sich seit 2022 geändert hat"),
    ("animationen", "Drei Labore, ein Bauplan",
     "Modell, Werkzeuge und eine Schleife darum: Google, OpenAI und Anthropic bauen ihre Agenten nach demselben Muster.",
     "iframe", "drei-labs-ein-bauplan.html", 900, "pb-drei-labs",
     "kapitel02-grundlagen.qmd#sec-harness", "Kapitel 2, Was sich seit 2022 geändert hat"),
    ("animationen", "Vom Chatbot zum Agenten",
     "Gewachsen ist vor allem der Spielraum des Modells über den Ablauf, vom festen Weg bis zur Schleife aus Denken, Handeln und Beobachten.",
     "iframe", "chatbot-zu-agent.html", 1050, "pb-chatbot-agent",
     "kapitel02-grundlagen.qmd#sec-patterns-usage", "Kapitel 2, Welches Setup"),
    ("animationen", "Ein Skill lädt sein Wissen erst, wenn es gebraucht wird",
     "Erst Name und Kurzbeschreibung, dann die Anleitung, Zusatzdateien nur bei Bedarf, wie Inhaltsverzeichnis, Kapitel und Anhang eines Handbuchs.",
     "iframe", "skills-handbuch.html", 820, "pb-skills",
     "kapitel02-grundlagen.qmd#sec-agenten-praxis", "Kapitel 2, Agenten in der Praxis"),
    ("animationen", "Viele Agenten machen den Menschen zum Engpass",
     "Acht Aufgaben gehen gleichzeitig an die Agenten; Kugel A wartet am längsten, und zwar auf den Menschen.",
     "iframe", "agenten-engpass.html", 1000, "agenten-engpass",
     "kapitel02-grundlagen.qmd#sec-agenten-praxis", "Kapitel 2, Agenten in der Praxis"),
    ("animationen", "Vom Spickzettel zum prüfbaren Archiv",
     "Vier Stufen des Agenten-Gedächtnisses, von der Anleitungsdatei bis zum durchsuchbaren Ordner.",
     "iframe", "agenten-gedaechtnis.html", 620, "pb-agenten-gedaechtnis",
     "kapitel02-grundlagen.qmd#sec-agenten-gedaechtnis", "Kapitel 2, Gedächtnis"),
    ("animationen", "Die Sitzung schreibt alles mit, das Gedächtnis behält das Verdichtete",
     "Ein Statistik-Tutor holt am vierten Abend nur das Passende aus drei früheren Sitzungen zurück.",
     "iframe", "sitzung-und-gedaechtnis.html", 880, "pb-sitzung-gedaechtnis",
     "kapitel02-grundlagen.qmd#sec-agenten-gedaechtnis", "Kapitel 2, Gedächtnis"),
    ("animationen", "Zwei Skalierungsgesetze",
     "Modelle werden verlässlicher durch mehr Rechnen beim Training und durch mehr Nachdenken beim Antworten.",
     "iframe", "scaling-laws.html", 1460, "pb-scaling-laws",
     "kapitel05-4d-phasen.qmd#sec-capabilities", "Kapitel 5, Was die Modelle können"),

    ("diagramme", "KI-Agenten bewältigen immer längere Aufgaben",
     "Der Zeithorizont der Modelle von 2019 bis 2026 nach METR, mit Lehraufgaben ähnlicher Dauer zur Orientierung.",
     "iframe", "ki-entwicklung.html?zeige=zeithorizont", 1000, "pb-zeithorizont",
     "kapitel05-4d-phasen.qmd#sec-capabilities", "Kapitel 5, Was die Modelle können"),
    ("diagramme", "Expertenwissen wird 725-mal billiger",
     "Niedrigste Kosten je Frage, mit denen ein Modell 75 % des GPQA Diamond richtig beantwortet, Januar 2025 bis Juli 2026, nach Epoch AI.",
     "iframe", "ki-entwicklung.html?zeige=kosten", 1100, "pb-kosten",
     "kapitel05-4d-phasen.qmd#sec-capabilities", "Kapitel 5, Was die Modelle können"),
    ("diagramme", "Wer übernimmt welchen Arbeitsschritt?",
     "Das Schema der Arbeitsweisen von Centaur bis dunkle Fabrik als Diagramm zum Umschalten.",
     "iframe", "ki-entwicklung.html?zeige=arbeitsweisen", 820, "pb-arbeitsweisen-schema",
     "kapitel03-automation.qmd#sec-arbeitsweisen", "Kapitel 3, Arbeitsweisen"),

    ("galerien", "Fünf Formate, die 2026 mit KI entstehen",
     "Prozessanimation, Präsentationsfolie, Lernsong, Lernspiel und Rollenspiel zum Durchblättern.",
     "iframe", "galerie-kapitel01.html", 1100, "galerie-kapitel01",
     "kapitel01-einleitung.qmd#sec-einleitung", "Kapitel 1, Einleitung"),
]

KOPF = """# Praxisbeispiele im Überblick {{.unnumbered #sec-praxisbeispiele}}

<!-- Erzeugt von scripts/praxisbeispiele.py (Claude, 02.11.2026, Auftrag Roman). Nicht von Hand ändern, sondern das Skript anpassen. Nur online (_quarto-web.yml). -->

::: {{.content-visible when-format="html"}}
In diesem Buch stecken {anzahl} Beispiele, die Sie nicht lesen, sondern ansehen, hören und ausprobieren: Filme mit Haltepunkten, ein Lernsong, Spiele, Rechner und Animationen. Alle habe ich mit Sprachmodellen und anderen KI-Werkzeugen gebaut und geprüft, einige für meine eigene Lehre in Supply Management, die meisten für dieses Buch. Hier stehen sie ohne den Kapiteltext, nach Format geordnet; der Link unter jedem Beispiel führt zur Stelle im Buch, die erklärt, wofür es gedacht ist und was es nicht leistet. Wer so einsteigt, folgt der fünften Linie aus dem [Vorwort](index.qmd#sec-lernpfade) und kehrt von hier aus in die Kapitel zurück, die neugierig machen.

```{{=html}}
<script>
/* Eingebettete Seiten melden ihre Inhaltshöhe; so entsteht kein Scrollbalken im Rahmen. */
window.addEventListener("message", function (e) {{
  var d = e.data; if (!d || (d.typ !== "rahmen-hoehe" && d.typ !== "galerie-hoehe")) return;
  var f = document.getElementById(d.id); if (f && f.tagName === "IFRAME" && d.h > 200) f.style.height = (d.h + 2) + "px";
}});
</script>
```
"""


def eintrag(b):
    gruppe, titel, satz, art, quelle, hoehe, fid, link, linktext = b
    z = [f"### {titel} {{.unnumbered}}", "", satz, ""]
    if art == "iframe":
        z += ["```{=html}",
              f'<iframe loading="lazy" id="{fid}" src="interactions/{quelle}" width="100%" height="{hoehe}px" frameborder="0" title="{titel}"></iframe>',
              "```", ""]
    elif art == "video":
        poster = f"interactions/media/{quelle}-poster." + ("webp" if quelle in ("lernsong-forecast", "kaya-teaser") else "png")
        extra = ' loop muted' if quelle == "kaya-teaser" else ''
        z += ["```{=html}",
              f'<video id="{fid}" controls playsinline preload="none"{extra} style="width:100%;height:auto" poster="{poster}" title="{titel}">',
              f'  <source src="interactions/media/{quelle}.mp4" type="video/mp4">']
        if quelle == "lernsong-forecast":
            z.append('  <track kind="subtitles" srclang="en" label="English (lyrics)" src="interactions/media/lernsong-forecast.vtt" default>')
        z += ["</video>", "```", ""]
    z += [f"Im Buch: [{linktext}]({link})", ""]
    return z


def main():
    out = [KOPF.format(anzahl=len(BEISPIELE))]
    for gid, gtitel, gsatz in GRUPPEN:
        out += [f"## {gtitel} {{#sec-pb-{gid} .unnumbered}}", "", gsatz, ""]
        for b in BEISPIELE:
            if b[0] == gid:
                out += eintrag(b)
    out.append(":::")
    with open("praxisbeispiele.qmd", "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")
    print(f"praxisbeispiele.qmd: {len(BEISPIELE)} Beispiele in {len(GRUPPEN)} Gruppen")


if __name__ == "__main__":
    main()
