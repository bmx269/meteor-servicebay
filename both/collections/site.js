/*
 * Add query methods like this:
 *  Site.findPublic = function () {
 *    return Site.find({is_public: true});
 *  }
 */

var Schemas = {};



Site = new Meteor.Collection('site', {});


Schemas.Site = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  userId: {
    type: String,
    autoValue: function(){
      if (this.isInsert) {
        return this.userId;
      } else if (this.isUpsert) {
        return {$setOnInsert: this.userId};
      } else {
        this.unset();
      }
    },
    denyUpdate: true,
    optional: true
  },
  domain: {
    type: String,
    label: "Domain",
    unique: true
  },
  siteTheme: {
    type: String,
    label: "Theme",
    allowedValues: ['0', '1', '2','3','Master'],
    autoform: {
      options: [
        {label: "Theme 0", value: "0"},
        {label: "Theme 1", value: "1"},
        {label: "Theme 2", value: "2"},
        {label: "Theme 3", value: "3"},
      ]
    }
  },
  siteLogo: {
    type: String,
    label: "Your Logo",
    optional: true
  },
  siteTitle: {
    type: String,
    label: "Site Name",
    max: 255
  },
  homeIntro: {
    type: String,
    label: "Welcome introduction",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        disableDragAndDrop: true,
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']]
        ]
      }
    }
  },
  servicesIntro: {
    type: String,
    label: "About your services",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        disableDragAndDrop: true,
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']]
        ]
      }
    }
  },
  aboutIntro: {
    type: String,
    label: "Your company bio",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        disableDragAndDrop: true,
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']]
        ]
      }
    }
  },
  contactIntro: {
    type: String,
    label: "Contact details",
    optional: true,
    max: 5000,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor', // optional
        disableDragAndDrop: true,
        // summernote options goes here
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['picture', 'link', 'video', 'table', 'hr']],
          ['misc', ['codeview']]
        ]
      }
    }
  },
  companyName: {
    type: String,
    label: "Business Name",
    max: 255,
    optional: true
  },
  companyAddress: {
    type: String,
    label: "Street Address",
    max: 255,
    optional: true
  },
  companyCity: {
    type: String,
    label: "City",
    max: 50,
    optional: true
  },
  companyState: {
    type: String,
    label: "Province / State",
    max: 50,
    optional: true
  },
  companyPostal: {
    type: String,
    label: "Postal Code / Zip",
    max: 50,
    optional: true
  },
  companyCountry: {
    type: String,
    label: "Country",
    optional: true,
    autoform: {
      options: [
        {label: "Canada", value: "Canada"},
        {label: "United States", value: "USA"}
      ]
    }
  },
  lat: {
    type: String,
    label: "Lat",
    max: 255,
    optional: true
  },
  lng: {
    type: String,
    label: "Lng",
    max: 255,
    optional: true
  },
  companyPhone: {
    type: String,
    label: "Phone Number",
    max: 20,
    optional: true
  },
  companyFax: {
    type: String,
    label: "Fax Number",
    max: 20,
    optional: true
  },
  companyEmail: {
    type: String,
    label: "Contact Email Address",
    optional: true
  },
  companyFacebook: {
    type: String,
    label: "Facebook Page",
    optional: true
  },
  companyTwitter: {
    type: String,
    label: "Twitter I.D.",
    optional: true
  },
  companyYelp: {
    type: String,
    label: "Yelp Page",
    optional: true
  },
  homeSplash:{
    type: String,
    label: "Home Splash Image",
    optional: true
  }
});

Site.attachSchema(Schemas.Site);

//
// Collection Hooks for Site
//

Site.before.insert(function (userId, doc) {

  // Build address for geocoder from site values
  var location =  {
    street: doc.companyAddress,
    city: doc.companyCity,
    state: doc.companyState,
    country: doc.companyCountry
  };
  var address = '';

  // Set address based on variables being set or not.
  _.each(location, function(k, v) {
    if (k) {
      address += k +', ';
    }
  });

  // Using Method to geocode.
  Meteor.call('geoCode', address, function(error, result){
    doc.lat = result[0].latitude;
    doc.lng = result[0].longitude;
    console.log(result);
  });

});


Site.before.update(function (userId, doc, fieldNames, modifier, options) {

  // Build address for geocoder from site values
  var location =  {
    street: doc.companyAddress,
    city: doc.companyCity,
    state: doc.companyState,
    country: doc.companyCountry
  };
  var address = '';

  // Set address based on variables being set or not.
  _.each(location, function(k, v) {
    if (k) {
      address += k +', ';
    }
  });


  // Using Method to geocode.
  Meteor.call('geoCode', address, function(error, result){
      modifier.$set.lat = result[0].latitude;
      modifier.$set.lng = result[0].longitude;
      console.log(result);
  });

});
