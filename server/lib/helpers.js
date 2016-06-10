Meteor.publishAuth = function(name, fn) {
  Meteor.publish(name, function() {
    if (! this.userId)
      return this.ready();

    return fn.apply(this, arguments);
  });
};


Sortable.collections = ['services'];

// var accessKeyId = Meteor.settings.s3.accessKeyId;
// var secretAccessKey = Meteor.settings.s3.secretAccessKey;
// var bucketName = Meteor.settings.s3.bucketName;
