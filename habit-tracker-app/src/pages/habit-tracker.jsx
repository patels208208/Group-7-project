import HydrationApp from "../hydration/hydrationApp";
import NutritionApp from "../nutrition/nutritionApp";
import MovementApp from "../movement/movementApp";
import ReadingApp from "../reading/readingApp";
import SleepApp from "../sleep/sleepApp";
import MedicationApp from "../medication/medicationApp";
import HobbiesApp from "../hobbies/hobbiesApp";

function HabitTracker() {
  return (
    <div className="habit-tracker">
      <HydrationApp />
      <NutritionApp />
      <MovementApp />
      <ReadingApp />
      <SleepApp />
      <MedicationApp />
      <HobbiesApp />
    </div>
  );
}

export default HabitTracker;
