import React from "react";
import HabitTable from "./HabitTable";

function DailyView() {
  return (
    <div className="flex flex-col items-center">
      <p>Daily View</p>
      <HabitTable />
    </div>
  );
}

export default DailyView;
