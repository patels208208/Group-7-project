import React, { useEffect, useState } from "react";
import axios from "axios";


const UserDetails = ({ userId }) => {
  const [user, setUser] = useState({ firstName: "", surname: "", email: "" });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        const userData = response.data;
        setUser({
          firstName: userData.first_name,
          surname: userData.surname,
          email: userData.email_address,
      });
      } catch (error) {
        console.error("Error fetching user details: ", error.message);
      }
    };
    fetchUserDetails();
  }, [userId]);

  return (
    <div className="flex flex-col items-center p-6 bg-silverMedal-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-briny-600 mb-4">
        {user.firstName} {user.surname}
      </h2>
      <p className="text-lg text-center text-briny-600 mb-2">{user.email}</p>
      
    </div>
  );

};

export default UserDetails;