import { createSelector } from "@reduxjs/toolkit";
import { habitUnitsOfMeasurement } from "./constants";

// Simple selector to get the current selected habit
export const habitSelector = (state) => state.habit;

// Simple selector to get the selected units of measurement for the current habit
export const unitOfMeasurementSelector = (state) =>
  state.unitOfMeasurement;

// Simple selector to get the current quantity
export const quantitySelector = (state) => state.quantity;

// Simple selector to get the selected frequency
export const unitOfFrequencySelector = (state) => state.unitOfFrequency;

export const allowedUnitsOfMeasurementSelector = createSelector(
  habitSelector, // Input selector to get the current habit
  (currentHabit) => habitUnitsOfMeasurement[currentHabit] || [] // Output function
);
