import { createSlice } from "@reduxjs/toolkit";
import { setAuthHeader } from "../../api/axiosInst";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  getFullUserInfo,
  updateUserInfo,
} from "./operations";

const initialState = {
  user: { name: null, email: null, avatarURL: "", phone: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRefreshState(state, action) {
      state.isRefreshing = action.payload || false;
    },
    saveToken(state, action) {
      state.token = action.payload;
      setAuthHeader(state.token);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, theme: "red" };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      //-------------------------------------------------
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.avatarURL = action.payload.avatar;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      //------------------------------------------------
      .addCase(getFullUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.avatarURL = action.payload.avatar;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFullUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //------------------------------------------------;
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.avatarURL = action.payload.avatar;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    //------------------------------------------------;
  },
});

export const { resetRefreshState } = authSlice.actions;
export default authSlice.reducer;
export const { saveToken } = authSlice.actions;
