# CSS & SCSS für Quarto: Ein Tutorial von Grund auf
## Mit praktischer Anwendung: TH-Köln-Design für dein Lehrbuch

---

## Teil 1: Die Grundlagen verstehen

### Was ist CSS überhaupt?

**Analogie: CSS ist wie ein Innenarchitekt für Webseiten**

Stell dir vor, du baust ein Haus:
- **HTML** ist die Baustruktur: Wände, Türen, Fenster, Räume
- **CSS** ist der Innenarchitekt: Wandfarben, Möbelstile, Beleuchtung, Dekoration

Ohne CSS sieht jede Webseite aus wie ein rohes Betongebäude – funktional, aber schmucklos. CSS macht es wohnlich.

### Die Grundstruktur einer CSS-Regel

```css
selektor {
  eigenschaft: wert;
}
```

**In Alltagssprache übersetzt:**

```
"Für alle [DIESE ELEMENTE] gilt:
   setze [DIESE EIGENSCHAFT] auf [DIESEN WERT]"
```

**Konkretes Beispiel:**

```css
h1 {
  color: red;
  font-size: 32px;
}
```

Bedeutet: "Für alle Überschriften erster Ordnung gilt: Farbe rot, Schriftgröße 32 Pixel."

---

### Die wichtigsten Selektoren

| Selektor | Bedeutung | Analogie |
|----------|-----------|----------|
| `h1` | Alle `<h1>`-Elemente | "Alle Hauptüberschriften" |
| `.callout` | Alle Elemente mit Klasse "callout" | "Alle Elemente mit dem Etikett 'callout'" |
| `#header` | Das Element mit ID "header" | "Das EINE Element namens 'header'" |
| `a:hover` | Links, wenn Maus darüber | "Links im Moment des Drüberschwebens" |

**Analogie: Klassen sind wie Etiketten**

Stell dir einen Kleiderschrank vor:
- **Element-Selektoren** (`h1`, `p`, `a`) = "Alle Hemden", "Alle Hosen"
- **Klassen** (`.callout`) = Etiketten wie "Büro", "Freizeit", "Sport"
- **IDs** (`#header`) = Einzigartige Namensschilder (nur je einmal vergeben!)

Ein Hemd kann mehrere Etiketten haben: "Büro" UND "Sommer".
Genauso kann ein HTML-Element mehrere Klassen haben: `class="callout callout-note"`.

---

### Farben in CSS

Es gibt drei Hauptwege, Farben anzugeben:

```css
/* 1. Namen (nur für Standardfarben) */
color: red;
color: blue;

/* 2. Hex-Codes (das # vor 6 Zeichen) */
color: #c81e0f;    /* TH-Köln Rot */
color: #b43092;    /* TH-Köln Magenta */

/* 3. RGB-Werte */
color: rgb(200, 30, 15);

/* 4. RGBA (mit Transparenz) */
color: rgba(180, 48, 146, 0.5);  /* 50% transparent */
```

**Hex-Codes verstehen:**

`#c81e0f` besteht aus drei Paaren:
- `c8` = Rot-Anteil (200 von 255)
- `1e` = Grün-Anteil (30 von 255)  
- `0f` = Blau-Anteil (15 von 255)

Das ist wie Farbmischen: Viel Rot, wenig Grün, kaum Blau = kräftiges Rot.

---

### Das Box-Modell: Jedes Element ist eine Schachtel

**Analogie: Geschenkverpackung**

Jedes HTML-Element ist wie ein Geschenk in einer Schachtel:

```
┌────────────────────────────────────────┐
│             MARGIN (Abstand nach außen)│
│   ┌────────────────────────────────┐   │
│   │        BORDER (Rahmen)         │   │
│   │   ┌────────────────────────┐   │   │
│   │   │     PADDING (Polster)  │   │   │
│   │   │   ┌────────────────┐   │   │   │
│   │   │   │    CONTENT     │   │   │   │
│   │   │   │  (der Inhalt)  │   │   │   │
│   │   │   └────────────────┘   │   │   │
│   │   └────────────────────────┘   │   │
│   └────────────────────────────────┘   │
└────────────────────────────────────────┘
```

