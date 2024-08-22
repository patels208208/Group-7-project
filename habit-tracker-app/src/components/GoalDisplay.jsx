

const GoalDisplay = ({userGoals}) => {
  return (
    <div className="p-6 bg-silverMedal-100 rounded-lg shadow-md">
      <div>
      <h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-lg">My Goals:</h2>
      </div>
      <div className="space-y-4">
        {userGoals.map((goal, index) => (
          <div key={index} className="bg-white border border-silverMedal-300 rounded-lg p-4 shadow-sm">
            <p className="text-silverMedal-700 fond-medium">Goal:{goal.habit_name} {goal.goal_unit} {goal.measurement} {goal.frequency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalDisplay;