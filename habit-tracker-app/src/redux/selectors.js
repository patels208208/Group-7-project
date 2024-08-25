import { createSelector } from "@reduxjs/toolkit";
import { habitUnitsOfMeasurement, habitUnitsOfFrequency } from "./constants";

// Simple selector to get the current selected habit
export const habitSelector = (state) => state.habit;

// Simple selector to get the selected units of measurement for the current habit
export const unitOfMeasurementSelector = (state) => state.unitOfMeasurement;

// Simple selector to get the current quantity
export const quantitySelector = (state) => state.quantity;

export const goalSelector = (state) => state.goal;

// Simple selector to get the selected frequency
export const unitOfFrequencySelector = (state) => state.unitOfFrequency;

export const allowedUnitsOfMeasurementSelector = createSelector(
  habitSelector, // Input selector to get the current habit
  (currentHabit) => habitUnitsOfMeasurement[currentHabit] || [] // Output function
);

// Selector to get allowed units of frequency for the current habit
export const allowedUnitsOfFrequencySelector = createSelector(
  habitSelector, // Input selector to get the current habit
  (currentHabit) => habitUnitsOfFrequency // Output function returns the constant array
);

export const statusSelector = (state) => state.status;

export const statusMessageSelector = (state) => state.statusMessage;
