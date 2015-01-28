/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditHome3.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});
