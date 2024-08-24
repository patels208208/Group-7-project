import { createAsyncThunk } from "@reduxjs/toolkit";
import { createGoalSetting } from "../services/api";

export const setGoal = createAsyncThunk(
  "habits/setGoal",
  async (newGoal, thunkAPI) => {
    const response = await createGoalSetting(newGoal);
    return response.data;
  }
);
