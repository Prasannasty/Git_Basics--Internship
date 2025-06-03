const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/products.json');

function readProducts() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveProducts(products) {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

exports.getAllProducts = (req, res) => {
  const products = readProducts();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === req.params.id);
  product ? res.json(product) : res.status(404).send('Product not found');
};

exports.createProduct = (req, res) => {
  const products = readProducts();
  const newProduct = req.body;

  newProduct.id = Date.now().toString();
  products.push(newProduct);
  saveProducts(products);

  res.status(201).send('Product created');
};

exports.updateProduct = (req, res) => {
  let products = readProducts();
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) return res.status(404).send('Product not found');

  products[index] = req.body;
  saveProducts(products);
  res.send('Product updated');
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  let products = readProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    saveProducts(products); 
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};


