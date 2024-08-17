import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './medicationApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/medication', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"6",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("medication-button-2");
  return data;
};

function MedicationApp() {
  return (
    <div className="medication-app">
        <h2>Medication</h2>
        <button onClick={handleClick} className="medication-button">
          {icon[5]}<br></br>Medication<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default MedicationApp;