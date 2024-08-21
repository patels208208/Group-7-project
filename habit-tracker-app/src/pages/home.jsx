import React from "react";
import Avatar from "../components/Avatar";
import WordOfTheDay from "../components/WordOfTheDay";
import Grid from "../components/Grid";


function Home() {
  return (
    <div className="home-container">
      <p>Home Page</p>
      <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
        <div className="w-1/8 mb-4 bg-gray-500">
          <Avatar />
        </div>
        <div className="flex flex-col w-7/8">
          <div className="mb-4 bg-gray-400">
            <p>Welcome</p>
          </div>
          <div className="mb-4 bg-gray-500">
            <p>Sally Jones</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Grid />
        </div>
        <div>
        <WordOfTheDay />
        </div>
      </div>
    </div>
  );
}

export default Home;
