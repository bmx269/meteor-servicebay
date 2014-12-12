/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.Contact0.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Contact0.helpers({
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
Template.Contact0.created = function () {
};

Template.Contact0.rendered = function () {
};

Template.Contact0.destroyed = function () {
};
