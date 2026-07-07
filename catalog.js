const categoriesData = {
    "Electronics": [
        { id: "e1", name: "Smartwatch Pro", price: 120, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
        { id: "e2", name: "Wireless Headphones", price: 80, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
        { id: "e3", name: "Bluetooth Speaker", price: 45, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
        { id: "e4", name: "Gaming Mouse", price: 60, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
        { id: "e5", name: "Mechanical Keyboard", price: 95, img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
        { id: "e6", name: "Power Bank 20k", price: 35, img: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "e7", name: "4K Action Camera", price: 150, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
        { id: "e8", name: "Wireless Charger Pad", price: 25, img: "https://images.unsplash.com/photo-1633381638729-27f730955c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBDaGFyZ2VyJTIwUGFkfGVufDB8fDB8fHww" }
    ],
    "Cups & Mugs": [
        { id: "c1", name: "Ceramic Coffee Cup", price: 15, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" },
        { id: "c2", name: "Stainless Travel Mug", price: 24, img: "https://images.unsplash.com/photo-1642698043660-a3827ca09337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RhaW5sZXNzJTIwVHJhdmVsJTIwTXVnfGVufDB8fDB8fHww" },
        { id: "c3", name: "Glass Tea Mug", price: 12, img: "https://images.unsplash.com/photo-1600801431089-8e1988f746f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2xhc3MlMjBUZWElMjBNdWd8ZW58MHx8MHx8fDA%3D" },
        { id: "c4", name: "Matte Black Tumbler", price: 20, img: "https://images.unsplash.com/photo-1654792899680-4e397551e9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWF0dGUlMjBCbGFjayUyMFR1bWJsZXJ8ZW58MHx8MHx8fDA%3D" },
        { id: "c5", name: "Vintage Porcelain Cup", price: 18, img: "https://images.unsplash.com/photo-1598192156254-cdc621043768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmludGFnZSUyMFBvcmNlbGFpbiUyMEN1cHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: "c6", name: "Marble Pattern Mug", price: 16, img: "https://images.unsplash.com/photo-1725947457927-c999dc0023af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyYmxlJTIwUGF0dGVybiUyME11Z3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: "c7", name: "Wooden Tea Cup", price: 22, img: "https://plus.unsplash.com/premium_photo-1723826751304-96da75796740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V29vZGVuJTIwVGVhJTIwQ3VwfGVufDB8fDB8fHww" },
        { id: "c8", name: "REFULGIX", price: 30, img: "https://m.media-amazon.com/images/I/41W9B1Ri4hL._AC_SX569_.jpg" }
    ],
    "Accessories": [
        { id: "a1", name: "Leather Laptop Bag", price: 65, img: "https://media.istockphoto.com/id/1174124752/photo/brown-leather-case-with-laptop-on-wooden-table-top-view-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=zg9XeMNI5_1CR_o_XNj_0da-9oyOwF-lf7aabqqMvLQ=" },
        { id: "a2", name: "Wallet", price: 29, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400" },
        { id: "a3", name: "Desk Leather Pad", price: 35, img: "https://images.unsplash.com/photo-1650566301820-ded93a1bb635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVzayUyMExlYXRoZXIlMjBQYWR8ZW58MHx8MHx8fDA%3D" },
        { id: "a4", name: "Premium Sunglasses", price: 85, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
        { id: "a5", name: "Metal Keychain Holder", price: 10, img: "https://images.unsplash.com/photo-1603508102977-02688e3265fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWV0YWwlMjBLZXljaGFpbiUyMEhvbGRlcnxlbnwwfHwwfHx8MA%3D%3D" },
        { id: "a6", name: "Travel Passport Case", price: 19, img: "https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJhdmVsJTIwUGFzc3BvcnQlMjBDYXNlfGVufDB8fDB8fHww" },
        { id: "a7", name: "Cable Organizer Bag", price: 15, img: "https://images.unsplash.com/photo-1634839763037-a3e798e325ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhYmxlJTIwT3JnYW5pemVyJTIwQmFnfGVufDB8fDB8fHww" },
        { id: "a8", name: "Leather Bag", price: 22, img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D" }
    ],
    "Apparel": [
        { id: "ap1", name: "Classic Hoodie", price: 55, img: "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xhc3NpYyUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D" },
        { id: "ap2", name: "Oversized Cotton Tee", price: 25, img: "https://media.istockphoto.com/id/1452546053/photo/yellow-sweatshirt-hanging-on-a-hanger.webp?a=1&b=1&s=612x612&w=0&k=20&c=hqWJ64AJm96BvLMejCe86uV2KtABCKMf7g9JABFwtug=" },
        { id: "ap3", name: "Sports Cap", price: 20, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400" },
        { id: "ap4", name: "Windbreaker Jacket", price: 75, img: "https://images.unsplash.com/photo-1611308725032-74f0a551d018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2luZGJyZWFrZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D" },
        { id: "ap5", name: "Socks", price: 12, img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400" },
        { id: "ap6", name: "Fitness Gloves", price: 18, img: "https://images.unsplash.com/photo-1557127972-1c446ea89ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rml0bmVzcyUyMEdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: "ap7", name: "Casual Pants", price: 90, img: "https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzdWFsJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
        { id: "ap8", name: "Sports Pants", price: 40, img: "https://images.unsplash.com/photo-1706177208693-2e3c68e5f0f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BvcnRzJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" }
    ],
    "Fitness & Gear": [
        { id: "f1", name: "Fitness Bottle", price: 40, img: "https://images.unsplash.com/photo-1649888254873-d9870ee286ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3MlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D" },
        { id: "f2", name: "Yoga Mat", price: 30, img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400" },
        { id: "f3", name: "Dumbbell", price: 199, img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400" },
        { id: "f4", name: "Resistance Bands", price: 15, img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww" },
        { id: "f5", name: "Gym Bar", price: 22, img: "https://images.unsplash.com/photo-1685633225603-9a1ffafd11fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwYmFyfGVufDB8fDB8fHww" },
        { id: "f6", name: "Gym Bag", price: 45, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
        { id: "f7", name: "Jump Rope", price: 18, img: "https://images.unsplash.com/photo-1651315283994-03ec73dc21f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnVtcCUyMFJvcGV8ZW58MHx8MHx8fDA%3D" },
        { id: "f8", name: "Running machine", price: 110, img: "https://images.unsplash.com/photo-1716367840407-f9414a84b325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVubmluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D" }
    ]
};

window.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initStocks();
    renderCatalog();
});

function initStocks() {
    let stocks = JSON.parse(localStorage.getItem('productsStock')) || {};
    let updated = false;

    for (let cat in categoriesData) {
        categoriesData[cat].forEach(p => {
            if (stocks[p.id] === undefined) {
                stocks[p.id] = 15; 
                updated = true;
            }
        });
    }

    if (updated || !localStorage.getItem('productsStock')) {
        localStorage.setItem('productsStock', JSON.stringify(stocks));
    }
}

function renderCatalog() {
    const container = document.getElementById('catalog-container');
    let html = '';

    for (let cat in categoriesData) {
        html += `
            <section class="mb-5">
                <h3 class="text-teal border-bottom border-secondary pb-2 mb-4">${cat}</h3>
                <div class="row g-4">
        `;

        categoriesData[cat].forEach(p => {
            html += `
                <div class="col-md-3 col-sm-6">
                    <div class="card bg-secondary-dark text-light border-secondary h-100 product-card">
                        <img src="${p.img}" class="card-img-top" alt="${p.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h6 class="card-title text-teal fw-bold mb-1">${p.name}</h6>
                            <h5 class="text-light mt-auto">$${p.price.toFixed(2)}</h5>
                            <div class="d-flex gap-2 mt-3">
                                <button onclick="viewProduct('${p.id}')" class="btn btn-outline-teal btn-sm w-50">Details</button>
                                <button onclick="addToCart('${p.id}', '${p.name}', ${p.price})" class="btn btn-teal btn-sm w-50">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div></section>`;
    }

    container.innerHTML = html;
}

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let stocks = JSON.parse(localStorage.getItem('productsStock')) || {};
    
    let inCart = cart.find(item => item.id === id);
    let qty = inCart ? inCart.quantity : 0;

    if (stocks[id] !== undefined && qty >= stocks[id]) {
        alert('Out of Stock!');
        return;
    }

    if (inCart) {
        inCart.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`${name} added to cart!`);
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function viewProduct(id) {
    window.location.href = `product-details.html?productId=${id}`;
}