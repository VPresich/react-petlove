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
      species: "Show all",
      category: "Show all",
      sex: "Show all",
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

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     params: {
//       level: "A1 Beginner",
//       language: "English",
//       price_per_hour: "40 $",
//     },
//   },
//   reducers: {
//     saveQueryParams: (state, action) => {
//       state.params = action.payload;
//     },
//     saveLanguage: (state, action) => {
//       state.params.language = action.payload;
//     },
//     saveLevel: (state, action) => {
//       state.params.level = action.payload;
//     },
//     savePrice: (state, action) => {
//       state.params.price_per_hour = action.payload;
//     },
//   },
// });

// export const { saveQueryParams, saveLevel, saveLanguage, savePrice } =
//   filtersSlice.actions;
// export default filtersSlice.reducer;
