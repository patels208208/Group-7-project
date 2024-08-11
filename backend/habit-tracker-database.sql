CREATE DATABASE habit_tracker;

USE habit_tracker;

CREATE TABLE hydration (
	habit_ID INT,
    completed DATETIME
);

CREATE TABLE nutrition (
	habit_ID INT,
    completed DATETIME
);

CREATE TABLE movement (
	habit_ID INT,
    completed DATETIME
);

SELECT * FROM hydration;
SELECT * FROM nutrition;
SELECT * FROM movement;