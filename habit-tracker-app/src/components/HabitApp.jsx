import React from "react";
import HabitSquare from "../components/HabitSquare.jsx";

const handleClick = async (event, url, habitId) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ habit_id: habitId }),
    });
    const data = await response.json();
    console.log("Functioning as expcted");
    event.target.classList.add('text-melon-500', 'border-solid', 'border-melon-500', 'text-center', 'hover:text-melon-500');
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

function HabitApp({ icon, habitName, url, habitId }) {
    return (
      <div className="flex flex-col w-72 h-32 bg-white text-melon-500 shadow-xl hover:text-briny-500 active:text-briny-300 align-middle justify-center">
        <button
          onClick={(event) => handleClick(event, url, habitId)}
          className="text-melon-500 w-auto h-auto hover:text-briny-500 active:text-briny-300"
        >
          <HabitSquare icon={icon} habitName={habitName} className="text-l font-semibold font-heading my-1" />
          <p className="text-sm">Tap here when daily goal is complete</p>
        </button>
      </div>
    );
  }

export default HabitApp;