import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "Все",
  sorting: "популярности ↓",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    updateSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});

export const { updateFilter, updateSorting } = filtersSlice.actions;

export default filtersSlice.reducer;
