document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('productTableBody');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageInfo = document.getElementById('pageInfo');

  let products = [];
  let currentPage = 1;
  const rowsPerPage = 5;

  async function fetchProducts() {
    const res = await fetch('/products');
    products = await res.json();
    renderTable();
  }

  function renderTable() {
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = products.slice(start, end);

    if (pageItems.length === 0) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td colspan="5" style="text-align:center; color:#888;">No products found.</td>
      `;
      tableBody.appendChild(row);
    } else {
      pageItems.forEach((p) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td>${p.quantity}</td>
          <td>${p.description}</td>
          <td class="actions">
            <button class="edit" onclick="editProduct('${p.id}')">Edit</button>
            <button class="delete" onclick="deleteProduct('${p.id}')">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    pageInfo.textContent = `Page ${currentPage} of ${Math.max(1, Math.ceil(products.length / rowsPerPage))}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(products.length / rowsPerPage) || products.length === 0;
  }

  window.deleteProduct = function(id) {
    const toast = document.getElementById('confirm-toast');
    const message = document.getElementById('confirm-message');
    const yesBtn = document.getElementById('toast-yes');
    const noBtn = document.getElementById('toast-no');
    ``
    message.textContent = "Are you sure you want to delete this product?";
    toast.style.display = "block";
    toast.classList.add('show');

    yesBtn.onclick = null;
    noBtn.onclick = null;

    yesBtn.onclick = async function() {
      toast.classList.remove('show');
      setTimeout(() => toast.style.display = "none", 300);
      const res = await fetch(`/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast("Product deleted successfully!");
       fetchProducts();
      } else {
        showToast("Failed to delete product.", true);
      }
    };

    noBtn.onclick = function() {
      toast.classList.remove('show');
      setTimeout(() => toast.style.display = "none", 300);
    };
  };

  window.editProduct = function(id) {
    const toast = document.getElementById('confirm-toast');
    const message = document.getElementById('confirm-message');
    const yesBtn = document.getElementById('toast-yes');
    const noBtn = document.getElementById('toast-no');

    message.textContent = "Do you want to edit this product?";
    toast.style.display = "block";
    toast.classList.add('show');

    yesBtn.onclick = null;
    noBtn.onclick = null;

    yesBtn.onclick = function() {
      toast.classList.remove('show');
      setTimeout(() => toast.style.display = "none", 300);
      window.location.href = `/form.html?id=${id}`;
    };

    noBtn.onclick = function() {
      toast.classList.remove('show');
      setTimeout(() => toast.style.display = "none", 300);
    };
  };

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < Math.ceil(products.length / rowsPerPage)) {
      currentPage++;
      renderTable();
    }
  });

  fetchProducts();
});

function showToast(message, isError = false) {
  let toast = document.querySelector('.toast:not(#confirm-toast)');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.backgroundColor = isError ? '#e74c3c' : '#4CAF50';
  toast.classList.add('show');
  toast.style.display = "block";
  setTimeout(() => {
    toast.classList.remove('show');
    toast.style.display = "none";
  }, 2000);
}
