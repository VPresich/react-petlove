import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  fetchFavoritesByIds,
  addFavorite,
  removeFavorite,
} from "../favorites/operations";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    favorites: [],
    myPets: [],
    viewedPets: [],
    isLoading: false,
    isAdding: false,
    isDeleting: false,
    error: null,
  },
  reducers: {
    saveFavoritesIds(state, action) {
      state.items = action.payload.map((favorite) => favorite._id);
    },

    saveFavorites(state, action) {
      state.favorites = action.payload;
    },

    savePets(state, action) {
      state.myPets = action.payload;
    },

    saveViewedPets(state, action) {
      state.viewedPets = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesByIds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoritesByIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFavoritesByIds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavorite.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //---------------------------------------------
      .addCase(removeFavorite.pending, (state, action) => {
        state.isDeleting = action.meta.arg;
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isDeleting = false;
        state.error = null;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-------------------------------------------
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.favorites = [];
        state.myPets = [];
        state.viewedPets = [];
        state.isLoading = false;
        state.isAdding = false;
        state.isDeleting = false;
        state.error = null;
      });
    //-----------------------------------------------
  },
});

export default favoritesSlice.reducer;
export const { saveFavoritesIds, saveFavorites, savePets, saveViewedPets } =
  favoritesSlice.actions;
