// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import { habits, habitUnitsOfMeasurement, habitUnitsOfFrequency } from "./constants";
  

const initialState = () => ({
  habit: habits[0],
  quantity: 1,
  unitOfMeasurement: habitUnitsOfMeasurement[habits[0]][0],
  unitOfFrequency: habitUnitsOfFrequency[0]
});

// Create a slice for the counter
const habitSlice = createSlice({
  name: "habits", // Name of the slice
  initialState: initialState(), // Initial state
  reducers: {
    habitChanged: (state, action) => {
        state.habit = action.payload
        state.quantity = 1
        state.unitOfMeasurement = habitUnitsOfMeasurement[action.payload][0]
        state.goal = 1
        state.unitOfFrequency = habitUnitsOfFrequency[0]
    },
    quantityChanged: (state, action) => {
        state.quantity = action.payload
    },
    unitOfMeasurementChanged: (state, action) => {
        state.unitOfMeasurement = action.payload
    },
    goalChanged: (state, action) => {
        state.goal = action.payload
    },
    unitOfFrequencyChanged: (state, action) => {
        state.unitOfFrequency = action.payload
    }
    // Reducers that update the state
    // increment: (state) => state + 1,
    // decrement: (state) => state - 1,
    // incrementByAmount: (state, action) => state + action.payload,
  },
});

// Export the generated actions
export const { habitChanged, quantityChanged, unitOfMeasurementChanged, goalChanged, unitOfFrequencyChanged } = habitSlice.actions;

// Export the reducer to include it in the store
export default habitSlice.reducer;
