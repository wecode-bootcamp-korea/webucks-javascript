const emailInput = document.getElementsByClassName('login-useraccount')[0];
const passwordInput = document.getElementsByClassName('login-password')[0];
const loginButton = document.getElementsByClassName('login-button')[0];

console.log(emailInput);
console.log(loginButton);
console.log(emailInput.value);
console.log(loginButton.value);
//
const isEmailAndPasswordInputValid = () => {
  return emailInput.value.includes('@') && passwordInput.value.length>=8;
}

console.log(isEmailAndPasswordInputValid());
//
const changeLoginButtonColor = () => {
  let isValid = isEmailAndPasswordInputValid();
  if (isValid) {
    loginButton.classList.remove('login-button')
    loginButton.classList.add('login-button-active');
  } else {
    loginButton.classList.remove('login-button-active');
    loginButton.classList.add('login-button');
  }
}

//
emailInput.addEventListener('input', changeLoginButtonColor);
passwordInput.addEventListener('input', changeLoginButtonColor);