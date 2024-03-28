const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.send('Hello from Node API with Nodemon!');
});
