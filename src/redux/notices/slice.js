import { createSlice } from "@reduxjs/toolkit";
import { capitalizeFirstLetter } from "../../auxiliary/formats";
import {
  getNoticesPerPage,
  getNoticesWithParams,
  getCategories,
  getSpecies,
  getSex,
} from "./operations";

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    categories: [],
    sex: [],
    species: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 6,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetPage(state) {
      state.currentPage = 1;
    },

    resetNoticesState(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 30;
      state.totalPages = 1;
      state.itemsPerPage = 6;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNoticesPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticesPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })

      .addCase(getNoticesPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------------------------------------------------

      .addCase(getNoticesWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticesWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })
      .addCase(getNoticesWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------------------------------------------------

      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const capitalizedCategories = action.payload.map((category) =>
          capitalizeFirstLetter(category)
        );
        state.categories = ["Show all"];
        state.categories.push(...capitalizedCategories);
      })

      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //---------------------------------------------------------

      .addCase(getSpecies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.species = ["Show all"];
        const capitalizedSpecies = action.payload.map((species) =>
          capitalizeFirstLetter(species)
        );
        state.species.push(...capitalizedSpecies);
      })

      .addCase(getSpecies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //---------------------------------------------------------

      .addCase(getSex.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSex.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.sex = ["Show all"];
        const capitalizedSex = action.payload.map((sex) =>
          capitalizeFirstLetter(sex)
        );
        state.sex.push(...capitalizedSex);
      })

      .addCase(getSex.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //---------------------------------------------------------
  },
});

export const { setPage, resetNoticesState, resetPage } = noticesSlice.actions;
export default noticesSlice.reducer;