- **Content** = Das Geschenk selbst (der Text, das Bild)
- **Padding** = Das Seidenpapier drum herum (Innenabstand)
- **Border** = Die Schachtel/der Karton (Rahmen)
- **Margin** = Der Abstand zur nächsten Schachtel im Regal

**CSS dafür:**

```css
.callout {
  padding: 1rem;           /* 1rem Polster innen */
  border: 2px solid red;   /* 2 Pixel roter Rand */
  margin: 1rem 0;          /* 1rem oben/unten, 0 links/rechts */
}
```

---

### Einheiten: px, rem, em, %

| Einheit | Bedeutung | Wann benutzen? |
|---------|-----------|----------------|
| `px` | Pixel (absolut) | Feste Größen wie Rahmendicke |
| `rem` | Relativ zur Root-Schriftgröße | Abstände, die sich anpassen sollen |
| `em` | Relativ zur aktuellen Schriftgröße | Innerhalb eines Elements |
| `%` | Prozent des Elternelements | Breiten, flexible Layouts |

**Analogie:**
- `px` = Zentimeter auf dem Lineal (immer gleich)
- `rem` = "Eine Handbreit" (passt sich der Person an)
- `%` = "Die Hälfte des Raums" (relativ zum Kontext)

**Faustregel:** Benutze `rem` für die meisten Abstände – dann skaliert dein Design schön mit verschiedenen Bildschirmgrößen.

---

## Teil 2: SCSS – CSS mit Superkräften

### Was ist SCSS?

SCSS ist eine **Erweiterung von CSS**, die später automatisch in normales CSS umgewandelt wird. 

**Analogie: SCSS ist wie Kurzschrift**

Statt alles auszuschreiben, kannst du Abkürzungen und Hilfsmittel benutzen. Der "Compiler" (in Quarto automatisch) übersetzt es dann in die "Langform" (CSS), die der Browser versteht.

### SCSS-Superkraft 1: Variablen

**Problem in CSS:** Du schreibst `#c81e0f` (TH-Rot) an 20 Stellen. Dann soll die Farbe geändert werden → 20 Stellen ändern!

**Lösung in SCSS:**

```scss
// Variable definieren (mit $-Zeichen)
$th-red: #c81e0f;
$th-magenta: #b43092;

// Variable benutzen
a {
  color: $th-red;
}

.callout-title {
  border-left-color: $th-magenta;
}
```

**Analogie: Variablen sind wie Namensschilder**

Statt überall "Der große rote Ordner im dritten Regal links" zu schreiben, sagst du einmal:
> "Ab jetzt nenne ich das 'TH-Rot'"

Und danach schreibst du nur noch "TH-Rot".

---

### SCSS-Superkraft 2: Verschachtelung (Nesting)

**In normalem CSS:**

```css
.callout {
  padding: 1rem;
}

.callout .callout-title {
  font-weight: bold;
}

.callout .callout-title::after {
  content: "";
}
```

**In SCSS (verschachtelt):**

```scss
.callout {
  padding: 1rem;
  
  .callout-title {
    font-weight: bold;
    
    &::after {
      content: "";
    }
  }
}
```

**Analogie: Wie ein Organigramm**

Statt zu sagen:
> "Der Mitarbeiter in der Abteilung X der Firma Y..."

Sagst du:
> "Firma Y → Abteilung X → Mitarbeiter"

Das `&` steht für "das aktuelle Element" (hier: `.callout-title`).

---

### SCSS-Superkraft 3: Farb-Funktionen

```scss
$th-magenta: #b43092;

.callout {
  // Magenta mit 55% Deckkraft
  border-color: rgba($th-magenta, 0.55);
  
  // Magenta 20% heller
  background: lighten($th-magenta, 20%);
  
  // Magenta 10% dunkler
  &:hover {
    background: darken($th-magenta, 10%);
  }
}
```

**Analogie: Wie ein Farbmisch-Assistent**

