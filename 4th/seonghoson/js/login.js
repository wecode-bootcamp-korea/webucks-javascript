const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginBtn = document.getElementById("loginBtn");
const showBtn = document.getElementById("showBtn");

if (!localStorage.getItem("like")) {
  // 첫 접속 시 로컬에 좋아요 저장소가 없을 경우 새로 생성
  localStorage.setItem("like", JSON.stringify([]));
}

// 아이디 패스워드가 활성 변수
let isGoodId = false;
let isGoodPw = false;

loginId.addEventListener("input", (e) => {
  // 로그인 조건 함수
  if (e.target.value.includes("@")) {
    loginId.style.border = "1px solid green";
    loginId.className = "active";
    isGoodId = true;
  } else {
    loginId.style.border = "1px solid #ccc";
    loginId.className = "unactive";
    isGoodId = false;
  }
  canUseBtn();
});

loginPw.addEventListener("input", (e) => {
  // 패스워드 조건 함수
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (reg.test(e.target.value)) {
    loginPw.style.border = "1px solid green";
    loginPw.className = "active";
    isGoodPw = true;
  } else {
    loginPw.style.border = "1px solid #ccc";
    loginPw.className = "unactive";
    isGoodPw = false;
  }
  canUseBtn();
});

loginBtn.addEventListener("mouseover", (e) => {
  loginBtn.style.background = "rgb(138 192 237)";
});

loginBtn.addEventListener("mouseleave", (e) => {
  loginBtn.style.background = "#61ADED";
});

showBtn.addEventListener("click", (e) => {
  // 패스워드 보여주기 함수
  if (loginPw.type === "password") {
    loginPw.type = "text";
    showBtn.innerText = "hide";
  } else {
    loginPw.type = "password";
    showBtn.innerText = "show";
  }
});

function canUseBtn() {
  // 아이디 패스워드 최종 조건함수
  if (isGoodId && isGoodPw) {
    loginBtn.disabled = false;
    loginBtn.style.background = "#61ADED";
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.background = "#add4ea";
    loginBtn.style.cursor = "default";
  }
}
