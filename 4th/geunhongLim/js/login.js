const loginForm = document.querySelector(".login-form-box");
const loginIdInput = document.querySelector(".login-id-input");
const loginPasswordInput = document.querySelector(".login-password-input");
const loginBtn = document.querySelector(".login-form-box button");

//조건에 맞으면 버튼 색 바꾸기
function btnColorChangeHandler() {
  loginIdInput.value.includes("@") && loginPasswordInput.value.length >= 8
    ? (loginBtn.style.opacity = "100%")
    : (loginBtn.style.opacity = "50%");
}

//비활성화 시 버튼을 클릭하면 새로고침 방지
//버튼 클릭
function clickBtnHander(event) {
  event.preventDefault();
  checkBtnColor();
}

//버튼 활성화 체크
function checkBtnColor() {
  if (loginBtn.style.opacity === "1") location.href = "list.html";
}

loginBtn.addEventListener("click", clickBtnHander);
loginForm.addEventListener("keyup", btnColorChangeHandler);
