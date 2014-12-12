//ServicesEditController = RouteController.extend({
//  waitOn: function () {
//  },
//
//  onBeforeAction: function() {
//    Session.set('fromWhere', "dashboard");
//    return AccountsEntry.signInRequired(this);
//  },
//
//  data: function() {
//    Session.set("selectedDocId", this.params._id);
//    //return Site.findOne(this._id);
//    return editSiteData();
//  },
//
//  action: function () {
//    var currentSiteId = Session.get("selectedDocId");
//
//    var theSite = Site.findOne({'_id': currentSiteId});
//    Session.set("theme", theSite.siteTheme);
//
//
//
//
//    var baseURL = Meteor.absoluteUrl();
//
//    //this.render("EditSiteWysiwyg");
//
//    if (Session.equals("theme", "0")) {
//      this.render('EditHeader0', { to: 'header' });
//      this.render('EditFooter0', { to: 'footer' });
//      this.render("EditServicesIndexWysiwyg0");
//
//    } else if (Session.equals("theme", "1")) {
//      this.render("services");
//
//    } else if (Session.equals("theme", "2")) {
//      this.render('EditHeader2', { to: 'header' });
//      this.render('EditFooter2', { to: 'footer' });
//      this.render("EditServicesIndexWysiwyg2");
//
//    } else if (Session.equals("theme", "3")) {
//      this.render('EditHeader3', { to: 'header' });
//      this.render('EditFooter3', { to: 'footer' });
//      this.render("EditServicesIndexWysiwyg3");
//
//    } else if (Session.equals("theme", "Master")) {
//      this.render('EditHeaderMaster', { to: 'header' });
//      this.render('EditFooterMaster', { to: 'footer' });
//      this.render("EditServicesMaster");
//
//    } else {
//      this.redirect(baseURL + "dashboard");
//    }
//  },
//
//  onAfterAction: function() {
//    return Session.set('fromWhere', null);
//  }
//});
