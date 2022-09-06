describe("Cookie Storage", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("Validate Opinion Lab Pop Up is displayed", () => {
    cy.visit("/?zip=78724&fip=48453&PlanType=MAPD#pdp");
    cy.get("#oo_invitation_prompt", { timeout: 12000 }).should("be.visible");
  });

  it("Validate Opinion Lab Pop Up is not displayed", () => {
    cy.setCookie("oo_inv_reprompt", "1");
    cy.visit("/?zip=78724&fip=48453&PlanType=MAPD#pdp");
    cy.get("#oo_invitation_prompt", { timeout: 12000 }).should("not.exist");
  });
});
