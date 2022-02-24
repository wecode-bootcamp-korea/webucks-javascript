const $inputId = document.querySelector("#inputId");
const $inputPassword = document.querySelector("#inputPassword");
const $btn = document.querySelector("#btn");

// 로그인 조건 실행 함수
function setLoginBtn(boolean, color) {
  $btn.disabled = boolean;
  $btn.style.backgroundColor = color;
}

function activeBtn() {
  let inputIdValue = $inputId.value;
  let inputPasswordValue = $inputPassword.value;

  inputIdValue.includes("@") && inputPasswordValue.length >= 8
    ? setLoginBtn(false, "#3e98f2")
    : setLoginBtn(true, "#add3ea");
  if (window.event.keyCode === 13) {
    location.href = "list.html";
  }
}

//로그인 버튼 활성화
$inputId.addEventListener("keyup", activeBtn);
$inputPassword.addEventListener("keyup", activeBtn);
