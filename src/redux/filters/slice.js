import { createSlice } from "@reduxjs/toolkit";

const getSortParam = (filter) => {
  const sort = {};
  switch (filter.replace(/\$/g, "")) {
    case "A to Z":
      sort.name = 1;
      break;
    case "Z to A":
      sort.name = -1;
      break;
    case "Popular":
      sort.rating = -1;
      break;
    case "Not Popular":
      sort.rating = 1;
      break;
    default:
      break;
  }
  return sort;
};

const getQueryParams = (filter) => {
  let query = {};
  switch (filter.replace(/\$/g, "")) {
    case "Greater than 10":
      query = { price_per_hour: { $gt: 10 } };
      break;
    case "Less than 10":
      query = { price_per_hour: { $lt: 10 } };
      break;
    default:
      break;
  }
  return query;
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    params: {
      filter: "A to Z",
      query: {},
      sort: { name: 1 },
    },
  },
  reducers: {
    saveFilter: (state, action) => {
      state.params.filter = action.payload;
      state.params.sort = getSortParam(action.payload);
      state.params.query = getQueryParams(action.payload);
    },
  },
});

export const { saveFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
