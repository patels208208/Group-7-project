import { Router } from 'express'
import express from 'express'
import { registerValidation, validate,loginCheck } from '../middlewares/userValidation.js'
import { register } from '../controllers/authController.js'

const app = express();

// Apply JSON parsing middleware before defining routes
app.use(express.json());
console.log("inside auth.js")
const router = Router()
// Registration route
router.post('/register', registerValidation, validate, register)
//Login route
router.post('/login',loginCheck)

export default router
