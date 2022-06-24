import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://62b2b163c7e53744afd01e9f.mockapi.io/pizzas`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchPizzas };
