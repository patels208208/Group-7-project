// The beginnings of an attempt to refactor each habit component into a single component. See also: HabitApp.jsx and HydrationApp2.jsx
import React from 'react';
import HabitApp from './HabitApp.jsx';
import {icon} from './HabitIcon.jsx';

export function HabitComponent({ habit, habitName, habitIcons, habitId, url }) {
  const habitIcon = habitIcons && habitIcons[habit.icon]? habitIcons[habit.icon] : "defaultIcon";
    return (
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <HabitApp
        icon={habitIcon}
        habitName={habitName}
        url={url}
        habitId={habitId}
        className="flex flex-col items-center"
      />
      </div>
    );
  };

  export default HabitComponent;