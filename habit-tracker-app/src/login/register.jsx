import React, { useState, useContext } from "react";
import fullLogo from "../assets/images/logos/fullLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserContext";

export const Register = (props) => {
	const { user, updateUser } = useContext(UserContext); // Pulling in the useContext - which exposes current status of user hook, updateUser contains function that you pass data to and it updates
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [surname, setSurname] = useState("");
	const [message, setMessage] = useState("");
	const [cPasswordMessage, setCPasswordMessage] = useState("");
	const [passwordLengthMessage, setPasswordLengthMessage] = useState("");
	const [isValid, setIsValid] = useState(true);

	//Validation for confirm password

	const handleChange = (e) => {
		const newValue = e.target.value;

		setCPassword(newValue);

		if (newValue === password) {
			setIsValid(true);
			setCPasswordMessage("Passwords Match");
		} else {
			setIsValid(false);
			setCPasswordMessage("Passwords are required to match. Please try again");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(`${firstName} ${surname}`);
		//sending request to server by meg
		try {
			const response = await axios.post("http://localhost:3001/api/register", {
				first_name: firstName, // Adjust these keys as per your backend/name
				surname: surname,
				email_address: email,
				user_password: password,
			});
			const token = response.data.token;
			console.log("Register submit button:", response);
			console.log(token);
			localStorage.setItem("token", token);
			updateUser(response.data.user);
			setMessage(response.data.message);
			navigate("/home");
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
				<img
					className="mx-auto pb-2 w-44"
					src={fullLogo}
					alt="Habit Tracker Logo"
				/>
				<h2 className="text-center pb-7 mt-4 text-briny-600 font-heading font-medium text-xl">
					Register for an account
				</h2>
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
						title="Password must be at least 12 characters long"
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>

					<label htmlFor="setCPassword">Confirm Password</label>
					<input
						value={cPassword}
						onChange={handleChange}
						type="password"
						placeholder="*********"
						id="setCPassword"
						name="setCPassword"
						required
						className="my-2 p-2 text-sm rounded-md border-none shadow-sm ring-1 ring-inset ring-silverMedal-600"
					/>
					<div className="flex justify-left align-left mt-1 text-xs">
						{cPasswordMessage && (
							<div
								id="password-message"
								className={isValid ? "text-briny-500" : "text-red-600"}
							>
								{cPasswordMessage}
							</div>
						)}
					</div>

					<div className="flex items-center mt-4 mb-4 mx-auto">
						<input
							type="checkbox"
							id="terms"
							name="terms"
							required
							className="mr-2"
						/>
						<label htmlFor="terms" className="text-sm">
							I agree to the terms and conditions
						</label>
					</div>

					<button
						type="submit"
						className="bg-briny-500 hover:bg-briny-300 text-white mt-2 mx-2 p-2 rounded-full cursor-pointer"
					>
						Sign Up
					</button>
				</form>
				<div className="flex justify-center align-middle mt-4 text-sm">
					{message && <div id="success-message">{message}</div>}{" "}
				</div>
				{/* Display the success message */}
				<div className="flex justify-center align-middle mt-4 text-base">
					<p className="mr-1 text-dynamicBlack-400">Already have an account?</p>
					<span
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
