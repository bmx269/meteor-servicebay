/*****************************************************************************/
/* EditSubscription: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditSubscription.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EditSubscription.helpers({
  editingDoc: function () {
    return Subscription.findOne({_id: Session.get("selectedDocId")});
  }
});


/*****************************************************************************/
/* EditSubscription: Lifecycle Hooks */
/*****************************************************************************/
Template.EditSubscription.created = function () {
};

Template.EditSubscription.rendered = function () {
};

Template.EditSubscription.destroyed = function () {
};
