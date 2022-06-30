import { IPizza } from "types/interfaces";

export const getCountOfPizzas = (pizzas: IPizza[]) =>
  pizzas.reduce((accumulator, pizza) => accumulator + pizza.quantity, 0);
