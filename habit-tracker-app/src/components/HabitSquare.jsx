import "../assets/styles/habitSquare.css";

const HabitSquare = ({ className, icon, habitName, handleClick}) => {
  const handleClick = () => {
    onClick(icon);
  };
  
  return (
    <div className={className} onClick={() => handleClick(icon)}>
      {icon}
      <p>{habitName}</p>
    </div>
  );
};

export default HabitSquare;
