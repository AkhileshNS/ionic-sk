describe("CRA", () => {
  it("shows learn link", () => {
    cy.visit("http://localhost:3000");
    cy.get(".main").should("not.be.empty");
  });
});
