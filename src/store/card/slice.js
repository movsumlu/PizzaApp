import { createSlice } from "@reduxjs/toolkit";

import { findPizzaByID } from "../../utils/findPizzaByID";
import { getCountOfPizzas } from "../../utils/getCountOfPizzas";
import { getTotalPrice } from "../../utils/getTotalPrice";

const initialState = {
  card: [],
  count: 0,
  totalPrice: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addPizzaToCard(state, action) {
      const foundPizzaByID = findPizzaByID(state.card, action.payload.id);

      foundPizzaByID
        ? foundPizzaByID.quantity++
        : state.card.push({ ...action.payload, quantity: 1 });

      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);
    },
    removePizzaFromCard(state, action) {},
    clearCard(state) {
      state.card = [];
      state.count = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addPizzaToCard, clearCard } = cardSlice.actions;

export default cardSlice.reducer;
