SubscriptionIndexController = RouteController.extend({
  waitOn: function () {
    headers;
    return Meteor.subscribe("site");
  },

  data: function() {
    return siteData();
  },

  action: function () {
    this.render();
  }
});
