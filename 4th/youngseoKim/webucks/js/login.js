const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementsByClassName("loginBtn")[0];

const buttonActivate = (e) => {
  const idValue = idInput.value;
  const pwValue = pwInput.value;

  CheckEmail(idValue) && checkPW(pwValue)
    ? setLoginBtn("cursor:pointer", false)
    : setLoginBtn("cursor:defalt", true);

  //아이디 형식 맞으면 border
  CheckEmail(idValue)
    ? (idInput.style.borderColor = "green")
    : (idInput.style.borderColor = "#e3e3e3");
  //비밀번호 형식 맞으면
  checkPW(pwValue)
    ? (pwInput.style.borderColor = "green")
    : (pwInput.style.borderColor = "#e3e3e3");
  //엔터 로그인
  if (e.keyCode === 13 && loginBtn.disabled === false) {
    window.location.href = "list.html";
  }
};

//이메일 체크
function CheckEmail(str) {
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}
//비밀번호 체크
function checkPW(str) {
  const reg_pw =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!reg_pw.test(str)) {
    return false;
  } else {
    return true;
  }
}
//로그인 버튼 활성화
const setLoginBtn = (pointer, disabled, color) => {
  loginBtn.style = pointer;
  loginBtn.disabled = disabled;
};

idInput.addEventListener("keyup", buttonActivate);
pwInput.addEventListener("keyup", buttonActivate);

//비밀번호 보이게 하기
const eye = document.getElementsByClassName("fa-solid")[0];
const pwbox = document.getElementById("pwInput");

eye.addEventListener("click", () => {
  eye.className === "fa-solid fa-eye-slash"
    ? ((eye.className = "fa-solid fa-eye"), (pwbox.type = "text"))
    : ((eye.className = "fa-solid fa-eye-slash"), (pwbox.type = "password"));
});
