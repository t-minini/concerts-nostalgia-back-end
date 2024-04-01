import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.config.js';
import ConcertModel from './models/concert.model.js';

const app = express();
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('HELLO FROM NODE API!');
});

// ADD NEW CONCERT
app.post('/new-concert', async (req, res) => {
  try {
    const newConcert = await ConcertModel.create(req.body);
    res.status(200).json(newConcert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL CONCERTS
app.get('/concerts', async (req, res) => {
  try {
    const concerts = await ConcertModel.find({});
    res.status(200).json(concerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE CONCERT
app.get('/concerts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const concert = await ConcertModel.findById(id);
    res.status(200).json(concert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${process.env.PORT}`);
});
