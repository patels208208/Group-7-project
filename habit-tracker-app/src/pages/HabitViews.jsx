import React from "react";
import { useEffect, useState } from "react";
import DailyView from "../components/ViewDaily";
import WeeklyView from "../components/ViewWeekly";
import MonthlyView from "../components/ViewMonthly";
import YearlyView from "../components/ViewYearly";

function HabitViews() {
    const [view, setView] = useState("selectView");

    const [dailyContentVisible, setDailyContentVisible] = useState(false);
    const [weeklyContentVisible, setWeeklyContentVisible] = useState(false);
    const [monthlyContentVisible, setMonthlyContentVisible] = useState(false);
    const [yearlyContentVisible, setYearlyContentVisible] = useState(false);

    useEffect(() => {
        setDailyContentVisible(view === "daily");
        setWeeklyContentVisible(view === "weekly");
        setMonthlyContentVisible(view === "monthly");
        setYearlyContentVisible(view === "yearly");
    }, [view]);

    const handleOnChange = (e) => {
        setView(e.target.value);
      };

    return(
        <div className="flex flex-col items-center mt-3">
            <div className="mt-4">
                <select className="form-select text-l p-1 rounded-md border-none shadow-md bg-ghostWhite-300 ring-1 ring-inset ring-melon-500 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-melon-300" value={view} onChange={handleOnChange}>
                    <option value="selectView">Select your view</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <div className="mt-8">
            {dailyContentVisible && <DailyView />}
            {weeklyContentVisible && <WeeklyView />}
            {monthlyContentVisible && <MonthlyView />}
            {yearlyContentVisible && <YearlyView />}
            </div>
        </div>
    );
};

export default HabitViews;