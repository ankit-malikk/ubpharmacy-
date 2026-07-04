// Product Database (same as product.js but simplified for shop page)
// Use shared database from products-data.js
const products = PRODUCTS_DATABASE;

// Category Banners
const categoryBanners = {
  'ayurvedic': {
    title: 'Ayurvedic Products',
    subtitle: 'Natural healing from ancient wisdom',
    image: 'photo/ayurvedic.jpg',
    color: 'from-green-600 to-green-800'
  },
  'corona': {
    title: 'Fight Against Corona',
    subtitle: 'Stay safe, stay protected',
    image: 'photo/banner1.jpg',
    color: 'from-blue-600 to-blue-800'
  },
  'baby-care': {
    title: 'Mother & Baby Care',
    subtitle: 'Gentle care for your little ones',
    image: 'photo/banner2.jpg',
    color: 'from-pink-600 to-pink-800'
  },
  'personal-care': {
    title: 'Personal Care',
    subtitle: 'Look good, feel great',
    image: 'photo/banner3.jpg',
    color: 'from-purple-600 to-purple-800'
  },
  'allopathy': {
    title: 'Allopathy',
    subtitle: 'Trusted medicines for everyday health',
    image: 'photo/allopthay.jpg',
    color: 'from-teal-600 to-teal-800'
  }
};

// Category Names
const categoryNames = {
  'corona': 'Fight Against Corona',
  'baby-care': 'Mother and Baby Care',
  'personal-care': 'Personal Care',
  'ayurvedic': 'Ayurvedic',
  'allopathy': 'Allopathy'
};

// --- Wishlist helpers ---
function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function updateWishlistCount() {
  const countEl = document.getElementById('wishlist-count');
  if (!countEl) return;
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  countEl.textContent = wishlist.length;
}
function toggleWishlist(productId) {
  let wishlist = getWishlist();
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  return wishlist;
}

function attachWishlistHandlers() {
  const wishlist = getWishlist();
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = btn.dataset.id;
    const icon = btn.querySelector('.wishlist-icon');
    if (wishlist.includes(id)) {
      icon.textContent = '❤️';
    }
    btn.addEventListener('click', () => {
      const updated = toggleWishlist(id);
      icon.textContent = updated.includes(id) ? '❤️' : '♡';
      updateWishlistCount();   // 👈 refresh badge immediately
    });
  });
  updateWishlistCount();   // 👈 also run when grid re-renders
}

document.addEventListener('DOMContentLoaded', () => {

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const brandParam = urlParams.get('brand');

  let allProducts = Object.values(products);
  let filteredProducts = [...allProducts];

  // Show Category Banner
  if (categoryParam && categoryBanners[categoryParam]) {
    const banner = categoryBanners[categoryParam];
    let bannerTitle = banner.title;
    let bannerSubtitle = banner.subtitle;

    if (brandParam) {
      const brandLabel = brandParam.charAt(0).toUpperCase() + brandParam.slice(1);
      bannerTitle = brandLabel;
      bannerSubtitle = `Genuine ${brandLabel} products, trusted for generations`;
    }

    const bannerHTML = `
      <div class="relative h-64 bg-gradient-to-r ${banner.color} overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <img src="${banner.image}" alt="${bannerTitle}" class="w-full h-full object-cover">
        </div>
        <div class="relative max-w-7xl mx-auto px-5 h-full flex flex-col justify-center text-white">
          <h2 class="text-5xl font-bold mb-2">${bannerTitle}</h2>
          <p class="text-xl">${bannerSubtitle}</p>
        </div>
      </div>
    `;
    document.getElementById('categoryBanner').innerHTML = bannerHTML;
    document.getElementById('categoryBanner').classList.remove('hidden');
  }

  // Filter by category
  if (categoryParam) {
    filteredProducts = filteredProducts.filter(p => p.category === categoryParam);
  }

  // Filter by brand (from URL, e.g. ?brand=baidyanath)
  if (brandParam) {
    filteredProducts = filteredProducts.filter(p => p.brand === brandParam);
  }

  // Update page title
  const categoryTitle = document.getElementById('categoryTitle');
  const currentCategory = document.getElementById('currentCategory');
  const productCount = document.getElementById('productCount');

  if (categoryParam && categoryNames[categoryParam]) {
    let titleText = categoryNames[categoryParam];
    if (brandParam) {
      titleText = brandParam.charAt(0).toUpperCase() + brandParam.slice(1);
    }
    categoryTitle.textContent = titleText;
    currentCategory.textContent = titleText;
  }

  // Update product counts in sidebar
  const categoryCounts = {};
  allProducts.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  Object.keys(categoryCounts).forEach(cat => {
    const countElement = document.getElementById(`count-${cat}`);
    if (countElement) {
      countElement.textContent = categoryCounts[cat];
    }
  });

  document.getElementById('count-all').textContent = allProducts.length;

  // Display products
  function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');

    productCount.textContent = `Showing ${productsToShow.length} product${productsToShow.length !== 1 ? 's' : ''}`;

    if (productsToShow.length === 0) {
      productsGrid.classList.add('hidden');
      noProducts.classList.remove('hidden');
    } else {
      productsGrid.classList.remove('hidden');
      noProducts.classList.add('hidden');

      productsGrid.innerHTML = productsToShow.map(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);

        return `
          <div class="bg-white rounded-3xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div class="relative overflow-hidden">
              <img src="${product.mainImage}" alt="${product.name}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 line-clamp-2 h-14">${product.name}</h3>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-yellow-400 text-sm">${stars}</span>
              </div>
              <div class="flex gap-2">
                <a href="product.html?id=${product.id}" class="flex-1 bg-teal-600 text-white text-center py-3 rounded-lg hover:bg-teal-700 transition font-semibold">
                  Read More
                </a>
                <button class="wishlist-btn w-12 h-12 flex-shrink-0 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-red-400 transition" data-id="${product.id}">
                  <span class="wishlist-icon text-xl">♡</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      attachWishlistHandlers();
    }
  }

  // Initial display
  displayProducts(filteredProducts);

  // Apply filters (currently just re-displays; add filters back here if needed later)
  function applyFilters() {
    displayProducts(filteredProducts);
  }

  // Sort functionality
  const sortSelect = document.getElementById('sortSelect');
  sortSelect.addEventListener('change', () => {
    let sortedProducts = [...filteredProducts];

    switch (sortSelect.value) {
      case 'popularity':
        sortedProducts.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
    }

    filteredProducts = sortedProducts;
    applyFilters();
  });

  // Clear filters
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      applyFilters();
    });
  }

  // Mobile filter toggle
  const mobileFilterToggle = document.getElementById('mobileFilterToggle');
  const sidebarContent = document.getElementById('sidebarContent');

  if (mobileFilterToggle && sidebarContent) {
    mobileFilterToggle.addEventListener('click', () => {
      sidebarContent.classList.toggle('hidden');
    });
  }

});