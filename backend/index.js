const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());

app.listen(3001, () => {
    console.log('Listening on port 3001');
});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2088',
    database: 'habit_tracker',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}
);

app.get('/', (req, res) => {
    res.send('Habit tracker API');
});

app.post('/hydration', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO hydration (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering hydration data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Hydration data saved successfully'});
});
});

app.post('/nutrition', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO nutrition (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering nutrition data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Nutrition data saved successfully'});
});
});

app.post('/movement', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO movement (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering movement data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Movement data saved successfully'});
});
});

app.post('/reading', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO reading (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering reading data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Reading data saved successfully'});
});
});

app.post('/sleep', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO sleep (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering sleep data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Sleep data saved successfully'});
});
});

app.post('/medication', (req, res) => {
    const { habit_id, completed } = req.body;

const sql = 'INSERT INTO medication (habit_id, completed) VALUES (?, ?)';
pool.query(sql, [habit_id, completed], (err, result) => {
    if (err) {
        console.error('Error entering medication data', err.message);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Medication data saved successfully'});
});
});