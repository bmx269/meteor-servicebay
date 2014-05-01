
siteData = function(){

  // check to make sure headers are loaded
  var headersReady = headers.ready();

  if (headersReady) {
    // get url and strip http and www
    var getHost =  headers.get('host'),
        domain = String(getHost).replace(/^www\./,'');

    // set domain in session
    Session.set("domain", domain);

    // find data based on session domain
    var theSite = Site.findOne({'domain': domain});

    if (theSite) {
      // set theme session for theme function
      // set document title
      Session.set("theme", theSite.siteTheme);
      document.title = theSite.siteTitle;

      return theSite;
    }
  }
  // no data found, must return null for iron-router
  console.log('no data found');
  return null;
};


// helper function for template data
UI.registerHelper("site", function(){
  return siteData();
});



UI.registerHelper("siteTheme", function(){
  return Session.get('theme');
});

// helper to set active state on route
UI.registerHelper('activeRouteClass', function () {
  /* routes names */
  var args = Array.prototype.slice.call(arguments, 0),
      active;
  args.pop();
  active = _.any(args, function (name) {
    return Router.current().route.name === name;
  });
  if (active) {
    return 'active';
  }
  return '';
});
