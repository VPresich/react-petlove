import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";
import {
  fetchFavoritesByIds,
  addFavorite,
  removeFavorite,
  addPet,
  removePetById,
  getViewedPetById,
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

    savePetToFavorite(state, action) {
      const existingFavorite = state.favorites.find(
        (pet) => pet._id === action.payload._id
      );
      if (!existingFavorite) {
        state.favorites.push(action.payload);
      }
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

      //---------------------------------------------
      .addCase(addFavorite.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = false;
        state.items = action.payload;
        state.favorites = state.favorites.filter((item) =>
          action.payload.includes(item._id)
        );
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      //---------------------------------------------
      .addCase(removeFavorite.pending, (state, action) => {
        state.isDeleting = action.meta.arg;
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = action.payload;
        state.favorites = state.favorites.filter((item) =>
          action.payload.includes(item._id)
        );
        state.isDeleting = false;
        state.error = null;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      //-------------------------------------------

      .addCase(addPet.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.isAdding = false;
        state.error = false;
        state.myPets = action.payload.pets;
      })
      .addCase(addPet.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      //---------------------------------------------
      .addCase(removePetById.pending, (state, action) => {
        state.isDeleting = action.meta.arg;
        state.error = null;
      })
      .addCase(removePetById.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.error = null;
        state.myPets = action.payload.pets;
      })
      .addCase(removePetById.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      //-------------------------------------------

      .addCase(getViewedPetById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getViewedPetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const existingPetIndex = state.viewedPets.findIndex(
          (pet) => pet._id === action.payload._id
        );
        if (existingPetIndex !== -1) {
          state.viewedPets[existingPetIndex] = action.payload;
        } else {
          state.viewedPets.push(action.payload);
        }
      })
      .addCase(getViewedPetById.rejected, (state, action) => {
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
export const {
  saveFavoritesIds,
  saveFavorites,
  savePets,
  saveViewedPets,
  savePetToFavorite,
} = favoritesSlice.actions;
