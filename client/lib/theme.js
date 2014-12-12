// Detect Session theme setting and run function
Deps.autorun(function(c) {
  // Set vars.
  var sessionTheme = Session.get('theme');

  // Ensuring theme gets set if not present.
  if (App.isBlank(sessionTheme)) {
    Session.set('theme', App.variables.themeDefault);
  }

  // Set active theme.
  App.themeActive(sessionTheme);
});

