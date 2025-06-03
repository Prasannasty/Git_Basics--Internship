const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json());



app.use(express.static('public'));

app.use('/products', productRoutes);

app.get('/form.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/form.html'));
});


app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/form.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/products.html'));
});

app.get('/products.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
