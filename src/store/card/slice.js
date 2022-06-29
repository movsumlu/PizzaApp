import { createSlice } from "@reduxjs/toolkit";

import { findPizzaByID } from "../../utils/findPizzaByID";
import { getCountOfPizzas } from "../../utils/getCountOfPizzas";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { LS } from "../../utils/LS";

const initialState = {
  card: LS.getItem("cardFromLS") || [],
  count: LS.getItem("countFromLS") || 0,
  totalPrice: LS.getItem("totalPriceFromLS") || 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    minusPizzaToCard(state, action) {
      const foundPizzaByID = findPizzaByID(state.card, action.payload.id);

      foundPizzaByID.quantity--;

      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      LS.setItem("cardFromLS", state.card);
      LS.setItem("countFromLS", state.count);
      LS.setItem("totalPriceFromLS", state.totalPrice);
    },
    addPizzaToCard(state, action) {
      const foundPizzaByID = findPizzaByID(state.card, action.payload.id);

      foundPizzaByID
        ? foundPizzaByID.quantity++
        : state.card.push({ ...action.payload, quantity: 1 });

      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      LS.setItem("cardFromLS", state.card);
      LS.setItem("countFromLS", state.count);
      LS.setItem("totalPriceFromLS", state.totalPrice);
    },
    removePizzaFromCard(state, action) {
      state.card = state.card.filter((pizza) => pizza.id !== action.payload);
      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      LS.setItem("cardFromLS", state.card);
      LS.setItem("countFromLS", state.count);
      LS.setItem("totalPriceFromLS", state.totalPrice);
    },
    clearCard(state) {
      state.card = [];
      state.count = 0;
      state.totalPrice = 0;

      LS.setItem("cardFromLS", state.card);
      LS.setItem("countFromLS", state.count);
      LS.setItem("totalPriceFromLS", state.totalPrice);
    },
  },
});

export const {
  minusPizzaToCard,
  addPizzaToCard,
  removePizzaFromCard,
  clearCard,
} = cardSlice.actions;

export default cardSlice.reducer;
