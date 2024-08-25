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
      user_id: "1",
			habit_id: "5",
			habit_name: "Sleep",
			completed: "1",
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
        <button onClick={handleClick} className="sleep-button">
        {icon[4]}<br></br>Sleep<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default SleepApp;