import dotenv from 'dotenv'
import path from 'path'
dotenv.config({debug:true, path: './.env' })
import mysql from 'mysql2'


// create a connection

const conn = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME 
  
// host: process.env.DB_HOST ||'localhost',
// user: process.env.DB_USER || 'root',
// password: process.env.DB_PASSWORD || 'Aayueva0409',
// database: process.env.DB_NAME || 'habit_tracker_app'
})
console.log(process.env.DB_HOST,process.env.DB_USER ,process.env.DB_PASSWORD)
conn.connect((err) => {
   if (err) {
      console.error("Database connection failed", err)
   }
   else {
      console.log('Connection successful.')
   }
})

export default conn