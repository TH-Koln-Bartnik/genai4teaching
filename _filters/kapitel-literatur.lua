--[[
kapitel-literatur.lua – Literaturverzeichnis am Ende jedes Kapitels (PDF und EPUB)

Online (HTML) rendert Quarto jedes Kapitel als eigene Seite und setzt das
Literaturverzeichnis von selbst ans Seitenende. Für PDF und EPUB fügt Quarto
dagegen alle Kapitel zu einem einzigen Dokument zusammen und ruft citeproc
einmal auf; das ergäbe ein einziges Verzeichnis am Buchende.

Dieser Filter ruft citeproc stattdessen je Kapitel (je Quelldatei, auch
Anhänge) auf und hängt dessen Quellen unter der Überschrift aus
`reference-section-title` (Ebene 2, ohne Nummer) an das Kapitelende.
Kapitel ohne Zitate bekommen kein Verzeichnis.

Kapitelgrenze ist die Markierung `<!-- quarto-file-metadata: … -->`, die Quarto
vor den Inhalt jeder Buchdatei setzt; die Kapitelüberschrift selbst steckt bei
den Hauptkapiteln in einem Div (Kapitelauftakt) und taugt nicht als Grenze.

Voraussetzungen im Format (s. _quarto.yml): `citeproc: false` und der Filter
in `filters` nach dem Eintrag `quarto`.

Damit Sprungmarken eindeutig bleiben, wenn eine Quelle in mehreren Kapiteln
zitiert wird, erhalten die Kennungen je Kapitel ein Suffix (ref-xyz-k3).
]]

local function is_file_marker (b)
  return b.t == 'RawBlock' and b.format == 'html'
    and b.text:match('^<!%-%- quarto%-file%-metadata:') ~= nil
end

local function has_cites(blocks)
  local found = false
  pandoc.Blocks(blocks):walk{ Cite = function () found = true end }
  return found
end

local function suffix_ids(blocks, sfx)
  return pandoc.Blocks(blocks):walk{
    Link = function (l)
      if l.target:match('^#ref%-') then
        l.target = l.target .. sfx
        return l
      end
    end,
    Div = function (d)
      if d.identifier == 'refs' or d.identifier:match('^ref%-') then
        d.identifier = d.identifier .. sfx
        return d
      end
    end,
  }
end

function Pandoc (doc)
  local title = doc.meta['reference-section-title']

  -- Metadaten für die Kapitel-Läufe: ohne Abschnittstitel (setzen wir selbst)
  -- und ohne nocite (sonst stünde jede nocite-Quelle in jedem Kapitel).
  local meta = {}
  for k, v in pairs(doc.meta) do meta[k] = v end
  meta['reference-section-title'] = nil
  meta['nocite'] = nil
  meta = pandoc.Meta(meta)

  local out = pandoc.Blocks{}
  local body = nil      -- Blöcke des laufenden Kapitels (ab der Dateimarkierung)
  local n = 0

  local function flush ()
    if body == nil then return end
    if has_cites(body) then
      n = n + 1
      -- Rohe Steuerbefehle am Kapitelende bleiben hinter dem Verzeichnis.
      local tail = pandoc.Blocks{}
      while #body > 0 and body[#body].t == 'RawBlock' do
        tail:insert(1, body:remove())
      end
      if title then
        body:insert(pandoc.Header(2, pandoc.utils.type(title) == 'Inlines'
          and title or pandoc.Inlines(pandoc.utils.stringify(title)),
          pandoc.Attr('', {'unnumbered'})))
      end
      body:insert(pandoc.Div({}, pandoc.Attr('refs')))
      local res = pandoc.utils.citeproc(pandoc.Pandoc(body, meta))
      out:extend(suffix_ids(res.blocks, '-k' .. n))
      out:extend(tail)
    else
      out:extend(body)
    end
    body = nil
  end

  for _, b in ipairs(doc.blocks) do
    if is_file_marker(b) then
      flush()
      body = pandoc.Blocks{ b }
    elseif b.t == 'Div' and b.classes:includes('quarto-book-part') then
      -- Teil-Trenner (z. B. „Anhang“ mit \appendix) schließt das Kapitel davor ab
      flush()
      out:insert(b)
    elseif body ~= nil then
      body:insert(b)
    else
      out:insert(b)
    end
  end
  flush()

  doc.blocks = out
  return doc
end
