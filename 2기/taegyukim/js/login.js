const userInfo = document.querySelector(".userinfo");
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const btn = document.querySelector("#login-btn");

const isValidInput = () => {
  return user.value.includes('@') && password.value.length >= 8
}

const paintBtn = () => {
  const isValid = isValidInput();
  if(isValid) {
    btn.classList.add('active');
    btn.disabled = false;
  } else {
    btn.classList.remove('active');
    btn.disabled = true;
  }
}

userInfo.addEventListener('keyup', paintBtn);
