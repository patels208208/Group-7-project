import HabitSquare from './HabitSquare'

const Grid = ({habits, handleHabitClick}) => {
  
  const renderHabitSquare = position => {
    return (
    <HabitSquare 
    value={habits[position]} 
    onClick={() => handleHabitClick(position)}
    />
    )
  }

  return (
  <div className="grid">
    <div className="grid-row">
      {renderHabitSquare(0)}
      {renderHabitSquare(1)}
      {renderHabitSquare(2)}
      {renderHabitSquare(3)}
    </div>
    <div className="grid-row">
      {renderHabitSquare(4)}
      {renderHabitSquare(5)}
      {renderHabitSquare(6)}
      {renderHabitSquare(7)}
    </div>
    <div className="grid-row">
     {renderHabitSquare(8)}
     {renderHabitSquare(9)}
     {renderHabitSquare(10)}
     {renderHabitSquare(11)}
    </div>
  </div>
  );
}

export default Grid;