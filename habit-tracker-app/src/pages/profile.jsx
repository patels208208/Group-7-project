import React from "react";
import Avatar from "../components/Avatar";

function Profile() {
    return(
        <div className="profile-container">
            <p>Profile Page</p>
            <div className="flex flex-row mx-32">
                <div className="basis-1/3"><Avatar /></div>
                <div className="basis-2/3">02</div>
            </div>
        </div>
    );
};

export default Profile;