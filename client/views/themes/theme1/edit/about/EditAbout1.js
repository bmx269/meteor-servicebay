/*****************************************************************************/
/* SiteAbout: Event Handlers and Helpers */
/*****************************************************************************/

Template.EditAbout1.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});
