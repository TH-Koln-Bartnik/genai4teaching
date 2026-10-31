-- mc-frage.lua: Einstiegsfragen als Multiple-Choice-Fragen
--
-- Quelltext (in einer Callout-Box mit Klasse .mc-block):
--
--   ::: mc-frage
--   Problem als kurzer Absatz.
--
--   - Antwortoption
--   - [Richtige Antwortoption]{.richtig}
--   - Antwortoption
--
--   ::: mc-rueckmeldung
--   Auflösung mit Verweis (@sec-…).
--   :::
--   :::
--
-- Online (HTML mit JavaScript) bleibt die Struktur erhalten; include/mc-frage.html
-- macht daraus anklickbare Fragen, eine nach der anderen.
-- Druck und EPUB: Fragen werden je Kasten nummeriert, Optionen als a), b), c)
-- gesetzt, die Markierung der richtigen Option und die Auflösung entfallen,
-- damit der Abrufversuch vor dem Nachlesen kommt.

local interaktiv = quarto.doc.is_format("html:js")

local function hat_klasse(el, k)
  return el.classes and el.classes:includes(k)
end

-- Entfernt die Markierung .richtig, behält den Text.
local entmarke = {
  Span = function(sp)
    if hat_klasse(sp, "richtig") then
      return sp.content
    end
  end
}

local function setze_frage(div, nummer)
  local neu = pandoc.List()
  local erster_absatz = true
  for _, b in ipairs(div.content) do
    if b.t == "Div" and hat_klasse(b, "mc-rueckmeldung") then
      -- im Druck weglassen
    elseif b.t == "BulletList" then
      local items = pandoc.List()
      for _, item in ipairs(b.content) do
        items:insert(pandoc.walk_block(pandoc.Div(item), entmarke).content)
      end
      neu:insert(pandoc.OrderedList(items, pandoc.ListAttributes(1, "LowerAlpha", "OneParen")))
    elseif erster_absatz and (b.t == "Para" or b.t == "Plain") then
      local inl = pandoc.List({ pandoc.Strong({ pandoc.Str(tostring(nummer) .. ".") }), pandoc.Space() })
      inl:extend(b.content)
      neu:insert(pandoc.Para(inl))
      erster_absatz = false
    else
      neu:insert(b)
    end
  end
  return neu
end

-- Callouts sind in Quarto eigene AST-Knoten; die Fragen stehen in ihrem Inhalt.
local function nummeriere(bloecke)
  local nummer, inhalt, gefunden = 0, pandoc.List(), false
  for _, b in ipairs(bloecke) do
    if b.t == "Div" and hat_klasse(b, "mc-frage") then
      nummer = nummer + 1
      gefunden = true
      inhalt:extend(setze_frage(b, nummer))
    else
      inhalt:insert(b)
    end
  end
  return gefunden, inhalt
end

function Callout(el)
  if interaktiv then return nil end
  local gefunden, inhalt = nummeriere(el.content)
  if gefunden then
    el.content = inhalt
    return el
  end
end

-- Fallback für Fragen außerhalb eines Callouts
function Div(el)
  if interaktiv or not hat_klasse(el, "mc-block") then return nil end
  local gefunden, inhalt = nummeriere(el.content)
  if gefunden then
    el.content = inhalt
    return el
  end
end
