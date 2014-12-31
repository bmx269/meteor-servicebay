/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/

Template.EditHome1.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});
