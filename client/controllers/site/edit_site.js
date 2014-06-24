EditSiteController = RouteController.extend({
  waitOn: function () {
    headers;
    return Meteor.subscribe("site");
  },

  onBeforeAction: function() {
    Session.set('fromWhere', "dashboard");
    return AccountsEntry.signInRequired(this);
  },

  data: function() {
    Session.set("selectedDocId", this.params._id);
    return Site.findOne(this.params._id);
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
      this.render("EditSite");
    } else {
      this.redirect(baseURL + "dashboard");
    }
  },

  onAfterAction: function() {
    return Session.set('fromWhere', null);
  }
});
