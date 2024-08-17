

const GoalConfirmation = ({ selectedHabitSquare, selectedFrequency, selectedGoal }) => {
  return (
    <div>
      console.log(selectedHabitSquare);
      <p>Goal:{selectedGoal} time(s) {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;