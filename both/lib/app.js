/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/

App = {
  // Set variables.
  variables: {
    themeMaster: 'Master',
    themeDefault: 'None',
    themeClasses: 'theme0 theme1 theme2 theme3 theme4 theme5 theme6 theme7 theme8 theme9 theme10 theme11 theme12 theme13 theme14 theme15 themeMaster themeNone'
  },

  //Check if a variable is empty, blank or null.
  isBlank: function(str) {
    return (!str || /^\s*$/.test(str));
  },

  // Check if is numeric.
  isNumber: function(n) {
    return !this.isBlank(n) && !isNaN(parseFloat(n)) && isFinite(n);
  },

  // Set active body class.
  themeActive: function(themeID) {
    // Set vars.
    var _themeID = this.isBlank(themeID) ? this.variables.themeDefault : themeID;

    // Remove and set proper body classes.
    $('html')
        .removeClass(this.variables.themeClasses)
        .addClass('theme'+ _themeID);
  },

  // Check if theme is master.
  themeIsMaster: function() {
    return (Session.get('theme') === this.variables.themeMaster);
  }
};


