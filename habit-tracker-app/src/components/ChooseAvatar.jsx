import React, { useState } from 'react';
import Avatar1b from '../assets/images/avatar/Avatar1b.jpg';
import Avatar2 from '../assets/images/avatar/Avatar2.jpg';
import Avatar3 from '../assets/images/avatar/Avatar3.jpg';
import Avatar4 from '../assets/images/avatar/Avatar4.jpg';

const ChooseAvatar = ({ setSelectedAvatar, handleSaveAvatar }) => {
  const [selectedAvatarName, setSelectedAvatarName] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAvatarSelection = (avatar, avatarName) => {
    setSelectedAvatar(avatar);
    setSelectedAvatarName(avatarName);
    setSuccessMessage(`You have selected ${avatarName}`);
  };

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-4">Choose Your Avatar</h2>
      {successMessage && (
        <div className="mb-4 text-green-500">{successMessage}</div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src={Avatar1b}
          alt="Avatar 1"
          onClick={() => handleAvatarSelection(Avatar1b, 'Avatar 1')}
          className={`w-24 h-24 object-cover cursor-pointer ${selectedAvatarName === 'Avatar 1' ? 'border-4 border-green-500' : ''}`}
        />
        <img
          src={Avatar2}
          alt="Avatar 2"
          onClick={() => handleAvatarSelection(Avatar2, 'Avatar 2')}
          className={`w-24 h-24 object-cover cursor-pointer ${selectedAvatarName === 'Avatar 2' ? 'border-4 border-green-500' : ''}`}
        />
        <img
          src={Avatar3}
          alt="Avatar 3"
          onClick={() => handleAvatarSelection(Avatar3, 'Avatar 3')}
          className={`w-24 h-24 object-cover cursor-pointer ${selectedAvatarName === 'Avatar 3' ? 'border-4 border-green-500' : ''}`}
        />
        <img
          src={Avatar4}
          alt="Avatar 4"
          onClick={() => handleAvatarSelection(Avatar4, 'Avatar 4')}
          className={`w-24 h-24 object-cover cursor-pointer ${selectedAvatarName === 'Avatar 4' ? 'border-4 border-green-500' : ''}`}
        />
      </div>
    </div>
  );
};

export default ChooseAvatar;