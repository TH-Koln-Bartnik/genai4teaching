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
-- 3. Kurztitel und Fußnoten (seit 14.11.2026): Abbildungen und Tabellen tragen einen
--    Kurztitel als Unterschrift; Beschreibung, Quelle und Legende stehen in einer
--    Markdown-Fußnote daran. Pandoc setzt dann den Kurztitel ins Verzeichnis und die
--    Fußnote unter die Seite. Zwei Fälle brauchen Hilfe:
--    a) Gleitobjekte in Kästen: Quarto macht die Fußnote dort selbst zu \footnotemark;
--       include/preamble.tex hält das Zeichen aus den Verzeichnissen heraus.
--    b) Abbildungen mit Fußnote stehen fest an ihrer Textstelle (fig-pos H), damit
--       Bild und Fußnote auf derselben Seite bleiben.
--    Kein fig-scap außerhalb von Kästen setzen: Dann verschluckt LaTeX den Fußnotentext.

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

local function hat_note(inl)
  local ja = false
  pandoc.walk_inline(pandoc.Span(inl), { Note = function() ja = true end })
  return ja
end

-- b) Abbildungen mit Fußnote festhalten
local function abbildung(float)
  if float.type ~= "Figure" or not float.caption_long then return nil end
  if not hat_note(quarto.utils.as_inlines(float.caption_long)) then return nil end
  float.attributes["fig-pos"] = "H"
  return float
end

return {
  { Table = tabelle, Callout = kasten, FloatRefTarget = abbildung },
}
