Template.serviceBayMobileMenu.rendered = function(){

  if (!this.rendered){
    var jPM = $.jPanelMenu({
        menu: '#mobile-menu',
        trigger: '.menu-trigger'
    });
    jPM.on();
    // $.slidebars();
    this.rendered = true;
  }

};


Template.clientMobileMenu.rendered = function(){

  if (!this.rendered){
    var jPM = $.jPanelMenu({
        menu: '#mobile-menu',
        trigger: '.menu-trigger'
    });
    jPM.on();
    // $.slidebars();
    this.rendered = true;
  }

};
