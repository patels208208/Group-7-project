import { expressjwt } from "express-jwt";

// Middleware to protect routes that require authentication
export const authenticateJWT = expressjwt({ // Authenticates the JWT token
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'user',
});