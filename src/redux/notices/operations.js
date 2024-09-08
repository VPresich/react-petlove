import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getNoticesPerPage = createAsyncThunk(
  "notices/getPage",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices`, {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesWithParams = createAsyncThunk(
  "notices/getWithParams",
  async ({ page, limit, query, sort }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices`, {
        params: {
          page,
          limit,
          ...query,
          ...sort,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "notices/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices/categories`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSpecies = createAsyncThunk(
  "notices/getSpecies",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices/species`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSex = createAsyncThunk(
  "notices/getSex",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices/sex`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
