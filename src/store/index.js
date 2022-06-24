import { configureStore } from "@reduxjs/toolkit";
import pizza from "./pizza/slice";

export const store = configureStore({
  reducer: {
    pizza,
  },
});
