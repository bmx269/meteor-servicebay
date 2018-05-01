Template.Services.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var siteId = Session.get("selectedDocId");
    self.subscribe('siteData', siteId);
  });
});

Template.Services.helpers({
  about: function() {
    var siteId = Session.get("selectedDocId");
    // console.log(siteId);
    var about =  Site.findOneFaster({'_id': siteId},{fields: {'servicesIntro': 1}});
    return about;
  }
});