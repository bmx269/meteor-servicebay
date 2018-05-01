import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/*
 * Add query methods like this:
 *  Services.findPublic = function () {
 *    return Services.find({is_public: true});
 *  }
 */
var Schemas = {};



Services = new Meteor.Collection('services', {});

Schemas.Services = new SimpleSchema({
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
    denyUpdate: true,
    optional: true,
  },
  siteId: {
    type: String,
    optional: true
  },
  serviceTitle: {
    type: String,
    label: "Service Title"
  },
  // image: {
  //   type: String,
  //   label: "Image",
  //   optional: true,
  //   autoform: {
  //     afFieldInput: {
  //       type: 'fileUpload',
  //       collection: 'Images',
  //       accept: 'image/*',
  //       label: 'Choose file',
  //     }
  //   }
  // },
  serviceDescription: {
    type: String,
    label: "Brief summary of the service",
    optional: true,
    max: 1000,
  },
  order: {
    type: Number,
    label: "Sort Weight",
    unique: false,
    autoValue: function() {
      if (this.isInsert) {
        return Services.find().count() + 1;
      }
    }
  }
});

Services.attachSchema(Schemas.Services);


//
// Collection Hooks for Services
//

//Service.before.insert(function (userId, doc) {
//
//  // Build address for geocoder from site values
//  var location =  {
//    street: doc.companyAddress,
//    city: doc.companyCity,
//    state: doc.companyState,
//    country: doc.companyCountry
//  };
//  var address = '';
//
//  // Set address based on variables being set or not.
//  _.each(location, function(k, v) {
//    if (k) {
//      address += k +', ';
//    }
//  });
//
//  // Using Method to geocode.
//  Meteor.call('geoCode', address, function(error, result){
//    doc.lat = result[0].latitude;
//    doc.lng = result[0].longitude;
//    console.log(result);
//  });
//
//});
