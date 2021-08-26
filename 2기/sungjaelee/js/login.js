const loginBtn = document.querySelector(".loginBtn");
const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");
const loginForm = document.querySelector("#loginForm");

console.log("loginForm", loginForm);
console.log("loginForm.action", loginForm.action);
console.log("loginBtn", loginBtn);
console.log("userId", userId);
console.log("userPw", userPw);
console.log("userPw.value.length", userPw.value.length);

let loginReady = false;

function addAtSign() {
  if (userId.value.length === 0) {
    userId.value = "@";
    console.log("userId", userId);
  }
}

function clearUserId() {
  if (userId.value === "@") {
    userId.value = "";
  }
}

function changeBtnColor() {
  //should add regexp logic in the future
  if (
    userId.value[0] === "@" &&
    userId.value.length >= 2 &&
    userPw.value.length >= 8
  ) {
    loginReady = true;
    loginBtn.style.backgroundColor = "#62ADEC";
    loginBtn.style.cursor = "pointer";
  } else {
    loginReady = false;
    loginBtn.style.backgroundColor = "#aed3ea";
    loginBtn.style.cursor = "default";
  }
}

function handleLogin() {
  if (loginReady) {
    loginForm.action = "./list.html";
  }
  console.log("hello");
}

userId.addEventListener("click", addAtSign);
userId.addEventListener("blur", clearUserId);
userId.addEventListener("input", changeBtnColor);
userPw.addEventListener("input", changeBtnColor);
loginBtn.addEventListener("click", handleLogin);
