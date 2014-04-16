Meteor.startup ->

  Accounts.ui.config
    passwordSignupFields: 'EMAIL_ONLY'

  AccountsEntry.config
    logo: '/img/logo.png'
    privacyUrl: '/privacy-policy'
    termsUrl: '/terms-of-use'
    homeRoute: '/'
    dashboardRoute: '/dashboard'
    profileRoute: 'profile'
    showSignupCode: true

#   # createUserAdminRoles();

  Blog.config
    blogIndexTemplate: 'blogList' # '/blog' route
    blogShowTemplate: 'blogPost'   # '/blog/:slug' route
    pageSize: 10


# Template.signUp.rendered = ->
#   $('form').validate
#     rules: ccValidation
#     submitHandler: (form) ->
#       Billing.createToken form, (status, response) ->
#         unless response.error
#           Meteor.call 'createCustomer', Meteor.userId(), response, true, (error, response) ->
#             unless error
#               Meteor.call 'startSubscription', (error, response) ->
#                 doWhatever()


################################################################################
# Register Global Helpers
#

if Package.ui
  ->
    Handlebars = Package.ui.Handlebars


# UI.registerHelper "site", ->
#   headers.ready ->

#   #console.log(headers.get());
#   headersReady = headers.ready()
#   if headersReady
#     host = headers.get("host")
#     host = String(host).replace(/^www\./, "")
#     Session.set "domain", host
#     domain = Session.get("domain")
#     theSite = Site.findOne(domain: domain)
#     if theSite
#       theme = theSite.siteTheme
#       Session.set "theme", theme
#       theSite


# UI.registerHelper "siteTheme", ->
#   Session.get "theme"

# Handlebars.registerHelper "activeRouteClass", ->
#   # routes names
#   args = Array::slice.call(arguments_, 0)
#   active = undefined
#   args.pop()
#   active = _.any(args, (name) ->
#     Router.current().route.name is name
#   )
#   return "active"  if active

