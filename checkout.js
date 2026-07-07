function togglePaymentFields(type) {
    const visaFields = document.getElementById('visa-fields');
    const walletFields = document.getElementById('wallet-fields');

    if (type === 'visa') {
        visaFields.classList.remove('d-none');
        walletFields.classList.add('d-none');
    } else {
        visaFields.classList.add('d-none');
        walletFields.classList.remove('d-none');
    }
}

function processPayment(event) {
    event.preventDefault();

    const currentUser = localStorage.getItem('currentUser'); 
    if (!currentUser) {
        alert('Please log in first to complete your purchase!');
        window.location.href = 'login.html?mode=login'; 
        return;
    }

    const country = document.getElementById('shipping-country').value.trim();
    const gov = document.getElementById('shipping-gov').value.trim();
    const phone = document.getElementById('shipping-phone').value.trim();

    if (!country || !gov || !phone) {
        alert('Please fill in all shipping information!');
        return;
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === 'visa') {
        const cardNum = document.getElementById('card-num').value.trim();
        const cardExp = document.getElementById('card-exp').value.trim();
        const cardCvv = document.getElementById('card-cvv').value.trim();

        if (!cardNum || !cardExp || !cardCvv) {
            alert('Please complete your Visa Card details!');
            return;
        }
    } else if (paymentMethod === 'wallet') {
        const walletPhone = document.getElementById('wallet-phone').value.trim();

        if (!walletPhone) {
            alert('Please enter your Smart Wallet phone number!');
            return;
        }
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let stocks = JSON.parse(localStorage.getItem('productsStock')) || {};

    cart.forEach(item => {
        if (stocks[item.id] !== undefined) {
            stocks[item.id] = Math.max(0, stocks[item.id] - item.quantity);
        }
    });

    localStorage.setItem('productsStock', JSON.stringify(stocks));
    localStorage.removeItem('cart'); 

    alert('Payment successful! Your order is on its way.');
    window.location.href = 'index.html';
}