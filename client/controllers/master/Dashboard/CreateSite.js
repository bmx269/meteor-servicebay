//CreateSiteController = RouteController.extend({
//  waitOn: function () {
//  },
//
//  //onBeforeAction: function() {
//  //  Session.set('fromWhere', "dashboard");
//  //  return AccountsEntry.signInRequired(this);
//  //  this.next();
//  //},
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    // Set variables.
//    var baseURL = Meteor.absoluteUrl(),
//        themeMasterID = App.variables.themeMaster;
//
//    if (App.themeIsMaster()) {
//      scrollUp();
//      this.render('HeaderMaster', { to: 'header' });
//      this.render('FooterMaster', { to: 'footer' });
//      this.render('CreateSite');
//    }
//    else {
//      this.redirect(baseURL + 'dashboard');
//    }
//
//    // Finally set site theme.
//    Session.set('theme', "Master");
//
//  },
//
//  onAfterAction: function() {
//    //Session.set('fromWhere', null);
//  }
//});
