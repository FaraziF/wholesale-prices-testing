Feature: Wholesale Price Functionality

  Scenario: Wholesale customer sees wholesale price on product page
    Given I log in as a wholesale customer
    When I visit the product page
    Then I should see the wholesale price displayed

  Scenario: Wholesale price appears in cart instead of sale price
    Given I log in as a wholesale customer
    And I add the product to the cart
    When I view the cart
    Then I should see the wholesale price in the cart