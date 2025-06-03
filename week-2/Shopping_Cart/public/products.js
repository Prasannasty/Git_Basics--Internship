document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  const popup = document.createElement('div');
  popup.id = 'confirm-popup';
  popup.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #34495e;
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 1000;
    max-width: 320px;
    text-align: center;
    display: none;
    font-weight: 600;
  `;

  popup.innerHTML = `
    <p id="confirm-message"></p>
    <div style="margin-top:15px; display:flex; justify-content:center; gap:20px;">
      <button id="confirm-yes" style="
        padding:8px 16px; border:none; border-radius:6px; cursor:pointer; font-weight:600; font-size:14px; background:#27ae60; color:white;
      ">Yes</button>
      <button id="confirm-no" style="
        padding:8px 16px; border:none; border-radius:6px; cursor:pointer; font-weight:600; font-size:14px; background:#c0392b; color:white;
      ">No</button>
    </div>
  `;

  document.body.appendChild(popup);

  const messageEl = document.getElementById('confirm-message');
  const yesBtn = document.getElementById('confirm-yes');
  const noBtn = document.getElementById('confirm-no');

  let currentAction = null;  
  let currentData = null;    

  yesBtn.addEventListener('click', () => {
    popup.style.display = 'none';

    if (currentAction === 'edit') {
      localStorage.setItem('editingProduct', JSON.stringify(currentData));
      window.location.href = 'form.html';
    } 
    else if (currentAction === 'delete') {
      fetch('/api/products', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: currentData })
      })
      .then(res => res.text())
      .then(() => loadProducts())
      .catch(err => alert("Error: " + err.message));
    }

    currentAction = null;
    currentData = null;
  });

  noBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    currentAction = null;
    currentData = null;
  });

  
  window.editProduct = function(product) {
    currentAction = 'edit';
    currentData = product;
    messageEl.textContent = `Do you want to edit "${product.name}"?`;
    popup.style.display = 'block';
  };

  window.deleteProduct = function(id) {
    currentAction = 'delete';
    currentData = id;
    messageEl.textContent = `Are you sure you want to delete this product?`;
    popup.style.display = 'block';
  };
});

function loadProducts() {
  fetch('/api/products')
    .then(res => res.json())
    .then(products => {
      const tableBody = document.querySelector('#product-table tbody');
      tableBody.innerHTML = '';

      products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${product.name}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>${product.quantity}</td>
          <td class="actions">
            <button class="edit" onclick='editProduct(${JSON.stringify(product)})'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="delete" onclick='deleteProduct("${product.id}")'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(err => console.error("Failed to load products", err));
}
