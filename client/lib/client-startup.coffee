Meteor.startup ->

#  Accounts.ui.config
#    passwordSignupFields: 'EMAIL_ONLY'

  AccountsEntry.config
#    logo: '/img/logo.png'
    privacyUrl: '/privacy'
    termsUrl: '/terms'
    homeRoute: '/'
    dashboardRoute: '/dashboard'
    passwordSignupFields: 'EMAIL_ONLY'
    profileRoute: 'profile'
    showSignupCode: true

#  createUserAdminRoles();

  Blog.config
    blogIndexTemplate: 'blogList' # '/blog' route
    blogShowTemplate: 'blogPost'   # '/blog/:slug' route
#    blogIndexTemplate: 'blogIndex'
#    blogShowTemplate: 'blogShow'
#    blogAdminTemplate: 'blogAdmin'
#    blogAdminNewTemplate:'blogAdminNew'
#    blogAdminEditTemplate: 'blogAdminEdit'
    pageSize: 10

  Billing.config
    publishableKey: ""

#  Template.signUp.rendered = ->
#     $('form').validate
#       rules: ccValidation
#       submitHandler: (form) ->
#         Billing.createToken form, (status, response) ->
#           unless response.error
#             Meteor.call 'createCustomer', Meteor.userId(), response, true, (error, response) ->
#               unless error
#                 Meteor.call 'startSubscription', (error, response) ->
#                   doWhatever()


################################################################################
# Register Global Helpers
#

if Package.ui
  ->
    Handlebars = Package.ui.Handlebars