Statt selbst den Hex-Code für "Magenta aber heller" auszurechnen, sagst du einfach "nimm Magenta und mach's heller".

---

### Quartos spezielle SCSS-Struktur

In Quarto müssen SCSS-Dateien in **zwei Bereiche** aufgeteilt sein:

```scss
/*-- scss:defaults --*/
// HIER: Variablen-Definitionen
$link-color: #c81e0f;
$body-bg: #ffffff;

/*-- scss:rules --*/
// HIER: Deine CSS-Regeln
body {
  background: $body-bg;
}
```

**Warum zwei Bereiche?**

Quarto verwendet Bootstrap als Basis-Framework. Die `defaults`-Sektion überschreibt Bootstrap-Variablen *bevor* Bootstrap kompiliert wird. Die `rules`-Sektion fügt deine Regeln *danach* hinzu.

**Analogie: Erst die Zutaten, dann das Rezept**

- `scss:defaults` = "Ich ändere die Grundzutaten" (z.B. "nimm Vollkornmehl statt Weißmehl")
- `scss:rules` = "Ich füge am Ende noch Dekoration hinzu" (z.B. "obendrauf noch Puderzucker")

---

## Teil 3: Dein aktuelles Setup verstehen

### Die Dateien in deinem `include`-Ordner

```
include/
├── light.scss       ← SCSS für Light-Mode
├── dark.scss        ← SCSS für Dark-Mode
├── booktem.css      ← Basis-Styles vom booktem-Template
├── style.css        ← Deine eigenen Anpassungen
├── callout-style.css← Styles für Callout-Boxen
├── webex.css        ← Styles für interaktive Elemente
├── webex.js         ← JavaScript für Interaktionen
├── script.js        ← Weitere JS-Funktionen
└── preamble.tex     ← LaTeX-Preamble für PDF
```

### Wie _quarto.yml die Dateien einbindet

```yaml
format:
   html:
    theme:
      light:
        - flatly              # Basis-Theme von Bootstrap
        - include/light.scss  # Deine SCSS-Anpassungen
      dark:
        - darkly              # Basis-Theme für Dark-Mode
        - include/dark.scss   # Deine SCSS-Anpassungen
    css: [include/booktem.css, include/style.css, include/webex.css]
```

**Reihenfolge ist wichtig!**

CSS wird von oben nach unten angewendet. Spätere Regeln überschreiben frühere.

```
flatly (Bootstrap-Basis)
   ↓
light.scss (deine SCSS-Variablen und Regeln)
   ↓
booktem.css
   ↓
style.css (deine finalen Anpassungen)
   ↓
webex.css
```

**Analogie: Wie Farbschichten beim Malen**

Zuerst die Grundierung, dann die Basisfarbe, dann Details. Jede Schicht kann darunter liegende Farben überdecken.

---

## Teil 4: Schritt-für-Schritt zum TH-Köln-Design

### Schritt 1: Die TH-Köln-Farben definieren

**Bearbeite `include/light.scss`:**

```scss
/*-- scss:defaults --*/

// ===== TH KÖLN FARBPALETTE =====
// Primärfarben
$th-red: #c81e0f;        // Das markante TH-Rot
$th-magenta: #b43092;    // Magenta für Akzente
$th-orange: #ea5a00;     // Orange (nur sparsam!)

// Neutrale Farben
$ink: #111111;           // Fast-Schwarz für Text
$paper: #ffffff;         // Reines Weiß für Hintergrund
$gray-100: #f5f5f7;      // Sehr helles Grau (Codeblöcke)
$gray-200: #e6e6ea;      // Helles Grau (Rahmen)
$gray-500: #6b6b73;      // Mittleres Grau (Captions)

// ===== BOOTSTRAP-VARIABLEN ÜBERSCHREIBEN =====
$link-color: $th-red;
$body-color: $ink;
$body-bg: $paper;

// Optionale weitere Bootstrap-Variablen:
// $primary: $th-red;
// $secondary: $th-magenta;


/*-- scss:rules --*/

// (Regeln kommen in Schritt 3)
```

