var bucketUrl = Meteor.settings.public.s3.bucketUrl;

if (Meteor.isServer) {
  var accessKeyId = Meteor.settings.s3.accessKeyId;
  var secretAccessKey = Meteor.settings.s3.secretAccessKey;
  var bucketName = Meteor.settings.s3.bucketName;
}

ImageUpload.configure({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  bucketName: bucketName,
  bucketUrl: bucketUrl
});

siteLogo = ImageUpload.createCollection("siteLogo", Meteor.users, {
  defaultPermissions: true,
  maxUploadSize: 4,
  sizes: {
  thumbnail: [200, 200],
    normal: [800,800],
    large: [1200, 1200]
  }
});

bannerImages = ImageUpload.createCollection("bannerImages", Meteor.users, {
  defaultPermissions: true,
  maxUploadSize: 4,
  sizes: {
  thumbnail: [200, 200],
    normal: [800,800],
    large: [1200, 1200]
  }
});

wysiwygImages = ImageUpload.createCollection("wysiwygImages", Meteor.users, {
  defaultPermissions: true,
  maxUploadSize: 4,
  sizes: {
  thumbnail: [200, 200],
    normal: [800,800],
    large: [1200, 1200]
  }
});
