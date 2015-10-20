//ContactController = RouteController.extend({
//  onBeforeAction: function () {
//    GoogleMaps.load();
//    this.next();
//  },
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
//    if (siteThemeID !== 'None') {
//
//      if (siteThemeID === '2') {
//        this.redirect("/#contact");
//      }
//      else {
//        scrollUp();
//        this.render('Header'+ siteThemeID, { to: 'header' });
//        this.render('Footer'+ siteThemeID, { to: 'footer' });
//        this.render('Contact'+ siteThemeID);
//      }
//    }
//    else {
//      scrollUp();
//      this.render("NotFound");
//    }
//  }
//});