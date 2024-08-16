import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './petsApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/pets', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"9",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("pets-button-2");
  return data;
};

function PetsApp() {
  return (
    <div className="pets-app">
        <h2>Pets</h2>
        <button onClick={handleClick} class="pets-button">
        Tap here when daily goal is complete
        </button>
    </div>
  )
};
export default PetsApp;