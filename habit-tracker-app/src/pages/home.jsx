import React from "react";
import Avatar from "../components/Avatar";


function Home() {
  return (
    <div className="home-container">
      <p>Home Page</p>
      <div className="flex flex-row w-auto ml-8 lg:ml-64 xl:ml-96 items-center">
        <div class="w-1/8 mb-4 bg-gray-500">
          <Avatar />
        </div>
        <div className="flex flex-col w-7/8">
          <div class="mb-4 bg-gray-400">
            <p>Welcome</p>
          </div>
          <div class="mb-4 bg-gray-500">
            <p>Sally Jones</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