**Was passiert hier?**

1. Du definierst deine Farbpalette als wiederverwendbare Variablen
2. Du überschreibst Bootstrap's Standard-Variablen mit deinen Farben
3. Bootstrap verwendet dann automatisch deine Farben überall

---

### Schritt 2: Die Grundstruktur-Styles

**Füge in `include/light.scss` unter `/*-- scss:rules --*/` hinzu:**

```scss
/*-- scss:rules --*/

// ===== GRUNDLEGENDE TYPOGRAFIE =====

body {
  color: $ink;
  background: $paper;
}

// Links: TH-Rot, bei Hover etwas dunkler
a {
  color: $th-red;
  text-decoration: none;
  
  &:hover {
    color: darken($th-red, 10%);
    text-decoration: underline;
  }
  
  &:visited {
    color: $th-magenta;  // Besuchte Links in Magenta
  }
}

// Überschriften: Klar und dunkel
h1, h2, h3, h4 {
  color: $ink;
}

// Dezente Linie unter H2 (wie im TH-Design)
h2::after {
  content: "";
  display: block;
  margin-top: 0.3rem;
  width: 100%;
  border-bottom: 2px solid rgba($th-magenta, 0.35);
}
```

**Erklärung des `h2::after`-Tricks:**

- `::after` ist ein "Pseudo-Element" – ein unsichtbares Element, das CSS automatisch *nach* dem h2 einfügt
- `content: ""` = Es hat keinen Text, ist aber da
- Du gibst ihm einen unteren Rand = Eine Linie erscheint unter der Überschrift

**Analogie:** Es ist wie ein unsichtbarer Stift, der automatisch nach jeder H2-Überschrift eine Linie zeichnet.

---

### Schritt 3: Callout-Boxen im TH-Design

**Füge weiter in `include/light.scss` hinzu:**

```scss
// ===== CALLOUT-BOXEN =====
// Dezent: Weißer Hintergrund, farbiger linker Rand

.callout {
  background: $paper;
  border: 1px solid $gray-200;
  border-left: 4px solid $th-magenta;  // Markanter linker Rand
  border-radius: 0;  // Keine runden Ecken (cleaner Look)
  
  .callout-header {
    background: rgba($gray-100, 0.5);
    border-bottom: 1px solid $gray-200;
  }
  
  .callout-title {
    color: $ink;
    font-weight: 600;
  }
}

// Verschiedene Callout-Typen mit verschiedenen Farben
.callout-note {
  border-left-color: $th-magenta;
}

.callout-tip {
  border-left-color: $th-red;
}

.callout-warning {
  border-left-color: $th-orange;  // Hier darf Orange!
}

.callout-important {
  border-left-color: $th-red;
}
```

**Design-Prinzip dahinter:**

Statt bunte Flächen (die "zukleistern") nur **Akzentlinien**. Das ist typisch für modernes Corporate Design: Viel Weißraum, klare Struktur, gezielte Farbakzente.

---

### Schritt 4: Codeblöcke und Tabellen

```scss
// ===== CODEBLÖCKE =====
pre, pre code {
  background: $gray-100;
  border: 1px solid $gray-200;
  border-radius: 4px;
}

// ===== TABELLEN =====
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
  border: 1px solid $gray-200;
}

thead th {
  background: $gray-100;
  border-bottom: 2px solid rgba($th-magenta, 0.55);
  padding: 0.6rem;
  text-align: left;
  font-weight: 600;
}

tbody td {
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid $gray-200;
}

// Zebra-Streifen (jede zweite Zeile)
tbody tr:nth-child(even) {
  background: rgba($gray-100, 0.45);
}
```

**Was macht `nth-child(even)`?**

Es wählt jedes **gerade** Kind-Element aus (2., 4., 6., ...).
- `nth-child(odd)` = ungerade (1., 3., 5., ...)
- `nth-child(3n)` = jedes dritte

**Analogie:** Wie beim Abzählen im Sportunterricht: "Du, du nicht, du, du nicht..."

---

