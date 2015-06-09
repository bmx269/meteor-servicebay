/*****************************************************************************/
/* SiteAbout: Event Handlers and Helpers */
/*****************************************************************************/
Template.AboutMaster.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.AboutMaster.helpers({
  about: function(){
    return Site.findOneFaster({'_id': Session.get("selectedDocId")},{fields: {'aboutIntro': 1}});
  }
});

/*****************************************************************************/
/* SiteAbout: Lifecycle Hooks */
/*****************************************************************************/
Template.AboutMaster.created = function () {
};

Template.AboutMaster.rendered = function () {
};

Template.AboutMaster.destroyed = function () {
};