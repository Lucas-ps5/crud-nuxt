describe("create new user", () => {
  it("should create a new user successfully", () => {
    cy.visit("/");
    cy.get('[data-test="users"]').click();
    cy.get('[data-test="create-user"]').click();
    cy.get('[data-test="name"]').type("name1");
    cy.get('[data-test="email"]').type("name1@gmail.com");
    cy.get('[data-test="submit-user"]').click();
    cy.url().should("include", "succeed");
  });

  it.only("should have error when create a new user", () => {
    cy.visit("/");
    cy.get('[data-test="users"]').click();
    cy.get('[data-test="create-user"]').click();
    cy.get('[data-test="submit-user"]').click();
    cy.get('[data-test="error-message"]').click();
  });
});
