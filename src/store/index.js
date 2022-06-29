import { configureStore } from "@reduxjs/toolkit";

import card from "store/card/slice";
import pizza from "store/pizzas/slice";
import filters from "store/filters/slice";

export const store = configureStore({
  reducer: {
    card,
    pizza,
    filters,
  },
});
