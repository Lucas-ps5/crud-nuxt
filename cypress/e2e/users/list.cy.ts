describe("list of user", () => {
  it("should display the list of all users", () => {
    cy.visit("/");
    cy.get('[data-test="users"]').click();      
  });
});
