const tempCatalog = {
    "e1": { 
        name: "Smartwatch Pro", 
        price: 120, 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new Smartwatch Pro. Engineered for tech enthusiasts, it features robust build quality, next-gen seamless connectivity, and ultra-low latency response times. Its sleek ergonomic framework guarantees comfort during extended use, delivering pro-grade reliability that scales seamlessly into your routine. Upgrade your dynamic digital setup for an unmatched value."
    },
    "e2": { 
        name: "Wireless Headphones", 
        price: 80, 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new Wireless Headphones. Engineered for audio enthusiasts, it features robust build quality, next-gen seamless connectivity, and ultra-low latency response times. Perfect for everyday listen sessions."
    },
    "e3": { 
        name: "Bluetooth Speaker", 
        price: 45, 
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new Bluetooth Speaker. Engineered for music lovers, it features robust build quality, next-gen seamless connectivity, and clear audio delivery that scales seamlessly into your routine."
    },
    "e4": { 
        name: "Gaming Mouse", 
        price: 60, 
        img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new Gaming Mouse. Engineered for tech enthusiasts, it features robust build quality, next-gen seamless connectivity, and ultra-low latency response times."
    },
    "e5": { 
        name: "Mechanical Keyboard", 
        price: 95, 
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new Mechanical Keyboard. Engineered for gamers and typists, it features robust build quality, tactile keys, and ultra-low latency response times."
    },
    "e6": { 
        name: "Power Bank 20k", 
        price: 35, 
        img: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?q=80&w=870&auto=format&fit=crop",
        description: "Never run out of power again. This high-capacity Power Bank 20k features intelligent fast charging technology to power up your devices safely and efficiently on the go. Equipped with multi-protect safety systems."
    },
    "e7": { 
        name: "4K Action Camera", 
        price: 150, 
        img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
        description: "Immerse yourself in cutting-edge performance with the all-new 4K Action Camera. Engineered for adventure lovers, it features robust build quality, next-gen stabilization, and ultra-low latency response times."
    },
    "e8": { 
        name: "Wireless Charger Pad", 
        price: 25, 
        img: "https://images.unsplash.com/photo-1633381638729-27f730955c23?w=500&auto=format&fit=crop",
        description: "Never run out of power again. This premium Wireless Charger Pad features intelligent fast charging technology to power up your devices safely and efficiently on your desk. Equipped with multi-protect safety systems."
    },
    "c1": { 
        name: "Ceramic Coffee Cup", 
        price: 15, 
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
        description: "Elevate your beverage ritual with the premium Ceramic Coffee Cup. Expertly crafted from high-grade, sustainable materials, it provides outstanding double-wall insulation to keep your coffee piping hot or your iced tea perfectly chilled for hours."
    },
    "c2": { 
        name: "Stainless Travel Mug", 
        price: 24, 
        img: "https://images.unsplash.com/photo-1642698043660-a3827ca09337?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Stainless Travel Mug. Expertly crafted from high-grade, sustainable materials, it provides outstanding double-wall insulation to keep your coffee piping hot during your daily commutes."
    },
    "c3": { 
        name: "Glass Tea Mug", 
        price: 12, 
        img: "https://images.unsplash.com/photo-1600801431089-8e1988f746f1?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Glass Tea Mug. Expertly crafted from high-grade, sustainable materials, it provides outstanding insulation to keep your hot tea fresh and beautiful to look at."
    },
    "c4": { 
        name: "Matte Black Tumbler", 
        price: 20, 
        img: "https://images.unsplash.com/photo-1654792899680-4e397551e9b4?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Matte Black Tumbler. Expertly crafted from high-grade, sustainable materials, it provides outstanding double-wall insulation to keep your coffee piping hot or your iced tea perfectly chilled for hours."
    },
    "c5": { 
        name: "Vintage Porcelain Cup", 
        price: 18, 
        img: "https://images.unsplash.com/photo-1598192156254-cdc621043768?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Vintage Porcelain Cup. Expertly crafted from high-grade, sustainable materials, it provides outstanding insulation and brings classic sophistication to your cozy home spaces."
    },
    "c6": { 
        name: "Marble Pattern Mug", 
        price: 16, 
        img: "https://images.unsplash.com/photo-1725947457927-c999dc0023af?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Marble Pattern Mug. Expertly crafted from high-grade, sustainable materials, it provides outstanding double-wall insulation with a beautiful aesthetic design for your office desk."
    },
    "c7": { 
        name: "Wooden Tea Cup", 
        price: 22, 
        img: "https://plus.unsplash.com/premium_photo-1723826751304-96da75796740?w=500&auto=format&fit=crop",
        description: "Elevate your beverage ritual with the premium Wooden Tea Cup. Expertly crafted from high-grade, sustainable natural wood materials, it provides outstanding thermal insulation and bringing tactile strength to your sips."
    },
    "c8": { 
        name: "REFULGIX", 
        price: 30, 
        img: "https://m.media-amazon.com/images/I/41W9B1Ri4hL._AC_SX569_.jpg",
        description: "Elevate your beverage ritual with the premium REFULGIX mug. Expertly crafted from high-grade, sustainable materials, it provides outstanding insulation to keep your favorite drinks at the perfect temperature for hours."
    },
    "a1": { 
        name: "Leather Laptop Bag", 
        price: 65, 
        img: "https://media.istockphoto.com/id/1174124752/photo/brown-leather-case-with-laptop-on-wooden-table-top-view-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=zg9XeMNI5_1CR_o_XNj_0da-9oyOwF-lf7aabqqMvLQ=",
        description: "Style meets everyday utility. The Leather Laptop Bag is tailored from highly durable, water-resistant premium materials designed to safely organize and protect your daily gear. Features a sleek minimalist exterior with heavy-duty stitching."
    },
    "a2": { 
        name: "Wallet", 
        price: 29, 
        img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
        description: "Style meets everyday utility. The Wallet is tailored from highly durable, genuine premium materials designed to safely organize your cards and cash. Features a sleek minimalist exterior with heavy-duty stitching."
    },
    "a3": { 
        name: "Desk Leather Pad", 
        price: 35, 
        img: "https://images.unsplash.com/photo-1650566301820-ded93a1bb635?w=500&auto=format&fit=crop",
        description: "Style meets everyday utility. The Desk Leather Pad is tailored from highly durable premium materials designed to safely organize your desk space and protect it from scratches, striking the ultimate balance between aesthetic luxury and strength."
    },
    "a4": { 
        name: "Premium Sunglasses", 
        price: 85, 
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
        description: "Style meets everyday utility. The Premium Sunglasses are tailored from highly durable, premium materials designed to safely protect your eyes while complementing any formal or casual attire perfectly."
    },
    "a5": { 
        name: "Metal Keychain Holder", 
        price: 10, 
        img: "https://images.unsplash.com/photo-1603508102977-02688e3265fd?w=500&auto=format&fit=crop",
        description: "Style meets everyday utility. The Metal Keychain Holder is tailored from highly durable, premium metallic materials designed to safely organize your keys with heavy-duty mechanism."
    },
    "a6": { 
        name: "Travel Passport Case", 
        price: 19, 
        img: "https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?w=500&auto=format&fit=crop",
        description: "Style meets everyday utility. The Travel Passport Case is tailored from highly durable, premium materials designed to safely organize and protect your travel documents and passport during long trips."
    },
    "a7": { 
        name: "Cable Organizer Bag", 
        price: 15, 
        img: "https://images.unsplash.com/photo-1634839763037-a3e798e325ee?w=500&auto=format&fit=crop",
        description: "Style meets everyday utility. The Cable Organizer Bag is tailored from highly durable, water-resistant premium materials designed to safely organize and protect your daily electronic accessories, cables, and flash drives."
    },
    "a8": { 
        name: "Leather Bag", 
        price: 22, 
        img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Style meets everyday utility. The Ergonomic Leather Bag is tailored from highly durable, premium soft materials designed to safely support your wrist and provide tactile strength for extended typing sessions."
    },
    "ap1": { 
        name: "Classic Hoodie", 
        price: 55, 
        img: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xhc3NpYyUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Redefine comfort and style with the Classic Hoodie. Tailored with soft, breathable premium fabrics, it ensures relaxed wearability and extreme flexibility for your daily aesthetic or active workouts."
    },
    "ap2": { 
        name: "Oversized Cotton Tee", 
        price: 25, 
        img: "https://media.istockphoto.com/id/1452546053/photo/yellow-sweatshirt-hanging-on-a-hanger.webp?a=1&b=1&s=612x612&w=0&k=20&c=hqWJ64AJm96BvLMejCe86uV2KtABCKMf7g9JABFwtug=",
        description: "Redefine comfort and style with the Oversized Cotton Tee. Tailored with soft, breathable premium cotton fabrics, it ensures relaxed wearability and extreme flexibility for your daily aesthetic."
    },
    "ap3": { 
        name: "Sports Cap", 
        price: 20, 
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
        description: "Redefine comfort and style with the Sports Cap. Tailored with breathable premium fabrics, it ensures relaxed wearability and extreme flexibility during your outdoor runs or active workouts."
    },
    "ap4": { 
        name: "Windbreaker Jacket", 
        price: 75, 
        img: "https://images.unsplash.com/photo-1611308725032-74f0a551d018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2luZGJyZWFrZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D",
        description: "Redefine comfort and style with the Windbreaker Jacket. Tailored with weather-resistant premium fabrics, it ensures relaxed wearability and extreme protection for your active outdoor workouts."
    },
    "ap5": { 
        name: "Socks", 
        price: 12, 
        img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400",
        description: "Redefine comfort and style with the Socks. Tailored with soft, breathable premium fabrics, it ensures relaxed wearability and extreme flexibility for your active workouts."
    },
    "ap6": { 
        name: "Fitness Gloves", 
        price: 18, 
        img: "https://images.unsplash.com/photo-1557127972-1c446ea89ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rml0bmVzcyUyMEdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Redefine comfort and style with the Fitness Gloves. Tailored with durable premium fabrics, it ensures relaxed wearability and extreme flexibility for your active heavy workouts."
    },
    "ap7": { 
        name: "Casual Pants", 
        price: 90, 
        img: "https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzdWFsJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
        description: "Redefine comfort and style with the Casual Pants. Tailored with premium denim fabrics, it ensures relaxed wearability and built with reinforced seams to maintain its tailored fit."
    },
    "ap8": { 
        name: "Sport Pants", 
        price: 40, 
        img: "https://images.unsplash.com/photo-1706177208693-2e3c68e5f0f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BvcnRzJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
        description: "Redefine comfort and style with the Sport Pants. Tailored with soft, breathable premium fabrics, it ensures relaxed wearability and extreme flexibility for your daily active workouts."
    },
    "f1": { 
        name: "Fitness Bottle", 
        price: 40, 
        img: "https://images.unsplash.com/photo-1649888254873-d9870ee286ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3MlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
        description: "Push your physical potential further with our elite Fitness Bottle. Specifically engineered to maximize workout efficacy, it offers non-slip structural safety and tracks your hydration levels effortlessly."
    },
    "f2": { 
        name: "Yoga Mat", 
        price: 30, 
        img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400",
        description: "Push your physical potential further with our elite Yoga Mat. Specifically engineered to maximize workout efficacy, it offers non-slip structural safety, tactical ergonomic surface, and high durability under heavy pressure."
    },
    "f3": { 
        name: "Dumbbell", 
        price: 199, 
        img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400",
        description: "Push your physical potential further with our elite Dumbbell. Specifically engineered to maximize workout efficacy, it offers tactical ergonomic handles and high durability under heavy pressure. Ideal for home setups."
    },
    "f4": { 
        name: "Resistance Bands", 
        price: 15, 
        img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww",
        description: "Push your physical potential further with our elite Resistance Bands. Specifically engineered to maximize workout efficacy, it offers high durability under heavy pressure. Ideal for both advanced home setups and dynamic training."
    },
    "f5": { 
        name: "Gym Bar", 
        price: 22, 
        img: "https://images.unsplash.com/photo-1685633225603-9a1ffafd11fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwYmFyfGVufDB8fDB8fHww",
        description: "Push your physical potential further with our elite Gym Bar. Specifically engineered to maximize recovery and workout efficacy, it offers non-slip structural safety and high durability under heavy pressure."
    },
    "f6": { 
        name: "Gym Bag", 
        price: 45, 
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        description: "Push your physical potential further with our elite Gym Bag. Specifically engineered to maximize utility, it offers tactical compartments, heavy pressure zippers, and fits all your gym training routines essentials."
    },
    "f7": { 
        name: "Jump Rope", 
        price: 18, 
        img: "https://images.unsplash.com/photo-1651315283994-03ec73dc21f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnVtcCUyMFJvcGV8ZW58MHx8MHx8fDA%3D",
        description: "Push your physical potential further with our elite Jump Rope. Specifically engineered to maximize workout efficacy, it offers tactical ergonomic handles and live track of your jumps."
    },
    "f8": { 
        name: "Running machine", 
        price: 110, 
        img: "https://images.unsplash.com/photo-1716367840407-f9414a84b325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVubmluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
        description: "Push your physical potential further with our elite Running machine. Specifically engineered to maximize muscle recovery, it offers tactical ergonomic handles and deep tissue stimulation under heavy pressure."
    }
};

