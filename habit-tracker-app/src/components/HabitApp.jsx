// The beginnings of an attempt to refactor each habit component into a single component. See also: HabitComponents.jsx and HydrationApp2.jsx
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
    console.error("Error:", error.message);
  }
};

function HabitApp({ icon, habit, habitName, url, habitId }) {
    return (
      <div className="flex flex-col bg-white text-melon-500 shadow-xl hover:shadow-2xl active:shadow-lg rounded-lg transition-shadow duration-300 align-middle justify-center p-4">
        <button
          onClick={(event) => handleClick(event, url, habitId)}
          className="text-melon-500 w-full h-full ease-in-out duration-200 hover:text-briny-500 active:text-briny-300 flex flex-col items-center justify-center"
        >
          <HabitSquare icon={icon} habitName={habitName} habit={habit} className="text-lg font-semibold font-heading my-1" />
          <p className="text-sm mt-2">Tap here when daily goal is complete</p>
        </button>
      </div>
    );
  }

export default HabitApp;