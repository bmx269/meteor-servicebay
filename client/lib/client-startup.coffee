Meteor.startup ->

  AccountsEntry.config
#    logo: '/img/logo.png'
    privacyUrl: '/privacy'
    termsUrl: '/terms'
    homeRoute: '/'
    dashboardRoute: '/dashboard'
    passwordSignupFields: 'EMAIL_ONLY'
    profileRoute: 'profile'
    showSignupCode: true
