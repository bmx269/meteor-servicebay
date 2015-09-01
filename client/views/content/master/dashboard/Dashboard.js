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


//

Template.sitesList.rendered = function () {
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
    Session.set("selectedDocId", this._id);
  },
  'click .deleteThis': function(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to Permanently Delete this Subscription?")) {
      Subscription.remove (this._id);
      toastr.success ('The Subscription has been Deleted.','Success');
    }
  }
};



Template.site.created = function () {

  // 1. Initialization

  var instance = this;
  var currentUser = Meteor.userId();
  var sub = new SubsManager({
    // will be cached only 20 recently used subscriptions
    cacheLimit: 20,
    // any subscription will be expired after 5 minutes of inactivity
    expireIn: 5
  });

  // initialize the reactive variables
  instance.user = new ReactiveVar(currentUser);
  instance.ready = new ReactiveVar(false);

  // 2. Autorun

  // will re-run when the "user" reactive variables changes
  this.autorun(function () {

    // get the limit
    var user = instance.user.get();

    //console.log("Asking for "+user+"'s sites…")


    // subscribe to the posts publication
    var subscription = sub.subscribe('userSites', user);

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      //console.log("> Received "+user+"'s sites. \n\n")
      instance.ready.set(true);
    } else {
      instance.ready.set(false);
      //console.log("> Subscription is not ready yet. \n\n");
    }
  });

  // 3. Cursor

  instance.userSites = function() {
    var user = instance.user.get();
    return Site.findFaster({'userId': user});
  }

};

Template.site.helpers({
  editingSite: function () {
    return Site.findOne(Session.get("selectedDocId"));
  },
  siteItem: function(){
    return Template.instance().userSites();
  },
  // the subscription handle
  isReady: function () {
    return Template.instance().ready.get();
  }
});

Template.site.events = {

  'click .editThis': function() {
    Session.set("selectedDocId", this._id);
  },
  'click .deleteThis': function(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to Permanently Delete this Site?")) {
      Site.remove (this._id);
      toastr.success ('The Site has been Deleted.','Success');
    }
  }
};

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {
};

Template.Dashboard.rendered = function () {
};

Template.Dashboard.destroyed = function () {
};
