import React, { useState } from "react";
import "./login.css";
import fullLogo from '../assets/images/logos/fullLogo.png'
import yellowLogo from '../assets/images/logos/logoYellow.png'

export const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const clickSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};

	return (
		<div className="form-container">
              <img className="fullLogo"
                src={fullLogo}
                alt="Habit Tracker Logo"
              />
			<h2>Login</h2>
			<form className="loginForm" onSubmit={clickSubmit}>
				<label htmlFor="email">Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="youremail@email.com"
					id="email"
					name="email"
				/>

				<label htmlFor="password">Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="*********"
					id="password"
					name="password"
				/>

				<button type="submit">Log In</button>
			</form>
			<button
				className="switchButton"
				onClick={() => props.onFormSwitch("Register")}
			>
				{" "}
				Don't have an account? Sign Up Here!
			</button>
		</div>
	);
};
