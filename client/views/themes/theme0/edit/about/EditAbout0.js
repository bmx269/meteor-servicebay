/*****************************************************************************/
/* SiteAbout: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditAbout0.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
  //inlineEditor();
};
