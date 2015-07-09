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
  image: {
    type: String,
    label: "Image",
    optional: true
  },
  serviceDescription: {
    type: String,
    label: "Brief summary of the service",
    optional: true,
    max: 1000
  },
  order: {
    type: Number,
    label: "Sort Weight",
    optional: true,
    max: 9999
  }
});

Services.attachSchema(Schemas.Services);
