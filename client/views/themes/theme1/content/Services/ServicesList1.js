Template.ServicesList1.helpers({
  services: function() {
    var currentSiteId = Session.get("selectedDocId");
    Meteor.subscribe('services', {'siteId': currentSiteId});
    return Services.findFaster({'siteId': currentSiteId});
  }
});
