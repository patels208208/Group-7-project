import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './movementApp.css';
import { format } from 'date-fns';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/movement', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"3",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
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
        <button onClick={handleClick} class="movement-button">Tap here when daily goal is complete</button>;
    </div>
  )
};
export default MovementApp;