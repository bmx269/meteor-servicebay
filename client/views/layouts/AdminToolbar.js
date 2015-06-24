Template.AdminToolbar.rendered = function () {
  $("#admin-toolbar .more-settings").click(function(e){
    e.preventDefault();
    $("#admin-flyout").toggleClass('open');
  });

};

Template.AdminToolbar.events({
  'click [action=edit]': function (event, tmpl) {
    event.preventDefault ();
  }
});
