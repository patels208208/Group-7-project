import logo from './logo.svg';
import './App.css';
import HydrationApp from './hydration/hydrationApp';

function App() {
  return (
    <div>
    <div className="hydration-app">
      <h1>Hydration tracker</h1>
      <HydrationApp/>
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
