import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.config.js';

connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node API!');
});
