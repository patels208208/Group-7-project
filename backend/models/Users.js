import conn from '../config/db.js'

//Check existing user by email

const findUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM users WHERE email_address = ?', [email_address], (err, results) => {
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

const createNewUser = async (first_name,surname,email_address,user_password) => {
    conn.query(' INSERT INTO users (first_name, surname,email_address, user_password) VALUES (?,?, ?, ?) ', [first_name, surname, email_address, user_password])
}

export { findUserByEmail, createNewUser }