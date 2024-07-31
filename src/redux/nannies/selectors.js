import { createSelector } from "reselect";

export const selectNanniesState = (state) => state.nannies;
export const selectNannies = (state) => state.nannies.items;
export const selectNanniesNumber = (state) => state.nannies.items.length || 0;

export const selectIsLoading = (state) => state.nannies.isLoading;
export const selectError = (state) => state.nannies.error;

export const selectItemsPerPage = (state) => state.nannies.itemsPerPage;
export const selectCurrentPage = (state) => state.nannies.currentPage;

const selectTotalPages = (state) => state.nannies.totalPages;

export const selectFavorites = (state) => state.nannies.favorites;

export const selectIsMore = createSelector(
  [selectCurrentPage, selectTotalPages],
  (currPage, lastPage) => currPage < lastPage
);

export const selectNannyById = createSelector(
  [selectNannies, (_, nannyId) => nannyId],
  (nanniess, nannyId) => nanniess.find((nanny) => nanny._id === nannyId)
);
