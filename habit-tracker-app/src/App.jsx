import "./App.css";
import "./assets/styles/custom.css";
import Navigation from "./components/Navigation.jsx";
import Grid from "./components/Grid.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import HabitTracker from "./pages/habit-tracker.jsx";
import HydrationApp from "./hydration/hydrationApp.jsx";
import { Register } from "./login/register.jsx";
import { Login } from "./login/login.jsx";
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";
import Profile from "./pages/profile.jsx";
import MainLayout from "./components/MainLayout.jsx";
import GoalSetting from "./pages/GoalSetting.jsx";
import HabitViews from "./pages/HabitViews.jsx";
import { UserProvider } from "./UserContext.jsx";
import { useUser } from "./UserContext.jsx";


import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import Settings from "./pages/Settings.jsx";


function App() {
	return (
		<div>
			<UserProvider>
				<Router>
					<div className="top-navigation">
						<Navigation />
					</div>
					<div className="App my-20">
						<Routes>
							<Route element={<MainLayout />} />
							<Route path="/" element={<Login />} />
							<Route path="/hydration" element={<HydrationApp />} />
							<Route path="/grid" element={<Grid />} />
							<Route path="/habit-tracker" element={<HabitTracker />} />
							<Route path="/login" element={<Login />} />
							<Route path="/goal-setting" element={<GoalSetting />} />
							<Route path="/register" element={<Register />} />
							<Route path="/home" element={<Home />} />
							<Route path="/about-us" element={<AboutUs />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/habit-views" element={<HabitViews />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</div>
					<div className="bg-balls fixed inset-0 min-w-full z--1"> </div>
					<div className="bottom-navigation">
						<BottomNavigation />
					</div>
				</Router>
			</UserProvider>
		</div>
	);
}

export default App;
