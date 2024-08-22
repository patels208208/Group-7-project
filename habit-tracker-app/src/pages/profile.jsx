import React from "react";
import Avatar from "../components/Avatar";
import GoalDisplay from "../components/GoalDisplay";
import HabitSquare from "../components/HabitSquare";
import UserDetails from "../components/UserDetails";
import ChooseAvatar from "../components/ChooseAvatar";

function Profile({ selectedHabitSquare, selectedFrequency, selectedGoal, selectedQuantity, selectedMeasurement}) {
    return(
        <div className="profile-container">
            <p className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Profile Page</p>
            <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
                <div className="w-1/8 mb-4"><Avatar /></div>
                <div className="flex flex-col w-7/8">
                <h3 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-lg">User Details:</h3>
                </div>
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