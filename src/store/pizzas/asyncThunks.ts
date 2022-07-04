import { API } from "API";
import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IPizza } from "types/interfaces";

export const fetchPizzas = createAsyncThunk<IPizza[]>(
  "pizza/fetchPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/");
      return data;
    } catch (error) {
      const responseError = error as Error | AxiosError;
      return rejectWithValue(responseError.message);
    }
  }
);
