import HabitSquare from './HabitSquare';

const GoalDisplay = ({selectedHabitSquare, selectedQuantity, selectedMeasurement, selectedGoal, selectedFrequency}) => {
  return (
    <div>
      <div>
      <h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-lg">My Goals:</h2>
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