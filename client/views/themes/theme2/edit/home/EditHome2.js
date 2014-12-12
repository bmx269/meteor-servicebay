/*****************************************************************************/
/* SiteIndex: Event Handlers and Helpers */
/*****************************************************************************/

Template.EditHome2.editingDoc = function () {
  return Site.findOne({_id: Session.get("selectedDocId")});
};

Template.EditHome2.rendered = function () {


};

Template.EditHome2.events({

  //'click .editable': function (e, tmpl) {
  //  e.preventDefault();
  //  e.stopPropagation();
  //  //console.log(this, arguments);
  //  //inlineEditor("#contact .editable");
  //  $(".editable").summernote({focus: true});
  //}
});
//
//Template.EditServices2.inheritsHelpersFrom("EditHome2");
//Template.EditContact2.inheritsHelpersFrom("EditHome2");
//Template.EditAbout2.inheritsHelpersFrom("EditHome2");