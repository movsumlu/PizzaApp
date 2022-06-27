import { configureStore } from "@reduxjs/toolkit";

import card from "./card/slice";
import pizza from "./pizza/slice";
import filters from "./filters/slice";

export const store = configureStore({
  reducer: {
    card,
    pizza,
    filters,
  },
});
