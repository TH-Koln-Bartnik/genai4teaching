-- druck-satz.lua
-- Satzkorrekturen nur für das PDF (LaTeX); in HTML und EPUB tut der Filter nichts.
-- Läuft vor den Quarto-Filtern (steht in _quarto.yml in der allgemeinen Filterliste).
--
-- 1. Tabellenzellen: TeX trennt das erste Wort eines Absatzes nicht. In schmalen
--    Spalten ragten deshalb Wörter wie „Prozessorientierung“ in die Nachbarspalte.
--    Ein \hspace{0pt} am Zellanfang hebt die Sperre auf.
-- 2. Kästen (Callouts) mit einem Prompt als Codeblock (Anhang A): Der Codeblock
--    ist im PDF selbst ein Kasten und kann im äußeren Kasten nicht über die
--    Seite umbrechen. Im Druck steht deshalb eine fette Titelzeile, darunter der
--    Inhalt ohne äußeren Kasten; der Codeblock darf umbrechen.
-- 3. Abbildungsverzeichnis: Ohne Kurztitel setzt LaTeX die ganze Bildunterschrift
--    samt URL ins Verzeichnis. Fehlt fig-scap, wird der Kopf der Bildunterschrift
--    (bis zum ersten Doppelpunkt, Punkt oder Semikolon) als Kurztitel gesetzt.
--    Ein fig-scap="..." im Quelltext hat Vorrang.
--    Bei Abbildungen aus Teilbildern (layout) endet der Verzeichniseintrag am
--    ersten Doppelpunkt der Bildunterschrift.

if not quarto.doc.is_format("latex") then
  return {}
end

local function zelle(cell)
  local erster = cell.contents[1]
  if erster and (erster.t == "Plain" or erster.t == "Para") then
    erster.content:insert(1, pandoc.RawInline("latex", "\\hspace{0pt}"))
  end
  return cell
end

local function zeilen(rows)
  for _, row in ipairs(rows) do
    for i, cell in ipairs(row.cells) do
      row.cells[i] = zelle(cell)
    end
  end
end

local function tabelle(tbl)
  zeilen(tbl.head.rows)
  for _, body in ipairs(tbl.bodies) do
    zeilen(body.head)
    zeilen(body.body)
  end
  zeilen(tbl.foot.rows)
  return tbl
end

-- Quarto wandelt Callouts und Abbildungen schon vor den eigenen Filtern in
-- eigene Knoten um; deshalb die Handler Callout und FloatRefTarget.
local function kasten(el)
  local inhalt = quarto.utils.as_blocks(el.content)
  local hat_prompt = false
  for _, b in ipairs(inhalt) do
    -- nur Codeblöcke mit Sprache werden im PDF als eigener Kasten gesetzt
    if b.t == "CodeBlock" and #b.classes > 0 then hat_prompt = true end
  end
  if not hat_prompt then return nil end   -- alle anderen Kästen bleiben Kästen
  local aus = pandoc.List()
  local titel = el.title and pandoc.utils.stringify(el.title) or ""
  if titel ~= "" then
    aus:insert(pandoc.RawBlock("latex", "\\needspace{4\\baselineskip}"))
    aus:insert(pandoc.Para({ pandoc.Strong({ pandoc.Str(titel) }) }))
  end
  aus:extend(inhalt)
  return aus
end

local MIN = 20   -- kürzere Köpfe („Beispiel“) reichen bis zum nächsten Satzzeichen

local function kurztitel(text)
  local pos = 1
  while true do
    local a, b = text:find("[:%.;] ", pos)
    if not a then return nil end
    if a - 1 >= MIN then
      return text:sub(1, a - 1)
    end
    pos = b + 1
  end
end

local function abbildung(float)
  if float.type ~= "Figure" then return nil end
  local scap = float.attributes["fig-scap"]
  if float.attributes["layout"] or float.attributes["layout-ncol"] then
    -- Abbildungen aus mehreren Teilbildern: Quarto reicht dort keinen Kurztitel an
    -- \caption weiter. Der Teil der Bildunterschrift nach dem ersten Doppelpunkt
    -- steht deshalb in \druckrest{...}; im Abbildungsverzeichnis verschluckt das
    -- Makro sein Argument (include/preamble.tex).
    if not float.caption_long then return nil end
    local inl = quarto.utils.as_inlines(float.caption_long)
    local laenge = 0
    for i, x in ipairs(inl) do
      local txt = pandoc.utils.stringify(x)
      laenge = laenge + #txt
      if x.t == "Str" and txt:sub(-1) == ":" and laenge >= MIN and i < #inl then
        x.text = txt:sub(1, -2)
        inl:insert(i + 1, pandoc.RawInline("latex", "\\druckrest{:"))
        inl:insert(pandoc.RawInline("latex", "}"))
        float.caption_long = pandoc.Plain(inl)
        return float
      end
    end
    return nil
  end
  if scap or not float.caption_long then return nil end
  local text = pandoc.utils.stringify(float.caption_long)
  if #text < 90 then return nil end          -- kurze Unterschriften bleiben ganz
  local kurz = kurztitel(text)
  if not kurz or kurz:find("@") or kurz:find("%$") or #kurz > 140 then return nil end
  float.attributes["fig-scap"] = kurz
  return float
end

return {
  { Table = tabelle, Callout = kasten, FloatRefTarget = abbildung },
}
