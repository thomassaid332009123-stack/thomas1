window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'signup') {
        toggleAuthForms('signup');
    } else {
        toggleAuthForms('login');
    }
});

function toggleAuthForms(targetForm) {
    const loginBox = document.getElementById('login-box');
    const signupBox = document.getElementById('signup-box');

    if (targetForm === 'signup') {
        loginBox.classList.add('d-none');
        signupBox.classList.remove('d-none');
    } else {
        signupBox.classList.add('d-none');
        loginBox.classList.remove('d-none');
    }
}

function handleSignupSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const userData = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert('Account created successfully! You can now log in.');
    toggleAuthForms('login');
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(registeredUser));
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials or user does not exist.');
    }
}