# Change the HTML Class
siteTheme0 = f: ->
  $("html").removeClass "theme1"
  $("html").removeClass "theme2"
  $("html").removeClass "theme3"
  $("html").addClass "theme0"

siteTheme1 = f: ->
  $("html").removeClass "theme0"
  $("html").removeClass "theme2"
  $("html").removeClass "theme3"
  $("html").addClass "theme1"

siteTheme2 = f: ->
  $("html").removeClass "theme0"
  $("html").removeClass "theme1"
  $("html").removeClass "theme3"
  $("html").addClass "theme2"

siteTheme3 = f: ->
  $("html").removeClass "theme0"
  $("html").removeClass "theme1"
  $("html").removeClass "theme2"
  $("html").addClass "theme3"

siteTheme269 = f: ->
  $("html").removeClass "theme0"
  $("html").removeClass "theme1"
  $("html").removeClass "theme2"
  $("html").removeClass "theme3"
  $("html").addClass "theme269"


# Detect Session theme setting and run function
Deps.autorun (c) ->
  if Session.equals("theme", "1")
    siteTheme1.f()
  else if Session.equals("theme", "2")
    siteTheme2.f()
  else if Session.equals("theme", "3")
    siteTheme3.f()
  else if Session.equals("theme", "269")
    siteTheme269.f()
  else
    Session.set "theme", "0"
    siteTheme0.f()
