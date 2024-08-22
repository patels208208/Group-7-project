import GoalConfirmation from './GoalConfirmation';
import React, { useState } from 'react';

const GoalSetButton = ({selectedHabitSquare, selectedQuantity, selectedMeasurement, selectedFrequency, selectedGoal, selectedIcon}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    // Submit the habit square, frequency, and goal to the database
    // You can use an API call or any other method to send the data to the server

    // After submitting, show the Goal Confirmation component
    setShowConfirmation(true);
  };

  const handleNewGoal = () => { 
    setShowGoalConfirmation(false);
  };

  return (
    <div className="flex flex-col itmes-center space-y-2">
    <button onClick={handleSubmit}
    className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
    >Submit Goal
    </button>
    {showConfirmation && (
      <GoalConfirmation
        selectedHabitSquare={selectedHabitSquare}
        selectedQuantity={selectedQuantity}
        selectedMeasurement={selectedMeasurement}
        selectedFrequency={selectedFrequency}
        selectedGoal={selectedGoal}
        selectedIcon={selectedIcon}
        />
    )}
    </div>
  );
};

export default GoalSetButton;