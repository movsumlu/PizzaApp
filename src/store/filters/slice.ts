import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { typesOfFilter } from "types/typesOfFilter";
import { typesOfSorting } from "types/typesOfSorting";

interface IFiltersState {
  filter: string;
  sorting: string;
}

const initialState: IFiltersState = {
  filter: typesOfFilter[0].label,
  sorting: typesOfSorting[0].label,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter(state: IFiltersState, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    updateSorting(state: IFiltersState, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
  },
});

export const { updateFilter, updateSorting } = filtersSlice.actions;

export default filtersSlice.reducer;
