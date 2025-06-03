const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const dataPath = path.join(__dirname, 'data', 'products.json');

app.use(express.json());
app.use(express.static('public'));

function getProducts() {
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  } catch (err) {
    return [];
  }
}

function saveProducts(products) {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf-8');
}


app.get('/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const products = getProducts();
  const product = products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});


app.post('/products', (req, res) => {
  const products = getProducts();
  const newProduct = req.body;

  
  if (!newProduct.id) {
    newProduct.id = Date.now().toString();
  }

  products.push(newProduct);
  saveProducts(products);
  res.status(201).send('Product created');
});

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  console.log('Delete request for ID:', id); 
  const products = getProducts();
  const filteredProducts = products.filter((product) => product.id !== id);

  if (filteredProducts.length === products.length) {
    return res.status(404).send('Product not found');
  }
  saveProducts(filteredProducts);
  res.send('Product deleted');
});

app.put('/products/:id', (req, res) => {
  let products = getProducts();
  const updatedProduct = req.body;
  const id = req.params.id;
  let found = false;

  console.log('Update request for ID:', id); 

  products = products.map((product) => {
    if (product.id === id) {
      found = true;
      return updatedProduct;
    }
    return product;
  });

  if (found) {
    saveProducts(products);
    res.send('Product updated');
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
