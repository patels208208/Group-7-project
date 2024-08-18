import React, { useState } from "react";
import fullLogo from "../assets/images/logos/fullLogo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Register = (props) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, confirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [surname, setSurname] = useState("");
	const [message, setMessage] = useState("");  // State to store messages from server

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(`${firstName} ${surname}`);
		//sending request to server by meg
		try {
			const response = await axios.post("http://localhost:3000/api/register", {
				first_name: firstName, // Adjust these keys as per your backend/name
				surname,
				email,
				password,
			});
			const token = response.data;
			localStorage.setItem("token", token);
			setMessage(response.data.message);
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.message || "Registration failed");
			} else {
				setMessage("An unexpected error occurred. Please try again.");
			}
		} //ends here
	};

	function login() {
		navigate("/login");
	}

	return (
		<div className="flex justify-center items-center my-24">
			<div className="bg-white rounded-lg border-none w-10/12 md:w-6/12 px-6 py-4 shadow-lg">
				<img className="mx-auto pb-2 w-44" src={fullLogo} alt="Habit Tracker Logo" />
				<h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">Register for an account</h2>
				<form className="flex flex-col text-left pb-1" onSubmit={handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						placeholder="Your First Name"
						id="firstName"
						name="firstName"
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="surname">Surname</label>
					<input
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						type="text"
						placeholder="Your Surname"
						id="surname"
						name="surname"
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="email">Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="youremail@email.com"
						id="email"
						name="email"
						required
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="password">Create Password</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="*********"
						id="password"
						name="password"
						required
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						value={cPassword}
						onChange={(e) => confirmPassword(e.target.value)}
						type="password"
						placeholder="*********"
						id="confirmPassword"
						name="confirmPassword"
						required
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<div className="flex items-center mt-4 mb-4 mx-auto">
						<input 
							type="checkbox" 
							id="terms" 
							name="terms" 
							required 
							className="mr-2"
						/>
						<label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
					</div>

					<button 
						type="submit" 
						className="bg-briny-500 hover:bg-briny-300 text-white mt-2 mx-2 p-2 rounded-full cursor-pointer"
					>
						Sign Up
					</button>
				</form>
				{message && <div id="success-message">{message}</div>} {/* Display the success message */}
				<div className="flex justify-center align-middle mt-4 text-base">
				<p className="mr-1 text-dynamicBlack-400">Already have an account?</p><span 
					className="font-bold text-briny-500 hover:text-briny-300 cursor-pointer"
					onClick={login}
				>
					Log in here
				</span>
				</div>
			</div>
		</div>
	);
};
