
UI.registerHelper("site", function(){

  headers.ready(function() {
      //console.log(headers.get());
  });
  var headersReady = headers.ready();

  if (headersReady) {
    var host =  headers.get('host');
    var host = String(host).replace(/^www\./,'');
    Session.set("domain", host);
    var domain = Session.get("domain");
    var theSite = Site.findOne({'domain': domain});

    if (theSite) {
      var theme = theSite.siteTheme;
      Session.set("theme", theme);
      var title = theSite.siteTitle;
      document.title = title;
      return theSite;
    }
  }
});


UI.registerHelper("siteTheme", function(){
  return Session.get('theme');
 });


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
