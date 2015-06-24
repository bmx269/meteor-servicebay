Template.Map.helpers({

  mapOptions: function() {

    //// Make sure the maps API has loaded.
    if (GoogleMaps.loaded()) {

      // We can use the `ready` callback to interact with the map API once the map is ready.
      GoogleMaps.ready('contactMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance
        });
      });

      // Setting the simple vars.
      var lat = this.lat;
      var lng = this.lng;

      console.log("lat=" + lat + ", lng=" + lng);

      // Map initialization options
      return {
        center: new google.maps.LatLng(lat,lng),
        zoom: 15,
        scrollwheel: false
      };
    }
  }
});