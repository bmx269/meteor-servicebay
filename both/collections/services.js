/*
 * Add query methods like this:
 *  Services.findPublic = function () {
 *    return Services.find({is_public: true});
 *  }
 */

Services = new Meteor.Collection('services', {
  schema: {
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
      label: "Site ID"
    },
    domain: {
      type: String,
      label: "Domain"
    },
    serviceTitle: {
      type: String,
      label: "Service Title"
    },
    image: {
      type: String,
      label: "Image"
    },
    serviceDescription: {
      type: String,
      label: "Brief summary",
      optional: true,
      max: 1000
    }
  }
});
