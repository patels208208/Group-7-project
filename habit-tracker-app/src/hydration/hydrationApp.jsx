import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './hydrationApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import {icon} from '../components/HabitIcon.jsx';

const handleClick = async (event) => { //User clicks button to mark daily habit goal as complete
  const response = await fetch('http://localhost:3001/hydration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      habit_id:"1",
    }),
  }); //API stores data in SQL database in accordance with habit ID for hydration
  const data = await response.json();
  console.log("Functioning as expected"); //Test to confirm that API has stored the data
  event.target.classList.add("water-drop-2"); //Button changes in appearance after completes goal
  return data;
};

//Function for button change
function HydrationApp() {
  return (
    <div className="hydration-app">
        <h2>Hydration</h2>
        <button onClick={handleClick} className="water-drop">
          {icon[0]}<br></br>Hydration<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default HydrationApp;