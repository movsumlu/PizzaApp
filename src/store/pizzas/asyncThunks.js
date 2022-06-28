import { API } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchPizzas };
