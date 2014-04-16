/*****************************************************************************/
/* ServicesIndex Publish Functions
/*****************************************************************************/

// Meteor.publish('services_index', function () {
//   // you can remove this if you return a cursor
//   this.ready();
// });

Meteor.publish('services', function () {
  var host =  headers.methodGet(this, 'host');
  var host = String(host).replace(/^www\./,'')
  return Services.find({'domain': host});
});
