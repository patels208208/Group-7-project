import HabitSquare from './HabitSquare';

const GoalDisplay = ({selectedHabitSquare, selectedQuantity, selectedMeasurement, selectedGoal, selectedFrequency}) => {
  return (
    <div>
      <div>
      <h2>My Goals:</h2>
      </div>
      <div>
        {selectedHabitSquare && (
        <HabitSquare selectedHabitSquare={selectedHabitSquare}/>
        )}
      <p>Goal: {selectedHabitSquare} {selectedQuantity} {selectedMeasurement} {selectedGoal} time(s) {selectedFrequency}</p>
      </div>
    </div>
  );
};

export default GoalDisplay;