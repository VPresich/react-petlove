import { createSelector } from "reselect";

export const selectNewsState = (state) => state.news;
export const selectNews = (state) => state.news.items;
export const selectNewsNumber = (state) => state.news.items.length || 0;

export const selectIsLoading = (state) => state.news.isLoading;
export const selectError = (state) => state.news.error;

export const selectItemsPerPage = (state) => state.news.itemsPerPage;
export const selectCurrentPage = (state) => state.news.currentPage;
export const selectKeyword = (state) => state.news.keyword;

export const selectTotalPages = (state) => state.news.totalPages;

export const selectFavorites = (state) => state.news.favorites;

export const selectIsMore = createSelector(
  [selectCurrentPage, selectTotalPages],
  (currPage, lastPage) => currPage < lastPage
);
