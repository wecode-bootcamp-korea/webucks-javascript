let $username = document.querySelector('#username');
let $password = document.querySelector('#password');
let $loginButton = document.getElementById('login-button');

const isValidLogin = [false, false]

window.addEventListener('DOMContentLoaded', () => {

  $username.addEventListener('blur', () => {
    isValidLogin[0] = ($username.value.includes('@')) ? true : false

    validateLogin()
  })

  $password.addEventListener('blur', () => {
    isValidLogin[1] = ($password.value.length > 7) ? true : false
    
    validateLogin()
  })

  $loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = 'list.html';
  })

});

function validateLogin() {
  if (isValidLogin[0] && isValidLogin[1]){
    $loginButton.classList.add('login-validated')
    $loginButton.removeAttribute('disabled')
  } 
  else {
    $loginButton.classList.remove('login-validated')
    $loginButton.setAttribute('disabled', true)
  }
}
