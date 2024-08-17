import React, { useState } from "react";
import HabitSquare from "./HabitSquare";
import { icon as habitIcons } from "./HabitIcon";

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
    <div className="flex-wrap grid grid-cols-3 md:grid-cols-6 gap-2 justify-items-center items-center mx-6 md:mx-28 lg:mx-36 my-5 border-2   border-briny-500 rounded-lg">
      {habitIcons.map((icon, i) => (
        <HabitSquare
          className={`flex justify-center items-center h-16 p-2 m-2 border-2 w-20 rounded-lg border-briny-500 text-briny-500 ${
            selectedHabitSquare.includes(i)
              ? "bg-melon-500 text-ghostWhite-500"
              : "hover:bg-briny-500 hover:text-ghostWhite-500"
          }`}
          key={i}
          icon={icon}
          onClick={() => handleSquareClick(i)}
        />
      ))}
    </div>
  );
};

export default Grid;
