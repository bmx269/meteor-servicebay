/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditContact3.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};