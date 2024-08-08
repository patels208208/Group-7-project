import './habitIcon.css';
import fontawesome from '@fortawesome/fontawesome';

function HabitIcon({ habitIcon, habitName }) {
  return (
    <div className="habit-icon">
      <img src={habitIcon} alt={habitName} />
    </div>)
};

export default HabitIcon;