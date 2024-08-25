import React, { useState } from "react";

const NewGoalButton = ({
  setSelectedFrequency,
  setSelectedGoal,
  setSelectedHabitSquare,
  setSelectedMeasurement,
  setSelectedQuantity,
  onNewGoal,
}) => {
  const handleNewGoal = () => {
    setSelectedFrequency("");
    setSelectedGoal("");
    setSelectedHabitSquare([]);
    setSelectedMeasurement("");
    setSelectedQuantity("");
    onNewGoal(); //Call the function to hid the GoalConfirmation component
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleNewGoal}
        className="bg-melon-500 hover:bg-deepFriedSunRays-500 text-white font-bold py-2 px-4 rounded-md"
      >
        Set New Goal
      </button>
    </div>
  );
};

export default NewGoalButton;
