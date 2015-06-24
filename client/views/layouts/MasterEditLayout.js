/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterEditLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MasterEditLayout.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterEditLayout.created = function () {
};

Template.MasterEditLayout.rendered = function () {
};

Template.MasterEditLayout.destroyed = function () {
};


//Template.MasterLayout.transitionOptions = function(from, to, element) {
//  return 'right-to-left';
//
//  // or
//  //
//  //return {
//  //  with: 'right-to-left'
//  //  //extra: 'options-for-plugin'
//  //}
//};

//Template.MasterEditLayout.editingDoc = function () {
//  return Site.findOne({_id: Session.get("selectedDocId")});
//};

//{{#momentum plugin='right-to-left'}}
//{{#if show}}
//<p>My text!</p>
//{{/if}}
//  {{/momentum}}


