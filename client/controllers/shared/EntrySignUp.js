EntrySignUpController = RouteController.extend({
  waitOn: function () {
  },

  data: function() {
    return siteData();
  },

  action: function () {
    var baseURL = Meteor.absoluteUrl(),
        themeMasterID = App.variables.themeMaster;

    if (App.themeIsMaster()) {
      scrollUp();
      this.render('Header'+ themeMasterID, { to: 'header' });
      this.render('Footer'+ themeMasterID, { to: 'footer' });
      this.render("entrySignUp");
    }
    else {
      this.redirect(baseURL + "sign-up");
    }
  }
});
