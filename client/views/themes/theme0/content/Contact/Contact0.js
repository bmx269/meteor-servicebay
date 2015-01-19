/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.Contact0.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Contact0.helpers({

  mapZeroOptions: function() {

    //geo = this.location;
    //console.log(geo);


    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {

      // defining vars
      var lat = Session.get('locationLat');
      var lng = Session.get('locationLng');
      var street = this.companyAddress;
      var city = this.companyCity;
      var state = this.companyState;
      var country = this.companyCountry;
      var address = street + ", "  + city + ", " + state + ", " + country;

      //console.log("address = " + address);

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode( { 'address': address}, function(results, status) {
        geoLatLng = results[0].geometry.location;
        //console.log(geoLatLng);
        var lat = geoLatLng.k;
        var lng =  geoLatLng.D;
        Session.set('locationLat', lat);
        Session.set('locationLng', lng);
        //console.log("geocoder " + lat + ", " + lng);
      });

      // We can use the `ready` callback to interact with the map API once the map is ready.
      GoogleMaps.ready('mapZero', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance
        });
      });

      // Map initialization options
      //console.log("before return " + lat + ", " + lng);
      return {
        center: new google.maps.LatLng(lat,lng),
        zoom: 15,
        scrollwheel: false
      }
    }
  },

  contactFormSchema: function() {
    return Schema.contact;
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact0.created = function () {
};

Template.Contact0.rendered = function () {
};

Template.Contact0.destroyed = function () {
};
