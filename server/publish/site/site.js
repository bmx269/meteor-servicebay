/*****************************************************************************/
/* SiteIndex Publish Functions
/*****************************************************************************/

// Meteor.publish('site_index', function () {
//   // you can remove this if you return a cursor
//   this.ready();,
// });
//Meteor.publish('posts', function(author) {

Meteor.publish('findSite', function (host) {
  check(host, String);
  console.log(host);
  //Meteor._sleepForMs(5000);
  return Site.findFaster({'domain': host},{fields: {'domain': 1, 'siteTitle': 1, 'siteTheme': 1}});
});

Meteor.publish('site', function (host) {
  check(host, String);
  console.log(host);
  Meteor._sleepForMs(2000);
  return Site.findFaster({'domain': host},{fields: {'createdAt': 0}});
});

Meteor.publish('editSite', function (id) {
  check(id, String);
  console.log(id);
  return Site.findFaster({'_id': id},{fields: {'createdAt': 0}});
});

Meteor.publish('userSites', function (user) {
  check(user, String);
  console.log(user);
  //Meteor._sleepForMs(5000);
  return Site.findFaster({'userId': user},{fields: {'siteTitle': 1, 'domain': 1, 'userId': 1}});
});


