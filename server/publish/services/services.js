/*****************************************************************************/
/* ServicesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('services', function (id) {
  check(id, String);
  console.log(id);
  //Meteor._sleepForMs(3000);
  return Services.find({'siteId': id},{sort:{order: 1}},{fields: {'order': 1, 'siteId': 1, 'serviceTitle': 1, 'image': 1, 'serviceDescription': 1}});
});

Meteor.publish('editServices', function (id) {
  check(id, String);
  console.log(id);
  //Meteor._sleepForMs(2000);
  return Services.find({'siteId': id},{sort:{order: 1}},{fields: {'order': 1, 'siteId': 1, 'serviceTitle': 1, 'image': 1, 'serviceDescription': 1}});
});
