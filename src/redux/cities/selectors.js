import { createSelector } from "reselect";

export const selectCitiesState = (state) => state.cities;
export const selectCities = (state) => state.cities.items;
export const selectCitiesNumber = (state) => state.cities.items.length || 0;

export const selectIsLoading = (state) => state.cities.isLoading;
export const selectError = (state) => state.cities.error;

export const selectFilteredCities = createSelector(
  [selectCities, (state, searchTerm) => searchTerm],
  (cities, searchTerm) => {
    if (!searchTerm) {
      return cities;
    }

    return cities.filter((city) =>
      city.cityEn.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
