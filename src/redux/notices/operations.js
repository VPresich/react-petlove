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

export const getNoticeById = createAsyncThunk(
  "notices/noticeById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.get(`notices/${id}`);
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
