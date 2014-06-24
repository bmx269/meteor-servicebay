//BlogIndexController = RouteController.extend({
//  waitOn: function () {
//    headers;
//    return Meteor.subscribe("site");
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    var baseURL = Meteor.absoluteUrl();
//
//    if (Session.equals("theme", "269")) {
//      this.render('Header', {
//        to: 'header'
//      });
//      this.render('Footer', {
//        to: 'footer'
//      });
//      this.render("blogIndex");
//    } else {
//      this.redirect(baseURL + "blog");
//    }
//  }
//});
//
//
//BlogTaggedController = RouteController.extend({
//  waitOn: function () {
//    headers;
//    return Meteor.subscribe("site");
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    var baseURL = Meteor.absoluteUrl();
//
//    if (Session.equals("theme", "269")) {
//      this.render('Header', {
//        to: 'header'
//      });
//      this.render('Footer', {
//        to: 'footer'
//      });
//      this.render("blogTagged");
//    } else {
//      this.redirect(baseURL + "blog");
//    }
//  }
//});
//
//
//BlogShowController = RouteController.extend({
//  waitOn: function () {
//    headers;
//    return Meteor.subscribe("site");
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    var baseURL = Meteor.absoluteUrl();
//
//    if (Session.equals("theme", "269")) {
//      this.render('Header', {
//        to: 'header'
//      });
//      this.render('Footer', {
//        to: 'footer'
//      });
//      this.render("blogShow");
//    } else {
//      this.redirect(baseURL + "blog");
//    }
//  }
//});
//
//BlogAdminController = RouteController.extend({
//  waitOn: function () {
//    headers;
//    return Meteor.subscribe("site");
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    var baseURL = Meteor.absoluteUrl();
//
//    if (Session.equals("theme", "269")) {
//      this.render('Header', {
//        to: 'header'
//      });
//      this.render('Footer', {
//        to: 'footer'
//      });
//      this.render("blogAdmin");
//    } else {
//      this.redirect(baseURL + "blog");
//    }
//  }
//});
//
//
//BlogAdminEditController = RouteController.extend({
//  waitOn: function () {
//    headers;
//    return Meteor.subscribe("site");
//  },
//
//  data: function() {
//    return siteData();
//  },
//
//  action: function () {
//    var baseURL = Meteor.absoluteUrl();
//
//    if (Session.equals("theme", "269")) {
//      this.render('Header', {
//        to: 'header'
//      });
//      this.render('Footer', {
//        to: 'footer'
//      });
//      this.render("blogAdminEdit");
//    } else {
//      this.redirect(baseURL + "blog");
//    }
//  }
//});
