'use strict';

// Login Validation

const loginValidation = (function () {

  const btnLogin = document.querySelector('.btn__login');
  const form = document.querySelector('.auth');
  const idField = document.querySelector('.id');
  const pwField = document.querySelector('.password');
  const eyeIcon = document.querySelector('.fa-eye');
  const eyeSlashIcon = document.querySelector('.fa-eye-slash');

  const isValid = {
    id: false,
    pw: false
  };

  const activeBtn = function (validObj) {
    if (validObj.id && validObj.pw) {
      btnLogin.removeAttribute('disabled');
    } else {
      btnLogin.setAttribute('disabled', true);
    }
  };

  const eachFieldValidUI = (validObj) => {
    idField.style.border = validObj.id ? '1px solid green' : '1px solid #DBDBDB';
    pwField.style.border = validObj.pw ? '1px solid green' : '1px solid #DBDBDB';
  }

  const togglePassword = e => {
    if (e.target.checked) {
      pwField.type = 'password';
      e.target.removeAttribute('checked');
      eyeIcon.style.display = 'none';
      eyeSlashIcon.style.display = 'block';
    } else {
      pwField.type = 'text';
      e.target.setAttribute('checked', true);
      eyeIcon.style.display = 'block';
      eyeSlashIcon.style.display = 'none';
    }
  }

  const validation = e => {
    if (e.target.type === 'text') {
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
      isValid.id = e.target.value.match(emailRegex);
    }
    if (e.target.type === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      isValid.pw = e.target.value.match(passwordRegex);
    }
    eachFieldValidUI(isValid);
    activeBtn(isValid);
  };

  const relocation = () => {
    window.location.href = './list.html';
  };

  form.addEventListener('input', validation);

  form.addEventListener('keypress', e => {
    e.key === 'Enter' && isValid.id && isValid.pw && relocation();
  })

  btnLogin.addEventListener('click', e => {
    !e.target.disabled && relocation();
  });

  document.getElementById('icon').addEventListener('click', togglePassword)

})();