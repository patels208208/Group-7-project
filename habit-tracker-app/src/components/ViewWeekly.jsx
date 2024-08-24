import React from "react";
import HabitTableWeekly from "./HabitTableWeekly";
import { startOfWeek, endOfWeek, format } from "date-fns";

const getCurrentWeekRange = () => {
	const now = new Date();
	const start = startOfWeek(now, { weekStartsOn: 1 });
	const end = endOfWeek(now, { weekStartsOn: 1 });
	return `${format(start, "MMM dd")} - ${format(end, "MMM dd")}`;
};

const currentWeekRange = getCurrentWeekRange();

function WeeklyView() {
	return (
		<div className="flex flex-col items-center">
			<p>Weekly View</p>
			<div>
				<div className="text-center text-lg font-bold mb-4">
					{currentWeekRange}
				</div>
			</div>
			<HabitTableWeekly />
		</div>
	);
}

export default WeeklyView;
