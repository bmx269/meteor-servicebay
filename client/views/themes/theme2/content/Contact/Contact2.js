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

    mapTwoOptions: function() {
      geo = this.location;

      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('mapTwo', function(map) {
          // Add a marker to the map once it's ready
          var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
          });
        });

        // Map initialization options
        var latLng = geo.split(',');
        return {
          center: new google.maps.LatLng(latLng[0], latLng[1]),
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
Template.Contact2.created = function () {
};

Template.Contact2.rendered = function () {
};

Template.Contact2.destroyed = function () {
};
