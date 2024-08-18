

const GoalConfirmation = ({ setSelectedHabitSquare, setSelectedFrequency, setSelectedGoal }) => {
  return (
    <div>
      <p>Goal:{setSelectedGoal} time(s) {setSelectedFrequency}</p>
    </div>
  );
};

export default GoalConfirmation;