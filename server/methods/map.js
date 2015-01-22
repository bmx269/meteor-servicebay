

Meteor.methods({
  /*
   * Example:
   *  '/app/services/update/email': function (email) {
   *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
   *  }
   *
   */

  geoCode: function(argument) {
    check(argument, String);
    console.log(argument);
    var geo = new GeoCoder();
    var geoResult = geo.geocode(argument);
    return geoResult;
  }
});
