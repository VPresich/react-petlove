import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const fetchFavoritesByNannyIds = createAsyncThunk(
  "nannies/getFavoritsByNannyIds",
  async (ids, thunkAPI) => {
    try {
      const promises = ids.map((id) => axiosInst.get(`nannies/${id}`));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`nannies/favorites`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (idNanny, thunkAPI) => {
    try {
      console.log("idNanny", idNanny);
      const response = await axiosInst.post(`nannies/favorites/${idNanny}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (idNanny, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`nannies/favorites/${idNanny}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
