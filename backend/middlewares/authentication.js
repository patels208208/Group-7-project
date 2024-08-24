import { expressjwt } from "express-jwt";

export const authenticateJWT = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
});