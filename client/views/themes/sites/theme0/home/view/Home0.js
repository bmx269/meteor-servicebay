/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home0.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Home0.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  homepage: function(){
    return Site.findOneFaster({'_id': Session.get("selectedDocId")},{fields: {'homeIntro': 1}});
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home0.created = function () {
};

Template.Home0.rendered = function () {
};

Template.Home0.destroyed = function () {
};