import React from 'react';

const SocialMediaSharing = () => {
  return (
    <div className="socialmedia-sharing p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">Share Your Progress</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 transition-colors duration-200">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSharing;