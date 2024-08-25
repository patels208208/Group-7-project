// import {
// 	faStar,
// 	faSquareCheck,
// 	faSquareXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { startOfWeek, endOfWeek, format } from "date-fns";
// import { currentWeekRange } from "./ViewWeekly";

// const getCurrentWeek = () => {
// 	const now = new Date();
// 	const start = startOfWeek(now, { weekStartsOn: 1 });
// 	const end = endOfWeek(now, { weekStartsOn: 1 });
// 	return `${format(start, "yyyy-MM-dd kk:mm:ss")} - ${format(
// 		end,
// 		"yyyy-MM-dd kk:mm:ss"
// 	)}`;
// };

// const currentWeekDates = getCurrentWeek();

// console.log(currentWeekDates);

// const HabitTableWeekly = () => {
// 	const habits = [
// 		"Hobbies",
// 		"Hydration",
// 		"Medication",
// 		"Movement",
// 		"Nutrition",
// 		"Pets",
// 		"Plants",
// 		"Reading",
// 		"Self Care",
// 		"Sleep",
// 		"Socialising",
// 		"Social Media",
// 	];

// 	const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// 	const daysOfWeekAbbr = ["M", "T", "W", "T", "F", "S", "S"];

// 	const [completionStatus, setCompletionStatus] = useState([]);
// 	const [completionId, setCompletionId] = useState(1);
// 	const [completed, setIsCompleted] = useState();
// 	const [completedDate, setCompletedDate] = useState();
// 	const [habitId, setHabitId] = useState();
// 	const [habitName, setHabitName] = useState();
// 	const [userId, setUserId] = useState(1);
// 	const [isValid, setIsValid] = useState(true);

