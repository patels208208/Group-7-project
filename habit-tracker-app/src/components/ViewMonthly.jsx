import React, { useState, useEffect } from "react";
import HabitTableMonthly from "./HabitTableMonthly";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { compareAsc, format, startOfWeek, endOfWeek } from "date-fns";

function MonthlyView() {
	const [views, setViews] = useState([]);
	useEffect(() => {
		fetchViews();
	}, []);
	const fetchViews = () => {
		axios
			.get("http://localhost:3001/completion") //Data pulls from habit tracker API using app.get function
			.then((res) => {
				console.log(res);
				setViews(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="flex flex-col items-center">
			<p>Monthly View</p>
			<HabitTableMonthly />
			{views.map((views) => (
				<div className="calendar" key={views.id}>
					{/* <p>Habit ID: {views.habit_id}</p> */}
				</div>
			))}
			<p>
				Date and time of completion: {format(new Date(), "yyyy-MM-dd kk:mm:ss")}{" "}
			</p>
		</div>
	);
}

export default MonthlyView;
