const inputCheck = document.getElementsByClassName("Input");
const loginChange = document.getElementsByClassName("loginButton");
const pwIcon = document.querySelector("i");

// 로그인 체크
function loginChecker() {
  if (inputCheck[0].value.includes("@") && 8 <= inputCheck[1].value.length) {
    setLoginChecker(false, 1, "pointer");
  } else {
    setLoginChecker(true, 0.5, "inherit");
  }
}

function setLoginChecker(tf, opacity, pointer) {
  loginChange[0].disabled = tf;
  loginChange[0].style.opacity = opacity;
  loginChange[0].style.cursor = pointer;
}

//id, pw input에 이벤트 리스너, 로그인 체크 콜백 함수
inputCheck[0].addEventListener("keyup", loginChecker);
inputCheck[1].addEventListener("keyup", loginChecker);

// //조건 완료시 보더 변경
function idChecker() {
  const emailSpell =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (emailSpell.test(inputCheck[0].value)) {
    inputCheck[0].style.borderColor = "#2e8b03";
  } else {
    inputCheck[0].style.borderColor = "#dddddd";
  }
}

function pwChecker() {
  const pwRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;

  if (pwRegexp.test(inputCheck[1].value)) {
    inputCheck[1].style.borderColor = "#2e8b03";
  } else {
    inputCheck[1].style.borderColor = "#dddddd";
  }
}

// id, pw addEventListener 조건 충족 시 보더 변경
inputCheck[0].addEventListener("keyup", idChecker);
inputCheck[1].addEventListener("keyup", pwChecker);

// pwIcon 클릭 시 password 보여주기

function pwVisible(e) {
  if (e.target.className === "fa-regular fa-eye") {
    pwIcon.className = "fa-regular fa-eye-slash";
    inputCheck[1].type = "text";
  } else {
    pwIcon.className = "fa-regular fa-eye";
    inputCheck[1].type = "password";
  }
}

pwIcon.addEventListener("click", pwVisible);
