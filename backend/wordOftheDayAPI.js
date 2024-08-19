const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 3002;


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/wordOfTheDay', async (req, res) => {
  try {
    const response = await axios.get(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`);
    const result = response.data;
    res.json(result);

  } catch (error) {
    console.error('Error fetching the word of the day:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});