//Meteor.methods({
//  geoCode: function(argument) {
//
//    var geocodeSync=Meteor.wrapAsync(argument);
//
//    var geoResult=geocodeSync({
//      check(argument, String);
//      console.log(argument);
//      var geo = new GeoCoder();
//      var result = geo.geocode(argument);
//      console.log(result);
//      return result;
//    });
//
//    // do whatever you want with the result
//    console.log(geoResult);
//    return geoResult;
//  }
//});


// Geocode server method
Meteor.methods({
  geoCode: function(argument) {
    check(argument, String);
    console.log(argument);

    var geoResult= function(argument, cb) {
      var geo = new GeoCoder();
      var result = geo.geocode(argument);
      cb && cb(null, result);
    };


    var geoCodeSync=Meteor.wrapAsync(geoResult);

    try {
      var result = geoCodeSync(argument);
      // do whatever you want with the result
      return result;
    } catch (e) {
      console.log(e);
    }
  }
});


