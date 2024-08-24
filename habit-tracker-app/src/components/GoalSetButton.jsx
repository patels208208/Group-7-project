import GoalConfirmation from './GoalConfirmation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../redux/action.js';
import { habitChanged, habitSlice } from '../redux/habitReducer.js';
import { habits, habitUnitsOfMeasurement, habitUnitsOfFrequency } from '../redux/constants.js'
import { createGoalSetting } from '../services/api.js';
import { goalSelector, habitSelector, quantitySelector, unitOfFrequencySelector, unitOfMeasurementSelector, statusSelector, statusMessageSelector } from '../redux/selectors.js';
import { setGoal } from '../redux/thunks.js';

const GoalSetButton = () => {
  const dispatch = useDispatch();
  const habit = useSelector(habitSelector);
  const quantity = useSelector(quantitySelector);
  const unitOfMeasurement = useSelector(unitOfMeasurementSelector);
  const goal = useSelector(goalSelector);
  const unitOfFrequency = useSelector(unitOfFrequencySelector);
  const status = useSelector(statusSelector);
  const statusMessage = useSelector(statusMessageSelector);
  const isButtonDisabled = habit === "" || !quantity || !goal || unitOfFrequency === "" || status === "loading";

  const handleSubmit = async () => {
    if(isButtonDisabled) return;

    const payload = {
      user_id: 1,     // TODO: Example value, replace with actual data
      habit_id: habits.findIndex(x => x === habit) + 1,  // Data from Redux store
      measurement_unit: goal,
      measurement: unitOfMeasurement,
      frequency_unit: quantity,
      frequency: unitOfFrequency
    };
    console.log(payload)

    dispatch(setGoal(payload));
  };

  return (
    <div className="flex flex-col items-center space-y-2">
    <button onClick={handleSubmit}
    className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
    disabled={isButtonDisabled}
    >Submit Goal
    </button>
    {statusMessage && <div><p>{statusMessage}</p></div>}
    {/* {showGoalConfirmation && <GoalConfirmation 
    selectedFrequency={selectedFrequency}
    selectedGoal={selectedGoal}
    selectedHabitSquare={selectedHabitSquare}
    selectedMeasurement={selectedMeasurement}
    selectedQuantity={selectedQuantity}
    selectedIcon={selectedIcon}
    />} */}
    </div>
  );
};

export default GoalSetButton;