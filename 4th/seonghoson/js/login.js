const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginBtn = document.getElementById("loginBtn");

if (!localStorage.getItem("like")) {
  localStorage.setItem("like", JSON.stringify([]));
}

let isGoodId = false;
let isGoodPw = false;

loginId.addEventListener("input", (e) => {
  if (e.target.value.includes("@")) {
    isGoodId = true;
  } else {
    isGoodId = false;
  }
  canUseBtn();
});

loginPw.addEventListener("input", (e) => {
  if (e.target.value.length >= 8) {
    isGoodPw = true;
  } else {
    isGoodPw = false;
  }
  canUseBtn();
});

loginBtn.addEventListener("mouseover", (e) => {
  console.log(e);
  loginBtn.style.background = "rgb(138 192 237)";
});

loginBtn.addEventListener("mouseleave", (e) => {
  console.log(e);
  loginBtn.style.background = "#61ADED";
});

function canUseBtn() {
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
