/*****************************************************************************/
/* SiteIndex Publish Functions
/*****************************************************************************/

// Meteor.publish('site_index', function () {
//   // you can remove this if you return a cursor
//   this.ready();
// });


Meteor.publish('site', function () {

  var host =  headers.methodGet(this, 'host');
  var host = String(host).replace(/^www\./,'')
  var header =  headers.methodGet(this);
  //console.log(header);
  return Site.find({'domain': host});
});
