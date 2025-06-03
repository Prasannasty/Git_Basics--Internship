const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'products.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;

  if (url.pathname === '/api/products') {
    if (method === 'GET') {
      // Read all products
      fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500);
          return res.end('Server error');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      });

    } else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const product = JSON.parse(body);
        fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
          let products = data ? JSON.parse(data) : [];

          if (product.id) {
            products = products.map(p => p.id === product.id ? product : p);
          } else {
           product.id = Date.now().toString();
            products.push(product);
          }

          fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), err => {
            if (err) {
              res.writeHead(500);
              return res.end('Error saving product');
            }
            res.writeHead(200);
            res.end('Saved');
          });
        });
      });

    } else if (method === 'DELETE') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        const { id } = JSON.parse(body);
        fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
          let products = JSON.parse(data || '[]');
          products = products.filter(p => p.id !== id);

          fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), err => {
            if (err) {
              res.writeHead(500);
              return res.end('Error deleting product');
            }
            res.writeHead(200);
            res.end('Deleted');
          });
        });
      });
    }

  // Static file handling
  } else {
    let filePath = path.join(PUBLIC_DIR, url.pathname === '/' ? 'form.html' : url.pathname);

    const ext = path.extname(filePath);
    const contentType = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.ico': 'image/x-icon'
    }[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        return res.end('File not found');
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
