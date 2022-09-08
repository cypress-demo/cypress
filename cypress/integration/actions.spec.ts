describe("Validate Actions", () => {
  before(() => {
    cy.visit("/medicare");
  });

  it("Implicit assertions - should, and", () => {
    cy.get("h1").should("have.text", "Cigna Medicare Plans");
    // Using within, validate elements withing a block or elements. Verify html attributes of an element along with regular expression match
    cy.get("cipublic-sticky-banner")
      .should("be.visible")
      .within(() => {
        cy.get("p")
          .should("have.css", "display") // yields 'block'
          .and("match", /block/); // yields 'block'
      });
    // Assert an attribute
    cy.get("cipublic-link")
      .contains("Medicare 101")
      .should(
        "have.attr",
        "href",
        "/knowledge-center/index.html#understandingmedicare"
      )
      .then(($button) => {
        cy.wrap($button).invoke("removeAttr", "target").click(); // Removing target attribute to force load in same page
      });
    // Browser back
    cy.go("back");
    // Verify the url of the page
    cy.url().should("eq", `${Cypress.config().baseUrl}/medicare/`);
    // Check if an element does not have a given value
    cy.get(".micro-text").should("not.have.value", "Connecticut");
    // Check if atleast two public links are displayed in a page
    cy.get("cipublic-link").should("have.length.at.least", 2);
  });

  it("Explicit Assertions: Chai expect jQuery examples", () => {
    // Verify public links
    cy.get("cipublic-link").should(($links) => {
      // return an array of texts from all of the links
      const texts = $links.map((i, el) => Cypress.$(el).text());
      // jquery map returns jquery object and .get() convert this to simple array
      const linkDetails = texts.get();
      // array should have length above 10
      expect(linkDetails).to.have.length.above(10);
      // Other random assertions
      expect($links).to.be.visible;
      expect($links).to.have.prop("variant", "primary");
      expect($links).to.not.have.text("Testing");
    });
  });

  it("Explicit Assertions: Chai expect bdd/tdd examples", () => {
    expect(true, "it is true").to.be.true;
    const o = { foo: "bar" };
    // "deep.equal" assertion compares the properties inside the object
    expect(o, "deep equality").to.deep.equal({ foo: "bar" });
    // matching text using regular expression
    expect("Health and Wellness").to.match(/wellness$/i);
    // check if the variable is defined, is a string, and has characters
    expect("4AB001C", "org id").to.be.a("string").and.not.be.empty;
    // check if the response status code is successful
    expect(204, "status code").to.be.within(200, 399);
    // check if a value is one of the three allowed choices
    expect("Medical").to.be.oneOf(["Medical", "Dental", "Pharmacy"]);
    // generic predicate function check using the "satisfy" assertion
    expect("Health").to.satisfy((s) => typeof s === "string" && s.length === 6);
  });

  it("Explicit Assertions: assert examples", () => {
    const Coverage = {
      type: "Medical",
      code: "MED",
    };
    assert.isObject(Coverage, "value is object");
    assert.isUndefined(undefined, "val is undefined");
    assert.isAbove(6, 1, "6 greater than 1");
    assert.equal(3, 3, "vals equal");
    assert.deepEqual({ id: "1" }, { id: "1" });
  });
});
