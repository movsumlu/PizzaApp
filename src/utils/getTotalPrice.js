export const getTotalPrice = (pizzas) =>
  pizzas.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.quantity,
    0
  );
