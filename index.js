import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/db.config.js';
import concertRouter from './routes/concert.route.js';

const app = express();

connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/concerts', concertRouter);

app.get('/', (req, res) => {
  res.send('HELLO FROM NODE API!');
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${process.env.PORT}`);
});
