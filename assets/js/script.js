const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('submit');

loginButton.addEventListener('click', () => {
    if (login.value === 'admin' && password.value === 'admin') {
        alert('You are successfully logged in');
    } else {
        alert('You have entered an invalid username or password.');
    }
});