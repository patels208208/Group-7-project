const GoalInput = ({setSelectedGoal}) => {
  const handleChange = (event) => {
    setSelectedGoal(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      {/* <h3 className="text-silverMedal-900">Number of times to complete this habit {frequency}:</h3> */}
      <input onChange={handleChange} name="goal-input" placeholder="Times per..." className="w-50 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-silverMedal-800 shadow-sm ring-1 ring-inset ring-silverMedal-500 hover:bg-briny-100" type="number" />
    </div>
  )
}

export default GoalInput;