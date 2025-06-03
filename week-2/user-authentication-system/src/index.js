// src/index.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { registerUser } = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