### Schritt 5: Abbildungen mit Rahmen

```scss
// ===== ABBILDUNGEN =====
.quarto-figure, figure {
  padding: 0.5rem;
  border: 1px solid rgba($th-magenta, 0.4);
  background: $paper;
  margin: 1rem 0;
}

.quarto-figure figcaption, figure figcaption {
  color: $gray-500;
  font-size: 0.9em;
  margin-top: 0.5rem;
  font-style: italic;
}
```

---

### Schritt 6: Dark Mode anpassen

**Bearbeite `include/dark.scss`:**

```scss
/*-- scss:defaults --*/

// TH-Farben bleiben gleich
$th-red: #c81e0f;
$th-magenta: #b43092;
$th-orange: #ea5a00;

// Aber: Invertierte Basis-Farben
$ink: #e8e8e8;           // Heller Text
$paper: #1a1a2e;         // Dunkler Hintergrund
$gray-100: #2d2d44;      // Dunkles Grau
$gray-200: #3d3d5c;      // Etwas heller
$gray-500: #9999aa;      // Mittleres Grau

$link-color: lighten($th-red, 15%);  // Links heller für Kontrast
$body-color: $ink;
$body-bg: $paper;
$code-color: #bb8acf;


/*-- scss:rules --*/

// Die gleichen Regeln wie im Light-Mode,
// aber mit den dunklen Variablen-Werten

.callout {
  background: rgba($paper, 0.5);
  border: 1px solid $gray-200;
  border-left: 4px solid $th-magenta;
}

// ... (restliche Regeln analog anpassen)

// Dark/Light Mode Switching (behalten)
.dark-mode,
.dark-light .cell-output-display figure,
.dark-light .cell-output-display img
{ display: block; }

.light-mode,
.dark-light .cell-output-display + .cell-output-display figure ,
.dark-light .cell-output-display + .cell-output-display img
{ display: none; }
```

---

### Schritt 7: style.css aufräumen

Deine `style.css` enthält bereits einige gute Anpassungen. Hier eine bereinigte Version:

```css
/* style.css - Finale Anpassungen (nach SCSS/Bootstrap) */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

/* Überschriften mit TH-Schriftart */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}

/* Quarto-spezifische Fixes */
.inline-figure { border: none; }
.quarto-cover-image { display: block; }

/* Hanging Indent für Literaturverzeichnis */
div.hanging-indent { margin-left: -1.5em !important; }

/* Fix: Zeilenumbrüche in Callouts */
.callout pre,
.callout pre code {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.callout pre {
  overflow-x: hidden;
}
```

---

## Teil 5: Die Änderungen zusammengefasst

### Checkliste: Was du ändern musst

| Datei | Aktion |
|-------|--------|
| `include/light.scss` | TH-Farben + alle Styling-Regeln einfügen |
| `include/dark.scss` | Entsprechend anpassen (invertierte Farben) |
| `include/style.css` | Aufräumen, redundante Farbdefinitionen entfernen |
| `_quarto.yml` | Bleibt größtenteils gleich |
| `include/preamble.tex` | TH-Farben hinzufügen (für PDF) |

### Vollständige light.scss

Hier die komplette Datei zum Kopieren:

