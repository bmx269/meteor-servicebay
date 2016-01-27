Template.ContactAddress.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var siteId = Session.get("selectedDocId")
    self.subscribe('siteData', siteId)
  });
});

Template.ContactAddress.helpers({
  contact: function() {
    var siteId = Session.get("selectedDocId")
    var contact =  Site.findOneFaster({'_id': siteId},{fields: {'contactIntro': 1,'companyName': 1, 'companyAddress': 1}});
    return contact;
  }
});