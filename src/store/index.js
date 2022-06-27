import { configureStore } from "@reduxjs/toolkit";

import card from "./card/slice";
import pizza from "./pizzas/slice";
import filters from "./filters/slice";

export const store = configureStore({
  reducer: {
    card,
    pizza,
    filters,
  },
});
