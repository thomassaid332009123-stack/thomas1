window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const profileName = document.getElementById('profile-name');

    if (currentUser) {
        authButtons.classList.add('d-none');
        authButtons.setAttribute('style', 'display: none !important;');
        userProfile.classList.remove('d-none');
        userProfile.classList.add('d-flex');
        profileName.textContent = currentUser.name;
    } else {
        authButtons.classList.remove('d-none');
        authButtons.classList.add('d-flex');
        userProfile.classList.add('d-none');
        userProfile.setAttribute('style', 'display: none !important;');
    }
});

function handleLogout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
}