import React from "react";
import Avatar from "../components/Avatar";
import WordOfTheDay from "../components/WordOfTheDay";
import Grid from "../components/Grid";


function Home() {
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
            <p>Sally Jones</p>
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
