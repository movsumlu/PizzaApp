export const findPizzaByID = (pizzas, pizzaID) =>
  pizzas.find((pizza) => pizza.id === pizzaID);
