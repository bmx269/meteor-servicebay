/*
 * Add query methods like this:
 *  Subscription.findPublic = function () {
 *    return Subscription.find({is_public: true});
 *  }
 */
var Schemas = {};



Subscription = new Meteor.Collection('subscription', {});


Schemas.Subscription = new SimpleSchema({
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
  siteTitle: {
    type: String,
    label: "Site Title",
    max: 200
  },
  domain: {
    type: String,
    label: "Domain",
    unique: true
  },
  fulldomain: {
    type: String,
    label: "Full Domain",
    optional: true
  },
  subscriptionLevel: {
    type: Number,
    label: "Subscription Level",
    min: 0
  },
  active: {
    type: Number,
    label: "Subscription Active",
    min: 0,
  },
  expiration: {
    type: Date,
    label: "Site Expiration",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
});

Subscription.attachSchema(Schemas.Subscription);
