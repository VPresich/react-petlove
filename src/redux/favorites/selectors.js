import { createSelector } from "reselect";
export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = createSelector(
  [selectFavorites, (_, noticeId) => noticeId],
  (favorites, noticeId) => {
    if (!favorites || !noticeId || favorites.length === 0) return false;
    return favorites.some((favorite) => favorite === noticeId);
  }
);
