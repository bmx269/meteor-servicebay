/*****************************************************************************/
/* SubscriptionIndex Publish Functions
/*****************************************************************************/


Meteor.publish('subscription', function (id) {
  check(id, String);
  console.log(id);
  return Site.findFaster({'_id': id},{fields: {'createdAt': 0}});
});