import { createSlice } from "@reduxjs/toolkit";
import {
  getNanniesPerPage,
  getNannyById,
  getNanniesWithParams,
} from "./operations";

const nanniesSlice = createSlice({
  name: "nannies",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 3,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetNanniesState(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 30;
      state.totalPages = 1;
      state.itemsPerPage = 3;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNanniesPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNanniesPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.nannies];
        else {
          state.items = action.payload.nannies;
        }
      })

      .addCase(getNanniesPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNanniesWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNanniesWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.nannies];
        else {
          state.items = action.payload.nannies;
        }
      })
      .addCase(getNanniesWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNannyById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNannyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const existingIndex = state.items.findIndex(
          (camper) => camper.id === action.payload.id
        );
        if (existingIndex !== -1) {
          state.items[existingIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(getNannyById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetNanniesState } = nanniesSlice.actions;
export default nanniesSlice.reducer;
