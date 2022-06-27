import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortingType: "популярности ↓",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSortingType(state, action) {
      state.sortingType = action.payload;
    },
  },
});

export const { updateSortingType } = filtersSlice.actions;

export default filtersSlice.reducer;
