
document.addEventListener('DOMContentLoaded', () => {

    /* --- Product Database (Furniture) - Inspired by OuchCart --- */
    const productsDB = {
        "sofa1": {
            title: "Modern Chesterfield 3-Seater Sofa",
            price: "₹45,999",
            originalPrice: "₹59,999",
            discount: "23% off",
            rating: "4.8 ★",
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            specs: {
                "Dimensions": "H 85cm x W 220cm x D 95cm",
                "Material": "Premium Velvet Upholstery",
                "Frame": "Solid Teak Wood",
                "Assembly": "Partial Assembly Required",
                "Warranty": "5 Year Structural Warranty"
            }
        },
        "sofa2": {
            title: "Luxury L-Shape Sectional Sofa",
            price: "₹78,999",
            originalPrice: "₹95,000",
            discount: "17% off",
            rating: "4.9 ★",
            img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
            specs: {
                "Dimensions": "L 280cm x W 180cm x H 85cm",
                "Material": "Linen Blend Fabric",
                "Frame": "Engineered Wood & Metal",
                "Seating": "6-7 Persons",
                "Warranty": "5 Year Warranty"
            }
        },
        "chair1": {
            title: "Wide Tufted Velvet Armchair",
            price: "₹12,999",
            originalPrice: "₹18,500",
            discount: "30% off",
            rating: "4.9 ★",
            img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
            specs: {
                "Dimensions": "H 95cm x W 75cm x D 80cm",
                "Material": "Premium Velvet & Foam",
                "Style": "Tufted Wingback",
                "Weight Capacity": "150 kg",
                "Warranty": "3 Year Warranty"
            }
        },
        "chair2": {
            title: "Wooden Rocking Chair with Footrest",
            price: "₹18,500",
            originalPrice: "₹24,000",
            discount: "23% off",
            rating: "4.7 ★",
            img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
            specs: {
                "Dimensions": "H 110cm x W 60cm x D 90cm",
                "Material": "Sheesham Wood",
                "Finish": "Natural Walnut",
                "Includes": "Cushioned Footrest",
                "Warranty": "5 Year Warranty"
            }
        },
        "table1": {
            title: "Marble Top 6-Seater Dining Table",
            price: "₹42,500",
            originalPrice: "₹55,000",
            discount: "23% off",
            rating: "4.8 ★",
            img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
            specs: {
                "Dimensions": "L 180cm x W 90cm x H 76cm",
                "Top": "Italian Marble",
                "Base": "Golden Stainless Steel",
                "Seating": "6-8 Persons",
                "Warranty": "3 Year Warranty"
            }
        },
        "table2": {
            title: "Round Coffee Table Set of 2",
            price: "₹15,999",
            originalPrice: "₹22,000",
            discount: "27% off",
            rating: "4.6 ★",
            img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
            specs: {
                "Dimensions": "Large: Ø60cm, Small: Ø45cm",
                "Top": "Faux Marble Laminated",
                "Frame": "Iron with Gold Finish",
                "Style": "Nesting/Stackable",
                "Warranty": "2 Year Warranty"
            }
        },
        "lamp1": {
            title: "Decorative Wooden Floor Lamp",
            price: "₹8,500",
            originalPrice: "₹12,000",
            discount: "29% off",
            rating: "4.6 ★",
            img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
            specs: {
                "Height": "160cm",
                "Material": "Natural Wood & Jute Shade",
                "Bulb Type": "E27 LED Compatible",
                "Style": "Scandinavian",
                "Warranty": "1 Year Warranty"
            }
        },
        "lamp2": {
            title: "Modern Brass Table Lamp",
            price: "₹4,999",
            originalPrice: "₹7,500",
            discount: "33% off",
            rating: "4.5 ★",
            img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
            specs: {
                "Height": "55cm",
                "Material": "Brushed Brass & Glass",
                "Bulb": "LED Included",
                "Style": "Art Deco",
                "Warranty": "1 Year Warranty"
            }
        },
        "bed1": {
            title: "King Size Upholstered Storage Bed",
            price: "₹58,900",
            originalPrice: "₹75,000",
            discount: "21% off",
            rating: "4.9 ★",
            img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
            specs: {
                "Size": "King (180cm x 200cm)",
                "Material": "Velvet Headboard & Sheesham",
                "Storage": "Hydraulic Lift Storage",
                "Mattress": "Not Included",
                "Warranty": "5 Year Warranty"
            }
        },
        "bed2": {
            title: "Modern Platform Queen Bed",
            price: "₹38,500",
            originalPrice: "₹48,000",
            discount: "20% off",
            rating: "4.7 ★",
            img: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80",
            specs: {
                "Size": "Queen (150cm x 200cm)",
                "Material": "MDF & Metal Frame",
                "Style": "Minimalist Platform",
                "Mattress": "Not Included",
                "Warranty": "3 Year Warranty"
            }
        },
        "decor1": {
            title: "Handcrafted Ceramic Vase Set",
            price: "₹3,499",
            originalPrice: "₹5,999",
            discount: "42% off",
            rating: "4.5 ★",
            img: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
            specs: {
                "Set Includes": "3 Vases (Small, Medium, Large)",
                "Material": "Handmade Ceramic",
                "Style": "Bohemian Art",
                "Care": "Wipe with damp cloth",
                "Use": "Decorative or Fresh Flowers"
            }
        },
        "decor2": {
            title: "Wall Art Canvas - Abstract Set",
            price: "₹4,999",
            originalPrice: "₹8,000",
            discount: "38% off",
            rating: "4.4 ★",
            img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80",
            specs: {
                "Set Includes": "3 Canvas Panels",
                "Size": "Each 40cm x 60cm",
                "Material": "Premium Canvas & Pine Frame",
                "Style": "Modern Abstract",
                "Mounting": "Ready to Hang"
            }
        },
        "sofa3": {
            title: "Scandinavian 2-Seater Loveseat",
            price: "₹32,500",
            originalPrice: "₹42,000",
            discount: "23% off",
            rating: "4.7 ★",
            img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&q=80",
            specs: {
                "Dimensions": "H 80cm x W 150cm x D 85cm",
                "Material": "Bouclé Fabric & Oak Legs",
                "Frame": "Solid Wood",
                "Cushions": "High-Density Foam",
                "Warranty": "3 Year Warranty"
            }
        },
        "chair3": {
            title: "Ergonomic Office Chair Pro",
            price: "₹24,999",
            originalPrice: "₹35,000",
            discount: "29% off",
            rating: "4.8 ★",
            img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
            specs: {
                "Dimensions": "H 120cm x W 65cm x D 68cm",
                "Material": "Breathable Mesh & Aluminum",
                "Features": "Lumbar Support, Adjustable Arms",
                "Weight Capacity": "130 kg",
                "Warranty": "5 Year Warranty"
            }
        },
        "table3": {
            title: "Industrial Console Table",
            price: "₹18,999",
            originalPrice: "₹25,000",
            discount: "24% off",
            rating: "4.6 ★",
            img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
            specs: {
                "Dimensions": "L 120cm x W 35cm x H 80cm",
                "Top": "Reclaimed Mango Wood",
                "Frame": "Black Iron Pipe",
                "Style": "Industrial Rustic",
                "Warranty": "2 Year Warranty"
            }
        },
        "lamp3": {
            title: "Crystal Chandelier 5-Light",
            price: "₹28,500",
            originalPrice: "₹38,000",
            discount: "25% off",
            rating: "4.9 ★",
            img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&q=80",
            specs: {
                "Dimensions": "Ø 60cm x H 50cm",
                "Material": "K9 Crystal & Chrome",
                "Bulbs": "5 x E14 (Not Included)",
                "Style": "Modern Luxury",
                "Installation": "Professional Recommended"
            }
        },
        "bed3": {
            title: "Canopy Bed Frame - King",
            price: "₹72,000",
            originalPrice: "₹90,000",
            discount: "20% off",
            rating: "4.8 ★",
            img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
            specs: {
                "Size": "King (180cm x 200cm)",
                "Material": "Solid Oak Wood",
                "Style": "Four-Poster Canopy",
                "Finish": "Natural Oak",
                "Warranty": "7 Year Warranty"
            }
        },
        "decor3": {
            title: "Macramé Wall Hanging Set",
            price: "₹2,499",
            originalPrice: "₹4,000",
            discount: "38% off",
            rating: "4.6 ★",
            img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
            specs: {
                "Set Includes": "3 Pieces (Various Sizes)",
                "Material": "100% Natural Cotton Rope",
                "Style": "Bohemian Handwoven",
                "Colors": "Natural Cream",
                "Care": "Spot Clean Only"
            }
        },
        "shelf1": {
            title: "Floating Wall Shelves Set of 3",
            price: "₹5,999",
            originalPrice: "₹8,500",
            discount: "29% off",
            rating: "4.5 ★",
            img: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&q=80",
            specs: {
                "Sizes": "60cm, 45cm, 30cm Length",
                "Material": "Solid Pine Wood",
                "Finish": "Walnut Stained",
                "Weight Capacity": "10kg Each",
                "Installation": "Hardware Included"
            }
        },
        "mirror1": {
            title: "Full-Length Arch Mirror",
            price: "₹12,500",
            originalPrice: "₹18,000",
            discount: "31% off",
            rating: "4.7 ★",
            img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
            specs: {
                "Size": "H 180cm x W 60cm",
                "Frame": "Gold Metal Arch",
                "Mirror": "5mm HD Glass",
                "Style": "Modern Minimalist",
                "Mounting": "Floor Standing or Wall"
            }
        },
        "dresser1": {
            title: "Vanity Dressing Table",
            price: "₹28,999",
            originalPrice: "₹38,000",
            discount: "24% off",
            rating: "4.8 ★",
            img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80",
            specs: {
                "Dimensions": "H 145cm x W 100cm x D 45cm",
                "Material": "Solid Wood & Veneer",
                "Mirror": "Oval Framed Mirror",
                "Storage": "3 Drawers + Compartments",
                "Finish": "White Gloss",
                "Warranty": "3 Year Warranty"
            }
        },
        "mirror2": {
            title: "Hollywood Vanity Mirror",
            price: "₹15,999",
            originalPrice: "₹22,000",
            discount: "27% off",
            rating: "4.9 ★",
            img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80",
            specs: {
                "Size": "H 80cm x W 60cm",
                "Lights": "12 LED Bulbs (Included)",
                "Frame": "Matte Black Metal",
                "Features": "Dimmable, Touch Control",
                "Style": "Hollywood Glam",
                "Warranty": "2 Year Warranty"
            }
        }
    };

    /* --- Image Synchronization --- */
    function syncImages() {
        document.querySelectorAll('img[data-id]').forEach(img => {
            const id = img.dataset.id;
            if (productsDB[id]) {
                img.src = productsDB[id].img;
            }
        });
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            const id = btn.dataset.id;
            if (productsDB[id]) {
                btn.dataset.img = productsDB[id].img;
            }
        });
    }
    syncImages();

    /* --- Dynamic Details Page Logic --- */
    if (window.location.pathname.includes('service-detail.html')) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productsDB[productId] || productsDB["sofa1"]; // Default fallback

        document.title = `${product.title} | FurniCraft`;

        const detailImg = document.querySelector('.detail-img');
        if (detailImg) {
            detailImg.src = product.img;
            detailImg.alt = product.title;
        }

        const titleEl = document.querySelector('.detail-info h1');
        if (titleEl) titleEl.textContent = product.title;

        const priceEl = document.querySelector('.detail-price-lg');
        if (priceEl) priceEl.textContent = product.price;

        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.dataset.id = productId || "sofa1";
            addToCartBtn.dataset.title = product.title;
            addToCartBtn.dataset.price = product.price;
            addToCartBtn.dataset.img = product.img;
        }

        const specsContainer = document.querySelector('.specs-list');
        if (specsContainer && product.specs) {
            let specsHtml = '';
            for (const [key, value] of Object.entries(product.specs)) {
                specsHtml += `
                    <div class="spec-item" style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #f9f9f9;">
                        <span class="spec-label" style="font-weight: 500; color: #888;">${key}</span>
                        <span>${value}</span>
                    </div>
                `;
            }
            specsContainer.innerHTML = specsHtml;
        }
    }

    /* --- Theme Toggle --- */
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('furniTheme');

    // SVG icons for theme toggle
    const moonIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    const sunIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;

    function updateThemeIcons() {
        const isDark = body.classList.contains('dark-mode');
        themeToggles.forEach(btn => {
            btn.innerHTML = isDark ? sunIcon : moonIcon;
        });
    }

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    updateThemeIcons();

    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('furniTheme', isDark ? 'dark' : 'light');
            updateThemeIcons();
        });
    });

    /* --- Mobile Menu --- */
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Create overlay element if it doesn't exist
    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay && navMenu) {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }

    function openMobileMenu() {
        navMenu.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileToggle.textContent = '✕';
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileToggle.textContent = '☰';
    }

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close on overlay click
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMobileMenu);
        }

        // Close on clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    /* --- Mobile Dropdown Toggle --- */
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Close other dropdowns
                navDropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });
                // Toggle this dropdown
                dropdown.classList.toggle('active');
            });
        }
    });

    /* --- Cart Functionality --- */
    let cart = JSON.parse(localStorage.getItem('furniCart')) || [];

    function updateCartCount() {
        const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
        document.querySelectorAll('.header-cart-count').forEach(el => el.textContent = count);
    }

    function saveCart() {
        localStorage.setItem('furniCart', JSON.stringify(cart));
        updateCartCount();
    }

    window.addToCart = function (id, title, price, img) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({ id, title, price, img, quantity: 1 });
        }
        alert(`${title} added to bag.`);
        saveCart();
    }

    window.changeQuantity = function (id, change) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            const item = cart[itemIndex];
            item.quantity = (item.quantity || 1) + change;
            if (item.quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            saveCart();
            renderCartPage();
        }
    }

    window.removeFromCart = function (id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCartPage();
    }

    function renderCartPage() {
        const cartContainer = document.getElementById('cart-items');
        const totalPriceEl = document.getElementById('total-price');
        const finalPriceEl = document.getElementById('final-price');

        if (!cartContainer) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart" style="text-align: center; padding: 4rem;">
                    <h3 style="color: #888;">Your bag is empty.</h3>
                    <a href="services.html" class="btn" style="margin-top: 1rem;">Shop Now</a>
                </div>
            `;
            if (totalPriceEl) totalPriceEl.textContent = '₹0';
            if (finalPriceEl) finalPriceEl.textContent = '₹0';
            return;
        }

        let total = 0;
        let html = '';

        cart.forEach(item => {
            const qty = item.quantity || 1;
            let priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
            if (isNaN(priceNum)) priceNum = 0;
            total += priceNum * qty;

            html += `
                <div class="cart-item" style="display: flex; gap: 1.5rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem;">
                    <img src="${item.img}" alt="${item.title}" style="width: 80px; height: 80px; object-fit: contain;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-family: 'Playfair Display', serif;">${item.title}</div>
                        <div style="color: #666; font-size: 0.9rem;">${item.price}</div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 0.5rem;">
                            <button onclick="changeQuantity('${item.id}', -1)" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #ddd; background: white;">-</button>
                            <span>${qty}</span>
                            <button onclick="changeQuantity('${item.id}', 1)" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #ddd; background: white;">+</button>
                            <button onclick="removeFromCart('${item.id}')" style="margin-left: auto; color: #c0392b; border: none; background: none; font-size: 0.8rem; cursor: pointer;">REMOVE</button>
                        </div>
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = html;
        if (totalPriceEl) totalPriceEl.textContent = '₹' + total.toLocaleString('en-IN');
        if (finalPriceEl) finalPriceEl.textContent = '₹' + total.toLocaleString('en-IN');
    }

    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.dataset.id;
            const title = btn.dataset.title;
            const price = btn.dataset.price;
            const img = btn.dataset.img;
            addToCart(id, title, price, img);
        });
    });

    updateCartCount();
    renderCartPage();

    /* --- Back to Top Button --- */
    // Create button element
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* --- Product Filters Functionality --- */
    const filterToggle = document.getElementById('filter-toggle');
    const filterOverlay = document.getElementById('filter-overlay');
    const filtersSidebar = document.getElementById('filters-sidebar');
    const filterClose = document.getElementById('filter-close');
    const resultsCount = document.getElementById('results-count');
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const productCards = document.querySelectorAll('.product-card[data-category]');

    // Open filter panel
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            filtersSidebar?.classList.add('active');
            filterOverlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close filter panel
    function closeFilters() {
        filtersSidebar?.classList.remove('active');
        filterOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (filterClose) {
        filterClose.addEventListener('click', closeFilters);
    }

    if (filterOverlay) {
        filterOverlay.addEventListener('click', closeFilters);
    }

    // Filter products function
    function filterProducts() {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.category);

        let visibleCount = 0;

        productCards.forEach(card => {
            const category = card.dataset.category;

            // If no filters selected, show all
            if (selectedCategories.length === 0) {
                card.style.display = '';
                visibleCount++;
            } else if (selectedCategories.includes(category)) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results count
        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
    }

    // Add event listeners to filter checkboxes
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Clear filters button
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            // Uncheck all checkboxes
            filterCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            // Re-filter to show all products
            filterProducts();
        });
    }

    // Initialize count on page load
    if (resultsCount && productCards.length > 0) {
        resultsCount.textContent = productCards.length;
    }
});
