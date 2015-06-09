/*****************************************************************************/
/* ServicesIndex: Event Handlers and Helpers */
/*****************************************************************************/
//Template.EditServices2.editingDoc = function () {
//  return Site.findOne({_id: Session.get("selectedDocId")});
//};

Template.EditServices.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});


Template.EditServices.rendered = function () {
};