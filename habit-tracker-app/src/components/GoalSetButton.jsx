import GoalConfirmation from './GoalConfirmation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../redux/action.js';
import { habitChanged, habitSlice } from '../redux/habitReducer.js';
import { habits, habitUnitsOfMeasurement, habitUnitsOfFrequency } from '../redux/constants.js'

const GoalSetButton = () => {
  const dispatch = useDispatch();
  const habit = useSelector(state => state.habit);
  const quantity = useSelector(state => state.quantity);
  const unitOfMeasurement = useSelector(state => state.unitOfMeasurement);
  const goal = useSelector(state => state.goal);
  const unitOfFrequency = useSelector(state => state.unitOfFrequency);
  const [showGoalConfirmation, setShowGoalConfirmation] = useState(false);

  const handleSubmit = () => {
    const habitType = habit;  
    const measurementUnitId = habitUnitsOfMeasurement[habitType].indexOf(unitOfMeasurement) + 1;
    const frequencyUnitId = habitUnitsOfFrequency.indexOf(unitOfFrequency) + 1;

    const payload = {
      user_id: 1,     // Example value, replace with actual data
      habit_id: habits.findIndex(x => x === habit) + 1,  // Data from Redux store
      measurement_unit: measurementUnitId,
      measurement: quantity,
      frequency_unit: frequencyUnitId,
      frequency: goal
    };
    setShowGoalConfirmation(true);
    console.log(payload); // Checks that it is inputting what is expected

    // Dispatch the postData action with the payload
    dispatch(postData(payload));
  };

  return (
    <div className="flex flex-col items-center space-y-2">
    <button onClick={handleSubmit}
    className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
    >Submit Goal
    </button>
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