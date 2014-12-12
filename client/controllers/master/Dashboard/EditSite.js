EditSiteController = RouteController.extend({
  waitOn: function () {
  },

  onBeforeAction: function() {
    Session.set('fromWhere', "dashboard");
    return AccountsEntry.signInRequired(this);
    this.next();
  },

  data: function() {
    Session.set("selectedDocId", this.params._id);
    return Site.findOne(this.params._id);
  },

  action: function () {
    var baseURL = Meteor.absoluteUrl();

    if (Session.equals("theme", "Master")) {
      this.render("EditSite");

    } else {
      this.redirect(baseURL + "dashboard");
    }
  },

  onAfterAction: function() {
    return Session.set('fromWhere', null);
  }
});
