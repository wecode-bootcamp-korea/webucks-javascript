const formData = document.querySelector(".loginForm");
const loginBtn = document.getElementById("loginBtn");
const idBox = document.getElementById("inputId");
const pwBox = document.getElementById("inputPw");
const viewPwdBtn = document.getElementById("viewPasswordBtn");

let isChecked = [false, false, false];

formData.addEventListener("input", (event) => {
  // 이메일 체크
  const emailCheck =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 패스워드 알파벳, 숫자, 특수문자 조합 8자리 이상 체크
  const passwordCheck =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~`!@#$%\^&*()-+=])[A-Za-z\d~`!@#$%\^&*()-+=]{8,}$/;

  if (event.target.type === "text") {
    if (emailCheck.test(event.target.value) !== true) {
      idBox.style.border = "2px solid red";
    } else {
      idBox.style.border = "2px solid green";
      isChecked[0] = true;
    }
  }
  if (event.target.type === "password") {
    if (passwordCheck.test(event.target.value) !== true) {
      pwBox.style.border = "2px solid red";
    } else {
      pwBox.style.border = "2px solid green";
      isChecked[1] = true;
    }
  }
  activationBtn(isChecked);
});

const activationBtn = (isChecked) => {
  if (isChecked[0] && isChecked[1]) {
    loginBtn.removeAttribute("disabled");
    loginBtn.style.opacity = 1;
  } else {
    loginBtn.setAttribute("disabled", true);
  }
};

loginBtn.addEventListener("click", (event) => {
  document.location.href = "list.html";
});

viewPwdBtn.addEventListener("click", function (event) {
  if (isChecked[2] === false) {
    pwBox.setAttribute("type", "input");
    viewPwdBtn.style.color = "black";
    isChecked[2] = true;
  } else {
    pwBox.setAttribute("type", "password");
    viewPwdBtn.style.color = "#dddddd";
    isChecked[2] = false;
  }
});
