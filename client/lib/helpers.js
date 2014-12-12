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
  //Session.set("theme", "None");
  //document.title = "ServiceBay";
  return null;
};

// helper function for template data
UI.registerHelper("site", function(){
  return siteData();
});

UI.registerHelper("editSite", function(){
  return editSiteData();
});


editSiteData = function(){

  // check to make sure headers are loaded
  var currentSiteId = Session.get("selectedDocId");
  var headersReady = headers.ready();

  if (headersReady) {
    // get url and strip http and www

    // find data based on session domain
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

// helper to set active state on route
UI.registerHelper('activeRouteClass', function () {
  /* routes names */
  var args = Array.prototype.slice.call(arguments, 0);
  args.pop();

  var active = _.any(args, function(name) {
    return Router.current() && Router.current().route.getName() === name
  });

  return active && 'active';
});


scrollUp = function() {
  $('body,html').scrollTop(0);
},

scrollPage = function() {
  /**
   * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
   * @see http://flesler.demos.com/jquery/scrollTo/
   * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
   */

    // The default axis is 'y', but in this demo, I want to scroll both
    // You can modify any default like this
  $.localScroll.defaults.axis = 'y';

  // Scroll initially if there's a hash (#something) in the url
  $.localScroll.hash({
    target: 'html', // Could be a selector or a jQuery object too.
    queue:true,
    duration:1500
  });

  /**
   * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
   * also affect the >> and << links. I want every link in the page to scroll.
   */
  $.localScroll({
    target: 'html', // could be a selector or a jQuery object too.
    queue:false,
    duration:1000,
    offset:-20,
    hash:true,
    onBefore:function( e, anchor, $target ){
      // The 'this' is the settings object, can be modified
    },
    onAfter:function( anchor, settings ){
      // The 'this' contains the scrolled element (#content)
    }
  });
};