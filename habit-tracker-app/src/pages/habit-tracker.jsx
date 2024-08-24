import React from 'react';
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
import SocialMediaSharing from "../socialmediasharing/socialmediasharing.jsx";

function HabitTracker() {
    return (
    <div>
      <h1 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Habits</h1>
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
      <SocialMediaSharing />
          <div className="flex justify-center w-full mt-4">
          <a href="/goal-setting" className="mt-4 px-4 py-2 bg-melon-500 text-white rounded-lg shadow hover:bg-melon-600 transition-colors duration-200">
            Goal Setting
          </a>
        </div></div>
  );
};

export default HabitTracker;