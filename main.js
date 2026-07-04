document.addEventListener('DOMContentLoaded', () => {

  // --- Categories Panel Toggle ---
  const categoriesBtn = document.getElementById('categoriesBtn');
  const categoriesMenu = document.getElementById('categoriesMenu');
  const mobileNavBtn = document.getElementById('mobileNavBtn');
  const mobileNavMenu = document.getElementById('mobileNavMenu');

  if (categoriesBtn && categoriesMenu) {
    categoriesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      categoriesMenu.classList.toggle('hidden');
      mobileNavMenu?.classList.add('hidden');
    });
  }

  // --- Category Submenu Expand ---
  document.querySelectorAll('.category-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const submenu = toggle.parentElement.querySelector('.submenu');
      submenu.classList.toggle('hidden');
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

  // --- Mobile Nav Toggle ---
  if (mobileNavBtn && mobileNavMenu) {
    mobileNavBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileNavMenu.classList.toggle('hidden');
      categoriesMenu?.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!mobileNavMenu.contains(e.target) && !mobileNavBtn.contains(e.target)) {
        mobileNavMenu.classList.add('hidden');
      }
    });
  }

  // --- Close Menus on Outside Click ---
  document.addEventListener('click', (e) => {
    if (categoriesMenu && 
        !categoriesMenu.contains(e.target) && 
        !categoriesBtn?.contains(e.target)) {
      categoriesMenu.classList.add('hidden');
    }
  });

  // ===========================
  // WISHLIST FUNCTIONALITY
  // ===========================
  
  function updateWishlistCount() {
    const countEl = document.getElementById('wishlist-count');
    if (!countEl) return;
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    countEl.textContent = wishlist.length;
  }

  function attachWishlistHandlers() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const productCard = btn.closest('.bg-white.rounded-3xl');
        const productId = btn.getAttribute('data-product-id');
        const productName = btn.getAttribute('data-product-name');
        
        if (!productId) return;
        
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        // Check if already in wishlist
        const index = wishlist.findIndex(item => item.id === productId);
        
        if (index > -1) {
          // Remove from wishlist
          wishlist.splice(index, 1);
          btn.textContent = '♡';
          btn.classList.remove('text-red-500');
          btn.classList.add('text-gray-400');
        } else {
          // Add to wishlist
          wishlist.push({
            id: productId,
            name: productName || 'Product',
            addedAt: new Date().toISOString()
          });
          btn.textContent = '❤️';
          btn.classList.remove('text-gray-400');
          btn.classList.add('text-red-500');
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
      });
    });
    
    // Set initial heart state for wishlisted items
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const productId = btn.getAttribute('data-product-id');
      if (wishlist.some(item => item.id === productId)) {
        btn.textContent = '❤️';
        btn.classList.add('text-red-500');
      }
    });
  }

  // Initialize wishlist
  updateWishlistCount();
  attachWishlistHandlers();

  // ===========================
  // INFINITE BANNER SLIDER
  // ===========================
  
  const slidesContainer = document.getElementById('slidesContainer');
  const dotsContainer = document.getElementById('dotsContainer');
  
  if (!slidesContainer || !dotsContainer) return;

  const originalSlides = Array.from(slidesContainer.children);
  const totalOriginal = originalSlides.length;

  // Clone first and last slides for infinite effect
  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[totalOriginal - 1].cloneNode(true);
  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, originalSlides[0]);

  const allSlides = Array.from(slidesContainer.children);
  const totalSlides = allSlides.length;

  let currentIndex = 1;
  let isTransitioning = false;
  let autoSlideInterval;

  // Set initial position
  slidesContainer.style.transition = 'none';
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Create navigation dots
  for (let i = 0; i < totalOriginal; i++) {
    const dot = document.createElement('button');
    dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/50'}`;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i + 1));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    let dotIndex = currentIndex - 1;
    if (currentIndex === 0) dotIndex = totalOriginal - 1;
    if (currentIndex === totalSlides - 1) dotIndex = 0;
    
    document.querySelectorAll('#dotsContainer button').forEach((dot, i) => {
      dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        i === dotIndex ? 'bg-white scale-125' : 'bg-white/50'
      }`;
    });
  }

  function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = index;
    slidesContainer.style.transition = 'transform 0.7s ease-in-out';
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  // Handle infinite loop by jumping to real slide after transition
  slidesContainer.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    if (currentIndex === 0) {
      slidesContainer.style.transition = 'none';
      currentIndex = totalSlides - 2;
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    if (currentIndex === totalSlides - 1) {
      slidesContainer.style.transition = 'none';
      currentIndex = 1;
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  function nextSlide() { 
    goToSlide(currentIndex + 1); 
  }
  
  function prevSlide() { 
    goToSlide(currentIndex - 1); 
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  // Navigation buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => { 
      prevSlide(); 
      resetAutoSlide(); 
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => { 
      nextSlide(); 
      resetAutoSlide(); 
    });
  }

  // Pause on hover
  if (slidesContainer) {
    slidesContainer.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
    
    slidesContainer.addEventListener('mouseleave', () => {
      resetAutoSlide();
    });
  }

  // Start auto-sliding
  resetAutoSlide();

});