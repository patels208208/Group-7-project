import React from "react";
import { useState, useContext } from "react"; // Added to import the useContext hook
import { BrowserRouter } from "react-router-dom";
import "./movementApp.css";
import { format } from "date-fns";
import HabitSquare from "../components/HabitSquare.jsx";
import { icon } from "../components/HabitIcon.jsx";
import { UserContext } from "../components/UserContext.jsx"; // Added to import my UserContext hook

function MovementApp() {
	const { user, updateUser } = useContext(UserContext);

	const handleClick = async (event) => {
		const response = await fetch("http://localhost:3001/movement", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				user_id: user.user_id,
				habit_id: "3",
				habit_name: "Movement",
				completed: "1",
			}),
		});
		const data = await response.json();
		console.log("Functioning as expected");
		event.target.classList.add("movement-button-2");
		return data;
	};

	return (
		<div className="movement-app">
			<h2>Movement</h2>
			<button onClick={handleClick} className="movement-button">
				{icon[2]}
				<br></br>Movement<br></br>Tap here when daily goal is complete
			</button>
		</div>
	);
}
export default MovementApp;
