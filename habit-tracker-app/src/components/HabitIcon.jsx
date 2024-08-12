import '../assets/styles/habitIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const hydrationIcon =<FontAwesomeIcon icon="fa-solid fa-glass-water" size="3x" />
const foodIcon = <FontAwesomeIcon icon="fa-solid fa-utensils" size="3x"/>
const movementIcon = <FontAwesomeIcon icon="fa-solid fa-person-walking" size="3x" />
const readingIcon =<FontAwesomeIcon icon="fa-solid fa-book-open" size="3x"/>
const sleepIcon =  <FontAwesomeIcon icon="fa-solid fa-bed" size="3x"/>
const medicationIcon = <FontAwesomeIcon icon="fa-solid fa-pills" size="3x"/>
const hobbiesIcon = <FontAwesomeIcon icon="fa-solid fa-icons" size="3x"/>
const hygieneIcon = <FontAwesomeIcon icon="fa-solid fa-bath" size="3x"/>
const petCareIcon = <FontAwesomeIcon icon="fa-solid fa-paw" size="3x"/>
const plantCareIcon = <FontAwesomeIcon icon="fa-solid fa-seedling" size="3x"/>
const socialIcon = <FontAwesomeIcon icon="fa-solid fa-people-group" size="3x"/>
const communicationIcon = <FontAwesomeIcon icon="fa-solid fa-comments" size="3x"/>

const icons = [
  hydrationIcon,
  foodIcon,
  movementIcon,
  readingIcon, 
  sleepIcon,
  medicationIcon,
  hobbiesIcon,
  hygieneIcon,
  petCareIcon,
  plantCareIcon,
  socialIcon,
  communicationIcon
];


function HabitIcon({ habitIcon, habitName }) {
  return (
    <div className="habit-icon">
      {habitIcon}
    </div>
    );
};
export { icons };
export default HabitIcon;