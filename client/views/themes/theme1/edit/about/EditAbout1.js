/*****************************************************************************/
/* SiteAbout: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditAbout1.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
  //inlineEditor();
};