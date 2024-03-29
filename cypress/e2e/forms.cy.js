describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    // cy.getDataTest("subscribe-form").find("input").type("oof@oof.com");

    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("oof@oof.com");

    cy.contains(/Successfully subbed: /i).should("not.exist");
    cy.getDataTest("subscribe-button").click();

    cy.contains(/Successfully subbed: /i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: /i).should("not.exist");

    cy.get("@subscribe-input").type("oof@oof.oof");
    cy.contains(/invalid email: oof@oof.oof!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email: oof@oof.oof!/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email: oof@oof.oof!/i).should("not.exist");

    cy.contains(/fail/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail/i).should("exits");
  });
});
