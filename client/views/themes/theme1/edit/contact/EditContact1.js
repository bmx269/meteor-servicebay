/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/

Template.EditContact1.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});
