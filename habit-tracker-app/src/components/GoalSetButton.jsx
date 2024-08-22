import GoalConfirmation from './GoalConfirmation';
import React, { useState } from 'react';

const GoalSetButton = ({setSelectedHabitSquare, selectedHabitSquare, setSelectedQuantity, selectedQuantity, setSelectedMeasurement, selectedMeasurement, setSelectedFrequency, selectedFrequency, setSelectedGoal, selectedGoal, SetSelectedIcon, selectedIcon}) => {
  const [showGoalConfirmation, setShowGoalConfirmation] = useState(false);

  const handleSubmit = async () => {
    // Submit the habit square, frequency, and goal to the database
    // You can use an API call or any other method to send the data to the server

    // After submitting, show the Goal Confirmation component
    setShowGoalConfirmation(true);
  };

  return (
    <div className="flex flex-col itmes-center space-y-2">
    <button onClick={handleSubmit}
    className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
    >Submit Goal
    </button>
    {showGoalConfirmation && <GoalConfirmation 
    selectedFrequency={selectedFrequency}
    selectedGoal={selectedGoal}
    selectedHabitSquare={selectedHabitSquare}
    selectedMeasurement={selectedMeasurement}
    selectedQuantity={selectedQuantity}
    selectedIcon={selectedIcon}
    />}
    </div>
  );
};

export default GoalSetButton;