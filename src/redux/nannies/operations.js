import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getNanniesPerPage = createAsyncThunk(
  "nannies/getPage",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`nannies`, {
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

export const getNannyById = createAsyncThunk(
  "nannies/teacherById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.get(`nannies/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNanniesWithParams = createAsyncThunk(
  "nannies/withParams",
  async ({ page, limit, query, sort }, thunkAPI) => {
    try {
      const response = await axiosInst.get(`nannies`, {
        params: {
          page,
          limit,
          query,
          sort,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
