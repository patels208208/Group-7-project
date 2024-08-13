import "../assets/styles/habitIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassWater, faUtensils, faPersonWalking, faBookOpen, faBed, faPills, faIcons, faBath, faPaw, faSeedling, faPeopleGroup, faComments } from "@fortawesome/free-solid-svg-icons";

const hydrationIcon = (<FontAwesomeIcon icon={faGlassWater} size="3x" alt="Hydration" />);
const foodIcon = (<FontAwesomeIcon icon={faUtensils} size="3x" alt="Food" />);
const movementIcon = (<FontAwesomeIcon icon={faPersonWalking} size="3x" alt="Movement" />);
const readingIcon = (<FontAwesomeIcon icon={faBookOpen} size="3x" alt= "Reading" />);
const sleepIcon = (<FontAwesomeIcon icon={faBed} size="3x" alt="Sleep" />);
const medicationIcon = (<FontAwesomeIcon icon={faPills} size="3x" alt="Medication" />);
const hobbiesIcon = (<FontAwesomeIcon icon={faIcons} size="3x" alt="Hobbies" />);
const hygieneIcon = (<FontAwesomeIcon icon={faBath} size="3x" alt="Hygeine" />);
const petCareIcon = (<FontAwesomeIcon icon={faPaw} size="3x" alt="Pet Care" />);
const plantCareIcon = (<FontAwesomeIcon icon={faSeedling} size="3x" alt="Plant Care" />);
const socialIcon = (<FontAwesomeIcon icon={faPeopleGroup} size="3x" alt="Socialising" />);
const communicationIcon = (<FontAwesomeIcon icon={faComments} size="3x" alt="Communication" />);

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
  communicationIcon,
];

function HabitIcon({ habitIcon, habitName }) {
  return (
  <div className="habit-icon">
    {habitIcon}
    </div>
);
}

export { icons };
export default HabitIcon;
