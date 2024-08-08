const HabitSquare = ({value, icon, onClick}) => {
  const handleClick = () => {
    onClick(icon);
  };

  return (
  <button type="button" className="habit-square" onClick={handleClick}>
    {value} {icon}
  </button>
  );
};

  export default HabitSquare