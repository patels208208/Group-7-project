import React, { useState } from 'react';

const NewGoalButton = () => {
    const [selectedFrequency, setSelectedFrequency] = useState(''); // Reset the frequency dropdown
    const [selectedGoal, setSelectedGoal] = useState(1); // Return goal input to one
    const [selectedHabitSquare, setSelectedHabitSquare] = useState([]); // Deselect the habit squares in the grid
  
  const handleNewGoal = () => {
    setSelectedFrequency('');
    setSelectedGoal(1);
    setSelectedHabitSquare([]);
  };

  return (
    <div>
    <button onClick={handleNewGoal}
    className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
    >Set New Goal
    </button>
  
    </div>
  );
};

export default NewGoalButton;