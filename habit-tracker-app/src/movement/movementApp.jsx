import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './movementApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/movement', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"3",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("movement-button-2");
  return data;
};

function MovementApp() {
  return (
    <div className="movement-app">
        <h2>Movement</h2>
        <button onClick={handleClick} class="movement-button">
        <HabitSquare icon={icon[2]} habitName="Movement" className="movement-app"/>
        Tap here when daily goal is complete</button>
    </div>
  )
};
export default MovementApp;