// Load products from JSON and render
let allProducts = [];
let currentCategory = 'all';

async function loadProducts() {
  try {
    const res = await fetch('products.json');
    allProducts = await res.json();
    renderProducts();
  } catch (err) {
    console.error('Không tải được products.json:', err);
    document.getElementById('product-grid').innerHTML =
      '<p style="grid-column:1/-1;text-align:center;color:#64748b">Lỗi tải dữ liệu sản phẩm.</p>';
  }
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const empty = document.getElementById('empty-state');

  const filtered =
    currentCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === currentCategory);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  grid.innerHTML = filtered
    .map(
      (p) => `
    <a class="product-card" href="${p.link}" target="_blank" rel="noopener noreferrer sponsored">
      <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">${p.price}</div>
        <span class="product-cta">Xem trên Shop →</span>
      </div>
    </a>
  `
    )
    .join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

// Init
loadProducts();
