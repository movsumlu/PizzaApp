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
    filteringPizzas(state: IPizzasState, action: PayloadAction<string>) {
      state.pizzas = state.allPizzas.filter((pizza: IPizza) => {
        if (action.payload === "Мясные") {
          return pizza.category.includes(1);
        }

        if (action.payload === "Вегетарианские 🌱") {
          return pizza.category.includes(2);
        }

        if (action.payload === "Острые 🌶️") {
          return pizza.category.includes(3);
        }

        return pizza;
      });
    },
    sortingPizzas(state: IPizzasState, action: PayloadAction<string>) {
      state.pizzas = state.pizzas.sort((a: IPizza, b: IPizza) => {
        if (action.payload === "популярности ↓") {
          return b.rating - a.rating;
        }

        if (action.payload === "популярности ↑") {
          return a.rating - b.rating;
        }

        if (action.payload === "цена по возрастанию") {
          return a.price - b.price;
        }

        if (action.payload === "цене по убыванию") {
          return b.price - a.price;
        }

        if (action.payload === "алфавиту от А до Я") {
          return a.title.localeCompare(b.title);
        }

        return b.title.localeCompare(a.title);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state: IPizzasState) => {
      state.loading = true;
    });

    builder.addCase(
      fetchPizzas.fulfilled,
      (state: IPizzasState, action: PayloadAction<IPizza[]>) => {
        state.pizzas = action.payload;
        state.allPizzas = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(fetchPizzas.rejected, (state: IPizzasState, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
  },
});

export const { filteringPizzas, sortingPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;

export { fetchPizzas };
