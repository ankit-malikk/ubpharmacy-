// Use shared database from products-data.js
const products = PRODUCTS_DATABASE;

// Helper functions
function getProduct(productId) {
  return products[productId] || null;
}

function getRelatedProducts(productIds) {
  return productIds.map(id => products[id]).filter(p => p !== null);
}

// ===========================
// PRODUCT PAGE LOGIC
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  console.log('🔍 Product page loading...');
  console.log('📦 Products database loaded:', typeof PRODUCTS_DATABASE !== 'undefined');
  console.log('📊 Total products in database:', Object.keys(PRODUCTS_DATABASE || {}).length);

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  console.log('🆔 Product ID from URL:', productId);

  if (!productId) {
    console.error('❌ No product ID in URL');
    alert('Product not found! No product ID in URL.');
    window.location.href = 'index.html';
    return;
  }

  // Get product data
  const product = getProduct(productId);

  console.log('📦 Product found:', product ? product.name : 'NOT FOUND');

  if (!product) {
    console.error('❌ Product not found in database:', productId);
    console.log('Available product IDs:', Object.keys(PRODUCTS_DATABASE || {}));
    alert(`Product "${productId}" not found in database!`);
    window.location.href = 'index.html';
    return;
  }

  console.log('✅ Loading product:', product.name);

  // --- Populate Product Data ---
  
  try {
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
      pageTitle.textContent = `${product.name} - UB Pharmacy`;
      console.log('✅ Title updated');
    } else {
      console.warn('⚠️ Page title element not found');
    }
    
    // Breadcrumb
    const breadcrumbProduct = document.querySelector('.breadcrumb .text-gray-900');
    const breadcrumbCategory = document.querySelector('.breadcrumb a[href*="category"]');
    
    if (breadcrumbProduct) {
      breadcrumbProduct.textContent = product.name;
      console.log('✅ Breadcrumb updated');
    }
    if (breadcrumbCategory) {
      breadcrumbCategory.href = `shop.html?category=${product.categorySlug}`;
      breadcrumbCategory.textContent = product.category;
    }

    // Main Image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
      mainImage.src = product.mainImage;
      mainImage.alt = product.name;
      console.log('✅ Main image updated');
    } else {
      console.warn('⚠️ Main image element not found');
    }

    // Thumbnails
    const thumbnailsContainer = document.querySelector('.grid.grid-cols-4.gap-3');
    if (thumbnailsContainer) {
      thumbnailsContainer.innerHTML = product.thumbnails.map((imgSrc, index) => `
        <button class="thumbnail-btn border-2 ${index === 0 ? 'border-teal-600' : 'border-gray-200'} rounded-xl overflow-hidden bg-gray-50 hover:border-teal-600 transition">
          <img src="${imgSrc}" alt="Thumbnail ${index + 1}" class="w-full h-24 object-contain p-2">
        </button>
      `).join('');
      console.log('✅ Thumbnails updated');
    }

    // Product Title
  const h1 = document.getElementById('productTitle');
    if (h1) {
      h1.textContent = product.name;
      console.log('✅ H1 title updated');
    } else {
      console.warn('⚠️ H1 element not found');
    }

// --- Wishlist ---
function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function updateWishlistCount() {
  const countEl = document.getElementById('wishlist-count');
  if (!countEl) return;
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  countEl.textContent = wishlist.length;
}

function toggleWishlist(id) {
  let wishlist = getWishlist();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  return wishlist;
}

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistIcon = document.getElementById('wishlistIcon');
const wishlistLabel = document.getElementById('wishlistLabel');

