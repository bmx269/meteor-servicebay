/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditHome3.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};