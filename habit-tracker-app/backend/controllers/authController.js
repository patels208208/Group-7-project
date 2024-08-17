import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail, createNewUser } from '../models/Users.js'
import { registerValidation, validate } from '../middlewares/userValidation.js'
//test
console.log("Inside register authController.js")



async function register(req, res) {
    console.log("Received registration request:", req.body);  // Log the request data
    const { first_name, surname, email, password } = req.body;

    try {
        console.log("Checking if user exists");
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ message: 'User already exists' });
        }

        console.log("Hashing password");
        const hashedPassword = await bcrypt.hash(password, 12);

        console.log("Creating new user in database");
        const result = await createNewUser(first_name, surname, email, hashedPassword);
        console.log("Insert result:", result);  // Log the result of the insertion

        const token = jwt.sign({ id: result.user_id, email }, process.env.JWT_TOKEN_KEY, { expiresIn: '1h' })

        console.log("User successfully created");
        res.status(201).json({token, message: 'New User created' });
    } catch (error) {
        console.error("Error in register function:", error.message);
        res.status(500).json({ message: error.message });
    }
}

export { register }


