import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, addMonths, subMonths, isSameMonth } from 'date-fns';

const HabitTableMonthly = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);

    const startWeek = startOfWeek(start);
    const endWeek = endOfWeek(end);

    const days = eachDayOfInterval({ start: startWeek, end: endWeek });

    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
      };

    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
      };

    return (
        <div className="flex items-center align-middle min-h-full bg-deepFriedSunRays-400 rounded shadow-lg p-4 lg:p-6">
            <div className="calendar flex flex-col p-2 w-96 bg-white rounded shadow-sm">
                <div className="header flex justify-between items-center p-2">
                    <button onClick={handlePrevMonth} id="prevBtn" className="flex justify-center items-center rounded-full bg-white w-10 h-10 shadow-lg">
                        <FontAwesomeIcon icon={faChevronLeft} className="" />
                    </button>
                    <div className="monthYear" id="monthYear">
                        <h1 className="text-briny-600 font-light">{format(currentDate, 'MMMM yyyy')}</h1>
                    </div>
                    <button onClick={handleNextMonth} id="nextBtn" className="flex justify-center items-center rounded-full bg-white w-10 h-10 shadow-lg">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    </button>
                </div>
                <div className="days grid grid-cols-7">
                    <div className="day text-center p-1 text-briny-700 font-semibold">Mon</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Tue</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Wed</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Thu</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Fri</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Sat</div>
                    <div className="day text-center p-1 text-briny-700 font-semibold">Sun</div>
                </div>
                <div className="dates grid grid-cols-7">
                    {days.map(day => (
                        <div key={day} className={`date text-center p-1 ${isSameMonth(day, currentDate) ? '' : 'text-silverMedal-600'}`}>
                            {format(day, 'd')}
                        </div>
                    ))}
                </div>
        </div>
    </div>
    );
};

export default HabitTableMonthly;