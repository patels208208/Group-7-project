

const GoalConfirmation = ({ selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal, selectedIcon }) => {
  console.log(selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal, selectedIcon);
  return (
    <div className="p-4 bg-white rounded-md shasow-md">
      <p className="text-silverMedal-800">Goal: {selectedIcon && <img src={selectedIcon} alt="Selected Habit Icon" className="mt-2"/>}{selectedHabitSquare} {selectedQuantity} {selectedMeasurement} {selectedGoal} time(s) {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;