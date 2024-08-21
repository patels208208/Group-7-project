import express, { json } from 'express'
import dotenv from 'dotenv'
import auth from './routes/auth.js'
import cors from'cors'
import fetch from 'node-fetch'

// Load environment variables from the .env file in the backend directory
dotenv.config({ path: './.env' })

const app = express()
const port = 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world")
});
app.use('/api', auth)

app.get('/api/wordOfTheDay', async (req, res) => {
    try {
      const response = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.WORDNIK_API_KEY}`);
      
      
      //Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content-type. Expected application/json but received ' + contentType);
      }
      
      const result = await response.json();
      res.json(result);
  
    } catch (error) {
      console.error('Error fetching the word of the day:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
