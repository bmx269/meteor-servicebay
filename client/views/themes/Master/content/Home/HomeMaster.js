/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.HomeMaster.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.HomeMaster.helpers({
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
Template.HomeMaster.created = function () {
};

Template.HomeMaster.rendered = function () {
};

Template.HomeMaster.destroyed = function () {
};


