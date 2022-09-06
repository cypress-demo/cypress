describe("Validate Command Retries for Cypress", () => {
  beforeEach(() => {
    cy.visit("https://cigna.com/medicare");
  });


  it("Validate Command Keeps Retrying for default Timeout", () => {
    cy.get("cipublic-sticky-banner h4").should(
      "have.text",
      "Shop and compare plans"
    );
  });

  it("Validate Command Keeps Retrying for Custom Timeout", () => {
    cy.get("cipublic-sticky-banner h4", {
      timeout: 8000,
    }).should("have.text", "Shop and compare plans");
  });

  it("Disable Command Timeout", () => {
    cy.get("cipublic-sticky-banner h4", {
      timeout: 0,
    }).should("have.text", "Shop and compare plans");
  });

  it("Test Passes with ", () => {
    cy.get("cipublic-sticky-banner h4", {
      timeout: 0,
    }).should("have.text", "Shop and compare plans now"); 
  });
});
