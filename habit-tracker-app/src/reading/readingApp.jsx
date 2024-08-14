import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './readingApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import {icon} from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/reading', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"4",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
    }),
  });
  const data = await response.json();
  console.log("Functioning as expected");
  event.target.classList.add("reading-button-2");
  return data;
};

function ReadingApp() {
  return (
    <div className="reading-app">
        <h2>Reading</h2>
        <button onClick={handleClick} class="reading-button">
        <HabitSquare icon={icon[3]} habitName="Reading" />
        Tap here when daily goal is complete</button>
    </div>
  )
};
export default ReadingApp;