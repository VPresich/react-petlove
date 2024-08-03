import { createSlice } from "@reduxjs/toolkit";
import {
  getNoticesPerPage,
  getNoticeById,
  getNoticesWithParams,
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
    favorites: [],
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 8,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetNoticesState(state) {
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
      .addCase(getNoticesPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticesPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.results];
        else {
          state.items = action.payload.results;
        }
      })

      .addCase(getNoticesPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNoticesWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticesWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.results];
        else {
          state.items = action.payload.results;
        }
      })
      .addCase(getNoticesWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNoticeById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
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
      .addCase(getNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetNoticesState } = noticesSlice.actions;
export default noticesSlice.reducer;
