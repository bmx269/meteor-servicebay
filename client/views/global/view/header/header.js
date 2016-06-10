Template.Header.helpers({
  siteData: function() {
    var siteId = Session.get("selectedDocId");
    console.log('header data')
    return Site.findOneFaster({'_id': siteId},{fields: {'siteTitle': 1}});
  },
});

Template.HomeHeader.helpers({
  siteData: function() {
    var siteId = Session.get("selectedDocId");
    console.log('header data')
    return Site.findOneFaster({'_id': siteId},{fields: {'siteTitle': 1, 'homeSplash' : 1}});
  },
});
