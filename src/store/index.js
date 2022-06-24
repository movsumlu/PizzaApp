import { configureStore } from "@reduxjs/toolkit";

import card from "./card/slice";
import pizza from "./pizza/slice";

export const store = configureStore({
  reducer: {
    card,
    pizza,
  },
});
