document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('product-form');
  const saveBtn = document.getElementById('save-btn');

  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const quantity = document.getElementById('quantity');
  const date = document.getElementById('date');

  const editingProduct = JSON.parse(localStorage.getItem('editingProduct'));
  if (editingProduct) {
    document.getElementById('product-id').value = editingProduct.id;
    name.value = editingProduct.name;
    description.value = editingProduct.description || '';
    price.value = editingProduct.price;
    quantity.value = editingProduct.quantity;
    date.value = editingProduct.date || '';
    localStorage.removeItem('editingProduct');
  }

  [name, description, price, quantity, date].forEach(input => {
    input.addEventListener('input', () => {
      const allFilled = name.value && description.value && price.value && quantity.value && date.value;
      saveBtn.disabled = !allFilled;
    });
  });

  form.addEventListener('submit', handleFormSubmit);
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

  fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(res => res.text())
    .then(() => {
      document.getElementById('product-form').reset();
      document.getElementById('save-btn').disabled = true;
      showPopup("✅ Product has been added to the cart!");
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
  }, 2500);
}
