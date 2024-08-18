import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './selfcareApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/selfcare', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"8",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("selfcare-button-2");
  return data;
};

function SelfcareApp() {
  return (
    <div className="selfcare-app">
        <h2>Self Care</h2>
        <button onClick={handleClick} className="selfcare-button">
          {icon[7]}<br></br>Self care<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default SelfcareApp;