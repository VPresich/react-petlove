import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getNewsPerPage = createAsyncThunk(
  "news/getPage",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`news`, {
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

export const getNewsWithParams = createAsyncThunk(
  "news/withParams",
  async ({ page, limit, keyword }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`news`, {
        params: {
          page,
          limit,
          keyword,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
