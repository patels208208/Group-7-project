import React, { useState } from 'react';
import './login.css';

export const Register = (props) => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log (firstName + " " + surname);
    }
    
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlfor="firstName">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Your First Name" id="firstName" name="firstName" />

                <label htmlfor="surname">Surname</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Your Surname" id="surname" name="surname" />
                
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>

			    <label htmlfor="password">Create Password</label>
			    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
			    <button type="submit">Sign Up</button>
		    </form>
            <button className="linkButton" onClick={() => props.onFormSwitch("Login")}> Already have an account? Login Here</button>
        </div>
	);
    
}