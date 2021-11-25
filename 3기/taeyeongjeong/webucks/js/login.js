const userId = document.getElementById('user-id');
const userPw = document.getElementById('user-pw');
const userPwBtn = document.getElementById('user-pw__btn');
const loginButton = document.getElementsByClassName('login-button')[0];

const regexId =
  /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i;
const regexPw = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8}/;

userId.addEventListener('keyup', (e) => {
  if (regexId.test(userId.value) && regexPw.test(userPw.value)) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }

  if (regexId.test(userId.value)) {
    userId.style.borderColor = 'green';
  } else {
    userId.style.borderColor = '#e3e3e3';
  }
});

userPw.addEventListener('keyup', (e) => {
  if (regexId.test(userId.value) && regexPw.test(userPw.value)) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }

  if (regexPw.test(userPw.value)) {
    userPw.style.borderColor = 'green';
  } else {
    userPw.style.borderColor = '#e3e3e3';
  }
});

userPwBtn.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'show') {
    e.target.innerHTML = 'hide';
    e.target.parentElement.childNodes[1].type = 'text';
  } else {
    e.target.innerHTML = 'show';
    e.target.parentElement.childNodes[1].type = 'password';
  }
});
