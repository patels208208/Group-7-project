//Setting up JavaScript, Express.js, MySQL and localhost connection
import express, { json } from "express";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import cors from "cors";
import mysql from "mysql2";
dotenv.config({ path: "./.env" });
import fetch from "node-fetch";
import { authenticateJWT } from "./middlewares/authentication.js";

//const express = require('express');
//const cors = require('cors');
//const mysql = require('mysql2');
const app = express();
app.use(cors());
const port = 3001;

//app.listen - to confirm that server is running on the correct port
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

//Creating a MySQL connection pool
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

//Setting up Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	console.error("Error:", err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

// Word of the Day API
app.get('/api/wordOfTheDay', async (req, res) => {
  try {
    const response = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.WORDNIK_API_KEY}`);
    
    
    //Check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid content-type. Expected application/json but received ' + contentType);
    }
    
    const result = await response.json();
    res.json(result);

  } catch (error) {
    console.error('Error fetching the word of the day:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// use auth
app.use('/api', auth);

//app.get - to introduce user to API
app.get("/", (req, res) => {
	res.send("Habit tracker API");
});

//app.post - to store completion data for individual habits in SQL database
app.post("/hydration", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/nutrition", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering nutrition data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Nutrition data saved successfully" });
	});
});

app.post("/movement", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering movement data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Movement data saved successfully" });
	});
});

app.post("/reading", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering reading data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Reading data saved successfully" });
	});
});

app.post("/sleep", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering sleep data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Sleep data saved successfully" });
	});
});

app.post("/medication", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering medication data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Medication data saved successfully" });
	});
});

app.post("/hobbies", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering hobbies data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hobbies data saved successfully" });
	});
});

app.post("/selfcare", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering self care data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Self-care data saved successfully" });
	});
});

app.post("/pets", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering pets data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Pets data saved successfully" });
	});
});

app.post("/plants", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering plants data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Plants data saved successfully" });
	});
});

app.post("/socialising", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering socialising data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Socialising data saved successfully" });
	});
});

app.post("/socialmedia", authenticateJWT, (req, res) => {
	const { habit_id } = req.body;

	const sql = "INSERT INTO user_habit (habit_id) VALUES (?)";
	pool.query(sql, [habit_id], (err, result) => {
		if (err) {
			console.error("Error entering social media data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Social media data saved successfully" });
	});
});

//app.post - to store user's goal setting data
app.post("/frequency", authenticateJWT, (req, res) => {
	const { frequency } = req.body;

	const sql = "INSERT INTO user_habit (frequency) VALUES (?)";
	pool.query(sql, [frequency], (err, result) => {
		if (err) {
			console.error("Error entering frequency data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Frequency data saved successfully" });
	});
});

app.post("/measurement", authenticateJWT, (req, res) => {
	const { measurement } = req.body;

	const sql = "INSERT INTO user_habit (measurement) VALUES (?)";
	pool.query(sql, [measurement], (err, result) => {
		if (err) {
			console.error("Error entering measurement data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Measurement data saved successfully" });
	});
});

//app.get - to fetch habit tracking data from database
app.get("/completion", authenticateJWT, (req, res) => {
	const sql = "SELECT * from user_habit";

	pool.query(sql, (err, results) => {
		if (err) {
			console.error("Error fetching data:", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(200).json(results);
	});
});

//app.post to post the habit to the database
app.post("/goal-setting", authenticateJWT, (req, res) => {
	const {
		user_id,
		habit_id,
		measurement_unit,
		measurement,
		frequency_unit,
		frequency,
		created_dt,
		updated_dt
	  } = req.body;

	  const values = [
		user_id,
		habit_id,
		measurement_unit,
		measurement,
		frequency_unit,
		frequency,
		created_dt,
		updated_dt
	  ];

	const sql = "INSERT INTO user_habit (user_id, habit_id, measurement_unit, measurement, frequency_unit, frequency, created_dt, updated_dt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error("Error entering completion data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Completion data saved successfully" });
	});
});