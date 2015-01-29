CreateSiteController = RouteController.extend({
  waitOn: function () {
  },

  //onBeforeAction: function() {
  //  Session.set('fromWhere', "dashboard");
  //  return AccountsEntry.signInRequired(this);
  //  this.next();
  //},

  data: function() {
    return siteData();
  },

  action: function () {
    var baseURL = Meteor.absoluteUrl();

    if (Session.equals("theme", "Master")) {
      this.render("CreateSite");

    } else {
      this.redirect(baseURL + "dashboard");
    }
  },

  onAfterAction: function() {
    return Session.set('fromWhere', null);
  }
});
