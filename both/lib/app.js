/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {
  // Set variables.
  variables: {
    themeMaster: 'Master',
    themeDefault: 'None',
    themeClasses: 'theme0 theme1 theme2 theme3 theme4 theme5 theme6 theme7 theme8 theme9 theme10 theme11 theme12 theme13 theme14 theme15 themeMaster themeNone'
  },

  //Check if a variable is empty, blank or null.
  isBlank: function(str) {
    return (!str || /^\s*$/.test(str));
  },

  // Check if is numeric.
  isNumber: function(n) {
    return !this.isBlank(n) && !isNaN(parseFloat(n)) && isFinite(n);
  },

  // Set active body class.
  themeActive: function(themeID) {
    // Set vars.
    var _themeID = this.isBlank(themeID) ? this.variables.themeDefault : themeID;

    // Remove and set proper body classes.
    $('html')
      .removeClass(this.variables.themeClasses)
      .addClass('theme' + _themeID);
  },

  // Check if theme is master.
  themeIsMaster: function() {
    return (Session.get('theme') === this.variables.themeMaster);
  },

  // Builds google map instance.
  //googleMaps: function(location) {
  //  location = location || {};
  //
  //  //console.log(location);
  //
  //  //// initialize the reactive variables
  //  //var instance = this;
  //  //Template.instance.lat = new ReactiveVar(0);
  //  //Template.instance.lng = new ReactiveVar(0);
  //
  //  // Make sure the maps API has loaded.
  //  if (GoogleMaps.loaded()) {
  //
  //    // Define global vars.
  //    var address = '',
  //      geocoder = new google.maps.Geocoder();
  //
  //    // Set address based on variables being set or not.
  //    $.each(location, function(k, v) {
  //      if (v) {
  //        address += v + ',';
  //      }
  //    });
  //    console.log(address);
  //    // Set lat and lng with actual and valid values.
  //    geocoder.geocode({
  //      'address': address
  //    }, function(results, status) {
  //      geoLatLng = results[0].geometry.location;
  //      console.log(geoLatLng);
  //      // Set reactive-vars.
  //      Template.instance.lat.set(geoLatLng.k);
  //      Template.instance.lng.set(geoLatLng.D);
  //
  //    });
  //
  //    //// We can use the `ready` callback to interact with the map API once the map is ready.
  //    //GoogleMaps.ready('mapTwo', function(map) {
  //    //  // Add a marker to the map once it's ready
  //    //  var marker = new google.maps.Marker({
  //    //    position: map.options.center,
  //    //    map: map.instance
  //    //  });
  //    //});
  //    //
  //    //// Setting the simple vars.
  //    //var lat = Template.instance.lat.get();
  //    //    lng = Template.instance.lng.get();
  //    //
  //    //console.log("lat=" + lat + ", lng=" + lng);
  //    //
  //    //// Map initialization options
  //    //return {
  //    //  center: new google.maps.LatLng(lat,lng),
  //    //  zoom: 15,
  //    //  scrollwheel: false
  //    //};
  //  }
  //
  //  return '';
  //}
};