//LoadingController = RouteController.extend({
//  waitOn: function () {
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function() {
//    var siteThemeID = Session.get('theme');
//
//    // Check if theme ID is available otherwise set redirect user.
//    if (!App.isBlank(siteThemeID)) {
//      scrollUp();
//      this.render('Header'+ siteThemeID, { to: 'header' });
//      this.render('Footer'+ siteThemeID, { to: 'footer' });
//      this.render('Loading'+ siteThemeID);
//    }
//    else {
//      scrollUp();
//      this.render("NotFound");
//    }
//  }
//});