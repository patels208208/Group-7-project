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
      habit_id:"2",
      completed: format(new Date(), 'yyyy/MM/dd kk:mm:ss')
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
        <button onClick={handleClick} class="nutrition-button">
        <HabitSquare icon={icon[1]} habitName="Nutrition" />
        Tap here when daily goal is complete</button>
    </div>
  )
};
export default NutritionApp;