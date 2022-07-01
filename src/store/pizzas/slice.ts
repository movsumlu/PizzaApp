import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncThunks";

import { IPizza } from "types/interfaces";

interface IPizzasState {
  pizzas: IPizza[];
  allPizzas: IPizza[];
  loading: boolean;
  errors: any;
}

const initialState: IPizzasState = {
  pizzas: [],
  allPizzas: [],
  loading: false,
  errors: null,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    filteringPizzas(state, action: PayloadAction<string>) {
      if (action.payload === "Все") {
        state.pizzas = state.allPizzas;
      }

      if (action.payload === "Мясные") {
        state.pizzas = state.allPizzas.filter((pizza) =>
          pizza.category.includes(1)
        );
      }

      if (action.payload === "Вегетарианские 🌱") {
        state.pizzas = state.allPizzas.filter((pizza) =>
          pizza.category.includes(2)
        );
      }

      if (action.payload === "Острые 🌶️") {
        state.pizzas = state.allPizzas.filter((pizza) =>
          pizza.category.includes(3)
        );
      }
    },
    sortingPizzas(state, action: PayloadAction<string>) {
      if (action.payload === "популярности ↓") {
        state.pizzas = state.pizzas.sort((a, b) => b.rating - a.rating);
      }

      if (action.payload === "популярности ↑") {
        state.pizzas = state.pizzas.sort((a, b) => a.rating - b.rating);
      }

      if (action.payload === "цена по возростанию") {
        state.pizzas = state.pizzas.sort((a, b) => a.price - b.price);
      }

      if (action.payload === "цене по убыванию") {
        state.pizzas = state.pizzas.sort((a, b) => b.price - a.price);
      }

      if (action.payload === "алфавиту от А до Я") {
        state.pizzas = state.pizzas.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }

      if (action.payload === "алфавиту от Я до А") {
        state.pizzas = state.pizzas.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizza[]>) => {
        state.pizzas = action.payload;
        state.allPizzas = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export const { filteringPizzas, sortingPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;

export { fetchPizzas };
