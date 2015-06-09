Feature: Authentication
  In order to use restricted functionality
  As a site user
  I can use authentication

  Background:
    Given I am signed out

  Scenario: Valid login
    Given I am on the homepage
    When I click on signin link
    And I log in with valid credentials
    Then I should be on my dashboard page
    And  I should see a "Sign Out" link

  Scenario: Logout works
    Given I am on my dashboard
    When I log out
    Then I should be on the homepage

  Scenario: Invalid login
    Given I am on the homepage
    When I log in with invalid credentials
    Then I should see a failure message
    And I should be on the login page
