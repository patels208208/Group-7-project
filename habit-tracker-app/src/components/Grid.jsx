import React, {useState } from 'react';
import HabitSquare from './HabitSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/grid.css';

const Grid = () => {
  const [selectedHabitSquare, setSelectedHabitSquare] = useState(null);

  const handleSquareClick = (icon, index) => {
    setSelectedHabitSquare({ icon, index });
    console.log(`Selected icon: ${icon} at index: ${index}`);
};
  
  const renderHabitSquare = (i) => {
    const icons = [
      <FontAwesomeIcon icon="fa-solid fa-glass-water" />,
      <FontAwesomeIcon icon="fa-solid fa-utensils" />,
      <FontAwesomeIcon icon="fa-solid fa-person-walking" />,
      <FontAwesomeIcon icon="fa-solid fa-book-open" />,
      <FontAwesomeIcon icon="fa-solid fa-bed" />,
      <FontAwesomeIcon icon="fa-solid fa-pills" />,
      <FontAwesomeIcon icon="fa-solid fa-icons" />,
      <FontAwesomeIcon icon="fa-solid fa-bath" />,
      <FontAwesomeIcon icon="fa-solid fa-paw" />,
      <FontAwesomeIcon icon="fa-solid fa-seedling" />,
      <FontAwesomeIcon icon="fa-solid fa-people-group" />,
      <FontAwesomeIcon icon="fa-solid fa-comments" />
    ];

    if (i < 0 || i >= icons.length) {
      console.error(`Index ${i} is out of bounds for icons array`);
      return null;
    }
    return (
    <HabitSquare 
    key={i} 
    value={`Square ${i}`}
    icon={icons[i]}
    onClick={handleSquareClick(icons[i], i)}
    />
    )
  };

  console.log(selectedHabitSquare);

  return (
  <div className="grid">
  {[...Array(11).map((_, i) => renderHabitSquare(i))]}
    </div>
  );
};
export default Grid;