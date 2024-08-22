

const GoalConfirmation = ({ selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal }) => {
  console.log(selectedQuantity, selectedMeasurement, selectedHabitSquare, selectedFrequency, selectedGoal);
  return (
    <div>
      <p>Goal: {selectedHabitSquare} {selectedQuantity} {selectedMeasurement} {selectedGoal} {selectedGoal ===1 ?'time' : 'times'} {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;