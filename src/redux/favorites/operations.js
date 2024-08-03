import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const fetchFavoritesByIds = createAsyncThunk(
  "notises/getFavoritsByIds",
  async (ids, thunkAPI) => {
    try {
      const promises = ids.map((id) => axiosInst.get(`notices/${id}`));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "notises/addFavorite",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.post(`notices/favorites/add/${id}`);
      console.log("Operations: add_favorite", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "notises/removeFavorite",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
