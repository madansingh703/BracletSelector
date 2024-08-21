// Sample product data
const products = [
  { name: 'Beaded Bracelet', category: 'beaded', price: 1500, rating: 4.5, beads: 20, material: 'wood' },
  { name: 'Leather Bracelet', category: 'leather', price: 2000, rating: 4.7, beads: 15, material: 'metal' },
  { name: 'Macrame Bracelet', category: 'macrame', price: 2500, rating: 4.8, beads: 25, material: 'stone' },
  { name: 'Chain Bracelet', category: 'chain', price: 3000, rating: 4.6, beads: 0, material: 'metal' },
  { name: 'Charm Bracelet', category: 'charm', price: 3500, rating: 4.9, beads: 30, material: 'metal' },
];

// Initial render
renderProducts(products);

function applyFilters() {
  const category = document.getElementById('categoryFilter').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const numBeads = document.getElementById('numBeads').value;
  const material = document.getElementById('materialFilter').value;

  let filteredProducts = products;

  if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= minPrice);
  }
  if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
  }
  if (numBeads) {
      filteredProducts = filteredProducts.filter(p => p.beads == numBeads);
  }
  if (material) {
      filteredProducts = filteredProducts.filter(p => p.material === material);
  }

  renderProducts(filteredProducts);
}

function applySort() {
  const sortBy = document.getElementById('sortBy').value;
  let sortedProducts = [...products];

  if (sortBy === 'priceAsc') {
      sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'priceDesc') {
      sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
      sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(sortedProducts);
}

function renderProducts(products) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';
  products.forEach(product => {
      container.innerHTML += `
          <div class="product-item">
              <div>
                  <h4>${product.name}</h4>
                  <p>Category: ${product.category}</p>
                  <p>Price: ₹${product.price}</p>
                  <p>Beads: ${product.beads}</p>
                  <p>Material: ${product.material}</p>
                  <p>Rating: ${product.rating}★</p>
              </div>
          </div>
      `;
  });
}
// Admin Login Validation
function showAdminLogin() {
  document.getElementById('adminLogin').style.display = 'block';
}

function validateAdmin() {
  const userId = document.getElementById('adminUserId').value;
  const password = document.getElementById('adminPassword').value;

  if (userId === 'madanji' && password === 'qwaszx2944') {
      window.location.href = 'admin.html';  // Redirect to admin page
  } else {
      alert('Invalid credentials!');
  }
}

// The rest of the script remains the same...
