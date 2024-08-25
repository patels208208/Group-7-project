// UserContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Enables us to make HTTP requests to our server

export const UserContext = createContext(); // Creates a context that can be used to share user-related data across our app

export const UserProvider = ({ children }) => {
  // A <Provider> component that can wrap our app and provide the user data to all components
  const [user, setUser] = useState(null); // Initialises the user state with null as default (before receiving the user data)
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // So that we can find the token stored in localstorage

  useEffect(() => {
    // useEffect hook immediately fetches the current user data when the component mounts
    // Check if the token exists and is not an empty string
    if (!token) {
      console.log("No token found, skipping user fetch");
      return; // Exit the useEffect if no token is available
    }

    console.log("Token:", token);
    const fetchUser = async () => {
      // Asynchronous so that we can wait for the response from the server in the background
      try {
        const response = await axios.get("/api/user/current-user", {
          headers: { Authorization: `Bearer ${token}` }, // Retrieving the token from localstorage to give me authorisation to access the user's data
        }); // Fetches the current user data from the server
        setUser(response.data); // If successful, the user state is updated with the user data
        console.log("This is user context:", user);
        console.log("User data:", response.data);
      } catch (error) {
        console.error("Error fetching current user: ", error.message); // Obviously, an error if unsuccesful
      }
    };
    fetchUser(); // Calls the fetchUser function
  }, [token]); // useEffect hook runs when the component mounts and whenever the token changes

  const updateUser = (userData) => {
    // Function to update the user data
    setUser(userData); // Updates the user state with the new user data
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
