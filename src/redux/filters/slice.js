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
      if (state.query.keyword !== action.payload) {
        state.query.keyword = action.payload;
      }
    },

    saveLocation: (state, action) => {
      if (state.query.locationId !== action.payload) {
        state.query.locationId = action.payload;
      }
    },

    saveCategory: (state, action) => {
      if (state.query.category !== action.payload) {
        state.query.category = action.payload;
      }
    },

    saveSpecies: (state, action) => {
      if (state.query.species !== action.payload) {
        state.query.species = action.payload;
      }
    },

    saveSex: (state, action) => {
      if (state.query.sex !== action.payload) {
        state.query.sex = action.payload;
      }
    },

    saveSortParam: (state, action) => {
      if (state.sortLabel !== action.payload) {
        state.sortLabel = action.payload;
      }
    },

    resetSorting: (state) => {
      if (state.sortLabel !== "Oldest") {
        state.sortLabel = "Oldest";
      }
    },

    resetFilters: (state) => {
      state.query = {
        keyword: "",
        locationId: "",
        species: "",
        category: "",
        sex: "",
      };
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
