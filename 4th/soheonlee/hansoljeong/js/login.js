const loginBtn = document.querySelector('.login-btn');
const inputId = document.querySelector('.id');
const inputPw = document.querySelector('.pw');

function activeBtn() {
  if (inputId.value.includes('@') && inputPw.value.length > 7) {
    loginBtn.style.opacity = '1.0';
    loginBtn.disabled = false;
  } else {
    loginBtn.style.opacity = '0.5';
    loginBtn.disabled = true;
  }
}

inputId.addEventListener('keyup', activeBtn);
inputPw.addEventListener('keyup', activeBtn);
