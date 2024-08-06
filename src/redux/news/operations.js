import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getNewsPerPage = createAsyncThunk(
  "nannies/getPage",
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
  "nannies/withParams",
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
