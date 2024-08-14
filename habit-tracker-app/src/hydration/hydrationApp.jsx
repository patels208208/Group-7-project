import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './hydrationApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import {icon} from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/hydration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"1",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("water-drop-2");
  return data;
};

function HydrationApp() {
  return (
    <div className="hydration-app">
        <h2>Hydration</h2>
        <button onClick={handleClick} class="water-drop">
          <HabitSquare icon={icon[0]} habitName="Hydration" />
          Tap here when daily goal is complete</button>
    </div>
  )
};
export default HydrationApp;