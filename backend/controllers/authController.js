import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail, createNewUser } from '../models/Users.js'
import { registerValidation, validate } from '../middlewares/userValidation.js'
console.log("Inside register authController.js")
async function register(req, res) {

    //removing await from validate
    validate(req, res, async () => {
        const { first_name, surname, email_address, user_password } = req.body

        try {
            const existingUser = await findUserByEmail(email_address)
            //check if user already existed
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' })
            }
            // secret password
            const hashedPassword = await bcrypt.hash(user_password, 12)
            await createNewUser(first_name, surname, email_address, hashedPassword)

            const newlyCreatedUser = await findUserByEmail(email_address)
            console.log("Newly created user's details:", newlyCreatedUser)

            const { user_id } = newlyCreatedUser
            //Active token
            const token = jwt.sign({ email_address, user_id, first_name, surname }, process.env.JWT_SECRET, { expiresIn: '1h' })

            return res.status(201).json({ message: 'New User created', token, user: newlyCreatedUser });
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })
}

export { register }


