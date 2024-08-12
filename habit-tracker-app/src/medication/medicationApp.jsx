import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './medicationApp.css';
import { format } from 'date-fns';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/medication', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"6",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
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
        <button onClick={handleClick} class="medication-button">Tap here when daily goal is complete</button>;
    </div>
  )
};
export default MedicationApp;