const inputForm = document.querySelector('#form');
const inputUserName = document.getElementsByClassName('form-input')[0];
const inputPassword = document.getElementsByClassName('form-input')[1];
const inputButton = document.getElementsByClassName('form-input')[2];

const isValidInput = () => {
  return inputUserName.value.includes('@') && inputPassword.value.length >= 8;
};

const verifyForm = () => {
  if (isValidInput()) {
    inputButton.disabled = false;
    inputButton.classList.add('active');
    inputForm.action = 'list.html';
  } else {
    inputButton.disabled = true;
    inputButton.classList.remove('active');
  }
};

inputUserName.addEventListener('keyup', verifyForm);
inputPassword.addEventListener('keyup', verifyForm);
