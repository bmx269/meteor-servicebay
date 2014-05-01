Meteor.startup ->

  Accounts.ui.config
    passwordSignupFields: 'EMAIL_ONLY'

  # AccountsEntry.config
  #   logo: '/img/logo.png'
  #   privacyUrl: '/privacy-policy'
  #   termsUrl: '/terms-of-use'
  #   homeRoute: '/'
  #   dashboardRoute: '/dashboard'
  #   profileRoute: 'profile'
  #   showSignupCode: true

#   # createUserAdminRoles();

  Blog.config
    blogIndexTemplate: 'blogList' # '/blog' route
    blogShowTemplate: 'blogPost'   # '/blog/:slug' route
    pageSize: 10



if Package.ui
  ->
    Handlebars = Package.ui.Handlebars
