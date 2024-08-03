import React from 'react';
import './hydrationApp.css';

const handleClick = () => {
  console.log("Functioning as expected")
}

function HydrationApp() {
  return (
    <div className="hydration-app">
        <h2>Hydration</h2>
        <button onClick={handleClick} class="water-drop">Click here when daily goal is complete</button>;
    </div>
  )
};
export default HydrationApp;