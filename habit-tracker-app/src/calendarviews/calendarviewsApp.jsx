import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './calendarviewsApp.css';
import { format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const CalendarviewsApp = () => {
  const [views, setViews] = useState([]);
useEffect(() => {
  fetchViews();
}, []);
const fetchViews = () => {
  axios
    .get('http://localhost:3001/completion')
    .then((res) => {
      console.log(res);
      setViews(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
      <div className='calendarviews-app'>
        <h1>Calendar Views</h1>
        <div>
        {views.map((views) => (
              <div className='calendar' key={views.id}>
                <p>{views.habit_id}</p>
                <p>{format(Date(views.updated_dt), 'dd/MM/yyyy kk:mm:ss')}</p>
              </div>
            ))}
            </div>
        </div>
    )};

export default CalendarviewsApp;