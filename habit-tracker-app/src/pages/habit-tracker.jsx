import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector } from "../redux/selectors.js";
import { habitChanged } from "../redux/habitReducer.js";
import Grid from "../components/Grid";
import SocialMediaSharing from "../socialmediasharing/socialmediasharing.jsx";
import HabitComponent from "../components/HabitComponents.jsx";
import { habitIcons } from "../components/HabitIcon.jsx";

const HabitTracker = () => {
  const dispatch = useDispatch(); // Access dispatch
  const selectedHabit = useSelector(habitSelector);
  const habits = useSelector((state) => state.habits); // Assuming habits are stored in state.habits
  const habitIcons = useSelector((state) => state.habitIcons); // Assuming habitIcons are stored in state.habitIcons
  const habitName = useSelector((state) => state.habitName); // Assuming habitName is stored in state.habitName
  const habitId = useSelector((state) => state.habitId); // Assuming habitId is stored in state.habitId
  const habit_id = useSelector((state) => state.habit_id); // Assuming habit_id is stored in state.habit_id

  // Example habit object
  const exampleHabit = {
    name: "My First Habit",
    icon: (habitIcons && habitIcons.Hydration) || "defaultIcon", // Provide a fallback icon
    id: "exampleID",
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center items-center mx-6 md:mx-28 lg:mx-36 my-5">
        {habits && habits.length > 0 ? (
          habits.map((habit, i) => (
            <div key={i} className="w-full p-2">
              <HabitComponent
                habit={{
                  ...habit,
                  name: habit.name || "Unnamed Habit",
                  icon: habitIcons[habit.icon] || "defaultIcon",
                  id: habit.id || `habit-${i}`,
                }}
                habitName={habitName}
                habitIcons={habitIcons}
                habitId={habitId}
                url={`/api/habits/${habit_id}/complete`}
              />
            </div>
          ))
        ) : (
          <div className="w-full p-2">
            <HabitComponent
              habitName={exampleHabit.name}
              habitIcons={habitIcons}
              habitId={exampleHabit.id}
              url="#"
            />
            <p className="text-center text-silverMedal-900">
              No habits to display. Choose which habits you want to track.
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center w-full mt-4">
        <a href="/goal-setting" className="mt-4 px-4 py-2 bg-melon-500 text-white rounded-lg shadow hover:bg-melon-600 transition-colors duration-200">
          Goal Setting
        </a>
      </div>
      <div className="socialmedia mt-8">
        <SocialMediaSharing />
      </div>
    </div>
  );
};

export default HabitTracker;
