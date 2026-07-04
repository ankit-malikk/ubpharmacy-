// ===========================
// SHARED PRODUCT DATABASE
// Used by both product.js and shop.js
// ===========================

const PRODUCTS_DATABASE = {
  'mask-without-nose': {
    id: 'mask-without-nose',
    name: '3-Ply Face Mask Without Nose Ring',
    category: 'corona',
    categorySlug: 'corona',
    brand: 'generic',
    rating: 5,
    reviews: 24,
    stock: 'In Stock',
    sku: 'MASK-3PLY-001',
    tags: 'Mask, Safety, COVID-19, Protection',
    mainImage: 'photo/corona/3-Ply-Face-Mask.jpg',
    thumbnails: [
      'photo/corona/3-Ply-Face-Mask.jpg',
  
    ],
    shortDescription: 'High-quality 3-ply disposable face mask designed for everyday protection. Features soft ear loops, breathable material, and fluid-resistant outer layer. Pack of 50 pieces.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Our 3-Ply Face Mask provides superior protection with three layers of filtration. 
        The outer layer is fluid-resistant, the middle layer provides bacterial filtration, 
        and the inner layer is soft and comfortable against the skin.
      </p>
      <h4 class="text-xl font-bold mb-3 mt-6">Key Features:</h4>
      <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li>Three-layer protection for maximum safety</li>
        <li>Soft, comfortable ear loops</li>
        <li>Breathable material for all-day wear</li>
        <li>Fluid-resistant outer layer</li>
        <li>Pack of 50 disposable masks</li>
        <li>BFE ≥95% bacterial filtration efficiency</li>
      </ul>
    `,
    specifications: {
      'Weight': '0.5 kg',
      'Dimensions': '17.5 × 9.5 cm',
      'Material': 'Non-woven fabric, Melt-blown fabric',
      'Quantity': '50 pieces per pack',
      'Color': 'Blue',
      'Certification': 'CE Certified, ISO 13485'
    },
    relatedProducts: ['mask-with-nose', 'limcee-tablet', 'raho-safe-sanitizer']
  },

  'mask-with-nose': {
    id: 'mask-with-nose',
    name: '3-Ply Face Mask With Nose Ring',
    category: 'corona',
    categorySlug: 'corona',
    rating: 5,
    reviews: 18,
    stock: 'In Stock',
    sku: 'MASK-3PLY-002',
    tags: 'Mask, Safety, COVID-19, Protection, Nose Ring',
    mainImage: 'photo/corona/maskwithnoisering.jpg',
    thumbnails: [
      'photo/corona/maskwithnoisering.jpg',
      'photo/corona/maskwithnoisering.jpg',
      
    ],
    shortDescription: 'Premium 3-ply face mask with adjustable nose ring for better fit and seal. Comfortable for extended wear with enhanced protection.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Enhanced protection with built-in nose ring for custom fit. Better seal means better protection.
      </p>
    `,
    specifications: {
      'Weight': '0.6 kg',
      'Dimensions': '17.5 × 9.5 cm',
      'Material': 'Non-woven fabric, Melt-blown fabric, Metal nose ring',
      'Quantity': '50 pieces per pack',
      'Color': 'Blue',
      'Certification': 'CE Certified, ISO 13485'
    },
    relatedProducts: ['mask-without-nose', 'limcee-tablet', 'raho-safe-sanitizer']
  },

  'limcee-tablet': {
    id: 'limcee-tablet',
    name: 'Limcee Tablet',
    category: 'corona',
    categorySlug: 'corona',
    brand: 'generic',
    rating: 4,
    reviews: 42,
    stock: 'In Stock',
    sku: 'VIT-C-001',
    tags: 'Vitamin C, Immunity, Health Supplement',
    mainImage: 'photo/corona/LIMCEE-TABLET-.jpg',
    thumbnails: [
      'photo/corona/LIMCEE-TABLET-.jpg',
      'photo/corona/LIMCEE-TABLET-.jpg',
      
    ],
    shortDescription: 'Vitamin C supplement for immunity boost. Each tablet contains 500mg of pure Vitamin C.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Limcee provides 500mg of Vitamin C per tablet to boost immunity and overall health.
      </p>
    `,
    specifications: {
      'Weight': '0.05 kg',
      'Quantity': '15 tablets',
      'Dosage': '500mg per tablet',
      'Type': 'Chewable Tablet'
    },
    relatedProducts: ['mask-without-nose', 'mask-with-nose', 'raho-safe-sanitizer']
  },

  'raho-safe-sanitizer': {
    id: 'raho-safe-sanitizer',
    name: 'Raho Safe Hand Sanitizer',
    category: 'corona',
    categorySlug: 'corona',
    brand: 'generic',

    rating: 5,
    reviews: 36,
    stock: 'In Stock',
    sku: 'SAN-RS-001',
    tags: 'Sanitizer, Hand Hygiene, COVID-19, Protection',
    mainImage: 'photo/corona/Raho-Safe-gel-hand-sanitizer.jpg',
    thumbnails: [
      'photo/corona/Raho-Safe-gel-hand-sanitizer.jpg',
      'photo/corona/Raho-Safe-gel-hand-sanitizer.jpg'
    ],
    shortDescription: 'Alcohol-based hand sanitizer with 70% ethanol. Kills 99.9% of germs instantly.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Raho Safe Hand Sanitizer provides instant protection with 70% alcohol content.
      </p>
    `,
    specifications: {
      'Volume': '500ml',
      'Alcohol Content': '70% Ethanol',
      'Type': 'Gel-based',
      'Fragrance': 'Fresh'
    },
    relatedProducts: ['mask-without-nose', 'mask-with-nose', 'limcee-tablet']
  },

  'dabur-lal-tail': {
    id: 'dabur-lal-tail',
    name: 'Dabur Lal Tail',
    category: 'baby-care',
    categorySlug: 'baby-care',
    brand: 'dabur',

    rating: 5,
    reviews: 52,
    stock: 'In Stock',
    sku: 'BABY-DLT-001',
    tags: 'Baby Oil, Massage, Ayurvedic',
    mainImage: 'photo/BabyCare/Lal-Tail.jpg',
    thumbnails: [
      'photo/BabyCare/Lal-Tail.jpg',
      'photo/BabyCare/Lal-Tail.jpg',
  
    ],
    shortDescription: 'Traditional Ayurvedic baby massage oil for stronger bones and better growth.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Dabur Lal Tail is a time-tested Ayurvedic massage oil for babies.
      </p>
    `,
    specifications: {
      'Volume': '100ml',
      'Type': 'Ayurvedic Oil',
      'Ingredients': 'Natural herbs'
    },
    relatedProducts: ['johnson-baby-powder', 'johnson-baby-soap', 'pampers-small']
  },

  'johnson-baby-powder': {
    id: 'johnson-baby-powder',
    name: "Johnson's Baby Powder",
    category: 'baby-care',
    categorySlug: 'baby-care',
    brand: 'johnson',
    price: 120,
    originalPrice: 180,
    discount: 33,
    rating: 5,
    reviews: 68,
    stock: 'In Stock',
    sku: 'BABY-JBP-001',
    tags: 'Baby Powder, Skin Care, Talc',
    mainImage: 'photo/BabyCare/Johnson-Baby-Powder.jpg',
    thumbnails: [
      'photo/BabyCare/Johnson-Baby-Powder.jpg',
      'photo/BabyCare/Johnson-Baby-Powder.jpg',
      'photo/BabyCare/Johnson-Baby-Powder.jpg',
      'photo/BabyCare/Johnson-Baby-Powder.jpg'
    ],
    shortDescription: "Clinically proven mild baby powder that absorbs excess moisture keeping baby's skin soft.",
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Johnson's Baby Powder keeps baby's skin dry and fresh.
      </p>
    `,
    specifications: {
      'Weight': '200g',
      'Type': 'Talc-based Powder',
      'Fragrance': 'Classic Baby'
    },
    relatedProducts: ['dabur-lal-tail', 'johnson-baby-soap', 'pampers-small']
  },

  'johnson-baby-soap': {
    id: 'johnson-baby-soap',
    name: "Johnson's Baby Soap",
    category: 'baby-care',
    categorySlug: 'baby-care',
    brand: 'johnson',
    price: 45,
    originalPrice: 65,
    discount: 31,
    rating: 4,
    reviews: 31,
    stock: 'In Stock',
    sku: 'BABY-JBS-001',
    tags: 'Baby Soap, Gentle, Mild',
    mainImage: 'photo/BabyCare/jb-soap.jpg',
    thumbnails: [
      'photo/BabyCare/jb-soap.jpg',
    ],
    shortDescription: "Gentle soap specially designed for baby's delicate skin.",
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Mild and gentle soap for daily baby bath.
      </p>
    `,
    specifications: {
      'Weight': '75g',
      'Type': 'Mild Soap',
      'pH': 'Balanced'
    },
    relatedProducts: ['dabur-lal-tail', 'johnson-baby-powder', 'pampers-small']
  },

  'pampers-small': {
    id: 'pampers-small',
    name: 'Pampers Small 2 Pcs',
    category: 'baby-care',
    categorySlug: 'baby-care',
    brand: 'pampers',
    price: 199,
    originalPrice: 250,
    discount: 20,
    rating: 5,
    reviews: 45,
    stock: 'In Stock',
    sku: 'BABY-PAM-S2',
    tags: 'Diapers, Baby Care, Pampers',
    mainImage: 'photo/BabyCare/PAMPER-SMALL.jpg',
    thumbnails: [
      'photo/BabyCare/PAMPER-SMALL.jpg',
    ],
    shortDescription: 'Premium diapers with up to 12 hours of dryness.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Pampers diapers provide superior comfort and protection.
      </p>
    `,
    specifications: {
      'Size': 'Small (3-8 kg)',
      'Quantity': '2 pieces',
      'Features': '12-hour dryness'
    },
    relatedProducts: ['dabur-lal-tail', 'johnson-baby-powder', 'johnson-baby-soap']
  },

  'vaseline-jelly': {
    id: 'vaseline-jelly',
    name: 'Vaseline Pure Petroleum Jelly',
    category: 'personal-care',
    categorySlug: 'personal-care',
    brand: 'vaseline',
    price: 75,
    originalPrice: 110,
    discount: 32,
    rating: 5,
    reviews: 89,
    stock: 'In Stock',
    sku: 'PC-VAS-001',
    tags: 'Vaseline, Moisturizer, Skin Care',
    mainImage: 'photo/PersonalCare/Vaseline-Petro.-J.jpg',
    thumbnails: [
      'photo/PersonalCare/Vaseline-Petro.-J.jpg',
      'photo/PersonalCare/Vaseline-Petro.-J.jpg',
      'photo/PersonalCare/Vaseline-Petro.-J.jpg',
      'photo/PersonalCare/Vaseline-Petro.-J.jpg'
    ],
    shortDescription: 'Pure petroleum jelly for dry skin. Locks in moisture for soft, smooth skin.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Vaseline Pure Petroleum Jelly is perfect for dry skin, chapped lips, and minor cuts.
      </p>
    `,
    specifications: {
      'Weight': '100ml',
      'Type': 'Petroleum Jelly',
      'Use': 'Moisturizer'
    },
    relatedProducts: ['gillette-blade', 'himalaya-neem-wash', 'livon-serum']
  },

  'gillette-blade': {
    id: 'gillette-blade',
    name: 'Gillette Guard Blade 6Pc',
    category: 'personal-care',
    categorySlug: 'personal-care',
    brand: 'gillette',
    price: 55,
    originalPrice: 80,
    discount: 31,
    rating: 4,
    reviews: 34,
    stock: 'In Stock',
    sku: 'PC-GIL-001',
    tags: 'Razor, Shaving, Grooming',
    mainImage: 'photo/PersonalCare/Gillette-Gurd-Blade.jpg',
    thumbnails: [
      'photo/PersonalCare/Gillette-Gurd-Blade.jpg',
      'photo/PersonalCare/Gillette-Gurd-Blade.jpg',
      'photo/PersonalCare/Gillette-Gurd-Blade.jpg',
      'photo/PersonalCare/Gillette-Gurd-Blade.jpg'
    ],
    shortDescription: 'Precision shaving blades for smooth, comfortable shave. Pack of 6 cartridges.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Gillette Guard provides a comfortable shave with safety features.
      </p>
    `,
    specifications: {
      'Quantity': '6 cartridges',
      'Type': 'Safety Razor Blades',
      'Features': 'Single blade system'
    },
    relatedProducts: ['vaseline-jelly', 'himalaya-neem-wash', 'livon-serum']
  },

  'himalaya-neem-wash': {
    id: 'himalaya-neem-wash',
    name: 'Himalaya Neem Face Wash',
    category: 'personal-care',
    categorySlug: 'personal-care',
    brand: 'himalaya',
    price: 95,
    originalPrice: 140,
    discount: 32,
    rating: 5,
    reviews: 127,
    stock: 'In Stock',
    sku: 'PC-HIM-001',
    tags: 'Face Wash, Neem, Skin Care, Acne',
    mainImage: 'photo/PersonalCare/Himalaya-Neem-Face-.jpg',
    thumbnails: [
      'photo/PersonalCare/Himalaya-Neem-Face-.jpg',
      'photo/PersonalCare/Himalaya-Neem-Face-.jpg',
      'photo/PersonalCare/Himalaya-Neem-Face-.jpg',
      'photo/PersonalCare/Himalaya-Neem-Face-.jpg'
    ],
    shortDescription: 'Purifying neem face wash for clear, problem-free skin. Controls acne and pimples.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Himalaya Neem Face Wash cleanses and purifies skin with natural neem extracts.
      </p>
    `,
    specifications: {
      'Volume': '150ml',
      'Type': 'Face Wash',
      'Key Ingredient': 'Neem, Turmeric'
    },
    relatedProducts: ['vaseline-jelly', 'gillette-blade', 'livon-serum']
  },

  'livon-serum': {
    id: 'livon-serum',
    name: 'Livon Silky Serum',
    category: 'personal-care',
    categorySlug: 'personal-care',
    brand: 'livon',
    price: 89,
    originalPrice: 120,
    discount: 26,
    rating: 4,
    reviews: 56,
    stock: 'In Stock',
    sku: 'PC-LIV-001',
    tags: 'Hair Serum, Hair Care, Silky Hair',
    mainImage: 'photo/PersonalCare/Livon-Silky.jpg',
    thumbnails: [
      'photo/PersonalCare/Livon-Silky.jpg',
      'photo/PersonalCare/Livon-Silky.jpg',
      'photo/PersonalCare/Livon-Silky.jpg',
      'photo/PersonalCare/Livon-Silky.jpg'
    ],
    shortDescription: 'Hair serum for smooth, silky, and manageable hair. Controls frizz instantly.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Livon Silky Serum provides instant shine and smoothness to your hair.
      </p>
    `,
    specifications: {
      'Volume': '100ml',
      'Type': 'Hair Serum',
      'Benefits': 'Anti-frizz, Shine'
    },
    relatedProducts: ['vaseline-jelly', 'gillette-blade', 'himalaya-neem-wash']
  },

  'chitrakadi-bati': {
    id: 'chitrakadi-bati',
    name: 'Baidyanath Chitrakadi Bati Tablets',
    category: 'ayurvedic',
    categorySlug: 'ayurvedic',
    brand: 'baidyanath',
    price: 110,
    originalPrice: 150,
    discount: 27,
    rating: 4,
    reviews: 28,
    stock: 'In Stock',
    sku: 'AYU-BAI-001',
    tags: 'Ayurveda, Digestion, Tablets',
    mainImage: 'photo/ayurvedic/Baidyanath-Chitrakadi-Bati-T.jpg',
    thumbnails: [
      'photo/ayurvedic/Baidyanath-Chitrakadi-Bati-T.jpg',
      'photo/ayurvedic/Baidyanath-Chitrakadi-Bati-T.jpg',
      'photo/ayurvedic/Baidyanath-Chitrakadi-Bati-T.jpg',
      'photo/ayurvedic/Baidyanath-Chitrakadi-Bati-T.jpg'
    ],
    shortDescription: 'Ayurvedic tablets for digestive health. Relieves indigestion and improves appetite.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Baidyanath Chitrakadi Bati is a classical Ayurvedic formulation for digestive issues.
      </p>
    `,
    specifications: {
      'Quantity': '40 tablets',
      'Type': 'Ayurvedic Medicine',
      'Benefits': 'Digestion, Appetite'
    },
    relatedProducts: ['pudin-hara', 'koflet-lozenges', 'neem-kanti-soap']
  },

  'pudin-hara': {
    id: 'pudin-hara',
    name: 'Dabur Pudin Hara ACTIVE 10ml',
    category: 'ayurvedic',
    categorySlug: 'ayurvedic',
    brand: 'dabur',
    price: 35,
    originalPrice: 50,
    discount: 30,
    rating: 5,
    reviews: 94,
    stock: 'In Stock',
    sku: 'AYU-DAB-001',
    tags: 'Ayurveda, Digestion, Stomach Relief',
    mainImage: 'photo/ayurvedic/Dabur-Pudin-Hara-Active-.jpg',
    thumbnails: [
      'photo/ayurvedic/Dabur-Pudin-Hara-Active-.jpg',
      'photo/ayurvedic/Dabur-Pudin-Hara-Active-.jpg',
      'photo/ayurvedic/Dabur-Pudin-Hara-Active-.jpg',
      'photo/ayurvedic/Dabur-Pudin-Hara-Active-.jpg'
    ],
    shortDescription: 'Fast relief from stomach problems. Relieves gas, acidity, and indigestion instantly.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Dabur Pudin Hara provides quick relief from digestive discomfort with natural pudina.
      </p>
    `,
    specifications: {
      'Volume': '10ml',
      'Type': 'Liquid',
      'Key Ingredient': 'Mint (Pudina)'
    },
    relatedProducts: ['chitrakadi-bati', 'koflet-lozenges', 'neem-kanti-soap']
  },

  'koflet-lozenges': {
    id: 'koflet-lozenges',
    name: 'Himalaya Koflet Lozenges',
    category: 'ayurvedic',
    categorySlug: 'ayurvedic',
    brand: 'himalaya',
    price: 45,
    originalPrice: 65,
    discount: 31,
    rating: 4,
    reviews: 41,
    stock: 'In Stock',
    sku: 'AYU-HIM-001',
    tags: 'Ayurveda, Cough, Throat, Lozenges',
    mainImage: 'photo/ayurvedic/Himalaya-Koflet-Lazenges.jpg',
    thumbnails: [
      'photo/ayurvedic/Himalaya-Koflet-Lazenges.jpg',
      'photo/ayurvedic/Himalaya-Koflet-Lazenges.jpg',
      'photo/ayurvedic/Himalaya-Koflet-Lazenges.jpg',
      'photo/ayurvedic/Himalaya-Koflet-Lazenges.jpg'
    ],
    shortDescription: 'Herbal lozenges for cough and sore throat relief. Natural ingredients, no side effects.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Himalaya Koflet Lozenges provide soothing relief for cough and throat irritation.
      </p>
    `,
    specifications: {
      'Quantity': '6 lozenges',
      'Type': 'Herbal Lozenges',
      'Benefits': 'Cough relief, Throat soothing'
    },
    relatedProducts: ['chitrakadi-bati', 'pudin-hara', 'neem-kanti-soap']
  },

  'neem-kanti-soap': {
    id: 'neem-kanti-soap',
    name: 'Patanjali Neem Kanti Soap 75g',
    category: 'ayurvedic',
    categorySlug: 'ayurvedic',
    brand: 'patanjali',
    price: 25,
    originalPrice: 35,
    discount: 29,
    rating: 5,
    reviews: 73,
    stock: 'In Stock',
    sku: 'AYU-PAT-001',
    tags: 'Ayurveda, Soap, Neem, Skin Care',
    mainImage: 'photo/ayurvedic/Patanjali-Neem-Kanti-Body-Cleanser-Soap-75g-.jpg',
    thumbnails: [
      'photo/ayurvedic/Patanjali-Neem-Kanti-Body-Cleanser-Soap-75g-.jpg',
      'photo/ayurvedic/Patanjali-Neem-Kanti-Body-Cleanser-Soap-75g-.jpg',
      'photo/ayurvedic/Patanjali-Neem-Kanti-Body-Cleanser-Soap-75g-.jpg',
      'photo/ayurvedic/Patanjali-Neem-Kanti-Body-Cleanser-Soap-75g-.jpg'
    ],
    shortDescription: 'Natural neem soap for healthy, glowing skin. Prevents acne and skin infections.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Patanjali Neem Kanti Soap is enriched with neem and turmeric for clear skin.
      </p>
    `,
    specifications: {
      'Weight': '75g',
      'Type': 'Herbal Soap',
      'Key Ingredients': 'Neem, Turmeric, Aloe Vera'
    },
    relatedProducts: ['chitrakadi-bati', 'pudin-hara', 'koflet-lozenges']
  },
  'd25-infusion': {
    id: 'd25-infusion',
    name: 'D 25% Infusion',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 65,
    originalPrice: 85,
    discount: 24,
    rating: 4,
    reviews: 12,
    stock: 'In Stock',
    sku: 'ALLO-D25-001',
    tags: 'I.V. Fluids, Allopathy, Dextrose',
    mainImage: 'photo/allopathy/D-25-Infusion.jpg',
    thumbnails: ['photo/allopathy/D-25-Infusion.jpg'],
    shortDescription: 'Intravenous 25% dextrose infusion used for fluid and calorie replacement.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        D 25% Infusion is administered intravenously to provide fluid and calorie support in clinical settings, under medical supervision.
      </p>
    `,
    specifications: {
      'Volume': '500ml',
      'Type': 'I.V. Fluid',
      'Concentration': '25% Dextrose'
    },
    relatedProducts: ['dns-infusion', 'mcel-tablet']
  },

  'dns-infusion': {
    id: 'dns-infusion',
    name: 'DNS Infusion',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 58,
    originalPrice: 75,
    discount: 23,
    rating: 4,
    reviews: 9,
    stock: 'In Stock',
    sku: 'ALLO-DNS-001',
    tags: 'I.V. Fluids, Allopathy, Saline',
    mainImage: 'photo/allopathy/DNS.jpg',
    thumbnails: ['photo/allopathy/DNS.jpg'],
    shortDescription: 'Dextrose Normal Saline infusion used for fluid replacement and electrolyte balance.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        DNS Infusion combines dextrose and normal saline to restore fluid and electrolyte balance in patients.
      </p>
    `,
    specifications: {
      'Volume': '500ml',
      'Type': 'I.V. Fluid',
      'Composition': 'Dextrose + Sodium Chloride'
    },
    relatedProducts: ['d25-infusion', 'mcel-tablet']
  },

  'mcel-tablet': {
    id: 'mcel-tablet',
    name: 'M Cel Tablet',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 42,
    originalPrice: 55,
    discount: 24,
    rating: 4,
    reviews: 21,
    stock: 'In Stock',
    sku: 'ALLO-MCEL-001',
    tags: 'Multivitamin, Tablet, Allopathy',
    mainImage: 'photo/allopathy/M-Cel-Tablet.jpg',
    thumbnails: ['photo/allopathy/M-Cel-Tablet.jpg'],
    shortDescription: 'Multivitamin and mineral supplement tablet to support daily nutritional needs.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        M Cel Tablet is a multivitamin formulation that helps address common nutritional deficiencies.
      </p>
    `,
    specifications: {
      'Quantity': '15 tablets',
      'Type': 'Multivitamin Tablet'
    },
    relatedProducts: ['d25-infusion', 'dns-infusion']
  },

  'paracetamol-tablet': {
    id: 'paracetamol-tablet',
    name: 'Paracetamol 500mg Tablet',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 18,
    originalPrice: 25,
    discount: 28,
    rating: 5,
    reviews: 63,
    stock: 'In Stock',
    sku: 'ALLO-PARA-001',
    tags: 'Fever, Pain Relief, Tablet, Allopathy',
    mainImage: 'photo/allopathy/Paracetamol-Tablet.jpg',
    thumbnails: ['photo/allopathy/Paracetamol-Tablet.jpg'],
    shortDescription: 'Common pain reliever and fever reducer for everyday aches and mild fever.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Paracetamol 500mg is widely used to relieve mild to moderate pain and reduce fever.
      </p>
    `,
    specifications: {
      'Quantity': '10 tablets',
      'Strength': '500mg',
      'Type': 'Tablet'
    },
    relatedProducts: ['mcel-tablet', 'd25-infusion']
  },

  'amoxicillin-capsule': {
    id: 'amoxicillin-capsule',
    name: 'Amoxicillin 500mg Capsule',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 65,
    originalPrice: 90,
    discount: 28,
    rating: 4,
    reviews: 17,
    stock: 'In Stock',
    sku: 'ALLO-AMOX-001',
    tags: 'Antibiotic, Capsule, Allopathy',
    mainImage: 'photo/allopathy/Amoxicillin-Capsule.jpg',
    thumbnails: ['photo/allopathy/Amoxicillin-Capsule.jpg'],
    shortDescription: 'Broad-spectrum antibiotic capsule for bacterial infections, to be used as prescribed.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        Amoxicillin is a penicillin-based antibiotic used to treat a range of bacterial infections.
      </p>
    `,
    specifications: {
      'Quantity': '10 capsules',
      'Strength': '500mg',
      'Type': 'Capsule'
    },
    relatedProducts: ['paracetamol-tablet', 'mcel-tablet']
  },

  'cough-syrup': {
    id: 'cough-syrup',
    name: 'Allopathy Cough Syrup 100ml',
    category: 'allopathy',
    categorySlug: 'allopathy',
    brand: 'generic',
    price: 75,
    originalPrice: 95,
    discount: 21,
    rating: 4,
    reviews: 29,
    stock: 'In Stock',
    sku: 'ALLO-SYR-001',
    tags: 'Cough, Syrup, Allopathy',
    mainImage: 'photo/allopathy/Cough-Syrup.jpg',
    thumbnails: ['photo/allopathy/Cough-Syrup.jpg'],
    shortDescription: 'Effective relief from dry and wet cough for adults and children above 12 years.',
    description: `
      <h3 class="text-2xl font-bold mb-4">Product Description</h3>
      <p class="mb-4 text-gray-700 leading-relaxed">
        This cough syrup provides relief from persistent cough and throat irritation.
      </p>
    `,
    specifications: {
      'Volume': '100ml',
      'Type': 'Syrup'
    },
    relatedProducts: ['paracetamol-tablet', 'amoxicillin-capsule']
  },
};

// Helper functions
function getProduct(productId) {
  return PRODUCTS_DATABASE[productId] || null;
}

function getRelatedProducts(productIds) {
  return productIds.map(id => PRODUCTS_DATABASE[id]).filter(p => p !== null);
}

function getAllProducts() {
  return Object.values(PRODUCTS_DATABASE);
}