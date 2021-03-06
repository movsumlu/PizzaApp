import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { findPizzaByID } from "utils/findPizzaByID";
import { getCountOfPizzas } from "utils/getCountOfPizzas";
import { getTotalPrice } from "utils/getTotalPrice";
import { LS } from "utils/LS";

import { IPizza } from "types/interfaces";

interface ICardState {
  card: IPizza[];
  count: number;
  totalPrice: number;
}

const initialState: ICardState = {
  card: LS.getItem("cardFromLS") || [],
  count: LS.getItem("countFromLS") || 0,
  totalPrice: LS.getItem("totalPriceFromLS") || 0,
};

const savePizzaDatainLS = (
  card: IPizza[],
  count: number,
  totalPrice: number
) => {
  LS.setItem("cardFromLS", card);
  LS.setItem("countFromLS", count);
  LS.setItem("totalPriceFromLS", totalPrice);
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    minusPizzaToCard(state: ICardState, action: PayloadAction<IPizza>) {
      const foundPizzaByID = findPizzaByID(state.card, action.payload.id);

      if (foundPizzaByID?.quantity) {
        foundPizzaByID.quantity--;
      }

      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      savePizzaDatainLS(state.card, state.count, state.totalPrice);
    },
    addPizzaToCard(state: ICardState, action: PayloadAction<IPizza>) {
      const foundPizzaByID = findPizzaByID(state.card, action.payload.id);

      foundPizzaByID
        ? foundPizzaByID.quantity++
        : state.card.push({ ...action.payload, quantity: 1 });

      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      savePizzaDatainLS(state.card, state.count, state.totalPrice);
    },
    removePizzaFromCard(state: ICardState, action: PayloadAction<number>) {
      state.card = state.card.filter(
        (pizza: IPizza) => pizza.id !== action.payload
      );
      state.count = getCountOfPizzas(state.card);
      state.totalPrice = getTotalPrice(state.card);

      savePizzaDatainLS(state.card, state.count, state.totalPrice);
    },
    clearCard(state: ICardState) {
      state.card = [];
      state.count = 0;
      state.totalPrice = 0;

      savePizzaDatainLS(state.card, state.count, state.totalPrice);
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
