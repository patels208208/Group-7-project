import './habitIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HabitIcon({ habitIcon, habitName }) {
  return (
    <div className="habit-icon">
      <img src={habitIcon} alt={habitName} />
    </div>)
};

export default HabitIcon;