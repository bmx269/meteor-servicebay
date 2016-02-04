Template.Features.helpers({
  siteData: function() {
    var siteId = Session.get("selectedDocId");
    return Site.findOneFaster({'_id': siteId},{fields: {'featuresIntro': 1}});
  },
});
