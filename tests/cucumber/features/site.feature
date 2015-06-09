Feature: Site Information
  As a site user
  I can see the correct site information
  So that I have confidence in the brand

  Scenario: Verify the site title
    Given I am on the homepage
    When I navigate to "/"
    Then I should see the title "ServiceBay - Easy Auto Service Websites"


  Scenario: There are no warning messages on the homepage
    Given I am on the home page
    Then I should not see a failure message
