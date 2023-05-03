const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('submit');

loginButton.addEventListener('click', () => {
    if (login.value === 'admin' && password.value === 'admin') {
        alert('Logado com sucesso');
    } else {
        alert('Acesso negado, usuário ou senha incorreto.');
    }
});