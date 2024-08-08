import React, {useState } from 'react';
import HabitSquare from './HabitSquare'

const Grid = () => {
  const [selectedHabitSquare, setSelectedHabitSquare] = useState(null);

  const handleSquareClick = (icon, index) => {
    setSelectedHabitSquare({ icon, index });
    console.log(`Selected icon: ${icon} at index: ${index}`);
};
  
  const renderHabitSquare = (i) => {
    const icons = [//fontawesome icons
    
    ];
    return (
    <HabitSquare 
    key={i} 
    value={`Square ${i}`}
    icon={icons[i]}
    onClick={handleSquareClick(icons[i], i)}
    />
    )
  };

  return (
  <div className="grid">
  {[...Array(11).map((_, i) => renderHabitSquare(i))]}
    </div>
  );
};
//   }
//     <div className="grid-row">
//       {renderHabitSquare(0)}
//       {renderHabitSquare(1)}
//       {renderHabitSquare(2)}
//       {renderHabitSquare(3)}
//     </div>
//     <div className="grid-row">
//       {renderHabitSquare(4)}
//       {renderHabitSquare(5)}
//       {renderHabitSquare(6)}
//       {renderHabitSquare(7)}
//     </div>
//     <div className="grid-row">
//      {renderHabitSquare(8)}
//      {renderHabitSquare(9)}
//      {renderHabitSquare(10)}
//      {renderHabitSquare(11)}
//     </div>
//   </div>
//   );
// }

export default Grid;