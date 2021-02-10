// https://docs.cypress.io/api/introduction/api.html

describe("Standard User Interactions", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Curriculum Vitae");
  });
});
