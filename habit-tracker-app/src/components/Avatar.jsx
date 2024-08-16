import React from 'react';
import AvatarImage from '../assets/images/avatar/avatar1.jpg'

const Avatar = ({ AvatarSrc = AvatarImage, alt = 'avatar', size = 'w-32 h-32', border = 'border-2 border-white' }) => {
  return (
    <div className={`relative ${size} rounded-full overflow-hidden ${border}`}>
      <img src={AvatarSrc} alt={alt} className="object-cover object-top w-full h-full" />
    </div>
  );
};

export default Avatar;
