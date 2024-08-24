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
      user_id:"1",
      completed:"1"
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("socialmedia-button-21");
  return data;
};

function SocialmediaApp() {
  return (
    <div className="socialmedia-app">
        <h2>Social Media</h2>
        <button onClick={handleClick} className="socialmedia-button">
          {icon[11]}<br></br>Social media<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};

export default SocialmediaApp;