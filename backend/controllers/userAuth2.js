import { config } from "dotenv";
import * as jose from "jose";
import {getItem} from "./localStorage";

// const JWT_SECRET_KEY = config.JWT_SECRET;
const JWT_SECRET_KEY = '';
const jwtSecret = new TextEncoder().encode(JWT_SECRET_KEY);

//wait function
export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getDatabaseTable = (entity) => getItem(env.DB_KEY)?.[entity];

//axios mock adapter for auth checks
export const withAuth =
(...data) => 
async (config) => {
    const token =config.headers.Authorization?.split(' ')[1];

    //verifies any available token
    const verified = token ? await verifyToken(token) : false;

    //return 403 if token is not verified
    if(env.USE_AUTH && !verified) {
       return [403, {message: 'Unauthorized'}];
    }

    //return the data 
    return typeof data[0] === 'function' ? data[0](config) : data[0];
};

//verify token
export const verifyToken = async (token, options = undefined) => {
    try {const verification = await jose.jwtVerify(token, jwtSecret);
        return options?.returnPayload ? verification.payload : true;
    } catch {
            return false;
        }
    };

    //generate token
    export const generateRefreshToken = async (data) => {
        return await new jose.SignJWT({data})
        .setProtectedHeader({alg: 'HS256'})
        .setExpirationTime('30d')
        .sign(jwtSecret);
};
