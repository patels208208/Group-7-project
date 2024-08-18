//Setting up JavaScript, Express.js, MySQL and localhost connection
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());

//app.listen - to confirm that server is running on the correct port
app.listen(3001, () => {
    console.log('Listening on port 3001');
});

//Creating a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2088',
    database: 'habit_tracker',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

//Setting up Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}
);

//app.get - to introduce user to API
app.get('/', (req, res) => {
    res.send('Habit tracker API');
});

//app.post - to store completion data for individual habits in SQL database
app.post('/hydration', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering hydration data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Hydration data saved successfully'});
});
});

app.post('/nutrition', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering nutrition data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Nutrition data saved successfully'});
});
});

app.post('/movement', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering movement data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Movement data saved successfully'});
});
});

app.post('/reading', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering reading data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Reading data saved successfully'});
});
});

app.post('/sleep', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering sleep data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Sleep data saved successfully'});
});
});

app.post('/medication', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering medication data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Medication data saved successfully'});
});
});

app.post('/hobbies', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering hobbies data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Hobbies data saved successfully'});
});
});

app.post('/selfcare', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering self care data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Self-care data saved successfully'});
});
});

app.post('/pets', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering pets data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Pets data saved successfully'});
});
});

app.post('/plants', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering plants data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Plants data saved successfully'});
});
});

app.post('/socialising', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering socialising data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Socialising data saved successfully'});
});
});

app.post('/socialmedia', (req, res) => {
    const { habit_id } = req.body;

const sql = 'INSERT INTO user_habit (habit_id) VALUES (?)';
pool.query(sql, [habit_id], (err, result) => {
    if (err) {
        console.error('Error entering social media data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Social media data saved successfully'});
});
});

//app.get - to fetch habit tracking data from database
app.get('/completion', (req, res) => {
    const sql = 'SELECT * from user_habit';

    pool.query(sql, (err, results) => {
    if(err) {
        console.error('Error fetching data:', err.message);
        return res.status(500).json({ error: 'Database error' });
        }

        res.status(200).json(results);
    });
});