// > 1차 시도: 실패...
// a. HTML 태그에 직접 onkeydown="buttonOn()" 적용
// b. input과 button 태그에 각각 다른 class를 부여해 구분

// const inputUserName = document.getElementsByClassName("login-input")[0];
// const inputPassword = document.getElementsByClassName("login-input")[1];
// const inputButton = document.getElementsByClassName("login-button")[0];

// const buttonOn = function() {
//   if (inputUserName.value.includes("@") && inputPassword.value.length >= 8) {
//     inputButton.style.opacity = "1.0";
//     inputButton.setAttribute("onclick", "location.href='#';");
//   } else {
//     inputButton.style.opacity = "0.6";
//   }
// }

// > 2차 시도: 성공!
// a. addEventListener() 함수를 적극적으로 사용
// b. input과 button 태그에 같은 class를 부여해 하나의 배열로 취급

const inputForm = document.querySelector('#form');
const inputUserName = document.getElementsByClassName("login-input")[0];
const inputPassword = document.getElementsByClassName("login-input")[1];
const inputButton = document.getElementsByClassName("login-input")[2];

const verifyForm = function() {
  if ((inputUserName.value.includes("@")) && (inputPassword.value.length >= 8)) {
    inputButton.disabled = false;
    inputButton.style.opacity = "1.0";
    inputForm.action = "list.html";
  } else {
    inputButton.disabled = true;
    inputButton.style.opacity = "0.6";
    inputForm.action = "list.html";
  }
};

inputUserName.addEventListener("keyup", verifyForm);
inputPassword.addEventListener("keyup", verifyForm);