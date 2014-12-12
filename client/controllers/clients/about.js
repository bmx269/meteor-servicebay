AboutController = RouteController.extend({
  waitOn: function () {
  },

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
        this.redirect("/#about");
      }
      else {
        scrollUp();
        this.render('Header'+ siteThemeID, { to: 'header' });
        this.render('Footer'+ siteThemeID, { to: 'footer' });
        this.render('About'+ siteThemeID);
      }
    }
    else {
      scrollUp();
      this.render("NotFound");
    }
  }
});
