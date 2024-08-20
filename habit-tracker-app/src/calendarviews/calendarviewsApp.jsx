import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './calendarviewsApp.css';
import { compareAsc, format } from 'date-fns';
import HabitSquare from '../components/HabitSquare.jsx';
import { icon } from '../components/HabitIcon.jsx';

const CalendarviewsApp = () => {
  const [views, setViews] = useState([]);
useEffect(() => {
  fetchViews();
}, []);
const fetchViews = () => {
  axios
    .get('http://localhost:3001/completion') //Data pulls from habit tracker API using app.get function
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
        <h2>Calendar Views</h2>
        <div>
        {views.map((views) => (
              <div className='calendar' key={views.id}>
                <p>Habit ID: {views.habit_id}</p>
                <p>Date and time of completion: {format(new Date(views.created_dt), "dd-MM-yyyy kk:mm:ss")};</p> {/*Converts date into specific format using date-fns*/}
              </div>
            ))}
            </div>
        </div>
    )};

export default CalendarviewsApp;