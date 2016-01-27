<<<<<<< HEAD
/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
//Template.HomeMaster.events({
//  /*
//   * Example:
//   *  'click .selector': function (e, tmpl) {
//   *
//   *  }
//   */
//});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
//Template.HomeMaster.created = function () {
//};
//
//Template.HomeMaster.rendered = function () {
//};
//
//Template.HomeMaster.destroyed = function () {
//};


=======
>>>>>>> 55520c6098e6984964d6eaf061e3286d78432bfa
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