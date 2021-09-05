const emailInput = document.getElementsByClassName('login-useraccount')[0];
const passwordInput = document.getElementsByClassName('login-password')[0];
const loginButton = document.getElementsByClassName('login-button')[0];

const isEmailInputValid = (event) => {
  console.log(event.target.value.includes('@'));
  event.target.value.includes('@');

  if (isEmailInputValid && isPasswordInputValid) {
    loginButton.style.backgroundColor = 'blue';
  } else {
    loginButton.style.backgroundColor = 'black';
  }
}

const isPasswordInputValid = (event) => {
  console.log(event.target.value.length);
  event.target.value.length>=8;

  if (isEmailInputValid && isPasswordInputValid) {
    loginButton.style.backgroundColor = 'blue';
  } else {
    loginButton.style.backgroundColor = 'black';
  }
}



emailInput.addEventListener('input', isEmailInputValid);
passwordInput.addEventListener('input', isPasswordInputValid);
