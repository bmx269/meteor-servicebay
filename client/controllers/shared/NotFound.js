NotFoundController = RouteController.extend({
  waitOn: function () {
  },

  data: function() {
    return siteData();
  },

  action: function () {
    var siteThemeID = Session.get('theme');

    if (siteThemeID !== 'None') {
      scrollUp();
      this.render('Header'+ siteThemeID, { to: 'header' });
      this.render('Footer'+ siteThemeID, { to: 'footer' });
      this.render('NotFound'+ siteThemeID);
    }
    else {
      scrollUp();
      this.render('HeaderNone', { to: 'header' });
      this.render('FooterNone', { to: 'footer' });
      this.render("NotFound");
    }
  }
});
