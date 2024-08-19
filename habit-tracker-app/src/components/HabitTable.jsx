import React from "react";

const HabitTable = () => {
    const habits = ['Hobbies', 'Hydration', 'Medication', 'Movement', 'Nutrition', 'Pets', 'Plants', 'Reading', 'Self Care', 'Sleep', 'Socialising', 'Social Media'];
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


    return (
    <div className="flex flex-col items-center">
    <table>
      <thead>
        <tr>
          <th>Habit</th>
          {daysOfWeek.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {habits.map((habit, index) => (
          <tr key={index}>
            <td>{habit}</td>
            {daysOfWeek.map((_, i) => (
              <td key={i}>
                <input type="checkbox" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    )
};

export default HabitTable;