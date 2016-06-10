Template.Layout0.onCreated(function() {
  var self = this;

  var sub = new SubsManager({
    // will be cached only 20 recently used subscriptions
    cacheLimit: 20,
    // any subscription will be expired after 5 minutes of inactivity
    expireIn: 5
  });
  // check to make sure headers are loaded
  var headersReady = headers.ready();

  if (headersReady) {

    // get url and strip http and www
    var getHost =  headers.get('host');

    var domain = String(getHost).replace(/^www\./,'');
    console.log('headersReady - var domain: ' + domain);
    // set domain in session
    Session.set("domain", domain);
    theDomain = new ReactiveVar(domain);
    // subscribe to site db
    console.log('ReactiveVar - domain: ' + theDomain);

  }
  self.autorun(function() {
    var domain = theDomain.get();
    console.log('autorun - var domain: ' + domain);
    sub.subscribe('site', domain);

    // find data based on session domain
    var theSite = Site.findOneFaster({'domain': domain});

    if (theSite) {
      console.log('site - found');

      // set theme session for theme function
      // set document title
      Session.set('selectedDocId', theSite._id);
      Session.set("theme", theSite.siteTheme);
      document.title = theSite.siteTitle;

      return theSite;
    }
  });
});

Template.Layout0.helpers({
  siteData: function () {
    var domain = theDomain.get();
    return Site.findOneFaster({'domain': domain});
  },
});
