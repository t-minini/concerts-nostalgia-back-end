import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port ${process.env.PORT}!`);
});

app.get('/', (req, res) => {
  res.send('Hello from Node API with Nodemon!');
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected do DB!');
  })
  .catch(() => {
    console.log('Connection to DB Failed!');
  });
