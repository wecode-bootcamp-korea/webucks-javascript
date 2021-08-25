
/* const btn = document.querySelector('#loginBtn');

btn.onclick = function () {
  alert('정답입니다.')
}*/


const userName = document.querySelector('.userName');
const passWord = document.querySelector('.passWord');
const loginBtn = document.querySelector('#loginBtn');


function loginBtn() {
  let idValue = userName.value;
  let passwordValue = passWord.value;

  if (idValue.indexOf("@")>=0 && passwordValue.length >= 8) {
    loginBtn.style.backgroundColor = "#25be32";
  }else {
    loginBtn.style.backgroundColor = "#351483";
  }
}


 /*
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("keyup", () => {
  const loginBtn = document.querySelector("button");
  const usernameVal = document.querySelector(".username").value;
  const passwordVal = document.querySelector(".password").value;
  if (usernameVal.indexOf("@") >= 0 && passwordVal.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
  } else if (!usernameVal || !passwordVal) {
    loginBtn.style.backgroundColor = "#b2dffc";
  }
});


/* 참고
const inputId = document.querySelector("#login-id");
const inputPassword = document.querySelector("#login-pwd");
const button = document.querySelector(".login-btn");

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    }else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#C4E1FB";
    }
}

function loginSuccess() {
  alert('로그인 성공!');
}

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn); 
*/

