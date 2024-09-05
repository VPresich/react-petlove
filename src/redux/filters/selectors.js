import { createSelector } from "reselect";

export const selectFilters = (state) => state.filters;

export const selectActiveCategory = (state) => state.filters.query.category;
export const selectActiveSpecies = (state) => state.filters.query.species;
export const selectActiveSex = (state) => state.filters.query.sex;
export const selectActiveKeyword = (state) => state.filters.query.keyword;
export const selectActiveLocation = (state) => state.filters.query.location;
export const selectSortLabel = (state) => state.filters.sortLabel;
export const selectQuery = (state) => state.filters.query;

export const selectQueryParams = createSelector([selectFilters], (filters) => {
  const query = filters.query || {};

  return Object.keys(query).reduce((acc, key) => {
    const value = query[key];
    if (typeof value === "string") {
      const lowerValue = value.toLowerCase();
      if (lowerValue !== "show all" && lowerValue.trim() !== "") {
        acc[key] = lowerValue;
      }
    } else if (value !== null && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
});

export const selectSortParam = createSelector(
  [selectSortLabel],
  (sortLabel) => {
    if (!sortLabel) return {};

    switch (sortLabel) {
      case "Oldest":
        return { byDate: true };
      case "Newest":
        return { byDate: false };
      case "Popular":
        return { byPopularity: false };
      case "Unpopular":
        return { byPopularity: true };
      case "Cheap":
        return { byPrice: true };
      case "Expensive":
        return { byPrice: false };
      default:
        return {};
    }
  }
);
