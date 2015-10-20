//EditSiteController = RouteController.extend({
//  //layoutTemplate: 'MasterEditLayout',
//
//  waitOn: function () {
//    return Meteor.subscribe('editSite', this.params._id);
//  },
//
//  //onBeforeAction: function() {
//  //  //Session.set('fromWhere', "dashboard");
//  //  AccountsTemplates.ensureSignedIn
//  //  this.next();
//  //},
//
//  data: function() {
//    Session.set("selectedDocId", this.params._id);
//    return quickEditSiteData();
//  },
//
//  action: function () {
//    // Set variables.
//    var currentSiteId = Session.get('selectedDocId'),
//        theSite = Site.findOne({
//          '_id': currentSiteId
//        }),
//        siteThemeID = theSite.siteTheme,
//        baseURL = Meteor.absoluteUrl();
//
//    // Check if theme ID is valid otherwise set redirect user to dashboard.
//    if (siteThemeID !== 'None') {
//      scrollUp();
//      this.render('HeaderMaster', { to: 'header' });
//      this.render('FooterMaster', { to: 'footer' });
//      this.render('EditSite');
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
