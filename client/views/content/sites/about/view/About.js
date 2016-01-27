Template.About.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var siteId = Session.get("selectedDocId");
    self.subscribe('siteData', siteId);
  });
});

Template.About.helpers({
  about: function() {
    var siteId = Session.get("selectedDocId");
    console.log(siteId);
    var about =  Site.findOneFaster({'_id': siteId},{fields: {'aboutIntro': 1}});
    return about;
  }
});