/*****************************************************************************/
/* Features: Event Handlers and Helpers */
/*****************************************************************************/
Template.FeaturesTeaser.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.FeaturesTeaser.helpers({
  features: function(){
    return Site.findOneFaster({'_id': Session.get("selectedDocId")},{fields: {'featuresIntro': 1}});
  }
});

/*****************************************************************************/
/* Features: Lifecycle Hooks */
/*****************************************************************************/
Template.FeaturesTeaser.created = function () {
};

Template.FeaturesTeaser.rendered = function () {
};

Template.FeaturesTeaser.destroyed = function () {
};
