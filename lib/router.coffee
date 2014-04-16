# onBeforeAction: ->
#   Session.set('fromWhere', “<routename>”)
#   @redirect "/sign-in" if !Meteor.user()

# and an after

# onAfterAction: ->
#   Session.set('fromWhere', null)


# Before Hooks Compilation
IR_Filters =

  # All standard subscriptions you need before anything works
  # the .wait() makes sure that it continues only if the subscription
  # is ready and the data available
  # Use: global
  baseSubscriptions: ->
    @subscribe("userData").wait()
    return

  # show login if a guest wants to access private areas
  # Use: {only: [privateAreas] }
  isLoggedIn: ->
    unless Meteor.user()
      @render "entrySignIn"
      @stop()
    return

  # make sure to scroll to the top of the page on a new route
  # Use: global
  scrollUp: ->
    $('body,html').scrollTop(0);
    return

  # if this route depends on data, show the NProgess loading indicator
  # http://ricostacruz.com/nprogress/
  # Use: global
  startNProgress: ->
    NProgress.start()  if _.isFunction(@data)
    return

  # tell google analytics that a page was viewed
  # e.g. https://github.com/datariot/meteor-ganalytics
  # Use: global
  pageview: ->
    GAnalytics.pageview @path
    return

  # only show route if you are an admin
  # using https://github.com/alanning/meteor-roles
  # Use: {only: [adminAreas]}
  isAdmin: ->
    unless Roles.userIsInRole(Meteor.userId(), ["admin"])
      @render "login"
      @stop()
    return

  # animate old content out using
  # http://daneden.github.io/animate.css/
  # Use: global
  animateContentOut: ->
    $("#content").removeClass "animated fadeIn fadeInRight"
    $("footer").addClass "hide"
    return


# After Hooks Compilation
IR_AfterHooks =

  # if you fade the content out, fade it in again
  # Use: global
  fadeContentIn: ->
    $("#content").addClass "animated fadeIn"
    $("footer").removeClass "hide"
    return

  # If you started NProgress end it again
  # You can also pass NProgess.done directly to the after hook
  # Use: global
  endNProgess: ->
    NProgess.done()
    return

# Unload Hooks Compilation
IR_UnloadHooks = {}

baseURL = Meteor.absoluteUrl();

Router.configure

  #layoutTemplate:'theme1Layout',
  layoutTemplate: "layout"
  loadingTemplate: "loading"
  notFoundTemplate: "404"
  yieldTemplates:
    'header': to: 'header'
    'footer': to: 'footer'
  # waitOn: headers

  waitOn: ->
    headers
    Meteor.subscribe "site"

  onBeforeAction: ->
    IR_Filters.scrollUp()

