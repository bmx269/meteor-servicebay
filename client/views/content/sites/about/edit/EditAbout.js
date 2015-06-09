/*****************************************************************************/
/* SiteAbout: Event Handlers and Helpers */
/*****************************************************************************/
//Template.EditAbout2.editingDoc = function () {
//  return Site.findOne({_id: Session.get("selectedDocId")});
//};

Template.EditAbout.helpers({
  editingDoc: function () {
    return Site.findOne({_id: Session.get("selectedDocId")});
  }
});


Template.EditAbout.rendered = function () {
};