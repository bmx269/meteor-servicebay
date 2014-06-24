/*
 * Add query methods like this:
 *  Site.findPublic = function () {
 *    return Site.find({is_public: true});
 *  }
 */


Site = new Meteor.Collection('site', {
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
      denyUpdate: true
    },
    siteId: {
      type: String,
      label: "Site ID"
    },
    domain: {
      type: String,
      label: "Domain",
      unique: true
    },
    siteTheme: {
      type: String,
      label: "Theme",
      min: 0
    },
    siteLogo: {
      type: String,
      label: "Your Logo",
      optional: true,
    },
    siteTitle: {
      type: String,
      label: "Company Name",
      max: 200
    },
    homeIntro: {
      type: String,
      label: "Homepage Introduction",
      optional: true,
      max: 1000
    },
    servicesIntro: {
      type: String,
      label: "Services Introduction",
      optional: true,
      max: 1000
    },
    aboutIntro: {
      type: String,
      label: "Your Company Bio",
      optional: true,
      max: 3000
    },
    contactIntro: {
      type: String,
      label: "Contact Introduction",
      optional: true,
      max: 1000
    },
    companyAddress: {
      type: String,
      label: "Street Address",
      max: 100,
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
      label: "State",
      max: 50,
      optional: true
    },
    companyCountry: {
      type: String,
      label: "Country",
      max: 50,
      optional: true
    },
    companyPhone: {
      type: Number,
      label: "Phone Number",
      max: 20,
      optional: true
    },
    companyfax: {
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
      label: "Twitter URL",
      optional: true
    },
    companyYelpk: {
      type: String,
      label: "Yelp Page",
      optional: true
    }
  }
});



