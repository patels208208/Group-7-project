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

//app.get - to introduce user to API
app.get("/", (req, res) => {
	res.send("Habit tracker API");
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

//app.post - to store completion data for individual habits in SQL database
app.post("/hydration", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/nutrition", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/movement", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/reading", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/sleep", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/medication", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/hobbies", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/selfcare", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/pets", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/plants", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/socialising", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

app.post("/socialmedia", (req, res) => {
	const { user_id, completed } = req.body;

	const sql = "INSERT INTO goal_completion (user_id, completed) VALUES (?, ?)";
	pool.query(sql, [user_id, completed], (err, result) => {
		if (err) {
			console.error("Error entering hydration data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Hydration data saved successfully" });
	});
});

//app.get - to fetch habit tracking data from database
app.get("/completion", (req, res) => {
	const sql = "SELECT * from goal_completion";

	pool.query(sql, (err, results) => {
		if (err) {
			console.error("Error fetching data:", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(200).json(results);
	});
});

//app.post to post the habit to the database
app.post("/goal-setting", (req, res) => {
	const {
		user_id,
		habit_id,
		measurement_unit,
		measurement,
		frequency_unit,
		frequency,
	  } = req.body;

	  const values = [
		user_id,
		habit_id,
		measurement_unit,
		measurement,
		frequency_unit,
		frequency,
	  ];

	const sql = "INSERT INTO user_habit (user_id, habit_id, measurement_unit, measurement, frequency_unit, frequency) VALUES (?, ?, ?, ?, ?, ?)";
	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error("Error entering completion data", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(201).json({ message: "Completion data saved successfully" });
	});
});

//app.get - to fetch user's preset habits from database
app.get("/user-habits", (req, res) => {
	const sql = "SELECT * from user_habit";

	pool.query(sql, (err, results) => {
		if (err) {
			console.error("Error fetching data:", err.message);
			return res.status(500).json({ error: "Database error" });
		}

		res.status(200).json(results);
	});
});