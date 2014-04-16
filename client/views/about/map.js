// Template.leafletMap.rendered = function(){
//   var latitude;
//   var longitude;

//   /*
//   * Get the json file from Google Geo
//   */
//   function Convert_LatLng_To_Address(address, callback) {
//          url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&sensor=false";
//          jQuery.getJSON(url, function (json) {
//              Create_Address(json, callback);
//          });
//   }

//   /*
//   * Create an address out of the json
//   */
//   function Create_Address(json, callback) {
//      if (!check_status(json)) // If the json file's status is not ok, then return
//          return 0;
//      latitude = json["results"][0]["geometry"]["location"]["lat"];
//      longitude = json["results"][0]["geometry"]["location"]["lng"];
//      callback();
//   }

//   /*
//   * Check if the json data from Google Geo is valid
//   */
//   function check_status(json) {
//      if (json["status"] == "OK") return true;
//      return false;
//   }

//   function getNewLatLng() {
//      var street_address = document.getElementById('address-input').value,
//      city = document.getElementById('city-input').value,
//      country = document.getElementById('country-input').value,
//      postcode = document.getElementById('postcode-input').value;

//      var address = street_address + ' ' + city + ' ' + country + ', ' + postcode;

//      // AlertLatLng is a callback function which will be executed after converting address to coordinates
//      Convert_LatLng_To_Address(address, AlertLatLng);
//   }


//   L.Icon.Default.imagePath = 'packages/leaflet/images',
//   L.tileLayer('http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
//       maxZoom: 18
//   }).addTo(map);
// };


// //L.Icon.Default.imagePath = 'packages/leaflet/images'
