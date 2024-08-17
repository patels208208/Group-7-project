import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './socialisingApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/socialising', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"11",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("socialising-button-2");
  return data;
};

function SocialisingApp() {
  return (
    <div className="socialising-app">
        <h2>Socialising</h2>
        <button onClick={handleClick} className="socialising-button">
          {icon[10]}<br></br>Socialising<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default SocialisingApp;