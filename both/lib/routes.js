/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
AccountsTemplates.configureRoute('signIn', {
  name: 'signIn',
  path: '/user',
  redirect: '/dashboard',
});
//
//AccountsTemplates.configureRoute('signUp', {
//  name: 'signUp',
//  path: '/user/register',
//  redirect: '/welcome',
//});
//

AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotPwd',
  path: '/user/password'
});


// Tell FR to wait until our ES6 code is fully initialized
FlowRouter.wait();


FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render('MasterLayout',
      {
        layout: 'HomeLayout',
      }
    );
    console.log( "Okay, we're on the Home page!" );
  },
  name: 'home' // Optional route name.
});

FlowRouter.route( '/features', {
  action: function() {
    BlazeLayout.render('MasterLayout',
      {
        header: 'Header',
        content: 'Features',
        footer: 'Footer'
      }
    );
    console.log( "Okay, we're on the Features page!" );
  },
  name: 'features' // Optional route name.
});

FlowRouter.route( '/terms', {
  action: function() {
    BlazeLayout.render('MasterLayout',
      {
        header: 'Header',
        content: 'Terms',
        footer: 'Footer'
      }
    );
    console.log( "Okay, we're on the Terms page!" );
  },
  name: 'termsOfService' // Optional route name.
});

FlowRouter.route( '/404', {

  action: function() {
    BlazeLayout.render('MasterLayout',
      {
        header: 'Header' + siteThemeID,
        content: 'Home' + siteThemeID,
        footer: 'Footer' + siteThemeID
      }
    );
    console.log( "Okay, we're on the 404 page!" );
  },
  name: '404' // Optional route name.
});





// Admin Routes

var adminRoutes = FlowRouter.group({
  prefix: '/dashboard',
  name: 'dashboard',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});


adminRoutes.route('/', {
  action: function() {
     BlazeLayout.render('MasterLayout',
      {
        header: 'Header'+ themeMasterID,
        content: 'Dashboard',
        footer: 'Footer'+ themeMasterID
      }
    );
  },
  name: 'dashboard', // Optional route name.
  triggersEnter: [function(context, redirect) {
    console.log('running /dashboard trigger');
  }]
});


adminRoutes.route('/site/add', {
  action: function() {

    var siteThemeID = Session.get('theme');
    var themeMasterID = App.variables.themeMaster;

    if (App.themeIsMaster()) {
      BlazeLayout.render('MasterLayout',
        {
          header: 'Header'+ themeMasterID,
          content: 'CreateSite',
          footer: 'Footer'+ themeMasterID
        }
      );
    }
    else {
      FlowRouter.redirect('/404');
    }
  },
  name: 'create.site', // Optional route name.
  triggersEnter: [function(context, redirect) {
    console.log('running /site/add trigger');
  }]
});





FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions: function() {

  },
  action: function() {
    var siteThemeID = Session.get('theme');
    var themeMasterID = App.variables.themeMaster;

    FlowRouter.redirect('/404');
  }
};


// FlowRouter is now ready to go
FlowRouter.initialize();

//Router.map(function () {
//
//  // Main Site
//
//  this.route('home', {path: '/'});
//  this.route('features', {path: '/features'});
//  this.route('pricing', {path: '/pricing'});
//  this.route('whychoose', {path: '/why-choose'});
//  this.route('promise', {path: '/promise'});
//  this.route('team', {path: '/team'});
//  this.route('terms', {path: '/terms'});
//  this.route('privacy', {path: '/privacy'});
//  this.route('contact', {path: '/contact'});
//  this.route('support', {path: '/support'});
//  this.route('listing', {path: '/listing'});
//  this.route('welcome', {path: '/welcome'});
//
//  // Client Sites
//
//  // this.route('site.index', {path: '/'});
//  this.route('services', {path: '/services'});
//  // this.route('site.contact', {path: '/contact'});
//  this.route('about', {path: '/about'});
//
//
//  // Dashboard
//
//  this.route('dashboard', {path: '/dashboard'});
//  this.route('subscription.index', {path: '/dashboard/subscription'});
//  this.route('theme.index', {path: '/dashboard/site/edit/themes'});
//  this.route('create.subscription', {path: '/dashboard/subscription/create'});
//  this.route('edit.subscription', {path: '/dashboard/subscription/edit/:_id'});
//  this.route('edit.site', {path: '/dashboard/site/edit/:_id'});
//  this.route('create.site', {path: '/dashboard/site/create'});
//  this.route('service.create', {path: '/dashboard/site/wysiwyg/:_id/services/create'});
//  this.route('service.edit', {path: '/dashboard/site/wysiwyg/:_id/services/edit/:_id'});
//
//
//  // WYSIWYG Edit
//  //this.route('edit.site', {path: '/dashboard/site/edit/:_id'});
//
//  this.route('edit.home', {path: '/dashboard/site/wysiwyg/:_id', layoutTemplate:'MasterEditLayout'});
//  this.route('edit.services', {path: '/dashboard/site/wysiwyg/:_id/services', layoutTemplate:'MasterEditLayout'});
//  this.route('edit.about', {path: '/dashboard/site/wysiwyg/:_id/about', layoutTemplate:'MasterEditLayout'});
//  this.route('edit.contact', {path: '/dashboard/site/wysiwyg/:_id/contact', layoutTemplate:'MasterEditLayout'});
//
//
//});

//AccountsTemplates.configureRoute('signIn', {
//  name: 'signIn',
//  path: '/user',
//  redirect: '/dashboard',
//});
//
//AccountsTemplates.configureRoute('signUp', {
//  name: 'signUp',
//  path: '/user/register',
//  redirect: '/welcome',
//});
//

//AccountsTemplates.configureRoute('forgotPwd', {
//  name: 'forgotPwd',
//  path: '/user/password'
//});


