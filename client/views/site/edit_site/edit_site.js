/*****************************************************************************/
/* EditSite: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditSite.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EditSite.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

Template.EditSite.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};

/*****************************************************************************/
/* EditSite: Lifecycle Hooks */
/*****************************************************************************/
Template.EditSite.created = function () {
};

Template.EditSite.rendered = function () {
};

Template.EditSite.destroyed = function () {
};
