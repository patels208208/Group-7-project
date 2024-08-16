import conn from '../config/db.js'

//Check existing user by email

const findUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                return reject(err);  
            }
            if (results.length > 0) {
                resolve(results[0]);  // Return the first user found
            } else {
                resolve(null);  // No user found
            }
        })
    })
}
//insert a new user

const createNewUser = async (first_name,surname,email,password) => {
    conn.query(' INSERT INTO Users (first_name, surname,email, password) VALUES (?,?, ?, ?) ', [first_name, surname, email, password])
}

export { findUserByEmail, createNewUser }