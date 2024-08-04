import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getAllFriends = createAsyncThunk(
  "friends/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`friends`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
