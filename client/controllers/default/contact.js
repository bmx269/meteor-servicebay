ContactController = RouteController.extend({
  waitOn: function () {
    headers;
    return Meteor.subscribe("site");
  },

  data: function() {
    return siteData();
  },

  action: function() {
    if (Session.equals("theme", "0")) {
      this.render('Header0', {
        to: 'header'
      });
      this.render('Footer0', {
        to: 'footer'
      });
      this.render("SiteContact0");
    } else if (Session.equals("theme", "1")) {
      this.render('Header1', {
        to: 'header'
      });
      this.render('Footer1', {
        to: 'footer'
      });
      this.render("SiteContact1");
    } else if (Session.equals("theme", "2")) {
      this.render('Header2', {
        to: 'header'
      });
      this.render('Footer2', {
        to: 'footer'
      });
      this.render("SiteContact2");
    } else if (Session.equals("theme", "3")) {
      this.render('Header3', {
        to: 'header'
      });
      this.render('Footer3', {
        to: 'footer'
      });
      this.render("SiteContact3");
    } else if (Session.equals("theme", "269")) {
      this.render('Header', {
        to: 'header'
      });
      this.render('Footer', {
        to: 'footer'
      });
      this.render("Contact");
    } else {
      this.render('Header', {
        to: 'header'
      });
      this.render('Footer', {
        to: 'footer'
      });
      this.render("Contact");
    }
  }
});
