import {
	faStar,
	faSquareCheck,
	faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HabitTableWeekly = () => {
	const habits = [
		"Hobbies",
		"Hydration",
		"Medication",
		"Movement",
		"Nutrition",
		"Pets",
		"Plants",
		"Reading",
		"Self Care",
		"Sleep",
		"Socialising",
		"Social Media",
	];

	const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const daysOfWeekAbbr = ["M", "T", "W", "T", "F", "S", "S"];

	const [completionStatus, setCompletionStatus] = useState([]);
	const [completionId, setCompletionId] = useState(1);
	const [completed, setCompleted] = useState();
  const [completedDate, setCompletedDate] = useState();
  const [userId, setUserId] = useState(1);

	// Fetch data from the API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/completion", {
					params: {
						user_id: userId,
						completion_id: completionId,
						completed: completed,
						completed_dt: completedDate
					},
				});
				console.log(response.data); // Logs the fetched data to the console
				setCompletionStatus(response.data); // Set the state with the fetched data
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData(completionId);
	}, [completionId]);

	const isGoalAchieved = (habitIndex) => {
		const habitstatus = completionStatus[habitIndex]?.completion_id;
		return habitstatus === 1; // Change this to the user id you want to check
	};

	return (
		<div className="flex items-center bg-deepFriedSunRays-400 rounded shadow-lg p-4 lg:p-6">
			<table className="w-full">
				<thead>
					<tr>
						<th className="p-2 bg-silverMedal-200 rounded-tl-lg">Habit</th>
						{daysOfWeek.map((day, index) => (
							<th
								key={index}
								className="p-2 bg-silverMedal-200 hidden sm:table-cell"
							>
								{day}
							</th>
						))}
						{daysOfWeekAbbr.map((day, index) => (
							<th
								key={index}
								className="p-2 w-[14.285714%] bg-silverMedal-200 inline-block sm:hidden"
							>
								{day}
							</th>
						))}
						<th className="p-2 bg-silverMedal-200 rounded-tr-lg">Goal</th>
					</tr>
				</thead>
				<tbody>
					{habits.map((habit, habitIndex) => (
						<tr key={habitIndex} className="hover:bg-silverMedal-100">
							<td className="p-2 bg-silverMedal-200">{habit}</td>
							{daysOfWeek.map((_, dayIndex) => (
								<td
									key={dayIndex}
									className="p-2 bg-white relative hidden sm:table-cell"
								>
									<FontAwesomeIcon
										icon={
											completionStatus[habitIndex]?.[dayIndex]
												? faSquareCheck
												: faSquareXmark
										}
										className={`text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											completionStatus[habitIndex]?.[dayIndex]
												? "text-green-500"
												: "text-red-500"
										}`}
									/>
								</td>
							))}
							<td className="p-2 bg-white relative sm:hidden">
								<div className="grid grid-cols-7 gap-1">
									{daysOfWeekAbbr.map((_, dayIndex) => (
										<div key={dayIndex} className="p-2">
											<FontAwesomeIcon
												icon={
													completionStatus[habitIndex]?.[dayIndex]
														? faSquareCheck
														: faSquareXmark
												}
												className={`text-xl ${
													completionStatus[habitIndex]?.[dayIndex]
														? "text-green-500"
														: "text-red-500"
												}`}
											/>
										</div>
									))}
								</div>
							</td>
							<td className="p-2 bg-white relative">
								{isGoalAchieved(habitIndex) && (
									<FontAwesomeIcon
										icon={faStar}
										className="text-amber-500 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
									/>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HabitTableWeekly;
