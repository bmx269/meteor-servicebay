siteData = function(){

  // check to make sure headers are loaded
  var headersReady = headers.ready();

  if (headersReady) {
    // get url and strip http and www
    var getHost =  headers.get('host');
    var domain = String(getHost).replace(/^www\./,'');

    // set domain in session
    Session.set("domain", domain);

    // find data based on session domain
    var theSite = Site.findOneFaster({'domain': domain});

    if (theSite) {
      console.log('siteData - found');
      // set theme session for theme function
      // set document title

      Session.set('selectedDocId', theSite._id);
      Session.set("theme", theSite.siteTheme);
      document.title = theSite.siteTitle;

      return theSite;
    }
    console.log('siteData - not found');

  }
  // no data found, must return null for iron-router
  return null;
};

// helper function for template data
//UI.registerHelper("site", function(){
//  return siteData();
//});

UI.registerHelper("editSite", function(){
  return editSiteData();
});


quickEditSiteData = function(){

  // check to make sure headers are loaded
  var currentSiteId = Session.get("selectedDocId");
  var headersReady = headers.ready();

  if (headersReady) {
    // get url and strip http and www

    // find data based on session domain
   // var theSite = Site.findOneFaster({'_id': currentSiteId},{fields: {'domain': 1, 'siteTitle': 1, 'siteTheme': 1}});
    var theSite = Site.findOneFaster({'_id': currentSiteId});

    if (theSite) {
      // set theme session for theme function
      // set document title
      //Session.set("theme", theSite.siteTheme);
      document.title = theSite.siteTitle;

      return theSite;
    }
  }
  // no data found, must return null for iron-router
  //console.log('no edit site found');
  Session.set("theme", "None");
  document.title = "ServiceBay - Beautifully Easy Auto Service Websites";
  return null;
};

editSiteData = function(){

  // check to make sure headers are loaded
  var currentSiteId = Session.get("selectedDocId");
  var headersReady = headers.ready();

  if (headersReady) {
    // get url and strip http and www

    // find data based on session domain
    // var theSite = Site.findOneFaster({'_id': currentSiteId},{fields: {'domain': 1, 'siteTitle': 1, 'siteTheme': 1}});
    var theSite = Site.findOneFaster({'_id': currentSiteId});

    if (theSite) {
      // set theme session for theme function
      // set document title
      Session.set("theme", theSite.siteTheme);
      document.title = theSite.siteTitle;

      return theSite;
    }
  }
  // no data found, must return null for iron-router
  //console.log('no edit site found');
  Session.set("theme", "None");
  document.title = "ServiceBay";
  return null;
};

//Meta.config({
//  options: {
//    title: "Default Title",
//    suffix: "Suffix",
//    namespace: "project"
//  }
//});
//
//Meta.setTitle("") => "Default Title"
//Meta.setTitle("test") => "test | Suffix"
//
//Meta.set("og:title", "Title");
//Meta.set("og:description", "Description");
//
//Meta.unset("og:title");
