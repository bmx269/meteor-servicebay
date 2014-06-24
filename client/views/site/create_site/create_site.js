/*****************************************************************************/
/* CreateSite: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateSite.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CreateSite.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateSite: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateSite.created = function () {
};

Template.CreateSite.rendered = function () {
};

Template.CreateSite.destroyed = function () {
};

AutoForm.addHooks(['createSiteForm', 'editSiteForm'], {
    after: {
        insert: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
            } else {
                console.log("Insert Result:", result);
            }
        },
        update: function(error) {
            if (error) {
                console.log("Update Error:", error);
            } else {
                console.log("Updated!");
            }
        },
        remove: function(error) {
            console.log("Remove Error:", error);
        }
    }
});

AutoForm.addHooks(null, {
    onSubmit: function () {
        console.log("onSubmit ALL FORMS!");
    }
});
