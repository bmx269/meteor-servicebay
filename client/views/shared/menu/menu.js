/*****************************************************************************/
/* Menu: Event Handlers and Helpers */
/*****************************************************************************/
Template.Menu.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Menu.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

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

/*****************************************************************************/
/* Menu: Lifecycle Hooks */
/*****************************************************************************/
Template.Menu.created = function () {
};

Template.Menu.rendered = function () {
};

Template.Menu.destroyed = function () {
};