Router.map ->

  @route "home",
    path: "/"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "home1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "home2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "home3"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "home"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "home0"
      return

  # All sb.routes need to only validate on the www./ & servicebay.ca domain
  @route "sb.listing",
    path: "/listing"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"listing"
      else if Session.equals("theme", "2")
        @redirect baseURL+"listing"
      else if Session.equals("theme", "3")
        @redirect baseURL+"listing"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.listing"
      else
        @redirect baseURL+"listing"
      return

  @route "sb.pricing",
    path: "/pricing"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"pricing"
      else if Session.equals("theme", "2")
        @redirect baseURL+"pricing"
      else if Session.equals("theme", "3")
        @redirect baseURL+"pricing"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.pricing"
      else
        @redirect baseURL+"pricing"
      return

  @route "sb.features",
    path: "/features"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"features"
      else if Session.equals("theme", "2")
        @redirect baseURL+"features"
      else if Session.equals("theme", "3")
        @redirect baseURL+"features"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.features"
      else
        @redirect baseURL+"features"
      return

  @route "sb.support",
    path: "/support"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"support"
      else if Session.equals("theme", "2")
        @redirect baseURL+"support"
      else if Session.equals("theme", "3")
        @redirect baseURL+"support"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.support"
      else
        @redirect baseURL+"support"
      return

  @route "sb.choose",
    path: "/why-choose-servicebay"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"why-choose-servicebay"
      else if Session.equals("theme", "2")
        @redirect baseURL+"why-choose-servicebay"
      else if Session.equals("theme", "3")
        @redirect baseURL+"why-choose-servicebay"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.choose"
      else
        @redirect baseURL+"why-choose-servicebay"
      return

  @route "sb.team",
    path: "/team"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"our-team"
      else if Session.equals("theme", "2")
        @redirect baseURL+"our-team"
      else if Session.equals("theme", "3")
        @redirect baseURL+"our-team"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.team"
      else
        @redirect baseURL+"our-team"
      return

  @route "sb.policy",
    path: "/privacy-policy"
    notFoundTemplate: "siteNotFound"
    # template: 'voltagePage'
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"privacy-policy"
      else if Session.equals("theme", "2")
        @redirect baseURL+"privacy-policy"
      else if Session.equals("theme", "3")
        @redirect baseURL+"privacy-policy"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.policy"
      else
        @redirect baseURL+"privacy-policy"
      return

  @route "sb.terms",
    path: "/terms-of-use"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"terms-of-use"
      else if Session.equals("theme", "2")
        @redirect baseURL+"terms-of-use"
      else if Session.equals("theme", "3")
        @redirect baseURL+"terms-of-use"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.terms"
      else
        @redirect baseURL+"terms-of-use"
      return

  @route "sb.promise",
    path: "/promise"
    notFoundTemplate: "siteNotFound"
    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"promise"
      else if Session.equals("theme", "2")
        @redirect baseURL+"promise"
      else if Session.equals("theme", "3")
        @redirect baseURL+"promise"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.promise"
      else
        @redirect baseURL+"promise"
      return


  #this.route('sb.custom', {path: 'custom'});
  @route "sb.dashboard",
    path: "/dashboard"
    notFoundTemplate: "siteNotFound"

    onBeforeAction: ->
      Session.set('fromWhere', "sb.dashboard")
      @redirect "/sign-in" if !Meteor.user()

    # data: ->
    #   domain = Session.get("domain")
    #   Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @redirect baseURL+"dashboard"
      else if Session.equals("theme", "2")
        @redirect baseURL+"dashboard"
      else if Session.equals("theme", "3")
        @redirect baseURL+"dashboard"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "sb.dashboard"
      else
        @redirect baseURL+"dashboard"
      return

    onAfterAction: ->
      Session.set('fromWhere', null)

  #this.route('sb.profile', {path: 'profile'});
  # @route "sb.admin",
  #   path: "/admin"
  #   notFoundTemplate: "siteNotFound"
  #   # data: ->
  #   #   domain = Session.get("domain")
  #   #   Site.findOne domain: domain

  #   onBeforeAction: ->
  #     Session.set('fromWhere', "sb.admin")
  #     @redirect "/sign-in" if !Roles.userIsInRole(Meteor.userId(), ["admin"])

  #   action: ->
  #     if Session.equals("theme", "1")
  #       @redirect baseURL+"dashboard"
  #     else if Session.equals("theme", "2")
  #       @redirect baseURL+"dashboard"
  #     else if Session.equals("theme", "3")
  #       @redirect baseURL+"dashboard"
  #     else if Session.equals("theme", "269")
  #       @render 'header',
  #         to: 'header'
  #       @render 'footer',
  #         to: 'footer'
  #       @render "sb.admin"
  #     else
  #       @redirect baseURL+"dashboard"
  #     return

  #   onAfterAction: ->
  #     Session.set('fromWhere', null)

  # @route "admin",
  #   path: "/admin"
  #   template: "adminusers"
  #   onBeforeAction: ->
  #     @redirect "/"  unless Roles.userIsInRole(Meteor.user(), [
  #       "admin"
  #       "user-admin"
  #     ])
  #     return

  # Client Routes
  @route "services",
    path: "/services"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "services1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "services2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "services3"
      else if Session.equals("theme", "269")
        @redirect "/"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "services0"
      return


  @route "gallery",
    path: "/gallery"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "gallery1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "gallery2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "gallery3"
      else if Session.equals("theme", "269")
        @redirect "/"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "gallery0"
      return


  @route "about",
    path: "/about"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "about1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "about2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "about3"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "about"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "about0"
      return


  @route "contact",
    path: "/contact"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "contact1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "contact2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "contact3"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "contact"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "contact0"
      return

  # Last falback route
  @route "notFound",
    path: "*"
    notFoundTemplate: "siteNotFound"
    data: ->
      domain = Session.get("domain")
      Site.findOne domain: domain

    action: ->
      if Session.equals("theme", "1")
        @render 'header1',
          to: 'header'
        @render 'footer1',
          to: 'footer'
        @render "404.1"
      else if Session.equals("theme", "2")
        @render 'header2',
          to: 'header'
        @render 'footer2',
          to: 'footer'
        @render "404.2"
      else if Session.equals("theme", "3")
        @render 'header3',
          to: 'header'
        @render 'footer3',
          to: 'footer'
        @render "404.3"
      else if Session.equals("theme", "269")
        @render 'header',
          to: 'header'
        @render 'footer',
          to: 'footer'
        @render "404"
      else
        @render 'header0',
          to: 'header'
        @render 'footer0',
          to: 'footer'
        @render "404.0"
      return
