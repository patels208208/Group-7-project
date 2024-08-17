

const GoalConfirmation = ({ selectedHabitSquare, selectedFrequency, selectedGoal }) => {
  return (
    <div>
      <p>Goal:{selectedHabitSquare} {selectedGoal} time(s) {selectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;