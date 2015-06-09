/*****************************************************************************/
/* ServicesIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditServices3.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};
