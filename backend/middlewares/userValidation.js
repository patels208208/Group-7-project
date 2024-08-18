import express from "express";
import { body, validationResult } from "express-validator";
import conn from "../config/db.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
//Validation process using express-validator
// Middleware to parse JSON bodies
app.use(express.json());

const registerValidation = [
	body("first_name").notEmpty().withMessage("Name is required"),
	body("surname").notEmpty().withMessage("Surname is required"),
	body("email_address")
		.isEmail()
		.withMessage("Invalid email address")
		.normalizeEmail(),
	body("user_password")
		.isLength({ min: 12 })
		.withMessage("Password must be at least 12 characters long"),
];

// Middleware to handle validation results
const validate = (req, res, next) => {
	console.log(req.body);
	console.log("Running validation middleware"); // Debug
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

const loginCheck = async (req, res, next) => {
	const { email_address, user_password } = req.body;
	const jwt_token_key = process.env.JWT_TOKEN_KEY;

	try {
		conn.query(
			"SELECT email_address, user_password FROM users WHERE email_address = ?",
			[email_address],
			async (err, result, fields) => {
				if (err) throw err;

				if (result.length === 0) {
					console.log("User does not exist");
					return res.status(404).json({ message: "User does not exist" });
				} else {
					const hashedPassword = result[0].user_password;

					if (await bcrypt.compare(user_password, hashedPassword)) {
						console.log("Login Successful");
						return res
							.status(200)
							.json({ message: "Login successful", token: jwt_token_key });
					} else {
						console.log("Password Incorrect");
						return res.status(401).json({ message: "Password incorrect" });
					}
				}
			}
		);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export { registerValidation, validate, loginCheck };
