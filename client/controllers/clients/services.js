ServicesController = RouteController.extend({
  // waitOn: function () {
  //   return Meteor.subscribe('images');
  // },

  data: function() {
    return siteData();
  },

  action: function() {
    var siteThemeID = Session.get('theme');

    // Check if theme ID is available otherwise set redirect user.
    if (siteThemeID !== 'None') {

      if (App.themeIsMaster()) {
        this.redirect('/');
      }
      else if (siteThemeID === '2') {
        this.redirect("/#services");
      }
      else {
        scrollUp();
        this.render('Header'+ siteThemeID, { to: 'header' });
        this.render('Footer'+ siteThemeID, { to: 'footer' });
        this.render('Services'+ siteThemeID);
      }
    }
    else {
      scrollUp();
      this.render("NotFound");
    }
  }
});
