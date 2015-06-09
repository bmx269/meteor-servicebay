(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

  var helper = this;

  //this.Given(/^I am signed out$/, function (callback) {
  //  helper.world.browser.
  //    //url(helper.world.cucumber.mirror.rootUrl + "sign-out").
  //    waitForExist('.signout', 1000).
  //    waitForVisible('.signout', 1000).
  //      click('.signout').
  //      call(callback);
  //});


  //this.When(/^I click on signin link$/, function (callback) {
  //  helper.world.browser.
  //    // saveScreenshot(process.env.PWD + '/auth1.png').
  //    waitForExist('.signup', 12000).
  //    waitForVisible('.signup').
  //    click('.signup').
  //    call(callback);
  //});

  //this.When(/^I enter my authentication information$/, function (callback) {
  //  helper.world.browser.
  //    setValue('input#at-field-username_and_email', 'joshowens').
  //    setValue('input#at-field-password', 'good password').
  //    submitForm('#at-pwd-form').
  //    call(callback);
  //});
  //
  //this.When(/^I enter incorrect authentication information$/,
  //  function (callback) {
  //    helper.world.browser.
  //      setValue('input#at-field-username_and_email', 'joshowens').
  //      setValue('input#at-field-password', 'bad password').
  //      submitForm('#at-pwd-form').
  //      call(callback);
  //  }
  //);
  //
  //this.Then(/^I should be logged in$/, function (callback) {
  //  helper.world.browser.
  //    waitForExist('.user-menu', 7000).
  //    waitForVisible('.user-menu').
  //    getText('.user-menu .dropdown-top-level', function (err, username) {
  //      assert.equal(username[0], 'Josh Owens');
  //    }).
  //    call(callback);
  //});
  //
  //this.Then(/^I should see a user not found error$/, function (callback) {
  //  helper.world.browser.
  //    waitForExist('.at-error', 5000).
  //    waitForVisible('.at-error').
  //    getText('.at-error', function (err, errorMessage) {
  //      assert.equal(errorMessage, 'Login forbidden');
  //    }).
  //    call(callback);
  //});

   //this.When(/^I log in with valid credentials$/, function (callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  callback.pending();
   //});
   //
   //this.Then(/^I should be on my dashboard page$/, function (callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  helper.world.browser.
   //   url(helper.world.cucumber.mirror.rootUrl + "dashboard").
   //  call(callback);
   //});
   //
   //this.Then(/^I should see a "([^"]*)" link$/, function (arg1, callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  callback.pending();
   //});
   //
   //this.Given(/^I am logged in$/, function (callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  callback.pending();
   //});
   //
   //this.Given(/^I am on my dashboard$/, function (callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  helper.world.browser.
   //      url(helper.world.cucumber.mirror.rootUrl + "dashboard").
   //      call(callback);
   //});
   //
   //this.When(/^I log out$/, function (callback) {
   //  // Write code here that turns the phrase above into concrete actions
   //  //helper.world.browser.
   //  //    url(helper.world.cucumber.mirror.rootUrl).
   //  //    waitForExist('.signout', 1000).
   //  //    waitForVisible('.signout', 1000).
   //  //    click('.signout').
   //  callback.pending();
   //});
   //
   this.Then(/^I should be on the homepage$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.When(/^I log in with invalid credentials$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.Then(/^I should see a failure message$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.Then(/^I should be on the login page$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.Then(/^I should see the page title "([^"]*)"$/, function (arg1, callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.Then(/^I should not see a failure message$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback.pending();
   });

   this.Given(/^I am signed out$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     //  helper.world.browser.
     //    url(helper.world.cucumber.mirror.rootUrl).
     //    waitForExist('.signout', 1000).
     //    waitForVisible('.signout', 1000).
     //      click('.signout').
     //      call(callback);
     callback.pending();
   });

   this.When(/^I click on signin link$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     //helper.world.browser.
     //  // saveScreenshot(process.env.PWD + '/auth1.png').
     //  waitForExist('.signup', 12000).
     //  waitForVisible('.signup').
     //  click('.signup').
      callback.pending();
   });

  }; //module.exports

})();
