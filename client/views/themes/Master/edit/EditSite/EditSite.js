/*****************************************************************************/
/* EditSite: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditSite.events({


  'click .deleteThis': function(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to Permanently Delete this Site?")) {
      Site.remove (selectedSite);
      Notifications.success ('Success', 'The Site has been Deleted.');
    }
  }

});

//
//Template["EditSite"].helpers({
//  items: function () {
//    return Items.find({}, {sort: {name: 1}});
//  },
//  makeUniqueID: function () {
//    return "update-each-" + this._id;
//  }
//});



Template.EditSite.helpers({
  editingSite: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});

/*****************************************************************************/
/* EditSite: Lifecycle Hooks */
/*****************************************************************************/
Template.EditSite.created = function () {
};

Template.EditSite.rendered = function () {
 // var selectedSite = Session.get("editDocId");
 // //'click .editModal': function() {
 // $(".grid-form").setAttribute("doc", Session.get("editSiteId"));
 // //},
};

Template.EditSite.destroyed = function () {
};
