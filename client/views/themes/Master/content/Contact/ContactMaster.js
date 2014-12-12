/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/

Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});


Template.ContactMaster.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ContactMaster.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

    contactFormSchema: function() {
        return Schema.contact;
    }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.ContactMaster.created = function () {
};

Template.ContactMaster.rendered = function () {
};

Template.ContactMaster.destroyed = function () {
};