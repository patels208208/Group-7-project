import React from "react";
import HabitTable from "./HabitTable";

function WeeklyView() {
    return(
        <div className="flex flex-col items-center">
            <p>Weekly View</p>
            <HabitTable />
        </div>
    );
};

export default WeeklyView;