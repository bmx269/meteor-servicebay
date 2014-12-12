/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditContact0.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};
