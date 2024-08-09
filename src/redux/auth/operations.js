import { createAsyncThunk } from "@reduxjs/toolkit";
export const clPresetName = import.meta.env.VITE_UPLOAD_PRESET_NAME;

import {
  saveFavoritesIds,
  saveFavorites,
  savePets,
  saveViewedPets,
} from "../favorites/slice";

import {
  axiosInst,
  setAuthHeader,
  clearAuthHeader,
  clAxiosInst,
} from "../../api/axiosInst";

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axiosInst.post("users/signup", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axiosInst.post("users/signin", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/signout", async (_, thunkAPI) => {
  try {
    await axiosInst.post("users/signout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      // Reading the token from the state via getState()
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;

      // Add it to the HTTP header and perform the request
      setAuthHeader(savedToken);
      const response = await axiosInst.get("users/current");
      thunkAPI.dispatch(saveFavoritesIds(response.data.noticesFavorites));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const state = getState();
      const savedToken = state.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);

export const getFullUserInfo = createAsyncThunk(
  "auth/getFullUserInfo",
  async (_, thunkAPI) => {
    try {
      // Reading the token from the state via getState()
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;

      // Add it to the HTTP header and perform the request
      setAuthHeader(savedToken);
      const response = await axiosInst.get("users/current/full");
      thunkAPI.dispatch(saveFavorites(response.data.noticesFavorites));
      thunkAPI.dispatch(saveViewedPets(response.data.noticesViewed));
      thunkAPI.dispatch(savePets(response.data.pets));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const state = getState();
      const savedToken = state.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);

export const uploadImage = createAsyncThunk(
  "image/upload",
  async (file, thunkAPI) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", clPresetName);
    try {
      const response = await clAxiosInst.post("image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.url;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/currentEdit",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await axiosInst.patch("users/current/edit", data);
      // thunkAPI.dispatch(saveFavorites(response.data.noticesFavorites));
      // thunkAPI.dispatch(saveViewedPets(response.data.noticesViewed));
      // thunkAPI.dispatch(savePets(response.data.pets));
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
