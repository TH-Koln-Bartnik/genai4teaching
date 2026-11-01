-- einschaetzung.lua: Kapitelauftakt nach Daft (Einschätzungen vorab, Auflösung im Text)
--
-- Quelltext am Kapitelanfang:
--
--   ::: kapitel-gliederung
--   :::                                  -> Druck: Liste der Abschnitte dieses Kapitels
--
--   ::: {.callout-note .ez-block title="Bevor Sie weiterlesen: …"}
--   ::: {.einschaetzung #ez-k1-1}
--   Aussage.
--
--   [Auflösung in @sec-…]{.ez-verweis}
--   :::
--   :::
--
-- Im Text, an der Stelle der Antwort:
--
--   ::: {.callout-tip .ez-pruefen title="Ihre Einschätzung prüfen"}
--   *„Aussage“* []{.ez-ihre data-ez="ez-k1-1"}
--
--   **Auflösung: …** Begründung.
--   :::
--
-- Online (HTML mit JavaScript) bleibt die Struktur erhalten; include/einschaetzung.html
-- setzt die Skala, speichert die Wahl im Browser und zeigt sie im Prüfkasten wieder an.
-- Die Gliederung entfällt online, weil die Seitenleiste sie schon zeigt.
-- Druck und EPUB: Aussagen nummeriert mit Skala 1–5 zum Ankreuzen, Verweis in Klammern,
-- leere Platzhalter entfallen.

local interaktiv = quarto.doc.is_format("html:js")

local function hat_klasse(el, k)
  return el.classes and el.classes:includes(k)
end

local SKALA = "stimme zu \u{2003} 1 \u{2002}\u{2013}\u{2002} 2 \u{2002}\u{2013}\u{2002} 3 \u{2002}\u{2013}\u{2002} 4 \u{2002}\u{2013}\u{2002} 5 \u{2003} stimme nicht zu"

local function setze_aussage(div, nummer)
  local neu = pandoc.List()
  local erster = true
  for _, b in ipairs(div.content) do
    if erster and (b.t == "Para" or b.t == "Plain") then
      local inl = pandoc.List({ pandoc.Strong({ pandoc.Str(tostring(nummer) .. ".") }), pandoc.Space() })
      inl:extend(b.content)
      neu:insert(pandoc.Para(inl))
      neu:insert(pandoc.Para({ pandoc.Emph({ pandoc.Str(SKALA) }) }))
      erster = false
    elseif b.t == "Para" or b.t == "Plain" then
      -- Verweis auf die Auflösung: in Klammern, klein
      local inl = pandoc.List()
      for _, x in ipairs(b.content) do
        if x.t == "Span" and hat_klasse(x, "ez-verweis") then
          inl:insert(pandoc.Str("("))
          inl:extend(x.content)
          inl:insert(pandoc.Str(")"))
        else
          inl:insert(x)
        end
      end
      neu:insert(pandoc.Para(inl))
    else
      neu:insert(b)
    end
  end
  return neu
end

local function nummeriere(bloecke)
  local nummer, inhalt, gefunden = 0, pandoc.List(), false
  for _, b in ipairs(bloecke) do
    if b.t == "Div" and hat_klasse(b, "einschaetzung") then
      nummer = nummer + 1
      gefunden = true
      inhalt:extend(setze_aussage(b, nummer))
    else
      inhalt:insert(b)
    end
  end
  return gefunden, inhalt
end

-- Leerer Platzhalter für die gespeicherte Wahl: nur online sinnvoll
local function Span(sp)
  if not interaktiv and hat_klasse(sp, "ez-ihre") then
    return pandoc.List()
  end
end

local function Callout(el)
  if interaktiv then return nil end
  local gefunden, inhalt = nummeriere(el.content)
  if gefunden then
    el.content = inhalt
    return el
  end
end

-- Kapitelgliederung: Abschnitte (Ebene 2) bis zur nächsten Kapitelüberschrift
local function text_von(inlines)
  return pandoc.utils.stringify(inlines)
end

local function Pandoc(doc)
  local bl = doc.blocks
  local i = 1
  while i <= #bl do
    local b = bl[i]
    if b.t == "Div" and hat_klasse(b, "kapitel-gliederung") then
      if interaktiv or quarto.doc.is_format("html") then
        bl:remove(i)
        i = i - 1
      else
        local punkte = pandoc.List()
        for j = i + 1, #bl do
          local h = bl[j]
          if h.t == "Header" and h.level == 1 then break end
          if h.t == "Header" and h.level == 2 and not hat_klasse(h, "unnumbered") then
            punkte:insert({ pandoc.Plain({ pandoc.Str(text_von(h.content)) }) })
          end
        end
        if #punkte > 0 then
          bl[i] = pandoc.Div({
            pandoc.Para({ pandoc.Strong({ pandoc.Str("In diesem Kapitel") }) }),
            pandoc.BulletList(punkte)
          }, pandoc.Attr("", { "kapitel-gliederung" }))
        else
          bl:remove(i)
          i = i - 1
        end
      end
    end
    i = i + 1
  end
  return doc
end

return {
  { Span = Span, Callout = Callout },
  { Pandoc = Pandoc },
}
