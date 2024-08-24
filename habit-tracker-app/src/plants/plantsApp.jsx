import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './plantsApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/plants', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      user_id:"1",
      completed:"1"
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("plants-button-2");
  return data;
};

function PlantsApp() {
  return (
    <div className="plants-app">
        <h2>Plants</h2>
        <button onClick={handleClick} className="plants-button">
          {icon[9]}<br></br>Plants<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default PlantsApp;