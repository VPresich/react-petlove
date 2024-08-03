import { createSelector } from "reselect";

export const selectNoticesState = (state) => state.notices;
export const selectNotices = (state) => state.notices.items;
export const selectNoticesNumber = (state) => state.notices.items?.length || 0;

export const selectIsLoading = (state) => state.notices.isLoading;
export const selectError = (state) => state.notices.error;

export const selectItemsPerPage = (state) => state.notices.itemsPerPage;
export const selectCurrentPage = (state) => state.notices.currentPage;

const selectTotalPages = (state) => state.notices.totalPages;

export const selectFavorites = (state) => state.notices.favorites;

export const selectIsMore = createSelector(
  [selectCurrentPage, selectTotalPages],
  (currPage, lastPage) => currPage < lastPage
);

export const selectNoticeById = createSelector(
  [selectNotices, (_, noticeId) => noticeId],
  (notices, noticeId) => notices.find((notice) => notice._id === noticeId)
);