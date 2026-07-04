// ===========================
// WISHLIST PAGE LOGIC
// Uses shared database from products-data.js
// ===========================

function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function removeFromWishlist(id) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(w => w !== id);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  return wishlist;
}

function updateWishlistCount() {
  const countEl = document.getElementById('wishlist-count');
  if (!countEl) return;
  countEl.textContent = getWishlist().length;
}

function renderWishlist() {
  const wishlistIds = getWishlist();
  const container = document.getElementById('wishlistItems');
  const emptyState = document.getElementById('emptyWishlist');

  const products = wishlistIds
    .map(id => PRODUCTS_DATABASE[id])
    .filter(p => p !== undefined);

  if (products.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  emptyState.classList.add('hidden');

  container.innerHTML = products.map(p => `
    <div class="flex items-center gap-5 border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
      <img src="${p.mainImage}" alt="${p.name}" class="w-24 h-24 object-contain bg-gray-50 rounded-xl flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-lg truncate">${p.name}</h3>
        <span class="inline-flex items-center gap-2 text-green-600 text-sm font-medium mt-1">
          <span class="w-2 h-2 bg-green-600 rounded-full"></span>
          ${p.stock}
        </span>
      </div>
      <div class="flex items-center gap-3 flex-shrink-0">
        <a href="product.html?id=${p.id}" class="bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition font-semibold text-sm">
          View Product
        </a>
        <button class="remove-btn w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-lg hover:border-red-400 hover:text-red-500 transition" data-id="${p.id}">
          ✕
        </button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromWishlist(btn.dataset.id);
      updateWishlistCount();
      renderWishlist();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateWishlistCount();
  renderWishlist();
});