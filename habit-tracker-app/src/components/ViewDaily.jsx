import React, { useState, useEffect } from 'react';
import HabitTableWeekly from "./HabitTableWeekly";
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { compareAsc, format } from 'date-fns';

function DailyView() {
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
;
  return (
    <div>
    {views.map((views) => (
    <div className='calendar' key={views.id}>
        <p>Habit ID: {views.habit_id}</p>
        <p>Date and time of completion: {format(new Date(views.created_dt), "yyyy-MM-dd kk:mm:ss")};</p></div>))}
        </div>
  );
};

export default DailyView;