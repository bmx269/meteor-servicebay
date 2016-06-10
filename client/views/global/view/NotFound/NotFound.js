/*****************************************************************************/
/* NotFound: Event Handlers and Helpers */
/*****************************************************************************/


Template.NotFound.helpers({

    domain: function() {
        // get domain in session
      return Session.get("domain");
    }
});


