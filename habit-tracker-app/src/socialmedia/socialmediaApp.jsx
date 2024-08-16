import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './socialmediaApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/socialmedia', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"12",
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("socialmedia-button-2");
  return data;
};

function SocialmediaApp() {
  return (
    <div className="socialising-app">
        <h2>Social Media</h2>
        <button onClick={handleClick} class="socialmedia-button">
        Tap here when daily goal is complete
        </button>
    </div>
  )
};
export default SocialmediaApp;