///*****************************************************************************/
///* SiteIndex: Event Handlers and Helpers */
///*****************************************************************************/
//Template.Home.events({
//  /*
//   * Example:
//   *  'click .selector': function (e, tmpl) {
//   *
//   *  }
//   */
//});
//
//Template.Home.helpers({
//  /*
//   * Example:
//   *  items: function () {
//   *    return Items.find();
//   *  }
//   */
//});
//
//
//
///*****************************************************************************/
///* SiteIndex: Lifecycle Hooks */
///*****************************************************************************/
//Template.Home.created = function () {
//};
//
//Template.Home.rendered = function () {
//};
//
//Template.Home.destroyed = function () {
//};

Template.Home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var siteId = Session.get("selectedDocId")
    self.subscribe('siteData', siteId)
  });
});

Template.Home.helpers({
  intro: function() {
    var siteId = Session.get("selectedDocId")
    var intro =  Site.findOneFaster({'_id': siteId},{fields: {'homeIntro': 1}});
    return intro;
  }
});