```scss
/*-- scss:defaults --*/

// ===== TH KÖLN FARBPALETTE =====
$th-red: #c81e0f;
$th-magenta: #b43092;
$th-orange: #ea5a00;

$ink: #111111;
$paper: #ffffff;
$gray-100: #f5f5f7;
$gray-200: #e6e6ea;
$gray-500: #6b6b73;

// Bootstrap-Variablen überschreiben
$link-color: $th-red;
$body-color: $ink;
$body-bg: $paper;


/*-- scss:rules --*/

// ===== LINKS =====
a {
  color: $th-red;
  
  &:hover {
    color: darken($th-red, 10%);
  }
  
  &:visited {
    color: $th-magenta;
  }
}

// Glossar-Links (speziell für dein Buch)
a.glossary, a:visited.glossary {
  color: $th-red !important;
}

// ===== ÜBERSCHRIFTEN =====
h1, h2, h3, h4 {
  color: $ink;
}

h2::after {
  content: "";
  display: block;
  margin-top: 0.3rem;
  border-bottom: 2px solid rgba($th-magenta, 0.35);
}

// ===== CALLOUTS =====
.callout {
  background: $paper;
  border: 1px solid $gray-200;
  border-left: 4px solid $th-magenta;
  border-radius: 0;
}

.callout-note { border-left-color: $th-magenta; }
.callout-tip { border-left-color: $th-red; }
.callout-warning { border-left-color: $th-orange; }
.callout-important { border-left-color: $th-red; }

// ===== CODEBLÖCKE =====
pre, pre code {
  background: $gray-100;
  border: 1px solid $gray-200;
}

// ===== TABELLEN =====
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid $gray-200;
}

thead th {
  background: $gray-100;
  border-bottom: 2px solid rgba($th-magenta, 0.55);
  padding: 0.6rem;
}

tbody td {
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid $gray-200;
}

tbody tr:nth-child(even) {
  background: rgba($gray-100, 0.45);
}

// ===== ABBILDUNGEN =====
.quarto-figure, figure {
  padding: 0.5rem;
  border: 1px solid rgba($th-magenta, 0.4);
  background: $paper;
}

figcaption {
  color: $gray-500;
  font-size: 0.9em;
  font-style: italic;
}

// ===== DARK/LIGHT MODE SWITCHING =====
.dark-mode,
.dark-light .cell-output-display figure,
.dark-light .cell-output-display img
{ display: none; }

.light-mode,
.dark-light .cell-output-display + .cell-output-display figure,
.dark-light .cell-output-display + .cell-output-display img
{ display: block; }

.terminal {
  border-color: #D6DADC;
}
```

---

## Teil 6: Tipps fürs Experimentieren

### Browser DevTools nutzen

1. Rechtsklick auf ein Element → "Untersuchen" / "Inspect"
2. Rechts siehst du alle CSS-Regeln, die auf das Element wirken
3. Du kannst Werte **live ändern** und siehst sofort das Ergebnis!

**Das ist wie ein Sandkasten:** Probiere Farben, Abstände, Rahmen aus – nichts wird gespeichert, bis du es in deine Datei übernimmst.

### Häufige Fehlerquellen

| Problem | Lösung |
|---------|--------|
| Änderung zeigt sich nicht | Browser-Cache leeren (Strg+F5) |
| SCSS-Fehler beim Rendern | Prüfe Klammern `{ }` und Semikolons `;` |
| Farbe wird nicht übernommen | Vielleicht `!important` nötig (aber sparsam!) |
| Variable undefined | Steht sie unter `/*-- scss:defaults --*/`? |

### Die "!important"-Regel

```css
a {
  color: red !important;  /* Überschreibt ALLES andere */
}
```

**Analogie:** `!important` ist wie mit dem Chef sprechen – überschreibt alle anderen Anweisungen. Aber benutze es sparsam! Sonst hast du bald überall `!important` und weißt nicht mehr, was was überschreibt.

---

## Zusammenfassung

| Konzept | Kurzerklärung |
|---------|---------------|
| **CSS** | Styling-Sprache für HTML |
| **SCSS** | CSS mit Variablen, Nesting, Funktionen |
| **Selektor** | "Wen style ich?" (z.B. `.callout`, `h2`) |
| **Eigenschaft** | "Was ändere ich?" (z.B. `color`, `border`) |
| **Variable** | Wiederverwendbarer Wert (z.B. `$th-red`) |
| **Nesting** | Verschachtelte Selektoren (spart Tippen) |
| **Box-Modell** | Content → Padding → Border → Margin |

Das TH-Köln-Design folgt einem klaren Prinzip:
> **Viel Weißraum + dunkle Typografie + gezielte Farbakzente (Rot/Magenta)**

Keine bunten Flächen, sondern elegante Linien und Rahmen.

---

*Erstellt für Roman Bartnik, TH Köln, Januar 2026*
