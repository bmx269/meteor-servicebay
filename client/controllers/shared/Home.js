HomeController = RouteController.extend({
  waitOn: function () {
    //return Meteor.subscribe('site', {domain: host});
  },

  data: function() {
   return siteData();
  },

  action: function() {

    var siteThemeID = Session.get('theme');

    // Check if theme ID is available otherwise set redirect user to dashboard.
    if (siteThemeID !== 'None') {

      if (App.themeIsMaster()) {
        scrollUp();
        this.render('HomeHeader'+ siteThemeID, { to: 'header' });
      }
      else {
        this.render('Header'+ siteThemeID, { to: 'header' });
      }

      this.render('Footer'+ siteThemeID, { to: 'footer' });
      this.render('Home'+ siteThemeID);

    }
    else {
      scrollUp();
      this.render("NotFound");
    }

  }
});
