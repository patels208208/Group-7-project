import "../assets/styles/habitSquare.css";

const HabitSquare = ({ className, icon, habitName}) => {
  const handleClick = () => {
    onclick(icon);
  };
  
  return (
    <div className={className} onClick={handleClick}>
      {icon}
      <p>{habitName}</p>
    </div>
  );
};

export default HabitSquare;
