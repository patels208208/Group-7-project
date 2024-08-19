import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const HabitTable = () => {
    const habits = ['Hobbies', 'Hydration', 'Medication', 'Movement', 'Nutrition', 'Pets', 'Plants', 'Reading', 'Self Care', 'Sleep', 'Socialising', 'Social Media'];
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
    <div className="flex flex-col items-center">
    <table className="border-collapse bg-white">
      <thead>
        <tr className="p-2 border">
          <th>Habit</th>
          {daysOfWeek.map((day, index) => (
            <th key={index} className="p-2 border">{day}</th>
          ))}
          <th>Goal</th>
        </tr>
      </thead>
      <tbody>
        {habits.map((habit, habitIndex) => (
          <tr key={habitIndex}>
            <td className="p-2 border">{habit}</td>
            {daysOfWeek.map((_, dayIndex) => (
              <td key={dayIndex}
                  className="min-w-16 p-4 border relative">
                    <div className={`w-4 h-4 rounded ${completionStatus[habitIndex]?.[dayIndex]
                        ? "bg-green-500"
                        : "bg-red-500"
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm`}>
                    </div>
              </td>
            ))}
            <td className="min-w-16 p-4 border relative">
                {isGoalAchieved(habitIndex) && (
                    <FontAwesomeIcon icon={faStar} className="text-amber-400 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm" />
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