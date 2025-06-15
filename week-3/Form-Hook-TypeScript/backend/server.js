// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'form-data.json');

// Middleware
app.use(cors());
app.use(express.json());

// POST route to receive form data
app.post('/formData', (req, res) => {
  const formData = req.body;

  // Read existing data or initialize empty array
  let data = [];
  if (fs.existsSync(DATA_FILE)) {
    const fileContent = fs.readFileSync(DATA_FILE);
    data = fileContent.length ? JSON.parse(fileContent) : [];
  }

  data.push(formData);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.status(200).json({ message: 'Data received successfully' });
});

// Optional: GET route to view stored data
app.get('/formData', (req, res) => {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend server is running on http://localhost:${PORT}`);
});
