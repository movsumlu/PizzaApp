describe("testing <Home /> page", () => {
  it("render container of components", () => {
    cy.visit("/");
    cy.get(".style_cardWrapper__N6l-I").should("be.visible");
  });

  it("correct text of title and subtitle of <Header />", () => {
    cy.get(".style_header__title__qB-3J").should("have.text", "Pizza App");
    cy.get(".style_header__subtitle__4pMdl").should(
      "have.text",
      "доставка пиццы 24/7"
    );
  });

  it("sorting popup visible after click", () => {
    cy.get(".style_sorting__label__uVygD span").click();
    cy.get(".style_sorting__popup__PLAcr").should("be.visible");
  });

  it("go to checkout page by clicking of header checkout button", () => {
    cy.get(".style_header__buttonWrapper__haGNu").click();
    cy.url().should("eq", "http://localhost:3000/PizzaApp/card");
  });
});
