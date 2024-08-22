import React from "react";
import Avatar from "../components/Avatar";
import WordOfTheDay from "../components/WordOfTheDay";
import Grid from "../components/Grid";
import UserDetails from "../components/UserDetails";
import { useUser } from "../components/UserContext"; // Import useUser hook


function Home() {
  const { user } = useUser(); // Get user from UserContext

  return (
    <div className="home-container">
      <p className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Home Page</p>
      <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
        <div className="w-1/8 mb-4">
          <Avatar />
        </div>
        <div className="flex flex-col w-7/8">
          <div className="mb-4">
            <p>Welcome</p>
          </div>
          <div className="mb-4">
            <p>{user ? `${user.firstName} ${user.surname}` : "Guest"}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <Grid />
        </div>
        <div className="flex flex-col w-1/8 p-10">
        <WordOfTheDay />
        </div>
      </div>
    </div>
  );
}

export default Home;
