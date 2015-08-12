var Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

//var Schemas = {};
//
//
//Images = new Meteor.Collection('images', {});