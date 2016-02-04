Template.Features.helpers({
  appReady: function () {
    return Template.instance().subscriptionsReady();
  },
  siteData: function() {
    var siteId = Session.get("selectedDocId");

    if (App.themeIsMaster()) {
      return Site.findOneFaster({'_id': siteId},{fields: {'featuresIntro': 1}});
    }
  },
});
