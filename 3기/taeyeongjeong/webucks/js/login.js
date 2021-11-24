const userId = document.getElementById('user-id');
const userPw = document.getElementById('user-pw');
const loginButton = document.getElementsByClassName('login-button')[0];

userId.addEventListener('keyup', (e) => {
  if (userId.value.includes('@') && userPw.value.length >= 8) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
});

userPw.addEventListener('keyup', (e) => {
  if (userId.value.includes('@') && userPw.value.length >= 8) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
  console.log(pwTest.test(userPw.value));
});
