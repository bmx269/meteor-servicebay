(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^I am on the homepage$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      helper.world.browser.
          url(helper.world.cucumber.mirror.rootUrl).
          call(callback);
    });

    this.When(/^I log in with valid credentials$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I should be on my dashboard page$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I should see a "([^"]*)" link$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Given(/^I am on my dashboard$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I log out$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

    this.Then(/^I should see the title of "([^"]*)"$/, function (expectedTitle, callback) {

      helper.world.browser.
        title(function (err, res) {
          assert.equal(res.value, expectedTitle);
          callback();
        });
      call(callback);
    });

  }; //module.exports

})();








































































