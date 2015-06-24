/*****************************************************************************/
/* Contact: Event Handlers and Helpers */
/*****************************************************************************/
Template.ContactForm.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});



Template.ContactForm.helpers({

  contactFormSchema: function() {
    return Schema.contact;
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.ContactForm.created = function () {

};


Template.ContactForm.rendered = function () {
};

Template.ContactForm.destroyed = function () {
};
