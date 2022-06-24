import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncThunks";

const initialState = {
  pizzas: [],
  loading: false,
  error: null,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.loading = true;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.loading = false;
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default pizzaSlice.reducer;

export { fetchPizzas };
