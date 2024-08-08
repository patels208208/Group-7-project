import React, {useState } from 'react';
import HabitSquare from './HabitSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/grid.css';
import '../assets/styles/habitSquare.css';



const Grid = () => {
  const [selectedHabitSquare, setSelectedHabitSquare] = useState([]);

  const handleSquareClick = (index) => {
    setSelectedHabitSquare((prevSelected) => 
      prevSelected.includes(index)
      ? prevSelected.filter((i) => i !== index)
      : [...prevSelected, index]
    );
  };

    const icons = [
      <FontAwesomeIcon icon="fa-solid fa-glass-water" size="3x" />,
      <FontAwesomeIcon icon="fa-solid fa-utensils" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-person-walking" size="3x" />,
      <FontAwesomeIcon icon="fa-solid fa-book-open" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-bed" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-pills" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-icons" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-bath" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-paw" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-seedling" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-people-group" size="3x"/>,
      <FontAwesomeIcon icon="fa-solid fa-comments" size="3x"/>
    ];
    console.log(setSelectedHabitSquare);
    return (
      <div className="grid">
        {icons.map((icon, i) => (
    <HabitSquare 
    className={`habit-square ${selectedHabitSquare.includes(i) ? 'selected' : ''}`}
    key={i} 
    icon={icon}
    onClick={() => handleSquareClick(i)}
    />
    ))}
    </div>
    );
   
  };


export default Grid;