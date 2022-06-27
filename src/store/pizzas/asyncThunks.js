import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://62b2b163c7e53744afd01e9f.mockapi.io/pizzas`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchPizzas };
