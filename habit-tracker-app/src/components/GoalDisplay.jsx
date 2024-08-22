

const GoalDisplay = ({userGoals}) => {
  return (
    <div>
      <div>
      <h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-lg">My Goals:</h2>
      </div>
      <div>
        {userGoals.map((goal, index) => (
          <div key={index}>
            <p>Goal:{goal.habit_name} {goal.goal_unit} {goal.measurement} {goal.frequency}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalDisplay;