const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("I log in as a wholesale customer", () => {
  cy.visit("/my-account");
  cy.get("#username").type("customer@example.com");
  cy.get("#password").type("customer@example.comA1");
  cy.get("button[name='login']").click();
});

When("I visit the product page", () => {
  cy.visit("/product/wholesale-test-product");
});

Then("I should see the wholesale price displayed", () => {
  cy.get(".wholesale_price_container .woocommerce-Price-amount.amount").should("contain", "75$");
});

Given("I add the product to the cart", () => {
  cy.visit("/product/wholesale-test-product");
  cy.get("button[name='add-to-cart']").click();
});

When("I view the cart", () => {
  cy.visit("/cart");
});

Then("I should see the wholesale price in the cart", () => {
  cy.get(".is-discounted").should("contain", "75$");
});
