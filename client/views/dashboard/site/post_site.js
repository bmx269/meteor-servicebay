// Template.postSite.events({
//   'submit form': function(e) {
//     e.preventDefault();

//     var site = {
//       url: $(e.target).find('[name=url]').val(),
//       title: $(e.target).find('[name=title]').val(),
//       message: $(e.target).find('[name=message]').val()
//     }

//     Meteor.call('site', post, function(error, id) {
//       if (error)
//         return alert(error.reason);

//       Router.go('dashboard');
//     });
//   }
// });
