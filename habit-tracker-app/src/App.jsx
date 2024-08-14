import './App.css';
import Navigation from './components/Navigation.jsx';
import Grid from './components/Grid.jsx';
import HydrationApp from './hydration/hydrationApp';
import NutritionApp from './nutrition/nutritionApp';
import MovementApp from './movement/movementApp';
import ReadingApp from './reading/readingApp';
import SleepApp from './sleep/sleepApp';
import MedicationApp from './medication/medicationApp';
import HobbiesApp from './hobbies/hobbiesApp';
import BottomNavigation from './components/BottomNavigation.jsx';
import {Login} from './login/login.jsx';
import {Register} from './login/register.jsx';
import { useState } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  const changeForm = (formName) =>
    setCurrentForm(formName);

  return (
    <div>
      <Navigation />
    <h1 className="text-3xl font-bold underline">Habit tracker</h1>
    <div className="App">
    <div>
      {
      currentForm === 'Login' ? <Login onFormSwitch={changeForm}/> : <Register onFormSwitch={changeForm} />
      }
      </div>
      <Grid /> 
    </div>
    <div className="habit-tracker">
      <HydrationApp />
      <NutritionApp />
      <MovementApp />
      <ReadingApp />
      <SleepApp />
      <MedicationApp />
      <HobbiesApp />
    </div>
    <BottomNavigation />
    </div>
    
  );
};

export default App;