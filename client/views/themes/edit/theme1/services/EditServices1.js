/*****************************************************************************/
/* ServicesIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditServices1.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});
