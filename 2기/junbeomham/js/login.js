const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");
const loginBtn = document.querySelector("#loginBtn");
const btnShowHidePw = document.querySelector("#pw-btn");

let validUserId = false;
let validUserPw = false;

/*
    아이디 유효성 체크 메소드 - 조건: 이메일 정규식
*/
function checkValidId(input) {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[0-9a-zA-Z]{2,5}$/i;
  validUserId = input.match(emailRegExp) != null ? true : false;
  if (validUserId) {
    userId.classList.add("active");
  } else {
    userId.classList.remove("active");
  }
  validateLoginBtn();
}

/*
    비밀번호 유효성 체크 메소드 - 조건: 비밀번호 정규식 영어 대소문자, 숫자, 특수문자 하나 이상 포함
*/
function checkValidPw(input) {
  const pwRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  validUserPw = input.match(pwRegExp) != null ? true : false;
  if (validUserPw) {
    userPw.classList.add("active");
  } else {
    userPw.classList.remove("active");
  }
  validateLoginBtn();
}

/*
    아이디와 비밀번호 유효성 체크하여 버튼 ON/OFF
*/
function validateLoginBtn() {
  if (validUserId && validUserPw) {
    loginBtn.removeAttribute("disabled");
    loginBtn.classList.add("able");
  } else {
    loginBtn.setAttribute("disabled", "");
    loginBtn.classList.remove("able");
  }
}

userId.addEventListener("keyup", () => {
  checkValidId(userId.value);
});
userPw.addEventListener("keyup", () => {
  checkValidPw(userPw.value);
});

/*
    로그인 버튼 클릭시 입력된 아이디를 쿠키에 userId로 저장
*/
loginBtn.addEventListener("click", function (e) {
  document.cookie = `userId=${userId.value};`;
});

/*
    비밀번호 입력칸 show, hide 버튼에 따라 비밀번호 보이기, 안 보이기 기능
*/
btnShowHidePw.addEventListener("click", () => {
  if (btnShowHidePw.innerHTML === "show") {
    userPw.setAttribute("type", "text");
    btnShowHidePw.innerHTML = "hide";
    btnShowHidePw.classList.add("hide");
    userPw.focus();
  } else {
    userPw.setAttribute("type", "password");
    btnShowHidePw.innerHTML = "show";
    btnShowHidePw.classList.remove("hide");
    userPw.focus();
  }
});
