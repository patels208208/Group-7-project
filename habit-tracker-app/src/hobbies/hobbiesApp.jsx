import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './hobbiesApp.css';
import { format } from 'date-fns';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/hobbies', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"7",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("hobbies-button-2");
  return data;
};

function HobbiesApp() {
  return (
    <div className="hobbies-app">
        <h2>Hobbies</h2>
        <button onClick={handleClick} class="hobbies-button">Tap here when daily goal is complete</button>;
    </div>
  )
};
export default HobbiesApp;