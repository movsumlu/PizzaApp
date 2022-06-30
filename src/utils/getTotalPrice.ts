import { IPizza } from "types/interfaces";

export const getTotalPrice = (pizzas: IPizza[]) =>
  pizzas.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.quantity,
    0
  );
