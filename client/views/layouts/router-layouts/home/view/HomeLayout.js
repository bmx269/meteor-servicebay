Template.HomeLayout.helpers({
  appReady: function () {
    return Template.instance().subscriptionsReady();
  },
  siteThemeMaster: function(){
    var siteThemeID = Session.get('theme');
    console.log('theme function')
    return siteThemeID === 'Master';
  },
  siteTheme0: function(){
    var siteThemeID = Session.get('theme');
    console.log('theme function')
    return siteThemeID === '0';
  },
  siteTheme1: function(){
    var siteThemeID = Session.get('theme');
    console.log('theme function')
    return siteThemeID === '1';
  },
  siteTheme2: function(){
    var siteThemeID = Session.get('theme');
    console.log('theme function')
    return siteThemeID === '2';
  },
  siteTheme3: function(){
    var siteThemeID = Session.get('theme');
    console.log('theme function')
    return siteThemeID === '3';
  },
});