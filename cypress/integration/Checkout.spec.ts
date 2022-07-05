describe("testing <Checkout /> page", () => {
  it("add pizza in card", () => {
    cy.visit("/");

    cy.get(".style_cardWrapper__items__ik6CZ .style_buttonAdd__9PhPk")
      .first()
      .click();
  });

  it("go to <Card /> page", () => {
    cy.get(".style_header__rightside__D4LLw").click();
    cy.url().should("eq", "http://localhost:3000/PizzaApp/card");
  });

  it("go to <Checkout /> page", () => {
    cy.get(".style_buttonCheckout__5WZDZ").click();
    cy.url().should("eq", "http://localhost:3000/PizzaApp/checkout");
  });

  it("title and subtitle of <Checkout /> page renders correctly", () => {
    cy.get(".style_returnComponent__BLVhq h2").should(
      "have.text",
      "Ура, Ваш заказ принят!"
    );
    cy.get(".style_returnComponent__BLVhq p").should(
      "have.text",
      "Мы уже начали его собирать =)"
    );
  });
});
