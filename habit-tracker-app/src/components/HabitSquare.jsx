import "../assets/styles/habitSquare.css";

const HabitSquare = ({ className, icon, habitName, onClick = () => {} }) => {
  className = className || ""; // Add this line to ensure className is always defined
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
