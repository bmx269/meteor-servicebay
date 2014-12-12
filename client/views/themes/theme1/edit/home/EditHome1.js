/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditHome1.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
  //inlineEditor();
};
