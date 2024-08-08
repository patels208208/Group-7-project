import './App.css';
import HydrationApp from './hydration/hydrationApp';
import Grid from './components/Grid';

function App() {
  return (
    <div>
      <Grid />
    <div className="hydration-app">
      <h1>Hydration tracker</h1>
      <HydrationApp/>
    </div>
    <div className="App">
      
    </div>
    </div>
  );
}

export default App;
