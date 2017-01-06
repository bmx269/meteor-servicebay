AccountsTemplates.configure({
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: false,
  sendVerificationEmail: false,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: false,
  showPlaceholders: true,

  // Client-side Validation
  continuousValidation: true,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: false,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 0,

  // Hooks
  //onLogoutHook: myLogoutFunc,
  //onSubmitHook: mySubmitFunc,

  // Texts
  texts: {
    navSignIn: "signIn",
    navSignOut: "signOut",
    optionalField: "optional",
    pwdLink_pre: "",
    pwdLink_link: "Forgot Your Password",
    pwdLink_suff: "",
    sep: "OR",
    signInLink_pre: "ifYouAlreadyHaveAnAccount",
    signInLink_link: "signin",
    signInLink_suff: "",
    signUpLink_pre: "dontHaveAnAccount",
    signUpLink_link: "signUp",
    signUpLink_suff: "",
    socialAdd: "add",
    socialConfigure: "configure",
    socialIcons: {
      "meteor-developer": "fa fa-rocket",
    },
    socialRemove: "remove",
    socialSignIn: "signIn",
    socialSignUp: "signUp",
    socialWith: "with",
    termsPreamble: "clickAgree",
    termsPrivacy: "privacyPolicy",
    termsAnd: "and",
    termsTerms: "terms",
    //title: {
    //  changePwd: "Change Your Password",
    //  enrollAccount: "Enroll Title",
    //  forgotPwd: "Forgot Your Password",
    //  resetPwd: "Reset Your ServiceBay Password",
    //  signIn: "Sign In to ServiceBay",
    //  signUp: "Register for Servicebay",
    //},
    button: {
    //  changePwd: "Password Text",
    //  enrollAccount: "Enroll Text",
    //  forgotPwd: "Forgot Pwd Text",
    //  resetPwd: "Reset Pwd Text",
    //  signIn: "Sign In Text",
      signUp: "Register",
    },
    //info: {
    //  emailSent: "info.emailSent",
    //  emailVerified: "info.emailVerified",
    //  pwdChanged: "info.passwordChanged",
    //  pwdReset: "info.passwordReset",
    //  pwdSet: "info.passwordReset",
    //  signUpVerifyEmail: "Registration Successful! Please check your email and follow the instructions.",
    //},
    //errors: {
    //  mustBeLoggedIn: "error.accounts.Must be logged in",
    //  pwdMismatch: "error.pwdsDontMatch",
    //}
  }
});
