import React, { useState } from "react";
import HabitSquare from "./HabitSquare";
import { icons } from "./HabitIcon";
import "../assets/styles/grid.css";

const Grid = () => {
  const [selectedHabitSquare, setSelectedHabitSquare] = useState([]);

  const handleSquareClick = (index) => {
    setSelectedHabitSquare((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div className="grid">
      {icons.map((icon, i) => (
        <HabitSquare
          className={`habit-square ${selectedHabitSquare.includes(i) ? "selected" : ""}`}
          key={i}
          icon={icon}
          onClick={() => handleSquareClick(i)}
        />
      ))}
    </div>
  );
};

export default Grid;