// 	// Fetch data from the API
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get("http://localhost:3001/completion", {
	// 				params: {
	// 					user_id: userId,
	// 					user_habit_id: habitId,
	// 					habit_name: habitName,
	// 					completion_id: completionId,
	// 					completed: completed,
	// 					completed_dt: completedDate,
	// 				},
	// 			});
	// 			console.log(response.data);
	// 			setCompletionStatus(response.data);
	// 		} catch (error) {
	// 			console.error("Error fetching data:", error);
	// 		}
	// 	};

// 		fetchData(completionId);
// 	}, [completionId]);

// 	const isGoalAchieved = (habitIndex) => {
// 		const goalstatus = completionStatus[habitIndex]?.completion_id;
// 		return goalstatus === 1; // Change this to the user id you want to check
// 	};

// 	useEffect(() => {
// 		if (completedDate) {
// 			const formattedDate = format(
// 				new Date(completedDate),
// 				"yyyy-MM-dd kk:mm:ss"
// 			);
// 			setIsCompleted(currentWeekDates(formattedDate));
// 		}
// 	}, [completedDate]);

// 	// if (completedDate === currentWeekDates) {
// 	//   setIsValid(true);

// 	if (setIsCompleted) {
// 		return (
// 			<div className="flex items-center bg-deepFriedSunRays-400 rounded shadow-lg p-4 lg:p-6">
// 				<table className="w-full">
// 					<thead>
// 						<tr>
// 							<th className="p-2 bg-silverMedal-200 rounded-tl-lg">Habit</th>
// 							{daysOfWeek.map((index, day) => (
// 								<th
// 									key={index}
// 									className="p-2 bg-silverMedal-200 hidden sm:table-cell"
// 								>
// 									{day}
// 								</th>
// 							))}
// 							{daysOfWeekAbbr.map((day, index) => (
// 								<th
// 									key={index}
// 									className="p-2 w-[14.285714%] bg-silverMedal-200 inline-block sm:hidden"
// 								>
// 									{day}
// 								</th>
// 							))}
// 							<th className="p-2 bg-silverMedal-200 rounded-tr-lg">Goal</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{habits.map((habit, habitIndex) => (
// 							<tr key={habitIndex} className="hover:bg-silverMedal-100">
// 								<td className="p-2 bg-silverMedal-200">{habit}</td>
// 								{daysOfWeek.map((_, dayIndex) => (
// 									<td
// 										key={dayIndex}
// 										className="p-2 bg-white relative hidden sm:table-cell"
// 									>
// 										<FontAwesomeIcon
// 											icon={
// 												isGoalAchieved[habitIndex]?.[dayIndex]
// 													? faSquareCheck
// 													: faSquareXmark
// 											}
// 											className={`text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
// 												isGoalAchieved[habitIndex]?.[dayIndex]
// 													? "text-green-500"
// 													: "text-red-500"
// 											}`}
// 										/>
// 									</td>
// 								))}
// 								<td className="p-2 bg-white relative sm:hidden">
// 									<div className="grid grid-cols-7 gap-1">
// 										{daysOfWeekAbbr.map((_, dayIndex) => (
// 											<div key={dayIndex} className="p-2">
// 												<FontAwesomeIcon
// 													icon={
// 														isGoalAchieved[habitIndex]?.[dayIndex]
// 															? faSquareCheck
// 															: faSquareXmark
// 													}
// 													className={`text-xl ${
// 														setCompletionStatus[habitIndex]?.[dayIndex]
// 															.completionId
// 															? "text-green-500"
// 															: "text-red-500"
// 													}`}
// 												/>
// 											</div>
// 										))}
// 									</div>
// 								</td>
// 								<td className="p-2 bg-white relative">
// 									{isGoalAchieved(habitIndex) && (
// 										<FontAwesomeIcon
// 											icon={faStar}
// 											className="text-amber-500 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
// 										/>
// 									)}
// 								</td>
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>
// 		);
// 	}
// };
// export default HabitTableWeekly;

import {
	faStar,
	faSquareCheck,
	faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { startOfWeek, endOfWeek, format } from "date-fns";
import axios from "axios";

const getCurrentWeek = () => {
	const now = new Date();
	const start = startOfWeek(now, { weekStartsOn: 1 });
	const end = endOfWeek(now, { weekStartsOn: 1 });
	return `${format(start, "yyyy-MM-dd kk:mm:ss")} - ${format(
		end,
		"yyyy-MM-dd kk:mm:ss"
	)}`;
};

const currentWeekDates = getCurrentWeek();

console.log(currentWeekDates);

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

	
	const [completionId, setCompletionId] = useState(1);
	const [completed, setIsCompleted] = useState();
	const [completedDate, setCompletedDate] = useState();
	const [habitId, setHabitId] = useState();
	const [habitName, setHabitName] = useState();
	const [userId, setUserId] = useState(1);
	const [isValid, setIsValid] = useState(true);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/completion", {
					params: {
						user_id: userId,
						habit_id: habitId,
						habit_name: habitName,
						completion_id: completionId,
						completed: completed,
						completed_dt: completedDate,
					},
				});
				console.log(response.data);
				setCompletionStatus(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData(completionId);
	}, [completionId]);

	const mockApiResponse = [
		[true, false, true, true, true, true, false], // Hobies
		[false, false, false, false, false, false, false], // Hydration
		[true, false, true, true, true, true, true], // Medication
		[false, false, false, true, false, true, false], // Movement
		[true, true, true, true, true, true, true], // Nutrition
		[false, false, true, true, false, true, true], // Pets
		[true, false, true, true, false, true, true], // Plants
		[true, false, false, false, true, false, true], // Reading
		[true, true, true, true, true, true, true], // Self-care
		[false, true, false, false, true, false, false], // Sleep
		[true, false, true, true, false, false, true], // Socialising
		[false, true, true, false, true, false, false], // Social media
	];

	const [completionStatus, setCompletionStatus] = useState([]);

	useEffect(() => {
		setCompletionStatus(mockApiResponse);
	}, []);

	const isGoalAchieved = (habitIndex) => {
		const goalstatus = completionStatus[habitIndex]?.completion_id;
		return goalstatus === 1; // Change this to the user id you want to check
	};

	useEffect(() => {
		if (completedDate) {
			const formattedDate = format(
				new Date(completedDate),
				"yyyy-MM-dd kk:mm:ss"
			);
			setIsCompleted(currentWeekDates(formattedDate));
		}
	}, [completedDate]);

	// if (completedDate === currentWeekDates) {
	//   setIsValid(true);

	if (setIsCompleted) {
		return (
			<div className="flex items-center bg-deepFriedSunRays-400 rounded shadow-lg p-4 lg:p-6">
				<table className="w-full">
					<thead>
						<tr>
							<th className="p-2 bg-silverMedal-200 rounded-tl-lg">Habit</th>
							{daysOfWeek.map((index, day) => (
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
												isGoalAchieved[habitIndex]?.[dayIndex]
													? faSquareCheck
													: faSquareXmark
											}
											className={`text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
												isGoalAchieved[habitIndex]?.[dayIndex]
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
														isGoalAchieved[habitIndex]?.[dayIndex]
															? faSquareCheck
															: faSquareXmark
													}
													className={`text-xl ${
														setCompletionStatus[habitIndex]?.[dayIndex]
															.completionId
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
	}
};

export default HabitTableWeekly;
