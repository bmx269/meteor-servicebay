/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
var IR_AfterHooks, IR_Filters, IR_UnloadHooks, baseURL;

IR_Filters = {
  baseSubscriptions: function() {
    Meteor.subscribe("site");
  },
  isLoggedIn: function() {
    if (!Meteor.user()) {
      this.render("entrySignIn");
      this.stop();
    }
  },
  scrollUp: function() {
    $('body,html').scrollTop(0);
  },
  startNProgress: function() {
    if (_.isFunction(this.data)) {
      NProgress.start();
    }
  },
  pageview: function() {
    GAnalytics.pageview(this.path);
  },
  isAdmin: function() {
    if (!Roles.userIsInRole(Meteor.userId(), ["admin"])) {
      this.render("login");
      this.stop();
    }
  },
  animateContentOut: function() {
    $("#content").removeClass("animated fadeIn fadeInRight");
    $("footer").addClass("hide");
  }
};

IR_AfterHooks = {
  fadeContentIn: function() {
    $("#content").addClass("animated fadeIn");
    $("footer").removeClass("hide");
  },
  endNProgess: function() {
    NProgess.done();
  }
};

IR_UnloadHooks = {};


Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  yieldTemplates: {
    'Header': {
      to: 'header'
    },
    'Footer': {
      to: 'footer'
    }
  },
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',

  waitOn: function() {
    headers;
    IR_Filters.baseSubscriptions();
  },
  onBeforeAction: function() {
    //IR_Filters.baseSubscriptions();
    IR_Filters.scrollUp();
  }
});

Router.onBeforeAction('loading');

Router.onBeforeAction('dataNotFound');

Router.map(function () {

  // Main Site

  this.route('home', {path: '/'});
  this.route('features', {path: '/features'});
  this.route('pricing', {path: '/pricing'});
  this.route('whychoose', {path: '/why-choose'});
  this.route('promise', {path: '/promise'});
  this.route('team', {path: '/team'});
  this.route('terms', {path: '/terms'});
  this.route('privacy', {path: '/privacy'});
  this.route('contact', {path: '/contact'});
  this.route('support', {path: '/support'});

  // Client Sites

  // this.route('site.index', {path: '/'});
  this.route('services.index', {path: '/services'});
  // this.route('site.contact', {path: '/contact'});
  this.route('site.about', {path: '/about'});

  // Dashboard

  this.route('dashboard', {path: '/dashboard', loginRequired: 'login'});
  this.route('subscription.index', {path: '/dashboard/subscription'});
  this.route('theme.index', {path: '/dashboard/site/themes'});
  this.route("notFound", {path: "*"});

});
