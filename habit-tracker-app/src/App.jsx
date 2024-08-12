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

function App() {
  return (
    <div>
      <Navigation />
    <h1 className="text-3xl font-bold underline">Habit tracker</h1>
    <div className="App">
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
    </div>
  );
};

export default App;