import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Grid from "./components/Grid.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import HabitTracker from "./pages/habit-tracker.jsx";
import HydrationApp from "./hydration/hydrationApp.jsx";
import { Register } from "./login/register.jsx";
import { Login } from "./login/login.jsx";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const changeForm = (formName) => setCurrentForm(formName);

  return (
    <Router>
      <div className="top-navigation">
        <Navigation />
      </div>
      <h1 className="text-3xl font-bold underline">Habit tracker</h1>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hydration" element={<HydrationApp />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/habit-tracker" element={<HabitTracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
      <div className="bottom-navigation">
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
