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

CREATE TABLE reading (
	habit_ID INT,
    completed DATETIME
);

CREATE TABLE sleep (
	habit_ID INT,
    completed DATETIME
);

CREATE TABLE medication (
	habit_ID INT,
    completed DATETIME
);

CREATE TABLE hobbies (
	habit_ID INT,
    completed DATETIME
);

SELECT * FROM hydration;
SELECT * FROM nutrition;
SELECT * FROM movement;
SELECT * FROM reading;
SELECT * FROM sleep;
SELECT * FROM medication;
SELECT * FROM hobbies;