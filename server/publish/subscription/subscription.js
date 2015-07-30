/*****************************************************************************/
/* SubscriptionIndex Publish Functions
/*****************************************************************************/

//Meteor.publish('subscription_index', function () {
//  // you can remove this if you return a cursor
//  this.ready();
//});

Meteor.publish('subscription', function (options) {
  check(options, String);
  return Subscription.findFaster({}, options);
});
