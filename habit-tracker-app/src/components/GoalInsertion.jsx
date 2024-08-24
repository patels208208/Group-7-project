function GoalInsertion({ user_id, habit_id, measurement_unit, measurement, frequency_unit, frequency, }) {
    return (
      <div className="flex flex-col w-72 h-32 bg-white text-melon-500 shadow-xl hover:text-briny-500 active:text-briny-300 align-middle justify-center">
        <button
          onClick={(event) => handleClick(event, url, habitId)}
          className="text-melon-500 w-auto h-auto ease-in-out duration-200 hover:text-briny-500 active:text-briny-300"
        >
          <HabitSquare icon={icon} habitName={habitName} className="text-l font-semibold font-heading my-1" />
          <p className="text-sm">Tap here when daily goal is complete</p>
        </button>
      </div>
    );
  }

export default GoalInsertion;