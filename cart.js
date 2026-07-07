window.addEventListener('DOMContentLoaded', renderCart);

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-center text-muted py-4">Your cart is empty.</p>';
        document.getElementById('total-items').textContent = 0;
        document.getElementById('total-price').textContent = '$0.00';
        return;
    }

    let html = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);
        
        html += `
            <div class="d-flex justify-content-between align-items-center border-bottom border-secondary py-3">
                <div>
                    <h5 class="text-teal mb-0">${item.name}</h5>
                    <small class="text-muted">Price: $${item.price.toFixed(2)}</small>
                </div>
                <div class="text-end">
                    <span class="badge bg-dark border border-secondary px-3 py-2 fs-6">Qty: ${item.quantity}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

function clearCart() {
    localStorage.removeItem('cart');
    renderCart();
}

function goToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}