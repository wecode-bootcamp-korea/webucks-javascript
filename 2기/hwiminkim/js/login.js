'use strict';

// 1. login validation

// select element

const idEl = document.querySelector('.id-form');
const pwEl = document.querySelector('.password-form');
const loginBtn = document.querySelector('.login-btn');

// get value of id, password

let id = idEl.value;
let password = pwEl.value;

// change button color

const changeBtnColor = function (color) {
  loginBtn.style.backgroundColor = color;
};

// set button's attribute to able or disable

const setBtnDisable = function () {
  loginBtn.setAttribute('disabled', '');
};

const setBtnAble = function () {
  loginBtn.removeAttribute('disabled');
};

// id & password validation

const loginValidation = function () {
  const emailReg =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (emailReg.test(id) && pwReg.test(password)) {
    changeBtnColor('#61ADED');
    setBtnAble();
  } else {
    changeBtnColor('#add3eb');
    setBtnDisable();
  }
};

const changeIdBorder = function () {
  const emailReg = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

  if (emailReg.test(id)) {
    idEl.style.border = 'solid 3px green';
  } else {
    idEl.style.border = 'solid 3px rgb(222, 222, 222)';
  }
};

const changePwBorder = function () {
  const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (pwReg.test(password)) {
    pwEl.style.border = 'solid 3px green';
  } else {
    pwEl.style.border = 'solid 3px rgb(222, 222, 222)';
  }
};

// button change if validation pass

idEl.addEventListener('keyup', () => {
  id = idEl.value;
  changeIdBorder();
  loginValidation();
});

pwEl.addEventListener('keyup', () => {
  password = pwEl.value;
  changePwBorder();
  loginValidation();
});

// when button activated, link to list.html

loginBtn.addEventListener('click', () => {
  location.href = 'list.html';
});
