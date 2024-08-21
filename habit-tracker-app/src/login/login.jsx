import React, { useState } from "react";
import fullLogo from "../assets/images/logos/fullLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = (props) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [hashedPassword, setPassword] = useState("");
	const [message, setMessage] = useState(""); // State to store messages from server

	const clickSubmit = async (e) => {
		e.preventDefault();
		console.log(email);
		// Handling server response by Meg
		try {
			const response = await axios.post("http://localhost:3001/api/login", {
				email_address: email,
				user_password: hashedPassword,
			});

			// Display the success message
			setMessage(response.data.message);
			navigate("/profile");

			// Optionally store the token
			if (response.data.token) {
				localStorage.setItem("token", response.data.token);
			}
		} catch (error) {
			console.error("Login error:", error);

			// if any error
			if (error.response) {
				setMessage(error.response.data.message || "Login failed");
			} else {
				setMessage("An unexpected error occurred. Please try again.");
			}
		}
		//ends here
	};

	function register() {
		navigate("/register");
	}

	return (
		<div className="flex justify-center items-center my-44">
			<div className="bg-white rounded-lg border-none w-10/12 md:w-6/12 px-6 py-4 shadow-lg">
				<img
					className="pl-4 pb-2 mx-auto w-44"
					src={fullLogo}
					alt="Habit Tracker Logo"
				/>
				<h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">
					Log in to your account
				</h2>
				<form className="flex flex-col text-left pb-1" onSubmit={clickSubmit}>
					<label htmlFor="email">Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="youremail@email.com"
						id="email"
						name="email"
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="password">Password</label>
					<input
						value={hashedPassword}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="*********"
						id="password"
						name="password"
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<button
						type="submit"
						className="bg-briny-500 hover:bg-briny-300 text-white m-2 p-2 rounded-full cursor-pointer"
					>
						Log In
					</button>
				</form>
				{message && <div id="success-message">{message}</div>}{" "}
				{/* Display the success message */}
				<div className="flex justify-center align-middle mt-4 text-base">
					<p className="mr-1 text-dynamicBlack-400">Don't have an account?</p>
					<span
						className="font-bold text-briny-500 hover:text-briny-300 cursor-pointer"
						onClick={register}
					>
						Sign up here
					</span>
				</div>
			</div>
		</div>
	);
};
