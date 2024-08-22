import "../assets/styles/habitSquare.css";

const HabitSquare = ({ selectedHabitSquare, className, icon, habitName, onClick = () => {}, setSelectedIcon }) => {
  className = className || ""; // Add this line to ensure className is always defined
  const handleClick = () => {
    onClick(icon);
    if (setSelectedIcon) {
    setSelectedIcon(icon); // Set the selected icon
    }
  };
  
  return (
      <div className={className} onClick={handleClick}>
        {typeof icon ==='string' ? <img src={icon} alt={habitName} /> : icon}
        <p>{habitName}</p>
      </div>
      );
};

export default HabitSquare;
