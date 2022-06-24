export const getCountOfPizzas = (pizzas) =>
  pizzas.reduce((accumulator, pizza) => accumulator + pizza.quantity, 0);
