import React from "react";
import HabitTableWeekly from "./HabitTableWeekly";

function WeeklyView() {
    return(
        <div className="flex flex-col items-center">
            <p>Weekly View</p>
            <HabitTableWeekly />
        </div>
    );
};

export default WeeklyView;