import "../assets/styles/habitSquare.css";

const HabitSquare = ({ className, icon, habitName, onClick}) => {
  const handleClick = () => {
    onClick(icon);
  };
  
  return (
    <div className={className} onClick={handleClick}>
      {icon}
      <p>{habitName}</p>
    </div>
  );
};

export default HabitSquare;
