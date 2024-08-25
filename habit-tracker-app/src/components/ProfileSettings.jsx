import React, { useState } from "react";
import ChooseAvatar from "./ChooseAvatar";
import Avatar from "./Avatar";

const ProfileSettings = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <div>
      <h1>Avatar Selection</h1>
      <ChooseAvatar setSelectedAvatar={setSelectedAvatar} />
      {selectedAvatar && <Avatar AvatarSrc={selectedAvatar} />}
    </div>
  );
};

export default ProfileSettings;
