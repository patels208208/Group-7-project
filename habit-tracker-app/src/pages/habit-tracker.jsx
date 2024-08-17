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
import CalendarviewsApp from "../calendarviews/calendarviewsApp.jsx";
import SocialMediaSharing from "../socialmediasharing/socialmediasharing.jsx";
import HydrationApp2 from "../components/HydrationApp2.jsx";

function HabitTracker() {
  return (
    <div>
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
      <HydrationApp2 />
      <CalendarviewsApp />
    </div>
    <div className="socialmedia">
      <SocialMediaSharing />
    </div>
    </div>
  );
}

export default HabitTracker;