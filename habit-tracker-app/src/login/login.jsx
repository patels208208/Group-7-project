import React, { useState } from "react";
import "./login.css";
import fullLogo from "../assets/images/logos/fullLogo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");  // State to store messages from server

  const clickSubmit = async(e) => {
    e.preventDefault();
    console.log(email);
    // Handling server response by Meg
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
          email,
          password,//add email instaeds of name if needs to check email
      });

      // Display the success message
      setMessage(response.data.message);

      // Optionally store the token
      if (response.data.token) {
          localStorage.setItem('token', response.data.token);
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
    <div className="form-container">
      <img className="fullLogo" src={fullLogo} alt="Habit Tracker Logo" />
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
      {message && <div id="success-message">{message}</div>}  {/* Display the sucess message */}
      <button
        className="switchButton"
        onClick={register}
      >
        {" "}
        Don't have an account? Sign Up Here!
      </button>
    </div>
  );
};
