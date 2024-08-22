import ChooseAvatar from "../components/ChooseAvatar";
import { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSaveAvatar = async () => {
    try {
      const user_id = 1; // Replace with actual user ID
      const response = await axios.post("/update-avatar", {
        user_id,
        avatar: selectedAvatar,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating avatar", error);
    }
  };

  return (
    <div>
      <h1 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">
        Settings
      </h1>
      <ChooseAvatar setSelectedAvatar={setSelectedAvatar} handleSaveAvatar={handleSaveAvatar}/>
    </div>
  );
};

export default Settings;
