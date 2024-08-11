import './App.css';
import Grid from './components/Grid.jsx';
import HydrationApp from './hydration/hydrationApp';
import NutritionApp from './nutrition/nutritionApp';
import MovementApp from './movement/movementApp';

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
    </div>
    </div>
  );
};

export default App;