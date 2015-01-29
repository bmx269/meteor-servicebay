/*****************************************************************************/
/* Menu: Event Handlers and Helpers */
/*****************************************************************************/
Template.topMenu.rendered = function() {

  if (!this.rendered){

    $(document).scroll(function() {
       var scroll = $(this).scrollTop();
       var topDist = $("#branding").position();
       if (scroll > topDist.top) {
         $('#user-menu li.home').addClass('fixed');
       } else {
         $('#user-menu li.home').removeClass('fixed');
       }
     });

    this.rendered = true;
  }

};

Template.topMenu.events({
  'click .signout': function () {
    AccountsTemplates.logout();
  }
});



/*****************************************************************************/
/* Menu: Lifecycle Hooks */
/*****************************************************************************/
Template.MenuMaster.created = function () {
};

Template.MenuMaster.rendered = function () {
  scrollPage();
};

Template.Menu0.rendered = function () {
  scrollPage();
};

Template.Menu1.rendered = function () {
  scrollPage();
};

Template.Menu2.rendered = function () {
  scrollPage();

  $("a.home").click(function(e){
    e.preventDefault();
    scrollUp();
  });
};
Template.Menu3.rendered = function () {
  scrollPage();
};

Template.EditMenuMaster.rendered = function () {
  scrollPage();
};

Template.EditMenu0.rendered = function () {
  scrollPage();
};

Template.EditMenu1.rendered = function () {
  scrollPage();
};

Template.EditMenu2.rendered = function () {
  scrollPage();

  $("a.home").click(function(e){
    e.preventDefault();
    scrollUp();
  });

};
Template.EditMenu3.rendered = function () {
  scrollPage();
};

Template.MenuMaster.destroyed = function () {
};

// Mobile Menus
//
//Template.serviceBayMobileMenu.rendered = function() {
//  scrollPage();
//  if (!this.rendered){
//
//    var jPM = $.jPanelMenu({
//        menu: '#mobile-menu',
//        trigger: '.menu-trigger',
//        keyboardShortcuts: 'false'
//
//    });
//
//    jPM.on();
//    $('.menu-trigger').click(function(){});
//    this.rendered = true;
//  }
//
//};

//Template.serviceBayMobileMenu.destroyed = function() {
//
//    var jPM = $.jPanelMenu({
//        menu: '#mobile-menu',
//        trigger: '.menu-trigger',
//        keyboardShortcuts: 'false'
//    });
//
//    jPM.off();
//
//};
//
//
//Template.clientMobileMenu.rendered = function() {
//  scrollPage();
//  if (!this.rendered){
//
//    var jPM = $.jPanelMenu({
//        menu: '#client-mobile-menu',
//        trigger: '.client-menu-trigger',
//        keyboardShortcuts: 'false'
//    });
//
//    jPM.on();
//    $('.client-menu-trigger').click(function(){});
//    this.rendered = true;
//  }
//
//};
//
//Template.clientMobileMenu.destroyed = function() {
//
//    var jPM = $.jPanelMenu({
//        menu: '#client-mobile-menu',
//        trigger: '.client-menu-trigger',
//        keyboardShortcuts: 'false'
//    });
//
//    jPM.off();
//};

Template.adminToolbar.rendered = function () {
  //$(".fancybox").click(function(e){
  //  e.preventDefault();
  //});

  //$('.fancybox').fancybox({
  //  padding : 10
  //  //openEffect  : 'elastic'
  //});
  $(".more-settings").click(function(e){
    e.preventDefault();

    $("#admin-flyout").toggleClass('open')
  });

};

Template.adminToolbar.events({
  'click [action=edit]': function (event, tmpl) {
    event.preventDefault ();
  }
});