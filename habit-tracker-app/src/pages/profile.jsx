import {useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import GoalDisplay from "../components/GoalDisplay";
import HabitSquare from "../components/HabitSquare";
import UserDetails from "../components/UserDetails";
import ChooseAvatar from "../components/ChooseAvatar";
import axios from "axios";

function Profile({ selectedHabitSquare, selectedFrequency, selectedGoal, selectedQuantity, selectedMeasurement}) {
    const[userGoals, setUserGoals] = useState([]);

    useEffect(() => {
        const fetchUserGoals = async () => {
            try {
                const response = await axios.get(`/api/user/1/goals`); //Replace 1 with the acutal user id
                setUserGoals(response.data);
            } catch (error) {
                console.error("Error fetching user goals: ", error.message);
            }
            };
            fetchUserGoals();
        }, []);

    return(
        <div className="profile-container p-8 bg-silverMedal-50 mid-h-screen">
            <p className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Profile Page</p>
            <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
                <div className="w-24 h-24 mb-4 lg:mb-0"><Avatar /></div>
                <div className="flex flex-col w-full lg:w-3/4">
                <h3 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">User Details:</h3>
                <userDetails userId={1} /> {/* Replace 1 with the actual user id */}
                </div>
            </div> 
            <div className="flex flex-col lg:flex-row mx-8 lg:mx-32 mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
                <HabitSquare />
                <GoalDisplay userGoals={userGoals} />
            </div>
        </div>
    );
};

export default Profile;