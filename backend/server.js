import express, { json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import auth from './routes/auth.js'
import cors from'cors'

// Load environment variables from the .env file in the backend directory

const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world")
});
app.use('/api', auth)
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
