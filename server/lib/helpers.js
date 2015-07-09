Meteor.publishAuth = function(name, fn) {
  Meteor.publish(name, function() {
    if (! this.userId)
      return this.ready();

    return fn.apply(this, arguments);
  });
};


Sortable.collections = ['services'];