let currentProductId = '';
let currentProduct = null;

window.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    const urlParams = new URLSearchParams(window.location.search);
    currentProductId = urlParams.get('productId');

    if (!currentProductId) {
        window.location.href = 'catalog.html';
        return;
    }

    currentProduct = tempCatalog[currentProductId];

    if (currentProduct) {
        renderProductDetails(currentProduct);
    } else {
        document.getElementById('product-container').innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-danger">Product Not Found!</h3>
                <a href="catalog.html" class="btn btn-teal mt-3">Back to Catalog</a>
            </div>
        `;
    }
});

function renderProductDetails(product) {
    const container = document.getElementById('product-container');
    
    let stocks = JSON.parse(localStorage.getItem('productsStock')) || {};
    let currentStock = stocks[currentProductId] !== undefined ? stocks[currentProductId] : 15;

    container.innerHTML = `
        <div class="col-md-6">
            <div class="product-img-container shadow-sm">
                <img src="${product.img}" alt="${product.name}" id="prod-img">
            </div>
        </div>
        <div class="col-md-6">
            <div class="product-info-box shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                    <span class="status-badge badge-instock mb-3">✓ In Stock (<span id="prod-stock">${currentStock}</span> units)</span>
                    <h1 class="product-title mb-2" id="prod-title">${product.name}</h1>
                    <p class="text-muted small mb-4">Product ID: ${currentProductId}</p>
                    <hr class="border-secondary">
                    <div class="product-price my-4" id="prod-price">$${product.price.toFixed(2)}</div>
                    <p class="product-description mb-4" id="prod-description">${product.description}</p>
                </div>
                <div class="mt-4">
                    <button onclick="triggerAddToCart()" class="btn btn-teal btn-lg w-100 py-3 rounded shadow-sm">🛒 Add to Cart</button>
                    <a href="catalog.html" class="btn btn-outline-teal w-100 mt-2 py-2">Back to Catalog</a>
                </div>
            </div>
        </div>
    `;
}

function triggerAddToCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let stocks = JSON.parse(localStorage.getItem('productsStock')) || {};

    let inCart = cart.find(item => item.id === currentProductId);
    let qty = inCart ? inCart.quantity : 0;
    let currentStock = stocks[currentProductId] !== undefined ? stocks[currentProductId] : 15;

    if (qty >= currentStock) {
        alert('Sorry, Out of Stock for this item!');
        return;
    }

    if (inCart) {
        inCart.quantity += 1;
    } else {
        cart.push({ id: currentProductId, name: currentProduct.name, price: currentProduct.price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${currentProduct.name} added to cart!`);
    window.location.reload();
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cart-count');
    if(cartCountEl) cartCountEl.textContent = count;
}