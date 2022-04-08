const btnLogin = document.getElementById('login-button');
const email = document.getElementById('email-login');
const password = document.getElementById('pass-login');
const agreeCheck = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

btnLogin.addEventListener('click', login);

function isChecked(event) {
  if (event.target.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}

agreeCheck.addEventListener('change', isChecked);
