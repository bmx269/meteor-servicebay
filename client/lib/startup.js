Meteor.startup(function () {
    //_.extend(Notifications.defaultOptions, {
    //    timeout: 5000
    //});
  GoogleMaps.load();
});

Meteor.startup(function() {

  var collections = _.map(Mongo.Collection.getAll(),function(collection) {
    var collectionName = collection.name;
    return collectionName.charAt(0).toUpperCase() + collectionName.substr(1);
  });

  Session.set("Mongol", {
    'collections': collections,
    'display': true,
    'opacity_normal': ".7",
    'opacity_expand': ".9"
  });

});


