import GoalConfirmation from './GoalConfirmation';
import React, { useState } from 'react';

const GoalSetButton = ({selectedHabitSquare, selectedQuantity, selectedMeasurement, selectedFrequency, selectedGoal}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    // Submit the habit square, frequency, and goal to the database
    // You can use an API call or any other method to send the data to the server

    // After submitting, show the Goal Confirmation component
    setShowConfirmation(true);
  };

  return (
    <div>
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
        />
    )}
    </div>
  );
};

export default GoalSetButton;