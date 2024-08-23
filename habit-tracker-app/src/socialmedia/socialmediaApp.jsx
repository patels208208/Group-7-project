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
    <div className="socialmedia-app p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Social Media</h2>
      <button 
        onClick={handleClick} 
        className="socialmedia-button bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out flex flex-col items-center"
      >
        {icon[11]}
        <span className="mt-2">Social media</span>
        <span className="text-sm mt-1">Tap here when daily goal is complete</span>
      </button>
    </div>
  )
};

export default SocialmediaApp;