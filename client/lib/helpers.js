// helper to set active state on route
//UI.registerHelper('activeRouteClass', function () {
//  /* routes names */
//  var args = Array.prototype.slice.call(arguments, 0);
//  args.pop();
//
//  var active = _.any(args, function(name) {
//    return Router.current() && Router.current().route.getName() === name
//  });
//
//  return active && 'active';
//});


scrollUp = function() {
  $('body,html').scrollTop(0);
},

scrollPage = function() {
  /**
   * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
   * @see http://flesler.demos.com/jquery/scrollTo/
   * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
   */

    // The default axis is 'y', but in this demo, I want to scroll both
    // You can modify any default like this
  $.localScroll.defaults.axis = 'y';

  // Scroll initially if there's a hash (#something) in the url
  $.localScroll.hash({
    target: 'html', // Could be a selector or a jQuery object too.
    queue:true,
    duration:1500
  });

  /**
   * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
   * also affect the >> and << links. I want every link in the page to scroll.
   */
  $.localScroll({
    target: 'html', // could be a selector or a jQuery object too.
    queue:false,
    duration:1000,
    offset:-20,
    hash:true,
    onBefore:function( e, anchor, $target ){
      // The 'this' is the settings object, can be modified
    },
    onAfter:function( anchor, settings ){
      // The 'this' contains the scrolled element (#content)
    }
  });
};

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


// set global siteThemeID variable
siteThemeID = Session.get('theme');

Template.registerHelper('appReady', function () {
  return Template.instance().subscriptionsReady();
});


Template.registerHelper('siteThemeMaster', function () {
  return siteThemeID === 'Master';
});
Template.registerHelper('siteTheme0', function () {
  return siteThemeID === '0';
});
Template.registerHelper('siteTheme1', function () {
  return siteThemeID === '1';
});
Template.registerHelper('siteTheme2', function () {
  return siteThemeID === '2';
});
Template.registerHelper('siteTheme3', function () {
  return siteThemeID === '3';
});
