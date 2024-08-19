import { faStar, faSquareCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const HabitTable = () => {
    const habits = ['Hobbies', 'Hydration', 'Medication', 'Movement', 'Nutrition', 'Pets', 'Plants', 'Reading', 'Self Care', 'Sleep', 'Socialising', 'Social Media'];
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const daysOfWeekAbbr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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
        return completionStatus[habitIndex] && completionStatus[habitIndex].every(Boolean);
    };

    return (
    <div className="flex flex-col items-center bg-deepFriedSunRays-400 shadow-lg p-1 lg:p-2">
    <table className="border-collapse">
      <thead>
        <tr>
          <th>
                <div className="w-24 p-1 m-1 h-8 lg:p-2 lg:m-1 lg:mr-12 lg:h-10 lg:w-32 bg-white rounded shadow-sm">Habit</div>
            </th>
          {daysOfWeek.map((day, index) => (
            <th key={index}>
                <div className="py-1 px-0.5 mr-0.5 lg:p-2 lg:m-1 lg:w-14 bg-white rounded shadow-sm hidden sm:block">
                    {day}
                </div>
            </th>
          ))}
          {daysOfWeekAbbr.map((day, index) => (
            <th key={index}>
                <div className="py-1 m-0.5 px-0.5 w-7 h-8 lg:p-2 lg:m-1 lg:w-14 bg-white rounded shadow-sm block sm:hidden">
                    {day}
                </div>
            </th>
          ))}
          <th>
            <div className="lg:p-2 lg:m-1 lg:w-14 bg-white rounded shadow-sm">Goal</div>
            </th>
        </tr>
      </thead>
      <tbody>
        {habits.map((habit, habitIndex) => (
          <tr key={habitIndex}>
            <td>
                <div className="w-24 p-1 m-1 h-8 lg:p-2 lg:m-1 lg:mr-12 lg:h-10 lg:w-32 bg-white rounded shadow-sm font-semibold line-clamp-1">{habit}</div>
                </td>
            {daysOfWeek.map((_, dayIndex) => (
              <td key={dayIndex}
                  className="relative">
                    <div className="rounded lg:p-4 lg:m-2 lg:h-10 bg-white shadow-sm justify-center items-center hidden sm:block">
                        <FontAwesomeIcon
                            icon={completionStatus[habitIndex]?.[dayIndex] ? faSquareCheck : faSquareXmark}
                            className={`text-xl shadow-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${completionStatus[habitIndex]?.[dayIndex] ? "text-green-500" : "text-red-500"}`}
                        />
                    </div>
              </td>
            ))}
            {daysOfWeek.map((_, dayIndex) => (
              <td key={dayIndex}
                  className="relative">
                    <div className="py-1 m-0.5 px-0.5 w-7 h-8 lg:p-2 lg:m-1 lg:w-14 bg-white rounded shadow-sm block sm:hidden">
                        <FontAwesomeIcon
                            icon={completionStatus[habitIndex]?.[dayIndex] ? faSquareCheck : faSquareXmark}
                            className={`text-xl shadow-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${completionStatus[habitIndex]?.[dayIndex] ? "text-green-500" : "text-red-500"}`}
                        />
                    </div>
              </td>
            ))}
            <td className="relative">
                {isGoalAchieved(habitIndex) && (
                    <div className="py-1 m-0.5 px-0.5 w-9 h-8 lg:p-2 lg:m-1 lg:w-14 bg-white rounded shadow-sm">
                        <FontAwesomeIcon icon={faStar} className="text-amber-500 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm" />
                    </div>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    )
};

export default HabitTable;