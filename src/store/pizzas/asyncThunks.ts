import { API } from "API";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IPizza } from "types/interfaces";

export const fetchPizzas = createAsyncThunk<IPizza[]>(
  "pizza/fetchPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
