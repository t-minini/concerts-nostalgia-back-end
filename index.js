import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.config.js';

const app = express();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('HELLO FROM NODE API!');
});
