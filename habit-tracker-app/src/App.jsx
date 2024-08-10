import './App.css';
import HydrationApp from './hydration/hydrationApp';
import Grid from './components/Grid.jsx';

function App() {
  return (
    <div>
    <div className="habit-tracker">
      <h1>Habit tracker</h1>
      <HydrationApp/>
    </div>
    <div className="App">
      <Grid />
      
    </div>
    </div>
  );
}

export default App;