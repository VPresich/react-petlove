import { createSelector } from "reselect";

export const selectFilters = (state) => state.filters;

export const selectActiveCategory = (state) => state.filters.query.category;
export const selectActiveSpecies = (state) => state.filters.query.species;
export const selectActiveSex = (state) => state.filters.query.sex;
export const selectActiveKeyword = (state) => state.filters.query.keyword;
export const selectActiveLocation = (state) => state.filters.query.location;
export const selectSortLabel = (state) => state.filters.sortLabel;

export const selectQueryParams = createSelector([selectFilters], (filters) => {
  const query = filters.query;
  if (!query) return {};

  const lowerCaseQuery = {};
  for (const [key, value] of Object.entries(query)) {
    if (
      typeof value === "string" &&
      value.toLowerCase() !== "show all" &&
      value.trim() !== ""
    ) {
      lowerCaseQuery[key] = value.toLowerCase();
    } else if (
      typeof value !== "string" &&
      value !== null &&
      value !== undefined
    ) {
      lowerCaseQuery[key] = value;
    }
  }

  return lowerCaseQuery;
});

export const selectSortParam = createSelector([selectFilters], (filters) => {
  const sortLabel = filters.sortLabel;
  if (!sortLabel) return {};

  const sortParam = {};
  switch (sortLabel) {
    case "Oldest":
      sortParam.byDate = true;
      break;

    case "Newest":
      sortParam.byDate = false;
      break;

    case "Popular":
      sortParam.byPopularity = false;
      break;
    case "Unpopular":
      sortParam.byPopularity = true;
      break;
    case "Cheap":
      sortParam.byPrice = true;
      break;
    case "Expensive":
      sortParam.byPrice = false;
      break;
    default:
      break;
  }
  return sortParam;
});
