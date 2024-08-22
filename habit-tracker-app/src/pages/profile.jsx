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
        <div className="profile-container">
            <p className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Profile Page</p>
            <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
                <div className="w-1/8 mb-4"><Avatar /></div>
                <div className="flex flex-col w-7/8">
                <h3 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-lg">User Details:</h3>
                <userDetails userId={1} /> {/* Replace 1 with the actual user id */}
                </div>
            </div> 
            <div className="flex flex-row mx-32">
                <HabitSquare />
                <GoalDisplay userGoals={userGoals} />
            </div>
        </div>
    );
};

export default Profile;