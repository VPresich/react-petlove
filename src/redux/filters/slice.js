import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    query: {
      keyword: "",
      locationId: "",
      species: "",
      category: "",
      sex: "",
    },
    sortLabel: "Oldest",
  },
  reducers: {
    saveKeyword: (state, action) => {
      state.query.keyword = action.payload;
    },

    saveLocation: (state, action) => {
      state.query.locationId = action.payload;
    },

    saveCategory: (state, action) => {
      state.query.category = action.payload;
    },

    saveSpecies: (state, action) => {
      state.query.species = action.payload;
    },

    saveSex: (state, action) => {
      state.query.sex = action.payload;
    },

    saveSortParam: (state, action) => {
      state.sortLabel = action.payload;
    },

    resetSorting: (state) => {
      state.sortLabel = "Oldest";
    },

    resetFilters: (state) => {
      state.query.keyword = "";
      state.query.locationId = "";
      state.query.species = "";
      state.query.category = "";
      state.query.sex = "";
      state.sortLabel = "Oldest";
    },
  },
});

export const {
  saveKeyword,
  saveLocation,
  saveCategory,
  saveSpecies,
  saveSex,
  saveSortParam,
  resetFilters,
  resetSorting,
} = filtersSlice.actions;
export default filtersSlice.reducer;
