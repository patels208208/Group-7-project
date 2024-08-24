import React, { useState } from "react";
import HabitSquare from "./HabitSquare";
import { habits } from "../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector } from "../redux/selectors";
import { habitIcons } from "./HabitIcon";
import { habitChanged } from "../redux/habitReducer";


const Grid = () => {
  const dispatch = useDispatch(); // Access dispatch
  const selectedHabit = useSelector(habitSelector)

  const changeHabit = (newHabit) => {
    dispatch(habitChanged(newHabit)); // Dispatch action with payload
  };

  return (
    <div className="flex-wrap grid grid-cols-3 md:grid-cols-6 gap-2 justify-items-center items-center mx-6 md:mx-28 lg:mx-36 my-5 border-2 bg-white shadow-sm border-briny-500 rounded-lg">
      {habits.map((habit, i) => (
        <HabitSquare
          className={`flex justify-center items-center h-16 p-2 m-2 border-2 w-20 rounded-lg shadow-sm border-briny-500 text-briny-500 ${
            selectedHabit === habit
              ? "bg-melon-500 text-ghostWhite-500"
              : "hover:bg-briny-500 hover:text-ghostWhite-500"
          }`}
          key={habit}
          icon={habitIcons[habit]}
          onClick={() => changeHabit(habit)}
        />
      ))}
    </div>
  );
};

export default Grid;
