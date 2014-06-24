/*****************************************************************************/
/* ServicesIndex Publish Functions
/*****************************************************************************/

// Meteor.publish('services_index', function () {
//   // you can remove this if you return a cursor
//   this.ready();
// });

//Meteor.publish('services', function () {
//  var host =  headers.methodGet(this, 'host'),
//      host = String(host).replace(/^www\./,'');
//  return Services.find({'domain': host});
//});


Meteor.publish('services', function (options) {
  return Services.findFaster({}, options);
});
