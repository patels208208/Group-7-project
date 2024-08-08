import './habitIcon.css';


function HabitIcon({ habitIcon, habitName }) {
  return (
    <div className="habit-icon">
      <img src={habitIcon} alt={habitName} />
    </div>)
};

export default HabitIcon;