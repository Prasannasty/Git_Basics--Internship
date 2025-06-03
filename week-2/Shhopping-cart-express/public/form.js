document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
    let originalProduct = null; 

  if (productId) {
    const res = await fetch(`/products/${productId}`);
    if (res.ok) {
      const product = await res.json();
      originalProduct = { ...product }; 
      document.getElementById('product-id').value = product.id;
      document.getElementById('name').value = product.name;
      document.getElementById('description').value = product.description;
      document.getElementById('price').value = product.price;
      document.getElementById('quantity').value = product.quantity;
      document.getElementById('date').value = product.date || '';
      document.getElementById('save-btn').disabled = true; 
      document.getElementById('form-title').textContent = 'Edit Product';
      document.getElementById('save-btn').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Update Product';
    }
  }

  const form = document.getElementById('product-form');
  const saveBtn = document.getElementById('save-btn');
  const clearBtn = document.getElementById('clear-btn');

  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const quantity = document.getElementById('quantity');
  const date = document.getElementById('date');

  function isFormChanged() {
    if (!originalProduct) return false;
    return (
      name.value.trim() !== (originalProduct.name || '') ||
      description.value.trim() !== (originalProduct.description || '') ||
      price.value !== String(originalProduct.price) ||
      quantity.value !== String(originalProduct.quantity) ||
      date.value !== (originalProduct.date || '')
    );
  }

  [name, description, price, quantity, date].forEach(input => {
    input.addEventListener('input', () => {
      if (productId) {
        saveBtn.disabled = !isFormChanged();
      } else {
        const allFilled = name.value && description.value && price.value && quantity.value && date.value;
        saveBtn.disabled = !allFilled;
      }
    });
  });

  form.addEventListener('submit', handleFormSubmit);
  clearBtn.addEventListener('click', clearForm);
});

function handleFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('product-id').value;
  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  const date = document.getElementById('date').value;

  const product = { id, name, description, price, quantity, date };

  const url = id ? `/products/${id}` : '/products';
  const method = id ? 'PUT' : 'POST';

  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  .then(res => res.text())
  .then(() => {
    document.getElementById('product-form').reset();
    document.getElementById('save-btn').disabled = true;
    showPopup(id ? "✅ Product has been updated!" : "✅ Product has been added to the cart!");

    setTimeout(() => {
      window.location.href = "products.html";
    }, 1400);
  })
  .catch(err => alert("Error: " + err.message));
}

function clearForm() {
  document.getElementById('product-form').reset();
  document.getElementById('save-btn').disabled = true;
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.classList.remove('hidden');
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 1500);
}
