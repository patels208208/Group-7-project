// UserContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/user/current"
				);
				setUser(response.data);
			} catch (error) {
				console.error("Error fetching current user: ", error.message);
			}
		};
		fetchUser();
	}, []);

	const updateUser = (userData) => {
		setUser(userData);
	};

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
