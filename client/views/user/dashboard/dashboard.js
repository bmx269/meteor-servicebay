/*****************************************************************************/
/* Dashboard: Event Handlers and Helpers */
/*****************************************************************************/
Template.Dashboard.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

});

Template.subscriptionsList.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  siteItem: function(){
      var user = Meteor.userId();

      if (user) {
          //console.log(user);
          var theSites = Site.findFaster({'userId': user});
          return theSites;

      }
      console.log('no sites found');
      return null;
  },

  subscriptionItem: function(){
    var user = Meteor.userId();

    if (user) {
      //console.log(user);
      var theSubs = Subscription.findFaster({'userId': user});
      return theSubs;

    }
    console.log('no subscriptions found');
    return null;
  }

});


//var ownPost = Meteor.userId();
//Meteor.subscribe('site', {userId: ownPost});
/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {
};

Template.Dashboard.rendered = function () {
};

Template.Dashboard.destroyed = function () {
};
