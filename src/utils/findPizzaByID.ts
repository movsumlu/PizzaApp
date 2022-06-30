import { IPizza } from "types/interfaces";

export const findPizzaByID = (pizzas: IPizza[], pizzaID: number) =>
  pizzas.find((pizza) => pizza.id === pizzaID);
