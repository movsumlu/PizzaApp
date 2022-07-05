describe("testing <Card /> page", () => {
  it("go to empty card and check title and subtitle correct", () => {
    cy.visit("/card");

    cy.get(".style_returnComponent__BLVhq h2").should(
      "have.text",
      "Ой, пусто!"
    );
    cy.get(".style_returnComponent__BLVhq p").should(
      "have.text",
      "Для того, чтобы заказать пиццу, перейди в меню."
    );
  });

  it("go to <Home /> page by return button", () => {
    cy.get(".style_returnButton__uwxkL").click();
    cy.url().should("eq", "http://localhost:3000/PizzaApp/");
  });

  it("add pizza in card", () => {
    cy.get(".style_cardWrapper__items__ik6CZ .style_buttonAdd__9PhPk")
      .first()
      .click();
  });

  it("header checkout button has correct count of pizzas", () => {
    cy.get(".style_header__rightside__D4LLw span")
      .eq(1)
      .should("have.text", "1");
  });

  it("go to <Card /> page", () => {
    cy.get(".style_header__rightside__D4LLw").click();
    cy.url().should("eq", "http://localhost:3000/PizzaApp/card");
  });

  it("render title and checkout button of <Card /> page and clear button works correctly", () => {
    cy.get(".style_title__o8ZgK").should("be.visible");
    cy.get(".style_buttonCheckout__5WZDZ").should("be.visible");

    cy.get(".style_buttonClear__FsNTi").click();
    cy.get(".style_returnComponent__BLVhq").should("be.visible");
  });
});
