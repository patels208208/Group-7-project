import React from 'react';
import HabitApp from './HabitApp';
import {icon} from '../components/HabitIcon.jsx';

export function HydrationApp2() {
    return (
      <HabitApp
        icon={icon[0]}
        habitName="Hydration"
        url="http://localhost:3001/medication"
        habitId="44"
      />
    );
  };

  export default HydrationApp2;