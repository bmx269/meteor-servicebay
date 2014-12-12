/*****************************************************************************/
/* ServicesIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditServices1.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};