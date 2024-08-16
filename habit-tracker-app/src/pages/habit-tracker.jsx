import HydrationApp from "../hydration/hydrationApp";
import NutritionApp from "../nutrition/nutritionApp";
import MovementApp from "../movement/movementApp";
import ReadingApp from "../reading/readingApp";
import SleepApp from "../sleep/sleepApp";
import MedicationApp from "../medication/medicationApp";
import HobbiesApp from "../hobbies/hobbiesApp";
import SelfcareApp from "../selfcare/selfcareApp.jsx";
import PetsApp from "../pets/petsApp.jsx";
import PlantsApp from "../plants/plantsApp.jsx";
import SocialisingApp from "../socialising/socialisingApp.jsx";
import SocialmediaApp from "../socialmedia/socialmediaApp.jsx";

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
      <SelfcareApp />
      <PetsApp />
      <PlantsApp />
      <SocialisingApp />
      <SocialmediaApp />
    </div>
  );
}

export default HabitTracker;
