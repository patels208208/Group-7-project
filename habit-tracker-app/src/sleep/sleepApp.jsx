import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './sleepApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/sleep', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"5",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("sleep-button-2");
  return data;
};

function SleepApp() {
  return (
    <div className="sleep-app">
        <h2>Sleep</h2>
        <button onClick={handleClick} class="sleep-button">
        <HabitSquare icon={icon[4]} habitName="Sleep" className="sleep-app" />
        Tap here when daily goal is complete</button>
    </div>
  )
};
export default SleepApp;