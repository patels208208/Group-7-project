import "../assets/styles/habitSquare.css";

const HabitSquare = ({ className, icon, onClick }) => {
  const handleClick = () => {
    onClick(icon);
  };
  return (
    <div className={className} onClick={handleClick}>
      {icon}
    </div>
  );
};

export default HabitSquare;
