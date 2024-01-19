describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").type("oof@oof.com");
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("not.exist");
    cy.contains(/Successfully subbed: /i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
  });
});
