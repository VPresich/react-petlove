export const selectFiltersState = (state) => state.filters;
export const selectFilter = (state) => state.filters.params.filter;
export const selectSortParam = (state) => state.filters.params.sort;
export const selectQueryParams = (state) => state.filters.params.query;
