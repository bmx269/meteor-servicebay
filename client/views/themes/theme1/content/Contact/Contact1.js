/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.Contact1.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Contact1.helpers({
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
Template.Contact1.created = function () {
};

Template.Contact1.rendered = function () {
};

Template.Contact1.destroyed = function () {
};
