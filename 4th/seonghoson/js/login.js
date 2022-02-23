const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginBtn = document.getElementById("loginBtn");
const showBtn = document.getElementById("showBtn");

if (!localStorage.getItem("like")) {
  localStorage.setItem("like", JSON.stringify([]));
}

let isGoodId = false;
let isGoodPw = false;

loginId.addEventListener("input", (e) => {
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
  console.log(e);
  loginBtn.style.background = "rgb(138 192 237)";
});

loginBtn.addEventListener("mouseleave", (e) => {
  console.log(e);
  loginBtn.style.background = "#61ADED";
});

showBtn.addEventListener("click", (e) => {
  if (loginPw.type === "password") {
    loginPw.type = "text";
    showBtn.innerText = "hide";
  } else {
    loginPw.type = "password";
    showBtn.innerText = "show";
  }
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
