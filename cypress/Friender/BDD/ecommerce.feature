Feature: End to end Ecommerce validation

Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I Login to the Application
And I add items to Cart and checkout
And validation the total price limit
Then select the country submit and verify Thankyou

