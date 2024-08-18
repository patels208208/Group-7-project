import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: './config/dotenv.js' })
import mysql from 'mysql2'


// create a connection

const conn = mysql.createConnection({
   // host: process.env.DB_HOST,
   // user: process.env.DB_USER,
   // password: process.env.DB_PASSWORD,
   // database: process.env.DB_NAME 
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
})

conn.connect((err) => {
   if (err) {
      console.error("Database connection failed", err)
   }
   else {
      console.log('Connection successful.')
   }
})

export default conn