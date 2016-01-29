Template.MasterLayout.onCreated(function() {
  var self = this;
  self.autorun(function() {

    self.subscribe('site');
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
    //// no data found, must return null for iron-router
    //return null;

  });
});

Template.MasterLayout.helpers({
  appReady: function () {
    return Template.instance().subscriptionsReady();
  }
});
