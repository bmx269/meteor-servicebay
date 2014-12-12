EditHomeController = RouteController.extend({
  //layoutTemplate: 'MasterEditLayout',

  waitOn: function () {
  },

  onBeforeAction: function() {
    Session.set('fromWhere', "dashboard");
    return AccountsEntry.signInRequired(this);
    this.next();
  },

  data: function() {
    Session.set("selectedDocId", this.params._id);
    //return Site.findOne(this._id);
    return editSiteData();
  },

  action: function () {
    // Set variables.
    var currentSiteId = Session.get('selectedDocId'),
        theSite = Site.findOne({
          '_id': currentSiteId
        }),
        siteThemeID = theSite.siteTheme,
        baseURL = Meteor.absoluteUrl();

    // Check if theme ID is valid otherwise set redirect user to dashboard.
    if (siteThemeID !== 'None') {
      scrollUp();
      this.render('EditHeader'+ siteThemeID, { to: 'header' });
      this.render('EditFooter'+ siteThemeID, { to: 'footer' });
      this.render('EditHome'+ siteThemeID);
    }
    else {
      this.redirect(baseURL + 'dashboard');
    }

    // Finally set site theme.
    Session.set('theme', siteThemeID);

  },

  onAfterAction: function() {
    Session.set('fromWhere', null);
  }
});
