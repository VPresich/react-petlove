import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getAllCities = createAsyncThunk(
  "cities/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`cities`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCities = createAsyncThunk(
  "cities/searchCities",
  async (searchTerm = "", thunkAPI) => {
    try {
      const response = await axiosInst.get(`cities`, {
        params: {
          search: searchTerm,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
