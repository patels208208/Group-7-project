import "../assets/styles/habitSquare.css";
import { icon } from "./HabitIcon";
import HabitIcon from "./HabitIcon";

const HabitSquare = ({habitIcon, habitName}) => {
  
  return (
    <div className="habit-square">
      <HabitIcon icon = {habitIcon}/>
      <p>{habitName}</p>
    </div>
  );
};

export default HabitSquare;
