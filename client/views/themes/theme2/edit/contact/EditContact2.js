/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditContact2.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};

Template.EditContact2.rendered = function () {
  //$(".editable").click(function(e){
  //  e.preventDefault();
  //  e.stopPropagation();
  //  inlineEditor(this);
  //});
  //$(".editable").blur(function(e){
  //  e.preventDefault();
  //  e.stopPropagation();
  //  $(this).destroy();
  //});
};

//Template.EditContact2.events({
//
//  'click #contact .editable': function (e, tmpl) {
//    e.preventDefault();
//    e.stopPropagation();
//    //console.log(this, arguments);
//    //inlineEditor("#contact .editable");
//    $(".editable").summernote({focus: true});
//  }
//});
