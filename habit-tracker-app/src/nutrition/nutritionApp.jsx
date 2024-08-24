import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './nutritionApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import {icon} from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  const response = await fetch('http://localhost:3001/nutrition', {
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
  event.target.classList.add("nutrition-button-2");
  return data;
};

function NutritionApp() {
  return (
    <div className="nutrition-app">
        <h2>Nutrition</h2>
        <button onClick={handleClick} className="nutrition-button">
        {icon[1]}<br></br>Nutrition<br></br>Tap here when daily goal is complete</button>
    </div>
  )
};
export default NutritionApp;