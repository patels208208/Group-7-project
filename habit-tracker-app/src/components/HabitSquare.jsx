const HabitSquare = ({value, onClick}) => {

  return (
  <button type="button" className="habit-square" onClick={onClick}>
    {value}
  
  </button>
  );
};

  export default HabitSquare