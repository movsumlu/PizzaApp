import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFiltersState {
  filter: string;
  sorting: string;
}

const initialState: IFiltersState = {
  filter: "Все",
  sorting: "популярности ↓",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    updateSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

export const { updateFilter, updateSorting } = filtersSlice.actions;

export default filtersSlice.reducer;
