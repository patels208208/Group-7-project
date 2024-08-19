import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from 'axios';

dotenv.config();

const app = express();

const port = process.env.PORT || 3002;


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/wordOfTheDayAPI', async (_req, res) => {
  try {
    const response = await axios.get(`http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`);
    const result = response.data;
    res.json(result);

  } catch (error) {
    console.error('Error fetching the word of the day:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});