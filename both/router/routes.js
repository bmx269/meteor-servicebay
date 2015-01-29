/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/


var sites = new SubsManager({
    // will be cached only 20 recently used subscriptions
  cacheLimit: 20,
  // any subscription will be expired after 5 minutes of inactivity
  expireIn: 5
});

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',

  // default to site not found templates, real ones called in route.
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',

  waitOn: function() {
    headers;
    //return subs.subscribe('findSite', {domain: host});
    return sites.subscribe('site', host);
  },

  //onBeforeAction: function() {
    //IR_Filters.baseSubscriptions();
    //IR_Filters.scrollUp();
  //},

//  data: function() {
//    return siteData();
//  }
//  onAfterAction: function() {
//  }
});

Router.onBeforeAction('loading');

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
  only: [
      'dashboard',
      'subscription.index',
      'theme.index',
      'create.subscription',
      'edit.subscription',
      'create.site',
      'edit.site',
      'services.create',
      'services.edit',
      'edit.home',
      'edit.services',
      'edit.about',
      'edit.contact',
      'welcome'
  ]
});

Router.onBeforeAction('dataNotFound');
//Router.plugin('dataNotFound', {notFoundTemplate: 'NotFound'});

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
  this.route('listing', {path: '/listing'});
  this.route('welcome', {path: '/welcome'});

  // Client Sites

  // this.route('site.index', {path: '/'});
  this.route('services', {path: '/services'});
  // this.route('site.contact', {path: '/contact'});
  this.route('about', {path: '/about'});


  // Dashboard

  this.route('dashboard', {path: '/dashboard'});
  this.route('subscription.index', {path: '/dashboard/subscription'});
  this.route('theme.index', {path: '/dashboard/site/edit/themes'});
  this.route('create.subscription', {path: '/dashboard/subscription/create'});
  this.route('edit.subscription', {path: '/dashboard/subscription/edit/:_id'});
  this.route('edit.site', {path: '/dashboard/site/edit/:_id'});
  this.route('create.site', {path: '/dashboard/site/create'});
  this.route('service.create', {path: '/dashboard/site/wysiwyg/:_id/services/create'});
  this.route('service.edit', {path: '/dashboard/site/wysiwyg/:_id/services/edit/:_id'});


  // WYSIWYG Edit
  //this.route('edit.site', {path: '/dashboard/site/edit/:_id'});

  this.route('edit.home', {path: '/dashboard/site/wysiwyg/:_id'});
  this.route('edit.services', {path: '/dashboard/site/wysiwyg/:_id/services'});
  this.route('edit.about', {path: '/dashboard/site/wysiwyg/:_id/about'});
  this.route('edit.contact', {path: '/dashboard/site/wysiwyg/:_id/contact'});


  this.route('NotFound', {path: '*'});
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/user',
  redirect: '/dashboard',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signUp',
  path: '/user/register',
  redirect: '/welcome',
});