if (wishlistBtn) {
  const wishlist = getWishlist();
  if (wishlist.includes(productId)) {
    wishlistIcon.textContent = '❤️';
    wishlistLabel.textContent = 'Added to Wishlist';
  }

  wishlistBtn.addEventListener('click', () => {
    const updated = toggleWishlist(productId);
    const isSaved = updated.includes(productId);
    wishlistIcon.textContent = isSaved ? '❤️' : '♡';
    wishlistLabel.textContent = isSaved ? 'Added to Wishlist' : 'Add to Wishlist';
    updateWishlistCount();   // 👈 refresh badge immediately
  });


updateWishlistCount();   // 👈 also run once on page load
}

    // Rating
    const starsElement = document.querySelector('.text-yellow-400');
    if (starsElement) {
      const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
      starsElement.textContent = stars;
      if (starsElement.nextElementSibling) {
        starsElement.nextElementSibling.textContent = `(${product.reviews} customer reviews)`;
      }
      console.log('✅ Rating updated');
    }

    // // Price
    // const priceContainer = document.querySelector('.flex.items-baseline.gap-3');
    // if (priceContainer) {
    //   priceContainer.innerHTML = `
    //     <span class="text-4xl font-bold text-teal-700">₹${product.price}</span>
    //     <span class="text-2xl text-gray-400 line-through">₹${product.originalPrice}</span>
    //     <span class="bg-red-100 text-red-600 px-3 py-1 rounded-lg font-semibold">${product.discount}% OFF</span>
    //   `;
    //   console.log('✅ Price updated');
    // }

    // Short Description
    const descElement = document.querySelector('.text-gray-700.mb-6.leading-relaxed');
    if (descElement) {
      descElement.textContent = product.shortDescription;
      console.log('✅ Description updated');
    }

    // Stock Status
    const stockElement = document.querySelector('.text-green-600.font-medium');
    if (stockElement) {
      stockElement.innerHTML = `
        <span class="w-3 h-3 bg-green-600 rounded-full"></span>
        ${product.stock}
      `;
      console.log('✅ Stock status updated');
    }

    // Product Meta
    const metaElements = document.querySelectorAll('.border-t.pt-6 .flex.gap-3');
    if (metaElements.length >= 3) {
      const skuElement = metaElements[0].querySelector('.text-gray-600');
      if (skuElement) skuElement.textContent = product.sku;

      const categoryLink = metaElements[1].querySelector('a');
      if (categoryLink) {
        categoryLink.href = `shop.html?category=${product.categorySlug}`;
        categoryLink.textContent = product.category;
      }

      const tagsElement = metaElements[2].querySelector('.text-gray-600');
      if (tagsElement) tagsElement.textContent = product.tags;
      
      console.log('✅ Meta info updated');
    }

    // Description Tab
    const descTab = document.getElementById('description');
    if (descTab) {
      descTab.innerHTML = `<div class="prose max-w-none">${product.description}</div>`;
      console.log('✅ Description tab updated');
    }

    // Additional Info Tab
    const specsTable = document.querySelector('#additional tbody');
    if (specsTable) {
      specsTable.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
        <tr>
          <td class="py-4 font-semibold text-gray-700 w-1/3">${key}</td>
          <td class="py-4 text-gray-600">${value}</td>
        </tr>
      `).join('');
      console.log('✅ Specifications updated');
    }

    // Related Products
   const relatedProductsContainer = document.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-4');
if (relatedProductsContainer) {
  const relatedProducts = getRelatedProducts(product.relatedProducts);
  relatedProductsContainer.innerHTML = relatedProducts.map(p => `
    <div class="bg-white rounded-3xl shadow hover:shadow-2xl transition overflow-hidden">
      <img src="${p.mainImage}" alt="${p.name}" class="w-full h-60 object-cover">
      <div class="p-6">
        <h3 class="font-bold text-xl mb-2">${p.name}</h3>
        <div class="flex items-center gap-1 mb-4">
          <span class="text-yellow-400">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}</span>
        </div>
        <a href="product.html?id=${p.id}" class="block w-full text-center bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition font-medium">
          Read More
        </a>
      </div>
    </div>
  `).join('');
  console.log('✅ Related products updated');
}

    console.log('🎉 Product page fully loaded!');

  } catch (error) {
    console.error('❌ Error populating product data:', error);
    alert('Error loading product details. Check console for details.');
  }

  // --- Image Gallery Thumbnails ---
  setTimeout(() => {
    const thumbnails = document.querySelectorAll('.thumbnail-btn');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const imgSrc = thumb.querySelector('img').src;
        if (mainImage) mainImage.src = imgSrc;
        
        thumbnails.forEach(t => {
          t.classList.remove('border-teal-600');
          t.classList.add('border-gray-200');
        });
        thumb.classList.remove('border-gray-200');
        thumb.classList.add('border-teal-600');
      });
    });
    console.log('✅ Thumbnail click handlers attached');
  }, 100);

  // --- Quantity Controls ---
  const quantityInput = document.getElementById('quantity');
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');

  if (decreaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', () => {
      let currentQty = parseInt(quantityInput.value);
      if (currentQty > 1) {
        quantityInput.value = currentQty - 1;
      }
    });
  }

  if (increaseBtn && quantityInput) {
    increaseBtn.addEventListener('click', () => {
      let currentQty = parseInt(quantityInput.value);
      let maxQty = parseInt(quantityInput.getAttribute('max'));
      if (currentQty < maxQty) {
        quantityInput.value = currentQty + 1;
      }
    });
  }

  if (quantityInput) {
    quantityInput.addEventListener('input', () => {
      let value = parseInt(quantityInput.value);
      let min = parseInt(quantityInput.getAttribute('min'));
      let max = parseInt(quantityInput.getAttribute('max'));
      
      if (value < min) quantityInput.value = min;
      if (value > max) quantityInput.value = max;
    });
  }

  // --- Tab Switching ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'border-teal-600', 'text-teal-600');
        btn.classList.add('border-transparent', 'text-gray-600');
      });

      tabContents.forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
      });

      button.classList.add('active', 'border-teal-600', 'text-teal-600');
      button.classList.remove('border-transparent', 'text-gray-600');
      
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('active');
      }
    });
  });

  // --- Mobile Search Toggle ---
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileSearchBar = document.getElementById('mobileSearchBar');

  if (mobileSearchBtn && mobileSearchBar) {
    mobileSearchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileSearchBar.classList.toggle('hidden');
    });
  }

});