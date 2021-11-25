let $username = document.querySelector('#username');
let $password = document.querySelector('#password');
let $loginButton = document.getElementById('login-button');
let $passwordButton = document.querySelector('.password-button');

const isValidLogin = [false, false]

window.addEventListener('DOMContentLoaded', () => {

  $username.addEventListener('blur', () => {
    isValidLogin[0] = ($username.value.includes('@')) ? true : false
    
    if (isValidLogin[0]) {
      $username.parentNode.classList.add('validated');
    }
    else if (!isValidLogin[0]) {
      $username.parentNode.classList.remove('validated');
    }
    validateLogin()
  })

  $password.addEventListener('blur', () => {
    isValidLogin[1] = ($password.value.length > 7) ? true : false
    
    if (isValidLogin[1]) {
      $password.parentNode.classList.add('validated');
    }
    else if (!isValidLogin[1]) {
      $password.parentNode.classList.remove('validated');
    }
    validateLogin()
  })

  $loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = 'list.html';
  })
  
  $passwordButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log($passwordButton.textContent)
    if ($passwordButton.textContent === 'show') {
      $password.removeAttribute('type');
      $password.setAttribute('type', 'text');
      $passwordButton.textContent="hide";
    }
    else if ($passwordButton.textContent === 'hide') {
      $password.removeAttribute('type');
      $password.setAttribute('type', 'password');
      $passwordButton.textContent="show"
    }
  })

});

function validateLogin() {
  if (isValidLogin[0] && isValidLogin[1]){
    $loginButton.classList.add('login-validated')
    $loginButton.toggleAttribute('disabled', false)
  } 
  else {
    $loginButton.classList.remove('login-validated')
    $loginButton.toggleAttribute('disabled', true)
  }
}