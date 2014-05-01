PrivacyController = RouteController.extend({
  waitOn: function () {
    headers;
    return Meteor.subscribe("site");
  },

  data: function() {
    return siteData();
  },

  action: function () {
    var baseURL = Meteor.absoluteUrl();

    if (Session.equals("theme", "269")) {
      this.render('Header', {
        to: 'header'
      });
      this.render('Footer', {
        to: 'footer'
      });
      this.render("Privacy");
    } else {
      this.redirect(baseURL + "privacy");
    }
  }
});
