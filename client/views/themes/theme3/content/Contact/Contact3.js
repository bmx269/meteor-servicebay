/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.Contact3.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Contact3.helpers({
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
Template.Contact3.created = function () {
};

Template.Contact3.rendered = function () {
};

Template.Contact3.destroyed = function () {
};
