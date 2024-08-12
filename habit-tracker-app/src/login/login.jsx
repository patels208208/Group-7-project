import React, { useState } from 'react';
import './login.css'

export const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log (email);
    }

	return (
        <div className="form-container">
             <h2>Login</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>

			    <label for="password">Password</label>
			    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
			    <button type="submit">Log In</button>
		    </form>
            <button className="linkButton" onClick={() => props.onFormSwitch("Register")}> Don't have an account? Register Here</button>
            </div>
	);
};
