
function HabitIcon({ habit }) {
  return (
    <div className="habit-icon">
      <img src={habit.icon} alt={habit.name} />
    </div>
  );
}