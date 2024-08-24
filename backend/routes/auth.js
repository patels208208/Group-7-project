import { Router } from 'express'
import express from 'express'
import { registerValidation, validate,loginCheck, userInfo } from '../middlewares/userValidation.js'
import { register } from '../controllers/authController.js'
import { expressjwt } from 'express-jwt'

const app = express();

// Apply JSON parsing middleware before defining routes
app.use(express.json());
console.log("inside auth.js")
const router = Router()
// Registration route
router.post('/register', registerValidation, validate, register)
//Login route
router.post('/login',loginCheck)

// Using the express-jwt middleware for authenticating requests
const authenticateJWT = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
});

// Router for current user details
router.get('/user', authenticateJWT, userInfo)


export default router
