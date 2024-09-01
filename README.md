# Group 7 project - Habit tracker app

## How to run the habit tracker app
1. Clone this repository to your local machine.
2. Create a '.env' file in the backend folder which includes the following details:
```
DB_HOST ="localhost" //add in your own db localhost
DB_USER="root" //keep as is
DB_PASSWORD="password" //your own db password
DB_NAME="habit_tracker" //keep as is
WORDNIK_API_KEY= //NOT INCLUDED FOR SECURITY PURPOSES
JWT_SECRET= //NOT INCLUDED FOR SECURITY PURPOSES
PORT = "3001" //keep as is
```
3. Run the following commands in the terminal:
```
cd Group-7-project
npm install
npm start
```
If you experience any issues, run the frontend and backend files on two separate terminals:
```
cd Group-7-project
cd habit-tracker-app
npm install
npm start
```
AND
```
cd Group-7-project
cd backend
npm install
npm start
```
4. User can now interact with the app.
