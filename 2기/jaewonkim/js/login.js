const inputForm = document.querySelector('#form');
const inputUserName = document.getElementsByClassName('form-input')[0];
const inputPassword = document.getElementsByClassName('form-input')[1];
const inputButton = document.getElementsByClassName('form-input')[2];

const verifyForm = function () {
  if (inputUserName.value.includes('@') && inputPassword.value.length >= 8) {
    inputButton.disabled = false;
    inputButton.style.opacity = '1.0';
    inputForm.action = 'list.html';
  } else {
    inputButton.disabled = true;
    inputButton.style.opacity = '0.6';
    inputForm.action = 'list.html';
  }
};

inputUserName.addEventListener('keyup', verifyForm);
inputPassword.addEventListener('keyup', verifyForm);
