import React from "react";
import HabitTableWeekly from "./HabitTableWeekly";

function WeeklyView() {
    return(
        <div className="flex flex-col items-center">
            <p>Weekly View</p> {/* TODO: option to choose the date range of the week you want */}
            <HabitTableWeekly />
        </div>
    );
};

export default WeeklyView;