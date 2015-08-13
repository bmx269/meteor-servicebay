FS.debug = true;

var imageStore = new FS.Store.FileSystem("images", {
  //path: "images", //optional, default is "/cfs/files" path within app container
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  maxTries: 5 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});
