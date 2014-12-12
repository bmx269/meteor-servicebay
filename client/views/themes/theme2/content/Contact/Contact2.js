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
Template.Contact2.created = function () {
};

Template.Contact2.rendered = function () {
};

Template.Contact2.destroyed = function () {
};
