import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './dailycalendarviewApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const handleClick = async (event) => {
  useEffect(() => {
    fetch('http://localhost:3001/completion')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       });
 }, []);
};
 
function DailyView() {
  return (
    <div className="daily-view">
        <h2>Goal completion</h2>
        <button onClick={handleClick} class="daily-view">
        Tap here for daily calendar view
        </button>
    </div>
  )
};
export default DailyView;