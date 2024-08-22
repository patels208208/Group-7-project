

const GoalConfirmation = ({ selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal, selectedIcon }) => {
  console.log(selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal, selectedIcon);
  return (
    <div className="p-4 bg-white rounded-md shasow-md">
        <p className="text-silverMedal-800">Goal: {selectedHabitSquare} {selectedQuantity} {selectedMeasurement} {selectedGoal} {selectedGoal ===1 ?'time' : 'times'} {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;