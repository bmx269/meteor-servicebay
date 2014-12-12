DashboardController = RouteController.extend({
  waitOn: function () {
    //return Meteor.subscribe('site', {domain: host});
  },

  onBeforeAction: function() {
    Session.set('fromWhere', "dashboard");
    return AccountsEntry.signInRequired(this);
    this.next();//
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
      this.render('Dashboard');
    }
    else {
      this.redirect(baseURL + 'dashboard');
    }
  },

  onAfterAction: function() {
    return Session.set('fromWhere', null);
  }
});
