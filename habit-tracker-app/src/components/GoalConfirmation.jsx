

const GoalConfirmation = ({ selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal }) => {
  console.log(selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal);
  return (
    <div>
      <p>Goal: {selectedHabitSquare} {selectedQuantity} {selectedMeasurement} {selectedGoal} time(s) {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;