/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditHome0.events({
  'click [action=edit]': function (event, tmpl) {
    event.preventDefault ();
  }
});


Template.EditHome0.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});


Template.EditHome0.rendered = function () {

};