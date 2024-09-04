import { createSlice } from "@reduxjs/toolkit";
import { getNewsPerPage, getNewsWithParams } from "./operations";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 6,
    keyword: "",
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    setKeyword(state, action) {
      newsSlice.caseReducers.resetNewsState(state);
      state.keyword = action.payload;
    },

    resetNewsState(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 30;
      state.totalPages = 1;
      state.itemsPerPage = 6;
      state.keyword = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNewsPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNewsPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })

      .addCase(getNewsPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getNewsWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNewsWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.perPage;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;
        state.items = action.payload.results;
      })
      .addCase(getNewsWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setKeyword, resetNewsState } = newsSlice.actions;
export default newsSlice.reducer;
