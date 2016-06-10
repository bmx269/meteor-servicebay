Template.SiteHome.helpers({
  siteData: function() {
    var siteId = Session.get("selectedDocId");
    return Site.findOneFaster({'_id': siteId},{fields: {'siteTitle': 1, 'homeIntro' : 1}});
  },
});
