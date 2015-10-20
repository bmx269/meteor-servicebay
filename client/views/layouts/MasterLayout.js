/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};

Template.MasterLayout.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var headersReady = headers.ready();

    if (headersReady) {
      // get url and strip http and www
      var getHost =  headers.get('host');
      var domain = String(getHost).replace(/^www\./,'');

      // set domain in session
      Session.set("domain", domain);

       //find data based on session domain
      var theSite = Site.findOneFaster({'domain': domain});

      if (theSite) {
        console.log('siteData - found');
        // set theme session for theme function
        // set document title

        Session.set('selectedDocId', theSite._id);
        Session.set("theme", theSite.siteTheme);
        document.title = theSite.siteTitle;

        //return theSite;
      };
    };
    var host = Session.get("domain");
    //console.log(host)
    self.subscribe('site', host)
  });
});

Template.MasterLayout.helpers({
  site: function() {
    var siteId = Session.get("selectedDocId")
    var site =  Site.findOneFaster({'_id': siteId});
    return site;
  }
});