import React from "react";
import Avatar from "../components/Avatar";
import GoalDisplay from "../components/GoalDisplay";
import HabitSquare from "../components/HabitSquare";
import UserDetails from "../components/UserDetails";

function Profile({ selectedHabitSquare, selectedFrequency, selectedGoal, selectedQuantity, selectedMeasurement}) {
    return(
        <div className="profile-container">
            <p className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Profile Page</p>
            <div className="flex flex-row mx-32">
                <div className="basis-1/3"><Avatar /></div>
                <div className="basis-2/3">User Details:</div>
            </div> 
            {/* UserDetails component to be added here. */}
            <div className="flex flex-row mx-32">
                <HabitSquare />
                <GoalDisplay selectedHabitSquare={selectedHabitSquare}
                selectedFrequency={selectedFrequency}
                selectedGoal={selectedGoal}
                selectedQuantity={selectedQuantity}
                selectedMeasurement={selectedMeasurement}/>
            </div>
        </div>
    );
};

export default Profile;