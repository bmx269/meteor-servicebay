// this is quiet similar to the implementation of Meteor.subscribe
// it simply uses Deps.Dependency to make the handle.ready function reactive

// IRLibLoader.load = function(src) {
//   var handle, self;
//   self = this;
//   if (!this._libs[src]) {
//     this._libs[src] = {
//       src: src,
//       ready: false,
//       readyDeps: new Deps.Dependency
//     };
//     $.getScript(src, function() {
//       var lib;
//       lib = self._libs[src];
//       lib.ready = true;
//       return lib.readyDeps.changed();
//     });
//   }
//   handle = {
//     ready: function() {
//       var lib;
//       lib = self._libs[src];
//       lib.readyDeps.depend();
//       return lib.ready;
//     }
//   };
//   return handle;
// };
