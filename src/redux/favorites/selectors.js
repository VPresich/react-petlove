import { createSelector } from "reselect";
export const selectFavoritesIds = (state) => state.favorites.items;

export const selectIsFavorite = createSelector(
  [selectFavoritesIds, (_, noticeId) => noticeId],
  (favoritesIds, noticeId) => {
    if (!favoritesIds || !noticeId || favoritesIds.length === 0) return false;
    return favoritesIds.some((favorite) => favorite === noticeId);
  }
);

export const selectFavorites = (state) => state.favorites.favorites;
export const selectPets = (state) => state.favorites.myPets;
export const selectViewedPets = (state) => state.favorites.viewedPets;
