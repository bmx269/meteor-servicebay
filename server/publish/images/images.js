Meteor.publish('images', function () {
  //check(id, String);
  //console.log(id);
  //Meteor._sleepForMs(3000);
  //  return Images.find({'siteId': id},{sort:{order: 1}},{fields: {'order': 1, 'siteId': 1, 'serviceTitle': 1, 'image': 1, 'serviceDescription': 1}});
  return Images.find();
});