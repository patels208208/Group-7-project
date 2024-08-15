import React, { useState } from "react";
import "./login.css";
import fullLogo from '../assets/images/logos/fullLogo.png'
import yellowLogo from '../assets/images/logos/logoYellow.png'
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, confirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [surname, setSurname] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`${firstName} ${surname}`);
	};

	function login() {
		navigate("/login");
	  }
	

	return (
		<div className="form-container">
              <img className="fullLogo"
                src={fullLogo}
                alt="Habit Tracker Logo"
              />
			<h2>Register</h2>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					type="text"
					placeholder="Your First Name"
					id="firstName"
					name="firstName"
				/>

				<label htmlFor="surname">Surname</label>
				<input
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
					type="text"
					placeholder="Your Surname"
					id="surname"
					name="surname"
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
				/>
				<div className="flex-container">
				<label htmlFor="terms">I agree to the terms and conditions</label>
				<input type="checkbox" id="terms" name="terms" required />
				</div>

				<button type="submit">Sign Up</button>
			</form>
			<button
				className="switchButton"
				onClick={login}
			>
				{" "}
				Already have an account? Login Here
			</button>
		</div>
	);
};
