// import express, {json } from 'express'
// import dotenv from 'dotenv'
// dotenv.config({ path: './.env' })
// import cors from 'cors'
// import fetch from 'node-fetch'
// import auth from './routes/auth.js'

// const app = express()
// const port = '3002'

// app.use(cors());


// app.get('/api/wordOfTheDay', async (req, res) => {
//   try {
//     const response = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.WORDNIK_API_KEY}`);
    
    
//     //Check if the response is JSON
//     const contentType = response.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       throw new Error('Invalid content-type. Expected application/json but received ' + contentType);
//     }
    
//     const result = await response.json();
//     res.json(result);

//   } catch (error) {
//     console.error('Error fetching the word of the day:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });