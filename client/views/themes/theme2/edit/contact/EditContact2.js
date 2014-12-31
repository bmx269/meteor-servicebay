/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/

Template.EditContact2.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});


Template.EditContact2.rendered = function () {
};

