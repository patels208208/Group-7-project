import "../assets/styles/habitIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassWater, faUtensils, faPersonWalking, faBookOpen, faBed, faPills, faIcons, faBath, faPaw, faSeedling, faPeopleGroup, faComments } from "@fortawesome/free-solid-svg-icons";

const hydrationIcon = (<FontAwesomeIcon icon={faGlassWater} size="3x" alt="Hydration" />);
const foodIcon = (<FontAwesomeIcon icon={faUtensils} size="3x" alt="Food" className="icon-teal"/>);
const movementIcon = (<FontAwesomeIcon icon={faPersonWalking} size="3x" alt="Movement" className="icon-teal"/>);
const readingIcon = (<FontAwesomeIcon icon={faBookOpen} size="3x" alt= "Reading" className="icon-teal"/>);
const sleepIcon = (<FontAwesomeIcon icon={faBed} size="3x" alt="Sleep" className="icon-teal"/>);
const medicationIcon = (<FontAwesomeIcon icon={faPills} size="3x" alt="Medication" className="icon-teal"/>);
const hobbiesIcon = (<FontAwesomeIcon icon={faIcons} size="3x" alt="Hobbies" color='#037F8C'/>);
const hygieneIcon = (<FontAwesomeIcon icon={faBath} size="3x" alt="Hygeine" className="icon-teal"/>);
const petCareIcon = (<FontAwesomeIcon icon={faPaw} size="3x" alt="Pet Care" className="icon-teal"/>);
const plantCareIcon = (<FontAwesomeIcon icon={faSeedling} size="3x" alt="Plant Care" className="icon-teal"/>);
const socialIcon = (<FontAwesomeIcon icon={faPeopleGroup} size="3x" alt="Socialising" className="icon-teal"/>);
const communicationIcon = (<FontAwesomeIcon icon={faComments} size="3x" alt="Communication" className="icon-teal"/>);

const icon = [
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
  <div className="icon-teal">
   {habitIcon}
    </div>
);
}

export { icon };
export default HabitIcon;
