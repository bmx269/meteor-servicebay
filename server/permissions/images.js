
siteLogo.allow({
  insert: function(userId, doc) {
    // Any authenticated user can create images
    return !!userId;
  },
  update: function(userId, doc) {
     // User can update their own image only
    return doc && doc.addedBy === userId;
  },
  remove: function(userId, doc) {
     // User can remove their own image only
    return doc && doc.addedBy === userId;
  },
  download: function (userId, fileObj) {
    // If publicRead has been set anyone can download, otherwise users
    // can only download images that they uploaded
    if (publicRead) {
      return true;
    } else {
      return fileObj.addedBy === userId;
    }
  }
});

bannerImages.allow({
  insert: function(userId, doc) {
    // Any authenticated user can create images
    return !!userId;
  },
  update: function(userId, doc) {
     // User can update their own image only
    return doc && doc.addedBy === userId;
  },
  remove: function(userId, doc) {
     // User can remove their own image only
    return doc && doc.addedBy === userId;
  },
  download: function (userId, fileObj) {
    // If publicRead has been set anyone can download, otherwise users
    // can only download images that they uploaded
    if (publicRead) {
      return true;
    } else {
      return fileObj.addedBy === userId;
    }
  }
});

wysiwygImages.allow({
  insert: function(userId, doc) {
    // Any authenticated user can create images
    return !!userId;
  },
  update: function(userId, doc) {
     // User can update their own image only
    return doc && doc.addedBy === userId;
  },
  remove: function(userId, doc) {
     // User can remove their own image only
    return doc && doc.addedBy === userId;
  },
  download: function (userId, fileObj) {
    // If publicRead has been set anyone can download, otherwise users
    // can only download images that they uploaded
    if (publicRead) {
      return true;
    } else {
      return fileObj.addedBy === userId;
    }
  }
});
