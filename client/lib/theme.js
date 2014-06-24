 var siteTheme0 = {
  f: function(){
  $('html').removeClass('theme1');
  $('html').removeClass('theme2');
  $('html').removeClass('theme3');
  $('html').removeClass('theme269');
  $('html').removeClass('theme-none');
  $('html').addClass('theme0');
 }};

 var siteTheme1 = {
  f: function(){
  $('html').removeClass('theme0');
  $('html').removeClass('theme2');
  $('html').removeClass('theme3');
  $('html').removeClass('theme269');
  $('html').removeClass('theme-none');
  $('html').addClass('theme1');
 }};

 var siteTheme2 = {
  f: function(){
  $('html').removeClass('theme0');
  $('html').removeClass('theme1');
  $('html').removeClass('theme3');
  $('html').removeClass('theme269');
  $('html').removeClass('theme-none');
  $('html').addClass('theme2');
 }};

 var siteTheme3 = {
  f: function(){
  $('html').removeClass('theme0');
  $('html').removeClass('theme1');
  $('html').removeClass('theme2');
  $('html').removeClass('theme269');
  $('html').removeClass('theme-none');
  $('html').addClass('theme3');
 }};

 var siteTheme269 = {
  f: function(){
  $('html').removeClass('theme0');
  $('html').removeClass('theme1');
  $('html').removeClass('theme2');
  $('html').removeClass('theme3');
  $('html').removeClass('theme-none');
  $('html').addClass('theme269');
 }};

 var siteThemeNone = {
   f: function(){
     $('html').removeClass('theme0');
     $('html').removeClass('theme1');
     $('html').removeClass('theme2');
     $('html').removeClass('theme3');
     $('html').removeClass('theme269');
     $('html').addClass('theme-none');
   }};

// Detect Session theme setting and run function
Deps.autorun(function(c) {
  if (Session.equals("theme", "0")) {
    return siteTheme0.f();
  } else if (Session.equals("theme", "1")) {
    return siteTheme1.f();
  } else if (Session.equals("theme", "2")) {
    return siteTheme2.f();
  } else if (Session.equals("theme", "3")) {
    return siteTheme3.f();
  } else if (Session.equals("theme", "269")) {
    return siteTheme269.f();
  } else {
    Session.set("theme", "none");
    return siteThemeNone.f();
  }
});
