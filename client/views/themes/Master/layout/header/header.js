/*****************************************************************************/
/* Header: Event Handlers and Helpers */
/*****************************************************************************/
Template.HeaderMaster.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.HeaderMaster.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.HeaderMaster.created = function () {
};

Template.HeaderMaster.rendered = function () {

};

Template.HeaderMaster.destroyed = function () {
};

Template.HomeHeaderMaster.rendered = function () {

  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){

  }
  else{
    //paralax
    $(window).stellar({
      horizontalScrolling: false,
      responsive: true
    });
  }
};

Template.EditHomeHeaderMaster.rendered = function () {

  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){

  }
  else{
    //paralax
    $(window).stellar({
      horizontalScrolling: false,
      responsive: true
    });
  }
};

Template.Header2.rendered = function () {

  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){

  }
  else{
    //paralax
    $(window).stellar({
      horizontalScrolling: false,
      responsive: true
    });
  }

  $("a.home").click(function(e){
    e.preventDefault();
    scrollUp();
  });
};

Template.EditHeader2.rendered = function () {

  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){

  }
  else{
    //paralax
    $(window).stellar({
      horizontalScrolling: false,
      responsive: true
    });
  }

  //$(window).attr('data-stellar-ratio', 0.5);
  //$.stellar();

  $("a.home").click(function(e){
    e.preventDefault();
    scrollUp();
  });
};