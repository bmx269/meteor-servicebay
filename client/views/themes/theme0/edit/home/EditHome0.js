/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditHome0.events({
  'click [action=edit]': function (event, tmpl) {
    event.preventDefault ();
  }
});


Template.EditHome0.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
  //inlineEditor();
};


Template.EditHome0.rendered = function () {

};