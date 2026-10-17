-- br-linebreak.lua
-- Ersetzt rohe HTML-Zeilenumbrüche (<br>, <br/>, <br />) durch Pandoc-Zeilenumbrüche.
-- Grund: In Markdown-Tabellen (Pipe-Tabellen) kann man keinen Zeilenumbruch
-- innerhalb einer Zelle schreiben; die bisherigen <br>-Tags funktionieren nur im
-- HTML-Export. LaTeX verwirft sie, so dass Tabellenzellen im PDF zusammenlaufen.
-- Ein Pandoc-LineBreak wird in jedem Ausgabeformat korrekt gesetzt.
function RawInline(el)
  if el.format:match("html") and el.text:match("^<br%s*/?>$") then
    return pandoc.LineBreak()
  end
end
