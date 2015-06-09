/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.Contact2.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});



Template.Contact2.helpers({
    //
    //mapOptions: function() {
    //  // Set location as an object pior to submission.
    //  var location =  {
    //        street: this.companyAddress,
    //        city: this.companyCity,
    //        state: this.companyState,
    //        country: this.companyCountry
    //      };
    //  var address = '';
    //
    //  // Set address based on variables being set or not.
    //  $.each(location, function(k, v) {
    //    if (v) {
    //      address += v +', ';
    //    }
    //  });
    //
    //  //return App.googleMaps(location);
    //
    //
    //  // Using Method to geocode - to be moved to create / update form to prevent hitting geocoder too often.
    //  Meteor.call('geoCode', address, function(error, result){
    //    Template.instance.lat.set(result[0].latitude);
    //    Template.instance.lng.set(result[0].longitude);
    //  });
    //
    //
    //  //// Make sure the maps API has loaded.
    //  if (GoogleMaps.loaded()) {
    //
    //    // We can use the `ready` callback to interact with the map API once the map is ready.
    //    GoogleMaps.ready('contactMap', function(map) {
    //      // Add a marker to the map once it's ready
    //      var marker = new google.maps.Marker({
    //        position: map.options.center,
    //        map: map.instance
    //      });
    //    });
    //
    //    // Setting the simple vars.
    //    var lat = Template.instance.lat.get();
    //    var lng = Template.instance.lng.get();
    //
    //    console.log("lat=" + lat + ", lng=" + lng);
    //
    //    // Map initialization options
    //    return {
    //      center: new google.maps.LatLng(lat,lng),
    //      zoom: 15,
    //      scrollwheel: false
    //    };
    //  }
    //},

    contactFormSchema: function() {
        return Schema.contact;
    }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact2.created = function () {
  //geo = Session.get('location');

  // 1. Initialization
  //
  //var instance = this;
  //
  //// initialize the reactive variables
  //Template.instance.lat = new ReactiveVar(0);
  //Template.instance.lng = new ReactiveVar(0);

};

//Template.Contact2.onCreated(function() {
//    // We can use the `ready` callback to interact with the map API once the map is ready.
//    GoogleMaps.ready('contactMap', function(map) {
//        // Add a marker to the map once it's ready
//        var marker = new google.maps.Marker({
//            position: map.options.center,
//            map: map.instance
//        });
//    });
//});

Template.Contact2.rendered = function () {
};

Template.Contact2.destroyed = function () {
};
