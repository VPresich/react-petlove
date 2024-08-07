import { createSlice } from "@reduxjs/toolkit";
import { getAllFriends } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    resetFriendsState(state) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFriends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetFriendsState } = friendsSlice.actions;

export default friendsSlice.reducer;
