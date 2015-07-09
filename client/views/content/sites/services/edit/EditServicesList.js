//Template.EditServicesList2.helpers({
//  services: function() {
//    var currentSiteId = Session.get("selectedDocId");
//    Meteor.subscribe('services', {'siteId': currentSiteId});
//    return Services.findFaster({'siteId': currentSiteId});
//  }
//});
//



Template.EditServicesList.created = function () {

  // 1. Initialization

  var instance = this;
  var currentSiteId = Session.get("selectedDocId");
  var sub = new SubsManager({
    // will be cached only 20 recently used subscriptions
    cacheLimit: 20,
    // any subscription will be expired after 5 minutes of inactivity
    expireIn: 5
  });

  // initialize the reactive variables
  instance.id = new ReactiveVar(currentSiteId);
  instance.ready = new ReactiveVar(false);

  // 2. Autorun

  // will re-run when the "siteId" reactive variables changes
  this.autorun(function () {

    // get the limit
    var id = instance.id.get();

    console.log("Asking for "+id+"'s services…")


    // subscribe to the posts publication
    var subscription = sub.subscribe('services', id);

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      console.log("> Received "+id+"'s services. \n\n")
      instance.ready.set(true);
    } else {
      instance.ready.set(false);
      console.log("> Subscription is not ready yet. \n\n");
    }
  });

  // 3. Cursor

  instance.services = function() {
    var id = instance.id.get();
    return Services.findFaster({'siteId': id}, {sort:{order: 1}, reactive:true});
  }

};

Template.EditServicesList.helpers({

  services: function(){
    return Template.instance().services();
  },
  // the subscription handle
  isReady: function () {
    return Template.instance().ready.get();
  },
  serviceOptions: function () {
    return {
      sort: true
    };
  }
});

