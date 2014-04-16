
// var siteTheme0 = {
//   f: function(){
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme2');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme0');
// }};
// var siteTheme1 = {
//   f: function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme2');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme1');
// }};
// var siteTheme2 = {
//   f: function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme2');
// }};
// var siteTheme3 = {
//   f: function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme2');
//   $('html').addClass('theme3');
// }};


// Deps.autorun(function(c) {

//   // if (Session.equals("theme", "1")){
//   //   siteTheme1.f();
//   // } else if (Session.equals("theme", "2")){
//   //   siteTheme2.f();
//   // } else if (Session.equals("theme", "3")){
//   //   siteTheme3.f();
//   // } else {
//   //   Session.set("theme", "0");
//   //   siteTheme0.f();
//   // }




// });

// Template.serviceBayMobileMenu.rendered = function(){
//   var jPM = $.jPanelMenu({
//       menu: '#mobile-menu',
//       trigger: '.menu-trigger'
//   });
//   jPM.on();
// };


// Template.clientMobileMenu.rendered = function(){
//   var jPM = $.jPanelMenu({
//       menu: '#mobile-menu',
//       trigger: '.menu-trigger'
//   });
//   jPM.on();
// };



// siteTheme0 = function(){
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme2');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme0');
// };
// siteTheme1 = function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme2');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme1');
// };
// siteTheme2 = function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme3');
//   $('html').addClass('theme2');
// };
// siteTheme3 = function(){
//   $('html').removeClass('theme0');
//   $('html').removeClass('theme1');
//   $('html').removeClass('theme2');
//   $('html').addClass('theme3');
// };


// Deps.autorun(function(c) {

//   if (Session.equals("theme", "1")){
//     siteTheme1();
//   } else if (Session.equals("theme", "2")){
//     siteTheme2();
//   } else if (Session.equals("theme", "3")){
//     siteTheme3();
//   } else {
//     Session.set("theme", "0");
//     siteTheme0();
//   }
// });
