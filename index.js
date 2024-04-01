import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.config.js';
import concertRoute from './routes/concert.route.js';
const app = express();

connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/concerts', concertRoute);

app.get('/', (req, res) => {
  res.send('HELLO FROM NODE API!');
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${process.env.PORT}`);
});
