/*****************************************************************************/
/* Dashboard: Event Handlers and Helpers */
/*****************************************************************************/
Template.Dashboard.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

});

Template.subscriptionsList.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  siteItem: function(){
      var user = Meteor.userId();


      if (user) {
          //console.log(user);
          var theSites = Site.findFaster({'userId': user});
          return theSites;

      }
      console.log('no sites found');
      return null;
  },

  subscriptionItem: function(){
    var user = Meteor.userId();


    if (user) {
      //console.log(user);
      var theSubs = Subscription.findFaster({'userId': user});
      return theSubs;
    }
    console.log('no subscriptions found');
    return null;
  }

});

Template.subscriptionsList.rendered = function () {
  $(".fancybox").click(function(e){
    e.preventDefault();
  });

  $('.fancybox').fancybox({
    padding : 10
    //openEffect  : 'elastic'
  });

};

Template.subscription.events = {

  'click .editThis': function() {
    Session.set('selectedDocId', this._id);
  },
  'click .deleteThis': function(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to Permanently Delete this Subscription?")) {
      Subscription.remove (this._id);
      Notifications.success ('Success', 'The Subscription has been Deleted.');
    }
  }
};

Template.site.events = {

  'click .editThis': function() {
    Session.set('selectedDocId', this._id);
  },
  'click .deleteThis': function(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to Permanently Delete this Site?")) {
      Site.remove (this._id);
      Notifications.success ('Success', 'The Site has been Deleted.');
    }
  },
  'click .wysiwygThis': function() {
   // Session.set('selectedDocId', this._id);
  },
};

// AutoForm.hooks({
//   onSubmit: function (insert, update, current) {
//     if (customHandler(insert)) {
//       this.resetForm();
//       this.done();
//       $.fancybox.close();
//     }
//     return false;
//   }
// });
//var ownPost = Meteor.userId();
//Meteor.subscribe('site', {userId: ownPost});

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {
};

Template.Dashboard.rendered = function () {
      // $('.fancybox').fancybox({
      //     padding : 0,
      //     openEffect  : 'elastic'
      // });
};

Template.Dashboard.destroyed = function () {
};
