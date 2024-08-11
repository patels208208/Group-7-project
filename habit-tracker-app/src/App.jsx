import './App.css';
import Grid from './components/Grid.jsx';
import HydrationApp from './hydration/hydrationApp';
import NutritionApp from './nutrition/nutritionApp';
import MovementApp from './movement/movementApp';
import ReadingApp from './reading/readingApp';
import SleepApp from './sleep/sleepApp';
import MedicationApp from './medication/medicationApp';

function App() {
  return (
    <div>
    <h1>Habit tracker</h1>
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
    </div>
    </div>
  );
};

export default App;