Template.HomeMaster.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var siteId = Session.get("selectedDocId")
    self.subscribe('siteData', siteId)
  });
});

Template.HomeMaster.helpers({
  intro: function() {
    var siteId = Session.get("selectedDocId")
    var intro =  Site.findOneFaster({'_id': siteId},{fields: {'homeIntro': 1}});
    return intro;
  }
});