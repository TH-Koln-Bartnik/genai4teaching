-- schluesselbegriffe.lua: Kasten „Schlüsselbegriffe“ am Kapitelende
--
-- Quelltext (Schablone und Regeln: notes/schluesselbegriffe.md):
--
--   ::: {.callout-note .schluesselbegriffe title="Schlüsselbegriffe"}
--   ::: sb-begriffe
--   ::: {.sb-begriff begriff="k1-leitplanke"}
--   Leitplanke (*guardrail*)                      <- erster Absatz: Begriff
--
--   Musterantwort in ein, zwei Sätzen.            <- weitere Absätze: Musterantwort (nur online)
--   :::
--   :::
--
--   ::: {.sb-spiel modus="fall" kapitel="1"}      <- fall | paare | stapel (koerbe="A|B") | luecke | reihenfolge
--   ::: {.sb-aufgabe loesung="k1-leitplanke" ablenker="k1-harness k1-anleitung"}
--   Szene als ein Absatz.
--
--   ::: sb-herkunft
--   Herkunft: … (@sec-…).
--   :::
--
--   ::: sb-begruendung
--   Begründung in ein, zwei Sätzen.
--   :::
--   :::
--   :::
--
--   ::: {.sb-wiederkehr quellen="kapitel01.html" druck="k1-a k1-b"}   <- ab Kap. 2
--   :::
--   :::
--
-- Im Text steht an der Fundstelle jedes Begriffs ein Anker []{#sb-<begriff>}.
-- Im Anhang „Lösungshinweise“ steht je Kapitel ::: {.sb-loesungen kapitel="1"} :::.
--
-- Online (HTML mit JavaScript) bleibt alles stehen; include/schluesselbegriffe.html macht
-- daraus Erklärkarten mit Selbsteinstufung und die anklickbaren Übungen. Platzhalter für
-- Lösungen entfallen online.
-- Druck und EPUB: Begriffsliste mit Seitenzahl (PDF: \pageref, EPUB: Link zur Fundstelle),
-- Übung als Papierübung (Tabelle mit Leerspalte, Lückensätze, Schritte zum Nummerieren),
-- Lösungen mit Begründung im Anhang „Lösungshinweise“. Musterantworten entfallen.
--
-- Zwei Durchläufe: Der erste sammelt Begriffe und Lösungen des ganzen Buchs (PDF und EPUB
-- sind ein einziges Dokument), der zweite setzt Kästen und Lösungsplatzhalter.

local interaktiv = quarto.doc.is_format("html:js")
local latex = quarto.doc.is_format("latex")

local begriffe = {}    -- id -> Inlines des Begriffs
local loesungen = {}   -- kapitel -> Liste von Blöcken (eine Lösung je Aufgabe)

local function hat_klasse(el, k)
  return el.classes and el.classes:includes(k)
end

local function text(s)
  local inl = pandoc.List()
  for wort in s:gmatch("%S+") do
    if #inl > 0 then inl:insert(pandoc.Space()) end
    inl:insert(pandoc.Str(wort))
  end
  return inl
end

local function teile(s)
  local t = {}
  for w in (s or ""):gmatch("%S+") do table.insert(t, w) end
  return t
end

local function erster_absatz(div)
  for _, b in ipairs(div.content) do
    if b.t == "Para" or b.t == "Plain" then return b.content end
  end
  return pandoc.List()
end

local function kind(div, klasse)
  for _, b in ipairs(div.content) do
    if b.t == "Div" and hat_klasse(b, klasse) then return b end
  end
end

local function etikett(id)
  if begriffe[id] then return begriffe[id]:clone() end
  return text(id)
end

local function verweis_anhang()
  return pandoc.Cite({ pandoc.Str("@sec-loesungshinweise") },
    { pandoc.Citation("sec-loesungshinweise", "NormalCitation") })
end

-- Seitenzahl (PDF) oder Link zur Fundstelle (EPUB)
local function fundstelle(id)
  if latex then
    return pandoc.List({ pandoc.RawInline("latex", "\\dotfill\\,S.~\\pageref{sb-" .. id .. "}") })
  end
  return pandoc.List({ pandoc.Str(" "), pandoc.Str("–"), pandoc.Space(),
    pandoc.Link(text("zur Fundstelle"), "#sb-" .. id) })
end

-- Szenentext ohne Herkunft und Begründung; Lücken als Strich
local function aufgabentext(a)
  local bl = pandoc.List()
  for _, b in ipairs(a.content) do
    if b.t == "Para" or b.t == "Plain" then
      bl:insert(pandoc.Plain(b.content))
    end
  end
  return pandoc.Blocks(bl):walk({
    Span = function(sp)
      if hat_klasse(sp, "sb-luecke") then
        if latex then return pandoc.RawInline("latex", "\\rule{3.5cm}{0.4pt}") end
        return pandoc.Str("__________")
      end
    end
  })
end

local function herkunft(a)
  local h = kind(a, "sb-herkunft")
  if not h then return pandoc.List() end
  return pandoc.List({ pandoc.Plain({ pandoc.Emph(erster_absatz(h)) }) })
end

local function begruendung(a)
  local h = kind(a, "sb-begruendung")
  if not h then return pandoc.List() end
  return erster_absatz(h)
end

-- feste Mischung für den Druck: nach Text sortiert, ungleich der Lösung, solange möglich
local function druckreihe(n, items)
  local idx = {}
  for i = 1, n do idx[i] = i end
  table.sort(idx, function(x, y)
    return pandoc.utils.stringify(items[x]) < pandoc.utils.stringify(items[y])
  end)
  local gleich = true
  for i = 1, n do if idx[i] ~= i then gleich = false end end
  if gleich and n > 1 then idx[1], idx[2] = idx[2], idx[1] end
  return idx
end

-- ---------- Durchlauf 1: sammeln ----------

local function sammle_spiel(spiel)
  local kap = spiel.attributes["kapitel"]
  if not kap or loesungen[kap] then return end
  local modus = spiel.attributes["modus"] or "fall"
  local items = pandoc.List()
  for _, a in ipairs(spiel.content) do
    if a.t == "Div" and hat_klasse(a, "sb-aufgabe") then
      local inl = pandoc.List()
      if modus == "reihenfolge" then
        for _, b in ipairs(a.content) do
          if b.t == "OrderedList" then
            for k, item in ipairs(b.content) do
              if k > 1 then inl:extend({ pandoc.Space(), pandoc.Str("→"), pandoc.Space() }) end
              inl:extend(pandoc.utils.blocks_to_inlines(item))
            end
          end
        end
      elseif modus == "stapel" then
        inl:extend(text(a.attributes["loesung"] or ""))
      else
        inl:insert(pandoc.Strong(etikett(a.attributes["loesung"] or "")))
      end
      local beg = begruendung(a)
      if #beg > 0 then
        inl:insert(pandoc.Str("."))
        inl:insert(pandoc.Space())
        inl:extend(beg)
      end
      items:insert({ pandoc.Plain(inl) })
    end
  end
  loesungen[kap] = { modus = modus, items = items }
end

local function sammle(div)
  if hat_klasse(div, "sb-begriff") and div.attributes["begriff"] then
    begriffe[div.attributes["begriff"]] = erster_absatz(div):clone()
  end
end

local function sammle_bloecke(bloecke)
  pandoc.Blocks(bloecke):walk({ Div = function(d) sammle(d) end })
  pandoc.Blocks(bloecke):walk({ Div = function(d)
    if hat_klasse(d, "sb-spiel") then sammle_spiel(d) end
  end })
end

-- ---------- Durchlauf 2: Druck und EPUB setzen ----------

local ANWEISUNG = {
  fall = "Tragen Sie zu jeder Szene den passenden Begriff aus der Liste ein.",
  paare = "Kreuzen Sie an, zu welchem der beiden Begriffe der Satz passt.",
  stapel = "Kreuzen Sie an, in welchen Stapel jede Karte gehört.",
  luecke = "Tragen Sie den fehlenden Begriff ein.",
  reihenfolge = "Nummerieren Sie die Schritte in der richtigen Reihenfolge.",
}

local function tabelle(kopf, zeilen, breiten)
  local aligns, koepfe = {}, {}
  for i, h in ipairs(kopf) do
    aligns[i] = pandoc.AlignDefault
    koepfe[i] = { pandoc.Plain(text(h)) }
  end
  return pandoc.utils.from_simple_table(pandoc.SimpleTable({}, aligns, breiten, koepfe, zeilen))
end

local function setze_begriffe(div)
  local punkte = pandoc.List()
  for _, b in ipairs(div.content) do
    if b.t == "Div" and hat_klasse(b, "sb-begriff") then
      local inl = erster_absatz(b):clone()
      inl:extend(fundstelle(b.attributes["begriff"]))
      punkte:insert({ pandoc.Plain(inl) })
    end
  end
  local hinweis = latex
    and "Erklären Sie jeden Begriff in zwei, drei Sätzen in eigenen Worten; die Seitenzahl führt zur Stelle, an der er eingeführt wird."
    or "Erklären Sie jeden Begriff in zwei, drei Sätzen in eigenen Worten; der Link führt zur Stelle, an der er eingeführt wird."
  return pandoc.List({ pandoc.Para({ pandoc.Emph(text(hinweis)) }), pandoc.BulletList(punkte) })
end

local function setze_spiel(spiel)
  local modus = spiel.attributes["modus"] or "fall"
  local aufgaben = pandoc.List()
  for _, a in ipairs(spiel.content) do
    if a.t == "Div" and hat_klasse(a, "sb-aufgabe") then aufgaben:insert(a) end
  end
  local kopfzeile = pandoc.List({ pandoc.Strong(text("Übung.")), pandoc.Space() })
  kopfzeile:extend(text(ANWEISUNG[modus] or ANWEISUNG.fall))
  kopfzeile:extend({ pandoc.Space(), pandoc.Str("Lösungen:"), pandoc.Space(), verweis_anhang(), pandoc.Str(".") })
  local out = pandoc.List({ pandoc.Para(kopfzeile) })

  if modus == "fall" or modus == "paare" then
    local zeilen = {}
    for i, a in ipairs(aufgaben) do
      local zelle = aufgabentext(a)
      if modus == "paare" then
        local opt = pandoc.List({ pandoc.Str("(") })
        local ids = { a.attributes["loesung"] }
        for _, x in ipairs(teile(a.attributes["ablenker"])) do table.insert(ids, x) end
        table.sort(ids)
        for k, x in ipairs(ids) do
          if k > 1 then opt:extend({ pandoc.Space(), pandoc.Str("oder"), pandoc.Space() }) end
          opt:extend(etikett(x))
        end
        opt:insert(pandoc.Str(")"))
        zelle:insert(pandoc.Plain(opt))
      end
      zelle:extend(herkunft(a))
      zeilen[i] = { { pandoc.Plain({ pandoc.Str(tostring(i)) }) }, zelle, {} }
    end
    out:insert(tabelle({ "Nr.", "Szene", "Begriff" }, zeilen, { 0.05, 0.65, 0.30 }))

  elseif modus == "stapel" then
    local koerbe = {}
    for k in (spiel.attributes["koerbe"] or ""):gmatch("[^|]+") do table.insert(koerbe, (k:gsub("^%s+", ""):gsub("%s+$", ""))) end
    local kopf, breiten = { "Nr.", "Karte" }, { 0.06, 0.94 - 0.13 * #koerbe }
    for _, k in ipairs(koerbe) do table.insert(kopf, k); table.insert(breiten, 0.13) end
    local zeilen = {}
    for i, a in ipairs(aufgaben) do
      local z = { { pandoc.Plain({ pandoc.Str(tostring(i)) }) }, aufgabentext(a) }
      for _ = 1, #koerbe do table.insert(z, {}) end
      zeilen[i] = z
    end
    out:insert(tabelle(kopf, zeilen, breiten))

  elseif modus == "luecke" then
    local items = pandoc.List()
    for _, a in ipairs(aufgaben) do items:insert(aufgabentext(a)) end
    out:insert(pandoc.OrderedList(items))

  elseif modus == "reihenfolge" then
    for _, a in ipairs(aufgaben) do
      out:extend(aufgabentext(a))
      for _, b in ipairs(a.content) do
        if b.t == "OrderedList" then
          local schritte = b.content
          local reihe = druckreihe(#schritte, schritte)
          local items = pandoc.List()
          for _, k in ipairs(reihe) do
            local inl = pandoc.List({ pandoc.Str("___"), pandoc.Space() })
            inl:extend(pandoc.utils.blocks_to_inlines(schritte[k]))
            items:insert({ pandoc.Plain(inl) })
          end
          out:insert(pandoc.BulletList(items))
        end
      end
    end
  end
  return out
end

local function setze_wiederkehr(div)
  local ids = teile(div.attributes["druck"])
  if #ids == 0 then return pandoc.List() end
  local punkte = pandoc.List()
  for _, id in ipairs(ids) do
    local inl = etikett(id)
    inl:extend(fundstelle(id))
    punkte:insert({ pandoc.Plain(inl) })
  end
  return pandoc.List({
    pandoc.Para({ pandoc.Strong(text("Wiederholung aus früheren Kapiteln.")), pandoc.Space(),
      pandoc.Emph(text("Erklären Sie diese Begriffe noch einmal in eigenen Worten, bevor Sie nachschlagen.")) }),
    pandoc.BulletList(punkte),
  })
end

local function setze_loesungen(div)
  local l = loesungen[div.attributes["kapitel"] or ""]
  if not l then return pandoc.List() end
  local titel = "Übung zu den Schlüsselbegriffen"
  return pandoc.List({
    pandoc.Para({ pandoc.Strong(text(titel)) }),
    pandoc.OrderedList(l.items),
  })
end

local function setze(div)
  if hat_klasse(div, "sb-loesungen") then
    if interaktiv then return pandoc.List() end
    return setze_loesungen(div)
  end
  if interaktiv then return nil end
  if hat_klasse(div, "sb-begriffe") then return setze_begriffe(div) end
  if hat_klasse(div, "sb-spiel") then return setze_spiel(div) end
  if hat_klasse(div, "sb-wiederkehr") then return setze_wiederkehr(div) end
end

local function setze_bloecke(bloecke)
  return pandoc.Blocks(bloecke):walk({ Div = setze })
end

return {
  {
    Callout = function(el) sammle_bloecke(el.content) end,
    Div = function(d) sammle(d); if hat_klasse(d, "sb-spiel") then sammle_spiel(d) end end,
  },
  {
    Callout = function(el)
      if interaktiv then return nil end
      local vorher = pandoc.utils.stringify(el.content)
      el.content = setze_bloecke(el.content)
      if pandoc.utils.stringify(el.content) ~= vorher then return el end
    end,
    Div = setze,
  },
}
