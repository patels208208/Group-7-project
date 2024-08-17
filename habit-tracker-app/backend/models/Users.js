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


const createNewUser = async (first_name, surname, email, password) => {
    console.log("Inserting user into database");
    return new Promise((resolve, reject) => {
        conn.query(
            'INSERT INTO Users (first_name, surname, email, password) VALUES (?, ?, ?, ?)',
            [first_name, surname, email, password],
            (err, results) => {
                if (err) {
                    console.error("Error inserting user:", err.message);
                    return reject(err);  // Reject the promise with the error
                }
                console.log("User insertion successful:", results);
                resolve(results);  // Resolve the promise with the results
            }
        );
    });
};



export { findUserByEmail, createNewUser }