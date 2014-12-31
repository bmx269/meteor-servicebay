/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.Home1.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Home1.helpers({
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
/* SiteIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.Home1.created = function () {
};

Template.Home1.rendered = function () {
};

Template.Home1.destroyed = function () {
};


